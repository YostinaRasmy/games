
(function () {
    let questions = [];
    const questionSets = {
        dini: {
            kid: [
                "في أي مدينة ولد السيد المسيح؟",
                "ما هو اسم الجبل الذي أعطى الله عليه الوصايا العشر لموسى؟",
                "كم عدد الأيام التي خلق الله فيها العالم قبل أن يستريح؟",
                "من هو النبي الذي نجا من بطن الحوت؟",
                "ما اسم المرأة التي كانت أم النبي صموئيل؟",
                "ما هي الصلاة التي علمنا إياها السيد المسيح وتبدأ بـ 'أبانا الذي في السماوات'؟",
                "ما اسم النبي الذي تزوج سارة؟",
                "ما اسم أخت موسى النبي؟",
                "في أي شهر نحتفل بعيد الميلاد المجيد؟",
                "من هو الرسول الذي أنكر المسيح ثلاث مرات ثم بكى بنشيج؟",
                "من هو النبي الذي صعد إلى السماء في مركبة نارية؟",
                "ما هو أول سر من أسرار الكنيسة يدخل به الطفل إلى الإيمان؟",
                "ما اسم ابن إبراهيم وسارة الذي ولد لهما في كبرهما؟",
                "كم عدد تلاميذ السيد المسيح المقربين (الرسل)؟",
                "ما اسم البحر الذي شقه موسى النبي ليبر الشعب؟",
                "من هو الصبي الذي قتل الجبار جليات بمقلاعه؟",
                "ما هي المعجزة التي قام بها يسوع وأقام فيها صديقه بعد موته بأربعة أيام؟",
                "ماذا كان يعمل بطرس وأخوه أندراوس قبل أن يتبعا يسوع؟",
                "ما اسم الملك الذي كان يريد قتل الطفل يسوع في بيت لحم؟",
                "في أي نهر اعتمد السيد المسيح على يد يوحنا المعمدان؟",
                "ما هو الطائر الذي أرسله نوح من الفلك وعاد بغصن زيتون؟",
                "ما اسم المبشر الذي كتب الإنجيل الأول في العهد الجديد؟",
                "ما هو الرمز الذي أراها الله لنوح كعهد ألا يغرق الأرض بطوفان مرة أخرى؟",
                "ما هو اسم الصبي الذيسمع صوت الله يناديه في الهيكل وهو صغير؟",
                "ما هو المكان الذي صلب فيه السيد المسيح؟"
            ],
            teen: [
                "أين حدثت معمودية السيد المسيح؟",
                "أي إنجيل يبدأ بعبارة 'في البدء كان الكلمة'؟",
                "ما هو معنى كلمة 'الروح القدس' الأقنوم الثالث في الثالوث الأقدس؟",
                "ما اسم العيد الذي يحتفل فيه المسيحيون بحلول الروح القدس على التلاميذ؟",
                "ما هي اللغة الأساسية التي كتب بها معظم العهد القديم؟",
                "ما اسم النبي الذي أخرج الشعب القديم من أرض مصر؟",
                "أي سفر من أسفار العهد القديم يمتلئ بالصلوات والترانيم وكتب داود أغلبها؟",
                "ما اسم الجبل الذي تجلى عليه السيد المسيح أمام بطرس ويعقوب ويوحنا؟",
                "من هو أول شهيد في المسيحية بعد قيامة المسيح؟",
                "ما اسم الجبل الذي قدم عليه إيليا النبي ذبيحته أمام أنبياء البعل؟",
                "أي سفر في العهد الجديد يتحدث عن تاريخ نشأة الكنيسة الأولى ورحلات الرسل؟",
                "ما هي أول معجزة صنعها السيد المسيح في بداية خدمته الجهيرية؟",
                "من هو الملك الذي بنى الهيكل الأول في أورشليم؟",
                "ما اسم التلميذ الذي شك في قيامة المسيح حتى رأى أثر الجراح؟",
                "ما هي الوصية العظمى والأولى في الشريعة كما علّم يسوع؟",
                "في أي إنجيل وردت حادثة لقاء السيد المسيح مع المرأة السامرية عند البئر؟",
                "من هو التلميذ الذي كان يشار إليه بـ 'التلميذ الذي كان يسوع يحبه'؟",
                "ما اسم القرية التي كان يعيش فيها لعازر ومريم ومارثا؟",
                "كم سنة قضى بني إسرائيل في تيه البرية قبل دخول أرض الميعاد؟",
                "ما اسم الصديقة الملكة التي أنقذت شعبها من إبادة هامان؟",
                "من هو الرسول الذي انفتحت أمامه السجون وسقطت السلاسل بعد صلاة الكنيسة عنه؟",
                "ما اسم المدينة التي كان شاول الطرطوسي مسافراً إليها عندما ظهر له المسيح في الطريق؟",
                "أي سفر في العهد القديم يحتوي على حكم وأمثال للتعليم والتدريب على الحكمة؟",
                "ما هو معنى كلمة 'إنجيل' في اللغة اليونانية الأصلية؟",
                "ما اسم الملك الأشرار الذي قطع رأس يوحنا المعمدان؟"
            ],
            adult: [
                "من هو الرسول الذي كتب الرسالة إلى أهل رومية؟",
                "من هو كاتب سفر الرؤيا آخر أسفار العهد الجديد؟",
                "أي أصحاح في رسالة بولس الرسول الأولى إلى أهل كورنثوس يُعرف بـ 'أصحاح المحبة'؟",
                "كم عدد الأسباط الذين تكون منهم شعب بني إسرائيل؟",
                "ما هي المعجزة التي حول فيها يسوع الماء إلى خمر في بداية خدمته؟",
                "من هو النبي الذي تُنبئ في أصحاحه الـ 53 بالتفصيل عن آلام السيد المسيح وعُرف بـ 'النبي المتألم'؟",
                "أي يوم من أيام الأسبوع يعتبر يوم الراحة والعبادة الرئيسي للمسيحيين تذكاراً للقيامة؟",
                "من هي أول امرأة شاهدت القيامة وبشرت التلاميذ برؤية المسيح القائم؟",
                "ما اسم رئيس الكهنة الذي حوكم أمامه السيد المسيح قبل صلبه؟",
                "في أي سفر توجد الوصايا العشر لأول مرة في الكتاب المقدس؟",
                "ما هو الاسم الذي أُطلق على شاول الطرطوسي بعد تحوله للإيمان المسيحي؟",
                "ما هو السفر الوحيد في العهد الجديد الذي يصنف كسفر نبوي بالكامل؟",
                "من هو الملاك الذي بشر العذراء مريم بميلاد السيد المسيح؟",
                "ما هو المعنى اللاهوتي لكلمة 'عمانوئيل'؟",
                "من هو نبي العهد القديم الذي عاش تجربة الآلام البالغة والصبر الشديد؟",
                "في أي أصحاح من إنجيل متى تبدأ 'الموعظة على الجبل' (المطوبات)؟",
                "ما اسم الحاكم الروماني الذي أصدر الحكم بصلب السيد المسيح؟",
                "كم عدد الأسفار القانونية في العهد الجديد؟",
                "ما اسم المكان الذي يصلي فيه المسيحيون والمشتق من الكلمة اليونانية 'إكليسيا'؟",
                "من هما النبيان اللذان ظهرا مع السيد المسيح أثناء حادثة التجلي؟",
                "ما اسم العهد القديم المترجم إلى اللغة اليونانية الشهير باسم 'الترجمة السبعينية' (LXX)؟",
                "أي نبي رأى رؤيا العظام اليابسة وهي تعود إليها الحياة بالروح؟",
                "ما اسم التلميذ الذي اختير بالقرعة ليكون بدلاً من يهوذا الإسخريوطي؟",
                "أي سفر يُختتم بعبارة 'نعمة ربنا يسوع المسيح مع جميعكم. آمين'؟",
                "ما هو اللقب اللاهوتي الذي أُطلق على العذراء مريم في مجمع أفسس سنة 431 م؟"
            ]
        },
        general: {
            kid: [
                "ما هو لون السماء في النهار الصافي؟",
                "كم عدد أصابع اليد الواحدة لدى الإنسان؟",
                "ما هو الحيوان الذي يُلقب بـ 'ملك الغابة'؟",
                "ما هو الشكل الهندسي الذي يحتوي على 3 أضلاع؟",
                "كم ساعة توجد في اليوم الواحد؟",
                "ما هو الجهاز الذكي الذي نستخدمه للاتصال بالآخرين والتصفح؟",
                "كم يبلغ عدد كواكب المجموعة الشمسية؟",
                "ما هي عاصمة جمهورية مصر العربية؟",
                "أي كائن حقيقي يعيش في الماء ويتنفس بالخياشيم؟",
                "ما هو لون الموز عندما ينضج؟",
                "ما هو الحيوان البطيء الذي يحمل بيته الصلب على ظهره؟",
                "ما هي أسرع الكائنات البرية ركضاً في العالم؟",
                "ما هو المشروب الأبيَض المغذي الذي نحصل عليه من الأبقار؟",
                "أي يوم من أيام الأسبوع يأتي بعد يوم الإثنين؟",
                "ما هو صوت القط الأليف؟",
                "ما هي الأداة التي نستخدمها في كتابة واجباتنا المدرسية على الورق؟",
                "كم عدد ألوان علم جمهورية مصر العربية؟",
                "ما هو الكوكب الأقرب للشمس؟",
                "ما هو العضو المسؤول عن ضخ الدم في جسم الإنسان؟",
                "ما هو الغاز الحيوي الذي نتنفسه من الهواء لكي نعيش؟",
                "ما هو العضو المسؤول عن حاسة البصر؟",
                "كم عدد ألوان قوس قزح؟",
                "ما اسم الفاكهة الصيفية الحمراء الكبيرة المحشوة بالبذور؟",
                "أي فصل من فصول السنة تتساقط فيه أوراق الأشجار؟",
                "ما هو أضخم حيوان يعيش على سطح الكرة الأرضية؟"
            ],
            teen: [
                "ما هي أكبر قارات العالم مساحة؟",
                "ما هو الكوكب الملقب بـ 'الكوكب الأحمر'؟",
                "من هو العالم الذي صاغ نظرية الجاذبية الأرضية بعد سقوط التفاحة؟",
                "ما هو العنصر الكيميائي الذي يرمز له بالحرف 'O'؟",
                "ما هي أطول سلسة جبال في العالم فوق مستوى سطح البحر؟",
                "ما هو البحر الذي يفصل بين قارتي أوروبا وإفريقيا؟",
                "ما هو أطول نهر في العالم؟",
                "ما هو الجهاز الذي يستخدم لقياس درجات الحرارة بدقة؟",
                "ما هي لغة البرمجة الشهيرة التي يرمز لها بـ 'JS'؟",
                "في أي قارة تقع دولة البرازيل؟",
                "ما هو الكائن الذي يمتلك أكبر عقل بالنسبة لحجم جسمه وتجربة ذكائه عالية؟",
                "ما هي العملة الرسمية في اليابان؟",
                "ما هي المادة الخضراء في أوراق النباتات المسؤولة عن البناء الضوئي؟",
                "من هو الكاتب الإنجليزي الشهير مؤلف مسرحية 'روميو وجولييت'؟",
                "كم عدد عظام هيكل الإنسان البالغ؟",
                "ما هي عاصمة دولة أستراليا؟",
                "ما هي أصغر دولة في العالم من حيث المساحة؟",
                "ما هو المعدن الأفضل توصيلاً للكهرباء والحرارة؟",
                "ما هو الجهاز المستخدم لرصد وتسجيل الزلازل؟",
                "في أي عام هبط الإنسان لأول مرة على سطح القمر؟",
                "ما هي الدولة التي تُعرف بلقب 'بلاد الشمس المشرقة'؟",
                "ما هو الغاز الأكثر انتشاراً ونسبة في الغلاف الجوي للأرض؟",
                "ما هو العلم الذي يهتم بدراسة الأحافير والكائنات الحية القديمة؟",
                "ما هي عاصمة المملكة المتحدة (بريطانيا)؟",
                "كم تبلغ سرعة الضوء التقريبية في الفراغ لكل ثانية؟"
            ],
            adult: [
                "ما هي عاصمة فرنسا؟",
                "ما هو الرمز الكيميائي للماء؟",
                "من هو المخترع الرئيسي للمصباح الكهربائي التجاري المتوهج؟",
                "ما هي أعمق نقطة معروفة في المحيطات على وجه الأرض؟",
                "من هو العالم الطبّي الذي اكتشف البنسلين أول مضاد حيوي؟",
                "ما هي الدولة الأولى عالمياً من حيث عدد السكان حالياً؟",
                "ما اسم النظرية الفيزيائية الشهيرة التي وضعها ألبرت أينشتاين؟",
                "ما هي أكبر جزيرة في العالم من حيث المساحة الجغرافية؟",
                "ما اسم المضيق المائي الذي يفصل بين إفريقيا وأوروبا؟",
                "ما هي المادة الطبيعية الأشد صلابة وقساوة على سطح الأرض؟",
                "من هو العالم الذي يعتبر الأب الروحي لمفهوم الشبكة العنكبوتية العالمية (WWW)؟",
                "ما هي عاصمة كندا؟",
                "ما هو العنصر الوحيد الذي يتسامى مباشرة من الحالة الصلبة إلى الغازية في الضغط العادي؟",
                "ما هي الدولة التي تلقب بـ 'بلد المليون ونصف المليون شهيد'؟",
                "ما هو أقدم خط كتابة معروف في التاريخ البشري الحضاري؟",
                "ما هو اسم المجرة التي تنتمي إليها مجموعتنا الشمسية؟",
                "من هو الفيلسوف اليوناني القديم الذي كان معلماً للإسكندر الأكبر؟",
                "ما هي أكبر محمية طبيعية وحيوانية في العالم؟",
                "ما هو اسم العلم الذي يختص بدراسة الأنسجة الخلوية الحية؟",
                "ما هي الدولة التي تحتوي على أكبر عدد من الأهرامات في العالم؟",
                "ما هو اسم المقياس المعتمد لقياس شدة وتأثير الزلازل؟",
                "ما هي الدولة الأوروبية الوحيدة التي تحكم بنظام ملاحي محاط بالكامل بأراضي دولة أخرى؟",
                "ما هي أطول قناة مائية صناعية تربط بين بحرين في الشرق الأوسط؟",
                "ما هو اسم أطول جسر فوق الماء في العالم؟",
                "ما اسم الغاز الذي يُدعى أيضاً بـ 'غاز الخردل' وتاريخياً استخدم في التجارب العلمية؟"
            ]
        }
    };
    const colors = ["#e74c3c", "#3498db", "#2ecc71", "#f1c40f", "#9b59b6", "#e67e22", "#1abc9c"];
    const balloonsContainer = document.getElementById('balloons-container');
    const questionBox = document.getElementById('question-box');
    const questionText = document.getElementById('question-text');
    const closeBtn = document.getElementById('close-btn');
    const resetBtn = document.getElementById('reset-btn');
    const startBtn = document.getElementById('start-btn');
    const selectionPanel = document.getElementById('selection-panel');
    const leaderboardSection = document.getElementById('leaderboard-section');
    const ageButtons = document.querySelectorAll('.age-select');
    const typeButtons = document.querySelectorAll('.type-select');

    let selectedAge = null;
    let selectedType = null;
    let placedPositions = [];
    let contestants = [];

    function updateStartState() {
        const ready = Boolean(selectedAge && selectedType);
        startBtn.disabled = !ready;
    }

    function markActive(buttons, value) {
        buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.age === value || btn.dataset.type === value);
        });
    }

    ageButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            selectedAge = btn.dataset.age;
            markActive(ageButtons, selectedAge);
            updateStartState();
        });
    });

    typeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            selectedType = btn.dataset.type;
            markActive(typeButtons, selectedType);
            updateStartState();
        });
    });

    startBtn.addEventListener('click', () => {
        if (!selectedAge || !selectedType) return;
        questions = questionSets[selectedType][selectedAge] || [];
        selectionPanel.style.display = 'none';
        leaderboardSection.style.display = 'block';
        initBalloons();
    });

    function addContestant() {
        const input = document.getElementById('contestantInput');
        const name = input.value.trim();

        if (name === '') {
            alert('من فضلك ادخل اسم المتسابق أولاً ونوّر اللوحة! 🌟');
            return;
        }

        contestants.push({ id: Date.now(), name, score: 0 });
        input.value = '';
        updateLeaderboard();
    }

    function updateLeaderboard() {
        const leaderboardContainer = document.getElementById('leaderboard');
        leaderboardContainer.innerHTML = '';

        if (contestants.length === 0) {
            leaderboardContainer.innerHTML = '<p class="empty-msg">لا يوجد متسابقين حالياً، أضف بعض الحماس ولنبدأ! 🎉</p>';
            return;
        }

        contestants.sort((a, b) => b.score - a.score);

        contestants.forEach((contestant, index) => {
            let rankIcon = index + 1;
            let rankClass = '';

            if (index === 0) { rankIcon = '🥇'; rankClass = 'rank-0'; }
            else if (index === 1) { rankIcon = '🥈'; rankClass = 'rank-1'; }
            else if (index === 2) { rankIcon = '🥉'; rankClass = 'rank-2'; }

            const card = document.createElement('div');
            card.className = `contestant-card ${rankClass}`;
            card.innerHTML = `
    <div class="info-side">
        <div class="rank-badge">${rankIcon}</div>
        <div class="name">${contestant.name}</div>
    </div>
    <div class="score-side">
        <button class="btn-score btn-minus" onclick="changeScore(${contestant.id}, -1)">-</button>
        <div class="score-display">${contestant.score}</div>
        <button class="btn-score btn-plus" onclick="changeScore(${contestant.id}, 1)">+</button>
        <button class="btn-delete" onclick="deleteContestant(${contestant.id})" title="حذف">🗑️</button>
    </div>
    `;

            leaderboardContainer.appendChild(card);
        });
    }

    function changeScore(id, amount) {
        const contestant = contestants.find(c => c.id === id);
        if (contestant) {
            contestant.score += amount;
            if (contestant.score < 0) contestant.score = 0;
            updateLeaderboard();
        }
    }

    function deleteContestant(id) {
        contestants = contestants.filter(c => c.id !== id);
        updateLeaderboard();
    }

    function checkEnter(event) {
        if (event.key === 'Enter') {
            addContestant();
        }
    }

    window.addContestant = addContestant;
    window.changeScore = changeScore;
    window.deleteContestant = deleteContestant;
    window.checkEnter = checkEnter;

    function getContainerSize() {
        const rect = balloonsContainer.getBoundingClientRect();
        return {
            width: rect.width > 10 ? rect.width : Math.max(window.innerWidth * 0.7, 320),
            height: rect.height > 10 ? rect.height : Math.max(window.innerHeight * 0.5, 320)
        };
    }

    function generatePosition(boxW, boxH, w, h) {
        const minDist = 92;
        const maxAttempts = 300;
        let attempts = 0;

        while (attempts < maxAttempts) {
            const x = Math.random() * Math.max(0, boxW - w);
            const y = Math.random() * Math.max(0, boxH - h);
            let ok = true;

            for (const p of placedPositions) {
                const dx = p.x - x;
                const dy = p.y - y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < minDist) {
                    ok = false;
                    break;
                }
            }

            if (ok) {
                placedPositions.push({ x, y });
                return { x, y };
            }

            attempts++;
        }

        const x = Math.random() * Math.max(0, boxW - w);
        const y = Math.random() * Math.max(0, boxH - h);
        placedPositions.push({ x, y });
        return { x, y };
    }

    function createBalloon(index, question, boxW, boxH) {
        const width = 80;
        const height = 100;
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.textContent = index + 1;
        balloon.style.background = colors[index % colors.length];
        balloon.dataset.question = question;

        const pos = generatePosition(boxW, boxH, width, height);
        balloon.style.left = `${pos.x}px`;
        balloon.style.top = `${pos.y}px`;
        balloon.style.animationDuration = `${3 + Math.random() * 2}s`;
        balloon.style.animationDelay = `${Math.random() * 1.8}s`;

        balloon.addEventListener('click', function () {
            balloon.style.pointerEvents = 'none';
            balloon.style.animation = 'none';
            balloon.style.opacity = '0';
            balloon.style.transform = 'scale(0.8)';
            setTimeout(() => balloon.remove(), 450);

            questionText.textContent = balloon.dataset.question || 'هنا يظهر السؤال';
            questionBox.style.display = 'block';
            questionBox.setAttribute('aria-hidden', 'false');
        }, { once: true });

        balloonsContainer.appendChild(balloon);
    }

    function initBalloons() {
        placedPositions = [];
        balloonsContainer.innerHTML = '';
        const { width, height } = getContainerSize();
        questions.forEach((question, index) => createBalloon(index, question, width, height));
    }

    closeBtn.addEventListener('click', () => {
        questionBox.style.display = 'none';
        questionBox.setAttribute('aria-hidden', 'true');
    });

    resetBtn.addEventListener('click', () => {
        questionBox.style.display = 'none';
        questionBox.setAttribute('aria-hidden', 'true');
        leaderboardSection.style.display = 'block';
        initBalloons();
    });

    questionBox.addEventListener('click', (event) => {
        if (event.target === questionBox) {
            closeBtn.click();
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && questionBox.style.display === 'block') {
            closeBtn.click();
        }
    });

    window.addEventListener('load', () => {
        setTimeout(initBalloons, 20);
    });
})();
