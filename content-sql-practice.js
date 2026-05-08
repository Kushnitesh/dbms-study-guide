// ═══════════════════════════════════════════════════════════════
// LIVE SQL PRACTICE SIMULATOR
// ═══════════════════════════════════════════════════════════════

const SQL_QUESTIONS = [
    {
        id: 0,
        title: "1. Basic Retrieval",
        schema: "Table: Employees (EmpID, Name, Department, Salary)",
        task: "Write a query to retrieve all columns for all employees.",
        solution_regex: /^\\s*SELECT\\s+\\*\\s+FROM\\s+Employees\\s*;?\\s*$/i,
        hint: "Use the wildcard character (*) to select all columns."
    },
    {
        id: 1,
        title: "2. Filtering Data",
        schema: "Table: Students (RollNo, Name, Branch, CGPA)",
        task: "Write a query to find the 'Name' of all students in the 'CSE' branch.",
        solution_regex: /^\\s*SELECT\\s+Name\\s+FROM\\s+Students\\s+WHERE\\s+Branch\\s*=\\s*'CSE'\\s*;?\\s*$/i,
        hint: "Use the WHERE clause. Don't forget single quotes around 'CSE'."
    },
    {
        id: 2,
        title: "3. Sorting Results",
        schema: "Table: Products (ProductID, ProductName, Price)",
        task: "Write a query to fetch all 'ProductName' and 'Price', ordered by 'Price' in descending order.",
        solution_regex: /^\\s*SELECT\\s+ProductName\\s*,\\s*Price\\s+FROM\\s+Products\\s+ORDER\\s+BY\\s+Price\\s+DESC\\s*;?\\s*$/i,
        hint: "Use ORDER BY column_name DESC."
    },
    {
        id: 3,
        title: "4. Aggregate Functions",
        schema: "Table: Orders (OrderID, CustomerID, Amount)",
        task: "Write a query to find the total sum of all order amounts. Use SUM(Amount).",
        solution_regex: /^\\s*SELECT\\s+SUM\\(\\s*Amount\\s*\\)\\s+FROM\\s+Orders\\s*;?\\s*$/i,
        hint: "Use the SUM() aggregate function."
    },
    {
        id: 4,
        title: "5. Pattern Matching (LIKE)",
        schema: "Table: Users (UserID, Username, Email)",
        task: "Write a query to find all 'Username's where the 'Email' ends with '@gmail.com'.",
        solution_regex: /^\\s*SELECT\\s+Username\\s+FROM\\s+Users\\s+WHERE\\s+Email\\s+LIKE\\s*'%@gmail\\.com'\\s*;?\\s*$/i,
        hint: "Use the LIKE operator with the '%' wildcard before the domain."
    }
];

let sqlHTML = `
<h1>👨‍💻 Live SQL Simulator</h1>
<p class="subtitle">Type your SQL queries below and hit Run to check if they are correct!</p>
`;

SQL_QUESTIONS.forEach((q, index) => {
    sqlHTML += `
    <div class="card sql-card">
        <div class="card-title">${q.title}</div>
        <div class="sql-schema"><strong>Schema:</strong> <code>${q.schema}</code></div>
        <div class="sql-task"><strong>Task:</strong> ${q.task}</div>
        
        <div class="sql-editor-container">
            <textarea id="sql-input-${index}" class="sql-textarea" placeholder="Type your SQL query here... e.g., SELECT * FROM Table;"></textarea>
            <div class="sql-actions">
                <button class="sql-run-btn" onclick="checkSQL(${index})">▶ Run Query</button>
                <button class="sql-hint-btn" onclick="showSQLHint(${index})">💡 Hint</button>
            </div>
        </div>
        
        <div id="sql-feedback-${index}" class="sql-feedback"></div>
    </div>
    `;
});

sqlHTML += `<button class="mark-done-btn" onclick="markDone('sql-practice')">✅ Mark Practice Complete</button>`;

SECTIONS['sql-practice'] = sqlHTML;

// Expose functions globally for the onclick handlers
window.checkSQL = function(index) {
    const inputEl = document.getElementById(\`sql-input-\${index}\`);
    const feedbackEl = document.getElementById(\`sql-feedback-\${index}\`);
    const query = inputEl.value.trim();
    
    if (!query) {
        feedbackEl.innerHTML = "⚠️ Please enter a query first.";
        feedbackEl.className = "sql-feedback warning-bg";
        feedbackEl.style.display = "block";
        return;
    }

    const question = SQL_QUESTIONS[index];
    const isCorrect = question.solution_regex.test(query);

    if (isCorrect) {
        feedbackEl.innerHTML = "✅ <strong>Correct!</strong> Your query syntax is perfect.";
        feedbackEl.className = "sql-feedback correct-bg";
    } else {
        feedbackEl.innerHTML = "❌ <strong>Incorrect.</strong> Check your syntax, table names, and clauses.";
        feedbackEl.className = "sql-feedback wrong-bg";
    }
    feedbackEl.style.display = "block";
};

window.showSQLHint = function(index) {
    const feedbackEl = document.getElementById(\`sql-feedback-\${index}\`);
    feedbackEl.innerHTML = "💡 <strong>Hint:</strong> " + SQL_QUESTIONS[index].hint;
    feedbackEl.className = "sql-feedback hint-bg";
    feedbackEl.style.display = "block";
};
