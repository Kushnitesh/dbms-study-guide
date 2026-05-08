// ═══════════════════════════════════════════════════════════════
// SUBJECTIVE QUESTIONS WITH SOLUTIONS
// ═══════════════════════════════════════════════════════════════

SECTIONS['subjective'] = `
<h1>🧠 Subjective Questions</h1>
<p class="subtitle">Unit I — Essential theory questions for university exams and interviews. Click on any question to reveal its solution!</p>

<div class="tip">
    <div class="tip-label">💡 Pro Tip</div>
    <p>Try answering these out loud before clicking to view the solution. This active recall method is the best way to prepare for your exams!</p>
</div>

<!-- Question 1 -->
<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">Q1: Differentiate between a File Processing System and a Database Management System (DBMS). <span class="arrow">▼</span></div>
    <div class="acc-body">
        <p>A <strong>File Processing System</strong> stores data in separate, independent files with no central management, whereas a <strong>DBMS</strong> is a centralized software system that manages interrelated data.</p>
        <p><strong>Key Differences:</strong></p>
        <table>
            <tr><th>Feature</th><th>File System</th><th>DBMS</th></tr>
            <tr><td><strong>Data Redundancy</strong></td><td>High (duplicate data in multiple files)</td><td>Low (controlled redundancy)</td></tr>
            <tr><td><strong>Data Consistency</strong></td><td>Poor (updating one file may leave others outdated)</td><td>High (updates reflect everywhere)</td></tr>
            <tr><td><strong>Querying</strong></td><td>Difficult (requires custom application code)</td><td>Easy (uses standard SQL)</td></tr>
            <tr><td><strong>Data Independence</strong></td><td>None (apps depend on file structure)</td><td>High (logical and physical independence)</td></tr>
            <tr><td><strong>Security & Integrity</strong></td><td>Weak, hard to enforce rules</td><td>Strong, built-in access control and constraints</td></tr>
            <tr><td><strong>Concurrency</strong></td><td>Very difficult (leads to data corruption)</td><td>Managed easily using locks and transactions</td></tr>
        </table>
    </div>
</div>

<!-- Question 2 -->
<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">Q2: Explain the Three-Schema Architecture of a database system. Why is it needed? <span class="arrow">▼</span></div>
    <div class="acc-body">
        <p>The <strong>Three-Schema Architecture (ANSI/SPARC architecture)</strong> separates the database into three levels to achieve data abstraction and data independence.</p>
        <ul>
            <li><strong>1. Internal Level (Physical Schema):</strong> Describes <em>how</em> data is actually stored on the storage media (hard disks). It deals with data structures, indexing (like B-trees), and access paths. There is only ONE internal schema.</li>
            <li><strong>2. Conceptual Level (Logical Schema):</strong> Describes <em>what</em> data is stored in the entire database and their relationships. It hides physical storage details and focuses on entities, data types, and constraints. Used by DBAs. There is only ONE conceptual schema.</li>
            <li><strong>3. External Level (View Schema):</strong> Describes only the part of the database that a specific user group is interested in, hiding the rest. There can be MULTIPLE external schemas (views) for different users (e.g., student view vs. faculty view).</li>
        </ul>
        <p><strong>Why is it needed?</strong> It provides <strong>Data Independence</strong>. It allows us to change the physical storage (like moving to an SSD) without affecting the conceptual schema, and allows changing the conceptual schema (like adding a column) without breaking existing user applications.</p>
    </div>
</div>

<!-- Question 3 -->
<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">Q3: Define and explain Data Independence. Differentiate between Logical and Physical Data Independence. <span class="arrow">▼</span></div>
    <div class="acc-body">
        <p><strong>Data Independence</strong> is the ability to modify a schema definition at one level of the database architecture without affecting a schema definition at the next higher level.</p>
        
        <h4>1. Physical Data Independence</h4>
        <ul>
            <li><strong>Definition:</strong> The ability to modify the <em>Internal Schema</em> without having to alter the Conceptual or External schemas.</li>
            <li><strong>Example:</strong> Changing the file organization from sequential to indexed, or moving data from an HDD to an SSD to improve performance. The logical table structure remains untouched.</li>
            <li><strong>Difficulty:</strong> Easier to achieve because application programs do not depend on physical storage details.</li>
        </ul>

        <h4>2. Logical Data Independence</h4>
        <ul>
            <li><strong>Definition:</strong> The ability to modify the <em>Conceptual Schema</em> without having to alter the External schemas or application programs.</li>
            <li><strong>Example:</strong> Adding a new attribute (column) to a table, or splitting a table into two. The existing views/applications mapping to the old schema still function normally.</li>
            <li><strong>Difficulty:</strong> Harder to achieve because application programs are heavily dependent on the logical structure of the data they access.</li>
        </ul>
    </div>
</div>

<!-- Question 4 -->
<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">Q4: What are Integrity Constraints? Explain Entity Integrity and Referential Integrity with examples. <span class="arrow">▼</span></div>
    <div class="acc-body">
        <p><strong>Integrity Constraints</strong> are rules enforced on data columns of a table to ensure the accuracy, consistency, and reliability of the data in the database.</p>
        
        <h4>1. Entity Integrity</h4>
        <p><strong>Rule:</strong> The Primary Key attribute of a relation cannot contain NULL values.</p>
        <p><strong>Reason:</strong> The primary key is used to uniquely identify each row in a table. If it were NULL, we would have an unidentifiable row, which breaks the relational model.</p>
        <p><strong>Example:</strong> In a <span class="inline-code">STUDENT(Roll_No, Name)</span> table where Roll_No is the Primary Key, you cannot insert a row like <span class="inline-code">(NULL, "Nitesh")</span>.</p>

        <h4>2. Referential Integrity</h4>
        <p><strong>Rule:</strong> A Foreign Key value in one table must either match an existing Primary Key value in the referenced table, or it must be NULL (if allowed).</p>
        <p><strong>Reason:</strong> It prevents "orphan records" and ensures relationships between tables remain valid.</p>
        <p><strong>Example:</strong> If a <span class="inline-code">STUDENT</span> table has a <span class="inline-code">Dept_ID</span> foreign key pointing to the <span class="inline-code">DEPARTMENT</span> table, you cannot insert a student with <span class="inline-code">Dept_ID = 'D05'</span> if department 'D05' does not exist in the DEPARTMENT table.</p>
    </div>
</div>

<!-- Question 5 -->
<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">Q5: Explain the concepts of Super Key, Candidate Key, Primary Key, and Foreign Key with a suitable example. <span class="arrow">▼</span></div>
    <div class="acc-body">
        <p>Consider the table: <span class="inline-code">EMPLOYEE(Emp_ID, Aadhaar_No, Email, Name, Dept_ID)</span></p>
        <ul>
            <li><strong>1. Super Key:</strong> Any set of attributes that can uniquely identify a tuple (row) in a relation. It may contain unnecessary attributes.<br>
            <em>Example:</em> {Emp_ID}, {Aadhaar_No}, {Emp_ID, Name}, {Email, Name} are all super keys.</li>
            
            <li><strong>2. Candidate Key:</strong> A minimal super key. If you remove any attribute from a candidate key, it loses its uniqueness. A table can have multiple candidate keys.<br>
            <em>Example:</em> {Emp_ID}, {Aadhaar_No}, and {Email} are candidate keys. {Emp_ID, Name} is NOT a candidate key because Name is unnecessary for uniqueness.</li>
            
            <li><strong>3. Primary Key:</strong> The one Candidate Key chosen by the database designer to uniquely identify tuples in the table. There can be only ONE primary key per table, and it cannot be NULL.<br>
            <em>Example:</em> We choose {Emp_ID} as the Primary Key. The remaining candidate keys (Aadhaar_No, Email) are called Alternate Keys.</li>
            
            <li><strong>4. Foreign Key:</strong> An attribute (or set of attributes) in one table that references the Primary Key of another table. It establishes a link between data in the two tables.<br>
            <em>Example:</em> {Dept_ID} in the EMPLOYEE table is a foreign key referencing the {Dept_ID} primary key in the DEPARTMENT table.</li>
        </ul>
    </div>
</div>

<!-- Question 6 -->
<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">Q6: Define and contrast Generalization, Specialization, and Aggregation in the Extended ER (EER) model. <span class="arrow">▼</span></div>
    <div class="acc-body">
        <ul>
            <li><strong>Generalization (Bottom-Up):</strong> The process of combining several lower-level entities that share common attributes into a single, higher-level entity superclass. <br>
            <em>Example:</em> Combining <span class="inline-code">CAR</span> and <span class="inline-code">TRUCK</span> into a generalized superclass <span class="inline-code">VEHICLE</span>.</li>
            
            <li><strong>Specialization (Top-Down):</strong> The process of taking a higher-level entity and breaking it down into lower-level sub-entities based on distinguishing characteristics. It is the exact reverse of generalization.<br>
            <em>Example:</em> Taking <span class="inline-code">EMPLOYEE</span> and specializing it into <span class="inline-code">ENGINEER</span>, <span class="inline-code">TECHNICIAN</span>, and <span class="inline-code">SECRETARY</span>.</li>
            
            <li><strong>Aggregation:</strong> An abstraction through which relationships are treated as higher-level entities. This is used when a relationship itself needs to participate in another relationship, which standard ER modeling doesn't allow.<br>
            <em>Example:</em> A <span class="inline-code">PROFESSOR</span> "teaches" a <span class="inline-code">COURSE</span>. If we want to record the <span class="inline-code">EVALUATION</span> of this specific teaching assignment, we aggregate the (Professor-teaches-Course) relationship into a single entity, and link the Evaluation entity to it.</li>
        </ul>
    </div>
</div>

<!-- Question 7 -->
<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">Q7: Explain the roles and responsibilities of a Database Administrator (DBA). <span class="arrow">▼</span></div>
    <div class="acc-body">
        <p>A <strong>Database Administrator (DBA)</strong> is a person (or team) responsible for the central control, maintenance, and security of the database system.</p>
        <p><strong>Key Responsibilities:</strong></p>
        <ol>
            <li><strong>Schema Definition:</strong> The DBA creates the original database schema (logical design) by executing DDL (Data Definition Language) statements.</li>
            <li><strong>Storage Structure and Access Method Definition:</strong> They define how the data is physically stored on the disk and create indexes to speed up access (Internal Schema).</li>
            <li><strong>Granting Authorization (Security):</strong> The DBA determines who gets access to the database and what operations (read, write, delete) they are allowed to perform.</li>
            <li><strong>Routine Maintenance:</strong>
                <ul>
                    <li>Periodic backups of the database (daily/weekly).</li>
                    <li>Ensuring enough free disk space is available for normal operations.</li>
                    <li>Monitoring performance and tuning the database by modifying indexes or storage structures.</li>
                </ul>
            </li>
            <li><strong>Schema and Physical Organization Modification:</strong> Upgrading the database structure as the needs of the organization change over time.</li>
        </ol>
    </div>
</div>

<button class="mark-done-btn" onclick="markDone('subjective')">✅ Mark Section Complete</button>
`;
