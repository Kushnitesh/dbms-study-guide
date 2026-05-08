// ═══════════════════════════════════════════════════════════════
// PHASE 4: Relational Algebra
// ═══════════════════════════════════════════════════════════════

SECTIONS['rel-algebra'] = `
<h1>📐 Relational Algebra & Calculus</h1>
<p class="subtitle">Unit II — The mathematical foundation behind SQL queries</p>

<h2><span class="emoji">🎬</span> Why learn Math if we have SQL?</h2>
<div class="analogy">
    <div class="analogy-label">🎯 Layman Analogy</div>
    <p>Think of SQL as driving a car. You press the accelerator, and the car moves. You don't need to know how the engine works to drive.</p>
    <p>But a DBMS is the mechanic. It needs to know EXACTLY how the engine works to make it run faster. <strong>Relational Algebra is the internal mathematical language that the DBMS engine uses to execute your SQL queries efficiently.</strong> When you write a SQL query, the DBMS translates it into Relational Algebra to figure out the fastest way to fetch the data!</p>
</div>

<div class="card">
    <div class="card-title">📖 Technical Definition</div>
    <p><strong>Relational Algebra</strong> is a procedural query language. It takes one or two relations (tables) as input and produces a new relation as output. It describes a step-by-step procedure to compute the desired answer.</p>
    <p><strong>Relational Calculus</strong>, on the other hand, is a non-procedural language (like SQL). It describes <em>what</em> data is needed without specifying <em>how</em> to get it.</p>
</div>

<hr>

<h2><span class="emoji">🧮</span> The Core Operations (Mapped to SQL)</h2>

<h3>1. Selection Operation (σ - Sigma)</h3>
<p><strong>What it does:</strong> Selects specific ROWS (tuples) from a table that satisfy a given condition.</p>
<p><strong>SQL Equivalent:</strong> The <span class="inline-code">WHERE</span> clause.</p>
<p><strong>Mathematical Syntax:</strong> σ<sub>condition</sub>(Table_Name)</p>
<div class="example">
    <p><em>Example:</em> Find all students in the CSE branch.</p>
    <p><strong>Algebra:</strong> σ<sub>Branch='CSE'</sub>(STUDENT)</p>
    <p><strong>SQL:</strong> <span class="inline-code">SELECT * FROM STUDENT WHERE Branch='CSE';</span></p>
</div>

<h3>2. Projection Operation (π - Pi)</h3>
<p><strong>What it does:</strong> Selects specific COLUMNS (attributes) from a table. It also automatically removes duplicate rows from the output!</p>
<p><strong>SQL Equivalent:</strong> The <span class="inline-code">SELECT column1, column2</span> clause.</p>
<p><strong>Mathematical Syntax:</strong> π<sub>column_list</sub>(Table_Name)</p>
<div class="example">
    <p><em>Example:</em> Show only the Names and CGPA of all students.</p>
    <p><strong>Algebra:</strong> π<sub>Name, CGPA</sub>(STUDENT)</p>
    <p><strong>SQL:</strong> <span class="inline-code">SELECT DISTINCT Name, CGPA FROM STUDENT;</span></p>
</div>

<h3>3. Rename Operation (ρ - Rho)</h3>
<p><strong>What it does:</strong> Renames the output relation or its attributes. Very useful when a query is extremely long or when joining a table to itself.</p>
<p><strong>SQL Equivalent:</strong> The <span class="inline-code">AS</span> keyword (Aliasing).</p>
<p><strong>Mathematical Syntax:</strong> ρ<sub>New_Name</sub>(Old_Name)</p>

<hr>

<h2><span class="emoji">🔗</span> Set Operations</h2>
<p>These operations combine the results of two queries. Note: The two tables MUST be "Union Compatible" (same number of columns, and corresponding columns must have the same data type).</p>

<div class="card">
    <table>
        <tr>
            <th>Operation</th>
            <th>Symbol</th>
            <th>What it does</th>
            <th>SQL Equivalent</th>
        </tr>
        <tr>
            <td><strong>Union</strong></td>
            <td>∪</td>
            <td>Combines rows from A and B, removing duplicates.</td>
            <td><span class="inline-code">SELECT * FROM A UNION SELECT * FROM B</span></td>
        </tr>
        <tr>
            <td><strong>Intersection</strong></td>
            <td>∩</td>
            <td>Returns only the rows that are present in BOTH A and B.</td>
            <td><span class="inline-code">INTERSECT</span> (or using INNER JOIN)</td>
        </tr>
        <tr>
            <td><strong>Set Difference</strong></td>
            <td>−</td>
            <td>Returns rows present in A but NOT in B (A minus B).</td>
            <td><span class="inline-code">MINUS</span> or <span class="inline-code">EXCEPT</span></td>
        </tr>
        <tr>
            <td><strong>Cartesian Product</strong></td>
            <td>×</td>
            <td>Combines EVERY row of A with EVERY row of B. (If A has 3 rows and B has 4 rows, result has 12 rows).</td>
            <td><span class="inline-code">CROSS JOIN</span></td>
        </tr>
    </table>
</div>

<hr>

<h2><span class="emoji">🧩</span> Advanced Operations: Join & Division</h2>

<h3>Natural Join (⋈)</h3>
<p>A Cartesian Product followed by a Selection. It automatically joins two tables based on the column that has the exact same name in both tables, and keeps only one copy of that common column.</p>
<p><strong>Algebra:</strong> STUDENT ⋈ MARKS</p>

<h3>Division Operation (÷)</h3>
<p>This is the most complex operation, typically used to answer queries containing the word "ALL".</p>
<div class="example">
    <p><strong>Classic Example:</strong> "Find the name of the student who has completed ALL the courses offered by the CSE department."</p>
    <p>If Table A has (Student, Course) and Table B has (Course) representing all CSE courses.</p>
    <p><strong>Algebra:</strong> A ÷ B will return only the students who are mapped to EVERY course present in B.</p>
</div>

<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">🎓 University Answer: Relational Algebra vs Calculus (5 marks) <span class="arrow">▼</span></div>
    <div class="acc-body">
        <p><strong>Relational Algebra:</strong></p>
        <ul>
            <li>It is a <strong>procedural</strong> query language.</li>
            <li>It tells the system <em>WHAT</em> data is needed and exactly <em>HOW</em> to fetch it (step-by-step mathematical operations).</li>
            <li>Core operators: σ (Select), π (Project), ∪ (Union), − (Set Difference), × (Cartesian Product).</li>
        </ul>
        <p><strong>Relational Calculus:</strong></p>
        <ul>
            <li>It is a <strong>declarative (non-procedural)</strong> query language.</li>
            <li>It tells the system <em>WHAT</em> data is needed, leaving the system to figure out <em>HOW</em> to fetch it.</li>
            <li>Divided into Tuple Relational Calculus (TRC) and Domain Relational Calculus (DRC).</li>
            <li>SQL is highly based on Relational Calculus.</li>
        </ul>
    </div>
</div>

<button class="mark-done-btn" onclick="markDone('rel-algebra')">✅ Mark Section Complete</button>
`;
