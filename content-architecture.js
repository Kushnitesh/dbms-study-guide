// ═══════════════════════════════════════════════════════════════
// ARCHITECTURE: System Architecture, 3-Schema, Data Independence
// ═══════════════════════════════════════════════════════════════

SECTIONS['db-arch'] = `
<h1>🏗️ Database System Architecture</h1>
<p class="subtitle">Unit I — How a database system is designed from the inside</p>

<h2><span class="emoji">🎬</span> Daily-Life Scenario</h2>
<div class="analogy">
    <div class="analogy-label">🎯 Real-Life Analogy</div>
    <p>Think of <strong>Amity University</strong>: Students interact via <strong>Amizone portal</strong> (see timetable, marks). Professors use a <strong>different interface</strong> (upload marks). The <strong>IT team</strong> manages actual servers. Students don't know WHERE their marks are stored — they just see them on screen. This separation of concerns = database system architecture!</p>
</div>

<h2><span class="emoji">🏗️</span> Components of a Database System</h2>

<div class="diagram-box">
    <div class="diagram-label">📊 Database System Architecture</div>
<pre>
┌─────────────────────────────────────────────┐
│              DATABASE SYSTEM                 │
│                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  Users/   │  │  App     │  │  DBA     │   │
│  │  Students │  │  Devs    │  │ (Admin)  │   │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘   │
│       │              │              │         │
│       ▼              ▼              ▼         │
│  ┌──────────────────────────────────────┐    │
│  │      APPLICATION PROGRAMS / QUERIES  │    │
│  └──────────────────┬───────────────────┘    │
│                     ▼                         │
│  ┌──────────────────────────────────────┐    │
│  │         DBMS SOFTWARE                │    │
│  │  (Query Processor, Storage Manager)  │    │
│  └──────────────────┬───────────────────┘    │
│                     ▼                         │
│  ┌──────────────────────────────────────┐    │
│  │      STORED DATABASE (Disk)          │    │
│  └──────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
</pre>
</div>

<h3>Types of Database Users</h3>
<div class="card">
    <table>
        <tr><th>User Type</th><th>Who?</th><th>What They Do</th><th>Analogy</th></tr>
        <tr><td><strong>Naive Users</strong></td><td>End users (students, customers)</td><td>Use pre-built forms/apps</td><td>Restaurant customer ordering from menu</td></tr>
        <tr><td><strong>App Programmers</strong></td><td>Developers</td><td>Write apps using SQL</td><td>Chef who designs the menu</td></tr>
        <tr><td><strong>Sophisticated Users</strong></td><td>Analysts, researchers</td><td>Write complex SQL directly</td><td>Food critic going to the kitchen</td></tr>
        <tr><td><strong>DBA</strong></td><td>Database Administrator</td><td>Controls entire database</td><td>Restaurant owner/manager</td></tr>
    </table>
</div>

<h2><span class="emoji">👑</span> Role of DBA</h2>
<div class="card">
    <div class="card-title">The most powerful person in a database system</div>
    <table>
        <tr><th>Responsibility</th><th>What It Means</th></tr>
        <tr><td><strong>Schema Definition</strong></td><td>Decides the structure of the database</td></tr>
        <tr><td><strong>Storage Structure</strong></td><td>Decides how data is physically stored</td></tr>
        <tr><td><strong>Access Control</strong></td><td>Who can see what data</td></tr>
        <tr><td><strong>Backup & Recovery</strong></td><td>Ensures data isn't lost</td></tr>
        <tr><td><strong>Performance Tuning</strong></td><td>Makes queries run faster</td></tr>
    </table>
</div>

<div class="summary-box">
    <h4>📝 Quick Revision</h4>
    <ul>
        <li>Database System = Users + Application Programs + DBMS + Database</li>
        <li>4 types of users: Naive, App Programmers, Sophisticated, DBA</li>
        <li>DBA = Most powerful — controls schema, security, backup</li>
    </ul>
</div>

<button class="mark-done-btn" onclick="markDone('db-arch')">✅ Mark as Complete</button>
`;

// ═══════════════════════════════════════════════════════════════
// 3-SCHEMA ARCHITECTURE
// ═══════════════════════════════════════════════════════════════

