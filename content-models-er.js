// ═══════════════════════════════════════════════════════════════
// DATA MODELS, ER CONCEPTS, ER NOTATION, MAPPING CONSTRAINTS
// ═══════════════════════════════════════════════════════════════

SECTIONS['data-models'] = `
<h1>📊 Data Models & Their Comparison</h1>
<p class="subtitle">Unit I — Blueprints for organizing data</p>

<h2><span class="emoji">🎬</span> Scenario</h2>
<div class="analogy">
    <div class="analogy-label">🎯 Real-Life Analogy</div>
    <p>When an architect designs a building, they first create a <strong>model</strong> — a miniature representation. Similarly, before creating an actual database, we create a <strong>data model</strong> — a blueprint of how data will be organized.</p>
</div>

<div class="card">
    <div class="card-title">📖 Definition</div>
    <p>A data model is a <strong>conceptual blueprint</strong> that defines how data is structured, stored, and related in a database.</p>
</div>

<h2><span class="emoji">📊</span> Types of Data Models</h2>

<div class="step-box"><div class="step-num">1</div><div class="step-content"><p><strong>Hierarchical Model:</strong> Data organized in a tree (parent-child). A child can have only ONE parent. Example: File system (C: → Users → Documents). Used by: IBM's IMS.</p></div></div>

<div class="step-box"><div class="step-num">2</div><div class="step-content"><p><strong>Network Model:</strong> Like hierarchical but a child can have MULTIPLE parents. Example: Student enrolled in multiple courses. Complex pointer-based navigation. Used by: IDMS.</p></div></div>

<div class="step-box"><div class="step-num">3</div><div class="step-content"><p><strong>Relational Model ⭐:</strong> Data stored in tables (relations) with rows and columns. Simple, powerful, uses SQL. Proposed by E.F. Codd (1970). Used by: MySQL, PostgreSQL, Oracle — almost everywhere!</p></div></div>

<div class="step-box"><div class="step-num">4</div><div class="step-content"><p><strong>Object-Oriented Model:</strong> Data stored as objects (like Java/Python OOP). Supports inheritance, encapsulation. Used by: db4o, ObjectDB.</p></div></div>

<div class="step-box"><div class="step-num">5</div><div class="step-content"><p><strong>ER Model:</strong> A conceptual/visual model used during database DESIGN phase. Uses diagrams. NOT used for storage — used for PLANNING.</p></div></div>

<h3>Comparison Table</h3>
<div class="card">
    <table>
        <tr><th>Feature</th><th>Hierarchical</th><th>Network</th><th>Relational ⭐</th><th>Object-Oriented</th></tr>
        <tr><td><strong>Structure</strong></td><td>Tree</td><td>Graph</td><td>Tables</td><td>Objects</td></tr>
        <tr><td><strong>Relationships</strong></td><td>1:N only</td><td>M:N possible</td><td>All via keys</td><td>Inheritance</td></tr>
        <tr><td><strong>Query Language</strong></td><td>Navigational</td><td>Navigational</td><td>SQL</td><td>OQL</td></tr>
        <tr><td><strong>Modern Usage</strong></td><td>Rare</td><td>Very Rare</td><td>Dominant ⭐</td><td>Niche</td></tr>
    </table>
</div>

<div class="tip">
    <div class="tip-label">💡 For Exams</div>
    <p>Focus on <strong>Relational Model</strong> — 90% of DBMS is about this model. Know E.F. Codd proposed it in 1970.</p>
</div>

<div class="summary-box">
    <h4>📝 Quick Revision</h4>
    <ul>
        <li>Data Model = Blueprint for organizing data</li>
        <li>5 types: Hierarchical, Network, Relational, OO, ER</li>
        <li>Relational (tables) is the MOST USED — E.F. Codd (1970)</li>
        <li>ER Model is for design/planning, not storage</li>
    </ul>
</div>
<button class="mark-done-btn" onclick="markDone('data-models')">✅ Mark as Complete</button>
`;

