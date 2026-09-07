/* =========================================
   STUDYHUB
   Main JavaScript
========================================= */


/* =========================================
   DATA
========================================= */

const lessons = [

    {
        id: 1,
        subject: "math",
        title: "Algebra asoslari",
        description: "Algebraik ifodalar, tenglamalar va formulalar.",
        icon: "📐",
        duration: "25 daqiqa",
        xp: 100,
        progress: 65,

        theory: `
            Algebra — noma'lum sonlar va ular orasidagi
            munosabatlarni o‘rganadigan matematika bo‘limidir.

            Masalan:

            x + 5 = 12

            Bu yerda x noma'lum son.

            x ni topish uchun:

            x = 12 - 5

            x = 7

            Demak, javob 7 ga teng.
        `,

        example: `
            <strong>Misol:</strong><br>
            2x + 4 = 14<br><br>

            2x = 10<br>
            x = 5
        `,

        question: "3x + 6 = 18 bo‘lsa, x nechaga teng?",

        options: ["2", "4", "6", "8"],

        answer: 2
    },


    {
        id: 2,
        subject: "math",
        title: "Kvadrat tenglamalar",
        description: "Kvadrat tenglamani yechish usullarini o‘rganing.",
        icon: "🧮",
        duration: "30 daqiqa",
        xp: 120,
        progress: 20,

        theory: `
            Kvadrat tenglama quyidagi ko‘rinishda bo‘ladi:

            ax² + bx + c = 0

            Bunda a ≠ 0.

            Diskriminant:

            D = b² - 4ac

            Agar D > 0 bo‘lsa, ikkita haqiqiy ildiz mavjud.
            Agar D = 0 bo‘lsa, bitta ildiz mavjud.
            Agar D < 0 bo‘lsa, haqiqiy ildiz mavjud emas.
        `,

        example: `
            <strong>Misol:</strong><br>
            x² - 5x + 6 = 0<br><br>

            D = 25 - 24 = 1<br><br>

            x₁ = 2<br>
            x₂ = 3
        `,

        question: "x² - 5x + 6 = 0 tenglamaning ildizlari qaysi?",

        options: [
            "1 va 2",
            "2 va 3",
            "3 va 4",
            "1 va 5"
        ],

        answer: 1
    },


    {
        id: 3,
        subject: "english",
        title: "Present Simple",
        description: "Ingliz tilidagi eng asosiy zamonlardan biri.",
        icon: "🇬🇧",
        duration: "20 daqiqa",
        xp: 90,
        progress: 80,

        theory: `
            Present Simple odatda takrorlanadigan,
            odatiy yoki doimiy harakatlar uchun ishlatiladi.

            I play football.

            You study English.

            He plays football.

            She studies English.

            He/She/It bilan fe'lga ko‘pincha -s yoki -es qo‘shiladi.
        `,

        example: `
            <strong>Misol:</strong><br>
            I go to school every day.<br>
            She goes to school every day.
        `,

        question: "She ___ English every day.",

        options: [
            "study",
            "studies",
            "studying",
            "studied"
        ],

        answer: 1
    },


    {
        id: 4,
        subject: "programming",
        title: "JavaScript asoslari",
        description: "O‘zgaruvchilar, funksiyalar va JavaScript sintaksisi.",
        icon: "💻",
        duration: "35 daqiqa",
        xp: 150,
        progress: 45,

        theory: `
            JavaScript web-sahifalarga interaktivlik qo‘shish
            uchun ishlatiladigan dasturlash tilidir.

            O‘zgaruvchi yaratish:

            let name = "Ali";

            const age = 15;

            Funksiya:

            function hello() {
                console.log("Salom!");
            }

            Funksiyani chaqirish:

            hello();
        `,

        example: `
            <strong>Misol:</strong><br>

            let a = 10;<br>
            let b = 20;<br><br>

            let result = a + b;<br>

            console.log(result);<br><br>

            Natija: 30
        `,

        question: "JavaScriptda o‘zgaruvchi yaratish uchun qaysi keyword ishlatilishi mumkin?",

        options: [
            "let",
            "style",
            "html",
            "design"
        ],

        answer: 0
    },


    {
        id: 5,
        subject: "programming",
        title: "HTML va CSS",
        description: "Web-saytlarning tuzilishi va dizaynini o‘rganing.",
        icon: "🌐",
        duration: "30 daqiqa",
        xp: 110,
        progress: 100,

        theory: `
            HTML web-sahifaning tuzilishini yaratadi.

            Masalan:

            <h1>Salom</h1>

            CSS esa elementlarning ko‘rinishini boshqaradi.

            Masalan:

            h1 {
                color: blue;
            }

            JavaScript esa interaktivlik qo‘shadi.
        `,

        example: `
            <strong>Web texnologiyalar:</strong><br><br>

            HTML → Tuzilish<br>
            CSS → Dizayn<br>
            JavaScript → Interaktivlik
        `,

        question: "CSS nima uchun ishlatiladi?",

        options: [
            "Dizayn uchun",
            "Server yaratish uchun",
            "Database yaratish uchun",
            "Video montaj uchun"
        ],

        answer: 0
    },


    {
        id: 6,
        subject: "physics",
        title: "Mexanika asoslari",
        description: "Tezlik, masofa, vaqt va harakat.",
        icon: "⚡",
        duration: "28 daqiqa",
        xp: 130,
        progress: 10,

        theory: `
            Tezlik — jismning ma'lum vaqt ichida qancha
            masofa bosib o‘tishini bildiradi.

            Formula:

            v = s / t

            Bu yerda:

            v — tezlik
            s — masofa
            t — vaqt

            Masalan, 100 metr masofani 20 sekundda
            bosib o‘tilsa:

            v = 100 / 20 = 5 m/s
        `,

        example: `
            <strong>Misol:</strong><br>
            s = 200 m<br>
            t = 40 s<br><br>

            v = 200 / 40<br>
            v = 5 m/s
        `,

        question: "100 metr masofa 20 sekundda bosib o‘tilsa, tezlik qancha?",

        options: [
            "2 m/s",
            "5 m/s",
            "10 m/s",
            "20 m/s"
        ],

        answer: 1
    }

];


