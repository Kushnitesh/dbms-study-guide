// ═══════════════════════════════════════════════════════════════
// QUIZ — 25 MCQs covering all topics
// ═══════════════════════════════════════════════════════════════

SECTIONS['quiz'] = `
<h1>📝 Quiz Yourself</h1>
<p class="subtitle">Test your understanding — 25 questions covering the entire unit</p>

<div class="quiz-score" id="quizScore">Score: 0 / 0</div>
<div id="quizContainer"></div>

<button class="mark-done-btn" onclick="markDone('quiz')">✅ Mark Quiz Complete</button>
`;

// Foundations
QUIZ_DATA.push(
    { q: "What is data?", opts: ["Processed facts", "Raw, unprocessed facts", "Knowledge from experience", "A type of software"], ans: 1, explain: "Data = Raw facts. Information = Processed data. Knowledge = Information + experience." },
    { q: "Which is NOT a function of DBMS?", opts: ["Data security", "Data backup", "Compiling Java programs", "Concurrent access"], ans: 2, explain: "DBMS manages data — it doesn't compile programs. That's a compiler's job." },
    { q: "WhatsApp uses which database on your phone?", opts: ["Oracle", "MySQL", "SQLite", "MongoDB"], ans: 2, explain: "WhatsApp uses SQLite — a lightweight embedded database that runs directly on your device." },
    { q: "Which problem does a file system face that DBMS solves?", opts: ["Data redundancy", "Low hardware cost", "Simplicity", "Single-user access"], ans: 0, explain: "File systems have HIGH data redundancy (duplicate data). DBMS reduces this by centralizing data." },
    { q: "In banking, if a transfer fails midway, DBMS ensures:", opts: ["Only deduction happens", "Only addition happens", "Both happen or neither (Atomicity)", "System shuts down"], ans: 2, explain: "Atomicity = All-or-nothing. Either the entire transaction completes, or none of it does." }
);

// Architecture
QUIZ_DATA.push(
    { q: "Which user has the MOST control over a database?", opts: ["Naive user", "Application programmer", "Database Administrator (DBA)", "Sophisticated user"], ans: 2, explain: "DBA controls schema, security, backup, performance — the most powerful role." },
    { q: "How many conceptual schemas exist in a database?", opts: ["One per user", "One per table", "Exactly one", "Multiple"], ans: 2, explain: "There is only ONE conceptual schema for the entire database. External schemas can be multiple." },
    { q: "The internal level of 3-Schema Architecture deals with:", opts: ["User views", "Logical relationships", "Physical storage and indexing", "Application programs"], ans: 2, explain: "Internal level = Physical storage details: indexing, file organization, storage blocks." },
    { q: "Which type of data independence is HARDER to achieve?", opts: ["Physical", "Logical", "Both equally difficult", "Neither"], ans: 1, explain: "Logical independence is harder because apps often directly reference logical table structures." },
    { q: "Changing indexing from B-Tree to Hash is an example of:", opts: ["Logical Data Independence", "Physical Data Independence", "External schema change", "View modification"], ans: 1, explain: "Changing indexing = changing internal/physical storage. Logical structure stays the same." }
);

// Data Models & ER
QUIZ_DATA.push(
    { q: "Who proposed the Relational Data Model?", opts: ["Peter Chen", "E.F. Codd", "Charles Bachman", "Edgar Dijkstra"], ans: 1, explain: "E.F. Codd proposed the Relational Model in 1970 at IBM. Peter Chen proposed the ER Model." },
    { q: "A multi-valued attribute is represented by:", opts: ["Single oval", "Double oval", "Dashed oval", "Rectangle"], ans: 1, explain: "Double oval = Multi-valued. Single oval = Simple. Dashed oval = Derived." },
    { q: "A weak entity is represented by:", opts: ["Single rectangle", "Double rectangle", "Diamond", "Oval"], ans: 1, explain: "Weak entity = Double rectangle. Strong entity = Single rectangle." },
    { q: "Student-Course relationship (many students, many courses) is:", opts: ["1:1", "1:N", "M:N", "N:1"], ans: 2, explain: "Many students can enroll in many courses = M:N (Many-to-Many)." },
    { q: "Total participation in ER diagram is shown by:", opts: ["Single line", "Double line", "Dashed line", "Arrow"], ans: 1, explain: "Double line (══) = Total participation (MUST participate). Single line = Partial." }
);

