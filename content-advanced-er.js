// ═══════════════════════════════════════════════════════════════
// ADVANCED ER: Generalization, Aggregation, ER→Tables, EER
// ═══════════════════════════════════════════════════════════════

SECTIONS['gen-agg'] = `
<h1>🔀 Generalization & Aggregation</h1>
<p class="subtitle">Unit I — Advanced concepts that separate toppers from the rest</p>

<h2><span class="emoji">⬆️</span> Generalization (Bottom-Up)</h2>
<div class="analogy">
    <div class="analogy-label">🎯 Classroom Scenario</div>
    <p>Look around: you see <strong>Students</strong> and <strong>Faculty</strong>. Both have Name, Age, Address. So we combine them into <strong>PERSON</strong> — a higher-level entity. This "combining similar entities upward" is <strong>Generalization</strong>.</p>
</div>

<div class="diagram-box">
    <div class="diagram-label">📊 Generalization Hierarchy</div>
<pre>
        ┌─────────────┐
        │   PERSON    │  ← Generalized (higher-level)
        │  Name, Age  │
        │  Address    │
        └──────┬──────┘
               │  ISA (triangle)
          ┌────┴────┐
          │         │
    ┌─────┴───┐  ┌──┴────────┐
    │ STUDENT │  │  FACULTY  │  ← Specialized (lower-level)
    │ Roll_No │  │ Faculty_ID│
    │ Branch  │  │ Salary    │
    └─────────┘  └───────────┘
</pre>
</div>

<div class="card">
    <p><strong>ISA</strong> means "is a": STUDENT <strong>is a</strong> PERSON. FACULTY <strong>is a</strong> PERSON.</p>
    <p><strong>Inheritance:</strong> Lower entities inherit ALL attributes from parent. STUDENT has: Name, Age, Address (inherited) + Roll_No, Branch (own).</p>
</div>

<h2><span class="emoji">⬇️</span> Specialization (Top-Down)</h2>
<div class="card">
    <p>The reverse: Start with PERSON, realize some have Roll_No (students) and some have Salary (faculty). Split into sub-groups.</p>
</div>

<div class="tip">
    <div class="tip-label">💡 Memory Trick</div>
    <p><strong>G</strong>eneralization = <strong>G</strong>oing UP (bottom → top) 🔼 | <strong>S</strong>pecialization = <strong>S</strong>plitting DOWN (top → bottom) 🔽</p>
</div>

<h3>Types of Specialization</h3>
<div class="card">
    <table>
        <tr><th>Type</th><th>Meaning</th><th>Example</th></tr>
        <tr><td><strong>Total</strong></td><td>Every entity MUST belong to a subclass</td><td>Every ACCOUNT must be Savings OR Current</td></tr>
        <tr><td><strong>Partial</strong></td><td>Some may NOT belong to any subclass</td><td>A PERSON might be neither Student nor Faculty (visitor)</td></tr>
        <tr><td><strong>Disjoint</strong></td><td>Entity can belong to ONLY ONE subclass</td><td>A person is EITHER student OR faculty</td></tr>
        <tr><td><strong>Overlapping</strong></td><td>Entity can belong to MULTIPLE subclasses</td><td>A person can be both STUDENT and TEACHING_ASSISTANT</td></tr>
    </table>
</div>

<h2><span class="emoji">📦</span> Aggregation</h2>
<div class="card">
    <div class="card-title">📖 Definition</div>
    <p>Aggregation allows us to treat a <strong>relationship as an entity</strong>, so that we can create relationships WITH that relationship.</p>
</div>

<div class="analogy">
    <div class="analogy-label">🎯 When Do We Need It?</div>
    <p>A PROFESSOR teaches a COURSE. Now, a PROJECT is associated with this <strong>teaching relationship</strong> — not just professor OR course alone, but the COMBINATION. We "aggregate" the TEACHES relationship and connect PROJECT to it.</p>
</div>

<div class="diagram-box">
    <div class="diagram-label">📊 Aggregation Diagram</div>
<pre>
  ┌─────────────────────────────────────────┐
  │          AGGREGATION BOX                │
  │                                          │
  │  ┌──────────┐            ┌──────────┐   │
  │  │PROFESSOR │──TEACHES──◇│  COURSE  │   │
  │  └──────────┘            └──────────┘   │
  │                                          │
  └──────────────────┬───────────────────────┘
                     │
                 GUIDES ◇
                     │
              ┌──────────┐
              │ PROJECT  │
              └──────────┘
</pre>
</div>

<div class="danger">
    <div class="danger-label">❌ Common Mistakes</div>
    <p>"Aggregation = Generalization" → <strong>Completely different!</strong> Generalization = IS-A hierarchy. Aggregation = treating a relationship as entity.</p>
</div>

<div class="summary-box">
    <h4>📝 Quick Revision</h4>
    <ul>
        <li>Generalization = Bottom-up (combine similar entities) | Specialization = Top-down (split)</li>
        <li>ISA triangle shows inheritance; lower entities inherit ALL parent attributes</li>
        <li>Constraints: Total/Partial + Disjoint/Overlapping</li>
        <li>Aggregation = Treating a relationship as an entity for new relationships</li>
    </ul>
</div>
<button class="mark-done-btn" onclick="markDone('gen-agg')">✅ Mark as Complete</button>
`;

