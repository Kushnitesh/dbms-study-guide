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

<!-- Question 8 -->
<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">Q8: What is an Entity-Relationship (ER) model? Explain the types of attributes and cardinality constraints with examples. <span class="arrow">▼</span></div>
    <div class="acc-body">
        <p>The <strong>Entity-Relationship (ER) Model</strong> is a conceptual data model used to represent the logical structure of a database in a visual manner. It uses entities, attributes, and relationships to model real-world scenarios.</p>
        
        <h4>Types of Attributes:</h4>
        <ul>
            <li><strong>Simple Attribute:</strong> Cannot be divided further. (e.g., Roll_No)</li>
            <li><strong>Composite Attribute:</strong> Can be divided into smaller sub-parts. (e.g., Name → First_Name, Last_Name)</li>
            <li><strong>Single-valued:</strong> Contains a single value. (e.g., Date of Birth)</li>
            <li><strong>Multi-valued:</strong> Can have multiple values for one entity. Represented by a double oval. (e.g., Phone Numbers)</li>
            <li><strong>Derived Attribute:</strong> Its value is calculated from another attribute. Represented by a dashed oval. (e.g., Age, derived from DOB)</li>
            <li><strong>Key Attribute:</strong> Uniquely identifies an entity. Represented by an underline. (e.g., Aadhaar_No)</li>
        </ul>

        <h4>Cardinality Constraints:</h4>
        <p>Defines the maximum number of relationship instances an entity can participate in.</p>
        <ul>
            <li><strong>One-to-One (1:1):</strong> One entity in A is associated with at most one entity in B. (e.g., One Person has One Passport).</li>
            <li><strong>One-to-Many (1:N):</strong> One entity in A is associated with any number in B. (e.g., One Department has Many Students).</li>
            <li><strong>Many-to-Many (M:N):</strong> Many entities in A are associated with many entities in B. (e.g., Many Students enroll in Many Courses).</li>
        </ul>
    </div>
</div>

<!-- Question 9 -->
<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">Q9: What are the standard rules for converting an ER diagram into Relational Tables? <span class="arrow">▼</span></div>
    <div class="acc-body">
        <p>Converting an ER diagram into SQL tables (relations) follows a strict set of mapping rules:</p>
        <ol>
            <li><strong>Strong Entity:</strong> Create a new table. All simple attributes become columns. The key attribute becomes the Primary Key.</li>
            <li><strong>Weak Entity:</strong> Create a new table. The Primary Key of this new table is a combination of the Owner Entity's Primary Key + the Weak Entity's Partial Key.</li>
            <li><strong>1:1 Relationship:</strong> Add the Primary Key of one table as a Foreign Key in the other table. It is best to add it to the table with total participation.</li>
            <li><strong>1:N Relationship:</strong> The Primary Key of the "1-side" table is added as a Foreign Key into the "N-side" (Many-side) table. <br><em>Example: Dept (1) and Student (N) → Student table gets Dept_ID as a Foreign Key.</em></li>
            <li><strong>M:N Relationship:</strong> Create a completely NEW junction table. The Primary Keys of both participating entities are added as Foreign Keys. Together, they form a composite Primary Key for the new table.</li>
            <li><strong>Multi-valued Attribute:</strong> Create a NEW table. It contains the Primary Key of the entity + the multi-valued attribute itself. Both together form the Primary Key.</li>
            <li><strong>Composite Attribute:</strong> Flatten it out. Only store the simple sub-components as separate columns (e.g., store First_Name and Last_Name, discard "Name").</li>
            <li><strong>Derived Attribute:</strong> Generally ignored/not stored in tables, as it can be calculated dynamically during a query to avoid data inconsistency.</li>
        </ol>
    </div>
</div>

<!-- Question 10 -->
<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">Q10: Define Normalization. Explain 1NF, 2NF, and 3NF with examples. <span class="arrow">▼</span></div>
    <div class="acc-body">
        <p><strong>Normalization</strong> is the process of organizing data to minimize redundancy and avoid insertion, update, and deletion anomalies.</p>
        <ul>
            <li><strong>1NF (First Normal Form):</strong> A table is in 1NF if every attribute is atomic (single-valued). <em>Example:</em> A student cannot have "Phone1, Phone2" in a single column. It must be split into multiple rows.</li>
            <li><strong>2NF (Second Normal Form):</strong> A table is in 2NF if it is in 1NF and contains NO partial dependencies. (Every non-key attribute must depend on the FULL primary key, not just a part of a composite key). <em>Example:</em> In a table with PK (Student_ID, Course_ID), "Student_Name" only depends on Student_ID. This is a partial dependency and violates 2NF.</li>
            <li><strong>3NF (Third Normal Form):</strong> A table is in 3NF if it is in 2NF and contains NO transitive dependencies. (Non-key attributes cannot depend on other non-key attributes). <em>Example:</em> Student_ID → Zip_Code → City. City transitively depends on Student_ID. This violates 3NF.</li>
        </ul>
    </div>
