// ═══════════════════════════════════════════════════════════════
// FOUNDATIONS: Introduction to Database, DBMS Overview, DB vs File System
// ═══════════════════════════════════════════════════════════════

SECTIONS['db-intro'] = `
<h1>📦 Introduction to Database</h1>
<p class="subtitle">Unit I — Understanding the backbone of every app you use daily</p>

<h2><span class="emoji">🎬</span> Let's Start With a Story</h2>

<div class="analogy">
    <div class="analogy-label">🎯 Real-Life Scenario</div>
    <p>Imagine you're the <strong>Class Representative (CR)</strong> of your B.Tech CSE section. The HOD asks: <em>"Give me the list of all students who scored above 80% in the last exam."</em></p>
    <p><strong>Option A:</strong> You wrote everyone's marks on random pieces of paper, stuffed them in your bag. Now you're searching through 60 crumpled sheets. 😰</p>
    <p><strong>Option B:</strong> You maintained a neat register — Name, Roll No, Subject, Marks — all organized. You filter and give the answer in 10 seconds. 😎</p>
    <p><strong>Option B is basically a database.</strong></p>
</div>

<h2><span class="emoji">🧠</span> Data vs Information vs Knowledge</h2>

<div class="card">
    <table>
        <tr><th>Term</th><th>Meaning</th><th>Example</th></tr>
        <tr><td><strong>Data</strong></td><td>Raw facts, unprocessed</td><td>"Nitesh", "21", "CSE", "85"</td></tr>
        <tr><td><strong>Information</strong></td><td>Processed, meaningful data</td><td>"Nitesh, Roll 21, CSE branch, scored 85% in DBMS"</td></tr>
        <tr><td><strong>Knowledge</strong></td><td>Information + experience</td><td>"Students scoring 85%+ usually get placed in top companies"</td></tr>
    </table>
</div>

<div class="analogy">
    <div class="analogy-label">🍳 Layman Analogy</div>
    <p>Data is like <strong>raw ingredients</strong> (flour, sugar, eggs). Information is the <strong>cake</strong>. Knowledge is knowing <strong>which cake sells the most</strong> in your bakery.</p>
</div>

<h2><span class="emoji">📦</span> What is a Database?</h2>

<div class="card">
    <div class="card-title">📖 Definition</div>
    <p><strong>Simple:</strong> A database is an organized collection of related data that can be easily accessed, managed, and updated.</p>
    <p><strong>Technical:</strong> A database is a shared collection of logically related data (and a description of this data) designed to meet the information needs of an organization.</p>
</div>

<h3>Real-Life Examples of Databases</h3>
<div class="card">
    <table>
        <tr><th>Application</th><th>What's Stored</th><th>Example Data</th></tr>
        <tr><td><strong>Instagram</strong></td><td>Users, posts, likes, comments, followers</td><td>@nitesh → 500 followers, 120 posts</td></tr>
        <tr><td><strong>WhatsApp</strong></td><td>Messages, contacts, groups, media</td><td>Chat with "Mom" → 5000 messages</td></tr>
        <tr><td><strong>Amity University</strong></td><td>Students, faculty, courses, grades</td><td>Roll 21 → DBMS → Grade A</td></tr>
        <tr><td><strong>SBI Bank</strong></td><td>Accounts, transactions, customers</td><td>Acc# 12345 → Balance ₹50,000</td></tr>
        <tr><td><strong>Hospital</strong></td><td>Patients, doctors, prescriptions</td><td>Patient Rahul → Dr. Sharma → Fever</td></tr>
    </table>
</div>

<div class="tip">
    <div class="tip-label">💡 Memory Trick</div>
    <p><strong>D</strong>atabase = <strong>D</strong>ata that is <strong>B</strong>eautifully <strong>A</strong>rranged, <strong>S</strong>earchable, and <strong>E</strong>asy to use.</p>
</div>

<h3>Why is it Needed?</h3>
<div class="card">
    <p>Without a database:</p>
    <ul>
        <li><strong>Instagram</strong> couldn't show you your feed</li>
        <li><strong>Banks</strong> couldn't track your money</li>
        <li><strong>Amazon</strong> couldn't show product recommendations</li>
        <li><strong>Amity</strong> couldn't generate your marksheet</li>
    </ul>
</div>

<div class="danger">
    <div class="danger-label">❌ Common Mistakes Students Make</div>
    <p>1. "Database = Excel sheet" → <strong>Wrong!</strong> A database handles security, multi-user access, backup, crash recovery.<br>
    2. "Database = Software" → <strong>Wrong!</strong> Database is the data collection. The software that manages it is called a DBMS.<br>
    3. Confusing data with information → Data is raw, information is processed.</p>
</div>

<div class="summary-box">
    <h4>📝 Quick Revision — Introduction to Database</h4>
    <ul>
        <li>Data = Raw facts (unprocessed)</li>
        <li>Information = Processed data (meaningful)</li>
        <li>Database = Organized collection of related data</li>
        <li>Every app (Instagram, WhatsApp, Bank) uses a database</li>
        <li>Database ≠ DBMS (Database is data, DBMS is software)</li>
    </ul>
</div>

<button class="mark-done-btn" onclick="markDone('db-intro')">✅ Mark as Complete</button>
`;

