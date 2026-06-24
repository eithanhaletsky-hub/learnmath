// State
let currentLesson = null;
let quizAnswers = {};
let progress = JSON.parse(localStorage.getItem('mathclass-progress') || '{}');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    updateCompletedCount();
});

function renderCategories() {
    const container = document.getElementById('categories-container');
    container.innerHTML = '';

    CATEGORIES.forEach(cat => {
        const lessons = LESSONS.filter(l => l.category === cat.id);
        const completed = lessons.filter(l => progress[l.id]).length;

        const section = document.createElement('div');
        section.className = 'category';
        section.innerHTML = `
            <div class="category-header">
                <div class="category-icon" style="background: ${cat.color}20; color: ${cat.color}">${cat.icon}</div>
                <h2>${cat.name}</h2>
                <span class="category-progress">${completed}/${lessons.length}</span>
            </div>
            <div class="lessons-grid">
                ${lessons.map(l => renderLessonCard(l, cat.color)).join('')}
            </div>
        `;
        container.appendChild(section);
    });
}

function renderLessonCard(lesson, color) {
    const done = progress[lesson.id];
    const score = done ? done.score : null;
    return `
        <div class="lesson-card ${done ? 'completed' : ''}" onclick="openLesson(${lesson.id})" style="border-top: 3px solid ${color}">
            <div class="lesson-num">שיעור ${lesson.id}</div>
            <h3>${lesson.title}</h3>
            <p>${lesson.desc}</p>
            ${score !== null ? `<div class="lesson-card-score">ציון: ${score}%</div>` : ''}
        </div>
    `;
}

function openLesson(id) {
    currentLesson = LESSONS.find(l => l.id === id);
    if (!currentLesson) return;

    const cat = CATEGORIES.find(c => c.id === currentLesson.category);

    document.getElementById('home-view').classList.add('hidden');
    document.getElementById('progress-view').classList.add('hidden');
    document.getElementById('lesson-view').classList.remove('hidden');

    document.getElementById('lesson-title').textContent = currentLesson.title;
    document.getElementById('lesson-badge').textContent = cat.name;
    document.getElementById('lesson-theory').innerHTML = currentLesson.theory;

    // Reset quiz
    quizAnswers = {};
    document.getElementById('quiz-results').classList.add('hidden');
    document.getElementById('submit-quiz').classList.remove('hidden');
    renderQuiz();

    // Reset tabs
    switchTab('theory');

    // Render math
    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise();
    }

    window.scrollTo(0, 0);
}

function renderQuiz() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = currentLesson.questions.map((q, i) => `
        <div class="quiz-question" id="question-${i}">
            <div class="question-num">שאלה ${i + 1} מתוך ${currentLesson.questions.length}</div>
            <div class="question-text">${q.q}</div>
            <div class="options">
                ${q.options.map((opt, j) => `
                    <div class="option" onclick="selectOption(${i}, ${j})" id="opt-${i}-${j}">
                        <div class="option-radio"></div>
                        <span>${opt}</span>
                    </div>
                `).join('')}
            </div>
            <div class="explanation">${q.explanation}</div>
        </div>
    `).join('');

    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise();
    }
}

function selectOption(qIndex, optIndex) {
    // Don't allow changes after submission
    const qEl = document.getElementById(`question-${qIndex}`);
    if (qEl.classList.contains('correct') || qEl.classList.contains('incorrect')) return;

    // Clear previous selection
    const options = document.querySelectorAll(`#question-${qIndex} .option`);
    options.forEach(o => o.classList.remove('selected'));

    // Select new
    document.getElementById(`opt-${qIndex}-${optIndex}`).classList.add('selected');
    quizAnswers[qIndex] = optIndex;
}

function submitQuiz() {
    if (!currentLesson) return;

    const total = currentLesson.questions.length;
    const answered = Object.keys(quizAnswers).length;

    if (answered < total) {
        if (!confirm(`ענית רק על ${answered} מתוך ${total} שאלות. להמשיך בכל זאת?`)) return;
    }

    let correct = 0;

    currentLesson.questions.forEach((q, i) => {
        const qEl = document.getElementById(`question-${i}`);
        const userAnswer = quizAnswers[i];

        if (userAnswer === q.correct) {
            qEl.classList.add('correct');
            correct++;
        } else {
            qEl.classList.add('incorrect');
        }

        // Mark correct answer
        document.getElementById(`opt-${i}-${q.correct}`).classList.add('correct-answer');

        // Mark wrong answer if selected
        if (userAnswer !== undefined && userAnswer !== q.correct) {
            document.getElementById(`opt-${i}-${userAnswer}`).classList.add('wrong-answer');
        }
    });

    const score = Math.round((correct / total) * 100);

    // Show results
    document.getElementById('score-text').textContent = score + '%';
    document.getElementById('score-message').textContent = getScoreMessage(score);
    document.getElementById('quiz-results').classList.remove('hidden');
    document.getElementById('submit-quiz').classList.add('hidden');

    // Save progress
    progress[currentLesson.id] = {
        score: score,
        date: new Date().toISOString()
    };
    localStorage.setItem('mathclass-progress', JSON.stringify(progress));
    updateCompletedCount();

    // Scroll to results
    document.getElementById('quiz-results').scrollIntoView({ behavior: 'smooth' });

    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise();
    }
}

