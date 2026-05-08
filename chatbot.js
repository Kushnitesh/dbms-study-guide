// ═══════════════════════════════════════════════════════════════
// PROFESSOR GROQ: AI CHATBOT INTEGRATION
// ═══════════════════════════════════════════════════════════════

const toggleBtn = document.getElementById('chatbot-toggle-btn');
const closeBtn = document.getElementById('chatbot-close-btn');
const chatContainer = document.getElementById('chatbot-container');
const messagesDiv = document.getElementById('chatbot-messages');
const inputField = document.getElementById('chatbot-input');
const sendBtn = document.getElementById('chatbot-send-btn');
const testPrepBtn = document.getElementById('test-prep-btn');

// State Management
let chatState = 'IDLE'; // IDLE, TESTING_SETUP, TESTING_ACTIVE
let messageHistory = [];
const SYSTEM_PROMPT = \`You are a highly experienced Professor of Database Management Systems (DBMS) at Amity University Noida. 
Your goal is to help B.Tech CSE students master DBMS for their university exams and placements.
Always explain concepts using a "Daily-Life Intuition -> Layman Example -> Technical Definition" approach.
Be encouraging but strict about academic correctness.\`;

// Check for API Key
function getApiKey() {
    let key = localStorage.getItem('groq_api_key');
    if (!key) {
        addMessage('sys-msg', '🔑 To use Professor Groq, please paste your Groq API Key below. It will be securely saved in your browser.');
        chatState = 'AWAITING_KEY';
    }
    return key;
}

// Initialize
getApiKey();

// UI Toggles
toggleBtn.addEventListener('click', () => {
    chatContainer.classList.remove('chatbot-hidden');
    toggleBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    chatContainer.classList.add('chatbot-hidden');
    toggleBtn.style.display = 'flex';
});

function addMessage(type, text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = type;
    msgDiv.textContent = text;
    messagesDiv.appendChild(msgDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Handle Test Prep Button
testPrepBtn.addEventListener('click', () => {
    if (!getApiKey()) return;
    chatState = 'TESTING_SETUP';
    addMessage('bot-msg', "Excellent initiative! 🎓 What specific DBMS topic would you like me to test you on today? (e.g., Normalization, SQL Joins, ER Models)");
});

// Handle Send
sendBtn.addEventListener('click', handleSend);
inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
});

async function handleSend() {
    const text = inputField.value.trim();
    if (!text) return;

    inputField.value = '';
    addMessage('user-msg', text);

    if (chatState === 'AWAITING_KEY') {
        if (text.startsWith('gsk_')) {
            localStorage.setItem('groq_api_key', text);
            addMessage('sys-msg', '✅ API Key saved securely! You can now chat with Professor Groq.');
            chatState = 'IDLE';
            addMessage('bot-msg', 'Hello! I am your AI Tutor. How can I help you today?');
        } else {
            addMessage('sys-msg', '❌ Invalid key. Groq API keys usually start with "gsk_". Please try again.');
        }
        return;
    }

    const apiKey = getApiKey();
    if (!apiKey) return;

    // Build the messages array for Groq
    let apiMessages = [
        { role: 'system', content: SYSTEM_PROMPT }
    ];

    if (chatState === 'TESTING_SETUP') {
        apiMessages.push({
            role: 'system',
            content: \`The student has requested a test on the topic: "\${text}". 
            Generate exactly ONE challenging but fair university-level subjective or MCQ question on this topic. 
            Do NOT provide the answer. Wait for the student to answer.\`
        });
        chatState = 'TESTING_ACTIVE';
    } else if (chatState === 'TESTING_ACTIVE') {
        apiMessages = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messageHistory,
            { role: 'user', content: text },
            { role: 'system', content: "Evaluate the student's answer above strictly but fairly as a Professor. Correct any mistakes, assign a conceptual score (out of 10), and provide the ideal answer." }
        ];
        chatState = 'IDLE'; // Reset after evaluation
    } else {
        apiMessages = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messageHistory,
            { role: 'user', content: text }
        ];
    }

    // Add thinking indicator
    const thinkingId = 'thinking-' + Date.now();
    const msgDiv = document.createElement('div');
    msgDiv.className = 'bot-msg';
    msgDiv.id = thinkingId;
    msgDiv.innerHTML = '<i>Professor is thinking...</i>';
    messagesDiv.appendChild(msgDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': \`Bearer \${apiKey}\`
            },
            body: JSON.stringify({
                model: 'llama3-8b-8192',
                messages: apiMessages,
                temperature: 0.7,
                max_tokens: 1024
            })
        });

        const data = await response.json();
        document.getElementById(thinkingId).remove();

        if (data.error) {
            addMessage('sys-msg', 'API Error: ' + data.error.message);
            if(data.error.message.includes('key')) {
                localStorage.removeItem('groq_api_key');
                chatState = 'AWAITING_KEY';
            }
            return;
        }

        const botReply = data.choices[0].message.content;
        addMessage('bot-msg', botReply);

        // Save to history
        if (chatState !== 'TESTING_ACTIVE' && chatState !== 'TESTING_SETUP') {
            messageHistory.push({ role: 'user', content: text });
            messageHistory.push({ role: 'assistant', content: botReply });
            // Keep history short to save tokens
            if (messageHistory.length > 10) messageHistory = messageHistory.slice(-10);
        }

    } catch (error) {
        document.getElementById(thinkingId).remove();
        addMessage('sys-msg', 'Network error. Please check your connection.');
        console.error(error);
    }
}