SECTIONS['three-schema'] = `
<h1>🏛️ 3-Schema Architecture</h1>
<p class="subtitle">Unit I — Same data, different views, separated into 3 levels (ANSI/SPARC)</p>

<h2><span class="emoji">🎬</span> Who Sees What?</h2>
<div class="card">
    <table>
        <tr><th>Person</th><th>What They See</th></tr>
        <tr><td><strong>Student (Nitesh)</strong></td><td>Only HIS marks, HIS attendance, HIS timetable</td></tr>
        <tr><td><strong>Professor</strong></td><td>All students' marks in HIS subject</td></tr>
        <tr><td><strong>University Admin</strong></td><td>Everything — all students, all subjects, all departments</td></tr>
        <tr><td><strong>IT Team</strong></td><td>How data is stored on disk — which hard drive, what format</td></tr>
    </table>
</div>

<h2><span class="emoji">🏛️</span> The Three Schemas</h2>

<div class="diagram-box">
    <div class="diagram-label">📊 3-Schema Architecture Diagram</div>
<pre>
   VIEW 1        VIEW 2        VIEW 3
  (Student)    (Professor)   (Accountant)
   ┌────┐       ┌────┐        ┌────┐
   │Name│       │Name│        │Name│
   │Mark│       │Mark│        │Sala│
   └──┬─┘       └──┬─┘        └──┬─┘
      │             │             │
      └──────┬──────┘─────────────┘
             ▼
  ┌─── EXTERNAL LEVEL (View Level) ───┐
  │  What individual users see         │
  └──────────────┬─────────────────────┘
                 ▼
  ┌─── CONCEPTUAL LEVEL (Logical) ────┐
  │  STUDENT(Roll, Name, Branch, Marks)│
  │  COURSE(Code, Title, Credits)      │
  │  FACULTY(ID, Name, Dept, Salary)   │
  └──────────────┬─────────────────────┘
                 ▼
  ┌─── INTERNAL LEVEL (Physical) ─────┐
  │  B+ Tree index on Roll_No          │
  │  Data stored in blocks of 4KB      │
  │  File: /data/students.dbf          │
  └────────────────────────────────────┘
</pre>
</div>

<h3>Detailed Comparison</h3>
<div class="card">
    <table>
        <tr><th>Feature</th><th>External Level</th><th>Conceptual Level</th><th>Internal Level</th></tr>
        <tr><td><strong>Also Called</strong></td><td>View Level</td><td>Logical Level</td><td>Physical Level</td></tr>
        <tr><td><strong>Who Uses It</strong></td><td>End users</td><td>DBA, Designers</td><td>Storage Designers</td></tr>
        <tr><td><strong>Shows</strong></td><td>Part relevant to user</td><td>Entire DB structure</td><td>Physical storage details</td></tr>
        <tr><td><strong>How Many</strong></td><td>Multiple (per user/group)</td><td>Only ONE</td><td>Only ONE</td></tr>
    </table>
</div>

<div class="analogy">
    <div class="analogy-label">🏠 Building a House Analogy</div>
    <p><strong>External</strong> = What YOU see — beautiful rooms, painted walls (your view)<br>
    <strong>Conceptual</strong> = The blueprint — all rooms, connections, dimensions (architect's view)<br>
    <strong>Internal</strong> = The foundation — bricks, steel rods, cement, wiring (engineer's view)<br>
    Same house, different perspectives!</p>
</div>

<div class="warning">
    <div class="warning-label">⚠️ Common Mistakes</div>
    <p>1. Confusing Conceptual with External → Conceptual = FULL database. External = PARTIAL view.<br>
    2. Saying multiple conceptual schemas exist → Only ONE conceptual schema exists.<br>
    3. Forgetting internal level details → Mention indexing, storage blocks.</p>
</div>

<div class="summary-box">
    <h4>📝 Quick Revision</h4>
    <ul>
        <li>3 Levels: External (View) → Conceptual (Logical) → Internal (Physical)</li>
        <li>External = What users see (multiple views)</li>
        <li>Conceptual = Full logical structure (only ONE)</li>
        <li>Internal = Physical storage details (only ONE)</li>
        <li>Memory: "Every Child Is special" → External, Conceptual, Internal</li>
    </ul>
</div>

<button class="mark-done-btn" onclick="markDone('three-schema')">✅ Mark as Complete</button>
`;

// ═══════════════════════════════════════════════════════════════
// DATA INDEPENDENCE
// ═══════════════════════════════════════════════════════════════