SECTIONS['er-to-tables'] = `
<h1>📋 Reduction of ER Diagrams to Tables</h1>
<p class="subtitle">Unit I — Converting your beautiful ER diagram into actual SQL tables</p>

<h2><span class="emoji">🎬</span> Scenario</h2>
<div class="analogy">
    <div class="analogy-label">🎯 Real-Life</div>
    <p>You've drawn a beautiful ER diagram on the whiteboard. The developer says, <em>"Great! But I need SQL tables for MySQL."</em> You need to <strong>CONVERT</strong> your ER diagram into relational tables.</p>
</div>

<h2><span class="emoji">📋</span> Conversion Rules</h2>

<div class="step-box"><div class="step-num">1</div><div class="step-content"><p><strong>Strong Entity → Table:</strong> All attributes become columns. Key attribute = Primary Key.<br><span class="inline-code">STUDENT(Roll_No PK, Name, Branch)</span></p></div></div>

<div class="step-box"><div class="step-num">2</div><div class="step-content"><p><strong>Weak Entity → Table + Owner's PK as FK:</strong> PK = Owner's PK + Partial Key.<br><span class="inline-code">DEPENDENT(Emp_ID FK+PK, Dep_Name PK, Relationship)</span></p></div></div>

<div class="step-box"><div class="step-num">3</div><div class="step-content"><p><strong>1:1 Relationship → FK in one table:</strong> Add PK of one entity as FK in the other (prefer total participation side).<br><span class="inline-code">PERSON(Person_ID PK, Name, Passport_No FK)</span></p></div></div>

<div class="step-box"><div class="step-num">4</div><div class="step-content"><p><strong>1:N Relationship → FK in "N" side:</strong> Add PK of the "1" side as FK in the "N" side table.<br><span class="inline-code">STUDENT(Roll PK, Name, Dept_ID FK)</span>  ← FK goes to Many side!</p></div></div>

<div class="step-box"><div class="step-num">5</div><div class="step-content"><p><strong>M:N Relationship → NEW table:</strong> Create a junction table with both PKs as FKs. Together they form composite PK.<br><span class="inline-code">ENROLLMENT(Roll FK+PK, Course_ID FK+PK, Grade)</span></p></div></div>

<div class="step-box"><div class="step-num">6</div><div class="step-content"><p><strong>Multi-valued Attribute → NEW table:</strong> Entity PK + the attribute.<br><span class="inline-code">STUDENT_PHONES(Roll FK+PK, Phone_Number PK)</span></p></div></div>

<div class="step-box"><div class="step-num">7</div><div class="step-content"><p><strong>Composite Attribute → Flatten:</strong> Name → First_Name, Middle_Name, Last_Name as separate columns.</p></div></div>

<div class="step-box"><div class="step-num">8</div><div class="step-content"><p><strong>Derived Attribute → Usually NOT stored:</strong> Age from DOB is calculated on the fly. Some systems store for performance.</p></div></div>

<h3>Quick Reference Table</h3>
<div class="card">
    <table>
        <tr><th>ER Component</th><th>Becomes</th><th>Primary Key</th></tr>
        <tr><td><strong>Strong Entity</strong></td><td>Table with PK</td><td>Key attribute</td></tr>
        <tr><td><strong>Weak Entity</strong></td><td>Table + Owner's PK</td><td>Owner PK + Partial Key</td></tr>
        <tr><td><strong>1:1 Relationship</strong></td><td>FK in one table</td><td>—</td></tr>
        <tr><td><strong>1:N Relationship</strong></td><td>FK in "N" side</td><td>—</td></tr>
        <tr><td><strong>M:N Relationship</strong></td><td>NEW junction table</td><td>Both PKs combined</td></tr>
        <tr><td><strong>Multi-valued Attr</strong></td><td>NEW table</td><td>Entity PK + Attribute</td></tr>
        <tr><td><strong>Composite Attr</strong></td><td>Flatten into columns</td><td>—</td></tr>
        <tr><td><strong>Derived Attr</strong></td><td>Usually skip</td><td>—</td></tr>
    </table>
</div>

<div class="tip">
    <div class="tip-label">💡 Key Memory Trick</div>
    <p>In 1:N, <strong>FK goes to the MANY side</strong>. In M:N, a <strong>NEW table</strong> is always created.</p>
</div>

<div class="summary-box">
    <h4>📝 Quick Revision</h4>
    <ul>
        <li>Strong Entity → Direct table | Weak Entity → Table + Owner's PK</li>
        <li>1:1 → FK in either | 1:N → FK in N-side | M:N → NEW junction table</li>
        <li>Multi-valued → NEW table | Composite → Flatten | Derived → Skip</li>
    </ul>
</div>
<button class="mark-done-btn" onclick="markDone('er-to-tables')">✅ Mark as Complete</button>
`;