const subjects = [

    {
        id: "math",
        title: "Matematika",
        icon: "📐",
        description: "Algebra, geometriya va tenglamalar."
    },

    {
        id: "english",
        title: "Ingliz tili",
        icon: "🇬🇧",
        description: "Grammar, vocabulary va speaking."
    },

    {
        id: "programming",
        title: "Dasturlash",
        icon: "💻",
        description: "HTML, CSS, JavaScript va Python."
    },

    {
        id: "physics",
        title: "Fizika",
        icon: "⚡",
        description: "Mexanika, energiya va formulalar."
    }

];


const missions = [

    {
        id: 1,
        title: "Bitta darsni yakunlang",
        description: "Istalgan darsni tugating.",
        icon: "📚",
        target: 1,
        rewardXP: 100,
        rewardToken: 25
    },

    {
        id: 2,
        title: "3 ta savolga javob bering",
        description: "Dars ichidagi testlarni ishlang.",
        icon: "🧠",
        target: 3,
        rewardXP: 75,
        rewardToken: 20
    },

    {
        id: 3,
        title: "Study AI bilan suhbatlashing",
        description: "AI yordamchidan savol so‘rang.",
        icon: "🤖",
        target: 1,
        rewardXP: 30,
        rewardToken: 10
    }

];


const leaderboardUsers = [

    {
        name: "CodeMaster",
        username: "@codemaster",
        xp: 2850,
        level: 8
    },

    {
        name: "MathPro",
        username: "@mathpro",
        xp: 2410,
        level: 7
    },

    {
        name: "EnglishKing",
        username: "@englishking",
        xp: 2180,
        level: 6
    },

    {
        name: "FutureDev",
        username: "@futuredev",
        xp: 1930,
        level: 6
    },

    {
        name: "PhysicsBoy",
        username: "@physicsboy",
        xp: 1650,
        level: 5
    }

];


/* =========================================
   USER STATE
========================================= */

let currentUser = null;

let activeLessonId = null;

let selectedFilter = "all";


/* =========================================
   LOCAL STORAGE
========================================= */

function getUsers() {

    return JSON.parse(
        localStorage.getItem("studyhub_users") || "[]"
    );

}


function saveUsers(users) {

    localStorage.setItem(
        "studyhub_users",
        JSON.stringify(users)
    );

}


function saveCurrentUser() {

    if (!currentUser) return;

    localStorage.setItem(
        "studyhub_current_user",
        JSON.stringify(currentUser)
    );

}


function loadCurrentUser() {

    const data =
        localStorage.getItem("studyhub_current_user");

    if (!data) return null;

    try {

        return JSON.parse(data);

    } catch {

        return null;

    }

}


/* =========================================
   DEFAULT USER
========================================= */

function createUser(name, username, password) {

    return {

        name: name,

        username: username,

        password: password,

        nickname: "",

        bio: "StudyHub o‘quvchisi 📚",

        avatar: "",

        xp: 0,

        tokens: 0,

        streak: 1,

        premium: false,

        completedLessons: [],

        lessonProgress: {},

        completedMissions: [],

        aiQuestions: 0,

        createdAt: new Date().toISOString()

    };

}


/* =========================================
   AUTH
========================================= */

document.querySelectorAll(".auth-tab")
    .forEach(tab => {

        tab.addEventListener("click", () => {

            document
                .querySelectorAll(".auth-tab")
                .forEach(x => x.classList.remove("active"));

            tab.classList.add("active");

            const mode = tab.dataset.auth;

            if (mode === "login") {

                document
                    .getElementById("loginForm")
                    .classList.remove("hidden");

                document
                    .getElementById("registerForm")
                    .classList.add("hidden");

            } else {

                document
                    .getElementById("loginForm")
                    .classList.add("hidden");

                document
                    .getElementById("registerForm")
                    .classList.remove("hidden");

            }

        });

    });