// Keys
QUIZ_DATA.push(
    { q: "Which key is a MINIMAL super key?", opts: ["Primary Key", "Candidate Key", "Super Key", "Foreign Key"], ans: 1, explain: "Candidate Key = Minimal super key. Remove any attribute and it loses uniqueness." },
    { q: "How many primary keys can a table have?", opts: ["Multiple", "Zero", "Exactly one", "Depends on DBMS"], ans: 2, explain: "Exactly ONE primary key per table. But it can be composite (multiple attributes)." },
    { q: "A foreign key in table A references:", opts: ["A foreign key in B", "A candidate key in B", "The primary key in B", "Any attribute in B"], ans: 2, explain: "FK references the Primary Key (or a UNIQUE key) of the referenced table." },
    { q: "{Roll, Name, Email} is super key but {Roll} alone is unique. Then {Roll, Name, Email} is:", opts: ["A candidate key", "A super key but NOT candidate key", "A primary key", "A foreign key"], ans: 1, explain: "It's unique (super key) but NOT minimal — {Roll} alone is sufficient. So it's NOT a candidate key." },
    { q: "Which key CAN have NULL values?", opts: ["Primary Key", "Candidate Key", "Foreign Key", "None of these"], ans: 2, explain: "FK can be NULL (partial participation). PK and CK can NEVER be NULL." }
);

// Advanced ER & Relational
QUIZ_DATA.push(
    { q: "Generalization is a:", opts: ["Top-down approach", "Bottom-up approach", "Left-right approach", "None"], ans: 1, explain: "Generalization = Bottom-up (combine similar entities upward). Specialization = Top-down." },
    { q: "In M:N relationship, ER→Table conversion creates:", opts: ["FK in one table", "FK in both tables", "A new relationship table", "No change"], ans: 2, explain: "M:N always creates a NEW junction/relationship table with both PKs as composite PK." },
    { q: "In the relational model, a row is called a:", opts: ["Attribute", "Domain", "Tuple", "Relation"], ans: 2, explain: "Row = Tuple. Column = Attribute. Table = Relation. Data type = Domain." },
    { q: "Entity Integrity states that:", opts: ["FK cannot be NULL", "PK cannot be NULL", "All attributes must be NOT NULL", "No duplicates anywhere"], ans: 1, explain: "Entity Integrity: Primary Key can NEVER be NULL. It's the fundamental identification rule." },
    { q: "ON DELETE CASCADE means:", opts: ["Block delete", "Set FK to NULL", "Delete all related child rows", "Set FK to default"], ans: 2, explain: "CASCADE = Automatically delete all child rows when the parent row is deleted." }
);

// Unit 2: Normalization
QUIZ_DATA.push(
    { q: "Which normal form deals with partial dependencies?", opts: ["1NF", "2NF", "3NF", "BCNF"], ans: 1, explain: "2NF eliminates partial dependencies where a non-key attribute depends on only part of a composite primary key." },
    { q: "What does X → Y mean?", opts: ["Y determines X", "X functionally determines Y", "X equals Y", "X and Y are unrelated"], ans: 1, explain: "X is the determinant and Y is the dependent. Knowing X allows you to uniquely identify Y." },
    { q: "Which normal form requires every determinant to be a candidate key?", opts: ["1NF", "2NF", "3NF", "BCNF"], ans: 3, explain: "BCNF is stricter than 3NF. In BCNF, for every functional dependency X → Y, X MUST be a super/candidate key." },
    { q: "Lossless join decomposition ensures:", opts: ["No data is lost when joining decomposed tables back together", "Tables are smaller", "Queries run faster", "No spurious tuples are generated"], ans: 3, explain: "Lossless join ensures that Natural Join of the decomposed tables gives EXACTLY the original table without any extra 'spurious' rows." }
);

// Unit 2: SQL Basics & Advanced
QUIZ_DATA.push(
    { q: "Which language category does SELECT belong to?", opts: ["DDL", "DML / DQL", "DCL", "TCL"], ans: 1, explain: "SELECT is primarily considered DQL (Data Query Language), which is often grouped under DML." },
    { q: "Which command removes all rows but keeps the table structure intact?", opts: ["DROP", "DELETE", "TRUNCATE", "REMOVE"], ans: 2, explain: "TRUNCATE empties the table instantly and cannot be rolled back (DDL). DELETE removes rows one by one (DML). DROP deletes the structure." },
    { q: "Which JOIN returns all rows from the right table, and matched rows from the left?", opts: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"], ans: 2, explain: "RIGHT JOIN keeps everything on the Right side and puts NULLs on the Left where there is no match." },
    { q: "Can we use aggregate functions (like MAX) in a WHERE clause?", opts: ["Yes, always", "No, never", "Only with HAVING", "Only in subqueries"], ans: 1, explain: "You cannot use aggregate functions directly in a WHERE clause. You must use them in a HAVING clause or a Subquery." }
);

// Unit 2: Relational Algebra
QUIZ_DATA.push(
    { q: "Which relational algebra operation corresponds to the WHERE clause in SQL?", opts: ["Projection (π)", "Selection (σ)", "Rename (ρ)", "Cartesian Product (×)"], ans: 1, explain: "Selection (σ) filters ROWS based on a condition, exactly like the WHERE clause." },
    { q: "Which operation corresponds to the SELECT clause in SQL?", opts: ["Projection (π)", "Selection (σ)", "Rename (ρ)", "Set Difference (-)"], ans: 0, explain: "Projection (π) selects specific COLUMNS, exactly like the SELECT column_name clause in SQL." }
);