SECTIONS['data-independence'] = `
<h1>🔓 Levels of Abstraction & Data Independence</h1>
<p class="subtitle">Unit I — Change one level without breaking the others</p>

<h2><span class="emoji">🎬</span> Google Maps Magic</h2>
<div class="analogy">
    <div class="analogy-label">🎯 Real-Life Scenario</div>
    <p>You use <strong>Google Maps</strong> daily. You see a beautiful map (External). Google stores coordinates and road data in tables (Conceptual). Their servers store this on SSDs across 30+ data centers (Internal). Google can <strong>change their storage system</strong> (HDD → SSD, new data centers) and YOU won't notice any difference. Your map looks the same!</p>
    <p><strong>This is Data Independence.</strong></p>
</div>

<h2><span class="emoji">🎭</span> What is Data Abstraction?</h2>
<div class="card">
    <div class="card-title">📖 Definition</div>
    <p><strong>Abstraction</strong> = Hiding complex internal details, showing only the necessary information.</p>
    <p>Like using an <strong>ATM</strong>: You see "Enter PIN → Select Amount → Collect Cash." You DON'T see network protocols, encryption, server communication, vault mechanisms.</p>
</div>

<h2><span class="emoji">🔓</span> Data Independence</h2>
<div class="card">
    <div class="card-title">📖 Definition</div>
    <p>Data Independence is the ability to <strong>modify the schema at one level</strong> without affecting the schema at the next higher level.</p>
</div>

<div class="compare-grid">
    <div class="compare-card">
        <h4>📦 Physical Data Independence</h4>
        <p>Change <strong>internal schema</strong> without changing conceptual schema.</p>
        <p><strong>Example:</strong> Move from HDD to SSD, change B-Tree to Hash index. The logical table structure stays the same.</p>
        <p><strong>Real-world:</strong> Netflix moves data centers. You still see your watchlist.</p>
        <p><span class="tag tag-green">EASIER to achieve</span></p>
    </div>
    <div class="compare-card">
        <h4>🧩 Logical Data Independence</h4>
        <p>Change <strong>conceptual schema</strong> without changing external views or apps.</p>
        <p><strong>Example:</strong> Rename columns, add new attributes. The app's view still works via mappings.</p>
        <p><strong>Real-world:</strong> Instagram adds "Threads_Username" column. Your app still works.</p>
        <p><span class="tag tag-red">HARDER to achieve</span></p>
    </div>
</div>

<h3>Comparison Table</h3>
<div class="card">
    <table>
        <tr><th>Feature</th><th>Physical Independence</th><th>Logical Independence</th></tr>
        <tr><td><strong>What Changes</strong></td><td>Internal schema</td><td>Conceptual schema</td></tr>
        <tr><td><strong>What Stays Same</strong></td><td>Conceptual + External</td><td>External + Apps</td></tr>
        <tr><td><strong>Mapping Affected</strong></td><td>Conceptual/Internal</td><td>External/Conceptual</td></tr>
        <tr><td><strong>Difficulty</strong></td><td>EASIER</td><td>HARDER</td></tr>
        <tr><td><strong>Example</strong></td><td>Change indexing method</td><td>Add/remove columns</td></tr>
    </table>
</div>

<div class="tip">
    <div class="tip-label">💡 Memory Trick</div>
    <p><strong>L</strong>ogical Independence is <strong>L</strong>ess easy (harder). <strong>P</strong>hysical Independence is <strong>P</strong>ractically easier.</p>
</div>

<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">🎓 University Answer: Explain 3-Schema + Data Independence (10 marks) <span class="arrow">▼</span></div>
    <div class="acc-body">
        <p>The <strong>3-Schema Architecture</strong> (ANSI/SPARC) separates the database into three levels:</p>
        <p>1. <strong>External Level:</strong> User-specific views. Multiple schemas possible.</p>
        <p>2. <strong>Conceptual Level:</strong> Complete logical structure. Only ONE schema.</p>
        <p>3. <strong>Internal Level:</strong> Physical storage details. Only ONE schema.</p>
        <p><strong>Physical Data Independence:</strong> Ability to modify internal schema without changing conceptual schema. Easier because apps never touch storage details. Example: Changing from sequential to indexed file organization.</p>
        <p><strong>Logical Data Independence:</strong> Ability to modify conceptual schema without changing external schemas. Harder because apps may reference logical structures. Example: Adding a new attribute to a relation.</p>
        <p><strong>Mappings</strong> between levels enable data independence.</p>
    </div>
</div>

<div class="summary-box">
    <h4>📝 Quick Revision</h4>
    <ul>
        <li>Abstraction = Hiding complexity, showing simplicity</li>
        <li>Physical Independence = Change storage → Logical stays same (EASIER)</li>
        <li>Logical Independence = Change structure → Views stay same (HARDER)</li>
    </ul>
</div>

<button class="mark-done-btn" onclick="markDone('data-independence')">✅ Mark as Complete</button>
`;