// ═══════════════════════════════════════════════════════════════
// OVERVIEW OF DBMS
// ═══════════════════════════════════════════════════════════════

SECTIONS['dbms-overview'] = `
<h1>⚙️ Overview of Database Management System</h1>
<p class="subtitle">Unit I — The super-intelligent manager of all your data</p>

<h2><span class="emoji">🎬</span> Daily-Life Scenario</h2>

<div class="analogy">
    <div class="analogy-label">🎯 Real-Life Analogy</div>
    <p>Your phone has a <strong>File Manager</strong> app that helps you create, search, and delete files. Now imagine a <strong>super-intelligent File Manager</strong> that handles <strong>millions</strong> of records, lets <strong>1000 people</strong> access data at the same time, <strong>protects</strong> data with passwords, <strong>recovers</strong> data if your phone crashes, and makes sure nobody's data gets mixed up. <strong>That super-intelligent manager = DBMS.</strong></p>
</div>

<h2><span class="emoji">📖</span> What is DBMS?</h2>

<div class="card">
    <div class="card-title">📖 Definition</div>
    <p><strong>Simple:</strong> DBMS is software that helps you create, store, manage, and retrieve data from a database — efficiently and securely.</p>
    <p><strong>Technical:</strong> A Database Management System (DBMS) is a collection of interrelated data and a set of programs to access that data. It provides an environment that is both convenient and efficient for storing and retrieving information.</p>
</div>

<h3>Popular DBMS Software</h3>
<div class="card">
    <table>
        <tr><th>DBMS</th><th>Type</th><th>Used By</th></tr>
        <tr><td><strong>MySQL</strong></td><td>Relational</td><td>Facebook, Twitter, YouTube</td></tr>
        <tr><td><strong>PostgreSQL</strong></td><td>Relational</td><td>Instagram, Spotify</td></tr>
        <tr><td><strong>MongoDB</strong></td><td>NoSQL (Document)</td><td>Uber, Forbes</td></tr>
        <tr><td><strong>Oracle</strong></td><td>Relational</td><td>Banks, Government</td></tr>
        <tr><td><strong>SQLite</strong></td><td>Embedded</td><td>Android apps, WhatsApp</td></tr>
        <tr><td><strong>SQL Server</strong></td><td>Relational</td><td>Enterprise / Corporate</td></tr>
    </table>
</div>

<div class="tip">
    <div class="tip-label">🤯 Fun Fact</div>
    <p>WhatsApp stores your local messages using <strong>SQLite</strong> — a tiny database that runs directly on your phone!</p>
</div>

<h2><span class="emoji">🔧</span> Functions of DBMS</h2>

<div class="card">
    <div class="card-title">📚 Think of DBMS as a Librarian</div>
    <table>
        <tr><th>Function</th><th>Librarian Analogy</th><th>DBMS Equivalent</th></tr>
        <tr><td><strong>Store</strong></td><td>Keeps books on shelves</td><td>Stores data in tables</td></tr>
        <tr><td><strong>Retrieve</strong></td><td>Finds the book you ask for</td><td>Answers your queries (SELECT)</td></tr>
        <tr><td><strong>Update</strong></td><td>Replaces old edition with new</td><td>Modifies records (UPDATE)</td></tr>
        <tr><td><strong>Delete</strong></td><td>Removes damaged books</td><td>Removes records (DELETE)</td></tr>
        <tr><td><strong>Security</strong></td><td>Only members can enter</td><td>User authentication & authorization</td></tr>
        <tr><td><strong>Backup</strong></td><td>Photocopy of rare books</td><td>Data backup & recovery</td></tr>
        <tr><td><strong>Concurrency</strong></td><td>Multiple people reading different books</td><td>Multiple users accessing data simultaneously</td></tr>
    </table>
</div>

<h2><span class="emoji">✅</span> Advantages of DBMS</h2>

<div class="card">
    <table>
        <tr><th>#</th><th>Advantage</th><th>Explanation</th><th>Example</th></tr>
        <tr><td>1</td><td><strong>Reduced Redundancy</strong></td><td>No duplicate data</td><td>Student address stored once, not in every department</td></tr>
        <tr><td>2</td><td><strong>Data Consistency</strong></td><td>One update reflects everywhere</td><td>Change phone once → updated in library, hostel, exam</td></tr>
        <tr><td>3</td><td><strong>Data Sharing</strong></td><td>Multiple users, same data</td><td>Professors and students both access Amizone</td></tr>
        <tr><td>4</td><td><strong>Data Security</strong></td><td>Access control</td><td>Only admin can see salary data</td></tr>
        <tr><td>5</td><td><strong>Data Integrity</strong></td><td>Rules enforced</td><td>Age can't be negative, Roll No can't be duplicate</td></tr>
        <tr><td>6</td><td><strong>Backup & Recovery</strong></td><td>Survive crashes</td><td>Bank system crashes → recovers all transactions</td></tr>
        <tr><td>7</td><td><strong>Concurrent Access</strong></td><td>Multiple users at once</td><td>1000 students checking results simultaneously</td></tr>
    </table>
</div>

<h3>Disadvantages of DBMS</h3>
<div class="card">
    <table>
        <tr><th>#</th><th>Disadvantage</th><th>Why?</th></tr>
        <tr><td>1</td><td><strong>Complexity</strong></td><td>Requires trained personnel</td></tr>
        <tr><td>2</td><td><strong>Cost</strong></td><td>Oracle license can cost lakhs</td></tr>
        <tr><td>3</td><td><strong>Hardware Needs</strong></td><td>Needs powerful servers</td></tr>
        <tr><td>4</td><td><strong>Single Point of Failure</strong></td><td>If DBMS crashes, all apps depending on it are affected</td></tr>
    </table>
</div>

<h2><span class="emoji">🏢</span> How Companies Use DBMS</h2>
<div class="card">
    <ul>
        <li><strong>Google:</strong> Uses Bigtable (custom DBMS) to store search indexes for billions of web pages</li>
        <li><strong>Amazon:</strong> Uses DynamoDB to handle millions of orders per day</li>
        <li><strong>Netflix:</strong> Uses Cassandra to store viewing history of 200M+ users</li>
        <li><strong>Instagram:</strong> Uses PostgreSQL to store user profiles, posts, and stories</li>
    </ul>
</div>

<div class="danger">
    <div class="danger-label">❌ Common Mistakes</div>
    <p>1. "DBMS and Database are the same" → <strong>No!</strong> Database = data. DBMS = software.<br>
    2. "DBMS is only MySQL" → <strong>No!</strong> MySQL is ONE example.<br>
    3. Forgetting disadvantages in exams → Always mention cost, complexity, hardware needs.</p>
</div>

<div class="summary-box">
    <h4>📝 Quick Revision — DBMS Overview</h4>
    <ul>
        <li>DBMS = Software to create, manage, retrieve data</li>
        <li>Examples: MySQL, PostgreSQL, Oracle, MongoDB, SQLite</li>
        <li>Key functions: Store, Retrieve, Update, Delete, Secure, Backup</li>
        <li>Advantages: No redundancy, consistency, sharing, security, integrity</li>
        <li>Disadvantages: Cost, complexity, hardware needs</li>
    </ul>
</div>

<button class="mark-done-btn" onclick="markDone('dbms-overview')">✅ Mark as Complete</button>
`;