document
    .getElementById("registerForm")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            document.getElementById("registerName").value.trim();

        const username =
            document.getElementById("registerUsername").value
                .trim()
                .toLowerCase();

        const password =
            document.getElementById("registerPassword").value;

        if (password.length < 4) {

            showToast(
                "Parol kamida 4 ta belgidan iborat bo‘lsin!",
                "⚠️"
            );

            return;
        }

        const users = getUsers();

        if (
            users.some(
                user => user.username === username
            )
        ) {

            showToast(
                "Bu username allaqachon mavjud!",
                "⚠️"
            );

            return;
        }

        const user =
            createUser(
                name,
                username,
                password
            );

        users.push(user);

        saveUsers(users);

        currentUser = user;

        saveCurrentUser();

        showApp();

        showToast(
            "Akkaunt muvaffaqiyatli yaratildi!",
            "🎉"
        );

    });


document
    .getElementById("loginForm")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        const username =
            document.getElementById("loginUsername")
                .value
                .trim()
                .toLowerCase();

        const password =
            document.getElementById("loginPassword")
                .value;

        const users = getUsers();

        const user =
            users.find(
                x =>
                    x.username === username &&
                    x.password === password
            );

        if (!user) {

            showToast(
                "Username yoki parol noto‘g‘ri!",
                "❌"
            );

            return;
        }

        currentUser = user;

        saveCurrentUser();

        showApp();

        showToast(
            "Xush kelibsiz!",
            "👋"
        );

    });


/* =========================================
   APP START
========================================= */

function showApp() {

    document
        .getElementById("authScreen")
        .classList.add("hidden");

    document
        .getElementById("app")
        .classList.remove("hidden");

    updateUserUI();

    renderSubjects();

    renderLessons();

    renderMissions();

    renderLeaderboard();

    renderContinue();

    applySavedTheme();

    showPage("dashboard");

}


function logout() {

    localStorage.removeItem(
        "studyhub_current_user"
    );

    currentUser = null;

    document
        .getElementById("app")
        .classList.add("hidden");

    document
        .getElementById("authScreen")
        .classList.remove("hidden");

}


document
    .getElementById("logoutBtn")
    .addEventListener("click", logout);


/* =========================================
   NAVIGATION
========================================= */

document
    .querySelectorAll("[data-page]")
    .forEach(button => {

        button.addEventListener("click", () => {

            showPage(
                button.dataset.page
            );

        });

    });


function showPage(pageName) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });

    const target =
        document.getElementById(
            `page-${pageName}`
        );

    if (target) {

        target.classList.add("active");

    }

    document
        .querySelectorAll(".nav-item")
        .forEach(item => {

            item.classList.toggle(
                "active",
                item.dataset.page === pageName
            );

        });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   USER UI
========================================= */

function updateUserUI() {

    if (!currentUser) return;

    document.getElementById("welcomeName")
        .textContent =
        currentUser.nickname ||
        currentUser.name;

    document.getElementById("topName")
        .textContent =
        currentUser.nickname ||
        currentUser.name;

    document.getElementById("topUsername")
        .textContent =
        "@" + currentUser.username;

    document.getElementById("xpValue")
        .textContent =
        currentUser.xp;

    document.getElementById("tokenValue")
        .textContent =
        currentUser.tokens;

    document.getElementById("streakValue")
        .textContent =
        currentUser.streak + " kun";

    document.getElementById("sideStreak")
        .textContent =
        currentUser.streak + " kun";

    document.getElementById("missionStreak")
        .textContent =
        currentUser.streak;

    document.getElementById("completedLessons")
        .textContent =
        currentUser.completedLessons.length;

    document.getElementById("profileName")
        .textContent =
        currentUser.nickname ||
        currentUser.name;

    document.getElementById("profileUsername")
        .textContent =
        "@" + currentUser.username;

    document.getElementById("profileNameInput")
        .value =
        currentUser.name;

    document.getElementById("profileNickInput")
        .value =
        currentUser.nickname;

    document.getElementById("profileUsernameInput")
        .value =
        currentUser.username;

    document.getElementById("profileBioInput")
        .value =
        currentUser.bio || "";

    updateLevel();

    updateAvatar();

    document.getElementById("todayDate")
        .textContent =
        new Date().toLocaleDateString(
            "uz-UZ",
            {
                weekday: "long",
                day: "numeric",
                month: "long"
            }
        );

}


/* =========================================
   LEVEL
========================================= */

function getLevel(xp) {

    return Math.floor(xp / 500) + 1;

}


function updateLevel() {

    const level =
        getLevel(currentUser.xp);

    const levelStart =
        (level - 1) * 500;

    const progress =
        ((currentUser.xp - levelStart) / 500) * 100;

    document.getElementById("profileLevel")
        .textContent =
        level;

    document.getElementById("profileXP")
        .textContent =
        currentUser.xp + " XP";

    document.getElementById("profileProgress")
        .style.width =
        Math.min(progress, 100) + "%";

}


/* =========================================
   AVATAR
========================================= */

