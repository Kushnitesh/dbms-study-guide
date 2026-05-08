// ═══════════════════════════════════════════════════════════════
// RELATIONAL MODEL & INTEGRITY CONSTRAINTS
// ═══════════════════════════════════════════════════════════════

SECTIONS['relational-model'] = `
<h1>📐 Relational Data Model Concepts</h1>
<p class="subtitle">Unit I — The foundation of modern databases (E.F. Codd, 1970)</p>

<h2><span class="emoji">🎬</span> It's Like Excel... But Strict</h2>
<div class="analogy">
    <div class="analogy-label">🎯 Real-Life Analogy</div>
    <p>Open <strong>Excel</strong>. You see a sheet with rows and columns. That's basically the Relational Model! But with <strong>strict rules</strong> that Excel doesn't enforce — no duplicates, atomic values, defined domains.</p>
</div>

<div class="card">
    <div class="card-title">📖 Definition</div>
    <p>The Relational Model organizes data into <strong>tables (relations)</strong> with <strong>rows (tuples)</strong> and <strong>columns (attributes)</strong>. Proposed by <strong>E.F. Codd</strong> in 1970 at IBM.</p>
</div>

<h2><span class="emoji">📊</span> Key Terminology</h2>
<div class="card">
    <table>
        <tr><th>Everyday Term</th><th>Relational Term</th><th>Meaning</th></tr>
        <tr><td>Table</td><td><strong>Relation</strong></td><td>Collection of related data</td></tr>
        <tr><td>Row</td><td><strong>Tuple</strong></td><td>One record/entry</td></tr>
        <tr><td>Column</td><td><strong>Attribute</strong></td><td>A property/field</td></tr>
        <tr><td>Data Type</td><td><strong>Domain</strong></td><td>Set of allowed values</td></tr>
        <tr><td># of Rows</td><td><strong>Cardinality</strong></td><td>Count of tuples</td></tr>
        <tr><td># of Columns</td><td><strong>Degree (Arity)</strong></td><td>Count of attributes</td></tr>
        <tr><td>Table Structure</td><td><strong>Schema</strong></td><td>Relation name + attributes</td></tr>
        <tr><td>Table with Data</td><td><strong>Instance</strong></td><td>Schema + current data</td></tr>
    </table>
</div>

<h3>Example</h3>
<div class="diagram-box">
    <div class="diagram-label">📊 Relation: STUDENT — Degree = 4, Cardinality = 4</div>
<pre>
Schema: STUDENT(Roll_No, Name, Branch, CGPA)

┌─────────┬─────────┬────────┬──────┐
│ Roll_No │  Name   │ Branch │ CGPA │  ← Attributes
├─────────┼─────────┼────────┼──────┤
│   101   │ Nitesh  │  CSE   │ 8.5  │  ← Tuple 1
│   102   │ Priya   │  ECE   │ 9.0  │  ← Tuple 2
│   103   │ Rahul   │  CSE   │ 7.8  │  ← Tuple 3
│   104   │ Sneha   │  ME    │ 8.2  │  ← Tuple 4
└─────────┴─────────┴────────┴──────┘

Domains:
  Roll_No → {positive integers}
  Name    → {strings up to 50 chars}
  Branch  → {CSE, ECE, ME, CE, EE}
  CGPA    → {0.0 to 10.0}
</pre>
</div>

<h2><span class="emoji">📐</span> Properties of a Relation</h2>
<div class="card">
    <table>
        <tr><th>#</th><th>Property</th><th>Explanation</th></tr>
        <tr><td>1</td><td><strong>No duplicate tuples</strong></td><td>Every row must be unique (at least by PK)</td></tr>
        <tr><td>2</td><td><strong>Tuples are unordered</strong></td><td>Row order doesn't matter</td></tr>
        <tr><td>3</td><td><strong>Attributes are unordered</strong></td><td>Column order doesn't matter</td></tr>
        <tr><td>4</td><td><strong>Atomic values</strong></td><td>Each cell has ONE value (no lists) — 1NF</td></tr>
        <tr><td>5</td><td><strong>Domain constraint</strong></td><td>Values must belong to the defined domain</td></tr>
    </table>
</div>

<h3>Schema vs Instance</h3>
<div class="compare-grid">
    <div class="compare-card">
        <h4>📐 Schema</h4>
        <p>Structure/blueprint. Doesn't change often.</p>
        <p><span class="inline-code">STUDENT(Roll_No: INT, Name: VARCHAR, Branch: VARCHAR, CGPA: FLOAT)</span></p>
        <p>Analogy: Building blueprint</p>
    </div>
    <div class="compare-card">
        <h4>📋 Instance</h4>
        <p>Actual data at a point in time. Changes frequently.</p>
        <p>The 4 rows shown in the table above.</p>
        <p>Analogy: People inside the building right now</p>
    </div>
</div>

<div class="summary-box">
    <h4>📝 Quick Revision</h4>
    <ul>
        <li>Relation = Table | Tuple = Row | Attribute = Column</li>
        <li>Domain = Allowed values | Degree = Columns | Cardinality = Rows</li>
        <li>Schema = Structure | Instance = Current data</li>
        <li>Properties: No duplicates, unordered, atomic values</li>
        <li>Proposed by E.F. Codd (1970)</li>
    </ul>
</div>
<button class="mark-done-btn" onclick="markDone('relational-model')">✅ Mark as Complete</button>
`;