// ═══════════════════════════════════════════════════════════════
// DATABASE SYSTEM vs FILE SYSTEM
// ═══════════════════════════════════════════════════════════════

SECTIONS['db-vs-file'] = `
<h1>⚔️ Database System vs File System</h1>
<p class="subtitle">Unit I — Why the world moved from files to databases</p>

<h2><span class="emoji">🎬</span> Two Shopkeepers</h2>

<div class="analogy">
    <div class="analogy-label">🎯 Real-Life Scenario</div>
    <p><strong>Shopkeeper A (File System):</strong> Writes every transaction in a paper notebook. Has separate notebooks for customers, stock, billing. If address changes, update ALL notebooks. If shop catches fire, ALL records gone.</p>
    <p><strong>Shopkeeper B (Database System):</strong> Uses a computerized billing system. All data in one organized system. Change address once → updated everywhere. Has cloud backup → fire can't destroy records.</p>
</div>

<h2><span class="emoji">📂</span> What is a File System?</h2>

<div class="card">
    <p>A file system stores data in <strong>separate files</strong> on disk. Each application has its own files, with no central control.</p>
    <div class="diagram-box">
        <div class="diagram-label">📊 College File System Example</div>
<pre>
📁 Admission_Office/
    └── students.txt      → Name, Roll, Branch
📁 Exam_Department/
    └── results.txt       → Roll, Subject, Marks
📁 Library/
    └── members.txt       → Name, Roll, Books_Issued
📁 Hostel/
    └── residents.txt     → Name, Roll, Room_No
</pre>
    </div>
    <p><strong>Problem:</strong> Student "Nitesh" appears in ALL four files. His name is stored 4 times! Change his name → update 4 files manually.</p>
</div>

<h2><span class="emoji">⚔️</span> The Grand Comparison</h2>

<div class="card">
    <table>
        <tr><th>Feature</th><th>File System</th><th>Database System</th></tr>
        <tr><td><strong>Data Redundancy</strong></td><td>HIGH — same data in many files</td><td>LOW — data stored once</td></tr>
        <tr><td><strong>Data Consistency</strong></td><td>Poor — update one file, others remain old</td><td>Good — update once, reflected everywhere</td></tr>
        <tr><td><strong>Data Security</strong></td><td>Minimal</td><td>Strong — role-based access control</td></tr>
        <tr><td><strong>Concurrent Access</strong></td><td>Difficult — file corruption</td><td>Handled — locking mechanisms</td></tr>
        <tr><td><strong>Backup & Recovery</strong></td><td>Manual</td><td>Automatic — DBMS handles it</td></tr>
        <tr><td><strong>Data Integrity</strong></td><td>No enforcement</td><td>Rules enforced — constraints</td></tr>
        <tr><td><strong>Query Language</strong></td><td>No — write custom code</td><td>Yes — SQL</td></tr>
        <tr><td><strong>Crash Recovery</strong></td><td>Data may be lost</td><td>Transaction logs ensure recovery</td></tr>
        <tr><td><strong>Cost</strong></td><td>Low</td><td>Higher</td></tr>
    </table>
</div>

<h2><span class="emoji">🔍</span> Problems of File System (In Detail)</h2>

<div class="step-box"><div class="step-num">1</div><div class="step-content"><p><strong>Data Redundancy & Inconsistency:</strong> Same data duplicated. Admission file says Phone: 9876543210, Library file says Phone: 9999999999. Same person, different values = Inconsistency.</p></div></div>

<div class="step-box"><div class="step-num">2</div><div class="step-content"><p><strong>Difficulty in Accessing Data:</strong> Want "all CSE students who scored above 80 and live in hostel Block C"? In File System: Write a custom program. In DBMS: <span class="inline-code">SELECT name FROM students WHERE branch='CSE' AND marks>80 AND block='C';</span></p></div></div>

<div class="step-box"><div class="step-num">3</div><div class="step-content"><p><strong>Integrity Problems:</strong> Nothing stops you from entering Age = -5 or Marks = 500. DBMS enforces: <span class="inline-code">CHECK (marks BETWEEN 0 AND 100)</span></p></div></div>

<div class="step-box"><div class="step-num">4</div><div class="step-content"><p><strong>Atomicity Problems:</strong> Bank transfer — Deduct ₹5000 from A ✅, Add ₹5000 to B ❌ (crash!). In File System: Money vanished! In DBMS: Either BOTH happen, or NEITHER happens.</p></div></div>

<div class="step-box"><div class="step-num">5</div><div class="step-content"><p><strong>Concurrent Access:</strong> Two people withdraw from same account simultaneously. Both read ₹10,000. Both withdraw. Balance should prevent this. DBMS uses locking.</p></div></div>

<div class="step-box"><div class="step-num">6</div><div class="step-content"><p><strong>Security:</strong> File system = all-or-nothing access. DBMS = Professor can see marks but not salary. Accountant can see salary but not marks.</p></div></div>

<div class="warning">
    <div class="warning-label">⚠️ Common Mistakes</div>
    <p>"File system has NO advantages" → <strong>Wrong!</strong> File systems are simpler and cheaper for small, single-user apps. For a to-do list, a file might be enough.</p>
</div>

<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">🎓 University Answer: Compare DB System vs File System (10 marks) <span class="arrow">▼</span></div>
    <div class="acc-body">
        <p>A <strong>File System</strong> stores data in separate, independent files with no central management. A <strong>Database System</strong> uses a DBMS to store, manage, and retrieve data from a centralized database.</p>
        <p><strong>Problems of File-Based Approach:</strong></p>
        <p>1. <strong>Data Redundancy and Inconsistency</strong> — same data duplicated, leading to inconsistent values.</p>
        <p>2. <strong>Difficulty in Data Access</strong> — no standard query language; custom programs needed.</p>
        <p>3. <strong>Data Isolation</strong> — data scattered in different formats.</p>
        <p>4. <strong>Integrity Problems</strong> — no mechanism to enforce constraints.</p>
        <p>5. <strong>Atomicity Problems</strong> — partial execution during failure leaves inconsistent data.</p>
        <p>6. <strong>Concurrent Access Anomalies</strong> — no concurrency control.</p>
        <p>7. <strong>Security Problems</strong> — limited, all-or-nothing access control.</p>
        <p><strong>Conclusion:</strong> These limitations necessitated the development of DBMS, which provides centralized control, data independence, integrity, concurrency management, security, and efficient querying through SQL.</p>
    </div>
</div>

<div class="summary-box">
    <h4>📝 Quick Revision — DB vs File System</h4>
    <ul>
        <li>File System = Data in separate files, no central control</li>
        <li>Database System = Centralized, managed by DBMS</li>
        <li>Key problems: Redundancy, Inconsistency, No security, No concurrency, No atomicity</li>
        <li>DBMS solves ALL these but costs more</li>
        <li>For exams: Always compare using a TABLE format</li>
    </ul>
</div>

<button class="mark-done-btn" onclick="markDone('db-vs-file')">✅ Mark as Complete</button>
`;