function updateAvatar() {

    const initials =
        (currentUser.nickname ||
            currentUser.name ||
            "U")
            .charAt(0)
            .toUpperCase();

    const avatars = [

        document.getElementById("topAvatar"),

        document.getElementById("profileAvatar")

    ];

    avatars.forEach(element => {

        if (!element) return;

        if (currentUser.avatar) {

            element.innerHTML =
                `<img src="${currentUser.avatar}" alt="Avatar">`;

        } else {

            element.textContent =
                initials;

        }

    });

}


document
    .getElementById("avatarInput")
    .addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function () {

            currentUser.avatar =
                reader.result;

            saveUser();

            updateAvatar();

            showToast(
                "Avatar yangilandi!",
                "📷"
            );

        };

        reader.readAsDataURL(file);

    });


/* =========================================
   PROFILE
========================================= */

document
    .getElementById("profileForm")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        currentUser.name =
            document
                .getElementById("profileNameInput")
                .value
                .trim();

        currentUser.nickname =
            document
                .getElementById("profileNickInput")
                .value
                .trim();

        currentUser.username =
            document
                .getElementById("profileUsernameInput")
                .value
                .trim()
                .toLowerCase();

        currentUser.bio =
            document
                .getElementById("profileBioInput")
                .value
                .trim();

        saveUser();

        updateUserUI();

        showToast(
            "Profil saqlandi!",
            "✓"
        );

    });


function saveUser() {

    const users = getUsers();

    const index =
        users.findIndex(
            user =>
                user.username ===
                currentUser.username
        );

    /*
       Agar username o‘zgargan bo‘lsa,
       eski userni currentUser ma'lumotlari
       orqali topish uchun createdAt ishlatamiz.
    */

    const oldIndex =
        users.findIndex(
            user =>
                user.createdAt ===
                currentUser.createdAt
        );

    if (oldIndex !== -1) {

        users[oldIndex] =
            currentUser;

    } else if (index !== -1) {

        users[index] =
            currentUser;

    } else {

        users.push(currentUser);

    }

    saveUsers(users);

    saveCurrentUser();

}


/* =========================================
   SUBJECTS
========================================= */

function renderSubjects() {

    const container =
        document.getElementById(
            "subjectGrid"
        );

    container.innerHTML = "";

    subjects.forEach(subject => {

        const card =
            document.createElement("div");

        card.className =
            "subject-card";

        card.innerHTML = `

            <div class="subject-icon">
                ${subject.icon}
            </div>

            <h3>
                ${subject.title}
            </h3>

            <p>
                ${subject.description}
            </p>

        `;

        card.addEventListener(
            "click",
            () => {

                showPage("lessons");

                selectedFilter =
                    subject.id;

                document
                    .querySelectorAll(".filter-btn")
                    .forEach(btn => {

                        btn.classList.toggle(
                            "active",
                            btn.dataset.filter ===
                            selectedFilter
                        );

                    });

                renderLessons();

            }
        );

        container.appendChild(card);

    });

}


/* =========================================
   LESSONS
========================================= */

function renderLessons() {

    const container =
        document.getElementById(
            "lessonGrid"
        );

    container.innerHTML = "";

    let filtered = lessons;

    if (selectedFilter !== "all") {

        filtered =
            lessons.filter(
                lesson =>
                    lesson.subject ===
                    selectedFilter
            );

    }

    const search =
        document
            .getElementById("globalSearch")
            ?.value
            .toLowerCase()
            .trim();

    if (search) {

        filtered =
            filtered.filter(
                lesson =>
                    lesson.title
                        .toLowerCase()
                        .includes(search) ||

                    lesson.description
                        .toLowerCase()
                        .includes(search)
            );

    }

    filtered.forEach(lesson => {

        const savedProgress =
            currentUser.lessonProgress[lesson.id];

        const progress =
            savedProgress !== undefined
                ? savedProgress
                : lesson.progress;

        const completed =
            currentUser.completedLessons
                .includes(lesson.id);

        const card =
            document.createElement("div");

        card.className =
            "lesson-card";

        card.innerHTML = `

            <div class="lesson-card-top">

                <div class="lesson-card-icon">
                    ${lesson.icon}
                </div>

                ${
                    completed
                        ? `<span class="lesson-status">
                                ✓ Yakunlangan
                           </span>`
                        : ""
                }

            </div>

            <h3>
                ${lesson.title}
            </h3>

            <p>
                ${lesson.description}
            </p>

            <div class="lesson-meta">

                <span>
                    ⏱ ${lesson.duration}
                </span>

                <span>
                    ⚡ ${lesson.xp} XP
                </span>

            </div>

            <div class="lesson-progress">

                <span
                    style="width:${progress}%"
                ></span>

            </div>

            <button
                class="lesson-start"
                data-lesson="${lesson.id}"
            >
                ${
                    completed
                        ? "Qayta ko‘rish"
                        : progress > 0
                            ? "Davom ettirish"
                            : "Boshlash"
                }
            </button>

        `;

        card
            .querySelector(".lesson-start")
            .addEventListener(
                "click",
                () => openLesson(lesson.id)
            );

        container.appendChild(card);

    });

}