function getScoreMessage(score) {
    if (score === 100) return 'מושלם! שליטה מלאה בחומר! 🌟';
    if (score >= 80) return 'מצוין! הבנה טובה מאוד של החומר!';
    if (score >= 60) return 'טוב! כדאי לחזור על הנושאים שטעית בהם.';
    if (score >= 40) return 'לא רע, אבל מומלץ לחזור על התאוריה.';
    return 'כדאי ללמוד שוב את התאוריה ולנסות שוב.';
}

function retryQuiz() {
    quizAnswers = {};
    document.getElementById('quiz-results').classList.add('hidden');
    document.getElementById('submit-quiz').classList.remove('hidden');
    renderQuiz();
    document.getElementById('quiz-container').scrollIntoView({ behavior: 'smooth' });
}

function switchTab(tab) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));

    if (tab === 'theory') {
        document.querySelectorAll('.tab')[0].classList.add('active');
        document.getElementById('theory-tab').classList.add('active');
    } else {
        document.querySelectorAll('.tab')[1].classList.add('active');
        document.getElementById('quiz-tab').classList.add('active');
    }

    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise();
    }
}

function goBack() {
    document.getElementById('lesson-view').classList.add('hidden');
    document.getElementById('home-view').classList.remove('hidden');
    renderCategories();
    window.scrollTo(0, 0);
}

function showHome() {
    document.getElementById('lesson-view').classList.add('hidden');
    document.getElementById('progress-view').classList.add('hidden');
    document.getElementById('home-view').classList.remove('hidden');

    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.nav-link')[0].classList.add('active');

    renderCategories();
    window.scrollTo(0, 0);
}

function showProgress() {
    document.getElementById('home-view').classList.add('hidden');
    document.getElementById('lesson-view').classList.add('hidden');
    document.getElementById('progress-view').classList.remove('hidden');

    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.nav-link')[1].classList.add('active');

    renderProgressView();
    window.scrollTo(0, 0);
}

function renderProgressView() {
    const completedLessons = LESSONS.filter(l => progress[l.id]);
    const totalLessons = LESSONS.length;
    const percent = Math.round((completedLessons.length / totalLessons) * 100);

    // Update ring
    const ring = document.getElementById('progress-ring-fill');
    const circumference = 2 * Math.PI * 52;
    const offset = circumference - (percent / 100) * circumference;
    ring.style.strokeDasharray = circumference;
    ring.style.strokeDashoffset = offset;

    document.getElementById('progress-percent').textContent = percent + '%';
    document.getElementById('p-completed').textContent = completedLessons.length;

    // Average score
    if (completedLessons.length > 0) {
        const avg = Math.round(completedLessons.reduce((sum, l) => sum + progress[l.id].score, 0) / completedLessons.length);
        document.getElementById('p-avg').textContent = avg + '%';

        // Best category
        const catScores = {};
        CATEGORIES.forEach(cat => {
            const catLessons = completedLessons.filter(l => l.category === cat.id);
            if (catLessons.length > 0) {
                catScores[cat.name] = Math.round(catLessons.reduce((sum, l) => sum + progress[l.id].score, 0) / catLessons.length);
            }
        });
        const best = Object.entries(catScores).sort((a, b) => b[1] - a[1])[0];
        document.getElementById('p-best').textContent = best ? best[0] : '-';
    } else {
        document.getElementById('p-avg').textContent = '0%';
        document.getElementById('p-best').textContent = '-';
    }

    // Progress list
    const list = document.getElementById('progress-list');
    list.innerHTML = LESSONS.map(lesson => {
        const cat = CATEGORIES.find(c => c.id === lesson.category);
        const done = progress[lesson.id];
        const score = done ? done.score : null;
        const barColor = score !== null ? (score >= 80 ? 'var(--success)' : score >= 60 ? 'var(--warning)' : 'var(--danger)') : 'var(--border)';

        return `
            <div class="progress-item" onclick="openLesson(${lesson.id})" style="cursor:pointer">
                <div class="progress-item-icon" style="background: ${cat.color}20; color: ${cat.color}">${cat.icon}</div>
                <div class="progress-item-info">
                    <h4>${lesson.title}</h4>
                    <p>${cat.name}</p>
                </div>
                ${score !== null ? `
                    <div class="progress-item-score" style="color: ${barColor}">${score}%</div>
                    <div class="progress-item-bar">
                        <div class="progress-item-bar-fill" style="width: ${score}%; background: ${barColor}"></div>
                    </div>
                ` : '<div style="color: var(--text-light); font-size: 0.85rem">טרם נפתר</div>'}
            </div>
        `;
    }).join('');
}

function updateCompletedCount() {
    const count = Object.keys(progress).length;
    document.getElementById('completed-count').textContent = count;
}
