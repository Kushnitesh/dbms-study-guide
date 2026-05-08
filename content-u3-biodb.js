// ═══════════════════════════════════════════════════════════════
// UNIT III: BIOLOGICAL DATABASES
// ═══════════════════════════════════════════════════════════════

SECTIONS['biodb-intro'] = `
<h1>🧬 Biological Databases</h1>
<p class="subtitle">Unit III — Where Computer Science meets Biology</p>

<h2><span class="emoji">🎬</span> Why do we need Biological Databases?</h2>
<div class="analogy">
    <div class="analogy-label">🎯 Daily-Life Intuition</div>
    <p>Imagine trying to write down the entire genetic code (DNA) of a human being in a notebook. The human genome has 3.2 billion letters (A, C, G, T). It would take 130 thick books just to print it once! Now imagine millions of scientists trying to search, compare, and analyze this data.</p>
    <p><strong>Biological Databases</strong> are massive, highly specialized digital libraries that store biological data (DNA sequences, protein structures, etc.) so computers can instantly search and analyze them.</p>
</div>

<div class="card">
    <div class="card-title">📖 Technical Definition</div>
    <p>A <strong>Biological Database</strong> is a large, organized body of persistent data, usually associated with computerized software designed to update, query, and retrieve components of the data stored within the system. The primary data includes nucleic acid sequences, protein sequences, and macromolecular structures.</p>
</div>

<h2><span class="emoji">🏗️</span> Architecture and Goals</h2>
<h3>Primary Goals:</h3>
<ol>
    <li><strong>Information Retrieval:</strong> Provide scientists with rapid access to existing biological data.</li>
    <li><strong>Knowledge Discovery:</strong> Allow algorithms to find new patterns (e.g., predicting a protein's function based on its sequence similarity to known proteins).</li>
    <li><strong>Data Curation:</strong> Maintain high data quality by having experts manually review submitted genetic sequences.</li>
</ol>

<h3>General Architecture (3-Tier Model):</h3>
<div class="diagram-box">
<pre>
┌─────────────────────────────────────────────────────┐
│ 1. PRESENTATION TIER (Web Interface / Portal)       │
│    How the biologist searches (e.g., NCBI Website)  │
└─────────────────────────┬───────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────┐
│ 2. APPLICATION TIER (Business Logic)                │
│    Search algorithms like BLAST and FASTA running   │
│    on powerful servers.                             │
└─────────────────────────┬───────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────┐
│ 3. DATABASE TIER (Storage)                          │
│    The actual RDBMS or Flat Files storing petabytes │
│    of genetic sequences.                            │
└─────────────────────────────────────────────────────┘
</pre>
</div>
<button class="mark-done-btn" onclick="markDone('biodb-intro')">✅ Mark Section Complete</button>
`;

SECTIONS['biodb-storage'] = `
<h1>💾 Storage Types in Bio-DBs</h1>
<p class="subtitle">Unit III — Flat Files, Relational, and Object-Oriented</p>

<h2><span class="emoji">📁</span> 1. Flat Files</h2>
<div class="card">
    <p>Early biological databases didn't use SQL! They simply used massive plain text files called <strong>Flat Files</strong>.</p>
    <p><strong>Why?</strong> DNA sequences are just very long strings of text (e.g., "ATGCCTAG..."). Storing them in a single text file was incredibly fast to read sequentially.</p>
    <p><strong>Format Example (FASTA):</strong></p>
<pre>
>Sequence_ID_1234 Human Insulin
MALWMRLLPLLALLALWGPDPAAAFVNQHLCGSHLVEALYLVCGERGFFYTPKTRREAED
LQVGQVELGGGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLENYCN
</pre>
    <p><strong>Disadvantage:</strong> Very hard to query complex relationships (e.g., "Find all proteins discovered in 2022 that interact with Insulin").</p>
</div>

<h2><span class="emoji">📊</span> 2. Relational Databases (RDBMS)</h2>
<div class="card">
    <p>As biological data grew complex (linking a gene to a protein, to a disease, to a publication), Flat Files failed. Scientists moved to standard <strong>Relational Databases</strong> (like Oracle and MySQL).</p>
    <p><strong>Advantage:</strong> Can use SQL, guarantees ACID properties, handles complex joins.</p>
    <p><strong>Disadvantage:</strong> Biological data is highly nested and hierarchical. Flattening a 3D protein structure into 2D tables is inefficient.</p>
</div>

<h2><span class="emoji">📦</span> 3. Object-Oriented Databases (OODBMS)</h2>
<div class="card">
    <p>Instead of storing data in tables, OODBMS stores data as <strong>Objects</strong> (just like in Java or C++). A "Protein" object can contain its sequence, its 3D coordinates, and a list of references to other "Gene" objects.</p>
    <p><strong>Advantage:</strong> Perfectly maps to complex biological structures without needing massive SQL JOINs.</p>
    <p><strong>Disadvantage:</strong> Steeper learning curve and less standardization compared to SQL.</p>
</div>
<button class="mark-done-btn" onclick="markDone('biodb-storage')">✅ Mark Section Complete</button>
`;