document
    .querySelectorAll(".filter-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".filter-btn")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");

                selectedFilter =
                    button.dataset.filter;

                renderLessons();

            }
        );

    });


document
    .getElementById("globalSearch")
    .addEventListener(
        "input",
        renderLessons
    );


/* =========================================
   OPEN LESSON
========================================= */

function openLesson(id) {

    const lesson =
        lessons.find(
            x => x.id === id
        );

    if (!lesson) return;

    activeLessonId = id;

    const modal =
        document.getElementById(
            "lessonModal"
        );

    const content =
        document.getElementById(
            "lessonContent"
        );

    content.innerHTML = `

        <span class="eyebrow">
            ${getSubjectName(lesson.subject)}
        </span>

        <h1>
            ${lesson.icon}
            ${lesson.title}
        </h1>

        <p class="lesson-description">
            ${lesson.description}
        </p>

        <div class="theory">
            ${lesson.theory}
        </div>

        <div class="example">
            ${lesson.example}
        </div>

        <div class="quiz-box">

            <h3>
                🧠 Test savoli
            </h3>

            <p>
                ${lesson.question}
            </p>

            <div id="quizOptions">

                ${lesson.options.map(
                    (option, index) => `

                        <button
                            class="quiz-option"
                            data-answer="${index}"
                        >
                            ${String.fromCharCode(65 + index)}.
                            ${option}
                        </button>

                    `
                ).join("")}

            </div>

        </div>

    `;

    content
        .querySelectorAll(".quiz-option")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    answerQuestion(
                        lesson,
                        Number(
                            button.dataset.answer
                        )
                    );

                }
            );

        });

    modal.classList.add("show");

}


/* =========================================
   QUIZ
========================================= */

function answerQuestion(
    lesson,
    selected
) {

    const buttons =
        document.querySelectorAll(
            ".quiz-option"
        );

    buttons.forEach(
        button =>
            button.disabled = true
    );

    if (
        selected ===
        lesson.answer
    ) {

        buttons[selected].style.borderColor =
            "#16a34a";

        buttons[selected].style.background =
            "#dcfce7";

        currentUser.xp +=
            currentUser.premium
                ? 40
                : 20;

        currentUser.tokens += 5;

        currentUser.aiQuestions =
            currentUser.aiQuestions || 0;

        checkQuestionMission();

        saveUser();

        updateUserUI();

        showToast(
            "To‘g‘ri javob! +XP +5 token",
            "🎉"
        );

        setTimeout(
            () => completeLesson(lesson.id),
            900
        );

    } else {

        buttons[selected].style.borderColor =
            "#ef4444";

        buttons[selected].style.background =
            "#fee2e2";

        buttons[lesson.answer].style.borderColor =
            "#16a34a";

        buttons[lesson.answer].style.background =
            "#dcfce7";

        showToast(
            "Noto‘g‘ri javob. Yashil javobni ko‘ring.",
            "💡"
        );

    }

}


/* =========================================
   COMPLETE LESSON
========================================= */

function completeLesson(id) {

    if (
        !currentUser.completedLessons
            .includes(id)
    ) {

        currentUser.completedLessons.push(id);

        const lesson =
            lessons.find(
                x => x.id === id
            );

        if (lesson) {

            currentUser.xp +=
                currentUser.premium
                    ? lesson.xp * 2
                    : lesson.xp;

            currentUser.tokens += 25;

        }

        currentUser.lessonProgress[id] =
            100;

        completeMission(1);

        saveUser();

        updateUserUI();

        renderLessons();

        renderContinue();

        renderMissions();

    }

    closeModal("lessonModal");

}


/* =========================================
   CONTINUE
========================================= */

function renderContinue() {

    const container =
        document.getElementById(
            "continueCard"
        );

    if (!currentUser) return;

    let lesson =
        lessons.find(
            x =>
                !currentUser.completedLessons
                    .includes(x.id)
        );

    if (!lesson) {

        lesson = lessons[0];

    }

    const progress =
        currentUser.lessonProgress[lesson.id]
        ?? lesson.progress;

    container.innerHTML = `

        <div class="continue-card">

            <div>

                <div class="lesson-icon">
                    ${lesson.icon}
                </div>

                <h3>
                    ${lesson.title}
                </h3>

                <p>
                    ${progress}% bajarildi •
                    ${lesson.duration}
                </p>

            </div>

            <button
                id="continueLessonBtn"
            >
                Davom ettirish →
            </button>

        </div>

    `;

    document
        .getElementById(
            "continueLessonBtn"
        )
        .addEventListener(
            "click",
            () => openLesson(lesson.id)
        );

}


/* =========================================
   MISSIONS
========================================= */