// ═══════════════════════════════════════════════════════════════
// INTEGRITY CONSTRAINTS (Entity, Referential, Key)
// ═══════════════════════════════════════════════════════════════

SECTIONS['integrity'] = `
<h1>🛡️ Integrity Constraints</h1>
<p class="subtitle">Unit I — Entity Integrity, Referential Integrity, and Key Constraints</p>

<h2><span class="emoji">🎬</span> Traffic Rules for Data</h2>
<div class="analogy">
    <div class="analogy-label">🎯 Real-Life Analogy</div>
    <p>Imagine a traffic system without rules: no red lights → accidents, no speed limits → chaos, no lane markings → crashes. <strong>Integrity constraints are the "traffic rules" of a database</strong> — they ensure data is correct, consistent, and reliable.</p>
</div>

<h2><span class="emoji">📊</span> Types of Constraints — Overview</h2>
<div class="card">
    <table>
        <tr><th>Type</th><th>What It Ensures</th><th>Example</th></tr>
        <tr><td><strong>Domain</strong></td><td>Values in allowed range</td><td>Age must be integer 0-150</td></tr>
        <tr><td><strong>Key</strong></td><td>Uniqueness of keys</td><td>No two students with same Roll</td></tr>
        <tr><td><strong>Entity Integrity</strong></td><td>PK is never NULL</td><td>Roll_No cannot be empty</td></tr>
        <tr><td><strong>Referential Integrity</strong></td><td>FK references valid PK</td><td>Dept_ID must exist in Department</td></tr>
        <tr><td><strong>NOT NULL</strong></td><td>Attribute must have value</td><td>Name cannot be empty</td></tr>
        <tr><td><strong>CHECK</strong></td><td>Custom condition</td><td>CGPA BETWEEN 0.0 AND 10.0</td></tr>
        <tr><td><strong>UNIQUE</strong></td><td>No duplicates (NULL ok)</td><td>Email must be unique</td></tr>
        <tr><td><strong>DEFAULT</strong></td><td>Auto-fill if no value</td><td>Branch defaults to 'CSE'</td></tr>
    </table>
</div>

<h2><span class="emoji">🛡️</span> Entity Integrity Constraint</h2>
<div class="card">
    <div class="card-title">📖 The Primary Key can NEVER be NULL</div>
    <p><strong>Why?</strong> If PK = NULL, we can't uniquely identify that row, can't reference it from other tables, can't search for it.</p>
    <div class="diagram-box">
<pre>
STUDENT Table (VIOLATION):
┌─────────┬─────────┬────────┐
│ Roll_No │  Name   │ Branch │
├─────────┼─────────┼────────┤
│   101   │ Nitesh  │  CSE   │ ✅ Fine
│  NULL   │ Priya   │  ECE   │ ❌ VIOLATION! PK is NULL
│   103   │ Rahul   │  CSE   │ ✅ Fine
└─────────┴─────────┴────────┘
</pre>
    </div>
    <p><strong>PRIMARY KEY = NOT NULL + UNIQUE</strong> (automatically enforced)</p>
    <p>For composite PK {Roll, Course_ID}: BOTH must be NOT NULL.</p>
</div>

<div class="analogy">
    <div class="analogy-label">🎯 Layman Analogy</div>
    <p>Every person in India MUST have an Aadhaar number. A person without Aadhaar? The system doesn't recognize them. Similarly, a row without a PK doesn't exist in the database's eyes.</p>
</div>

<h2><span class="emoji">🔗</span> Referential Integrity Constraint</h2>
<div class="card">
    <div class="card-title">📖 FK must reference an existing PK (or be NULL)</div>
    <div class="diagram-box">
<pre>
DEPARTMENT (Parent):               STUDENT (Child):
┌─────────┬───────────┐           ┌──────┬────────┬─────────┐
│ Dept_ID │ Dept_Name │           │ Roll │  Name  │ Dept_ID │
├─────────┼───────────┤           ├──────┼────────┼─────────┤
│   D01   │    CSE    │           │ 101  │ Nitesh │   D01   │ ✅ Exists
│   D02   │    ECE    │           │ 102  │ Priya  │   D02   │ ✅ Exists
│   D03   │    ME     │           │ 103  │ Rahul  │   D05   │ ❌ D05 NOT FOUND!
└─────────┴───────────┘           │ 104  │ Sneha  │  NULL   │ ✅ NULL allowed
                                  └──────┴────────┴─────────┘
</pre>
    </div>
</div>

<h3>What Happens on Violations?</h3>
<div class="card">
    <table>
        <tr><th>Action</th><th>What Happens</th><th>Example</th></tr>
        <tr><td><strong>RESTRICT / NO ACTION</strong></td><td>Block the operation</td><td>Can't delete CSE dept if students are in it</td></tr>
        <tr><td><strong>CASCADE</strong></td><td>Propagate changes automatically</td><td>Delete CSE dept → all CSE students deleted too</td></tr>
        <tr><td><strong>SET NULL</strong></td><td>Set FK to NULL</td><td>Delete CSE dept → students' Dept_ID becomes NULL</td></tr>
        <tr><td><strong>SET DEFAULT</strong></td><td>Set FK to default value</td><td>Delete CSE dept → students get Dept_ID = 'GENERAL'</td></tr>
    </table>
</div>

<div class="example">
    <div class="example-label">📸 Instagram Example</div>
    <p>What if Instagram deletes a user? With <strong>CASCADE</strong>, all their posts, comments, and likes are also deleted. That's referential integrity in action!</p>
</div>

<pre>
CREATE TABLE STUDENT (
    Roll INT PRIMARY KEY,              -- Entity Integrity
    Name VARCHAR(50) NOT NULL,         -- NOT NULL
    Email VARCHAR(100) UNIQUE,         -- UNIQUE (NULL ok)
    Age INT CHECK (Age BETWEEN 17 AND 30),  -- CHECK
    CGPA FLOAT CHECK (CGPA BETWEEN 0 AND 10),
    Dept_ID VARCHAR(5),
    FOREIGN KEY (Dept_ID)              -- Referential Integrity
        REFERENCES DEPARTMENT(Dept_ID)
        ON DELETE CASCADE
        ON UPDATE SET NULL
);
</pre>

<h2><span class="emoji">🔑</span> Key Constraints Summary</h2>
<div class="card">
    <table>
        <tr><th>Constraint</th><th>NULL?</th><th>Duplicates?</th><th>Per Table</th></tr>
        <tr><td><strong>PRIMARY KEY</strong></td><td>❌ No</td><td>❌ No</td><td>Exactly 1</td></tr>
        <tr><td><strong>UNIQUE</strong></td><td>✅ Yes (one NULL)</td><td>❌ No</td><td>Multiple</td></tr>
        <tr><td><strong>FOREIGN KEY</strong></td><td>✅ Yes</td><td>✅ Yes</td><td>Multiple</td></tr>
        <tr><td><strong>NOT NULL</strong></td><td>❌ No</td><td>✅ Yes</td><td>Multiple</td></tr>
        <tr><td><strong>CHECK</strong></td><td>Depends</td><td>✅ Yes</td><td>Multiple</td></tr>
    </table>
</div>

<div class="danger">
    <div class="danger-label">❌ Common Mistakes</div>
    <p>1. "FK must always be NOT NULL" → <strong>Wrong!</strong> FK CAN be NULL.<br>
    2. "FK must be unique" → <strong>Wrong!</strong> Many students can have same Dept_ID.<br>
    3. Forgetting CASCADE/RESTRICT options in exams.<br>
    4. "Entity integrity means ALL columns must be NOT NULL" → Only PK columns!</p>
</div>

<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">🎓 University Answer: Entity + Referential Integrity (10 marks) <span class="arrow">▼</span></div>
    <div class="acc-body">
        <p><strong>Entity Integrity:</strong> The PK of a relation cannot have NULL values. Since the PK uniquely identifies each tuple, a NULL PK would make identification impossible. For composite PKs, ALL component attributes must be NOT NULL.</p>
        <p><strong>Referential Integrity:</strong> If a relation has a FK, then the FK value must either match an existing PK in the referenced relation, or be NULL.</p>
        <p><strong>Actions on Violation:</strong></p>
        <p>1. <strong>RESTRICT:</strong> Reject the operation.</p>
        <p>2. <strong>CASCADE:</strong> Automatically propagate changes.</p>
        <p>3. <strong>SET NULL:</strong> Set FK to NULL in referencing tuples.</p>
        <p>4. <strong>SET DEFAULT:</strong> Set FK to predefined default value.</p>
        <p>These maintain consistency and are specified using ON DELETE and ON UPDATE clauses.</p>
    </div>
</div>

<div class="summary-box">
    <h4>📝 Quick Revision</h4>
    <ul>
        <li>Entity Integrity: PK ≠ NULL (NEVER)</li>
        <li>Referential Integrity: FK must match existing PK (or be NULL)</li>
        <li>On Delete/Update: RESTRICT, CASCADE, SET NULL, SET DEFAULT</li>
        <li>PRIMARY KEY = UNIQUE + NOT NULL (only 1 per table)</li>
        <li>UNIQUE allows NULL; FK allows NULL + duplicates</li>
    </ul>
</div>
<button class="mark-done-btn" onclick="markDone('integrity')">✅ Mark as Complete</button>
`;