SECTIONS['er-concepts'] = `
<h1>🧱 ER Model Concepts</h1>
<p class="subtitle">Unit I — Entities, Attributes, and Relationships — the building blocks</p>

<h2><span class="emoji">🎬</span> Planning a College System</h2>
<div class="analogy">
    <div class="analogy-label">🎯 Scenario</div>
    <p>You want to build a <strong>College Management System</strong>. Before coding, you need to PLAN: What <strong>things</strong> (entities) exist? → Students, Professors, Courses. What <strong>details</strong> (attributes) does each have? → Student has Roll, Name. How are things <strong>connected</strong> (relationships)? → Students ENROLL in Courses. <strong>ER Model helps you create this blueprint VISUALLY.</strong></p>
</div>

<h2><span class="emoji">📦</span> 1. Entity</h2>
<div class="card">
    <div class="card-title">📖 Definition</div>
    <p><strong>Simple:</strong> A "thing" that exists and can be identified.</p>
    <p><strong>Technical:</strong> An object in the real world that is distinguishable from other objects.</p>
    <table>
        <tr><th>Category</th><th>Examples</th></tr>
        <tr><td><strong>Physical entities</strong></td><td>Student, Book, Car, Building</td></tr>
        <tr><td><strong>Conceptual entities</strong></td><td>Course, Account, Department, Project</td></tr>
    </table>
    <p><strong>Entity Set:</strong> A collection of similar entities. All students = Student Entity Set.</p>
</div>

<h2><span class="emoji">🏷️</span> 2. Attributes</h2>
<div class="card">
    <div class="card-title">Properties or characteristics of an entity</div>
    <table>
        <tr><th>Type</th><th>Meaning</th><th>Example</th></tr>
        <tr><td><strong>Simple (Atomic)</strong></td><td>Cannot be divided further</td><td>Roll_No = 101</td></tr>
        <tr><td><strong>Composite</strong></td><td>Can be divided into sub-parts</td><td>Name → First_Name + Last_Name</td></tr>
        <tr><td><strong>Single-valued</strong></td><td>Has only ONE value</td><td>DOB = 15-Jan-2005</td></tr>
        <tr><td><strong>Multi-valued</strong></td><td>Can have MULTIPLE values</td><td>Phone = {9876543210, 8765432109}</td></tr>
        <tr><td><strong>Derived</strong></td><td>Calculated from other attributes</td><td>Age (from DOB)</td></tr>
        <tr><td><strong>Stored</strong></td><td>Source for derived attributes</td><td>DOB (used to derive Age)</td></tr>
        <tr><td><strong>Key Attribute</strong></td><td>Uniquely identifies entity</td><td>Roll_No</td></tr>
    </table>
</div>

<div class="analogy">
    <div class="analogy-label">📱 WhatsApp Contact Analogy</div>
    <p><strong>Simple:</strong> Phone Number • <strong>Composite:</strong> Full Name → First + Last • <strong>Single-valued:</strong> Birthday • <strong>Multi-valued:</strong> Phone Numbers (multiple) • <strong>Derived:</strong> Age (from Birthday) • <strong>Key:</strong> Phone Number</p>
</div>

<h2><span class="emoji">🔗</span> 3. Relationship</h2>
<div class="card">
    <p>A <strong>connection</strong> or association between two or more entities.</p>
    <table>
        <tr><th>Relationship</th><th>Between</th><th>Meaning</th></tr>
        <tr><td>ENROLLS</td><td>Student ↔ Course</td><td>Student enrolls in a course</td></tr>
        <tr><td>TEACHES</td><td>Professor ↔ Course</td><td>Professor teaches a course</td></tr>
        <tr><td>WORKS_IN</td><td>Employee ↔ Department</td><td>Employee works in a department</td></tr>
        <tr><td>BORROWS</td><td>Member ↔ Book</td><td>Library member borrows a book</td></tr>
    </table>
    <h4>Degree of Relationship</h4>
    <table>
        <tr><th>Degree</th><th>Name</th><th>Example</th></tr>
        <tr><td>1</td><td>Unary (Recursive)</td><td>Employee MANAGES Employee</td></tr>
        <tr><td>2</td><td>Binary</td><td>Student ENROLLS Course</td></tr>
        <tr><td>3</td><td>Ternary</td><td>Doctor PRESCRIBES Medicine TO Patient</td></tr>
    </table>
</div>

<h2><span class="emoji">💪</span> 4. Strong Entity vs Weak Entity</h2>
<div class="compare-grid">
    <div class="compare-card">
        <h4>Strong Entity</h4>
        <ul>
            <li>Has its own key ✅</li>
            <li>Can exist alone ✅</li>
            <li>Single rectangle □</li>
            <li>Example: EMPLOYEE</li>
        </ul>
    </div>
    <div class="compare-card">
        <h4>Weak Entity</h4>
        <ul>
            <li>No own key ❌ — depends on strong entity</li>
            <li>Cannot exist alone ❌</li>
            <li>Double rectangle ◻◻</li>
            <li>Example: DEPENDENT (of employee)</li>
        </ul>
    </div>
</div>

<div class="example">
    <div class="example-label">📸 Instagram Example</div>
    <p><strong>POST</strong> = Strong entity (has Post_ID). <strong>COMMENT</strong> = Weak entity (has no meaning without a Post).</p>
</div>

<div class="summary-box">
    <h4>📝 Quick Revision</h4>
    <ul>
        <li>Entity = A distinguishable real-world object</li>
        <li>Attribute Types: Simple, Composite, Single/Multi-valued, Derived, Key</li>
        <li>Relationship = Association between entities (Degree: 1, 2, or 3)</li>
        <li>Strong Entity = Has own key | Weak Entity = No own key, depends on owner</li>
    </ul>
</div>
<button class="mark-done-btn" onclick="markDone('er-concepts')">✅ Mark as Complete</button>
`;

