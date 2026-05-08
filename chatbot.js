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
const SYSTEM_PROMPT = `You are an energetic, fun, and highly experienced Professor of Database Management Systems (DBMS) at Amity University Noida. 
You help B.Tech CSE students master DBMS. You can solve ANY problem, write SQL, and explain concepts.
CRITICAL RULES FOR YOUR RESPONSES:
1. ULTRA-CONCISE: Never write long, boring essays or massive paragraphs. Keep it punchy!
2. ENJOYABLE & RELATABLE: Use modern analogies (Netflix, Instagram, Swiggy) instead of boring textbook examples. Use emojis!
3. BE INTERACTIVE: Don't give them a wall of text. Explain the core concept quickly, and then ask a small follow-up question to test if they understood.
4. STRUCTURE: Use "Daily-Life Intuition -> Quick Example -> Technical Definition", but keep each section to 1-2 short sentences.`;

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

    // Erase previous data on close
    messagesDiv.innerHTML = '';
    messageHistory = [];
    chatState = 'IDLE';

    // Re-initialize default message
    if (!localStorage.getItem('groq_api_key')) {
        addMessage('sys-msg', '🔑 To use Professor Groq, please paste your Groq API Key below. It will be securely saved in your browser.');
        chatState = 'AWAITING_KEY';
    } else {
        addMessage('bot-msg', 'Hello! I am your AI Tutor. How can I help you today?');
    }
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
            content: `The student has requested a test on the topic: "${text}". 
            Generate exactly ONE challenging but fair university-level subjective or MCQ question on this topic. 
            Do NOT provide the answer yet. Wait for the student to answer.`
        });
        chatState = 'TESTING_ACTIVE';
    } else if (chatState === 'TESTING_ACTIVE') {
        apiMessages = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messageHistory,
            { role: 'user', content: text },
            { role: 'system', content: "IF the student provided an answer to your test question, evaluate it strictly but fairly as a Professor, correct any mistakes, assign a conceptual score (out of 10), and provide the ideal answer. IF the student instead asked for the answer, asked for help, or asked you to explain it, DO NOT evaluate them. Instead, fully explain the topic and give them the answer step-by-step." }
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
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
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

// ═══════════════════════════════════════════════════════════════
// DRAG FUNCTIONALITY
// ═══════════════════════════════════════════════════════════════
const chatHeader = document.querySelector('.chatbot-header');

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

chatHeader.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragEnd);
document.addEventListener("mousemove", drag);

// Also support touch screens
chatHeader.addEventListener("touchstart", dragStart, { passive: true });
document.addEventListener("touchend", dragEnd);
document.addEventListener("touchmove", drag, { passive: true });

function dragStart(e) {
    if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
    } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
    }

    if (e.target === chatHeader || e.target.closest('.chatbot-header')) {
        // Prevent dragging when clicking the close button
        if (e.target.id === 'chatbot-close-btn') return;
        isDragging = true;
        // Disable transition while dragging so it doesn't lag
        chatContainer.style.transition = 'none';
    }
}

function dragEnd() {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
    // Restore transition
    chatContainer.style.transition = 'opacity 0.3s, transform 0.3s, visibility 0.3s';
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();

        if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, chatContainer);
    }
}

function setTranslate(xPos, yPos, el) {
    // Override the CSS bottom/right so translate works properly relative to the initial position
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

