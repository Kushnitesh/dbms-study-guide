// ═══════════════════════════════════════════════════════════════
// UNIT II: DESIGN & MANIPULATION
// PHASE 1: Functional Dependencies & Normalization
// ═══════════════════════════════════════════════════════════════

SECTIONS['func-dep'] = `
<h1>🎯 Functional Dependencies (FDs)</h1>
<p class="subtitle">Unit II — The foundation of database design and normalization</p>

<h2><span class="emoji">🎬</span> The "Who Dictates Whom" Rule</h2>
<div class="analogy">
    <div class="analogy-label">🎯 Daily-Life Intuition</div>
    <p>Imagine a typical Amity classroom. If I know your <strong>Enrollment Number</strong>, I can definitely find out your <strong>Name</strong>. Why? Because an enrollment number is unique to one student. But if I only know your <em>Name</em> (e.g., "Rahul"), I can't uniquely identify your <em>Enrollment Number</em> because there might be 5 Rahuls in the class.</p>
    <p>In database terms: <strong>Enrollment Number functionally determines Name.</strong></p>
</div>

<div class="card">
    <div class="card-title">📖 Technical Definition</div>
    <p>A <strong>Functional Dependency (FD)</strong> is a relationship between two attributes, typically between the Primary Key and other non-key attributes within a table. It is denoted as <strong>X → Y</strong>.</p>
    <p>This means: "Attribute X functionally determines Attribute Y", or "Attribute Y is functionally dependent on Attribute X".</p>
    <ul>
        <li><strong>X (Determinant):</strong> The attribute on the left side that dictates the value.</li>
        <li><strong>Y (Dependent):</strong> The attribute on the right side whose value is determined.</li>
    </ul>
</div>

<h2><span class="emoji">📊</span> Visualizing Dependencies</h2>
<p>Let's look at a poorly designed Student table:</p>
<div class="diagram-box">
<pre>
Table: STUDENT_RECORD
┌──────────┬────────┬──────────┬───────────┐
│ Roll_No  │  Name  │  Branch  │ HOD_Name  │
├──────────┼────────┼──────────┼───────────┤
│   101    │ Nitesh │   CSE    │ Dr. Singh │
│   102    │ Priya  │   ECE    │ Dr. Verma │
│   103    │ Rahul  │   CSE    │ Dr. Singh │
└──────────┴────────┴──────────┴───────────┘
</pre>
</div>

<h3>Valid Functional Dependencies in this table:</h3>
<ul>
    <li><span class="inline-code">Roll_No → Name</span> (If I know Roll 101, I know it's Nitesh)</li>
    <li><span class="inline-code">Roll_No → Branch</span> (If I know Roll 101, I know he is in CSE)</li>
    <li><span class="inline-code">Branch → HOD_Name</span> (If I know the branch is CSE, I know the HOD is Dr. Singh)</li>
</ul>

<h3>Invalid Functional Dependencies:</h3>
<ul>
    <li><span class="inline-code">Name → Roll_No</span> ❌ (Two students can have the same name)</li>
    <li><span class="inline-code">HOD_Name → Branch</span> ❌ (One HOD might manage two branches, though rare, it's not a strict rule unless specified)</li>
</ul>

<h2><span class="emoji">🧩</span> Types of Functional Dependencies</h2>

<div class="card">
    <table>
        <tr>
            <th>Type</th>
            <th>Explanation</th>
            <th>Example (X → Y)</th>
        </tr>
        <tr>
            <td><strong>Trivial FD</strong></td>
            <td>Y is a subset of X. It's obvious and always true.</td>
            <td><span class="inline-code">{Roll_No, Name} → Name</span></td>
        </tr>
        <tr>
            <td><strong>Non-Trivial FD</strong></td>
            <td>Y is NOT a subset of X. These are the useful ones.</td>
            <td><span class="inline-code">Roll_No → Name</span></td>
        </tr>
        <tr>
            <td><strong>Fully Functional FD</strong></td>
            <td>Y depends on the ENTIRE composite key X, not a part of it.</td>
            <td><span class="inline-code">{Roll_No, Course} → Marks</span> (You need both to know the marks)</td>
        </tr>
        <tr>
            <td><strong>Partial FD</strong></td>
            <td>Y depends on only a PART of the composite key X. <strong>(This is bad!)</strong></td>
            <td><span class="inline-code">{Roll_No, Course} → Student_Name</span> (Name only depends on Roll_No, Course is useless here)</td>
        </tr>
        <tr>
            <td><strong>Transitive FD</strong></td>
            <td>A non-key attribute depends on another non-key attribute. <strong>(Also bad!)</strong></td>
            <td><span class="inline-code">Roll_No → Branch</span> AND <span class="inline-code">Branch → HOD</span> <br>Therefore: <span class="inline-code">Roll_No → HOD</span></td>
        </tr>
    </table>
</div>

<div class="danger">
    <div class="danger-label">❌ Common Mistakes</div>
    <p>Students often confuse <strong>Partial Dependency</strong> and <strong>Transitive Dependency</strong> in exams.<br>
    - <em>Partial</em> only happens when you have a <strong>Composite Primary Key</strong> (2 or more columns). If your PK is just one column, partial dependency is impossible!<br>
    - <em>Transitive</em> is a chain reaction: A → B and B → C. (Non-key depending on Non-key).</p>
</div>

<div class="summary-box">
    <h4>📝 Quick Revision</h4>
    <ul>
        <li><strong>X → Y</strong> means X determines Y.</li>
        <li>X is the Determinant, Y is the Dependent.</li>
        <li><strong>Partial Dependency:</strong> Dependent relies on only a piece of a composite key. Leads to violation of 2NF.</li>
        <li><strong>Transitive Dependency:</strong> Dependent relies on a non-key attribute. Leads to violation of 3NF.</li>
    </ul>
</div>
<button class="mark-done-btn" onclick="markDone('func-dep')">✅ Mark as Complete</button>
`;