SECTIONS['er-notation'] = `
<h1>🎨 Notation for ER Diagram</h1>
<p class="subtitle">Unit I — Standard symbols every database designer must know</p>

<h2><span class="emoji">🎨</span> Standard ER Diagram Symbols</h2>

<div class="card">
    <table>
        <tr><th>Symbol</th><th>Shape</th><th>Meaning</th></tr>
        <tr><td><strong>Rectangle</strong> □</td><td>Single border</td><td>Strong Entity</td></tr>
        <tr><td><strong>Double Rectangle</strong> ◻◻</td><td>Double border</td><td>Weak Entity</td></tr>
        <tr><td><strong>Oval</strong> ○</td><td>Ellipse</td><td>Attribute (Simple)</td></tr>
        <tr><td><strong>Double Oval</strong> ◎</td><td>Double ellipse</td><td>Multi-valued Attribute</td></tr>
        <tr><td><strong>Dashed Oval</strong> ○̤</td><td>Dashed ellipse</td><td>Derived Attribute</td></tr>
        <tr><td><strong>Underlined text</strong> <u>Roll</u></td><td>In oval</td><td>Key Attribute</td></tr>
        <tr><td><strong>Diamond</strong> ◇</td><td>Single diamond</td><td>Relationship</td></tr>
        <tr><td><strong>Double Diamond</strong> ◆◆</td><td>Double diamond</td><td>Identifying Relationship (weak entity)</td></tr>
        <tr><td><strong>Line</strong> ——</td><td>Single line</td><td>Links entities to attributes/relationships</td></tr>
        <tr><td><strong>Double Line</strong> ══</td><td>Bold/double</td><td>Total Participation</td></tr>
    </table>
</div>

<h2><span class="emoji">🖼️</span> Example: Library System ER Diagram</h2>

<div class="diagram-box">
    <div class="diagram-label">📊 Library Management System</div>
<pre>
  (Member_ID)  (Name)  ((Phone))       (ISBN)  (Title)  (Author)
       \\        |       /                 \\       |        /
    ┌──────────┐                     ┌──────────┐
    │  MEMBER  │── BORROWS ◇────────│   BOOK   │
    └──────────┘     |               └──────────┘
         |        (Date)                  |
      (Address)                        (Year)
                                       (Genre)

  Key: (Member_ID) and (ISBN) are underlined = Key Attributes
       ((Phone)) = Double oval = Multi-valued
       BORROWS = Diamond = Relationship
</pre>
</div>

<h3>Step-by-Step: How to Draw ER Diagrams</h3>
<div class="step-box"><div class="step-num">1</div><div class="step-content"><p><strong>Identify Entities:</strong> BOOK, MEMBER, LIBRARIAN</p></div></div>
<div class="step-box"><div class="step-num">2</div><div class="step-content"><p><strong>Identify Attributes:</strong> BOOK: <u>ISBN</u>, Title, Author, Year. MEMBER: <u>Member_ID</u>, Name, Phone, Address.</p></div></div>
<div class="step-box"><div class="step-num">3</div><div class="step-content"><p><strong>Identify Relationships:</strong> MEMBER borrows BOOK. LIBRARIAN issues BOOK.</p></div></div>
<div class="step-box"><div class="step-num">4</div><div class="step-content"><p><strong>Determine Cardinality:</strong> Member borrows many books. Book can be borrowed by many members. → M:N</p></div></div>
<div class="step-box"><div class="step-num">5</div><div class="step-content"><p><strong>Draw it!</strong> Use the standard symbols from the table above.</p></div></div>

<div class="danger">
    <div class="danger-label">❌ Common Mistakes</div>
    <p>1. Forgetting to underline key attributes<br>
    2. Using single rectangle for weak entities → Must use double rectangle<br>
    3. Drawing relationships as rectangles → Relationships are diamonds ◇<br>
    4. Forgetting to show cardinality (1:1, 1:N, M:N)</p>
</div>

<div class="summary-box">
    <h4>📝 Quick Revision — ER Notation</h4>
    <ul>
        <li>Rectangle = Entity | Double Rectangle = Weak Entity</li>
        <li>Oval = Attribute | Double Oval = Multi-valued | Dashed = Derived</li>
        <li>Diamond = Relationship | Double Diamond = Identifying Relationship</li>
        <li>Underline = Key Attribute | Double Line = Total Participation</li>
        <li>Memory: "ROAD" = Rectangle, Oval, Arrow/line, Diamond</li>
    </ul>
</div>
<button class="mark-done-btn" onclick="markDone('er-notation')">✅ Mark as Complete</button>
`;