function renderMissions() {

    const container =
        document.getElementById(
            "missionsList"
        );

    const dashboard =
        document.getElementById(
            "dashboardMissions"
        );

    if (!container) return;

    container.innerHTML = "";

    if (dashboard) {
        dashboard.innerHTML = "";
    }

    missions.forEach(
        (mission, index) => {

            const completed =
                currentUser.completedMissions
                    .includes(mission.id);

            const progress =
                getMissionProgress(
                    mission.id
                );

            const percent =
                Math.min(
                    (progress / mission.target) *
                    100,
                    100
                );

            const row =
                document.createElement("div");

            row.className =
                "mission-row" +
                (
                    completed
                        ? " completed"
                        : ""
                );

            row.innerHTML = `

                <div class="mission-row-icon">
                    ${mission.icon}
                </div>

                <div>

                    <h3>
                        ${mission.title}
                    </h3>

                    <p>
                        ${mission.description}
                        • +${mission.rewardXP} XP
                        • +${mission.rewardToken} token
                    </p>

                    <div class="mission-progress">
                        <span
                            style="width:${percent}%"
                        ></span>
                    </div>

                    <small>
                        ${progress}/${mission.target}
                    </small>

                </div>

                <button
                    data-mission="${mission.id}"
                >
                    ${
                        completed
                            ? "✓ Bajarildi"
                            : "Tekshirish"
                    }
                </button>

            `;

            row
                .querySelector("button")
                .addEventListener(
                    "click",
                    () => {

                        if (completed) {

                            showToast(
                                "Bu missiya allaqachon bajarilgan.",
                                "✓"
                            );

                            return;
                        }

                        checkMission(
                            mission.id
                        );

                    }
                );

            container.appendChild(row);


            /* DASHBOARD */

            if (
                dashboard &&
                index < 3
            ) {

                const card =
                    document.createElement("div");

                card.className =
                    "mission-card";

                card.innerHTML = `

                    <div class="mission-top">

                        <div class="mission-icon">
                            ${mission.icon}
                        </div>

                        <span class="reward">
                            +${mission.rewardXP} XP
                        </span>

                    </div>

                    <h3>
                        ${mission.title}
                    </h3>

                    <p>
                        ${mission.description}
                    </p>

                    <div class="mission-progress">
                        <span
                            style="width:${percent}%"
                        ></span>
                    </div>

                    <div class="mission-bottom">
                        <span>
                            ${progress}/${mission.target}
                        </span>

                        <span>
                            +${mission.rewardToken} 💎
                        </span>
                    </div>

                `;

                dashboard.appendChild(card);

            }

        }
    );

}


function getMissionProgress(id) {

    if (id === 1) {

        return currentUser.completedLessons.length;

    }

    if (id === 2) {

        return Math.min(
            currentUser.quizCount || 0,
            3
        );

    }

    if (id === 3) {

        return Math.min(
            currentUser.aiQuestions || 0,
            1
        );

    }

    return 0;

}


function checkMission(id) {

    const mission =
        missions.find(
            x => x.id === id
        );

    if (!mission) return;

    const progress =
        getMissionProgress(id);

    if (progress >= mission.target) {

        completeMission(id);

        renderMissions();

    } else {

        showToast(
            `Hali bajarilmagan: ${progress}/${mission.target}`,
            "📊"
        );

    }

}


function completeMission(id) {

    if (
        currentUser.completedMissions
            .includes(id)
    ) return;

    const mission =
        missions.find(
            x => x.id === id
        );

    if (!mission) return;

    currentUser.completedMissions.push(id);

    currentUser.xp +=
        mission.rewardXP;

    currentUser.tokens +=
        mission.rewardToken;

    saveUser();

    updateUserUI();

    showToast(
        `Missiya bajarildi! +${mission.rewardXP} XP`,
        "🎯"
    );

}


function checkQuestionMission() {

    currentUser.quizCount =
        (currentUser.quizCount || 0) + 1;

    if (
        currentUser.quizCount >= 3
    ) {

        completeMission(2);

    }

}


/* =========================================
   LEADERBOARD
========================================= */

function renderLeaderboard() {

    const container =
        document.getElementById(
            "leaderboardList"
        );

    if (!container) return;

    let data = [
        ...leaderboardUsers
    ];

    data.push({

        name:
            currentUser.nickname ||
            currentUser.name,

        username:
            "@" +
            currentUser.username,

        xp:
            currentUser.xp,

        level:
            getLevel(currentUser.xp),

        current: true

    });

    data.sort(
        (a, b) =>
            b.xp - a.xp
    );

    container.innerHTML = "";

    data.forEach(
        (user, index) => {

            const row =
                document.createElement("div");

            row.className =
                "leader-row" +
                (
                    user.current
                        ? " you-row"
                        : ""
                );

            row.innerHTML = `

                <span class="rank">
                    ${index + 1}
                </span>

                <div class="leader-user">

                    <div class="avatar small">
                        ${
                            user.current
                                ? (
                                    currentUser.avatar
                                        ? `<img src="${currentUser.avatar}">`
                                        : (
                                            currentUser.name
                                                .charAt(0)
                                                .toUpperCase()
                                        )
                                )
                                : user.name
                                    .charAt(0)
                                    .toUpperCase()
                        }
                    </div>

                    <div>

                        <strong>
                            ${user.name}
                        </strong>

                        <small>
                            ${user.username}
                        </small>

                    </div>

                </div>

                <span>
                    ${user.xp} XP
                </span>

                <span>
                    <span class="level-badge">
                        Level ${user.level}
                    </span>
                </span>

            `;

            container.appendChild(row);

        }
    );

}