SECTIONS['eer-model'] = `
<h1>🧬 Extended ER Model (EER)</h1>
<p class="subtitle">Unit I — ER Model with superpowers</p>

<div class="card">
    <div class="card-title">📖 What is EER?</div>
    <p>The Extended ER Model adds advanced concepts to the basic ER Model: <strong>Specialization, Generalization, Aggregation, and Categories (Union Types)</strong>.</p>
</div>

<h2><span class="emoji">🔀</span> Categories (Union Type)</h2>
<div class="card">
    <p>A category represents a single superclass that is a <strong>union of different entity types</strong>.</p>
    <div class="diagram-box">
<pre>
    ┌──────────┐    ┌──────────┐
    │  PERSON  │    │ COMPANY  │
    └────┬─────┘    └────┬─────┘
         │               │
         └───── ∪ ────────┘  ← Union/Category
               │
        ┌──────┴──────┐
        │ ACCOUNT     │
        │ HOLDER      │
        └─────────────┘
</pre>
    </div>
    <p>An ACCOUNT_HOLDER can be EITHER a Person OR a Company. Different from Generalization where sub-entities come from the SAME parent.</p>
</div>

<h3>EER vs ER Comparison</h3>
<div class="card">
    <table>
        <tr><th>Feature</th><th>Basic ER</th><th>Extended ER (EER)</th></tr>
        <tr><td>Entities & Attributes</td><td>✅</td><td>✅</td></tr>
        <tr><td>Relationships</td><td>✅</td><td>✅</td></tr>
        <tr><td>Specialization/Generalization</td><td>❌</td><td>✅</td></tr>
        <tr><td>Aggregation</td><td>❌</td><td>✅</td></tr>
        <tr><td>Categories/Union Types</td><td>❌</td><td>✅</td></tr>
        <tr><td>Inheritance</td><td>❌</td><td>✅</td></tr>
    </table>
</div>

<div class="summary-box">
    <h4>📝 Quick Revision</h4>
    <ul>
        <li>EER = ER + Specialization + Generalization + Aggregation + Categories</li>
        <li>Category/Union = Superclass from union of DIFFERENT entity types</li>
        <li>EER handles complex real-world scenarios better than basic ER</li>
    </ul>
</div>
<button class="mark-done-btn" onclick="markDone('eer-model')">✅ Mark as Complete</button>
`;