</div>

<!-- Question 11 -->
<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">Q11: What is a Functional Dependency? Differentiate between Partial and Transitive Dependency. <span class="arrow">▼</span></div>
    <div class="acc-body">
        <p>A <strong>Functional Dependency (FD)</strong> is a constraint that specifies the relationship between two sets of attributes, X and Y. Denoted as X → Y (X determines Y).</p>
        <p><strong>Partial Dependency:</strong> Occurs when a non-prime attribute is functionally dependent on only a part of a candidate key. This can ONLY happen if the table has a composite primary key. <em>(Violates 2NF)</em>.</p>
        <p><strong>Transitive Dependency:</strong> Occurs when a non-prime attribute is functionally dependent on another non-prime attribute. Essentially a chain: A → B and B → C, therefore A → C. <em>(Violates 3NF)</em>.</p>
    </div>
</div>

<!-- Question 12 -->
<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">Q12: Differentiate between DDL, DML, DQL, and DCL in SQL. <span class="arrow">▼</span></div>
    <div class="acc-body">
        <ul>
            <li><strong>DDL (Data Definition Language):</strong> Used to define or alter the structure of the database objects (tables, schemas). <em>Commands: CREATE, ALTER, DROP, TRUNCATE.</em></li>
            <li><strong>DML (Data Manipulation Language):</strong> Used to manipulate the actual data present inside the tables. <em>Commands: INSERT, UPDATE, DELETE.</em></li>
            <li><strong>DQL (Data Query Language):</strong> Used to fetch/retrieve data from the database. <em>Commands: SELECT.</em></li>
            <li><strong>DCL (Data Control Language):</strong> Used to manage user permissions and access control. <em>Commands: GRANT, REVOKE.</em></li>
        </ul>
    </div>
</div>

<!-- Question 13 -->
<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">Q13: What are Biological Databases? Discuss their primary goals and architecture. <span class="arrow">▼</span></div>
    <div class="acc-body">
        <p><strong>Biological Databases</strong> are large, organized libraries of persistent biological data (such as genome sequences, protein structures, and metabolic pathways) designed for computerized search and analysis.</p>
        <p><strong>Primary Goals:</strong></p>
        <ul>
            <li><strong>Information Retrieval:</strong> Provide researchers rapid access to existing biological data.</li>
            <li><strong>Knowledge Discovery:</strong> Enable computational algorithms to discover new patterns (e.g., predicting protein functions).</li>
            <li><strong>Data Curation:</strong> Ensure high data quality through expert review.</li>
        </ul>
        <p><strong>Architecture (3-Tier Model):</strong></p>
        <ul>
            <li><strong>Presentation Tier:</strong> The web interface/GUI where users input queries (e.g., NCBI portal).</li>
            <li><strong>Application Tier:</strong> The business logic servers running complex search algorithms like BLAST or FASTA.</li>
            <li><strong>Database Tier:</strong> The actual storage systems (Flat Files, RDBMS, or OODBMS) holding the genetic sequences.</li>
        </ul>
    </div>
</div>

<!-- Question 14 -->
<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">Q14: Compare Flat Files, RDBMS, and OODBMS in the context of biological data storage. <span class="arrow">▼</span></div>
    <div class="acc-body">
        <ul>
            <li><strong>Flat Files:</strong> Store data as plain text (e.g., FASTA). Extremely fast for sequential reading of massive DNA strings, and easy to parse with scripts (Perl/Java). However, they fail at handling complex relationships and lack ACID properties.</li>
            <li><strong>RDBMS (Relational Databases):</strong> Store data in structured tables using SQL. Excellent for data integrity, concurrency control, and querying relationships. However, flattening highly complex 3D biological structures into 2D tables is inefficient.</li>
            <li><strong>OODBMS (Object-Oriented Databases):</strong> Store data as Objects. Perfectly maps to the complex, hierarchical nature of biological data (e.g., a Protein object containing references to Gene objects) without needing complex SQL JOINs. However, they have a steeper learning curve and lack universal standardization compared to SQL.</li>
        </ul>
    </div>
</div>

<button class="mark-done-btn" onclick="markDone('subjective')">✅ Mark Section Complete</button>
`;