// ═══════════════════════════════════════════════════════════════
// NORMALIZATION
// ═══════════════════════════════════════════════════════════════

SECTIONS['normalization'] = `
<h1>🧼 Normalization (1NF to BCNF)</h1>
<p class="subtitle">Unit II — Cleaning up messy database designs</p>

<h2><span class="emoji">🎬</span> Why do we need Normalization?</h2>
<div class="analogy">
    <div class="analogy-label">🎯 Layman Analogy</div>
    <p>Imagine hoarding all your clothes, books, shoes, and electronics in one giant suitcase. It's heavy, impossible to find anything, and things get crushed. The solution? You unpack and organize them into separate drawers: a drawer for shirts, a drawer for books, a shelf for shoes. </p>
    <p><strong>Normalization is exactly this!</strong> It is the process of breaking down one giant, messy, redundant table into smaller, well-organized tables.</p>
</div>

<div class="card">
    <div class="card-title">📖 Technical Definition</div>
    <p><strong>Normalization</strong> is a systematic approach of decomposing tables to eliminate <strong>data redundancy</strong> (duplication) and undesirable characteristics like <strong>Insertion, Update, and Deletion Anomalies</strong>.</p>
</div>

<h2><span class="emoji">🚨</span> The Three Deadly Anomalies</h2>
<p>If we don't normalize, our database suffers from anomalies (weird behaviors):</p>
<div class="diagram-box">
<pre>
Table: COLLEGE_DATA
┌────────┬────────┬───────────┬─────────────┐
│ Roll_No│  Name  │  Course   │ Course_Fee  │
├────────┼────────┼───────────┼─────────────┤
│   101  │ Amit   │   B.Tech  │  2,00,000   │
│   102  │ Neha   │   B.Tech  │  2,00,000   │
│   103  │ Raj    │   MBA     │  3,00,000   │
└────────┴────────┴───────────┴─────────────┘
</pre>
</div>
<ul>
    <li><strong>1. Insertion Anomaly:</strong> We launch a new course "BCA" with fee 1,00,000. But no student has enrolled yet. Because Roll_No is the Primary Key, we <em>cannot</em> insert this course into the table! We are blocked.</li>
    <li><strong>2. Update Anomaly:</strong> The college increases the B.Tech fee to 2,50,000. We have to update it in 1000 rows. If we miss even one row, the data becomes inconsistent.</li>
    <li><strong>3. Deletion Anomaly:</strong> Raj (Roll 103) drops out. We delete his row. Oh no! We accidentally deleted the entire record of the MBA course and its fee from the database!</li>
</ul>

<hr>

<h2><span class="emoji"> پ </span> Normal Forms (Step-by-Step)</h2>

<h3>1. First Normal Form (1NF): "Atomic Values Only"</h3>
<p><strong>Rule:</strong> Every cell must contain a single, atomic value. No lists, no arrays, no comma-separated values.</p>

<div class="compare-grid">
    <div class="compare-card">
        <h4>❌ UNNORMALIZED (Violates 1NF)</h4>
<pre>
Roll | Name  | Phone_Numbers
-----+-------+-------------------
101  | Amit  | 999999, 888888  ← Multi-valued!
102  | Neha  | 777777
</pre>
    </div>
    <div class="compare-card">
        <h4>✅ 1NF COMPLIANT</h4>
<pre>
Roll | Name  | Phone
-----+-------+--------
101  | Amit  | 999999
101  | Amit  | 888888
102  | Neha  | 777777
</pre>
    </div>
</div>

<hr>

<h3>2. Second Normal Form (2NF): "No Partial Dependencies"</h3>
<p><strong>Rule:</strong> The table must be in 1NF, AND all non-key attributes must be fully functionally dependent on the entire Primary Key. (No partial dependencies).</p>
<p><em>Note: If a table has a single-column primary key, it is automatically in 2NF!</em></p>

<p><strong>Scenario:</strong> Primary Key is Composite: <span class="inline-code">{Student_ID, Project_ID}</span></p>
<div class="diagram-box">
<pre>
Table: PROJECT_ASSIGNMENT
┌────────────┬────────────┬─────────────┬──────────────┐
│ Student_ID │ Project_ID │ Student_Name│ Project_Name │
├────────────┼────────────┼─────────────┼──────────────┤
│    S1      │    P1      │    John     │   AI Bot     │
│    S1      │    P2      │    John     │   Web App    │
└────────────┴────────────┴─────────────┴──────────────┘
</pre>
</div>
<p><strong>Problem:</strong> <span class="inline-code">Student_Name</span> only depends on <span class="inline-code">Student_ID</span> (Partial). <span class="inline-code">Project_Name</span> only depends on <span class="inline-code">Project_ID</span> (Partial). This causes huge redundancy!</p>
<p><strong>Solution (Decompose into 3 tables):</strong></p>
<ul>
    <li>STUDENT (<u>Student_ID</u>, Student_Name)</li>
    <li>PROJECT (<u>Project_ID</u>, Project_Name)</li>
    <li>ASSIGNMENT (<u>Student_ID, Project_ID</u>) ← The bridging table</li>
</ul>

<hr>

<h3>3. Third Normal Form (3NF): "No Transitive Dependencies"</h3>
<p><strong>Rule:</strong> The table must be in 2NF, AND no non-key attribute should depend on another non-key attribute.</p>

<div class="diagram-box">
<pre>
Table: EXAM_CENTER
┌────────┬────────┬──────────────┬───────────────┐
│ Roll_No│  Name  │  Center_Code │ Center_City   │
├────────┼────────┼──────────────┼───────────────┤
│   101  │ Amit   │     C1       │     Delhi     │
│   102  │ Neha   │     C1       │     Delhi     │
│   103  │ Raj    │     C2       │     Noida     │
└────────┴────────┴──────────────┴───────────────┘
</pre>
</div>
<p><strong>Dependencies:</strong> <span class="inline-code">Roll_No → Center_Code</span>. But also, <span class="inline-code">Center_Code → Center_City</span>. <br>
This means <span class="inline-code">Center_City</span> depends on <span class="inline-code">Roll_No</span> transitively. This causes update anomalies (what if C1 moves to Gurgaon?).</p>
<p><strong>Solution (Decompose):</strong></p>
<ul>
    <li>STUDENT_EXAM (<u>Roll_No</u>, Name, Center_Code)</li>
    <li>CENTER (<u>Center_Code</u>, Center_City)</li>
</ul>

<hr>

<h3>4. Boyce-Codd Normal Form (BCNF): "The Strict 3NF"</h3>
<p><strong>Rule:</strong> The table is in 3NF, AND for every functional dependency X → Y, <strong>X MUST be a Super Key</strong>.</p>
<p><em>Also known as 3.5NF. It handles edge cases where a non-key attribute determines a part of a candidate key.</em></p>

<div class="example">
    <div class="example-label">🎓 University Scenario (BCNF Violation)</div>
    <p>Table: ENROLLMENT (<u>Student_ID, Subject</u>, Professor)<br>
    <strong>Rules:</strong> A student takes a subject under 1 professor. But a professor teaches ONLY ONE subject.</p>
    <p>FD 1: <span class="inline-code">{Student_ID, Subject} → Professor</span> (Valid, left side is Super Key)<br>
    FD 2: <span class="inline-code">Professor → Subject</span> (INVALID in BCNF! Professor is a determinant, but NOT a Super Key!).</p>
    <p><strong>Solution:</strong> Decompose into (Student_ID, Professor) and (Professor, Subject).</p>
</div>

<hr>

<h2><span class="emoji">🧩</span> Lossless Join Decomposition & MVD</h2>

<div class="card">
    <div class="card-title">🔗 Lossless Join Decomposition</div>
    <p>When you break a large table into smaller tables (normalization), you must be able to rejoin them (using Natural Join) to get the EXACT original table back — no missing rows, no extra "spurious" rows.</p>
    <p><strong>Rule for Lossless:</strong> If table R is decomposed into R1 and R2, the common column between R1 and R2 MUST be a Primary Key / Candidate Key in at least one of them.</p>
</div>

<div class="card">
    <div class="card-title">🎭 Multi-Valued Dependency (MVD) & 4NF</div>
    <p><strong>MVD occurs when:</strong> One attribute determines a set of values for another attribute, independently of a third attribute.</p>
    <p><em>Example:</em> A Professor teaches multiple Subjects (Java, C++) AND has multiple Hobbies (Reading, Trekking). <br>
    If we store them in one table <span class="inline-code">(Prof, Subject, Hobby)</span>, we have to create every combination (Java-Reading, Java-Trekking, C++-Reading, C++-Trekking). This causes massive data explosion!</p>
    <p><strong>4NF Solution:</strong> A table is in 4NF if it is in BCNF and contains no MVDs. We decompose it into two tables: <span class="inline-code">(Prof, Subject)</span> and <span class="inline-code">(Prof, Hobby)</span>.</p>
</div>

<hr>

<h2><span class="emoji">🔍</span> Inclusion Dependence & Alternative Approaches</h2>

<div class="card">
    <div class="card-title">🔗 Inclusion Dependence (ID)</div>
    <p><strong>What is it?</strong> An Inclusion Dependency is a constraint stating that the values appearing in one set of columns must also appear (be included) in another set of columns in a different table.</p>
    <p><strong>Layman Example:</strong> You cannot assign an Employee to "Department 5" if "Department 5" does not exist in the Department table! The set of Dept_IDs in the Employee table MUST be included in the set of Dept_IDs in the Department table.</p>
    <p><em>Professor's Tip:</em> In SQL, Inclusion Dependence is practically implemented using <strong>Foreign Key Constraints (Referential Integrity)</strong>!</p>
</div>

<div class="card">
    <div class="card-title">🔄 Alternative Approaches to Database Design</div>
    <p>When designing a database, you don't always have to start with Normalization. There are two main approaches:</p>
    <ul>
        <li><strong>1. Top-Down Approach (ER Modeling):</strong> You start by identifying the real-world Entities (Student, Course) and their relationships. You draw an ER Diagram, and then map that diagram directly into tables. This naturally produces well-normalized tables!</li>
        <li><strong>2. Bottom-Up Approach (Normalization/Synthesis):</strong> You start with one giant, messy table containing all attributes (the "Universal Relation"). Then, you use Functional Dependencies to systematically break it down into smaller tables (1NF → 2NF → 3NF).</li>
    </ul>
    <p><em>Industry Reality:</em> In the real world, we actually use a mix of both! We use Top-Down to design the ER model, convert it to tables, and then use Bottom-Up (Normalization rules) to double-check if we made any mistakes.</p>
</div>

<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">🎓 University Answer: Explain Normalization and its Normal Forms (10 marks) <span class="arrow">▼</span></div>
    <div class="acc-body">
        <p><strong>Normalization</strong> is the process of organizing data in a database to eliminate data redundancy, insertion anomalies, update anomalies, and deletion anomalies. It involves decomposing larger tables into smaller, related tables.</p>
        <p><strong>1. First Normal Form (1NF):</strong> A relation is in 1NF if every attribute contains only atomic (indivisible) values. Multi-valued attributes are not allowed.</p>
        <p><strong>2. Second Normal Form (2NF):</strong> A relation is in 2NF if it is in 1NF and every non-prime attribute is fully functionally dependent on the entire primary key. It removes partial dependencies (which only occur in composite keys).</p>
        <p><strong>3. Third Normal Form (3NF):</strong> A relation is in 3NF if it is in 2NF and no non-prime attribute is transitively dependent on the primary key. (i.e., non-key attributes should not depend on other non-key attributes).</p>
        <p><strong>4. Boyce-Codd Normal Form (BCNF):</strong> A stronger version of 3NF. A relation is in BCNF if for every non-trivial functional dependency X → Y, X is a super key.</p>
        <p><em>Conclusion:</em> By normalizing up to 3NF or BCNF, we ensure a robust, anomaly-free database design that scales efficiently.</p>
    </div>
</div>

<button class="mark-done-btn" onclick="markDone('normalization')">✅ Mark Section Complete</button>
`;
