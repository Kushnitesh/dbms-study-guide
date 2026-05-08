// ═══════════════════════════════════════════════════════════════
// PHASE 3: Advanced SQL & Joins
// ═══════════════════════════════════════════════════════════════

SECTIONS['sql-advanced'] = `
<h1>🚀 Advanced SQL & Joins</h1>
<p class="subtitle">Unit II — Connecting the dots and extracting insights</p>

<h2><span class="emoji">🎬</span> Why do we need Joins?</h2>
<div class="analogy">
    <div class="analogy-label">🎯 Daily-Life Intuition</div>
    <p>Imagine Amity University stores your <strong>Personal Details</strong> (Name, Phone) in one file, and your <strong>Marks</strong> in another file. If your parents come to PTM and ask, "What are Rahul's marks?", the professor has to look at the first file to find Rahul's Roll No, then open the second file, find that Roll No, and read the marks.</p>
    <p><strong>A JOIN does exactly this automatically!</strong> It links two tables together based on a common column (like Roll No) to give you a combined view.</p>
</div>

<h2><span class="emoji">🔗</span> The Types of Joins (Visualized)</h2>

<p>Consider two tables:</p>
<div class="compare-grid">
    <div class="compare-card">
        <h4>STUDENTS Table (Left)</h4>
        <pre>
Roll | Name
-----+-------
 1   | Amit
 2   | Neha
 3   | Raj
        </pre>
    </div>
    <div class="compare-card">
        <h4>MARKS Table (Right)</h4>
        <pre>
Roll | Score
-----+-------
 2   | 95
 3   | 88
 4   | 70
        </pre>
    </div>
</div>

<h3>1. INNER JOIN (The Intersection)</h3>
<p>Returns ONLY the rows where there is a match in BOTH tables.</p>
<div class="diagram-box">
    <pre>
Query: 
SELECT Students.Name, Marks.Score
FROM Students
INNER JOIN Marks ON Students.Roll = Marks.Roll;

Result:
Name | Score
-----+-------
Neha | 95     (Roll 2 matches)
Raj  | 88     (Roll 3 matches)

(Amit is excluded because he has no marks. Roll 4 is excluded because no name exists).
    </pre>
</div>

<h3>2. LEFT JOIN (The "Keep Everything on the Left" Join)</h3>
<p>Returns ALL rows from the Left table, and the matched rows from the Right table. If no match, it puts NULL.</p>
<div class="diagram-box">
    <pre>
Query: 
SELECT Students.Name, Marks.Score
FROM Students
LEFT JOIN Marks ON Students.Roll = Marks.Roll;

Result:
Name | Score
-----+-------
Amit | NULL   (Amit kept! No marks found)
Neha | 95
Raj  | 88
    </pre>
</div>

<h3>3. RIGHT JOIN (The "Keep Everything on the Right" Join)</h3>
<p>Returns ALL rows from the Right table, and matched rows from the Left. If no match, it puts NULL.</p>
<div class="diagram-box">
    <pre>
Query: 
SELECT Students.Name, Marks.Score
FROM Students
RIGHT JOIN Marks ON Students.Roll = Marks.Roll;

Result:
Name | Score
-----+-------
Neha | 95
Raj  | 88
NULL | 70     (Roll 4 kept! No name found)
    </pre>
</div>

<h3>4. FULL OUTER JOIN (The "Keep Everything" Join)</h3>
<p>Combines Left Join and Right Join. Returns all rows from both tables. Puts NULL where there is no match.</p>
<div class="diagram-box">
    <pre>
Result:
Name | Score
-----+-------
Amit | NULL
Neha | 95
Raj  | 88
NULL | 70
    </pre>
</div>

<hr>

<h2><span class="emoji">📊</span> Aggregate Functions & GROUP BY</h2>
<p>Aggregate functions perform a calculation on a set of values and return a single value.</p>
<ul>
    <li><span class="inline-code">COUNT()</span>: Number of rows.</li>
    <li><span class="inline-code">SUM()</span>: Total sum of a numeric column.</li>
    <li><span class="inline-code">AVG()</span>: Average value.</li>
    <li><span class="inline-code">MAX() / MIN()</span>: Highest or lowest value.</li>
</ul>

<div class="example">
    <div class="example-label">💡 Real-World Scenario: Department Budgets</div>
    <p>Suppose you have an Employee table and you want to know the total salary paid by EACH department.</p>
    <pre>
SELECT Department, SUM(Salary) AS Total_Budget
FROM Employee
GROUP BY Department
HAVING SUM(Salary) > 100000;
    </pre>
    <p><strong>Professor's Tip:</strong> Use <span class="inline-code">WHERE</span> to filter individual rows BEFORE grouping. Use <span class="inline-code">HAVING</span> to filter the grouped results AFTER grouping!</p>
</div>

<hr>

<h2><span class="emoji">🕵️</span> Subqueries (Nested Queries)</h2>
<p>A query inside a query. The inner query runs first, and its result is passed to the outer query.</p>

<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">💻 LeetCode Style Problem: "Find the Highest Earner" <span class="arrow">▼</span></div>
    <div class="acc-body">
        <p><strong>Task:</strong> Find the name of the employee who has the highest salary.</p>
        <p><strong>Wrong Approach:</strong> <span class="inline-code">SELECT Name FROM Employee WHERE Salary = MAX(Salary);</span> (You cannot use Aggregate functions in a WHERE clause!)</p>
        <p><strong>Correct Approach (Subquery):</strong></p>
        <pre>
SELECT Name 
FROM Employee 
WHERE Salary = (
    SELECT MAX(Salary) FROM Employee
);
        </pre>
        <p><strong>How it works internally:</strong> DBMS runs the inner query first, let's say it returns 150000. Then it runs the outer query: <span class="inline-code">SELECT Name FROM Employee WHERE Salary = 150000;</span></p>
    </div>
</div>

<hr>

<h2><span class="emoji">🖼️</span> Views and Indexes</h2>

<div class="card">
    <div class="card-title">👁️ Views (Virtual Tables)</div>
    <p>A View is a virtual table based on the result-set of an SQL statement. It doesn't store data itself; it just saves the complex query.</p>
    <p><strong>Why use it?</strong> Security (hide salary columns from junior HRs) and Simplicity (hide a complex 5-table join behind a simple view name).</p>
    <pre>
CREATE VIEW Public_Student_Info AS
SELECT Roll, Name, Branch FROM Students;  -- Hidden the CGPA and Phone columns!
    </pre>
</div>

<div class="card">
    <div class="card-title">⚡ Indexes (Speed Boosters)</div>
    <p>An Index is a data structure (usually a B-Tree) that improves the speed of data retrieval operations on a table at the cost of additional storage space and slower INSERT/UPDATE operations.</p>
    <p><strong>Analogy:</strong> The index at the back of a textbook. Instead of flipping through 500 pages to find "Normalization", you check the index, see it's on page 240, and jump straight there.</p>
    <pre>
CREATE INDEX idx_student_name ON Students(Name);
    </pre>
</div>

<hr>

<h2><span class="emoji">🤖</span> Procedures in PL/SQL</h2>
<div class="analogy">
    <div class="analogy-label">🎯 Automation in the Real World</div>
    <p>Imagine a Bank Manager who has to deduct $10 monthly maintenance fee from 50,000 accounts. Writing 50,000 UPDATE queries manually is insane. Instead, they write a <strong>Stored Procedure</strong> — a block of code (like a function in Java/C++) saved inside the database that can use loops, IF-ELSE conditions, and variables to automate this task.</p>
</div>

<pre>
-- Creating a Procedure
CREATE PROCEDURE Deduct_Fee (IN fee_amount INT)
BEGIN
    UPDATE Accounts SET Balance = Balance - fee_amount;
    COMMIT;
END;

-- Executing it
CALL Deduct_Fee(10);
</pre>

<button class="mark-done-btn" onclick="markDone('sql-advanced')">✅ Mark Section Complete</button>
`;
