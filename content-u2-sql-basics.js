// ═══════════════════════════════════════════════════════════════
// PHASE 2: SQL Basics & DML
// ═══════════════════════════════════════════════════════════════

SECTIONS['sql-basics'] = `
<h1>💻 SQL Basics & DML</h1>
<p class="subtitle">Unit II — Speaking the language of the database</p>

<h2><span class="emoji">🎬</span> Introduction to SQL</h2>
<div class="analogy">
    <div class="analogy-label">🎯 Layman Analogy</div>
    <p>Imagine you are dining at a fancy restaurant. You can't just walk into the kitchen and grab the food yourself. You have to speak to the <strong>Waiter</strong>. You tell the waiter what you want (e.g., "Get me 1 Pizza"), and the waiter fetches it from the kitchen.</p>
    <p>In the DBMS world: You are the User, the Kitchen is the Database, and <strong>SQL is the language you use to speak to the Waiter!</strong></p>
</div>

<div class="card">
    <div class="card-title">📖 Technical Definition</div>
    <p><strong>SQL (Structured Query Language)</strong> is the standard declarative language used to communicate with Relational Database Management Systems (RDBMS) like MySQL, Oracle, and PostgreSQL. It is used to store, manipulate, and retrieve data.</p>
</div>

<h3>Characteristics & Advantages of SQL</h3>
<ul>
    <li><strong>Declarative Language:</strong> You tell the database <em>WHAT</em> to do (e.g., "Give me all CSE students"), not <em>HOW</em> to do it. The DBMS figures out the internal algorithm.</li>
    <li><strong>Standardized:</strong> Accepted by ANSI and ISO. If you learn SQL, you can work on almost any major database.</li>
    <li><strong>Highly Powerful:</strong> Can retrieve 1 specific record out of 100 million in milliseconds.</li>
    <li><strong>Client-Server Architecture:</strong> Allows multiple users to query a central database simultaneously.</li>
</ul>

<hr>

<h2><span class="emoji">🛠️</span> Types of SQL Commands</h2>
<p>SQL is broadly divided into 4 sub-languages (You MUST memorize this for exams and interviews!)</p>

<div class="card">
    <table>
        <tr>
            <th>Category</th>
            <th>Full Form</th>
            <th>Purpose</th>
            <th>Key Commands</th>
        </tr>
        <tr>
            <td><strong>DDL</strong></td>
            <td>Data Definition Language</td>
            <td>Modifies the <em>structure/schema</em> of the database (the tables).</td>
            <td><span class="inline-code">CREATE, ALTER, DROP, TRUNCATE</span></td>
        </tr>
        <tr>
            <td><strong>DML</strong></td>
            <td>Data Manipulation Language</td>
            <td>Modifies the <em>actual data</em> inside the tables.</td>
            <td><span class="inline-code">INSERT, UPDATE, DELETE</span></td>
        </tr>
        <tr>
            <td><strong>DQL</strong></td>
            <td>Data Query Language</td>
            <td>Retrieves data (often grouped under DML, but conceptually distinct).</td>
            <td><span class="inline-code">SELECT</span></td>
        </tr>
        <tr>
            <td><strong>DCL</strong></td>
            <td>Data Control Language</td>
            <td>Handles security and permissions.</td>
            <td><span class="inline-code">GRANT, REVOKE</span></td>
        </tr>
        <tr>
            <td><strong>TCL</strong></td>
            <td>Transaction Control Language</td>
            <td>Manages transactions (the "Atomicity" part).</td>
            <td><span class="inline-code">COMMIT, ROLLBACK, SAVEPOINT</span></td>
        </tr>
    </table>
</div>

<div class="danger">
    <div class="danger-label">❌ Common Mistakes</div>
    <p>1. Confusing <strong>DROP</strong> and <strong>DELETE</strong>. <br>
    - <span class="inline-code">DELETE</span> removes rows (DML). You can restore them if you haven't committed.<br>
    - <span class="inline-code">DROP</span> destroys the entire table structure (DDL). It's permanent! "Drop the table!"</p>
    <p>2. Confusing <strong>DELETE</strong> and <strong>TRUNCATE</strong>. <br>
    - <span class="inline-code">TRUNCATE</span> is a DDL command. It empties the table super fast by deleting the file structure and recreating it. You cannot rollback a TRUNCATE.</p>
</div>

<hr>

<h2><span class="emoji">🏷️</span> Data Types & Operators in SQL</h2>

<h3>Common Data Types</h3>
<ul>
    <li><strong>INT:</strong> Whole numbers (e.g., Roll No, Age)</li>
    <li><strong>FLOAT / DECIMAL:</strong> Decimal numbers (e.g., CGPA, Salary)</li>
    <li><strong>VARCHAR(n):</strong> Variable-length string. If you set VARCHAR(50) but only use 5 chars, it saves space. (e.g., Name, Email)</li>
    <li><strong>CHAR(n):</strong> Fixed-length string. Useful for fixed things like Gender 'M'/'F' or 'Y'/'N'.</li>
    <li><strong>DATE:</strong> Format is usually YYYY-MM-DD.</li>
</ul>

<h3>SQL Operators</h3>
<div class="card">
    <p><strong>Arithmetic:</strong> <span class="inline-code">+, -, *, /</span></p>
    <p><strong>Comparison:</strong> <span class="inline-code">=, >, <, >=, <=, <> or !=</span></p>
    <p><strong>Logical:</strong> <span class="inline-code">AND, OR, NOT</span></p>
    <p><strong>Special Operators:</strong></p>
    <ul>
        <li><span class="inline-code">BETWEEN x AND y</span>: Inclusive range. (e.g., <span class="inline-code">Age BETWEEN 18 AND 22</span>)</li>
        <li><span class="inline-code">IN (val1, val2)</span>: Matches any value in the list. (e.g., <span class="inline-code">Branch IN ('CSE', 'ECE')</span>)</li>
        <li><span class="inline-code">LIKE '%pattern'</span>: Pattern matching. '%' means 0 or more chars. '_' means exactly 1 char.</li>
        <li><span class="inline-code">IS NULL</span>: Checks for empty values. You CANNOT use <span class="inline-code">= NULL</span>.</li>
    </ul>
</div>

<hr>

<h2><span class="emoji">⚡</span> DML Operations (Insert, Update, Delete)</h2>

<div class="example">
    <div class="example-label">🎓 GeeksforGeeks Style Practice: The Student Table</div>
    <p>Let's build and manipulate a database!</p>

    <h4>1. CREATE (DDL) — Making the skeleton</h4>
<pre>
CREATE TABLE Students (
    Roll_No INT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Branch VARCHAR(10),
    CGPA FLOAT
);
</pre>

    <h4>2. INSERT (DML) — Adding data</h4>
<pre>
-- Method 1: Specifying columns (Best practice)
INSERT INTO Students (Roll_No, Name, Branch, CGPA) 
VALUES (101, 'Rahul', 'CSE', 8.5);

-- Method 2: Without columns (Must match exact order)
INSERT INTO Students 
VALUES (102, 'Priya', 'ECE', 9.2);

-- Method 3: Multiple rows at once
INSERT INTO Students (Roll_No, Name, Branch, CGPA) 
VALUES 
(103, 'Amit', 'CSE', 7.8),
(104, 'Neha', 'ME', 8.9);
</pre>

    <h4>3. UPDATE (DML) — Modifying data</h4>
    <p><em>Professor's Warning: NEVER forget the WHERE clause in an UPDATE! If you do, it updates EVERY row in the table!</em></p>
<pre>
-- Rahul studied hard and improved his CGPA!
UPDATE Students 
SET CGPA = 9.0 
WHERE Roll_No = 101;

-- Give all CSE students a 0.5 bonus!
UPDATE Students 
SET CGPA = CGPA + 0.5 
WHERE Branch = 'CSE';
</pre>

    <h4>4. DELETE (DML) — Removing data</h4>
<pre>
-- Amit drops out of college
DELETE FROM Students 
WHERE Roll_No = 103;

-- DANGER: This deletes ALL students! (Table structure remains)
DELETE FROM Students;
</pre>
</div>

<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">💻 HackerRank Challenge: "Find the Mistake" <span class="arrow">▼</span></div>
    <div class="acc-body">
        <p><strong>Scenario:</strong> You are tasked with deleting all students who have a NULL CGPA.</p>
        <p><strong>Intern's Query:</strong> <span class="inline-code">DELETE FROM Students WHERE CGPA = NULL;</span></p>
        <p><strong>What's the mistake?</strong></p>
        <p><strong>Answer:</strong> In SQL, you cannot use the standard <span class="inline-code">=</span> operator to check for NULL. Why? Because NULL means "unknown", and mathematically, Unknown = Unknown is not True; it is also Unknown. The query will run but delete exactly zero rows.</p>
        <p><strong>Correct Query:</strong> <span class="inline-code">DELETE FROM Students WHERE CGPA IS NULL;</span></p>
    </div>
</div>

<button class="mark-done-btn" onclick="markDone('sql-basics')">✅ Mark Section Complete</button>
`;
