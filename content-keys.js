// ═══════════════════════════════════════════════════════════════
// KEYS: Super Key, Candidate Key, Primary Key, Foreign Key, Composite Key
// ═══════════════════════════════════════════════════════════════

SECTIONS['keys-all'] = `
<h1>🔑 All Keys Explained</h1>
<p class="subtitle">Unit I — Super Key, Candidate Key, Primary Key, Foreign Key, Composite Key</p>

<h2><span class="emoji">🎬</span> How Does the World Identify YOU?</h2>
<div class="card">
    <table>
        <tr><th>System</th><th>How They Identify You</th><th>That's a KEY!</th></tr>
        <tr><td><strong>Aadhaar</strong></td><td>12-digit Aadhaar number</td><td>Unique to every citizen</td></tr>
        <tr><td><strong>College</strong></td><td>Roll Number</td><td>Unique in your class</td></tr>
        <tr><td><strong>Instagram</strong></td><td>@username</td><td>Unique globally</td></tr>
        <tr><td><strong>Bank</strong></td><td>Account Number</td><td>Unique to your account</td></tr>
        <tr><td><strong>Phone</strong></td><td>Mobile Number</td><td>Unique to your SIM</td></tr>
    </table>
    <p><strong>Without keys, how would the bank know which account to debit? Keys prevent chaos.</strong></p>
</div>

<h2><span class="emoji">🏗️</span> Key Hierarchy</h2>
<div class="diagram-box">
    <div class="diagram-label">📊 How Keys Relate to Each Other</div>
<pre>
                ┌────────────────┐
                │   SUPER KEY    │  ← Largest set (any combo that's unique)
                │                │
                │  ┌──────────┐  │
                │  │CANDIDATE │  │  ← Minimal super keys
                │  │  KEY     │  │
                │  │ ┌──────┐ │  │
                │  │ │PRIMARY│ │  │  ← THE chosen candidate key
                │  │ │ KEY   │ │  │
                │  │ └──────┘ │  │
                │  └──────────┘  │
                └────────────────┘

 ALTERNATE KEY = Candidate Keys NOT chosen as Primary Key
 FOREIGN KEY  = References the Primary Key of ANOTHER table
 COMPOSITE KEY = A key made of MULTIPLE attributes
</pre>
</div>

<div class="analogy">
    <div class="analogy-label">🗳️ Election Analogy</div>
    <p><strong>Super Key</strong> = ALL eligible candidates (even with extra baggage) • <strong>Candidate Key</strong> = Shortlisted candidates (minimal, no extras) • <strong>Primary Key</strong> = The WINNER (the one chosen) • <strong>Alternate Key</strong> = The runners-up</p>
</div>

<h3>Working Example — STUDENT Table</h3>
<div class="diagram-box">
    <div class="diagram-label">📊 Sample Table</div>
<pre>
┌──────┬──────────┬─────────────┬────────┬──────────────┬────────┐
│ Roll │  Name    │   Email     │ Phone  │  Aadhaar     │ Branch │
├──────┼──────────┼─────────────┼────────┼──────────────┼────────┤
│ 101  │ Nitesh   │ n@mail.com  │ 98765  │ 1234-5678    │  CSE   │
│ 102  │ Priya    │ p@mail.com  │ 87654  │ 2345-6789    │  ECE   │
│ 103  │ Rahul    │ r@mail.com  │ 76543  │ 3456-7890    │  CSE   │
│ 104  │ Sneha    │ s@mail.com  │ 65432  │ 4567-8901    │  ME    │
└──────┴──────────┴─────────────┴────────┴──────────────┴────────┘
</pre>
</div>

<h2><span class="emoji">🔑</span> Super Key</h2>
<div class="card">
    <div class="card-title">Any combination that uniquely identifies each row (CAN have extras)</div>
    <table>
        <tr><th>Combination</th><th>Unique?</th><th>Super Key?</th></tr>
        <tr><td>{Roll}</td><td>✅</td><td>✅ Yes</td></tr>
        <tr><td>{Email}</td><td>✅</td><td>✅ Yes</td></tr>
        <tr><td>{Roll, Name}</td><td>✅</td><td>✅ Yes (Name is extra but doesn't hurt)</td></tr>
        <tr><td>{Roll, Name, Branch, Email}</td><td>✅</td><td>✅ Yes (lots of extras)</td></tr>
        <tr><td>{Name}</td><td>❌</td><td>❌ No (two Rahuls possible)</td></tr>
        <tr><td>{Branch}</td><td>❌</td><td>❌ No (many in CSE)</td></tr>
    </table>
</div>

<h2><span class="emoji">🔑</span> Candidate Key</h2>
<div class="card">
    <div class="card-title">MINIMAL super key — remove any attribute and it loses uniqueness</div>
    <table>
        <tr><th>Super Key</th><th>Minimal?</th><th>Candidate Key?</th></tr>
        <tr><td>{Roll}</td><td>✅</td><td>✅ YES</td></tr>
        <tr><td>{Email}</td><td>✅</td><td>✅ YES</td></tr>
        <tr><td>{Phone}</td><td>✅</td><td>✅ YES</td></tr>
        <tr><td>{Aadhaar}</td><td>✅</td><td>✅ YES</td></tr>
        <tr><td>{Roll, Name}</td><td>❌ (remove Name, still unique)</td><td>❌ NO</td></tr>
    </table>
    <p><strong>Candidate Keys:</strong> {Roll}, {Email}, {Phone}, {Aadhaar} → 4 candidate keys!</p>
</div>

<div class="tip">
    <div class="tip-label">💡 Key Insight</div>
    <p>Every candidate key IS a super key, but NOT every super key is a candidate key. <strong>Candidate Key = Super Key − Extra Attributes.</strong></p>
</div>

<h2><span class="emoji">🏆</span> Primary Key</h2>
<div class="card">
    <div class="card-title">THE ONE candidate key chosen as the main identifier</div>
    <table>
        <tr><th>Candidate Key</th><th>Good PK?</th><th>Why?</th></tr>
        <tr><td>{Roll}</td><td>✅ Best choice</td><td>Short, integer, auto-incrementable, never changes</td></tr>
        <tr><td>{Email}</td><td>⚠️ Okay</td><td>Can change (student switches email)</td></tr>
        <tr><td>{Phone}</td><td>⚠️ Risky</td><td>Can change (new SIM card)</td></tr>
        <tr><td>{Aadhaar}</td><td>⚠️ Sensitive</td><td>Privacy concerns, long number</td></tr>
    </table>
    <p><strong>Winner: {Roll} is chosen as Primary Key! 🏆</strong></p>
    <p>The rest ({Email}, {Phone}, {Aadhaar}) become <strong>Alternate Keys</strong>.</p>
</div>

<div class="card">
    <div class="card-title">Rules for Primary Key</div>
    <table>
        <tr><th>Rule</th><th>Explanation</th></tr>
        <tr><td><strong>Unique</strong></td><td>No two rows can have the same PK value</td></tr>
        <tr><td><strong>NOT NULL</strong></td><td>PK can NEVER be empty</td></tr>
        <tr><td><strong>Immutable</strong></td><td>Should not change over time</td></tr>
        <tr><td><strong>Minimal</strong></td><td>Use fewest attributes possible</td></tr>
        <tr><td><strong>Single</strong></td><td>Only ONE primary key per table</td></tr>
    </table>
</div>

<h2><span class="emoji">🔗</span> Foreign Key</h2>
<div class="card">
    <p>An attribute in one table that <strong>references the primary key</strong> of another table.</p>
    <div class="diagram-box">
<pre>
STUDENT Table:                     DEPARTMENT Table:
┌──────┬────────┬─────────┐       ┌─────────┬───────────┐
│ Roll │ Name   │ Dept_ID │──────→│ Dept_ID │ Dept_Name │
│ (PK) │        │  (FK)   │       │  (PK)   │           │
├──────┼────────┼─────────┤       ├─────────┼───────────┤
│ 101  │ Nitesh │  D01    │       │  D01    │   CSE     │
│ 102  │ Priya  │  D02    │       │  D02    │   ECE     │
└──────┴────────┴─────────┘       └─────────┴───────────┘
</pre>
    </div>
    <p>Dept_ID in STUDENT is a <strong>Foreign Key</strong> referencing Dept_ID (PK) in DEPARTMENT.</p>
</div>

<h2><span class="emoji">🧩</span> Composite Key</h2>
<div class="card">
    <p>A key made of <strong>TWO OR MORE attributes</strong> combined.</p>
    <div class="diagram-box">
<pre>
ENROLLMENT Table:
┌──────┬───────────┬───────┐
│ Roll │ Course_ID │ Grade │
├──────┼───────────┼───────┤
│ 101  │   CS201   │   A   │  ← Roll 101 appears twice
│ 101  │   CS202   │   B   │  ← Course CS201 appears twice
│ 102  │   CS201   │   A+  │
└──────┴───────────┴───────┘

Roll alone? ❌   Course_ID alone? ❌
{Roll, Course_ID} together? ✅ (each combo is unique!)
</pre>
    </div>
    <p><strong>{Roll, Course_ID} = Composite Primary Key</strong></p>
</div>

<h2><span class="emoji">📊</span> THE GRAND COMPARISON</h2>
<div class="card">
    <table>
        <tr><th>Key Type</th><th>Unique?</th><th>NULL?</th><th>How Many?</th><th>Extras?</th></tr>
        <tr><td><strong>Super Key</strong></td><td>✅</td><td>Depends</td><td>Many</td><td>✅ Allowed</td></tr>
        <tr><td><strong>Candidate Key</strong></td><td>✅</td><td>❌</td><td>Multiple</td><td>❌ Minimal</td></tr>
        <tr><td><strong>Primary Key</strong></td><td>✅</td><td>❌ Never</td><td>Only ONE</td><td>❌ Minimal</td></tr>
        <tr><td><strong>Alternate Key</strong></td><td>✅</td><td>❌</td><td>Multiple</td><td>❌ Minimal</td></tr>
        <tr><td><strong>Foreign Key</strong></td><td>❌</td><td>✅ Can be</td><td>Multiple</td><td>N/A</td></tr>
        <tr><td><strong>Composite Key</strong></td><td>✅</td><td>Depends</td><td>Can be any type</td><td>Multi-attr</td></tr>
    </table>
</div>

<h3>Real-World Key Examples</h3>
<div class="card">
    <table>
        <tr><th>System</th><th>Table</th><th>Primary Key</th><th>Foreign Key</th><th>Alternate Key</th></tr>
        <tr><td><strong>Instagram</strong></td><td>Users</td><td>User_ID</td><td>—</td><td>Username, Email</td></tr>
        <tr><td><strong>Instagram</strong></td><td>Posts</td><td>Post_ID</td><td>User_ID → Users</td><td>—</td></tr>
        <tr><td><strong>Amazon</strong></td><td>Orders</td><td>Order_ID</td><td>Customer_ID → Customers</td><td>—</td></tr>
        <tr><td><strong>Amity</strong></td><td>Students</td><td>Roll_No</td><td>Dept_ID → Departments</td><td>Enrollment_No</td></tr>
    </table>
</div>

<div class="danger">
    <div class="danger-label">❌ Common Mistakes</div>
    <p>1. "PK and CK are the same" → <strong>No!</strong> PK is ONE chosen from multiple CKs.<br>
    2. "PK can be NULL" → <strong>NEVER!</strong><br>
    3. "FK must be unique" → <strong>No!</strong> Many students can have same Dept_ID.<br>
    4. "A table can have multiple PKs" → <strong>No!</strong> Only ONE PK (but it can be composite).<br>
    5. "Composite key = multiple keys" → <strong>No!</strong> Composite = ONE key made of multiple attributes.</p>
</div>

<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">🎓 University Answer: Define all key types with examples (10 marks) <span class="arrow">▼</span></div>
    <div class="acc-body">
        <p><strong>1. Super Key:</strong> A set of one or more attributes that uniquely identifies a tuple. May have unnecessary attributes. Example: {Roll} and {Roll, Name} are both super keys.</p>
        <p><strong>2. Candidate Key:</strong> A minimal super key — removing any attribute destroys uniqueness. Example: {Roll} and {Email} if both unique.</p>
        <p><strong>3. Primary Key:</strong> The candidate key chosen by the DBA. Only ONE per table. Cannot be NULL. Example: Roll_No.</p>
        <p><strong>4. Alternate Key:</strong> Candidate keys not selected as PK. Example: If Roll is PK, then Email and Phone are alternate keys.</p>
        <p><strong>5. Foreign Key:</strong> An attribute referencing the PK of another table. Establishes a link. Example: Dept_ID in STUDENT references Dept_ID in DEPARTMENT.</p>
        <p><strong>Hierarchy:</strong> Every PK is a CK. Every CK is a Super Key. Reverse is not true.</p>
    </div>
</div>

<div class="summary-box">
    <h4>📝 Quick Revision</h4>
    <ul>
        <li>Super Key = Any unique combo (can have extras)</li>
        <li>Candidate Key = Minimal super key (no extras)</li>
        <li>Primary Key = THE chosen CK (ONE per table, NOT NULL)</li>
        <li>Alternate Key = CKs NOT chosen as PK</li>
        <li>Foreign Key = References another table's PK</li>
        <li>Composite Key = Key with 2+ attributes</li>
        <li>Hierarchy: Super ⊇ Candidate ⊇ Primary</li>
    </ul>
</div>
<button class="mark-done-btn" onclick="markDone('keys-all')">✅ Mark as Complete</button>
`;