/* =========================================
   AI
========================================= */

document
    .getElementById("aiForm")
    .addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const input =
                document.getElementById(
                    "aiInput"
                );

            const text =
                input.value.trim();

            if (!text) return;

            addAIMessage(
                text,
                "user"
            );

            input.value = "";

            currentUser.aiQuestions =
                (currentUser.aiQuestions || 0) + 1;

            if (
                currentUser.aiQuestions === 1
            ) {

                completeMission(3);

            }

            saveUser();

            updateUserUI();

            setTimeout(
                () => {

                    const answer =
                        generateAIAnswer(text);

                    addAIMessage(
                        answer,
                        "bot"
                    );

                },
                600
            );

        }
    );


function addAIMessage(
    text,
    type
) {

    const container =
        document.getElementById(
            "aiMessages"
        );

    const message =
        document.createElement("div");

    message.className =
        "ai-message " + type;

    message.textContent =
        text;

    container.appendChild(message);

    container.scrollTop =
        container.scrollHeight;

}


function generateAIAnswer(question) {

    const q =
        question.toLowerCase();

    if (
        q.includes("javascript") ||
        q.includes("js")
    ) {

        if (
            currentUser.premium
        ) {

            return `
Advanced javob: JavaScript web-sahifaning
interaktiv qismini boshqaradi. Masalan,
DOM orqali HTML elementlarini o‘zgartirish,
eventlar bilan ishlash, API so‘rovlarini yuborish
va ma'lumotlarni boshqarish mumkin.

Maslahat: avval let, const, function,
array, object va DOM mavzularini yaxshi o‘rganing.
            `;

        }

        return `
JavaScript — web-sahifaga interaktivlik
qo‘shadigan dasturlash tili.

Masalan:

let age = 15;

Bu yerda age nomli o‘zgaruvchi yaratildi.
        `;

    }


    if (
        q.includes("html")
    ) {

        return `
HTML web-sahifaning tuzilishini yaratadi.

Masalan:

<h1>Salom</h1>

<h1> — sarlavha elementi.
        `;

    }


    if (
        q.includes("css")
    ) {

        return `
CSS HTML elementlarining ko‘rinishini
boshqaradi.

Masalan:

h1 {
    color: blue;
}

Bu h1 matnining rangini o‘zgartiradi.
        `;

    }


    if (
        q.includes("matematika") ||
        q.includes("tenglama") ||
        q.includes("x")
    ) {

        return `
Tenglamani yechishda noma'lumni bir tomonda
qoldirishga harakat qiling.

Masalan:

x + 5 = 12

x = 12 - 5

x = 7

Agar aniq misol yuborsangiz, uni
bosqichma-bosqich tushuntirish mumkin.
        `;

    }


    if (
        q.includes("english") ||
        q.includes("ingliz")
    ) {

        return `
Ingliz tilini o‘rganishda grammar bilan birga
har kuni yangi so‘zlarni ishlatish muhim.

Masalan, Present Simple:

I play football.

He plays football.
        `;

    }


    if (
        q.includes("salom") ||
        q.includes("hello")
    ) {

        return `
Salom! 👋

Men Study AI. Bugun nimani o‘rganamiz?
Matematika, ingliz tili, fizika yoki dasturlashdan
savol berishingiz mumkin.
        `;

    }


    return `
Qiziqarli savol! 🤖

Men hozir StudyHub demo rejimidagi
Study AI hisoblanaman.

Savolingizni aniqroq yozing. Masalan:

• JavaScript nima?
• Tenglamani qanday yechaman?
• Present Simple nima?
• HTML va CSS farqi nima?
• Tezlik formulasi qanday?
    `;

}


/* =========================================
   PREMIUM
========================================= */

document
    .getElementById("premiumBuyBtn")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById("premiumModal")
                .classList.add("show");

        }
    );


document
    .getElementById("confirmPremiumBtn")
    .addEventListener(
        "click",
        () => {

            currentUser.premium =
                true;

            saveUser();

            updatePremiumUI();

            closeModal(
                "premiumModal"
            );

            showToast(
                "Premium muvaffaqiyatli yoqildi! 💎",
                "🎉"
            );

        }
    );


document
    .getElementById("tokenPremiumBtn")
    .addEventListener(
        "click",
        () => {

            if (
                currentUser.tokens < 500
            ) {

                showToast(
                    `Sizda ${currentUser.tokens} token bor. 500 token kerak.`,
                    "💎"
                );

                return;
            }

            currentUser.tokens -= 500;

            currentUser.premium =
                true;

            saveUser();

            updateUserUI();

            updatePremiumUI();

            showToast(
                "500 token evaziga Premium yoqildi!",
                "💎"
            );

        }
    );