SECTIONS['biodb-resources'] = `
<h1>🔬 Bioinformatics Resources & Interoperability</h1>
<p class="subtitle">Unit III — The tools and databases of the trade</p>

<h2><span class="emoji">📚</span> Primary vs Secondary Databases</h2>
<ul>
    <li><strong>Primary Databases:</strong> Store raw, experimentally derived data. (e.g., A scientist sequences a virus and uploads the raw DNA).<br><em>Examples:</em> <strong>GenBank</strong> (USA), <strong>EMBL</strong> (Europe), <strong>DDBJ</strong> (Japan).</li>
    <li><strong>Secondary Databases:</strong> Store highly curated, analyzed, and derived data. (e.g., The 3D structure of the protein that the virus DNA creates).<br><em>Examples:</em> <strong>PDB</strong> (Protein Data Bank), <strong>SWISS-PROT</strong>.</li>
</ul>

<h2><span class="emoji">🛠️</span> Packages, Programs, and Tools</h2>
<div class="card">
    <div class="card-title">BLAST (Basic Local Alignment Search Tool)</div>
    <p>The "Google Search" of Bioinformatics! You input an unknown DNA sequence, and BLAST rapidly compares it against the entire GenBank database to find similar sequences.</p>
</div>

<div class="card">
    <div class="card-title">FASTA</div>
    <p>Another popular sequence alignment tool, older than BLAST. It uses a specific text format (the FASTA format) that has become the universal standard for sharing sequences.</p>
</div>

<hr>

<h2><span class="emoji">🌐</span> Heterogeneous Databases & Interoperability</h2>
<div class="analogy">
    <div class="analogy-label">🎯 The Communication Problem</div>
    <p>Imagine GenBank in the USA uses Oracle SQL, EMBL in Europe uses Flat Files, and PDB uses an Object-Oriented DB. How do they share data? This is the problem of <strong>Heterogeneous Databases</strong>.</p>
</div>
<p><strong>Interoperability</strong> is the ability of these different systems to seamlessly communicate. This is achieved using:</p>
<ul>
    <li><strong>Common APIs:</strong> Standardized web services (REST/SOAP) that act as translators between databases.</li>
    <li><strong>XML and JSON:</strong> Universal data exchange formats. No matter how the database stores the data internally, it exports it as standard XML.</li>
</ul>

<hr>

<h2><span class="emoji">🤖</span> Automated Retrieval (Perl & Java)</h2>
<p>Biologists don't sit and manually download 50,000 sequences from a website. They write scripts for <strong>Automated Retrieval</strong>.</p>

<div class="compare-grid">
    <div class="compare-card">
        <h4>BioPerl (Perl)</h4>
        <p>Historically the king of bioinformatics. Perl is incredible at text processing and Regular Expressions, making it perfect for parsing massive Flat Files and extracting genetic patterns.</p>
    </div>
    <div class="compare-card">
        <h4>BioJava (Java)</h4>
        <p>An open-source project providing Java tools for processing biological data. It is heavily used in enterprise environments and for building complex graphical bioinformatics software due to Java's Object-Oriented nature.</p>
    </div>
</div>

<div class="accordion">
    <div class="acc-header" onclick="toggleAcc(this)">🎓 University Answer: Flat Files vs Relational DBs in Bioinformatics (5 marks) <span class="arrow">▼</span></div>
    <div class="acc-body">
        <p><strong>Flat Files:</strong></p>
        <ul>
            <li>Store biological data as plain text (e.g., FASTA format).</li>
            <li><strong>Pros:</strong> Extremely fast for sequential reading; easy to parse using scripts like Perl.</li>
            <li><strong>Cons:</strong> High data redundancy; difficult to query complex relationships; no concurrency control or ACID properties.</li>
        </ul>
        <p><strong>Relational Databases (RDBMS):</strong></p>
        <ul>
            <li>Store biological data in structured tables using rows and columns.</li>
            <li><strong>Pros:</strong> Powerful SQL querying capabilities; ensures data integrity; supports concurrent access.</li>
            <li><strong>Cons:</strong> Slower for sequential sequence reading; biological data (like 3D protein structures) is highly complex and difficult to map into flat 2D tables efficiently.</li>
        </ul>
    </div>
</div>

<button class="mark-done-btn" onclick="markDone('biodb-resources')">✅ Mark Section Complete</button>
`;