SECTIONS['mapping-constraints'] = `
<h1>🔗 Mapping Constraints</h1>
<p class="subtitle">Unit I — Cardinality and Participation constraints</p>

<h2><span class="emoji">🎬</span> Real-Life Relationships</h2>
<div class="analogy">
    <div class="analogy-label">🎯 Scenario</div>
    <p><strong>One husband ↔ One wife</strong> (1:1) • <strong>One mother ↔ Many children</strong> (1:N) • <strong>Many students ↔ Many courses</strong> (M:N). These are cardinality constraints — they define HOW MANY entities participate in a relationship.</p>
</div>

<h2><span class="emoji">📊</span> Cardinality Ratios</h2>

<div class="card">
    <table>
        <tr><th>Cardinality</th><th>Diagram</th><th>Real-World Example</th></tr>
        <tr><td><strong>1:1 (One-to-One)</strong></td><td>PERSON ──1────1── PASSPORT</td><td>Person ↔ Aadhaar Card, CEO ↔ Company</td></tr>
        <tr><td><strong>1:N (One-to-Many)</strong></td><td>DEPT ──1────N── STUDENT</td><td>Mother ↔ Children, Instagram User ↔ Posts</td></tr>
        <tr><td><strong>N:1 (Many-to-One)</strong></td><td>STUDENT ──N────1── DEPT</td><td>Same as 1:N, different perspective</td></tr>
        <tr><td><strong>M:N (Many-to-Many)</strong></td><td>STUDENT ──M────N── COURSE</td><td>Authors ↔ Books, Actors ↔ Movies, WhatsApp Users ↔ Groups</td></tr>
    </table>
</div>

<h2><span class="emoji">🔗</span> Participation Constraints</h2>
<div class="compare-grid">
    <div class="compare-card">
        <h4>Total Participation (══ Double Line)</h4>
        <p>EVERY entity MUST participate in the relationship.</p>
        <p><strong>Example:</strong> Every student MUST be enrolled in a branch.</p>
    </div>
    <div class="compare-card">
        <h4>Partial Participation (── Single Line)</h4>
        <p>Some entities MAY participate.</p>
        <p><strong>Example:</strong> Not every professor advises a PhD student.</p>
    </div>
</div>

<div class="diagram-box">
    <div class="diagram-label">📊 Participation Example</div>
<pre>
┌──────────┐              ┌──────────┐
│ EMPLOYEE │══WORKS_IN═══│DEPARTMENT│
└──────────┘              └──────────┘
     ↑                         ↑
  Total                    Partial
(Every employee             (A department might
 MUST work in               exist with no
 a department)               employees yet)
</pre>
</div>

<div class="warning">
    <div class="warning-label">⚠️ Common Mistakes</div>
    <p>1. Confusing 1:N with N:1 → Same thing, different perspective<br>
    2. Forgetting participation constraints → Always check: "Must EVERY entity participate?"<br>
    3. Not using double lines for total participation</p>
</div>

<div class="summary-box">
    <h4>📝 Quick Revision</h4>
    <ul>
        <li>Cardinality: 1:1, 1:N, N:1, M:N</li>
        <li>Total Participation = Must participate (double line ══)</li>
        <li>Partial Participation = May participate (single line ──)</li>
        <li>1:1 → Person:Aadhaar | 1:N → Dept:Students | M:N → Students:Courses</li>
    </ul>
</div>
<button class="mark-done-btn" onclick="markDone('mapping-constraints')">✅ Mark as Complete</button>
`;