function updatePremiumUI() {

    const badge =
        document.getElementById(
            "aiModeBadge"
        );

    if (!badge) return;

    if (currentUser.premium) {

        badge.textContent =
            "Premium";

        badge.style.background =
            "#fef3c7";

        badge.style.color =
            "#b45309";

    } else {

        badge.textContent =
            "Free";

    }

}


/* =========================================
   MODALS
========================================= */

document
    .querySelectorAll("[data-close]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                closeModal(
                    button.dataset.close
                );

            }
        );

    });


document
    .querySelectorAll(".modal-overlay")
    .forEach(overlay => {

        overlay.addEventListener(
            "click",
            function (e) {

                if (
                    e.target === overlay
                ) {

                    overlay.classList.remove(
                        "show"
                    );

                }

            }
        );

    });


function closeModal(id) {

    const modal =
        document.getElementById(id);

    if (modal) {

        modal.classList.remove(
            "show"
        );

    }

}


/* =========================================
   THEME
========================================= */

document
    .getElementById("themeBtn")
    .addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark"
            );

            localStorage.setItem(
                "studyhub_dark",
                document.body.classList.contains(
                    "dark"
                )
            );

        }
    );


function applySavedTheme() {

    const dark =
        localStorage.getItem(
            "studyhub_dark"
        ) === "true";

    document.body.classList.toggle(
        "dark",
        dark
    );

}


/* =========================================
   COLOR THEME
========================================= */

const themes = [
    "",
    "theme-green",
    "theme-pink",
    "theme-orange"
];

let currentThemeIndex = 0;


document
    .getElementById("colorBtn")
    .addEventListener(
        "click",
        () => {

            document.body.classList.remove(
                ...themes.filter(Boolean)
            );

            currentThemeIndex++;

            if (
                currentThemeIndex >=
                themes.length
            ) {

                currentThemeIndex = 0;

            }

            const theme =
                themes[currentThemeIndex];

            if (theme) {

                document.body.classList.add(
                    theme
                );

            }

            localStorage.setItem(
                "studyhub_theme",
                theme
            );

        }
    );


function applySavedColor() {

    const theme =
        localStorage.getItem(
            "studyhub_theme"
        );

    if (!theme) return;

    document.body.classList.add(
        theme
    );

    currentThemeIndex =
        themes.indexOf(theme);

    if (currentThemeIndex < 0) {

        currentThemeIndex = 0;

    }

}


/* =========================================
   MOBILE MENU
========================================= */

document
    .getElementById("menuBtn")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById("sidebar")
                .classList.toggle("open");

        }
    );


/* =========================================
   NOTIFICATION
========================================= */

document
    .getElementById("notificationBtn")
    .addEventListener(
        "click",
        () => {

            showToast(
                "Bugun 3 ta yangi missiya mavjud!",
                "🔔"
            );

        }
    );


/* =========================================
   TOAST
========================================= */

let toastTimer = null;


function showToast(
    message,
    icon = "✓"
) {

    const toast =
        document.getElementById(
            "toast"
        );

    document.getElementById(
        "toastIcon"
    ).textContent = icon;

    document.getElementById(
        "toastMessage"
    ).textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            3000
        );

}


/* =========================================
   SUBJECT NAME
========================================= */

function getSubjectName(id) {

    const subject =
        subjects.find(
            x => x.id === id
        );

    return subject
        ? subject.title
        : "Dars";

}


/* =========================================
   DAILY STREAK
========================================= */

function updateStreak() {

    if (!currentUser) return;

    const today =
        new Date()
            .toISOString()
            .slice(0, 10);

    const last =
        currentUser.lastActive;

    if (!last) {

        currentUser.lastActive =
            today;

        currentUser.streak =
            currentUser.streak || 1;

        saveUser();

        return;
    }

    if (last === today) {

        return;

    }

    const previous =
        new Date(last);

    const current =
        new Date(today);

    const difference =
        Math.floor(
            (
                current - previous
            ) /
            (1000 * 60 * 60 * 24)
        );

    if (difference === 1) {

        currentUser.streak++;

    } else if (difference > 1) {

        currentUser.streak = 1;

    }

    currentUser.lastActive =
        today;

    saveUser();

}


/* =========================================
   INITIALIZE
========================================= */

(function init() {

    currentUser =
        loadCurrentUser();

    applySavedColor();

    if (currentUser) {

        updateStreak();

        showApp();

        updatePremiumUI();

    }

})();


/* =========================================
   KEYBOARD SHORTCUT
========================================= */

document.addEventListener(
    "keydown",
    function (e) {

        if (
            e.key === "/" &&
            document.activeElement.tagName !== "INPUT" &&
            document.activeElement.tagName !== "TEXTAREA"
        ) {

            e.preventDefault();

            const search =
                document.getElementById(
                    "globalSearch"
                );

            search.focus();

        }

        if (e.key === "Escape") {

            document
                .querySelectorAll(
                    ".modal-overlay.show"
                )
                .forEach(modal => {

                    modal.classList.remove(
                        "show"
                    );

                });

        }

    }
);