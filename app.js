// app.js — Navigation, quiz, accordion, progress tracking for DBMS Study Guide
(function () {
    const main = document.getElementById('mainContent');
    const navLinks = document.querySelectorAll('.nav-link');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    const sectionIds = [
        'db-intro', 'dbms-overview', 'db-vs-file',
        'db-arch', 'three-schema', 'data-independence',
        'data-models', 'er-concepts', 'er-notation', 'mapping-constraints',
        'keys-all',
        'gen-agg', 'er-to-tables', 'eer-model',
        'relational-model', 'integrity',
        'func-dep', 'normalization', 'sql-basics', 'sql-advanced', 'rel-algebra',
        'quiz', 'subjective'
    ];
    const doneKey = 'dbms-study-done';

    function getDone() {
        try { return JSON.parse(localStorage.getItem(doneKey)) || []; } catch { return []; }
    }
    function saveDone(arr) { localStorage.setItem(doneKey, JSON.stringify(arr)); }

    function showSection(id) {
        if (!SECTIONS[id]) return;
        main.innerHTML = `<section class="active" id="sec-${id}">${SECTIONS[id]}</section>`;
        navLinks.forEach(l => l.classList.toggle('active', l.dataset.section === id));
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (id === 'quiz') renderQuiz();
        sidebar.classList.remove('open');
        const btn = main.querySelector('.mark-done-btn');
        if (btn && getDone().includes(id)) {
            btn.textContent = '✓ Completed!';
            btn.classList.add('completed');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            showSection(link.dataset.section);
        });
    });

    menuToggle.addEventListener('click', () => sidebar.classList.toggle('open'));

    window.markDone = function (id) {
        const done = getDone();
        if (!done.includes(id)) done.push(id);
        saveDone(done);
        updateProgress();
        const btn = main.querySelector('.mark-done-btn');
        if (btn) { btn.textContent = '✓ Completed!'; btn.classList.add('completed'); }
        navLinks.forEach(l => {
            if (l.dataset.section === id) l.classList.add('done');
        });
    };

    function updateProgress() {
        const done = getDone();
        const total = sectionIds.length;
        const pct = Math.round((done.length / total) * 100);
        progressFill.style.width = pct + '%';
        progressText.textContent = pct + '% Complete';
        navLinks.forEach(l => {
            if (done.includes(l.dataset.section)) l.classList.add('done');
        });
    }

    window.toggleAcc = function (header) {
        const body = header.nextElementSibling;
        const isOpen = body.classList.contains('open');
        header.closest('section, .content').querySelectorAll('.acc-body.open').forEach(b => {
            b.classList.remove('open');
            b.previousElementSibling.classList.remove('open');
        });
        if (!isOpen) {
            body.classList.add('open');
            header.classList.add('open');
        }
    };

    function renderQuiz() {
        const container = document.getElementById('quizContainer');
        if (!container || typeof QUIZ_DATA === 'undefined') return;
        let answered = 0, correct = 0;

        container.innerHTML = QUIZ_DATA.map((q, qi) => `
            <div class="quiz-card" id="quiz-${qi}">
                <div class="quiz-q">${qi + 1}. ${q.q}</div>
                <div class="quiz-options">
                    ${q.opts.map((opt, oi) => `
                        <div class="quiz-opt" data-qi="${qi}" data-oi="${oi}" onclick="checkAnswer(${qi},${oi})">${String.fromCharCode(65 + oi)}. ${opt}</div>
                    `).join('')}
                </div>
                <div class="quiz-explanation" id="explain-${qi}">💡 ${q.explain}</div>
            </div>
        `).join('');

        window.checkAnswer = function (qi, oi) {
            const card = document.getElementById(`quiz-${qi}`);
            const opts = card.querySelectorAll('.quiz-opt');
            if (opts[0].classList.contains('disabled')) return;

            answered++;
            opts.forEach((opt, i) => {
                opt.classList.add('disabled');
                if (i === QUIZ_DATA[qi].ans) opt.classList.add('correct');
                if (i === oi && oi !== QUIZ_DATA[qi].ans) opt.classList.add('wrong');
            });
            if (oi === QUIZ_DATA[qi].ans) correct++;
            document.getElementById(`explain-${qi}`).style.display = 'block';

            const scoreEl = document.getElementById('quizScore');
            if (scoreEl) {
                scoreEl.innerHTML = `Score: ${correct} / ${answered} ${answered === QUIZ_DATA.length ? (correct >= QUIZ_DATA.length * 0.8 ? '🎉 Excellent!' : correct >= QUIZ_DATA.length * 0.5 ? '👍 Good job!' : '📖 Keep studying!') : ''}`;
            }
        };
    }

    updateProgress();
    showSection('db-intro');
})();
