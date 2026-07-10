const CATEGORIES = [
    {
        id: 'algebra',
        name: 'אלגברה',
        icon: '🔢',
        color: '#6c5ce7'
    },
    {
        id: 'functions',
        name: 'פונקציות',
        icon: '📈',
        color: '#0984e3'
    },
    {
        id: 'geometry',
        name: 'גאומטריה',
        icon: '📐',
        color: '#00b894'
    },
    {
        id: 'trigonometry',
        name: 'טריגונומטריה',
        icon: '🔺',
        color: '#e17055'
    },
    {
        id: 'probability',
        name: 'הסתברות וסטטיסטיקה',
        icon: '🎲',
        color: '#fdcb6e'
    },
    {
        id: 'sequences',
        name: 'סדרות',
        icon: '🔗',
        color: '#a29bfe'
    }
];

const LESSONS = [
    // ===== ALGEBRA (1-10) =====
    {
        id: 1,
        category: 'algebra',
        title: 'חוקי חזקות',
        desc: 'כפל, חילוק, חזקה של חזקה ועוד',
        theory: `
<h3>מהי חזקה?</h3>
<p>חזקה היא פעולה מתמטית של כפל חוזר. למשל: $a^n$ פירושו לכפול את $a$ בעצמו $n$ פעמים.</p>
<div class="formula-box">$a^n = \\underbrace{a \\cdot a \\cdot a \\cdots a}_{n \\text{ פעמים}}$</div>

<h3>חוקי החזקות</h3>
<div class="formula-box">$a^m \\cdot a^n = a^{m+n}$</div>
<p>כפל חזקות עם אותו בסיס: מחברים את המעריכים.</p>

<div class="formula-box">$\\frac{a^m}{a^n} = a^{m-n}$</div>
<p>חילוק חזקות עם אותו בסיס: מחסרים את המעריכים.</p>

<div class="formula-box">$(a^m)^n = a^{m \\cdot n}$</div>
<p>חזקה של חזקה: כופלים את המעריכים.</p>

<div class="formula-box">$(a \\cdot b)^n = a^n \\cdot b^n$</div>
<p>חזקה של מכפלה: מפזרים את החזקה.</p>

<div class="formula-box">$a^0 = 1 \\quad (a \\neq 0)$</div>
<p>כל מספר (שאינו 0) בחזקת 0 שווה 1.</p>

<div class="formula-box">$a^{-n} = \\frac{1}{a^n}$</div>
<p>חזקה שלילית: הופכים לשבר.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>פשטו את הביטוי: $\\frac{2^5 \\cdot 2^3}{2^4}$</p>
<p>פתרון: $\\frac{2^{5+3}}{2^4} = \\frac{2^8}{2^4} = 2^{8-4} = 2^4 = 16$</p>
</div>

<div class="tip-box">
<div class="tip-title">טיפ</div>
<p>כשעובדים עם חזקות, תמיד בדקו שהבסיס זהה לפני שמשתמשים בחוקים!</p>
</div>`,
        questions: [
            {
                q: 'מהו הערך של $2^3 \\cdot 2^4$?',
                options: ['$2^{12}$', '$2^7$', '$4^7$', '$2^{7/12}$'],
                correct: 1,
                explanation: 'לפי חוק כפל חזקות: $2^3 \\cdot 2^4 = 2^{3+4} = 2^7 = 128$'
            },
            {
                q: 'מהו הערך של $(3^2)^3$?',
                options: ['$3^5$', '$3^8$', '$3^6$', '$9^3$'],
                correct: 2,
                explanation: 'לפי חוק חזקה של חזקה: $(3^2)^3 = 3^{2 \\cdot 3} = 3^6 = 729$'
            },
            {
                q: 'פשטו: $\\frac{5^6}{5^2}$',
                options: ['$5^3$', '$5^4$', '$5^{12}$', '$1^4$'],
                correct: 1,
                explanation: 'לפי חוק חילוק חזקות: $\\frac{5^6}{5^2} = 5^{6-2} = 5^4 = 625$'
            },
            {
                q: 'מהו הערך של $7^0$?',
                options: ['$0$', '$7$', '$1$', 'לא מוגדר'],
                correct: 2,
                explanation: 'כל מספר (שאינו 0) בחזקת 0 שווה 1. לכן $7^0 = 1$.'
            },
            {
                q: 'מהו הערך של $2^{-3}$?',
                options: ['$-8$', '$-6$', '$\\frac{1}{8}$', '$\\frac{1}{6}$'],
                correct: 2,
                explanation: '$2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$'
            }
        ]
    },
    {
        id: 2,
        category: 'algebra',
        title: 'שורשים',
        desc: 'שורש ריבועי, חוקי שורשים וייצוג כחזקה',
        theory: `
<h3>מהו שורש?</h3>
<p>השורש הריבועי של מספר $a$ הוא המספר שאם נכפול אותו בעצמו נקבל $a$:</p>
<div class="formula-box">$\\sqrt{a} = b \\iff b^2 = a \\quad (b \\geq 0)$</div>

<h3>חוקי שורשים</h3>
<div class="formula-box">$\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$</div>
<div class="formula-box">$\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$</div>
<div class="formula-box">$\\sqrt{a^2} = |a|$</div>
<div class="formula-box">$\\sqrt[n]{a} = a^{\\frac{1}{n}}$</div>

<h3>ייצוג שורשים כחזקות</h3>
<p>ניתן להמיר שורשים לחזקות שבריות:</p>
<div class="formula-box">$\\sqrt{a} = a^{\\frac{1}{2}}, \\quad \\sqrt[3]{a} = a^{\\frac{1}{3}}$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>פשטו: $\\sqrt{50}$</p>
<p>$\\sqrt{50} = \\sqrt{25 \\cdot 2} = \\sqrt{25} \\cdot \\sqrt{2} = 5\\sqrt{2}$</p>
</div>`,
        questions: [
            {
                q: 'מהו הערך של $\\sqrt{144}$?',
                options: ['$14$', '$11$', '$12$', '$13$'],
                correct: 2,
                explanation: '$12^2 = 144$, לכן $\\sqrt{144} = 12$'
            },
            {
                q: 'פשטו: $\\sqrt{72}$',
                options: ['$6\\sqrt{2}$', '$8\\sqrt{3}$', '$4\\sqrt{5}$', '$3\\sqrt{8}$'],
                correct: 0,
                explanation: '$\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$'
            },
            {
                q: 'מהו הערך של $\\sqrt{3} \\cdot \\sqrt{12}$?',
                options: ['$\\sqrt{15}$', '$6$', '$4$', '$36$'],
                correct: 1,
                explanation: '$\\sqrt{3} \\cdot \\sqrt{12} = \\sqrt{36} = 6$'
            },
            {
                q: 'כיצד רושמים $\\sqrt[3]{8}$ כחזקה?',
                options: ['$8^3$', '$8^{\\frac{1}{3}}$', '$3^8$', '$8^{-3}$'],
                correct: 1,
                explanation: '$\\sqrt[3]{8} = 8^{\\frac{1}{3}} = 2$'
            },
            {
                q: 'מהו הערך של $\\sqrt{(-5)^2}$?',
                options: ['$-5$', '$5$', '$25$', '$-25$'],
                correct: 1,
                explanation: '$\\sqrt{(-5)^2} = \\sqrt{25} = 5 = |-5|$. שורש ריבועי תמיד מחזיר ערך אי-שלילי.'
            }
        ]
    },
    {
        id: 3,
        category: 'algebra',
        title: 'פירוק לגורמים',
        desc: 'הוצאת גורם משותף, כפל מקוצר ופירוק טרינום',
        theory: `
<h3>מהו פירוק לגורמים?</h3>
<p>פירוק לגורמים הוא רישום ביטוי אלגברי כמכפלה של ביטויים פשוטים יותר.</p>

<h3>הוצאת גורם משותף</h3>
<div class="formula-box">$ab + ac = a(b + c)$</div>

<h3>נוסחאות כפל מקוצר</h3>
<div class="formula-box">$a^2 - b^2 = (a-b)(a+b)$</div>
<div class="formula-box">$(a+b)^2 = a^2 + 2ab + b^2$</div>
<div class="formula-box">$(a-b)^2 = a^2 - 2ab + b^2$</div>

<h3>פירוק טרינום ריבועי</h3>
<p>לפרק $x^2 + bx + c$, מחפשים שני מספרים שסכומם $b$ ומכפלתם $c$:</p>
<div class="formula-box">$x^2 + bx + c = (x + p)(x + q) \\quad \\text{כאשר } p+q=b, \\; pq=c$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>פרקו: $x^2 + 5x + 6$</p>
<p>מחפשים שני מספרים שסכומם 5 ומכפלתם 6: אלו 2 ו-3.</p>
<p>$x^2 + 5x + 6 = (x+2)(x+3)$</p>
</div>`,
        questions: [
            {
                q: 'פרקו: $x^2 - 9$',
                options: ['$(x-3)(x+3)$', '$(x-3)^2$', '$(x-9)(x+1)$', '$(x+3)^2$'],
                correct: 0,
                explanation: 'זהו הפרש ריבועים: $x^2 - 9 = x^2 - 3^2 = (x-3)(x+3)$'
            },
            {
                q: 'פרקו: $x^2 + 7x + 12$',
                options: ['$(x+6)(x+2)$', '$(x+4)(x+3)$', '$(x+12)(x+1)$', '$(x+6)(x+1)$'],
                correct: 1,
                explanation: 'מחפשים שני מספרים שסכומם 7 ומכפלתם 12: $3+4=7$ ו-$3 \\cdot 4=12$. לכן $(x+3)(x+4)$.'
            },
            {
                q: 'פרקו: $3x^2 + 6x$',
                options: ['$3(x^2 + 6x)$', '$x(3x + 6)$', '$3x(x + 2)$', '$6x(x+1)$'],
                correct: 2,
                explanation: 'הגורם המשותף הוא $3x$: $3x^2 + 6x = 3x(x+2)$'
            },
            {
                q: 'מהו הפירוק של $(a+b)^2$?',
                options: ['$a^2 + b^2$', '$a^2 + ab + b^2$', '$a^2 + 2ab + b^2$', '$2a^2 + 2b^2$'],
                correct: 2,
                explanation: '$(a+b)^2 = a^2 + 2ab + b^2$ - זוהי נוסחת כפל מקוצר.'
            },
            {
                q: 'פרקו: $x^2 - 5x + 6$',
                options: ['$(x-2)(x-3)$', '$(x+2)(x-3)$', '$(x-1)(x-6)$', '$(x+2)(x+3)$'],
                correct: 0,
                explanation: 'מחפשים מספרים שסכומם $-5$ ומכפלתם $6$: $(-2)+(-3)=-5$ ו-$(-2)(-3)=6$.'
            }
        ]
    },
    {
        id: 4,
        category: 'algebra',
        title: 'משוואות ריבועיות',
        desc: 'פתרון משוואות ממעלה שנייה',
        theory: `
<h3>מהי משוואה ריבועית?</h3>
<p>משוואה מהצורה $ax^2 + bx + c = 0$ כאשר $a \\neq 0$.</p>

<h3>נוסחת השורשים (נוסחת הדיסקרימיננטה)</h3>
<div class="formula-box">$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$</div>

<h3>הדיסקרימיננטה</h3>
<div class="formula-box">$\\Delta = b^2 - 4ac$</div>
<p>$\\Delta > 0$ — שני פתרונות שונים</p>
<p>$\\Delta = 0$ — פתרון יחיד (שורש כפול)</p>
<p>$\\Delta < 0$ — אין פתרון ממשי</p>

<h3>נוסחאות וייטה</h3>
<p>אם $x_1, x_2$ הם שורשי המשוואה $ax^2+bx+c=0$:</p>
<div class="formula-box">$x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 \\cdot x_2 = \\frac{c}{a}$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>פתרו: $x^2 - 5x + 6 = 0$</p>
<p>$a=1, b=-5, c=6$</p>
<p>$\\Delta = 25 - 24 = 1$</p>
<p>$x = \\frac{5 \\pm 1}{2}$, לכן $x_1 = 3, x_2 = 2$</p>
</div>`,
        questions: [
            {
                q: 'מהם פתרונות המשוואה $x^2 - 4x + 3 = 0$?',
                options: ['$x=1, x=3$', '$x=-1, x=-3$', '$x=2, x=6$', '$x=4, x=3$'],
                correct: 0,
                explanation: '$\\Delta = 16-12 = 4$. $x = \\frac{4 \\pm 2}{2}$, לכן $x=3$ או $x=1$.'
            },
            {
                q: 'מהי הדיסקרימיננטה של $2x^2 + 3x - 2 = 0$?',
                options: ['$1$', '$25$', '$-7$', '$9$'],
                correct: 1,
                explanation: '$\\Delta = 3^2 - 4(2)(-2) = 9 + 16 = 25$'
            },
            {
                q: 'למשוואה $x^2 + 2x + 5 = 0$:',
                options: ['יש שני פתרונות', 'יש פתרון יחיד', 'אין פתרון ממשי', 'יש אינסוף פתרונות'],
                correct: 2,
                explanation: '$\\Delta = 4 - 20 = -16 < 0$, לכן אין פתרון ממשי.'
            },
            {
                q: 'אם שורשי המשוואה $x^2+bx+c=0$ הם $2$ ו-$5$, מהו $c$?',
                options: ['$7$', '$10$', '$-10$', '$3$'],
                correct: 1,
                explanation: 'לפי נוסחאות וייטה: $x_1 \\cdot x_2 = c$, לכן $c = 2 \\cdot 5 = 10$.'
            },
            {
                q: 'פתרו: $x^2 = 16$',
                options: ['$x=4$', '$x=-4$', '$x=4$ או $x=-4$', '$x=8$'],
                correct: 2,
                explanation: '$x^2 - 16 = 0 \\Rightarrow (x-4)(x+4)=0 \\Rightarrow x=4$ או $x=-4$'
            }
        ]
    },
    {
        id: 5,
        category: 'algebra',
        title: 'אי-שוויונות',
        desc: 'אי-שוויונות לינאריים וריבועיים',
        theory: `
<h3>אי-שוויון לינארי</h3>
<p>פותרים כמו משוואה רגילה, אך כשכופלים או מחלקים במספר שלילי — הופכים את כיוון הסימן!</p>
<div class="formula-box">$\\text{אם } a < b \\text{ ו-} c < 0 \\text{ אז } ac > bc$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>פתרו: $-2x + 3 > 7$</p>
<p>$-2x > 4$</p>
<p>$x < -2$ (הופכים כיוון כי מחלקים ב-$(-2)$)</p>
</div>

<h3>אי-שוויון ריבועי</h3>
<p>לפתור אי-שוויון כמו $ax^2 + bx + c > 0$:</p>
<p>1. מוצאים את שורשי המשוואה $ax^2+bx+c=0$</p>
<p>2. משרטטים את הפרבולה ובודקים היכן היא חיובית/שלילית</p>

<div class="tip-box">
<div class="tip-title">טיפ</div>
<p>אם $a > 0$ (פרבולה עם מינימום), הביטוי שלילי בין השורשים וחיובי מחוצה להם.</p>
</div>`,
        questions: [
            {
                q: 'פתרו: $3x - 6 > 0$',
                options: ['$x > 2$', '$x < 2$', '$x > -2$', '$x < -2$'],
                correct: 0,
                explanation: '$3x > 6 \\Rightarrow x > 2$'
            },
            {
                q: 'פתרו: $-x + 4 \\leq 1$',
                options: ['$x \\leq 3$', '$x \\geq 3$', '$x \\leq -3$', '$x \\geq -3$'],
                correct: 1,
                explanation: '$-x \\leq -3 \\Rightarrow x \\geq 3$ (הופכים כיוון!)'
            },
            {
                q: 'מהו תחום הפתרון של $x^2 - 4 < 0$?',
                options: ['$x < -2$ או $x > 2$', '$-2 < x < 2$', '$x < 2$', '$x > -2$'],
                correct: 1,
                explanation: '$x^2 - 4 < 0 \\Rightarrow (x-2)(x+2) < 0$. הפרבולה שלילית בין השורשים: $-2 < x < 2$.'
            },
            {
                q: 'פתרו: $x^2 - 1 \\geq 0$',
                options: ['$-1 \\leq x \\leq 1$', '$x \\leq -1$ או $x \\geq 1$', '$x \\geq 1$', '$x \\leq -1$'],
                correct: 1,
                explanation: '$(x-1)(x+1) \\geq 0$. הפרבולה חיובית מחוץ לשורשים: $x \\leq -1$ או $x \\geq 1$.'
            },
            {
                q: 'אם $a < b$, אז:',
                options: ['$-a < -b$', '$-a > -b$', '$-a = -b$', 'אי אפשר לדעת'],
                correct: 1,
                explanation: 'כשכופלים ב-$(-1)$, הכיוון מתהפך: אם $a < b$ אז $-a > -b$.'
            }
        ]
    },
    {
        id: 6,
        category: 'algebra',
        title: 'מערכות משוואות',
        desc: 'פתרון מערכות בשתי נעלמים',
        theory: `
<h3>מערכת משוואות</h3>
<p>מערכת של שתי משוואות עם שני נעלמים:</p>
<div class="formula-box">$\\begin{cases} a_1x + b_1y = c_1 \\\\ a_2x + b_2y = c_2 \\end{cases}$</div>

<h3>שיטת ההצבה</h3>
<p>1. מבודדים נעלם אחד ממשוואה אחת.</p>
<p>2. מציבים במשוואה השנייה.</p>
<p>3. פותרים ומוצאים את שני הנעלמים.</p>

<h3>שיטת החיבור (האלימינציה)</h3>
<p>מכפילים את המשוואות כך שמקדם אחד הנעלמים יתאפס בחיבור.</p>

<div class="example-box">
<div class="example-title">דוגמה — שיטת ההצבה</div>
<p>$\\begin{cases} x + y = 5 \\\\ 2x - y = 1 \\end{cases}$</p>
<p>ממשוואה 1: $y = 5 - x$</p>
<p>נציב במשוואה 2: $2x - (5-x) = 1 \\Rightarrow 3x = 6 \\Rightarrow x = 2$</p>
<p>$y = 5 - 2 = 3$. הפתרון: $(2, 3)$</p>
</div>`,
        questions: [
            {
                q: 'פתרו: $\\begin{cases} x + y = 7 \\\\ x - y = 3 \\end{cases}$',
                options: ['$(5, 2)$', '$(3, 4)$', '$(4, 3)$', '$(2, 5)$'],
                correct: 0,
                explanation: 'חיבור שתי המשוואות: $2x = 10 \\Rightarrow x = 5$, ואז $y = 2$.'
            },
            {
                q: 'פתרו: $\\begin{cases} 2x + y = 8 \\\\ x - y = 1 \\end{cases}$',
                options: ['$(2, 4)$', '$(3, 2)$', '$(4, 0)$', '$(1, 6)$'],
                correct: 1,
                explanation: 'חיבור: $3x = 9 \\Rightarrow x = 3$. $y = 8 - 6 = 2$.'
            },
            {
                q: 'למערכת $\\begin{cases} 2x + 4y = 10 \\\\ x + 2y = 5 \\end{cases}$ יש:',
                options: ['פתרון יחיד', 'אינסוף פתרונות', 'אין פתרון', 'שני פתרונות'],
                correct: 1,
                explanation: 'המשוואה הראשונה היא כפולה של השנייה, לכן יש אינסוף פתרונות.'
            },
            {
                q: 'בשיטת ההצבה, אם $y = 3x$ ו-$x + y = 8$, מהו $x$?',
                options: ['$1$', '$2$', '$3$', '$4$'],
                correct: 1,
                explanation: '$x + 3x = 8 \\Rightarrow 4x = 8 \\Rightarrow x = 2$'
            },
            {
                q: 'מהו $y$ אם $\\begin{cases} 3x - y = 7 \\\\ x + y = 5 \\end{cases}$?',
                options: ['$3$', '$1$', '$2$', '$4$'],
                correct: 2,
                explanation: 'חיבור: $4x = 12 \\Rightarrow x = 3$. $y = 5 - 3 = 2$.'
            }
        ]
    },
    {
        id: 7,
        category: 'algebra',
        title: 'ערך מוחלט',
        desc: 'הגדרה, משוואות ואי-שוויונות עם ערך מוחלט',
        theory: `
<h3>הגדרת ערך מוחלט</h3>
<div class="formula-box">$|a| = \\begin{cases} a & \\text{אם } a \\geq 0 \\\\ -a & \\text{אם } a < 0 \\end{cases}$</div>
<p>ערך מוחלט מייצג את המרחק של מספר מ-0 על ציר המספרים.</p>

<h3>משוואות עם ערך מוחלט</h3>
<div class="formula-box">$|x| = a \\iff x = a \\text{ או } x = -a \\quad (a \\geq 0)$</div>

<h3>אי-שוויונות עם ערך מוחלט</h3>
<div class="formula-box">$|x| < a \\iff -a < x < a$</div>
<div class="formula-box">$|x| > a \\iff x > a \\text{ או } x < -a$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>פתרו: $|2x - 3| = 5$</p>
<p>מקרה 1: $2x - 3 = 5 \\Rightarrow x = 4$</p>
<p>מקרה 2: $2x - 3 = -5 \\Rightarrow x = -1$</p>
</div>`,
        questions: [
            {
                q: 'מהו הערך של $|-7|$?',
                options: ['$-7$', '$7$', '$0$', '$49$'],
                correct: 1,
                explanation: '$|-7| = 7$. ערך מוחלט תמיד מחזיר ערך אי-שלילי.'
            },
            {
                q: 'פתרו: $|x| = 5$',
                options: ['$x = 5$', '$x = -5$', '$x = 5$ או $x = -5$', 'אין פתרון'],
                correct: 2,
                explanation: '$|x| = 5$ אם ורק אם $x = 5$ או $x = -5$.'
            },
            {
                q: 'מהו תחום הפתרון של $|x| < 3$?',
                options: ['$x < 3$', '$-3 < x < 3$', '$x > -3$', '$x < -3$ או $x > 3$'],
                correct: 1,
                explanation: '$|x| < 3 \\iff -3 < x < 3$'
            },
            {
                q: 'פתרו: $|x - 2| = 0$',
                options: ['$x = 0$', '$x = 2$', '$x = -2$', 'אין פתרון'],
                correct: 1,
                explanation: '$|x - 2| = 0 \\Rightarrow x - 2 = 0 \\Rightarrow x = 2$'
            },
            {
                q: 'פתרו: $|x + 1| > 4$',
                options: ['$x > 3$', '$-5 < x < 3$', '$x > 3$ או $x < -5$', '$x < -5$'],
                correct: 2,
                explanation: '$|x+1| > 4 \\Rightarrow x+1 > 4$ (כלומר $x > 3$) או $x+1 < -4$ (כלומר $x < -5$).'
            }
        ]
    },
    {
        id: 8,
        category: 'algebra',
        title: 'לוגריתמים',
        desc: 'הגדרה, חוקי לוגריתמים ושימושים',
        theory: `
<h3>מהו לוגריתם?</h3>
<p>לוגריתם הוא הפעולה ההפוכה לחזקה. כשאנחנו שואלים "מה זה $\\log_2 8$?", אנחנו בעצם שואלים: <strong>"בחזקת כמה צריך להעלות את 2 כדי לקבל 8?"</strong></p>
<p>התשובה היא 3, כי $2^3 = 8$, ולכן $\\log_2 8 = 3$.</p>
<p>באופן כללי: $\\log_a b$ שואל — "בחזקת כמה צריך להעלות את $a$ כדי לקבל $b$?"</p>

<h3>הגדרה פורמלית</h3>
<div class="formula-box">$\\log_a b = c \\iff a^c = b \\quad (a > 0, a \\neq 1, b > 0)$</div>
<p>שימו לב: הבסיס $a$ חייב להיות חיובי ושונה מ-1, והארגומנט $b$ חייב להיות חיובי.</p>

<h3>חוקי לוגריתמים</h3>
<div class="formula-box">$\\log_a(xy) = \\log_a x + \\log_a y$</div>
<div class="formula-box">$\\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y$</div>
<div class="formula-box">$\\log_a(x^n) = n \\cdot \\log_a x$</div>

<h3>ערכים מיוחדים</h3>
<div class="formula-box">$\\log_a 1 = 0, \\quad \\log_a a = 1$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>חשבו: $\\log_2 8$</p>
<p>$\\log_2 8 = \\log_2 2^3 = 3$</p>
</div>`,
        questions: [
            {
                q: 'מהו $\\log_3 27$?',
                options: ['$2$', '$3$', '$9$', '$4$'],
                correct: 1,
                explanation: '$3^3 = 27$, לכן $\\log_3 27 = 3$.'
            },
            {
                q: 'מהו $\\log_5 1$?',
                options: ['$1$', '$5$', '$0$', 'לא מוגדר'],
                correct: 2,
                explanation: '$5^0 = 1$, לכן $\\log_5 1 = 0$.'
            },
            {
                q: 'פשטו: $\\log_2 4 + \\log_2 8$',
                options: ['$3$', '$5$', '$12$', '$32$'],
                correct: 1,
                explanation: '$\\log_2 4 + \\log_2 8 = 2 + 3 = 5$. לחלופין: $\\log_2(4 \\cdot 8) = \\log_2 32 = 5$.'
            },
            {
                q: 'מהו $\\log_{10} 1000$?',
                options: ['$2$', '$3$', '$4$', '$100$'],
                correct: 1,
                explanation: '$10^3 = 1000$, לכן $\\log_{10} 1000 = 3$.'
            },
            {
                q: 'אם $\\log_2 x = 5$, מהו $x$?',
                options: ['$10$', '$25$', '$32$', '$64$'],
                correct: 2,
                explanation: '$\\log_2 x = 5 \\Rightarrow x = 2^5 = 32$'
            }
        ]
    },
    {
        id: 9,
        category: 'algebra',
        title: 'ביטויים אלגבריים רציונליים',
        desc: 'שברים אלגבריים - צמצום, כפל וחיבור',
        theory: `
<h3>שבר אלגברי</h3>
<p>שבר שבמונה ובמכנה יש ביטויים אלגבריים. חשוב לציין תנאי הגדרה — המכנה לא יכול להיות 0!</p>

<h3>צמצום שברים</h3>
<p>מפרקים מונה ומכנה לגורמים ומצמצמים:</p>
<div class="formula-box">$\\frac{x^2 - 4}{x + 2} = \\frac{(x-2)(x+2)}{x+2} = x - 2 \\quad (x \\neq -2)$</div>

<h3>כפל וחילוק</h3>
<div class="formula-box">$\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}$</div>
<div class="formula-box">$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{ad}{bc}$</div>

<h3>חיבור וחיסור</h3>
<p>מוצאים מכנה משותף ומחברים/מחסרים את המונים.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$\\frac{1}{x} + \\frac{1}{x+1} = \\frac{x+1+x}{x(x+1)} = \\frac{2x+1}{x(x+1)}$</p>
</div>`,
        questions: [
            {
                q: 'צמצמו: $\\frac{x^2 - 1}{x - 1}$',
                options: ['$x$', '$x + 1$', '$x - 1$', '$x^2$'],
                correct: 1,
                explanation: '$\\frac{x^2-1}{x-1} = \\frac{(x-1)(x+1)}{x-1} = x+1$ (כאשר $x \\neq 1$).'
            },
            {
                q: 'מהו תנאי ההגדרה של $\\frac{3}{x-2}$?',
                options: ['$x \\neq 0$', '$x \\neq 2$', '$x \\neq 3$', '$x \\neq -2$'],
                correct: 1,
                explanation: 'המכנה לא יכול להיות 0: $x - 2 \\neq 0 \\Rightarrow x \\neq 2$.'
            },
            {
                q: 'חשבו: $\\frac{2}{3} \\cdot \\frac{9}{4}$',
                options: ['$\\frac{3}{2}$', '$\\frac{11}{12}$', '$\\frac{18}{12}$', '$\\frac{6}{12}$'],
                correct: 0,
                explanation: '$\\frac{2}{3} \\cdot \\frac{9}{4} = \\frac{18}{12} = \\frac{3}{2}$'
            },
            {
                q: 'חשבו: $\\frac{1}{x} + \\frac{2}{x}$',
                options: ['$\\frac{3}{x^2}$', '$\\frac{2}{x^2}$', '$\\frac{3}{x}$', '$\\frac{3}{2x}$'],
                correct: 2,
                explanation: 'מכנה זהה, מחברים מונים: $\\frac{1+2}{x} = \\frac{3}{x}$'
            },
            {
                q: 'צמצמו: $\\frac{2x+4}{2}$',
                options: ['$x + 4$', '$x + 2$', '$2x + 2$', '$x + 1$'],
                correct: 1,
                explanation: '$\\frac{2x+4}{2} = \\frac{2(x+2)}{2} = x + 2$'
            }
        ]
    },
    {
        id: 10,
        category: 'algebra',
        title: 'משוואות שבריות ושורשיות',
        desc: 'משוואות עם שברים אלגבריים ושורשים',
        theory: `
<h3>משוואות שבריות</h3>
<p>משוואות שמכילות שברים אלגבריים. צעדים:</p>
<p>1. מציאת תנאי הגדרה (המכנה ≠ 0)</p>
<p>2. כפל בכל המכנים</p>
<p>3. פתרון ובדיקה שהפתרון עומד בתנאי ההגדרה</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$\\frac{3}{x-1} = 2$</p>
<p>תנאי: $x \\neq 1$</p>
<p>$3 = 2(x-1) \\Rightarrow 3 = 2x - 2 \\Rightarrow x = 2.5$ ✓</p>
</div>

<h3>משוואות שורשיות</h3>
<p>משוואות עם שורש — מעלים בריבוע ובודקים פתרונות זרים!</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$\\sqrt{x+3} = 4$</p>
<p>$x + 3 = 16 \\Rightarrow x = 13$</p>
<p>בדיקה: $\\sqrt{16} = 4$ ✓</p>
</div>

<div class="tip-box">
<div class="tip-title">זכרו</div>
<p>בהעלאה בריבוע עלולים להופיע פתרונות זרים. תמיד בדקו את הפתרונות במשוואה המקורית!</p>
</div>`,
        questions: [
            {
                q: 'פתרו: $\\frac{6}{x} = 3$',
                options: ['$x = 2$', '$x = 3$', '$x = 18$', '$x = \\frac{1}{2}$'],
                correct: 0,
                explanation: '$6 = 3x \\Rightarrow x = 2$'
            },
            {
                q: 'פתרו: $\\sqrt{x} = 5$',
                options: ['$x = 5$', '$x = 10$', '$x = 25$', '$x = \\sqrt{5}$'],
                correct: 2,
                explanation: '$\\sqrt{x} = 5 \\Rightarrow x = 25$'
            },
            {
                q: 'פתרו: $\\sqrt{2x-1} = 3$',
                options: ['$x = 2$', '$x = 4$', '$x = 5$', '$x = 1$'],
                correct: 2,
                explanation: '$2x - 1 = 9 \\Rightarrow 2x = 10 \\Rightarrow x = 5$'
            },
            {
                q: 'האם $x = -1$ הוא פתרון של $\\frac{x}{x+1} = 2$?',
                options: ['כן', 'לא, כי אז המכנה 0', 'לא, כי זה נותן $-1$', 'כן, כי $\\frac{-1}{0} = 2$'],
                correct: 1,
                explanation: 'כש-$x=-1$, $x+1=0$ ומקבלים שבר עם מכנה 0 שאינו מוגדר.'
            },
            {
                q: 'פתרו: $\\sqrt{x+5} = x-1$. מהם הפתרונות?',
                options: ['$x=4$ בלבד', '$x=-1$ בלבד', '$x=4$ ו-$x=-1$', '$x=4$ (ו-$x=-1$ זר)'],
                correct: 3,
                explanation: 'מרובעים: $x+5 = x^2-2x+1 \\Rightarrow x^2-3x-4=0 \\Rightarrow (x-4)(x+1)=0$. בדיקה: $x=4$: $\\sqrt{9}=3$ ✓. $x=-1$: $\\sqrt{4}=2 \\neq -2$ ✗.'
            }
        ]
    },

    // ===== FUNCTIONS (11-20) =====
    {
        id: 11,
        category: 'functions',
        title: 'מושג הפונקציה',
        desc: 'הגדרה, תחום, טווח וייצוגים',
        theory: `
<h3>מהי פונקציה?</h3>
<p>פונקציה היא כלל שמתאים לכל ערך $x$ בתחום ערך $y$ יחיד.</p>
<p>כותבים: $f(x) = ...$ או $y = ...$</p>

<h3>תחום הגדרה</h3>
<p>כל ערכי $x$ שעבורם הפונקציה מוגדרת.</p>

<h3>טווח (תמונה)</h3>
<p>כל ערכי $y$ שהפונקציה מקבלת.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$f(x) = \\sqrt{x-2}$</p>
<p>תחום: $x \\geq 2$ (הביטוי תחת השורש חייב להיות אי-שלילי)</p>
<p>טווח: $y \\geq 0$</p>
</div>

<h3>חישוב ערך פונקציה</h3>
<p>$f(3)$ פירושו "הציבו $x=3$ בפונקציה".</p>
<div class="formula-box">$\\text{אם } f(x) = 2x + 1 \\text{ אז } f(3) = 2(3)+1 = 7$</div>`,
        questions: [
            {
                q: 'אם $f(x) = 3x - 2$, מהו $f(4)$?',
                options: ['$10$', '$14$', '$8$', '$12$'],
                correct: 0,
                explanation: '$f(4) = 3(4) - 2 = 12 - 2 = 10$'
            },
            {
                q: 'מהו תחום ההגדרה של $f(x) = \\frac{1}{x-3}$?',
                options: ['כל הממשיים', '$x \\neq 0$', '$x \\neq 3$', '$x > 3$'],
                correct: 2,
                explanation: 'המכנה לא יכול להיות 0: $x-3 \\neq 0 \\Rightarrow x \\neq 3$.'
            },
            {
                q: 'מהו תחום ההגדרה של $f(x) = \\sqrt{x}$?',
                options: ['כל הממשיים', '$x > 0$', '$x \\geq 0$', '$x \\neq 0$'],
                correct: 2,
                explanation: 'אפשר להוציא שורש רק ממספר אי-שלילי: $x \\geq 0$.'
            },
            {
                q: 'אם $f(x) = x^2$, מהו $f(-3)$?',
                options: ['$-9$', '$6$', '$9$', '$-6$'],
                correct: 2,
                explanation: '$f(-3) = (-3)^2 = 9$'
            },
            {
                q: 'איזה מהבאים אינו פונקציה?',
                options: ['$y = 2x$', '$y = x^2$', '$x = y^2$ (כש-$y$ תלוי ב-$x$)', '$y = |x|$'],
                correct: 2,
                explanation: '$x = y^2$ נותן שני ערכי $y$ לכל $x > 0$ (למשל $x=4$ נותן $y=2$ וגם $y=-2$).'
            }
        ]
    },
    {
        id: 12,
        category: 'functions',
        title: 'פונקציה לינארית',
        desc: 'הישר, שיפוע, נקודת חיתוך',
        theory: `
<h3>פונקציה לינארית</h3>
<div class="formula-box">$f(x) = mx + b$</div>
<p>$m$ — שיפוע הישר (slope)</p>
<p>$b$ — נקודת החיתוך עם ציר $y$ (ה-$y$ כש-$x=0$)</p>

<h3>שיפוע</h3>
<p>השיפוע מודד את קצב השינוי:</p>
<div class="formula-box">$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\Delta y}{\\Delta x}$</div>
<p>$m > 0$ — פונקציה עולה, $m < 0$ — פונקציה יורדת, $m = 0$ — פונקציה קבועה</p>

<h3>משוואת ישר דרך שתי נקודות</h3>
<p>נתונות $(x_1,y_1)$ ו-$(x_2,y_2)$: מחשבים שיפוע ומציבים.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>מצאו משוואת ישר דרך $(1,3)$ ו-$(3,7)$:</p>
<p>$m = \\frac{7-3}{3-1} = 2$</p>
<p>$y = 2x + b$. נציב $(1,3)$: $3 = 2+b \\Rightarrow b = 1$</p>
<p>$y = 2x + 1$</p>
</div>`,
        questions: [
            {
                q: 'מהו השיפוע של $y = 3x - 5$?',
                options: ['$-5$', '$3$', '$-3$', '$5$'],
                correct: 1,
                explanation: 'בצורה $y=mx+b$, השיפוע הוא $m=3$.'
            },
            {
                q: 'מהי נקודת החיתוך עם ציר $y$ של $y = -2x + 4$?',
                options: ['$(0, -2)$', '$(0, 4)$', '$(4, 0)$', '$(2, 0)$'],
                correct: 1,
                explanation: 'כש-$x=0$: $y = 4$. הנקודה היא $(0,4)$.'
            },
            {
                q: 'מהו השיפוע של ישר העובר דרך $(2,1)$ ו-$(4,7)$?',
                options: ['$2$', '$4$', '$3$', '$6$'],
                correct: 2,
                explanation: '$m = \\frac{7-1}{4-2} = \\frac{6}{2} = 3$'
            },
            {
                q: 'ישר עם שיפוע שלילי הוא ישר:',
                options: ['עולה', 'יורד', 'אופקי', 'אנכי'],
                correct: 1,
                explanation: 'שיפוע שלילי = ככל ש-$x$ גדל, $y$ קטן = ישר יורד.'
            },
            {
                q: 'מהי נקודת החיתוך עם ציר $x$ של $y = 2x - 6$?',
                options: ['$(3, 0)$', '$(0, 3)$', '$(-3, 0)$', '$(6, 0)$'],
                correct: 0,
                explanation: 'כש-$y=0$: $2x - 6 = 0 \\Rightarrow x = 3$. הנקודה: $(3, 0)$.'
            }
        ]
    },
    {
        id: 13,
        category: 'functions',
        title: 'פונקציה ריבועית',
        desc: 'פרבולה, קודקוד, ציר סימטריה',
        theory: `
<h3>פונקציה ריבועית</h3>
<div class="formula-box">$f(x) = ax^2 + bx + c$</div>
<p>הגרף שלה הוא פרבולה.</p>

<h3>כיוון הפרבולה</h3>
<p>$a > 0$ — פרבולה "מחייכת" (מינימום)</p>
<p>$a < 0$ — פרבולה "עצובה" (מקסימום)</p>

<h3>קודקוד הפרבולה</h3>
<div class="formula-box">$x_v = -\\frac{b}{2a}, \\quad y_v = f(x_v)$</div>

<h3>ציר הסימטריה</h3>
<div class="formula-box">$x = -\\frac{b}{2a}$</div>

<h3>נקודות חיתוך עם ציר $x$</h3>
<p>פותרים $ax^2+bx+c=0$ בעזרת נוסחת השורשים.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$f(x) = x^2 - 4x + 3$</p>
<p>$x_v = \\frac{4}{2} = 2, \\quad y_v = 4-8+3 = -1$</p>
<p>קודקוד: $(2, -1)$. זהו מינימום כי $a=1>0$.</p>
</div>`,
        questions: [
            {
                q: 'מהו קודקוד הפרבולה $y = x^2 - 6x + 8$?',
                options: ['$(3, -1)$', '$(3, 1)$', '$(2, 0)$', '$(6, 8)$'],
                correct: 0,
                explanation: '$x_v = \\frac{6}{2} = 3$, $y_v = 9-18+8 = -1$. קודקוד: $(3,-1)$.'
            },
            {
                q: 'הפרבולה $y = -2x^2 + 3$ פונה:',
                options: ['כלפי מעלה', 'כלפי מטה', 'ימינה', 'שמאלה'],
                correct: 1,
                explanation: '$a = -2 < 0$, לכן הפרבולה פונה כלפי מטה.'
            },
            {
                q: 'כמה נקודות חיתוך עם ציר $x$ יש ל-$y = x^2 + 1$?',
                options: ['$0$', '$1$', '$2$', 'אינסוף'],
                correct: 0,
                explanation: '$x^2 + 1 = 0 \\Rightarrow x^2 = -1$. אין פתרון ממשי, אין חיתוך עם ציר $x$.'
            },
            {
                q: 'מהו ציר הסימטריה של $y = 2x^2 - 8x + 5$?',
                options: ['$x = 4$', '$x = -2$', '$x = 2$', '$x = -4$'],
                correct: 2,
                explanation: '$x = -\\frac{-8}{2 \\cdot 2} = \\frac{8}{4} = 2$'
            },
            {
                q: 'מהו ערך המינימום של $f(x) = x^2 - 2x + 5$?',
                options: ['$5$', '$4$', '$1$', '$0$'],
                correct: 1,
                explanation: '$x_v = 1, y_v = 1-2+5 = 4$. ערך מינימום = 4.'
            }
        ]
    },
    {
        id: 14,
        category: 'functions',
        title: 'פונקציה מעריכית',
        desc: '$f(x) = a^x$ — גדילה ודעיכה',
        theory: `
<h3>מהי פונקציה מעריכית?</h3>
<p>פונקציה מעריכית היא פונקציה שבה המשתנה $x$ נמצא <strong>בחזקה</strong> (במעריך), ולא בבסיס. בניגוד ל-$x^2$ (חזקה רגילה), כאן הבסיס קבוע והמעריך משתנה: $2^x$, $3^x$ וכו'.</p>
<p>פונקציות מעריכיות מתארות תהליכים של גדילה או דעיכה מהירה — למשל ריבית דריבית, רבייה של חיידקים, או פירוק רדיואקטיבי.</p>

<h3>הגדרה</h3>
<div class="formula-box">$f(x) = a^x \\quad (a > 0, a \\neq 1)$</div>

<h3>תכונות</h3>
<p>• עוברת דרך $(0, 1)$ תמיד כי $a^0 = 1$</p>
<p>• אם $a > 1$ — פונקציה עולה (גדילה מעריכית)</p>
<p>• אם $0 < a < 1$ — פונקציה יורדת (דעיכה מעריכית)</p>
<p>• תמיד חיובית: $a^x > 0$ לכל $x$</p>
<p>• תחום: כל הממשיים. טווח: $(0, \\infty)$</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$f(x) = 2^x$: $f(0)=1, f(1)=2, f(2)=4, f(3)=8, f(-1)=0.5$</p>
<p>הפונקציה מכפילה את ערכה בכל יחידת $x$.</p>
</div>

<div class="tip-box">
<div class="tip-title">שימוש בחיים</div>
<p>ריבית דריבית, גדילת אוכלוסייה, ודעיכה רדיואקטיבית — כולם מתוארים בפונקציות מעריכיות.</p>
</div>`,
        questions: [
            {
                q: 'מהו $2^0$?',
                options: ['$0$', '$2$', '$1$', 'לא מוגדר'],
                correct: 2,
                explanation: 'כל מספר (שאינו 0) בחזקת 0 שווה 1.'
            },
            {
                q: 'הפונקציה $f(x) = 3^x$ היא:',
                options: ['יורדת', 'עולה', 'קבועה', 'מחזורית'],
                correct: 1,
                explanation: '$3 > 1$ לכן $3^x$ עולה.'
            },
            {
                q: 'הפונקציה $f(x) = (\\frac{1}{2})^x$ היא:',
                options: ['עולה', 'יורדת', 'קבועה', 'לא מוגדרת'],
                correct: 1,
                explanation: '$0 < \\frac{1}{2} < 1$ לכן הפונקציה יורדת (דעיכה).'
            },
            {
                q: 'מהו הטווח של $f(x) = 5^x$?',
                options: ['כל הממשיים', '$(0, \\infty)$', '$[0, \\infty)$', '$[1, \\infty)$'],
                correct: 1,
                explanation: 'פונקציה מעריכית תמיד חיובית (לעולם לא 0), לכן הטווח $(0, \\infty)$.'
            },
            {
                q: 'פתרו: $2^x = 16$',
                options: ['$x = 3$', '$x = 4$', '$x = 8$', '$x = 2$'],
                correct: 1,
                explanation: '$2^x = 16 = 2^4 \\Rightarrow x = 4$'
            }
        ]
    },
    {
        id: 15,
        category: 'functions',
        title: 'פונקציה לוגריתמית',
        desc: 'ההופכית של המעריכית',
        theory: `
<h3>מהי פונקציה לוגריתמית?</h3>
<p>פונקציה לוגריתמית היא הפונקציה ההפוכה של פונקציה מעריכית. אם הפונקציה המעריכית שואלת "מה מקבלים כשמעלים בסיס בחזקה מסוימת?", אז הפונקציה הלוגריתמית שואלת את השאלה ההפוכה: "בחזקת כמה צריך להעלות את הבסיס?"</p>

<h3>הגדרה</h3>
<div class="formula-box">$f(x) = \\log_a x \\quad (a > 0, a \\neq 1)$</div>

<h3>תכונות</h3>
<p>• תחום: $x > 0$</p>
<p>• עוברת דרך $(1, 0)$ כי $\\log_a 1 = 0$</p>
<p>• עוברת דרך $(a, 1)$ כי $\\log_a a = 1$</p>
<p>• אם $a > 1$ — עולה</p>
<p>• אם $0 < a < 1$ — יורדת</p>

<h3>הקשר למעריכית</h3>
<div class="formula-box">$y = \\log_a x \\iff x = a^y$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$f(x) = \\log_2 x$: $f(1)=0, f(2)=1, f(4)=2, f(8)=3$</p>
</div>`,
        questions: [
            {
                q: 'מהו תחום ההגדרה של $f(x) = \\log_3 x$?',
                options: ['כל הממשיים', '$x \\geq 0$', '$x > 0$', '$x > 1$'],
                correct: 2,
                explanation: 'לוגריתם מוגדר רק למספרים חיוביים (ממש): $x > 0$.'
            },
            {
                q: 'מהו $\\log_2 1$?',
                options: ['$1$', '$2$', '$0$', 'לא מוגדר'],
                correct: 2,
                explanation: '$\\log_a 1 = 0$ לכל $a$, כי $a^0 = 1$.'
            },
            {
                q: 'באיזו נקודה הגרף של $y = \\log_5 x$ חותך את ציר $x$?',
                options: ['$(0, 0)$', '$(1, 0)$', '$(5, 0)$', 'לא חותך'],
                correct: 1,
                explanation: '$\\log_5 x = 0 \\Rightarrow x = 5^0 = 1$. נקודת החיתוך: $(1, 0)$.'
            },
            {
                q: 'מהו תחום ההגדרה של $f(x) = \\log(x - 4)$?',
                options: ['$x > 0$', '$x > 4$', '$x \\geq 4$', '$x > -4$'],
                correct: 1,
                explanation: '$x - 4 > 0 \\Rightarrow x > 4$'
            },
            {
                q: 'הגרפים של $y=2^x$ ו-$y=\\log_2 x$ הם:',
                options: ['מקבילים', 'שווים', 'סימטריים ביחס ל-$y=x$', 'ניצבים'],
                correct: 2,
                explanation: 'פונקציה ופונקציה הופכית תמיד סימטריות ביחס לישר $y=x$.'
            }
        ]
    },
    {
        id: 16,
        category: 'functions',
        title: 'פונקציה הפוכה',
        desc: 'מציאת פונקציה הופכית',
        theory: `
<h3>מהי פונקציה הפוכה?</h3>
<p>אם $f(a) = b$, אז $f^{-1}(b) = a$. הפונקציה ההפוכה "מבטלת" את הפונקציה המקורית.</p>
<div class="formula-box">$f(f^{-1}(x)) = x \\quad \\text{ו-} \\quad f^{-1}(f(x)) = x$</div>

<h3>איך מוצאים פונקציה הפוכה</h3>
<p>1. כותבים $y = f(x)$</p>
<p>2. מחליפים $x$ ו-$y$</p>
<p>3. מבודדים את $y$</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$f(x) = 2x + 3$. מצאו $f^{-1}(x)$:</p>
<p>$y = 2x + 3$</p>
<p>$x = 2y + 3$</p>
<p>$y = \\frac{x-3}{2}$</p>
<p>$f^{-1}(x) = \\frac{x-3}{2}$</p>
</div>

<div class="tip-box">
<div class="tip-title">תנאי</div>
<p>רק פונקציה חד-חד-ערכית (שלא חוזרת על ערכים) היא הפיכה.</p>
</div>`,
        questions: [
            {
                q: 'מהי ההופכית של $f(x) = 3x$?',
                options: ['$f^{-1}(x) = \\frac{x}{3}$', '$f^{-1}(x) = 3x$', '$f^{-1}(x) = -3x$', '$f^{-1}(x) = x-3$'],
                correct: 0,
                explanation: '$y=3x \\Rightarrow x=3y \\Rightarrow y=\\frac{x}{3}$'
            },
            {
                q: 'מהי ההופכית של $f(x) = x + 5$?',
                options: ['$f^{-1}(x) = x + 5$', '$f^{-1}(x) = x - 5$', '$f^{-1}(x) = 5 - x$', '$f^{-1}(x) = -x - 5$'],
                correct: 1,
                explanation: '$y=x+5 \\Rightarrow x=y+5 \\Rightarrow y=x-5$'
            },
            {
                q: 'אם $f(2) = 7$, מהו $f^{-1}(7)$?',
                options: ['$2$', '$7$', '$\\frac{1}{7}$', 'אי אפשר לדעת'],
                correct: 0,
                explanation: 'אם $f(2)=7$ אז $f^{-1}(7)=2$. ההופכית מחזירה את הקלט.'
            },
            {
                q: 'ל-$f(x) = x^2$ (בכל הממשיים):',
                options: ['יש הופכית: $\\sqrt{x}$', 'יש הופכית: $-\\sqrt{x}$', 'אין הופכית', 'יש הופכית: $\\pm\\sqrt{x}$'],
                correct: 2,
                explanation: '$f(x)=x^2$ לא חד-חד-ערכית (למשל $f(2)=f(-2)=4$), לכן אינה הפיכה.'
            },
            {
                q: 'הגרף של $f^{-1}$ מתקבל מגרף $f$ ע"י:',
                options: ['שיקוף בציר $x$', 'שיקוף בציר $y$', 'שיקוף בישר $y=x$', 'סיבוב ב-90°'],
                correct: 2,
                explanation: 'הגרף של פונקציה הפוכה מתקבל משיקוף ביחס לישר $y=x$.'
            }
        ]
    },
    {
        id: 17,
        category: 'functions',
        title: 'הרכבת פונקציות',
        desc: '$f(g(x))$ — פונקציה בתוך פונקציה',
        theory: `
<h3>הרכבת פונקציות</h3>
<div class="formula-box">$(f \\circ g)(x) = f(g(x))$</div>
<p>קודם מפעילים $g$, ואז מפעילים $f$ על התוצאה.</p>

<h3>סדר חשוב!</h3>
<p>בדרך כלל $f(g(x)) \\neq g(f(x))$.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$f(x) = x^2, \\quad g(x) = x + 3$</p>
<p>$f(g(x)) = f(x+3) = (x+3)^2$</p>
<p>$g(f(x)) = g(x^2) = x^2 + 3$</p>
</div>`,
        questions: [
            {
                q: 'אם $f(x) = 2x$ ו-$g(x) = x+1$, מהו $f(g(3))$?',
                options: ['$7$', '$8$', '$6$', '$10$'],
                correct: 1,
                explanation: '$g(3) = 4$, $f(4) = 8$.'
            },
            {
                q: 'אם $f(x) = x^2$ ו-$g(x) = x-2$, מהו $f(g(x))$?',
                options: ['$x^2 - 2$', '$(x-2)^2$', '$x^2 - 4$', '$(x^2-2)^2$'],
                correct: 1,
                explanation: '$f(g(x)) = f(x-2) = (x-2)^2$'
            },
            {
                q: 'אם $f(x) = \\sqrt{x}$ ו-$g(x) = x+4$, מהו $(f \\circ g)(5)$?',
                options: ['$\\sqrt{5}+4$', '$3$', '$\\sqrt{9}$', '$3$ ו-$\\sqrt{9}$ (שניהם)'],
                correct: 3,
                explanation: '$g(5) = 9$, $f(9) = \\sqrt{9} = 3$.'
            },
            {
                q: 'אם $f(x) = 3x+1$ ו-$g(x) = 2x$, מהו $g(f(x))$?',
                options: ['$6x + 1$', '$6x + 2$', '$3(2x)+1$', '$6x^2$'],
                correct: 1,
                explanation: '$g(f(x)) = g(3x+1) = 2(3x+1) = 6x+2$'
            },
            {
                q: 'אם $f(g(x)) = x$ לכל $x$, אז:',
                options: ['$f = g$', '$g$ היא ההופכית של $f$', '$f \\cdot g = 1$', '$f + g = x$'],
                correct: 1,
                explanation: 'אם $f(g(x))=x$ לכל $x$, אז $g = f^{-1}$.'
            }
        ]
    },
    {
        id: 18,
        category: 'functions',
        title: 'תחום הגדרה',
        desc: 'מציאת תחום לסוגי פונקציות שונים',
        theory: `
<h3>כללים למציאת תחום</h3>

<h3>שברים</h3>
<p>מכנה ≠ 0</p>
<div class="formula-box">$f(x) = \\frac{p(x)}{q(x)} \\Rightarrow q(x) \\neq 0$</div>

<h3>שורשים</h3>
<p>הביטוי תחת שורש זוגי חייב להיות ≥ 0</p>
<div class="formula-box">$f(x) = \\sqrt{g(x)} \\Rightarrow g(x) \\geq 0$</div>

<h3>לוגריתמים</h3>
<p>הארגומנט חייב להיות חיובי (ממש)</p>
<div class="formula-box">$f(x) = \\log(g(x)) \\Rightarrow g(x) > 0$</div>

<h3>שילובים</h3>
<p>כשיש כמה תנאים, התחום הוא החיתוך של כולם.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$f(x) = \\frac{\\sqrt{x-1}}{x-3}$</p>
<p>תנאי 1: $x - 1 \\geq 0 \\Rightarrow x \\geq 1$</p>
<p>תנאי 2: $x - 3 \\neq 0 \\Rightarrow x \\neq 3$</p>
<p>תחום: $x \\geq 1$ ו-$x \\neq 3$, כלומר $[1,3) \\cup (3, \\infty)$</p>
</div>`,
        questions: [
            {
                q: 'מהו התחום של $f(x) = \\sqrt{x - 5}$?',
                options: ['$x > 5$', '$x \\geq 5$', '$x > 0$', 'כל הממשיים'],
                correct: 1,
                explanation: '$x - 5 \\geq 0 \\Rightarrow x \\geq 5$'
            },
            {
                q: 'מהו התחום של $f(x) = \\frac{1}{x^2-4}$?',
                options: ['$x \\neq 4$', '$x \\neq 2$', '$x \\neq \\pm 2$', '$x > 2$'],
                correct: 2,
                explanation: '$x^2-4 \\neq 0 \\Rightarrow (x-2)(x+2) \\neq 0 \\Rightarrow x \\neq 2, x \\neq -2$'
            },
            {
                q: 'מהו התחום של $f(x) = \\ln(3-x)$?',
                options: ['$x > 3$', '$x < 3$', '$x \\geq 3$', '$x \\neq 3$'],
                correct: 1,
                explanation: '$3 - x > 0 \\Rightarrow x < 3$'
            },
            {
                q: 'מהו התחום של $f(x) = \\sqrt{-x}$?',
                options: ['$x \\geq 0$', '$x \\leq 0$', '$x > 0$', 'תחום ריק'],
                correct: 1,
                explanation: '$-x \\geq 0 \\Rightarrow x \\leq 0$'
            },
            {
                q: 'מהו התחום של $f(x) = \\frac{\\sqrt{x}}{x-1}$?',
                options: ['$x \\geq 0$', '$x \\geq 0, x \\neq 1$', '$x > 1$', '$x > 0, x \\neq 1$'],
                correct: 1,
                explanation: 'תנאי 1: $x \\geq 0$ (שורש). תנאי 2: $x \\neq 1$ (מכנה). החיתוך: $x \\geq 0$ ו-$x \\neq 1$.'
            }
        ]
    },
    {
        id: 19,
        category: 'functions',
        title: 'העתקות של גרפים',
        desc: 'הזזה, שיקוף ומתיחה של גרפי פונקציות',
        theory: `
<h3>הזזה אנכית</h3>
<div class="formula-box">$f(x) + k$ — הזזה $k$ יחידות למעלה</div>
<div class="formula-box">$f(x) - k$ — הזזה $k$ יחידות למטה</div>

<h3>הזזה אופקית</h3>
<div class="formula-box">$f(x - h)$ — הזזה $h$ יחידות ימינה</div>
<div class="formula-box">$f(x + h)$ — הזזה $h$ יחידות שמאלה</div>

<h3>שיקוף</h3>
<div class="formula-box">$-f(x)$ — שיקוף בציר $x$</div>
<div class="formula-box">$f(-x)$ — שיקוף בציר $y$</div>

<h3>מתיחה/כיווץ</h3>
<div class="formula-box">$af(x)$ — מתיחה אנכית בפקטור $a$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$f(x) = x^2$. הגרף של $g(x) = (x-3)^2 + 2$ הוא הפרבולה $f$ שהוזזה 3 ימינה ו-2 למעלה.</p>
</div>`,
        questions: [
            {
                q: 'הגרף של $y = f(x) + 3$ מתקבל מגרף $f$ ע"י:',
                options: ['הזזה 3 ימינה', 'הזזה 3 שמאלה', 'הזזה 3 למעלה', 'הזזה 3 למטה'],
                correct: 2,
                explanation: 'הוספת קבוע לפונקציה = הזזה אנכית למעלה.'
            },
            {
                q: 'הגרף של $y = f(x-2)$ מתקבל מגרף $f$ ע"י:',
                options: ['הזזה 2 ימינה', 'הזזה 2 שמאלה', 'הזזה 2 למעלה', 'הזזה 2 למטה'],
                correct: 0,
                explanation: '$f(x-2)$ מזיז את הגרף 2 יחידות ימינה (הכיוון הפוך מהסימן!).'
            },
            {
                q: 'הגרף של $y = -f(x)$ מתקבל מגרף $f$ ע"י:',
                options: ['שיקוף בציר $y$', 'שיקוף בציר $x$', 'סיבוב 90°', 'הזזה למטה'],
                correct: 1,
                explanation: 'כפל ב-$(-1)$ = שיקוף בציר $x$.'
            },
            {
                q: 'אם $f(x) = x^2$, מהו $g(x) = (x+1)^2 - 4$?',
                options: ['$f$ הוזזה 1 ימינה, 4 למטה', '$f$ הוזזה 1 שמאלה, 4 למטה', '$f$ הוזזה 1 שמאלה, 4 למעלה', '$f$ הוזזה 1 ימינה, 4 למעלה'],
                correct: 1,
                explanation: '$(x+1)$ = הזזה 1 שמאלה, $-4$ = הזזה 4 למטה.'
            },
            {
                q: 'הגרף של $y = 2f(x)$ ביחס ל-$f(x)$:',
                options: ['מוזז 2 למעלה', 'מורחב אנכית פי 2', 'מורחב אופקית פי 2', 'מוזז 2 ימינה'],
                correct: 1,
                explanation: 'כפל הפונקציה בקבוע = מתיחה אנכית.'
            }
        ]
    },
    {
        id: 20,
        category: 'functions',
        title: 'פונקציה זוגית ואי-זוגית',
        desc: 'סימטריה של פונקציות',
        theory: `
<h3>פונקציה זוגית</h3>
<div class="formula-box">$f(-x) = f(x) \\quad \\text{לכל } x$</div>
<p>הגרף סימטרי ביחס לציר $y$.</p>
<p>דוגמאות: $x^2, x^4, |x|, \\cos x$</p>

<h3>פונקציה אי-זוגית</h3>
<div class="formula-box">$f(-x) = -f(x) \\quad \\text{לכל } x$</div>
<p>הגרף סימטרי ביחס לראשית.</p>
<p>דוגמאות: $x, x^3, \\sin x$</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>האם $f(x) = x^3 + x$ זוגית, אי-זוגית, או אף אחד?</p>
<p>$f(-x) = (-x)^3 + (-x) = -x^3 - x = -(x^3+x) = -f(x)$</p>
<p>מכיוון ש-$f(-x) = -f(x)$, הפונקציה אי-זוגית.</p>
</div>`,
        questions: [
            {
                q: 'הפונקציה $f(x) = x^2$ היא:',
                options: ['זוגית', 'אי-זוגית', 'לא זוגית ולא אי-זוגית', 'גם וגם'],
                correct: 0,
                explanation: '$f(-x) = (-x)^2 = x^2 = f(x)$, לכן זוגית.'
            },
            {
                q: 'הפונקציה $f(x) = x^3$ היא:',
                options: ['זוגית', 'אי-זוגית', 'לא זוגית ולא אי-זוגית', 'גם וגם'],
                correct: 1,
                explanation: '$f(-x) = (-x)^3 = -x^3 = -f(x)$, לכן אי-זוגית.'
            },
            {
                q: 'הפונקציה $f(x) = x^2 + x$ היא:',
                options: ['זוגית', 'אי-זוגית', 'לא זוגית ולא אי-זוגית', 'גם וגם'],
                correct: 2,
                explanation: '$f(-x) = x^2 - x \\neq f(x)$ ו-$\\neq -f(x)$. לא זוגית ולא אי-זוגית.'
            },
            {
                q: 'גרף של פונקציה זוגית סימטרי ביחס ל:',
                options: ['ציר $x$', 'ציר $y$', 'ראשית הצירים', 'הישר $y=x$'],
                correct: 1,
                explanation: 'פונקציה זוגית סימטרית ביחס לציר $y$.'
            },
            {
                q: 'הפונקציה $f(x) = |x|$ היא:',
                options: ['זוגית', 'אי-זוגית', 'לא זוגית ולא אי-זוגית', 'גם וגם'],
                correct: 0,
                explanation: '$f(-x) = |-x| = |x| = f(x)$, לכן זוגית.'
            }
        ]
    },

    // ===== GEOMETRY (21-28) =====
    {
        id: 21,
        category: 'geometry',
        title: 'משפט פיתגורס',
        desc: 'הקשר בין צלעות במשולש ישר-זווית',
        theory: `
<h3>משפט פיתגורס</h3>
<p>במשולש ישר-זווית, סכום ריבועי הניצבים שווה לריבוע היתר:</p>
<div class="formula-box">$a^2 + b^2 = c^2$</div>
<p>כאשר $c$ היא היתר (הצלע הכי ארוכה, מול הזווית הישרה).</p>

<h3>שימושים</h3>
<p>• חישוב צלע חסרה במשולש ישר-זווית</p>
<p>• בדיקה אם משולש הוא ישר-זווית</p>
<p>• חישוב מרחקים</p>

<h3>שלשות פיתגוריות נפוצות</h3>
<p>$(3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25)$</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>ניצב אחד = 6, ניצב שני = 8. מהו היתר?</p>
<p>$c^2 = 6^2 + 8^2 = 36 + 64 = 100$</p>
<p>$c = 10$</p>
</div>`,
        questions: [
            {
                q: 'מהו אורך היתר אם הניצבים הם 3 ו-4?',
                options: ['$6$', '$7$', '$5$', '$\\sqrt{7}$'],
                correct: 2,
                explanation: '$c^2 = 9 + 16 = 25 \\Rightarrow c = 5$'
            },
            {
                q: 'אם היתר = 13 וניצב אחד = 5, מהו הניצב השני?',
                options: ['$8$', '$12$', '$10$', '$\\sqrt{144}$'],
                correct: 1,
                explanation: '$b^2 = 169 - 25 = 144 \\Rightarrow b = 12$'
            },
            {
                q: 'האם משולש עם צלעות 6, 8, 10 הוא ישר-זווית?',
                options: ['כן', 'לא', 'אי אפשר לדעת', 'רק אם הוא שווה-שוקיים'],
                correct: 0,
                explanation: '$6^2 + 8^2 = 36 + 64 = 100 = 10^2$ ✓'
            },
            {
                q: 'מהו אורך האלכסון של מלבן שצלעותיו 5 ו-12?',
                options: ['$17$', '$13$', '$15$', '$\\sqrt{17}$'],
                correct: 1,
                explanation: 'אלכסון מלבן = היתר: $\\sqrt{25+144} = \\sqrt{169} = 13$'
            },
            {
                q: 'במשולש ישר-זווית שווה-שוקיים, אם הניצב = $a$, מהו היתר?',
                options: ['$2a$', '$a\\sqrt{3}$', '$a\\sqrt{2}$', '$\\frac{a}{\\sqrt{2}}$'],
                correct: 2,
                explanation: '$c^2 = a^2 + a^2 = 2a^2 \\Rightarrow c = a\\sqrt{2}$'
            }
        ]
    },
    {
        id: 22,
        category: 'geometry',
        title: 'שטח וזוויות במשולש',
        desc: 'חישובי שטח, סכום זוויות וגובה',
        theory: `
<h3>סכום זוויות במשולש</h3>
<div class="formula-box">$\\alpha + \\beta + \\gamma = 180°$</div>

<h3>שטח משולש</h3>
<div class="formula-box">$S = \\frac{a \\cdot h_a}{2}$</div>
<p>כאשר $a$ הוא הבסיס ו-$h_a$ הגובה לבסיס.</p>

<h3>נוסחת הרון</h3>
<p>כשידועות שלוש הצלעות:</p>
<div class="formula-box">$S = \\sqrt{s(s-a)(s-b)(s-c)}$</div>
<p>כאשר $s = \\frac{a+b+c}{2}$ (חצי ההיקף).</p>

<h3>סוגי משולשים</h3>
<p>• שווה-צלעות: כל הצלעות שוות, כל זווית = 60°</p>
<p>• שווה-שוקיים: שתי צלעות שוות, זוויות הבסיס שוות</p>
<p>• ישר-זווית: זווית אחת = 90°</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>משולש עם בסיס 10 וגובה 6:</p>
<p>$S = \\frac{10 \\cdot 6}{2} = 30$</p>
</div>`,
        questions: [
            {
                q: 'מהו שטח משולש עם בסיס 8 וגובה 5?',
                options: ['$40$', '$20$', '$13$', '$80$'],
                correct: 1,
                explanation: '$S = \\frac{8 \\cdot 5}{2} = 20$'
            },
            {
                q: 'אם שתי זוויות במשולש הן $50°$ ו-$70°$, מהי השלישית?',
                options: ['$50°$', '$70°$', '$60°$', '$120°$'],
                correct: 2,
                explanation: '$180° - 50° - 70° = 60°$'
            },
            {
                q: 'מהו שטח משולש שווה-צלעות עם צלע $a$?',
                options: ['$a^2$', '$\\frac{a^2\\sqrt{3}}{4}$', '$\\frac{a^2}{2}$', '$\\frac{a^2\\sqrt{2}}{4}$'],
                correct: 1,
                explanation: 'הגובה $h = \\frac{a\\sqrt{3}}{2}$. שטח = $\\frac{a \\cdot \\frac{a\\sqrt{3}}{2}}{2} = \\frac{a^2\\sqrt{3}}{4}$.'
            },
            {
                q: 'במשולש שווה-שוקיים, זווית הראש = $40°$. מהי זווית הבסיס?',
                options: ['$40°$', '$70°$', '$140°$', '$60°$'],
                correct: 1,
                explanation: '$\\frac{180° - 40°}{2} = \\frac{140°}{2} = 70°$'
            },
            {
                q: 'במשולש ישר-זווית עם ניצבים 6 ו-8, מהו שטח המשולש?',
                options: ['$48$', '$14$', '$24$', '$10$'],
                correct: 2,
                explanation: 'הניצבים הם גם הבסיס והגובה: $S = \\frac{6 \\cdot 8}{2} = 24$.'
            }
        ]
    },
    {
        id: 23,
        category: 'geometry',
        title: 'דמיון משולשים',
        desc: 'תנאי דמיון ויחסי צלעות',
        theory: `
<h3>משולשים דומים</h3>
<p>שני משולשים נקראים דומים אם הזוויות שלהם שוות. אז הצלעות ביחס קבוע.</p>

<h3>תנאי דמיון</h3>
<p>• <strong>ז.ז.</strong> — שתי זוויות שוות (מספיק!)</p>
<p>• <strong>צ.צ.צ.</strong> — שלוש צלעות ביחס קבוע</p>
<p>• <strong>צ.ז.צ.</strong> — שתי צלעות ביחס קבוע וזווית ביניהן שווה</p>

<h3>יחס דמיון</h3>
<p>אם יחס הדמיון הוא $k$:</p>
<div class="formula-box">$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2} = k$</div>
<div class="formula-box">$\\frac{S_1}{S_2} = k^2 \\quad \\text{(יחס שטחים = ריבוע יחס הדמיון)}$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>משולש A עם צלעות 3, 4, 5 דומה למשולש B עם צלע 6 (מקבילה ל-3).</p>
<p>יחס דמיון: $k = \\frac{6}{3} = 2$. צלעות B: $6, 8, 10$.</p>
</div>`,
        questions: [
            {
                q: 'אם שני משולשים דומים ביחס $k=3$, מהו יחס השטחים?',
                options: ['$3$', '$6$', '$9$', '$27$'],
                correct: 2,
                explanation: 'יחס שטחים = $k^2 = 3^2 = 9$.'
            },
            {
                q: 'איזה תנאי מספיק להוכחת דמיון?',
                options: ['צלע שווה', 'שתי זוויות שוות', 'צלע וזווית שוות', 'היקף שווה'],
                correct: 1,
                explanation: 'תנאי ז.ז. — שתי זוויות שוות מספיקות (השלישית מתחייבת כי הסכום 180°).'
            },
            {
                q: 'משולשים דומים ביחס $k=2$. אם צלע במשולש הקטן = 5, מהי הצלע המתאימה בגדול?',
                options: ['$7$', '$10$', '$25$', '$2.5$'],
                correct: 1,
                explanation: '$5 \\cdot 2 = 10$'
            },
            {
                q: 'שני משולשים שווי-צלעות הם תמיד:',
                options: ['חופפים', 'דומים', 'ישרי-זווית', 'שווי-שוקיים'],
                correct: 1,
                explanation: 'לשניהם אותן זוויות (60°, 60°, 60°), לכן דומים לפי ז.ז.'
            },
            {
                q: 'אם שטח משולש קטן = 4 ויחס הדמיון $k=3$, מהו שטח הגדול?',
                options: ['$12$', '$16$', '$36$', '$64$'],
                correct: 2,
                explanation: '$S_2 = S_1 \\cdot k^2 = 4 \\cdot 9 = 36$'
            }
        ]
    },
    {
        id: 24,
        category: 'geometry',
        title: 'מרובעים מיוחדים',
        desc: 'מקבילית, מלבן, מעוין, ריבוע וטרפז',
        theory: `
<h3>מקבילית</h3>
<p>מרובע שבו כל זוג צלעות נגדיות מקבילות ושוות.</p>
<div class="formula-box">$S = a \\cdot h$</div>

<h3>מלבן</h3>
<p>מקבילית שכל זוויותיה 90°. אלכסוניו שווים.</p>
<div class="formula-box">$S = a \\cdot b, \\quad d = \\sqrt{a^2+b^2}$</div>

<h3>מעוין</h3>
<p>מקבילית שכל צלעותיה שוות. אלכסוניו מאונכים.</p>
<div class="formula-box">$S = \\frac{d_1 \\cdot d_2}{2}$</div>

<h3>ריבוע</h3>
<p>גם מלבן וגם מעוין. צלעות שוות וזוויות 90°.</p>
<div class="formula-box">$S = a^2, \\quad d = a\\sqrt{2}$</div>

<h3>טרפז</h3>
<div class="formula-box">$S = \\frac{(a+b) \\cdot h}{2}$</div>
<p>כאשר $a, b$ הבסיסים ו-$h$ הגובה.</p>`,
        questions: [
            {
                q: 'מהו שטח מקבילית עם בסיס 10 וגובה 4?',
                options: ['$14$', '$20$', '$40$', '$80$'],
                correct: 2,
                explanation: '$S = 10 \\cdot 4 = 40$'
            },
            {
                q: 'מהו אלכסון ריבוע עם צלע 5?',
                options: ['$10$', '$5\\sqrt{2}$', '$5\\sqrt{3}$', '$25$'],
                correct: 1,
                explanation: '$d = a\\sqrt{2} = 5\\sqrt{2}$'
            },
            {
                q: 'שטח מעוין עם אלכסונים 6 ו-8:',
                options: ['$48$', '$14$', '$24$', '$7$'],
                correct: 2,
                explanation: '$S = \\frac{6 \\cdot 8}{2} = 24$'
            },
            {
                q: 'שטח טרפז עם בסיסים 5 ו-9 וגובה 4:',
                options: ['$28$', '$56$', '$36$', '$20$'],
                correct: 0,
                explanation: '$S = \\frac{(5+9) \\cdot 4}{2} = \\frac{56}{2} = 28$'
            },
            {
                q: 'כל ריבוע הוא גם:',
                options: ['טרפז בלבד', 'מעוין בלבד', 'מלבן ומעוין', 'משולש'],
                correct: 2,
                explanation: 'ריבוע = מלבן (זוויות 90°) + מעוין (צלעות שוות).'
            }
        ]
    },
    {
        id: 25,
        category: 'geometry',
        title: 'מעגל',
        desc: 'היקף, שטח, זוויות ומיתרים',
        theory: `
<h3>הגדרות</h3>
<p>$r$ — רדיוס, $d = 2r$ — קוטר</p>

<h3>היקף ושטח</h3>
<div class="formula-box">$C = 2\\pi r = \\pi d$</div>
<div class="formula-box">$S = \\pi r^2$</div>

<h3>זווית מרכזית</h3>
<p>זווית שקודקודה במרכז — שווה לקשת שמולה.</p>

<h3>זווית היקפית</h3>
<p>זווית שקודקודה על המעגל — שווה לחצי הקשת שמולה.</p>
<div class="formula-box">$\\alpha_{\\text{היקפית}} = \\frac{1}{2} \\alpha_{\\text{מרכזית}}$</div>

<h3>אורך קשת ושטח גזרה</h3>
<div class="formula-box">$L = \\frac{\\alpha}{360°} \\cdot 2\\pi r$</div>
<div class="formula-box">$S_{\\text{גזרה}} = \\frac{\\alpha}{360°} \\cdot \\pi r^2$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>מעגל עם $r=5$: היקף $= 10\\pi \\approx 31.4$, שטח $= 25\\pi \\approx 78.5$</p>
</div>`,
        questions: [
            {
                q: 'מהו שטח מעגל עם רדיוס 3?',
                options: ['$6\\pi$', '$9\\pi$', '$3\\pi$', '$12\\pi$'],
                correct: 1,
                explanation: '$S = \\pi r^2 = \\pi \\cdot 9 = 9\\pi$'
            },
            {
                q: 'מהו היקף מעגל עם קוטר 10?',
                options: ['$5\\pi$', '$10\\pi$', '$20\\pi$', '$100\\pi$'],
                correct: 1,
                explanation: '$C = \\pi d = 10\\pi$'
            },
            {
                q: 'זווית מרכזית = $120°$. מהי הזווית ההיקפית הנשענת על אותה קשת?',
                options: ['$120°$', '$60°$', '$240°$', '$30°$'],
                correct: 1,
                explanation: 'זווית היקפית = חצי מהמרכזית = $60°$.'
            },
            {
                q: 'מהו שטח גזרה עם $r=6$ וזווית $90°$?',
                options: ['$36\\pi$', '$9\\pi$', '$18\\pi$', '$6\\pi$'],
                correct: 1,
                explanation: '$S = \\frac{90}{360} \\cdot \\pi \\cdot 36 = \\frac{1}{4} \\cdot 36\\pi = 9\\pi$'
            },
            {
                q: 'אם היקף מעגל = $20\\pi$, מהו הרדיוס?',
                options: ['$5$', '$10$', '$20$', '$\\frac{20}{\\pi}$'],
                correct: 1,
                explanation: '$2\\pi r = 20\\pi \\Rightarrow r = 10$'
            }
        ]
    },
    {
        id: 26,
        category: 'geometry',
        title: 'גאומטריה אנליטית — נקודות וישרים',
        desc: 'מרחק, אמצע קטע ומשוואת ישר',
        theory: `
<h3>מרחק בין שתי נקודות</h3>
<div class="formula-box">$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$</div>

<h3>אמצע קטע</h3>
<div class="formula-box">$M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$</div>

<h3>משוואת ישר</h3>
<div class="formula-box">$y = mx + b$</div>
<p>$m$ — שיפוע, $b$ — חיתוך עם ציר $y$.</p>

<h3>ישרים מקבילים וניצבים</h3>
<div class="formula-box">$\\text{מקבילים: } m_1 = m_2$</div>
<div class="formula-box">$\\text{ניצבים: } m_1 \\cdot m_2 = -1$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>מרחק בין $(1,2)$ ו-$(4,6)$:</p>
<p>$d = \\sqrt{9+16} = \\sqrt{25} = 5$</p>
</div>`,
        questions: [
            {
                q: 'מהו המרחק בין $(0,0)$ ו-$(3,4)$?',
                options: ['$7$', '$5$', '$\\sqrt{7}$', '$25$'],
                correct: 1,
                explanation: '$d = \\sqrt{9+16} = \\sqrt{25} = 5$'
            },
            {
                q: 'מהו אמצע הקטע בין $(2,6)$ ו-$(8,10)$?',
                options: ['$(5, 8)$', '$(10, 16)$', '$(6, 4)$', '$(3, 2)$'],
                correct: 0,
                explanation: '$M = (\\frac{2+8}{2}, \\frac{6+10}{2}) = (5, 8)$'
            },
            {
                q: 'ישר עם שיפוע 2 ניצב לישר עם שיפוע:',
                options: ['$2$', '$-2$', '$-\\frac{1}{2}$', '$\\frac{1}{2}$'],
                correct: 2,
                explanation: '$m_1 \\cdot m_2 = -1 \\Rightarrow 2 \\cdot m_2 = -1 \\Rightarrow m_2 = -\\frac{1}{2}$'
            },
            {
                q: 'שני ישרים עם שיפוע $m = 3$ הם:',
                options: ['ניצבים', 'מקבילים', 'חופפים', 'אי אפשר לדעת'],
                correct: 1,
                explanation: 'שיפועים שווים = ישרים מקבילים (אלא אם חופפים).'
            },
            {
                q: 'מהו המרחק בין $(1,1)$ ו-$(1,5)$?',
                options: ['$6$', '$2$', '$4$', '$0$'],
                correct: 2,
                explanation: '$d = \\sqrt{0^2 + 4^2} = 4$. נקודות על אותו ציר $x$ אנכי.'
            }
        ]
    },
    {
        id: 27,
        category: 'geometry',
        title: 'חפיפת משולשים',
        desc: 'תנאי חפיפה ושימושים',
        theory: `
<h3>משולשים חופפים</h3>
<p>שני משולשים חופפים אם הם שווים בדיוק — אותן צלעות ואותן זוויות.</p>

<h3>תנאי חפיפה</h3>
<p>• <strong>צ.צ.צ.</strong> — שלוש צלעות שוות</p>
<p>• <strong>צ.ז.צ.</strong> — שתי צלעות וזווית שביניהן שוות</p>
<p>• <strong>ז.צ.ז.</strong> — שתי זוויות וצלע שביניהן שוות</p>
<p>• <strong>צ.צ.ז.</strong> (מול הצלע הגדולה) — שתי צלעות וזווית מול הגדולה</p>

<div class="tip-box">
<div class="tip-title">שימו לב</div>
<p>חפיפה ≠ דמיון. בחפיפה הגודל שווה, בדמיון רק הצורה.</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>אם $AB = DE, BC = EF, \\angle B = \\angle E$, אז $\\triangle ABC \\cong \\triangle DEF$ לפי צ.ז.צ.</p>
</div>`,
        questions: [
            {
                q: 'איזה תנאי אינו תנאי חפיפה?',
                options: ['צ.צ.צ.', 'ז.ז.ז.', 'צ.ז.צ.', 'ז.צ.ז.'],
                correct: 1,
                explanation: 'ז.ז.ז. הוא תנאי דמיון, לא חפיפה. משולשים עם אותן זוויות יכולים להיות בגדלים שונים.'
            },
            {
                q: 'כמה תנאים חייבים להתקיים כדי להוכיח חפיפה?',
                options: ['$1$', '$2$', '$3$ (תנאי אחד מ-4 האפשרויות)', '$6$'],
                correct: 2,
                explanation: 'צריך 3 נתונים תואמים (צלעות/זוויות) במבנה מתאים.'
            },
            {
                q: 'אם שני משולשים חופפים, אז:',
                options: ['הם בהכרח דומים', 'הם בהכרח שונים', 'אין קשר לדמיון', 'רק לפעמים דומים'],
                correct: 0,
                explanation: 'חפיפה ⊂ דמיון. כל שני משולשים חופפים הם בהכרח גם דומים (ביחס $k=1$).'
            },
            {
                q: 'שני משולשים ישרי-זווית עם ניצב = 3 ויתר = 5. האם הם חופפים?',
                options: ['כן, לפי צ.צ.ז.', 'לא', 'אי אפשר לדעת', 'כן, לפי ז.ז.ז.'],
                correct: 0,
                explanation: 'שני משולשים ישרי-זווית עם ניצב ויתר שווים חופפים.'
            },
            {
                q: 'במשולשים חופפים, שטחם:',
                options: ['שווה', 'ביחס $k$', 'ביחס $k^2$', 'אי אפשר לדעת'],
                correct: 0,
                explanation: 'חפיפה = אותו גודל ואותה צורה, לכן שטח שווה.'
            }
        ]
    },
    {
        id: 28,
        category: 'geometry',
        title: 'נפח וגופים במרחב',
        desc: 'תיבה, גליל, חרוט, כדור',
        theory: `
<h3>תיבה (מקבילון)</h3>
<div class="formula-box">$V = a \\cdot b \\cdot c$</div>
<div class="formula-box">$S = 2(ab + ac + bc)$</div>

<h3>גליל</h3>
<div class="formula-box">$V = \\pi r^2 h$</div>
<div class="formula-box">$S = 2\\pi r^2 + 2\\pi r h$</div>

<h3>חרוט</h3>
<div class="formula-box">$V = \\frac{1}{3}\\pi r^2 h$</div>

<h3>כדור</h3>
<div class="formula-box">$V = \\frac{4}{3}\\pi r^3$</div>
<div class="formula-box">$S = 4\\pi r^2$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>נפח גליל עם $r=3, h=10$:</p>
<p>$V = \\pi \\cdot 9 \\cdot 10 = 90\\pi$</p>
</div>`,
        questions: [
            {
                q: 'מהו נפח תיבה $3 \\times 4 \\times 5$?',
                options: ['$12$', '$60$', '$47$', '$94$'],
                correct: 1,
                explanation: '$V = 3 \\cdot 4 \\cdot 5 = 60$'
            },
            {
                q: 'מהו נפח כדור עם $r = 3$?',
                options: ['$36\\pi$', '$27\\pi$', '$108\\pi$', '$\\frac{108\\pi}{3}$'],
                correct: 0,
                explanation: '$V = \\frac{4}{3}\\pi (27) = 36\\pi$'
            },
            {
                q: 'מהו נפח גליל עם $r=2, h=7$?',
                options: ['$14\\pi$', '$28\\pi$', '$56\\pi$', '$7\\pi$'],
                correct: 1,
                explanation: '$V = \\pi \\cdot 4 \\cdot 7 = 28\\pi$'
            },
            {
                q: 'נפח חרוט ביחס לגליל עם אותם $r$ ו-$h$:',
                options: ['שווה', 'חצי', 'שליש', 'רבע'],
                correct: 2,
                explanation: '$V_{\\text{חרוט}} = \\frac{1}{3}V_{\\text{גליל}}$'
            },
            {
                q: 'שטח פנים של כדור עם $r = 5$:',
                options: ['$25\\pi$', '$50\\pi$', '$100\\pi$', '$500\\pi$'],
                correct: 2,
                explanation: '$S = 4\\pi r^2 = 4\\pi \\cdot 25 = 100\\pi$'
            }
        ]
    },

    // ===== TRIGONOMETRY (29-34) =====
    {
        id: 29,
        category: 'trigonometry',
        title: 'יחסות טריגונומטריות',
        desc: 'סינוס, קוסינוס וטנגנס במשולש ישר-זווית',
        theory: `
<h3>מהי טריגונומטריה?</h3>
<p>טריגונומטריה היא ענף במתמטיקה שעוסק ב<strong>קשר בין זוויות לצלעות</strong> במשולש. בעזרת טריגונומטריה אפשר לחשב אורך צלע או גודל זווית שלא ידועים, על סמך מידע אחר שיש לנו על המשולש.</p>
<p>שלושת היחסים הבסיסיים הם: <strong>סינוס</strong> (sin), <strong>קוסינוס</strong> (cos) ו<strong>טנגנס</strong> (tan).</p>

<h3>יחסות טריגונומטריות במשולש ישר-זווית</h3>
<p>עבור זווית חדה $\\alpha$:</p>
<div class="formula-box">$\\sin \\alpha = \\frac{\\text{ניצב נגדי}}{\\text{יתר}}$</div>
<div class="formula-box">$\\cos \\alpha = \\frac{\\text{ניצב סמוך}}{\\text{יתר}}$</div>
<div class="formula-box">$\\tan \\alpha = \\frac{\\text{ניצב נגדי}}{\\text{ניצב סמוך}} = \\frac{\\sin \\alpha}{\\cos \\alpha}$</div>

<h3>ערכים מיוחדים</h3>
<p>$\\sin 30° = \\frac{1}{2}, \\quad \\cos 30° = \\frac{\\sqrt{3}}{2}, \\quad \\tan 30° = \\frac{1}{\\sqrt{3}}$</p>
<p>$\\sin 45° = \\frac{\\sqrt{2}}{2}, \\quad \\cos 45° = \\frac{\\sqrt{2}}{2}, \\quad \\tan 45° = 1$</p>
<p>$\\sin 60° = \\frac{\\sqrt{3}}{2}, \\quad \\cos 60° = \\frac{1}{2}, \\quad \\tan 60° = \\sqrt{3}$</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>משולש ישר-זווית עם ניצב נגדי 3 ויתר 5:</p>
<p>$\\sin \\alpha = \\frac{3}{5} = 0.6$</p>
</div>`,
        questions: [
            {
                q: 'מהו $\\sin 30°$?',
                options: ['$\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$1$'],
                correct: 1,
                explanation: '$\\sin 30° = \\frac{1}{2}$ — ערך מיוחד שחשוב לזכור.'
            },
            {
                q: 'מהו $\\tan 45°$?',
                options: ['$0$', '$\\frac{1}{2}$', '$1$', '$\\sqrt{2}$'],
                correct: 2,
                explanation: '$\\tan 45° = \\frac{\\sin 45°}{\\cos 45°} = 1$'
            },
            {
                q: 'במשולש ישר-זווית, ניצב נגדי = 5, יתר = 13. מהו $\\sin \\alpha$?',
                options: ['$\\frac{5}{13}$', '$\\frac{12}{13}$', '$\\frac{5}{12}$', '$\\frac{13}{5}$'],
                correct: 0,
                explanation: '$\\sin \\alpha = \\frac{\\text{ניצב נגדי}}{\\text{יתר}} = \\frac{5}{13}$'
            },
            {
                q: 'אם $\\cos \\alpha = 0.8$, מהו $\\sin \\alpha$? (משולש ישר-זווית)',
                options: ['$0.2$', '$0.6$', '$0.4$', '$0.8$'],
                correct: 1,
                explanation: '$\\sin^2 \\alpha + \\cos^2 \\alpha = 1 \\Rightarrow \\sin^2 \\alpha = 1 - 0.64 = 0.36 \\Rightarrow \\sin \\alpha = 0.6$'
            },
            {
                q: 'מהו $\\cos 60°$?',
                options: ['$\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$1$'],
                correct: 1,
                explanation: '$\\cos 60° = \\frac{1}{2}$'
            }
        ]
    },
    {
        id: 30,
        category: 'trigonometry',
        title: 'זהויות טריגונומטריות',
        desc: 'זהויות בסיסיות וקשרים',
        theory: `
<h3>הזהות הפיתגורית</h3>
<div class="formula-box">$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$</div>

<h3>קשר בין סינוס וקוסינוס</h3>
<div class="formula-box">$\\sin(90° - \\alpha) = \\cos \\alpha$</div>
<div class="formula-box">$\\cos(90° - \\alpha) = \\sin \\alpha$</div>

<h3>טנגנס</h3>
<div class="formula-box">$\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}$</div>

<h3>זהות נוספת</h3>
<div class="formula-box">$1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\alpha}$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>אם $\\sin \\alpha = \\frac{3}{5}$, חשבו $\\cos \\alpha$:</p>
<p>$\\cos^2 \\alpha = 1 - \\frac{9}{25} = \\frac{16}{25}$</p>
<p>$\\cos \\alpha = \\frac{4}{5}$ (בהנחה שהזווית חדה)</p>
</div>`,
        questions: [
            {
                q: 'אם $\\sin \\alpha = 0.6$, מהו $\\cos^2 \\alpha$?',
                options: ['$0.4$', '$0.64$', '$0.16$', '$0.36$'],
                correct: 1,
                explanation: '$\\cos^2 \\alpha = 1 - \\sin^2 \\alpha = 1 - 0.36 = 0.64$'
            },
            {
                q: '$\\sin^2 30° + \\cos^2 30° = ?$',
                options: ['$0$', '$\\frac{1}{2}$', '$1$', '$\\sqrt{3}$'],
                correct: 2,
                explanation: 'לפי הזהות הפיתגורית: $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$ לכל $\\alpha$.'
            },
            {
                q: '$\\sin 20°$ שווה ל:',
                options: ['$\\cos 20°$', '$\\cos 70°$', '$\\sin 70°$', '$\\tan 20°$'],
                correct: 1,
                explanation: '$\\sin 20° = \\cos(90° - 20°) = \\cos 70°$'
            },
            {
                q: 'אם $\\sin \\alpha = \\frac{5}{13}$ ו-$\\alpha$ חדה, מהו $\\tan \\alpha$?',
                options: ['$\\frac{5}{12}$', '$\\frac{12}{5}$', '$\\frac{5}{13}$', '$\\frac{12}{13}$'],
                correct: 0,
                explanation: '$\\cos \\alpha = \\frac{12}{13}$ (מהזהות). $\\tan \\alpha = \\frac{5/13}{12/13} = \\frac{5}{12}$.'
            },
            {
                q: 'מהו $\\sin^2 45°$?',
                options: ['$\\frac{1}{4}$', '$\\frac{1}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$1$'],
                correct: 1,
                explanation: '$\\sin 45° = \\frac{\\sqrt{2}}{2}$, לכן $\\sin^2 45° = \\frac{2}{4} = \\frac{1}{2}$.'
            }
        ]
    },
    {
        id: 31,
        category: 'trigonometry',
        title: 'משפט הסינוסים',
        desc: 'קשר בין צלעות וזוויות בכל משולש',
        theory: `
<h3>משפט הסינוסים</h3>
<div class="formula-box">$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$</div>
<p>כאשר $R$ הוא רדיוס המעגל החוסם.</p>

<h3>מתי משתמשים?</h3>
<p>• כשנתונות שתי זוויות וצלע אחת</p>
<p>• כשנתונות שתי צלעות וזווית מול אחת מהן</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>במשולש: $A = 30°, B = 45°, a = 5$. מצאו $b$:</p>
<p>$\\frac{5}{\\sin 30°} = \\frac{b}{\\sin 45°}$</p>
<p>$\\frac{5}{0.5} = \\frac{b}{\\frac{\\sqrt{2}}{2}}$</p>
<p>$b = 10 \\cdot \\frac{\\sqrt{2}}{2} = 5\\sqrt{2}$</p>
</div>`,
        questions: [
            {
                q: 'במשולש, $a = 6, A = 30°, B = 90°$. מהו $b$?',
                options: ['$6$', '$12$', '$3$', '$6\\sqrt{3}$'],
                correct: 1,
                explanation: '$\\frac{6}{\\sin 30°} = \\frac{b}{\\sin 90°} \\Rightarrow \\frac{6}{0.5} = \\frac{b}{1} \\Rightarrow b = 12$'
            },
            {
                q: 'משפט הסינוסים קושר:',
                options: ['צלעות בלבד', 'זוויות בלבד', 'צלעות לזוויות שמולן', 'שטחים'],
                correct: 2,
                explanation: 'כל צלע חלקי הסינוס של הזווית שמולה נותן ערך קבוע.'
            },
            {
                q: 'ב-$\\frac{a}{\\sin A} = 2R$, $R$ הוא:',
                options: ['רדיוס המעגל החסום', 'רדיוס המעגל החוסם', 'שטח המשולש', 'חצי ההיקף'],
                correct: 1,
                explanation: '$R$ הוא רדיוס המעגל החוסם (העובר דרך שלושת הקודקודים).'
            },
            {
                q: 'במשולש $A=60°, B=60°, a=10$. מהו $b$?',
                options: ['$5$', '$10$', '$20$', '$10\\sqrt{3}$'],
                correct: 1,
                explanation: '$A = B$ לכן $a = b = 10$ (משולש שווה-שוקיים).'
            },
            {
                q: 'מתי כדאי להשתמש במשפט הסינוסים?',
                options: ['כשנתונות 3 צלעות', 'כשנתונות 2 צלעות וזווית ביניהן', 'כשנתונות 2 זוויות וצלע', 'תמיד'],
                correct: 2,
                explanation: 'משפט הסינוסים שימושי ביותר כשידועות 2 זוויות וצלע.'
            }
        ]
    },
    {
        id: 32,
        category: 'trigonometry',
        title: 'משפט הקוסינוסים',
        desc: 'הכללה של משפט פיתגורס',
        theory: `
<h3>משפט הקוסינוסים</h3>
<div class="formula-box">$c^2 = a^2 + b^2 - 2ab\\cos C$</div>
<p>זהו הכללה של משפט פיתגורס (כש-$C=90°$, $\\cos C = 0$).</p>

<h3>מתי משתמשים?</h3>
<p>• כשנתונות שתי צלעות והזווית ביניהן — מוצאים את הצלע השלישית</p>
<p>• כשנתונות שלוש צלעות — מוצאים זווית</p>

<h3>מציאת זווית</h3>
<div class="formula-box">$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$a=5, b=7, C=60°$. מצאו $c$:</p>
<p>$c^2 = 25 + 49 - 2(5)(7)(0.5) = 74 - 35 = 39$</p>
<p>$c = \\sqrt{39} \\approx 6.24$</p>
</div>`,
        questions: [
            {
                q: '$a=3, b=4, C=90°$. מהו $c$?',
                options: ['$7$', '$5$', '$\\sqrt{7}$', '$25$'],
                correct: 1,
                explanation: '$c^2 = 9+16-0 = 25 \\Rightarrow c=5$. כש-$C=90°$ זה פיתגורס!'
            },
            {
                q: '$a=4, b=4, C=60°$. מהו $c$?',
                options: ['$8$', '$4$', '$4\\sqrt{3}$', '$\\sqrt{48}$'],
                correct: 1,
                explanation: '$c^2 = 16+16-2(16)(0.5) = 32-16 = 16 \\Rightarrow c = 4$. משולש שווה-צלעות!'
            },
            {
                q: 'משפט הקוסינוסים הוא הכללה של:',
                options: ['משפט הסינוסים', 'משפט פיתגורס', 'משפט תלס', 'נוסחאות וייטה'],
                correct: 1,
                explanation: 'כש-$C=90°$: $\\cos 90° = 0$, ונותר $c^2 = a^2+b^2$ — פיתגורס.'
            },
            {
                q: 'צלעות: $a=5, b=6, c=7$. מהו $\\cos C$?',
                options: ['$\\frac{1}{5}$', '$\\frac{12}{60}$', '$\\frac{1}{7}$', '$\\frac{2}{10}$'],
                correct: 0,
                explanation: '$\\cos C = \\frac{25+36-49}{60} = \\frac{12}{60} = \\frac{1}{5}$'
            },
            {
                q: 'אם $\\cos C < 0$, אז הזווית $C$:',
                options: ['חדה', 'ישרה', 'קהה', 'שטוחה'],
                correct: 2,
                explanation: '$\\cos C < 0$ כשהזווית גדולה מ-$90°$, כלומר קהה.'
            }
        ]
    },
    {
        id: 33,
        category: 'trigonometry',
        title: 'מעגל היחידה',
        desc: 'הגדרת סינוס וקוסינוס על מעגל היחידה',
        theory: `
<h3>מעגל היחידה</h3>
<p>מעגל עם מרכז בראשית ורדיוס 1. נקודה $(x,y)$ על המעגל מקיימת:</p>
<div class="formula-box">$x^2 + y^2 = 1$</div>

<h3>הגדרת סינוס וקוסינוס</h3>
<p>עבור זווית $\\alpha$ (מצוירת מציר $x$ החיובי נגד כיוון השעון):</p>
<div class="formula-box">$\\cos \\alpha = x, \\quad \\sin \\alpha = y$</div>

<h3>סימני הפונקציות לפי רביעים</h3>
<p>רביע I ($0°$-$90°$): sin ⊕, cos ⊕</p>
<p>רביע II ($90°$-$180°$): sin ⊕, cos ⊖</p>
<p>רביע III ($180°$-$270°$): sin ⊖, cos ⊖</p>
<p>רביע IV ($270°$-$360°$): sin ⊖, cos ⊕</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$\\sin 150° = \\sin(180°-30°) = \\sin 30° = \\frac{1}{2}$</p>
<p>$\\cos 150° = -\\cos 30° = -\\frac{\\sqrt{3}}{2}$</p>
</div>`,
        questions: [
            {
                q: 'מהו $\\sin 90°$?',
                options: ['$0$', '$1$', '$-1$', 'לא מוגדר'],
                correct: 1,
                explanation: 'ב-$90°$ הנקודה על מעגל היחידה היא $(0,1)$, לכן $\\sin 90° = 1$.'
            },
            {
                q: 'מהו $\\cos 180°$?',
                options: ['$0$', '$1$', '$-1$', 'לא מוגדר'],
                correct: 2,
                explanation: 'ב-$180°$ הנקודה היא $(-1,0)$, לכן $\\cos 180° = -1$.'
            },
            {
                q: 'באיזה רביע $\\sin \\alpha > 0$ ו-$\\cos \\alpha < 0$?',
                options: ['I', 'II', 'III', 'IV'],
                correct: 1,
                explanation: 'ברביע II: $x < 0$ (cos שלילי) ו-$y > 0$ (sin חיובי).'
            },
            {
                q: 'מהו $\\sin 0°$?',
                options: ['$0$', '$1$', '$-1$', '$\\frac{1}{2}$'],
                correct: 0,
                explanation: 'ב-$0°$ הנקודה היא $(1,0)$, לכן $\\sin 0° = 0$.'
            },
            {
                q: 'מהו $\\cos 270°$?',
                options: ['$0$', '$1$', '$-1$', 'לא מוגדר'],
                correct: 0,
                explanation: 'ב-$270°$ הנקודה היא $(0,-1)$, לכן $\\cos 270° = 0$.'
            }
        ]
    },
    {
        id: 34,
        category: 'trigonometry',
        title: 'שטח משולש בעזרת טריגונומטריה',
        desc: 'חישוב שטח עם סינוס',
        theory: `
<h3>נוסחת שטח עם סינוס</h3>
<div class="formula-box">$S = \\frac{1}{2}ab\\sin C$</div>
<p>כאשר $a,b$ שתי צלעות ו-$C$ הזווית שביניהן.</p>

<h3>מתי משתמשים?</h3>
<p>כשנתונות שתי צלעות והזווית שביניהן — אין צורך לחשב גובה!</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$a=8, b=6, C=30°$:</p>
<p>$S = \\frac{1}{2}(8)(6)\\sin 30° = 24 \\cdot 0.5 = 12$</p>
</div>

<div class="tip-box">
<div class="tip-title">שימו לב</div>
<p>השטח מקסימלי כשהזווית 90° (כי $\\sin 90° = 1$).</p>
</div>`,
        questions: [
            {
                q: 'מהו שטח משולש עם צלעות 10 ו-6 וזווית $30°$ ביניהן?',
                options: ['$30$', '$15$', '$60$', '$7.5$'],
                correct: 1,
                explanation: '$S = \\frac{1}{2}(10)(6)\\sin 30° = 30 \\cdot 0.5 = 15$'
            },
            {
                q: 'מהו שטח משולש עם צלעות 5 ו-8 וזווית $90°$ ביניהן?',
                options: ['$40$', '$20$', '$13$', '$10$'],
                correct: 1,
                explanation: '$S = \\frac{1}{2}(5)(8)\\sin 90° = 20 \\cdot 1 = 20$'
            },
            {
                q: 'באיזו זווית השטח מקסימלי (עבור צלעות קבועות)?',
                options: ['$30°$', '$60°$', '$45°$', '$90°$'],
                correct: 3,
                explanation: '$\\sin 90° = 1$ הוא הערך המקסימלי, לכן השטח מקסימלי.'
            },
            {
                q: 'שטח משולש שווה-צלעות עם צלע $a$ (בעזרת הנוסחה):',
                options: ['$\\frac{a^2}{4}$', '$\\frac{a^2\\sqrt{3}}{4}$', '$\\frac{a^2}{2}$', '$a^2\\sin 60°$'],
                correct: 1,
                explanation: '$S = \\frac{1}{2}a^2 \\sin 60° = \\frac{1}{2}a^2 \\cdot \\frac{\\sqrt{3}}{2} = \\frac{a^2\\sqrt{3}}{4}$'
            },
            {
                q: 'אם $S=12, a=6, b=8$, מהו $\\sin C$?',
                options: ['$0.25$', '$0.5$', '$0.75$', '$1$'],
                correct: 1,
                explanation: '$12 = \\frac{1}{2}(6)(8)\\sin C \\Rightarrow 12 = 24\\sin C \\Rightarrow \\sin C = 0.5$'
            }
        ]
    },

    // ===== PROBABILITY & STATISTICS (35-38) =====
    {
        id: 35,
        category: 'probability',
        title: 'הסתברות בסיסית',
        desc: 'הגדרה, מרחב מדגם ומאורעות',
        theory: `
<h3>הגדרות</h3>
<p><strong>ניסוי מקרי</strong> — פעולה שתוצאתה אינה ידועה מראש</p>
<p><strong>מרחב מדגם</strong> $\\Omega$ — אוסף כל התוצאות האפשריות</p>
<p><strong>מאורע</strong> — תת-קבוצה של מרחב המדגם</p>

<h3>הסתברות</h3>
<div class="formula-box">$P(A) = \\frac{\\text{מספר התוצאות הרצויות}}{\\text{מספר כל התוצאות האפשריות}}$</div>

<h3>חוקים</h3>
<div class="formula-box">$0 \\leq P(A) \\leq 1$</div>
<div class="formula-box">$P(\\overline{A}) = 1 - P(A)$</div>
<div class="formula-box">$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>מטילים קובייה. מהי ההסתברות לקבל מספר זוגי?</p>
<p>תוצאות רצויות: {2, 4, 6} = 3 תוצאות</p>
<p>סה"כ: 6 תוצאות</p>
<p>$P = \\frac{3}{6} = \\frac{1}{2}$</p>
</div>`,
        questions: [
            {
                q: 'מטילים קובייה. מהי ההסתברות לקבל 3?',
                options: ['$\\frac{1}{3}$', '$\\frac{1}{6}$', '$\\frac{1}{2}$', '$\\frac{3}{6}$'],
                correct: 1,
                explanation: 'תוצאה אחת רצויה מתוך 6: $\\frac{1}{6}$.'
            },
            {
                q: 'שולפים קלף מחפיסה רגילה (52). מהי ההסתברות לשלוף אס?',
                options: ['$\\frac{1}{52}$', '$\\frac{1}{13}$', '$\\frac{4}{52}$', '$\\frac{1}{13}$ ו-$\\frac{4}{52}$ (שניהם)'],
                correct: 3,
                explanation: '4 אסים מתוך 52: $\\frac{4}{52} = \\frac{1}{13}$.'
            },
            {
                q: 'אם $P(A) = 0.7$, מהו $P(\\overline{A})$?',
                options: ['$0.7$', '$0.3$', '$-0.7$', '$1.3$'],
                correct: 1,
                explanation: '$P(\\overline{A}) = 1 - 0.7 = 0.3$'
            },
            {
                q: 'מטילים מטבע פעמיים. מהי ההסתברות ל-2 "עץ"?',
                options: ['$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{1}{4}$', '$1$'],
                correct: 2,
                explanation: 'מרחב מדגם: {עע, עפ, פע, פּפ}. תוצאה רצויה אחת: $\\frac{1}{4}$.'
            },
            {
                q: 'הסתברות לא יכולה להיות:',
                options: ['$0$', '$1$', '$0.5$', '$1.2$'],
                correct: 3,
                explanation: 'הסתברות תמיד בין 0 ל-1 (כולל). $1.2 > 1$ לכן לא אפשרי.'
            }
        ]
    },
    {
        id: 36,
        category: 'probability',
        title: 'הסתברות מותנית ובלתי תלויה',
        desc: 'מאורעות תלויים ובלתי תלויים',
        theory: `
<h3>הסתברות מותנית</h3>
<div class="formula-box">$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$</div>
<p>"ההסתברות ל-$A$ בהינתן ש-$B$ קרה"</p>

<h3>מאורעות בלתי תלויים</h3>
<p>$A$ ו-$B$ בלתי תלויים אם:</p>
<div class="formula-box">$P(A \\cap B) = P(A) \\cdot P(B)$</div>
<p>קרות מאורע אחד לא משפיעה על הסתברות השני.</p>

<h3>מאורעות תלויים</h3>
<div class="formula-box">$P(A \\cap B) = P(A) \\cdot P(B|A)$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>בשקית 3 כדורים אדומים ו-2 כחולים. שולפים 2 בלי החזרה.</p>
<p>$P(\\text{שניהם אדומים}) = \\frac{3}{5} \\cdot \\frac{2}{4} = \\frac{6}{20} = \\frac{3}{10}$</p>
</div>`,
        questions: [
            {
                q: 'מטילים קובייה ומטבע. מהי ההסתברות ל-6 ו"עץ"?',
                options: ['$\\frac{1}{12}$', '$\\frac{1}{6}$', '$\\frac{1}{2}$', '$\\frac{2}{6}$'],
                correct: 0,
                explanation: 'מאורעות בלתי תלויים: $\\frac{1}{6} \\cdot \\frac{1}{2} = \\frac{1}{12}$'
            },
            {
                q: 'שולפים 2 כדורים מ-4 אדומים ו-6 כחולים (בלי החזרה). $P$(שניהם אדומים)?',
                options: ['$\\frac{16}{100}$', '$\\frac{4}{15}$', '$\\frac{2}{15}$', '$\\frac{12}{90}$'],
                correct: 2,
                explanation: '$\\frac{4}{10} \\cdot \\frac{3}{9} = \\frac{12}{90} = \\frac{2}{15}$'
            },
            {
                q: 'אם $P(A)=0.5, P(B)=0.3, P(A \\cap B)=0.15$, האם $A,B$ בלתי תלויים?',
                options: ['כן', 'לא', 'אי אפשר לדעת', 'רק אם $P(A|B)=0.5$'],
                correct: 0,
                explanation: '$P(A) \\cdot P(B) = 0.15 = P(A \\cap B)$ ✓ — בלתי תלויים.'
            },
            {
                q: 'מהו $P(A|B)$ אם $P(A \\cap B) = 0.2$ ו-$P(B) = 0.4$?',
                options: ['$0.08$', '$0.5$', '$0.6$', '$2$'],
                correct: 1,
                explanation: '$P(A|B) = \\frac{0.2}{0.4} = 0.5$'
            },
            {
                q: 'הטלת קובייה והטלת מטבע הם מאורעות:',
                options: ['תלויים', 'בלתי תלויים', 'מנוגדים', 'זהים'],
                correct: 1,
                explanation: 'תוצאת הקובייה לא משפיעה על המטבע — בלתי תלויים.'
            }
        ]
    },
    {
        id: 37,
        category: 'probability',
        title: 'ממוצע, חציון ושכיח',
        desc: 'מדדי מרכז בסטטיסטיקה',
        theory: `
<h3>ממוצע</h3>
<div class="formula-box">$\\bar{x} = \\frac{x_1 + x_2 + \\cdots + x_n}{n}$</div>

<h3>חציון</h3>
<p>הערך האמצעי כשהנתונים מסודרים. אם יש מספר זוגי של נתונים — ממוצע שני האמצעיים.</p>

<h3>שכיח</h3>
<p>הערך שמופיע הכי הרבה פעמים.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>נתונים: $3, 5, 5, 7, 10$</p>
<p>ממוצע: $\\frac{30}{5} = 6$</p>
<p>חציון: $5$ (האמצעי)</p>
<p>שכיח: $5$ (מופיע פעמיים)</p>
</div>

<div class="tip-box">
<div class="tip-title">מתי משתמשים במה?</div>
<p>ממוצע — מדד כללי, רגיש לערכים קיצוניים. חציון — עמיד יותר. שכיח — מתאים לנתונים קטגוריים.</p>
</div>`,
        questions: [
            {
                q: 'מהו הממוצע של $4, 8, 6, 10, 2$?',
                options: ['$5$', '$6$', '$7$', '$8$'],
                correct: 1,
                explanation: '$\\frac{4+8+6+10+2}{5} = \\frac{30}{5} = 6$'
            },
            {
                q: 'מהו החציון של $1, 3, 7, 9, 11$?',
                options: ['$3$', '$7$', '$9$', '$6.2$'],
                correct: 1,
                explanation: 'הנתונים מסודרים, האמצעי (השלישי מ-5) הוא $7$.'
            },
            {
                q: 'מהו השכיח של $2, 3, 3, 5, 7, 7, 7, 8$?',
                options: ['$3$', '$5$', '$7$', '$5.25$'],
                correct: 2,
                explanation: '$7$ מופיע 3 פעמים — הכי הרבה.'
            },
            {
                q: 'מהו החציון של $2, 4, 6, 8$?',
                options: ['$4$', '$5$', '$6$', '$4.5$'],
                correct: 1,
                explanation: 'מספר זוגי: ממוצע שני האמצעיים = $\\frac{4+6}{2} = 5$.'
            },
            {
                q: 'ציוני תלמיד: $80, 90, 100, 70, 60$. אם מוסיפים ציון $100$:',
                options: ['הממוצע עולה', 'הממוצע יורד', 'הממוצע לא משתנה', 'אי אפשר לדעת'],
                correct: 0,
                explanation: 'ממוצע מקורי = 80. 100 > 80, לכן הוספתו מעלה את הממוצע.'
            }
        ]
    },
    {
        id: 38,
        category: 'probability',
        title: 'סטיית תקן ושונות',
        desc: 'מדדי פיזור',
        theory: `
<h3>מהן שונות וסטיית תקן?</h3>
<p>שונות וסטיית תקן מודדות <strong>כמה הנתונים מפוזרים</strong> סביב הממוצע. אם כל התלמידים קיבלו ציון דומה — השונות קטנה. אם יש פערים גדולים — השונות גדולה.</p>

<h3>נוסחת שונות</h3>
<p>מודדת כמה הנתונים מפוזרים סביב הממוצע:</p>
<div class="formula-box">$\\sigma^2 = \\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n}$</div>

<h3>סטיית תקן</h3>
<div class="formula-box">$\\sigma = \\sqrt{\\sigma^2}$</div>

<h3>פירוש</h3>
<p>• סטיית תקן קטנה = נתונים מרוכזים סביב הממוצע</p>
<p>• סטיית תקן גדולה = נתונים מפוזרים</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>נתונים: $2, 4, 6$. ממוצע = $4$.</p>
<p>$\\sigma^2 = \\frac{(2-4)^2+(4-4)^2+(6-4)^2}{3} = \\frac{4+0+4}{3} = \\frac{8}{3}$</p>
<p>$\\sigma = \\sqrt{\\frac{8}{3}} \\approx 1.63$</p>
</div>`,
        questions: [
            {
                q: 'לנתונים $5, 5, 5, 5$ סטיית התקן היא:',
                options: ['$5$', '$1$', '$0$', '$25$'],
                correct: 2,
                explanation: 'כל הנתונים שווים לממוצע, אין פיזור, $\\sigma = 0$.'
            },
            {
                q: 'מה קורה לסטיית התקן אם מוסיפים 10 לכל נתון?',
                options: ['עולה ב-10', 'לא משתנה', 'מוכפלת ב-10', 'יורדת'],
                correct: 1,
                explanation: 'הוספת קבוע מזיזה את כל הנתונים והממוצע באותו שיעור. הפיזור לא משתנה.'
            },
            {
                q: 'שונות היא:',
                options: ['שורש סטיית התקן', 'ריבוע סטיית התקן', 'ממוצע הנתונים', 'טווח הנתונים'],
                correct: 1,
                explanation: '$\\sigma^2$ = שונות, $\\sigma$ = סטיית תקן. שונות = ריבוע סטיית תקן.'
            },
            {
                q: 'סטיית תקן יכולה להיות:',
                options: ['שלילית', 'אפס', 'חיובית', 'אפס או חיובית'],
                correct: 3,
                explanation: 'סטיית תקן = שורש ריבועי, לכן תמיד $\\geq 0$. שווה ל-0 רק אם כל הנתונים שווים.'
            },
            {
                q: 'איזו קבוצה מפוזרת יותר? A: $\\{50,50,50\\}$, B: $\\{10,50,90\\}$',
                options: ['A', 'B', 'שוות', 'אי אפשר לדעת'],
                correct: 1,
                explanation: 'B מפוזרת הרבה יותר — הערכים רחוקים מהממוצע.'
            }
        ]
    },

    // ===== SEQUENCES (39-42) =====
    {
        id: 39,
        category: 'sequences',
        title: 'סדרה חשבונית',
        desc: 'סדרה עם הפרש קבוע',
        theory: `
<h3>מהי סדרה חשבונית?</h3>
<p>סדרה חשבונית היא רשימת מספרים שבה <strong>מוסיפים מספר קבוע</strong> כדי לעבור מאיבר לאיבר. למשל: $2, 5, 8, 11, 14, ...$ — כאן מוסיפים 3 בכל פעם. המספר הקבוע הזה נקרא <strong>הפרש</strong> ומסומן $d$.</p>

<h3>הגדרה פורמלית</h3>
<p>סדרה שבה ההפרש בין כל שני איברים עוקבים קבוע:</p>
<div class="formula-box">$d = a_{n+1} - a_n$</div>

<h3>האיבר הכללי</h3>
<div class="formula-box">$a_n = a_1 + (n-1)d$</div>

<h3>סכום $n$ איברים ראשונים</h3>
<div class="formula-box">$S_n = \\frac{n(a_1 + a_n)}{2} = \\frac{n(2a_1 + (n-1)d)}{2}$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>סדרה: $3, 7, 11, 15, ...$</p>
<p>$a_1 = 3, d = 4$</p>
<p>$a_{10} = 3 + 9 \\cdot 4 = 39$</p>
<p>$S_{10} = \\frac{10(3+39)}{2} = 210$</p>
</div>`,
        questions: [
            {
                q: 'בסדרה $2, 5, 8, 11, ...$, מהו $d$?',
                options: ['$2$', '$3$', '$5$', '$8$'],
                correct: 1,
                explanation: '$d = 5 - 2 = 3$'
            },
            {
                q: 'בסדרה $a_1=4, d=3$, מהו $a_5$?',
                options: ['$15$', '$16$', '$19$', '$12$'],
                correct: 1,
                explanation: '$a_5 = 4 + 4 \\cdot 3 = 4 + 12 = 16$'
            },
            {
                q: 'מהו סכום 100 המספרים הטבעיים הראשונים?',
                options: ['$5000$', '$5050$', '$10000$', '$10100$'],
                correct: 1,
                explanation: '$S_{100} = \\frac{100(1+100)}{2} = \\frac{10100}{2} = 5050$'
            },
            {
                q: 'בסדרה $a_1=10, d=-2$, מהו $a_6$?',
                options: ['$-2$', '$0$', '$2$', '$20$'],
                correct: 1,
                explanation: '$a_6 = 10 + 5(-2) = 10 - 10 = 0$'
            },
            {
                q: 'אם $a_3=12$ ו-$a_7=24$, מהו $d$?',
                options: ['$2$', '$3$', '$4$', '$6$'],
                correct: 1,
                explanation: '$a_7 - a_3 = 4d \\Rightarrow 24 - 12 = 4d \\Rightarrow d = 3$'
            }
        ]
    },
    {
        id: 40,
        category: 'sequences',
        title: 'סדרה הנדסית',
        desc: 'סדרה עם מנה קבועה',
        theory: `
<h3>מהי סדרה הנדסית?</h3>
<p>סדרה הנדסית היא רשימת מספרים שבה <strong>כופלים במספר קבוע</strong> כדי לעבור מאיבר לאיבר. למשל: $3, 6, 12, 24, 48, ...$ — כאן כופלים ב-2 בכל פעם. המספר הקבוע הזה נקרא <strong>מנה</strong> ומסומן $q$.</p>

<h3>הגדרה פורמלית</h3>
<p>סדרה שבה היחס בין כל שני איברים עוקבים קבוע:</p>
<div class="formula-box">$q = \\frac{a_{n+1}}{a_n}$</div>

<h3>האיבר הכללי</h3>
<div class="formula-box">$a_n = a_1 \\cdot q^{n-1}$</div>

<h3>סכום $n$ איברים ראשונים</h3>
<div class="formula-box">$S_n = a_1 \\cdot \\frac{q^n - 1}{q - 1} \\quad (q \\neq 1)$</div>

<h3>סכום סדרה אינסופית (כש-$|q|<1$)</h3>
<div class="formula-box">$S_\\infty = \\frac{a_1}{1-q}$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>סדרה: $2, 6, 18, 54, ...$</p>
<p>$a_1 = 2, q = 3$</p>
<p>$a_5 = 2 \\cdot 3^4 = 162$</p>
</div>`,
        questions: [
            {
                q: 'בסדרה $3, 6, 12, 24, ...$, מהו $q$?',
                options: ['$3$', '$2$', '$6$', '$4$'],
                correct: 1,
                explanation: '$q = \\frac{6}{3} = 2$'
            },
            {
                q: 'בסדרה $a_1=5, q=2$, מהו $a_4$?',
                options: ['$20$', '$40$', '$80$', '$11$'],
                correct: 1,
                explanation: '$a_4 = 5 \\cdot 2^3 = 5 \\cdot 8 = 40$'
            },
            {
                q: 'מהו סכום הסדרה האינסופית $1, \\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}, ...$?',
                options: ['$1$', '$2$', '$\\infty$', '$\\frac{3}{2}$'],
                correct: 1,
                explanation: '$S_\\infty = \\frac{1}{1-\\frac{1}{2}} = \\frac{1}{0.5} = 2$'
            },
            {
                q: 'בסדרה $a_1=81, q=\\frac{1}{3}$, מהו $a_5$?',
                options: ['$3$', '$1$', '$\\frac{1}{3}$', '$9$'],
                correct: 1,
                explanation: '$a_5 = 81 \\cdot (\\frac{1}{3})^4 = 81 \\cdot \\frac{1}{81} = 1$'
            },
            {
                q: 'מתי לסדרה הנדסית אינסופית יש סכום סופי?',
                options: ['תמיד', 'כש-$q > 1$', 'כש-$|q| < 1$', 'כש-$q = 1$'],
                correct: 2,
                explanation: 'רק כש-$|q| < 1$ האיברים הולכים וקטנים, והסכום מתכנס.'
            }
        ]
    },

    // ===== MORE ALGEBRA (41-44) =====
    {
        id: 41,
        category: 'algebra',
        title: 'פולינומים',
        desc: 'חיבור, כפל וחילוק פולינומים',
        theory: `
<h3>מהו פולינום?</h3>
<p>ביטוי מהצורה $a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0$.</p>
<p>דרגת הפולינום היא החזקה הגבוהה ביותר.</p>

<h3>חיבור וחיסור</h3>
<p>מחברים/מחסרים מקדמים של חזקות מתאימות:</p>
<div class="formula-box">$(3x^2 + 2x - 1) + (x^2 - 4x + 5) = 4x^2 - 2x + 4$</div>

<h3>כפל פולינומים</h3>
<p>כופלים כל איבר באיבר (חוק הפילוג):</p>
<div class="formula-box">$(x+2)(x+3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$</div>

<h3>חילוק פולינומים</h3>
<p>כמו חילוק ארוך של מספרים. אם $p(a)=0$ אז $(x-a)$ הוא גורם של $p(x)$.</p>

<h3>משפט הגורם</h3>
<div class="formula-box">$p(a) = 0 \\iff (x-a) \\text{ מחלק את } p(x)$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$p(x) = x^3 - 6x^2 + 11x - 6$. בדקו ש-$x=1$ שורש:</p>
<p>$p(1) = 1-6+11-6 = 0$ ✓ לכן $(x-1)$ גורם.</p>
</div>`,
        questions: [
            {
                q: 'מהי דרגת הפולינום $5x^3 - 2x + 7$?',
                options: ['$1$', '$2$', '$3$', '$5$'],
                correct: 2,
                explanation: 'החזקה הגבוהה ביותר היא $x^3$, לכן הדרגה 3.'
            },
            {
                q: 'חשבו: $(2x^2+3x) + (x^2-5x+1)$',
                options: ['$3x^2 - 2x + 1$', '$3x^2 + 8x + 1$', '$2x^4 - 2x + 1$', '$3x^2 - 2x - 1$'],
                correct: 0,
                explanation: '$2x^2+x^2 = 3x^2$, $3x-5x=-2x$, $0+1=1$.'
            },
            {
                q: 'חשבו: $(x+1)(x-1)$',
                options: ['$x^2 + 1$', '$x^2 - 1$', '$x^2 - 2$', '$2x$'],
                correct: 1,
                explanation: 'זהו הפרש ריבועים: $(x+1)(x-1) = x^2 - 1$.'
            },
            {
                q: 'אם $p(x) = x^2 - 4$ ו-$p(a)=0$, אז $a$ שווה:',
                options: ['$4$ בלבד', '$2$ בלבד', '$2$ או $-2$', '$0$'],
                correct: 2,
                explanation: '$x^2 - 4 = 0 \\Rightarrow x = \\pm 2$.'
            },
            {
                q: 'כמה שורשים (לכל היותר) יש לפולינום ממעלה 4?',
                options: ['$2$', '$3$', '$4$', '$8$'],
                correct: 2,
                explanation: 'פולינום ממעלה $n$ יכול להיות לו לכל היותר $n$ שורשים ממשיים.'
            }
        ]
    },
    {
        id: 42,
        category: 'algebra',
        title: 'בעיות מילוליות באלגברה',
        desc: 'תרגום בעיות מילוליות למשוואות',
        theory: `
<h3>שלבי הפתרון</h3>
<p>1. הגדרת משתנים — בחרו $x$ לנעלם</p>
<p>2. בניית משוואה — תרגמו את הטקסט</p>
<p>3. פתרון המשוואה</p>
<p>4. בדיקת סבירות — האם התשובה הגיונית?</p>

<h3>סוגי בעיות נפוצים</h3>
<p>• בעיות תנועה: $\\text{דרך} = \\text{מהירות} \\times \\text{זמן}$</p>
<p>• בעיות עבודה: $\\frac{1}{t_1} + \\frac{1}{t_2} = \\frac{1}{t_{\\text{משותף}}}$</p>
<p>• בעיות תערובות: כמות × ריכוז = כמות חומר</p>
<p>• בעיות גילאים, מספרים, גאומטריה</p>

<div class="example-box">
<div class="example-title">דוגמה — בעיית מספרים</div>
<p>סכום שני מספרים עוקבים הוא 47. מצאו אותם.</p>
<p>$x + (x+1) = 47 \\Rightarrow 2x = 46 \\Rightarrow x = 23$</p>
<p>המספרים: 23 ו-24.</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה — בעיית תנועה</div>
<p>רכבת נוסעת 240 ק"מ. אם הייתה נוסעת 20 קמ"ש מהר יותר, הייתה מגיעה שעה מוקדם יותר. מהי מהירותה?</p>
<p>$\\frac{240}{x} - \\frac{240}{x+20} = 1$</p>
<p>פותרים ומקבלים $x = 60$ קמ"ש.</p>
</div>`,
        questions: [
            {
                q: 'סכום שלושה מספרים עוקבים הוא 42. מהו האמצעי?',
                options: ['$13$', '$14$', '$15$', '$12$'],
                correct: 1,
                explanation: '$x + (x+1) + (x+2) = 42 \\Rightarrow 3x+3=42 \\Rightarrow x=13$. האמצעי: 14.'
            },
            {
                q: 'גיל האב פי 3 מגיל הבן. סכום הגילאים 48. מהו גיל הבן?',
                options: ['$16$', '$12$', '$36$', '$8$'],
                correct: 1,
                explanation: '$x + 3x = 48 \\Rightarrow 4x = 48 \\Rightarrow x = 12$.'
            },
            {
                q: 'היקף מלבן = 30. האורך כפול מהרוחב. מהו הרוחב?',
                options: ['$5$', '$10$', '$15$', '$7.5$'],
                correct: 0,
                explanation: '$2(2x+x) = 30 \\Rightarrow 6x = 30 \\Rightarrow x = 5$.'
            },
            {
                q: 'מכונית נסעה 180 ק"מ ב-3 שעות. מהי מהירותה?',
                options: ['$540$ קמ"ש', '$60$ קמ"ש', '$90$ קמ"ש', '$45$ קמ"ש'],
                correct: 1,
                explanation: '$v = \\frac{180}{3} = 60$ קמ"ש.'
            },
            {
                q: 'מספר ועוד חמישית ממנו שווים 36. מהו המספר?',
                options: ['$25$', '$30$', '$32$', '$24$'],
                correct: 1,
                explanation: '$x + \\frac{x}{5} = 36 \\Rightarrow \\frac{6x}{5} = 36 \\Rightarrow x = 30$.'
            }
        ]
    },
    {
        id: 43,
        category: 'algebra',
        title: 'משוואות מעריכיות ולוגריתמיות',
        desc: 'פתרון משוואות עם חזקות ולוגריתמים',
        theory: `
<h3>משוואות מעריכיות</h3>
<p>משוואות שבהן הנעלם במעריך:</p>
<div class="formula-box">$a^{f(x)} = a^{g(x)} \\Rightarrow f(x) = g(x)$</div>

<h3>שיטת פתרון</h3>
<p>1. הביאו לאותו בסיס</p>
<p>2. השוו מעריכים</p>
<p>אם אי אפשר — השתמשו בלוגריתם.</p>

<div class="formula-box">$a^x = b \\Rightarrow x = \\log_a b = \\frac{\\ln b}{\\ln a}$</div>

<h3>משוואות לוגריתמיות</h3>
<div class="formula-box">$\\log_a f(x) = b \\Rightarrow f(x) = a^b$</div>
<p>חשוב לבדוק תנאי הגדרה: הארגומנט חיובי!</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$2^{x+1} = 8 \\Rightarrow 2^{x+1} = 2^3 \\Rightarrow x+1 = 3 \\Rightarrow x = 2$</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$\\log_3(x-1) = 2 \\Rightarrow x-1 = 9 \\Rightarrow x = 10$</p>
<p>בדיקה: $x-1 = 9 > 0$ ✓</p>
</div>`,
        questions: [
            {
                q: 'פתרו: $3^x = 81$',
                options: ['$x = 3$', '$x = 4$', '$x = 27$', '$x = 5$'],
                correct: 1,
                explanation: '$81 = 3^4$, לכן $x = 4$.'
            },
            {
                q: 'פתרו: $2^{2x} = 16$',
                options: ['$x = 8$', '$x = 4$', '$x = 2$', '$x = 3$'],
                correct: 2,
                explanation: '$16 = 2^4$, לכן $2x = 4 \\Rightarrow x = 2$.'
            },
            {
                q: 'פתרו: $\\log_2(x) = 6$',
                options: ['$x = 12$', '$x = 36$', '$x = 64$', '$x = 128$'],
                correct: 2,
                explanation: '$x = 2^6 = 64$.'
            },
            {
                q: 'פתרו: $5^{x-1} = 25$',
                options: ['$x = 2$', '$x = 3$', '$x = 5$', '$x = 1$'],
                correct: 1,
                explanation: '$25 = 5^2$, לכן $x-1=2 \\Rightarrow x=3$.'
            },
            {
                q: 'פתרו: $\\log(x) + \\log(x-3) = 1$ (לוג בסיס 10)',
                options: ['$x = 5$', '$x = -2$', '$x = 5$ (ו-$x=-2$ פסול)', '$x = 10$'],
                correct: 2,
                explanation: '$\\log(x(x-3))=1 \\Rightarrow x^2-3x=10 \\Rightarrow x=5$ או $x=-2$. אבל $x>3$ (תנאי), לכן $x=5$.'
            }
        ]
    },
    {
        id: 44,
        category: 'algebra',
        title: 'חזקות ושורשים מתקדם',
        desc: 'חזקות רציונליות, ייצוגים מתקדמים',
        theory: `
<h3>חזקות רציונליות</h3>
<div class="formula-box">$a^{\\frac{m}{n}} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$</div>

<h3>פישוט ביטויים מורכבים</h3>
<p>כל חוקי החזקות עובדים גם לחזקות שבריות:</p>
<div class="formula-box">$a^{\\frac{1}{2}} \\cdot a^{\\frac{1}{3}} = a^{\\frac{1}{2}+\\frac{1}{3}} = a^{\\frac{5}{6}}$</div>

<h3>רציונליזציה</h3>
<p>הרחקת שורש מהמכנה:</p>
<div class="formula-box">$\\frac{1}{\\sqrt{a}} = \\frac{\\sqrt{a}}{a}$</div>
<div class="formula-box">$\\frac{1}{\\sqrt{a}+\\sqrt{b}} = \\frac{\\sqrt{a}-\\sqrt{b}}{a-b}$</div>

<div class="example-box">
<div class="example-title">דוגמה — רציונליזציה</div>
<p>$\\frac{1}{\\sqrt{3}+1} = \\frac{\\sqrt{3}-1}{(\\sqrt{3}+1)(\\sqrt{3}-1)} = \\frac{\\sqrt{3}-1}{3-1} = \\frac{\\sqrt{3}-1}{2}$</p>
</div>`,
        questions: [
            {
                q: 'מהו $8^{\\frac{2}{3}}$?',
                options: ['$2$', '$4$', '$16$', '$\\sqrt{8}$'],
                correct: 1,
                explanation: '$8^{\\frac{2}{3}} = (\\sqrt[3]{8})^2 = 2^2 = 4$.'
            },
            {
                q: 'פשטו: $\\frac{6}{\\sqrt{3}}$',
                options: ['$2\\sqrt{3}$', '$\\frac{\\sqrt{3}}{6}$', '$6\\sqrt{3}$', '$\\sqrt{2}$'],
                correct: 0,
                explanation: '$\\frac{6}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$.'
            },
            {
                q: 'מהו $27^{\\frac{1}{3}}$?',
                options: ['$9$', '$3$', '$\\sqrt{27}$', '$81$'],
                correct: 1,
                explanation: '$27^{\\frac{1}{3}} = \\sqrt[3]{27} = 3$.'
            },
            {
                q: 'פשטו: $x^{\\frac{1}{2}} \\cdot x^{\\frac{3}{2}}$',
                options: ['$x^{\\frac{3}{4}}$', '$x^2$', '$x^{\\frac{4}{4}}$', '$x^3$'],
                correct: 1,
                explanation: '$x^{\\frac{1}{2}+\\frac{3}{2}} = x^{\\frac{4}{2}} = x^2$.'
            },
            {
                q: 'רציונלזו: $\\frac{1}{\\sqrt{5}-2}$',
                options: ['$\\sqrt{5}+2$', '$\\sqrt{5}-2$', '$\\frac{\\sqrt{5}+2}{3}$', '$\\frac{\\sqrt{5}}{2}$'],
                correct: 0,
                explanation: '$\\frac{\\sqrt{5}+2}{(\\sqrt{5}-2)(\\sqrt{5}+2)} = \\frac{\\sqrt{5}+2}{5-4} = \\sqrt{5}+2$.'
            }
        ]
    },

    // ===== MORE FUNCTIONS (45-48) =====
    {
        id: 45,
        category: 'functions',
        title: 'פונקציה מוגדרת בתחומים',
        desc: 'פונקציות שמוגדרות שונה בקטעים שונים',
        theory: `
<h3>הגדרה</h3>
<p>פונקציה שמוגדרת על ידי נוסחאות שונות בתחומים שונים:</p>
<div class="formula-box">$f(x) = \\begin{cases} x^2 & x \\geq 0 \\\\ -x & x < 0 \\end{cases}$</div>

<h3>חישוב ערכים</h3>
<p>קודם בודקים לאיזה תחום $x$ שייך, ואז מציבים בנוסחה המתאימה.</p>

<h3>גרף</h3>
<p>משרטטים כל חלק בתחום שלו.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$f(x) = \\begin{cases} 2x+1 & x > 0 \\\\ 3 & x = 0 \\\\ x^2 & x < 0 \\end{cases}$</p>
<p>$f(2) = 2(2)+1 = 5$ (כי $2>0$)</p>
<p>$f(0) = 3$ (לפי ההגדרה)</p>
<p>$f(-3) = (-3)^2 = 9$ (כי $-3<0$)</p>
</div>

<div class="tip-box">
<div class="tip-title">שימו לב</div>
<p>בדקו האם הפונקציה רציפה — האם חלקי הגרף מתחברים בנקודות המעבר.</p>
</div>`,
        questions: [
            {
                q: 'נתונה $f(x) = \\begin{cases} x+3 & x \\geq 1 \\\\ 2x & x < 1 \\end{cases}$. מהו $f(1)$?',
                options: ['$2$', '$4$', '$3$', '$1$'],
                correct: 1,
                explanation: '$x=1 \\geq 1$ לכן $f(1) = 1+3 = 4$.'
            },
            {
                q: 'באותה פונקציה, מהו $f(0)$?',
                options: ['$3$', '$0$', '$2$', '$1$'],
                correct: 1,
                explanation: '$x=0 < 1$ לכן $f(0) = 2(0) = 0$.'
            },
            {
                q: 'נתונה $f(x) = \\begin{cases} x^2 & x \\geq 0 \\\\ -x & x < 0 \\end{cases}$. מהו $f(-4)$?',
                options: ['$16$', '$4$', '$-4$', '$-16$'],
                correct: 1,
                explanation: '$x=-4<0$ לכן $f(-4)=-(-4)=4$.'
            },
            {
                q: '$|x|$ היא דוגמה לפונקציה מוגדרת בתחומים:',
                options: ['נכון', 'לא נכון', 'רק לחיוביים', 'רק לשליליים'],
                correct: 0,
                explanation: '$|x| = \\begin{cases} x & x \\geq 0 \\\\ -x & x < 0 \\end{cases}$'
            },
            {
                q: 'נתונה $f(x) = \\begin{cases} 5 & x > 2 \\\\ x+3 & x \\leq 2 \\end{cases}$. האם $f$ רציפה ב-$x=2$?',
                options: ['כן', 'לא', 'לא מוגדרת שם', 'אי אפשר לדעת'],
                correct: 0,
                explanation: '$f(2) = 2+3 = 5$. הגבול משמאל = $5$, הגבול מימין = $5$. רציפה!'
            }
        ]
    },
    {
        id: 46,
        category: 'functions',
        title: 'מונוטוניות ונקודות קיצון',
        desc: 'פונקציות עולות, יורדות ונקודות מינימום/מקסימום',
        theory: `
<h3>מונוטוניות</h3>
<p><strong>עולה</strong>: אם $x_1 < x_2$ אז $f(x_1) < f(x_2)$</p>
<p><strong>יורדת</strong>: אם $x_1 < x_2$ אז $f(x_1) > f(x_2)$</p>

<h3>נקודת מקסימום מקומי</h3>
<p>נקודה שבה הפונקציה עוברת מעלייה לירידה.</p>

<h3>נקודת מינימום מקומי</h3>
<p>נקודה שבה הפונקציה עוברת מירידה לעלייה.</p>

<h3>לפונקציה ריבועית</h3>
<p>$f(x) = ax^2 + bx + c$:</p>
<p>• אם $a > 0$ — יש מינימום בקודקוד</p>
<p>• אם $a < 0$ — יש מקסימום בקודקוד</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$f(x) = -x^2 + 4x - 1$. $a = -1 < 0$ לכן יש מקסימום.</p>
<p>$x_v = \\frac{-4}{-2} = 2$, $y_v = -4+8-1 = 3$.</p>
<p>מקסימום: $(2, 3)$. עולה ב-$(-\\infty, 2)$, יורדת ב-$(2, \\infty)$.</p>
</div>`,
        questions: [
            {
                q: '$f(x) = 2x + 5$ היא:',
                options: ['עולה', 'יורדת', 'קבועה', 'לפעמים עולה לפעמים יורדת'],
                correct: 0,
                explanation: 'פונקציה לינארית עם שיפוע חיובי ($m=2>0$) תמיד עולה.'
            },
            {
                q: 'ל-$f(x) = x^2 - 6x + 10$ יש:',
                options: ['מקסימום ב-$(3,1)$', 'מינימום ב-$(3,1)$', 'מקסימום ב-$(1,3)$', 'מינימום ב-$(1,3)$'],
                correct: 1,
                explanation: '$a=1>0$ לכן מינימום. $x_v=3$, $y_v=9-18+10=1$.'
            },
            {
                q: 'פונקציה שעולה ב-$(-\\infty, 3)$ ויורדת ב-$(3, \\infty)$, ב-$x=3$ יש:',
                options: ['מינימום', 'מקסימום', 'נקודת פיתול', 'שורש'],
                correct: 1,
                explanation: 'מעבר מעלייה לירידה = מקסימום מקומי.'
            },
            {
                q: 'ל-$f(x) = x^3$ ב-$x=0$:',
                options: ['יש מינימום', 'יש מקסימום', 'אין נקודת קיצון', 'לא מוגדרת'],
                correct: 2,
                explanation: '$x^3$ עולה בכל הממשיים, אין נקודת קיצון.'
            },
            {
                q: 'פונקציה עולה ממש — גרפה:',
                options: ['יורד משמאל לימין', 'עולה משמאל לימין', 'אופקי', 'אנכי'],
                correct: 1,
                explanation: 'ככל ש-$x$ גדל, $f(x)$ גדל, לכן הגרף עולה.'
            }
        ]
    },
    {
        id: 47,
        category: 'functions',
        title: 'חקירת פונקציה ריבועית',
        desc: 'חקירה מלאה של פרבולה',
        theory: `
<h3>שלבי החקירה</h3>
<p>עבור $f(x) = ax^2 + bx + c$:</p>

<p><strong>1. תחום:</strong> כל הממשיים (תמיד!)</p>
<p><strong>2. נקודות חיתוך עם הצירים:</strong></p>
<p>• ציר $y$: $(0, c)$</p>
<p>• ציר $x$: פתרו $ax^2+bx+c=0$</p>
<p><strong>3. קודקוד:</strong> $\\left(-\\frac{b}{2a}, f\\left(-\\frac{b}{2a}\\right)\\right)$</p>
<p><strong>4. ציר סימטריה:</strong> $x = -\\frac{b}{2a}$</p>
<p><strong>5. כיוון:</strong> $a>0$ מינימום, $a<0$ מקסימום</p>
<p><strong>6. תמונה (טווח):</strong></p>
<p>• $a > 0$: $[y_v, \\infty)$</p>
<p>• $a < 0$: $(-\\infty, y_v]$</p>

<div class="example-box">
<div class="example-title">חקירה מלאה</div>
<p>$f(x) = x^2 - 2x - 3$</p>
<p>חיתוך $y$: $(0, -3)$</p>
<p>חיתוך $x$: $x^2-2x-3=0 \\Rightarrow (x-3)(x+1)=0 \\Rightarrow x=3, x=-1$</p>
<p>קודקוד: $x_v=1, y_v=1-2-3=-4$. הנקודה $(1,-4)$.</p>
<p>מינימום (כי $a=1>0$). טווח: $[-4, \\infty)$.</p>
</div>`,
        questions: [
            {
                q: 'מהי נקודת החיתוך של $f(x) = 2x^2 - 3x + 1$ עם ציר $y$?',
                options: ['$(0, 2)$', '$(0, 1)$', '$(0, -3)$', '$(1, 0)$'],
                correct: 1,
                explanation: 'ציר $y$: $f(0) = 1$. הנקודה: $(0, 1)$.'
            },
            {
                q: 'מהו הטווח (תמונה) של $f(x) = x^2 + 4$?',
                options: ['$[0, \\infty)$', '$[4, \\infty)$', '$(-\\infty, 4]$', 'כל הממשיים'],
                correct: 1,
                explanation: 'קודקוד $(0,4)$ ו-$a>0$ (מינימום), לכן טווח $[4, \\infty)$.'
            },
            {
                q: 'ל-$f(x) = -x^2 + 6x - 5$ כמה חיתוכים עם ציר $x$?',
                options: ['$0$', '$1$', '$2$', '$3$'],
                correct: 2,
                explanation: '$\\Delta = 36-20 = 16 > 0$, לכן 2 חיתוכים.'
            },
            {
                q: 'ציר הסימטריה של $f(x) = 3x^2 + 12x + 7$:',
                options: ['$x = 4$', '$x = -4$', '$x = 2$', '$x = -2$'],
                correct: 3,
                explanation: '$x = -\\frac{12}{6} = -2$.'
            },
            {
                q: 'ערך המקסימום של $f(x) = -2x^2 + 8x - 3$:',
                options: ['$5$', '$2$', '$-3$', '$8$'],
                correct: 0,
                explanation: '$x_v = \\frac{-8}{-4} = 2$. $y_v = -8+16-3 = 5$.'
            }
        ]
    },
    {
        id: 48,
        category: 'functions',
        title: 'אי-שוויונות עם פונקציות',
        desc: '$f(x) > 0$, $f(x) > g(x)$ ופתרון גרפי',
        theory: `
<h3>$f(x) > 0$</h3>
<p>היכן הגרף מעל ציר $x$?</p>

<h3>$f(x) < 0$</h3>
<p>היכן הגרף מתחת לציר $x$?</p>

<h3>$f(x) > g(x)$</h3>
<p>היכן גרף $f$ מעל גרף $g$?</p>
<p>שווה ערך ל: $f(x) - g(x) > 0$.</p>

<h3>פתרון אי-שוויון ריבועי</h3>
<p>1. מוצאים שורשים של $f(x)=0$</p>
<p>2. לפי סימן $a$ וסימני הקטעים, קובעים פתרון</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$x^2 - 5x + 6 > 0$</p>
<p>שורשים: $x=2, x=3$. $a=1>0$.</p>
<p>הפרבולה חיובית מחוץ לשורשים: $x < 2$ או $x > 3$.</p>
</div>`,
        questions: [
            {
                q: '$x^2 - 9 > 0$ מתקיים כאשר:',
                options: ['$-3 < x < 3$', '$x < -3$ או $x > 3$', '$x > 3$', '$x > 0$'],
                correct: 1,
                explanation: '$(x-3)(x+3) > 0$. $a>0$, חיובי מחוץ לשורשים.'
            },
            {
                q: '$-x^2 + 4 \\geq 0$ מתקיים כאשר:',
                options: ['$x \\leq -2$ או $x \\geq 2$', '$-2 \\leq x \\leq 2$', '$x \\geq 0$', '$x \\leq 2$'],
                correct: 1,
                explanation: '$-x^2+4 \\geq 0 \\Rightarrow x^2 \\leq 4 \\Rightarrow -2 \\leq x \\leq 2$.'
            },
            {
                q: 'אם $f(x) > g(x)$ גרפית, אז:',
                options: ['גרף $f$ מעל גרף $g$', 'גרף $f$ מתחת לגרף $g$', 'הגרפים נחתכים', 'הגרפים מקבילים'],
                correct: 0,
                explanation: '$f(x) > g(x)$ = גרף $f$ מעל גרף $g$.'
            },
            {
                q: '$x^2 + 1 > 0$ מתקיים:',
                options: ['רק ל-$x > 0$', 'רק ל-$x \\neq 0$', 'לכל $x$ ממשי', 'לאף $x$'],
                correct: 2,
                explanation: '$x^2 \\geq 0$ תמיד, לכן $x^2+1 \\geq 1 > 0$ תמיד.'
            },
            {
                q: '$x^2 - 4x + 4 \\leq 0$ מתקיים כאשר:',
                options: ['$x = 2$ בלבד', '$0 \\leq x \\leq 4$', '$x \\leq 2$', 'לכל $x$'],
                correct: 0,
                explanation: '$x^2-4x+4 = (x-2)^2 \\geq 0$, ושווה 0 רק כש-$x=2$.'
            }
        ]
    },

    // ===== MORE GEOMETRY (49-52) =====
    {
        id: 49,
        category: 'geometry',
        title: 'משולש — קווים מיוחדים',
        desc: 'גובה, תיכון, חוצה זווית ואנך אמצעי',
        theory: `
<h3>גובה</h3>
<p>אנך מקודקוד לצלע שמולו. שלושת הגבהים נפגשים בנקודה אחת (אורתוצנטר).</p>

<h3>תיכון</h3>
<p>קטע מקודקוד לאמצע הצלע שמולו. שלושת התיכונים נפגשים בנקודה אחת — כובד המשולש, שמחלקת כל תיכון ביחס $2:1$.</p>

<h3>חוצה זווית</h3>
<p>קרן שמחלקת זווית לשני חלקים שווים. שלושת חוצי הזוויות נפגשים במרכז המעגל החסום.</p>

<h3>אנך אמצעי</h3>
<p>אנך שעובר דרך אמצע הצלע. שלושת האנכים האמצעיים נפגשים במרכז המעגל החוסם.</p>

<div class="tip-box">
<div class="tip-title">משפט חוצה זווית</div>
<p>חוצה הזווית מחלק את הצלע שמולו ביחס הצלעות הצמודות:</p>
<p>$\\frac{BD}{DC} = \\frac{AB}{AC}$</p>
</div>`,
        questions: [
            {
                q: 'שלושת התיכונים במשולש נפגשים ב:',
                options: ['אורתוצנטר', 'מרכז כובד', 'מרכז מעגל חוסם', 'מרכז מעגל חסום'],
                correct: 1,
                explanation: 'מפגש התיכונים = מרכז כובד (centroid).'
            },
            {
                q: 'מרכז הכובד מחלק כל תיכון ביחס:',
                options: ['$1:1$', '$2:1$ מהקודקוד', '$3:1$', '$1:2$ מהקודקוד'],
                correct: 1,
                explanation: 'היחס $2:1$ מהקודקוד לצלע שמולו.'
            },
            {
                q: 'חוצי הזוויות נפגשים במרכז:',
                options: ['המעגל החוסם', 'המעגל החסום', 'הכובד', 'האורתוצנטר'],
                correct: 1,
                explanation: 'חוצי הזוויות = מרכז המעגל החסום (incenter).'
            },
            {
                q: 'במשולש שווה-צלעות, הגובה הוא גם:',
                options: ['תיכון בלבד', 'חוצה זווית בלבד', 'תיכון, חוצה זווית ואנך אמצעי', 'אף אחד מהם'],
                correct: 2,
                explanation: 'במשולש שווה-צלעות, כל הקווים המיוחדים חופפים!'
            },
            {
                q: 'אורך תיכון לצלע שאורכה $a$ במשולש שווה-צלעות:',
                options: ['$\\frac{a}{2}$', '$\\frac{a\\sqrt{3}}{2}$', '$a$', '$a\\sqrt{2}$'],
                correct: 1,
                explanation: 'הגובה (= תיכון) במשולש שווה-צלעות: $h = \\frac{a\\sqrt{3}}{2}$.'
            }
        ]
    },
    {
        id: 50,
        category: 'geometry',
        title: 'משפט תאלס',
        desc: 'ישרים מקבילים וחלוקת קטעים',
        theory: `
<h3>משפט תאלס</h3>
<p>אם שני ישרים מקבילים חותכים שני ישרים אחרים, הם יוצרים קטעים פרופורציונליים:</p>
<div class="formula-box">$\\frac{AB}{BC} = \\frac{DE}{EF}$</div>

<h3>משפט תאלס ההפוך</h3>
<p>אם ישר חותך שתי צלעות של משולש ומחלק אותן ביחס שווה — הוא מקביל לצלע השלישית.</p>

<h3>קטע אמצעים</h3>
<p>קטע המחבר אמצעי שתי צלעות במשולש:</p>
<div class="formula-box">$\\text{קטע אמצעים מקביל לצלע השלישית ושווה לחציה}$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>במשולש $ABC$, $D$ אמצע $AB$ ו-$E$ אמצע $AC$.</p>
<p>אז $DE \\parallel BC$ ו-$DE = \\frac{BC}{2}$.</p>
</div>`,
        questions: [
            {
                q: 'ישר מקביל לבסיס משולש חותך שתי צלעות ומחלק אחת ביחס $1:2$. מהו היחס בצלע השנייה?',
                options: ['$1:3$', '$1:2$', '$2:1$', '$2:3$'],
                correct: 1,
                explanation: 'לפי משפט תאלס, היחס שווה: $1:2$.'
            },
            {
                q: 'קטע אמצעים במשולש שווה ל:',
                options: ['הצלע השלישית', 'חצי הצלע השלישית', 'כפל הצלע השלישית', 'שליש הצלע השלישית'],
                correct: 1,
                explanation: 'קטע אמצעים = חצי הצלע השלישית.'
            },
            {
                q: 'קטע אמצעים ביחס לצלע השלישית הוא:',
                options: ['ניצב', 'מקביל', 'חוצה', 'אלכסוני'],
                correct: 1,
                explanation: 'קטע אמצעים מקביל לצלע השלישית.'
            },
            {
                q: 'ב-$\\triangle ABC$, $DE \\parallel BC$ עם $\\frac{AD}{DB}=\\frac{3}{2}$. מהו $\\frac{AE}{EC}$?',
                options: ['$\\frac{2}{3}$', '$\\frac{3}{2}$', '$\\frac{3}{5}$', '$\\frac{2}{5}$'],
                correct: 1,
                explanation: 'לפי תאלס: $\\frac{AE}{EC} = \\frac{AD}{DB} = \\frac{3}{2}$.'
            },
            {
                q: 'אם $BC = 12$ וקטע האמצעים הוא $DE$, מהו $DE$?',
                options: ['$12$', '$6$', '$4$', '$24$'],
                correct: 1,
                explanation: '$DE = \\frac{BC}{2} = 6$.'
            }
        ]
    },
    {
        id: 51,
        category: 'geometry',
        title: 'גאומטריה אנליטית — ישרים',
        desc: 'משוואות ישרים, ניצביות ומקביליות',
        theory: `
<h3>צורות משוואת ישר</h3>
<div class="formula-box">$y = mx + b \\quad \\text{(שיפוע-חיתוך)}$</div>
<div class="formula-box">$y - y_1 = m(x - x_1) \\quad \\text{(נקודה-שיפוע)}$</div>
<div class="formula-box">$ax + by + c = 0 \\quad \\text{(כללית)}$</div>

<h3>מרחק נקודה מישר</h3>
<div class="formula-box">$d = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2+b^2}}$</div>

<h3>שיפוע ישר מקביל וניצב</h3>
<div class="formula-box">$\\text{מקביל: } m_2 = m_1$</div>
<div class="formula-box">$\\text{ניצב: } m_2 = -\\frac{1}{m_1}$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>מצאו ישר ניצב ל-$y = 2x + 3$ העובר דרך $(1, 4)$:</p>
<p>שיפוע הניצב: $m = -\\frac{1}{2}$</p>
<p>$y - 4 = -\\frac{1}{2}(x-1) \\Rightarrow y = -\\frac{1}{2}x + \\frac{9}{2}$</p>
</div>`,
        questions: [
            {
                q: 'מצאו משוואת ישר עם שיפוע $3$ העובר דרך $(2, 1)$:',
                options: ['$y = 3x + 1$', '$y = 3x - 5$', '$y = 3x + 5$', '$y = 3x - 1$'],
                correct: 1,
                explanation: '$y - 1 = 3(x-2) \\Rightarrow y = 3x - 5$.'
            },
            {
                q: 'מהו המרחק של $(3, 4)$ מהישר $3x + 4y - 10 = 0$?',
                options: ['$\\frac{15}{5} = 3$', '$\\frac{5}{5} = 1$', '$15$', '$\\frac{19}{5}$'],
                correct: 0,
                explanation: '$d = \\frac{|9+16-10|}{\\sqrt{9+16}} = \\frac{15}{5} = 3$.'
            },
            {
                q: 'ישר מקביל ל-$y = -4x + 1$:',
                options: ['$y = 4x + 2$', '$y = -4x + 7$', '$y = \\frac{1}{4}x$', '$y = -\\frac{1}{4}x$'],
                correct: 1,
                explanation: 'שיפוע זהה $m = -4$, לכן $y = -4x + 7$.'
            },
            {
                q: 'שיפוע ישר ניצב ל-$y = \\frac{2}{3}x + 1$:',
                options: ['$\\frac{2}{3}$', '$-\\frac{2}{3}$', '$-\\frac{3}{2}$', '$\\frac{3}{2}$'],
                correct: 2,
                explanation: '$m_{\\perp} = -\\frac{1}{\\frac{2}{3}} = -\\frac{3}{2}$.'
            },
            {
                q: 'שני ישרים $y=2x+1$ ו-$y=2x-3$ הם:',
                options: ['ניצבים', 'מקבילים', 'חופפים', 'נחתכים'],
                correct: 1,
                explanation: 'אותו שיפוע ($m=2$) ו-$b$ שונה = מקבילים.'
            }
        ]
    },
    {
        id: 52,
        category: 'geometry',
        title: 'גאומטריה אנליטית — מעגל',
        desc: 'משוואת מעגל, משיק ונקודות חיתוך',
        theory: `
<h3>משוואת מעגל</h3>
<div class="formula-box">$(x-a)^2 + (y-b)^2 = R^2$</div>
<p>מרכז $(a,b)$ ורדיוס $R$.</p>

<h3>צורה כללית</h3>
<div class="formula-box">$x^2 + y^2 + Dx + Ey + F = 0$</div>
<p>מרכז: $(-\\frac{D}{2}, -\\frac{E}{2})$, רדיוס: $R = \\sqrt{\\frac{D^2+E^2}{4}-F}$</p>

<h3>ישר וממעגל</h3>
<p>מציבים $y$ (או $x$) מהישר במשוואת המעגל ובודקים דיסקרימיננטה:</p>
<p>• $\\Delta > 0$: שתי נקודות חיתוך (חותך)</p>
<p>• $\\Delta = 0$: נקודה אחת (משיק)</p>
<p>• $\\Delta < 0$: אין חיתוך (חיצוני)</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>מעגל $(x-1)^2 + (y+2)^2 = 25$</p>
<p>מרכז: $(1, -2)$, רדיוס: $5$.</p>
</div>`,
        questions: [
            {
                q: 'מהו מרכז המעגל $(x-3)^2 + (y+1)^2 = 16$?',
                options: ['$(3, 1)$', '$(3, -1)$', '$(-3, 1)$', '$(-3, -1)$'],
                correct: 1,
                explanation: 'מרכז $(3, -1)$ ורדיוס $4$.'
            },
            {
                q: 'מהו הרדיוס של $(x+2)^2 + y^2 = 49$?',
                options: ['$49$', '$7$', '$\\sqrt{49}$', '$7$ ו-$\\sqrt{49}$ (שניהם)'],
                correct: 3,
                explanation: '$R^2 = 49 \\Rightarrow R = 7 = \\sqrt{49}$.'
            },
            {
                q: 'משוואת מעגל עם מרכז בראשית ורדיוס 3:',
                options: ['$x^2+y^2=3$', '$x^2+y^2=9$', '$(x-3)^2+y^2=9$', '$x^2+y^2=6$'],
                correct: 1,
                explanation: '$(x-0)^2+(y-0)^2 = 3^2 = 9$.'
            },
            {
                q: 'ישר משיק למעגל נוגע בו ב:',
                options: ['0 נקודות', 'נקודה אחת', '2 נקודות', '3 נקודות'],
                correct: 1,
                explanation: 'משיק = ישר שנוגע במעגל בדיוק בנקודה אחת.'
            },
            {
                q: 'הנקודה $(3, 4)$ נמצאת ביחס למעגל $x^2+y^2=16$:',
                options: ['על המעגל', 'בתוך המעגל', 'מחוץ למעגל', 'על המרכז'],
                correct: 2,
                explanation: '$3^2+4^2 = 25 > 16$, לכן הנקודה מחוץ למעגל.'
            }
        ]
    },

    // ===== MORE TRIGONOMETRY (53-55) =====
    {
        id: 53,
        category: 'trigonometry',
        title: 'רדיאנים',
        desc: 'מדידת זוויות ברדיאנים',
        theory: `
<h3>מהו רדיאן?</h3>
<p>רדיאן הוא יחידת מדידת זוויות. סיבוב מלא = $2\\pi$ רדיאנים = $360°$.</p>

<h3>המרה</h3>
<div class="formula-box">$\\text{רדיאנים} = \\text{מעלות} \\times \\frac{\\pi}{180}$</div>
<div class="formula-box">$\\text{מעלות} = \\text{רדיאנים} \\times \\frac{180}{\\pi}$</div>

<h3>זוויות חשובות</h3>
<p>$30° = \\frac{\\pi}{6}, \\quad 45° = \\frac{\\pi}{4}, \\quad 60° = \\frac{\\pi}{3}$</p>
<p>$90° = \\frac{\\pi}{2}, \\quad 180° = \\pi, \\quad 360° = 2\\pi$</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$120° = 120 \\times \\frac{\\pi}{180} = \\frac{2\\pi}{3}$</p>
</div>`,
        questions: [
            {
                q: 'כמה רדיאנים ב-$180°$?',
                options: ['$\\frac{\\pi}{2}$', '$\\pi$', '$2\\pi$', '$\\frac{\\pi}{3}$'],
                correct: 1,
                explanation: '$180° = \\pi$ רדיאנים.'
            },
            {
                q: 'כמה מעלות ב-$\\frac{\\pi}{4}$ רדיאנים?',
                options: ['$30°$', '$45°$', '$60°$', '$90°$'],
                correct: 1,
                explanation: '$\\frac{\\pi}{4} \\times \\frac{180}{\\pi} = 45°$.'
            },
            {
                q: 'מהו $\\sin\\frac{\\pi}{6}$?',
                options: ['$\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{2}$', '$1$', '$0$'],
                correct: 1,
                explanation: '$\\frac{\\pi}{6} = 30°$, לכן $\\sin\\frac{\\pi}{6} = \\sin 30° = \\frac{1}{2}$.'
            },
            {
                q: 'המירו $270°$ לרדיאנים:',
                options: ['$\\frac{\\pi}{2}$', '$\\pi$', '$\\frac{3\\pi}{2}$', '$\\frac{3\\pi}{4}$'],
                correct: 2,
                explanation: '$270 \\times \\frac{\\pi}{180} = \\frac{3\\pi}{2}$.'
            },
            {
                q: 'סיבוב מלא שווה ל:',
                options: ['$\\pi$', '$\\frac{\\pi}{2}$', '$2\\pi$', '$4\\pi$'],
                correct: 2,
                explanation: 'סיבוב מלא = $360° = 2\\pi$ רדיאנים.'
            }
        ]
    },
    {
        id: 54,
        category: 'trigonometry',
        title: 'משוואות טריגונומטריות',
        desc: 'פתרון משוואות עם sin, cos, tan',
        theory: `
<h3>משוואות בסיסיות</h3>
<div class="formula-box">$\\sin x = a \\Rightarrow x = \\arcsin a + 360°n \\text{ או } x = 180° - \\arcsin a + 360°n$</div>
<div class="formula-box">$\\cos x = a \\Rightarrow x = \\pm \\arccos a + 360°n$</div>
<div class="formula-box">$\\tan x = a \\Rightarrow x = \\arctan a + 180°n$</div>

<h3>משוואות נפוצות</h3>
<div class="formula-box">$\\sin x = 0 \\Rightarrow x = 180°n$</div>
<div class="formula-box">$\\cos x = 0 \\Rightarrow x = 90° + 180°n$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$\\sin x = \\frac{1}{2}$ בתחום $[0°, 360°)$:</p>
<p>$x = 30°$ או $x = 150°$</p>
</div>

<div class="tip-box">
<div class="tip-title">טיפ</div>
<p>תמיד בדקו באיזה תחום מבקשים פתרונות!</p>
</div>`,
        questions: [
            {
                q: 'פתרו $\\sin x = 0$ בתחום $[0°, 360°)$:',
                options: ['$0°$ בלבד', '$0°, 180°$', '$0°, 90°, 180°, 270°$', '$90°, 270°$'],
                correct: 1,
                explanation: '$\\sin x = 0$ כש-$x = 0°$ או $x = 180°$.'
            },
            {
                q: 'פתרו $\\cos x = 1$ בתחום $[0°, 360°)$:',
                options: ['$0°$', '$90°$', '$180°$', '$360°$'],
                correct: 0,
                explanation: '$\\cos 0° = 1$, ו-$360°$ לא בתחום הפתוח.'
            },
            {
                q: 'כמה פתרונות ל-$\\sin x = \\frac{1}{2}$ בתחום $[0°, 360°)$?',
                options: ['$1$', '$2$', '$3$', '$4$'],
                correct: 1,
                explanation: '$x = 30°$ ו-$x = 150°$.'
            },
            {
                q: 'פתרו $\\tan x = 1$ בתחום $[0°, 360°)$:',
                options: ['$45°$', '$45°, 225°$', '$45°, 135°$', '$45°, 315°$'],
                correct: 1,
                explanation: '$\\tan 45° = 1$ ו-$\\tan 225° = 1$ (מחזוריות $180°$).'
            },
            {
                q: 'ל-$\\sin x = 2$ יש:',
                options: ['פתרון אחד', 'שני פתרונות', 'אינסוף פתרונות', 'אין פתרון'],
                correct: 3,
                explanation: '$-1 \\leq \\sin x \\leq 1$, ו-$2 > 1$, לכן אין פתרון.'
            }
        ]
    },
    {
        id: 55,
        category: 'trigonometry',
        title: 'נוסחאות זוויות כפולות וחיבור',
        desc: 'סינוס וקוסינוס של סכום, הפרש וכפולה',
        theory: `
<h3>נוסחאות חיבור</h3>
<div class="formula-box">$\\sin(\\alpha+\\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$</div>
<div class="formula-box">$\\cos(\\alpha+\\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$</div>

<h3>נוסחאות הפרש</h3>
<div class="formula-box">$\\sin(\\alpha-\\beta) = \\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta$</div>
<div class="formula-box">$\\cos(\\alpha-\\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$</div>

<h3>נוסחאות זווית כפולה</h3>
<div class="formula-box">$\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$</div>
<div class="formula-box">$\\cos 2\\alpha = \\cos^2\\alpha - \\sin^2\\alpha = 2\\cos^2\\alpha - 1 = 1 - 2\\sin^2\\alpha$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>חשבו $\\sin 75°$:</p>
<p>$\\sin 75° = \\sin(45°+30°) = \\sin 45°\\cos 30° + \\cos 45°\\sin 30°$</p>
<p>$= \\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2}\\cdot\\frac{1}{2} = \\frac{\\sqrt{6}+\\sqrt{2}}{4}$</p>
</div>`,
        questions: [
            {
                q: '$\\sin 2\\alpha$ שווה ל:',
                options: ['$2\\sin\\alpha$', '$\\sin^2\\alpha$', '$2\\sin\\alpha\\cos\\alpha$', '$\\sin\\alpha + \\cos\\alpha$'],
                correct: 2,
                explanation: 'נוסחת זווית כפולה: $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$.'
            },
            {
                q: '$\\cos(90°-\\alpha)$ שווה ל:',
                options: ['$\\cos\\alpha$', '$\\sin\\alpha$', '$-\\sin\\alpha$', '$-\\cos\\alpha$'],
                correct: 1,
                explanation: '$\\cos(90°-\\alpha) = \\cos 90°\\cos\\alpha + \\sin 90°\\sin\\alpha = 0 + \\sin\\alpha = \\sin\\alpha$.'
            },
            {
                q: '$\\cos 2\\alpha$ כאשר $\\sin\\alpha = \\frac{3}{5}$:',
                options: ['$\\frac{7}{25}$', '$-\\frac{7}{25}$', '$\\frac{24}{25}$', '$\\frac{6}{5}$'],
                correct: 0,
                explanation: '$\\cos 2\\alpha = 1-2\\sin^2\\alpha = 1-\\frac{18}{25} = \\frac{7}{25}$.'
            },
            {
                q: '$\\cos^2\\alpha - \\sin^2\\alpha$ שווה ל:',
                options: ['$1$', '$\\cos 2\\alpha$', '$\\sin 2\\alpha$', '$0$'],
                correct: 1,
                explanation: 'זוהי אחת מצורות $\\cos 2\\alpha$.'
            },
            {
                q: '$\\sin(\\alpha+\\beta) = \\sin\\alpha\\cos\\beta + ?$',
                options: ['$\\sin\\beta\\cos\\alpha$', '$\\cos\\alpha\\sin\\beta$', 'שניהם זהים', '$\\sin\\alpha\\sin\\beta$'],
                correct: 2,
                explanation: '$\\cos\\alpha\\sin\\beta = \\sin\\beta\\cos\\alpha$ — אותו דבר.'
            }
        ]
    },

    // ===== MORE PROBABILITY (56-58) =====
    {
        id: 56,
        category: 'probability',
        title: 'קומבינטוריקה — תמורות וצירופים',
        desc: 'עקרון הכפל, תמורות וצירופים',
        theory: `
<h3>עקרון הכפל</h3>
<p>אם פעולה 1 אפשרית ב-$m$ דרכים ופעולה 2 ב-$n$ דרכים, שתיהן יחד: $m \\times n$.</p>

<h3>עצרת (פקטוריאל)</h3>
<div class="formula-box">$n! = n \\times (n-1) \\times \\cdots \\times 2 \\times 1, \\quad 0! = 1$</div>

<h3>תמורות (סדר חשוב)</h3>
<div class="formula-box">$P(n,k) = \\frac{n!}{(n-k)!}$</div>
<p>מספר הדרכים לבחור $k$ פריטים מתוך $n$ כשהסדר חשוב.</p>

<h3>צירופים (סדר לא חשוב)</h3>
<div class="formula-box">$\\binom{n}{k} = C(n,k) = \\frac{n!}{k!(n-k)!}$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>כמה דרכים לבחור 3 תלמידים מתוך 10 לוועדה?</p>
<p>$\\binom{10}{3} = \\frac{10!}{3! \\cdot 7!} = \\frac{10 \\cdot 9 \\cdot 8}{3 \\cdot 2 \\cdot 1} = 120$</p>
</div>`,
        questions: [
            {
                q: 'מהו $5!$?',
                options: ['$25$', '$120$', '$60$', '$5$'],
                correct: 1,
                explanation: '$5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$.'
            },
            {
                q: 'כמה דרכים לסדר 4 ספרים על מדף?',
                options: ['$4$', '$16$', '$24$', '$256$'],
                correct: 2,
                explanation: '$4! = 24$ תמורות.'
            },
            {
                q: '$\\binom{6}{2} = ?$',
                options: ['$12$', '$15$', '$30$', '$6$'],
                correct: 1,
                explanation: '$\\binom{6}{2} = \\frac{6!}{2!4!} = \\frac{30}{2} = 15$.'
            },
            {
                q: 'יש 3 חולצות ו-4 מכנסיים. כמה שילובים?',
                options: ['$7$', '$12$', '$24$', '$1$'],
                correct: 1,
                explanation: 'עקרון הכפל: $3 \\times 4 = 12$.'
            },
            {
                q: '$\\binom{n}{0}$ שווה תמיד ל:',
                options: ['$0$', '$1$', '$n$', 'לא מוגדר'],
                correct: 1,
                explanation: '$\\binom{n}{0} = \\frac{n!}{0! \\cdot n!} = 1$. יש דרך אחת לבחור 0 פריטים.'
            }
        ]
    },
    {
        id: 57,
        category: 'probability',
        title: 'דיאגרמות ון ועץ הסתברות',
        desc: 'כלים ויזואליים בהסתברות',
        theory: `
<h3>דיאגרמת ון</h3>
<p>ייצוג גרפי של מאורעות ושטחי חפיפה.</p>
<div class="formula-box">$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$</div>

<h3>מאורעות מנוגדים (זרים)</h3>
<p>$A$ ו-$B$ זרים אם $A \\cap B = \\emptyset$, ואז:</p>
<div class="formula-box">$P(A \\cup B) = P(A) + P(B)$</div>

<h3>עץ הסתברות</h3>
<p>כלי לחישוב הסתברות של תהליכים רב-שלביים:</p>
<p>• כל ענף = הסתברות מותנית</p>
<p>• כופלים לאורך הענפים</p>
<p>• מחברים בין ענפים שונים</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$P(A)=0.6, P(B)=0.3, P(A \\cap B)=0.1$</p>
<p>$P(A \\cup B) = 0.6 + 0.3 - 0.1 = 0.8$</p>
</div>`,
        questions: [
            {
                q: '$P(A)=0.4, P(B)=0.5, P(A \\cap B)=0.2$. מהו $P(A \\cup B)$?',
                options: ['$0.9$', '$0.7$', '$0.1$', '$1.1$'],
                correct: 1,
                explanation: '$0.4 + 0.5 - 0.2 = 0.7$.'
            },
            {
                q: 'אם $A$ ו-$B$ זרים ו-$P(A)=0.3, P(B)=0.4$, מהו $P(A \\cup B)$?',
                options: ['$0.12$', '$0.7$', '$0.1$', '$0.35$'],
                correct: 1,
                explanation: 'מאורעות זרים: $P(A \\cup B) = P(A) + P(B) = 0.7$.'
            },
            {
                q: 'בעץ הסתברות, כדי למצוא הסתברות של מסלול שלם:',
                options: ['מחברים', 'כופלים', 'מחסרים', 'מחלקים'],
                correct: 1,
                explanation: 'כופלים את ההסתברויות לאורך הענפים.'
            },
            {
                q: 'אם $P(A \\cup B) = P(A) + P(B)$, אז:',
                options: ['$A,B$ בלתי תלויים', '$A,B$ זרים', '$A \\subset B$', '$A = B$'],
                correct: 1,
                explanation: 'זה אפשרי רק כשאין חפיפה: $P(A \\cap B) = 0$, כלומר זרים.'
            },
            {
                q: '$P(A) = 0.5, P(\\overline{A} \\cap B) = 0.2, P(A \\cap B) = 0.1$. מהו $P(B)$?',
                options: ['$0.2$', '$0.3$', '$0.5$', '$0.7$'],
                correct: 1,
                explanation: '$P(B) = P(A \\cap B) + P(\\overline{A} \\cap B) = 0.1 + 0.2 = 0.3$.'
            }
        ]
    },
    {
        id: 58,
        category: 'probability',
        title: 'התפלגות נורמלית',
        desc: 'עקומת פעמון וכלל 68-95-99.7',
        theory: `
<h3>התפלגות נורמלית</h3>
<p>התפלגות בצורת פעמון, סימטרית סביב הממוצע.</p>

<h3>כלל 68-95-99.7</h3>
<div class="formula-box">$68\\%$ מהנתונים בתחום $\\mu \\pm \\sigma$</div>
<div class="formula-box">$95\\%$ מהנתונים בתחום $\\mu \\pm 2\\sigma$</div>
<div class="formula-box">$99.7\\%$ מהנתונים בתחום $\\mu \\pm 3\\sigma$</div>

<h3>ציון תקן (Z-score)</h3>
<div class="formula-box">$Z = \\frac{x - \\mu}{\\sigma}$</div>
<p>מודד כמה סטיות תקן הנתון רחוק מהממוצע.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>ציוני מבחן: $\\mu = 70, \\sigma = 10$.</p>
<p>68% מהתלמידים קיבלו בין 60 ל-80.</p>
<p>ציון תקן של תלמיד שקיבל 90: $Z = \\frac{90-70}{10} = 2$.</p>
</div>`,
        questions: [
            {
                q: 'בהתפלגות נורמלית, $\\mu=100, \\sigma=15$. $68\\%$ מהנתונים בין:',
                options: ['$70$ ל-$130$', '$85$ ל-$115$', '$55$ ל-$145$', '$90$ ל-$110$'],
                correct: 1,
                explanation: '$\\mu \\pm \\sigma = 100 \\pm 15$, כלומר $85$ עד $115$.'
            },
            {
                q: 'מהו ציון התקן של $x=80$ כש-$\\mu=70, \\sigma=5$?',
                options: ['$1$', '$2$', '$10$', '$-2$'],
                correct: 1,
                explanation: '$Z = \\frac{80-70}{5} = 2$.'
            },
            {
                q: 'ציון תקן שלילי פירושו:',
                options: ['ציון שלילי', 'מתחת לממוצע', 'טעות', 'מעל הממוצע'],
                correct: 1,
                explanation: '$Z < 0$ כש-$x < \\mu$, כלומר מתחת לממוצע.'
            },
            {
                q: '$95\\%$ מהנתונים נמצאים בתחום:',
                options: ['$\\mu \\pm \\sigma$', '$\\mu \\pm 2\\sigma$', '$\\mu \\pm 3\\sigma$', '$\\mu \\pm 0.5\\sigma$'],
                correct: 1,
                explanation: 'כלל 68-95-99.7: $95\\%$ בתחום $\\mu \\pm 2\\sigma$.'
            },
            {
                q: 'עקומת ההתפלגות הנורמלית היא:',
                options: ['אסימטרית', 'סימטרית סביב הממוצע', 'תמיד שטוחה', 'סימטרית סביב 0'],
                correct: 1,
                explanation: 'התפלגות נורמלית תמיד סימטרית סביב הממוצע $\\mu$.'
            }
        ]
    },

    // ===== MORE SEQUENCES (59-60) =====
    {
        id: 59,
        category: 'sequences',
        title: 'סדרות רקורסיביות',
        desc: 'הגדרה רקורסיבית ונוסחת נסיגה',
        theory: `
<h3>הגדרה רקורסיבית</h3>
<p>סדרה שבה כל איבר מוגדר באמצעות איברים קודמים:</p>
<div class="formula-box">$a_{n+1} = f(a_n)$</div>

<h3>דוגמאות</h3>
<p>• סדרה חשבונית: $a_{n+1} = a_n + d$</p>
<p>• סדרה הנדסית: $a_{n+1} = a_n \\cdot q$</p>
<p>• פיבונאצ'י: $a_{n+2} = a_n + a_{n+1}$, $a_1=1, a_2=1$</p>

<h3>מציאת איברים</h3>
<p>נתון $a_1$ ונוסחת הנסיגה — מחשבים צעד אחר צעד.</p>

<div class="example-box">
<div class="example-title">דוגמה — פיבונאצ'י</div>
<p>$1, 1, 2, 3, 5, 8, 13, 21, ...$</p>
<p>כל איבר = סכום שני הקודמים.</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$a_1 = 3, a_{n+1} = 2a_n - 1$</p>
<p>$a_2 = 2(3)-1 = 5$</p>
<p>$a_3 = 2(5)-1 = 9$</p>
<p>$a_4 = 2(9)-1 = 17$</p>
</div>`,
        questions: [
            {
                q: '$a_1=2, a_{n+1}=a_n+3$. מהו $a_4$?',
                options: ['$8$', '$11$', '$14$', '$9$'],
                correct: 1,
                explanation: '$a_2=5, a_3=8, a_4=11$.'
            },
            {
                q: 'בסדרת פיבונאצ\'י $1,1,2,3,5,8,...$ מהו האיבר השביעי?',
                options: ['$11$', '$12$', '$13$', '$15$'],
                correct: 2,
                explanation: '$a_7 = a_5 + a_6 = 5 + 8 = 13$.'
            },
            {
                q: '$a_1=1, a_{n+1}=a_n^2+1$. מהו $a_3$?',
                options: ['$3$', '$5$', '$2$', '$4$'],
                correct: 1,
                explanation: '$a_2 = 1+1=2. a_3 = 4+1 = 5$.'
            },
            {
                q: '$a_{n+1} = a_n + d$ מגדירה סדרה:',
                options: ['הנדסית', 'חשבונית', 'פיבונאצ\'י', 'ריבועית'],
                correct: 1,
                explanation: 'הוספת קבוע = סדרה חשבונית.'
            },
            {
                q: '$a_1=100, a_{n+1}=\\frac{a_n}{2}$. מהו $a_4$?',
                options: ['$50$', '$25$', '$12.5$', '$6.25$'],
                correct: 2,
                explanation: '$a_2=50, a_3=25, a_4=12.5$.'
            }
        ]
    },
    {
        id: 60,
        category: 'sequences',
        title: 'שימושי סדרות בחיים',
        desc: 'ריבית, גדילה, הלוואות ותכנון',
        theory: `
<h3>ריבית דריבית</h3>
<p>הפקדה עם ריבית שנתית $r$:</p>
<div class="formula-box">$A = P(1+r)^n$</div>
<p>$P$ = סכום ראשוני, $r$ = ריבית (כשבר), $n$ = מספר שנים.</p>

<h3>גדילת אוכלוסייה</h3>
<p>אם קצב הגדילה $r\\%$ בשנה:</p>
<div class="formula-box">$P_n = P_0(1+r)^n$</div>

<h3>פחת (ירידת ערך)</h3>
<div class="formula-box">$V_n = V_0(1-r)^n$</div>

<h3>החזר הלוואה קבוע</h3>
<p>זוהי סדרה הנדסית של תשלומים.</p>

<div class="example-box">
<div class="example-title">דוגמה — ריבית דריבית</div>
<p>הפקדתם 1000 ₪ בריבית 5% שנתית ל-3 שנים:</p>
<p>$A = 1000 \\cdot 1.05^3 = 1000 \\cdot 1.157625 = 1157.63$ ₪</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה — פחת</div>
<p>מכונית בשווי 100,000 ₪ מאבדת 15% מערכה כל שנה:</p>
<p>אחרי 3 שנים: $100000 \\cdot 0.85^3 = 61412.5$ ₪</p>
</div>`,
        questions: [
            {
                q: 'הפקדה של 5000 ₪ בריבית 10% לשנה. כמה אחרי שנתיים?',
                options: ['$5500$', '$6000$', '$6050$', '$5100$'],
                correct: 2,
                explanation: '$5000 \\cdot 1.1^2 = 5000 \\cdot 1.21 = 6050$.'
            },
            {
                q: 'אוכלוסייה של 1000 גדלה ב-$2\\%$ בשנה. אחרי שנה:',
                options: ['$1002$', '$1020$', '$1200$', '$1100$'],
                correct: 1,
                explanation: '$1000 \\cdot 1.02 = 1020$.'
            },
            {
                q: 'מכשיר בשווי 2000 ₪ מאבד $20\\%$ בשנה. ערכו אחרי שנתיים:',
                options: ['$1200$', '$1280$', '$1600$', '$1000$'],
                correct: 1,
                explanation: '$2000 \\cdot 0.8^2 = 2000 \\cdot 0.64 = 1280$.'
            },
            {
                q: 'ריבית דריבית שונה מריבית פשוטה כי:',
                options: ['היא יותר נמוכה', 'הריבית מתווספת לקרן', 'היא קבועה', 'אין הבדל'],
                correct: 1,
                explanation: 'בריבית דריבית, הריבית מצטברת על הקרן + הריביות הקודמות.'
            },
            {
                q: 'אם $A = P(1.05)^{10}$, מהי הריבית השנתית?',
                options: ['$10\\%$', '$5\\%$', '$1.05\\%$', '$50\\%$'],
                correct: 1,
                explanation: '$1 + r = 1.05 \\Rightarrow r = 0.05 = 5\\%$.'
            }
        ]
    },

    // ===== שיעורים 61-80: שיעורים נוספים עם הסברים מפורטים =====

    {
        id: 61,
        category: 'sequences',
        title: 'סכום סדרה חשבונית',
        desc: 'נוסחאות סכום וישומים',
        theory: `
<h3>מהו סכום סדרה חשבונית?</h3>
<p>כשרוצים לחבר את כל האיברים בסדרה חשבונית, לא צריך לחבר אחד אחד. יש נוסחה חכמה!</p>
<p>הרעיון: אם נחבר את האיבר הראשון עם האחרון, השני עם הלפני-אחרון, וכן הלאה — כל זוג נותן את אותו סכום.</p>

<div class="formula-box">$$S_n = \\frac{n(a_1 + a_n)}{2}$$</div>
<p>כאשר $n$ = מספר האיברים, $a_1$ = האיבר הראשון, $a_n$ = האיבר האחרון.</p>

<h3>נוסחה חלופית</h3>
<p>אם לא ידוע $a_n$ אבל ידוע $d$ (ההפרש):</p>
<div class="formula-box">$$S_n = \\frac{n}{2}(2a_1 + (n-1)d)$$</div>

<div class="tip-box">
<strong>טיפ:</strong> הנוסחה הראשונה נוחה כשידוע האיבר האחרון. השנייה נוחה כשידוע ההפרש.
</div>

<div class="example-box">
<div class="example-title">דוגמה — סכום 100 המספרים הראשונים</div>
<p>מצאו את $1+2+3+...+100$.</p>
<p><strong>פתרון:</strong> $a_1=1$, $a_{100}=100$, $n=100$</p>
<p>$S_{100} = \\frac{100(1+100)}{2} = \\frac{100 \\cdot 101}{2} = 5050$</p>
<p>הסיפור המפורסם: גאוס הצעיר פתר את זה בכיתה א' תוך שניות!</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה — סכום המספרים הזוגיים</div>
<p>מצאו את $2+4+6+...+50$.</p>
<p><strong>פתרון:</strong> $a_1=2$, $d=2$, $a_n=50$</p>
<p>מספר איברים: $n = \\frac{50-2}{2}+1 = 25$</p>
<p>$S_{25} = \\frac{25(2+50)}{2} = \\frac{25 \\cdot 52}{2} = 650$</p>
</div>
        `,
        questions: [
            {
                q: 'מהו סכום הסדרה $3,7,11,...,43$?',
                options: ['$253$', '$230$', '$276$', '$210$'],
                correct: 0,
                explanation: '$d=4$, $n = \\frac{43-3}{4}+1 = 11$. $S = \\frac{11(3+43)}{2} = \\frac{11 \\cdot 46}{2} = 253$.'
            },
            {
                q: 'סכום 20 האיברים הראשונים של הסדרה $5,8,11,...$ הוא:',
                options: ['$670$', '$580$', '$700$', '$530$'],
                correct: 0,
                explanation: '$S_{20} = \\frac{20}{2}(2 \\cdot 5 + 19 \\cdot 3) = 10(10+57) = 670$.'
            },
            {
                q: 'אם $S_n = \\frac{n(a_1+a_n)}{2}$, מה הסכום כש-$a_1=1, a_n=99, n=50$?',
                options: ['$2500$', '$4950$', '$5000$', '$2450$'],
                correct: 0,
                explanation: '$S = \\frac{50(1+99)}{2} = \\frac{50 \\cdot 100}{2} = 2500$.'
            },
            {
                q: 'סכום כל המספרים האי-זוגיים מ-1 עד 19 הוא:',
                options: ['$100$', '$90$', '$110$', '$81$'],
                correct: 0,
                explanation: '$1+3+5+...+19$: $n=10$, $S = \\frac{10(1+19)}{2} = 100$. (סכום $n$ אי-זוגיים ראשונים = $n^2$!)'
            },
            {
                q: 'בסדרה חשבונית $S_{10}=155$ ו-$a_1=2$. מהו $d$?',
                options: ['$3$', '$2.5$', '$4$', '$3.5$'],
                correct: 0,
                explanation: '$155 = \\frac{10}{2}(2 \\cdot 2 + 9d) = 5(4+9d)$. $31 = 4+9d \\Rightarrow d=3$.'
            }
        ]
    },
    {
        id: 62,
        category: 'sequences',
        title: 'סכום סדרה הנדסית',
        desc: 'נוסחאות סכום סדרה הנדסית וסדרה אינסופית',
        theory: `
<h3>סכום סדרה הנדסית סופית</h3>
<p>בסדרה הנדסית כל איבר מוכפל ב-$q$ (מנה). סכום $n$ איברים ראשונים:</p>
<div class="formula-box">$$S_n = a_1 \\cdot \\frac{q^n - 1}{q - 1} \\quad (q \\neq 1)$$</div>

<h3>למה זה עובד?</h3>
<p>אם נכפול את $S_n$ ב-$q$, נקבל את אותם איברים — רק מוזזים בצעד אחד. חיסור שני הביטויים מבטל את רוב האיברים!</p>
<p>$S_n = a_1 + a_1 q + a_1 q^2 + ... + a_1 q^{n-1}$</p>
<p>$qS_n = a_1 q + a_1 q^2 + ... + a_1 q^n$</p>
<p>חיסור: $S_n - qS_n = a_1 - a_1 q^n$</p>

<h3>סדרה הנדסית אינסופית (סכום אינסופי)</h3>
<p>כאשר $|q| < 1$, הסדרה מתכנסת ויש לה סכום סופי:</p>
<div class="formula-box">$$S_\\infty = \\frac{a_1}{1-q} \\quad (|q| < 1)$$</div>

<div class="tip-box">
<strong>למה זה עובד?</strong> כש-$|q|<1$, האיברים הולכים וקטנים עד שהם "נעלמים". למשל, $\\frac{1}{2}+\\frac{1}{4}+\\frac{1}{8}+... = 1$.
</div>

<div class="example-box">
<div class="example-title">דוגמה — סכום סופי</div>
<p>$S_5$ של הסדרה $2, 6, 18, ...$</p>
<p>$a_1=2$, $q=3$, $n=5$</p>
<p>$S_5 = 2 \\cdot \\frac{3^5-1}{3-1} = 2 \\cdot \\frac{242}{2} = 242$</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה — סכום אינסופי</div>
<p>$S_\\infty$ של $10 + 5 + 2.5 + ...$</p>
<p>$a_1=10$, $q=0.5$</p>
<p>$S_\\infty = \\frac{10}{1-0.5} = 20$</p>
</div>
        `,
        questions: [
            {
                q: 'סכום 4 האיברים הראשונים של $3, 6, 12, 24,...$:',
                options: ['$45$', '$48$', '$42$', '$36$'],
                correct: 0,
                explanation: '$q=2$. $S_4 = 3 \\cdot \\frac{2^4-1}{2-1} = 3 \\cdot 15 = 45$.'
            },
            {
                q: 'מהו $S_\\infty$ של $8 + 4 + 2 + 1 + ...$?',
                options: ['$16$', '$15$', '$12$', '$\\infty$'],
                correct: 0,
                explanation: '$q = 0.5$, $S_\\infty = \\frac{8}{1-0.5} = 16$.'
            },
            {
                q: 'באיזה תנאי לסדרה הנדסית אינסופית יש סכום סופי?',
                options: ['$|q|<1$', '$q>0$', '$q<1$', '$|q|>1$'],
                correct: 0,
                explanation: 'רק כש-$|q|<1$ האיברים הולכים ומתאפסים, ולכן הסכום מתכנס.'
            },
            {
                q: '$1+\\frac{1}{3}+\\frac{1}{9}+\\frac{1}{27}+... = $?',
                options: ['$\\frac{3}{2}$', '$\\frac{4}{3}$', '$2$', '$3$'],
                correct: 0,
                explanation: '$a_1=1$, $q=\\frac{1}{3}$. $S = \\frac{1}{1-\\frac{1}{3}} = \\frac{1}{\\frac{2}{3}} = \\frac{3}{2}$.'
            },
            {
                q: '$S_6$ של הסדרה $1, -2, 4, -8, ...$:',
                options: ['$-21$', '$21$', '$-15$', '$15$'],
                correct: 0,
                explanation: '$q=-2$. $S_6 = 1 \\cdot \\frac{(-2)^6-1}{-2-1} = \\frac{63}{-3} = -21$.'
            }
        ]
    },
    {
        id: 63,
        category: 'sequences',
        title: 'מציאת איבר כללי',
        desc: 'בניית נוסחה לאיבר ה-n בסדרה',
        theory: `
<h3>מהי נוסחת האיבר הכללי?</h3>
<p>נוסחת האיבר הכללי היא "מתכון" שנותן לנו כל איבר בסדרה לפי מספרו. במקום לספור איבר אחרי איבר, נציב ישר את המיקום ומקבלים את הערך.</p>

<h3>סדרה חשבונית</h3>
<div class="formula-box">$$a_n = a_1 + (n-1)d$$</div>
<p><strong>הסבר:</strong> מתחילים מ-$a_1$ ומוסיפים $d$ פעמים $(n-1)$ (כי מהאיבר הראשון לאיבר ה-$n$ עושים $n-1$ צעדים).</p>

<h3>סדרה הנדסית</h3>
<div class="formula-box">$$a_n = a_1 \\cdot q^{n-1}$$</div>
<p><strong>הסבר:</strong> מתחילים מ-$a_1$ וכופלים ב-$q$ פעמים $(n-1)$.</p>

<h3>איך מוצאים נוסחה מסדרה שנתונה?</h3>
<p>1. בדקו אם ההפרשים קבועים → סדרה חשבונית</p>
<p>2. בדקו אם היחסים קבועים → סדרה הנדסית</p>
<p>3. אחרת — נסו למצוא חוקיות אחרת (ריבועית, פיבונאצ'ית וכו')</p>

<div class="example-box">
<div class="example-title">דוגמה — מציאת נוסחה לסדרה חשבונית</div>
<p>הסדרה: $7, 11, 15, 19, ...$</p>
<p><strong>פתרון:</strong> $a_1 = 7$, $d = 11-7 = 4$</p>
<p>$a_n = 7 + (n-1) \\cdot 4 = 7 + 4n - 4 = 4n + 3$</p>
<p><strong>בדיקה:</strong> $a_1 = 4(1)+3 = 7$ ✓, $a_3 = 4(3)+3 = 15$ ✓</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה — מציאת נוסחה לסדרה הנדסית</div>
<p>הסדרה: $5, 15, 45, 135, ...$</p>
<p><strong>פתרון:</strong> $a_1 = 5$, $q = \\frac{15}{5} = 3$</p>
<p>$a_n = 5 \\cdot 3^{n-1}$</p>
</div>

<div class="tip-box">
<strong>טיפ:</strong> תמיד בדקו את הנוסחה שלכם על 2-3 איברים ידועים!
</div>
        `,
        questions: [
            {
                q: 'נוסחת האיבר הכללי של $2, 9, 16, 23,...$:',
                options: ['$a_n = 7n - 5$', '$a_n = 7n + 2$', '$a_n = 7n - 2$', '$a_n = 2n + 7$'],
                correct: 0,
                explanation: '$d=7$, $a_n = 2+(n-1) \\cdot 7 = 7n-5$. בדיקה: $a_1=7(1)-5=2$ ✓'
            },
            {
                q: 'מהו האיבר ה-8 בסדרה $3, 12, 48, ...$?',
                options: ['$49152$', '$24576$', '$12288$', '$36864$'],
                correct: 0,
                explanation: '$q=4$. $a_8 = 3 \\cdot 4^7 = 3 \\cdot 16384 = 49152$.'
            },
            {
                q: 'בסדרה חשבונית $a_5=20$ ו-$a_{10}=45$. מהו $d$?',
                options: ['$5$', '$4$', '$3$', '$6$'],
                correct: 0,
                explanation: '$a_{10}-a_5 = 5d \\Rightarrow 45-20 = 5d \\Rightarrow d=5$.'
            },
            {
                q: 'באיזו סדרה הנוסחה היא $a_n = 3 \\cdot 2^{n-1}$?',
                options: ['$3, 6, 12, 24, ...$', '$3, 5, 7, 9, ...$', '$2, 6, 18, 54, ...$', '$3, 9, 27, 81, ...$'],
                correct: 0,
                explanation: '$a_1=3 \\cdot 2^0=3$, $a_2=3 \\cdot 2^1=6$, $a_3=3 \\cdot 2^2=12$.'
            },
            {
                q: 'הסדרה $1, 4, 9, 16, 25, ...$ — מהי נוסחת האיבר הכללי?',
                options: ['$a_n = n^2$', '$a_n = 2n+1$', '$a_n = 3n-2$', '$a_n = n(n+1)$'],
                correct: 0,
                explanation: 'אלו הם הריבועים השלמים: $1^2, 2^2, 3^2, ...$, לכן $a_n = n^2$.'
            }
        ]
    },
    {
        id: 64,
        category: 'sequences',
        title: 'סדרות מונוטוניות וחסומות',
        desc: 'עלייה, ירידה, חסמים והתכנסות',
        theory: `
<h3>מונוטוניות של סדרה</h3>
<p><strong>סדרה עולה:</strong> $a_{n+1} > a_n$ לכל $n$ — כל איבר גדול מקודמו.</p>
<p><strong>סדרה יורדת:</strong> $a_{n+1} < a_n$ לכל $n$ — כל איבר קטן מקודמו.</p>
<p>סדרה שהיא עולה או יורדת נקראת <strong>מונוטונית</strong>.</p>

<h3>איך בודקים מונוטוניות?</h3>
<p>שיטה 1: חשבו $a_{n+1} - a_n$ — אם חיובי → עולה, שלילי → יורדת.</p>
<p>שיטה 2 (לסדרה חיובית): חשבו $\\frac{a_{n+1}}{a_n}$ — אם > 1 → עולה, < 1 → יורדת.</p>

<h3>סדרה חסומה</h3>
<p><strong>חסומה מלעיל:</strong> יש מספר $M$ כך ש-$a_n \\leq M$ לכל $n$.</p>
<p><strong>חסומה מלרע:</strong> יש מספר $m$ כך ש-$a_n \\geq m$ לכל $n$.</p>
<p><strong>חסומה:</strong> חסומה גם מלעיל וגם מלרע.</p>

<div class="tip-box">
<strong>משפט חשוב:</strong> סדרה מונוטונית וחסומה — מתכנסת! (כלומר, יש לה גבול)
</div>

<div class="example-box">
<div class="example-title">דוגמה — בדיקת מונוטוניות</div>
<p>$a_n = \\frac{n}{n+1}$</p>
<p>$a_{n+1} - a_n = \\frac{n+1}{n+2} - \\frac{n}{n+1} = \\frac{(n+1)^2 - n(n+2)}{(n+2)(n+1)} = \\frac{1}{(n+2)(n+1)} > 0$</p>
<p>ההפרש חיובי → הסדרה <strong>עולה</strong>.</p>
<p>גם: $a_n = \\frac{n}{n+1} < 1$ לכל $n$, ו-$a_n > 0$ → הסדרה חסומה.</p>
</div>
        `,
        questions: [
            {
                q: 'הסדרה $a_n = \\frac{1}{n}$ היא:',
                options: ['יורדת וחסומה', 'עולה וחסומה', 'יורדת ולא חסומה', 'עולה ולא חסומה'],
                correct: 0,
                explanation: '$\\frac{1}{n+1} < \\frac{1}{n}$ → יורדת. $0 < a_n \\leq 1$ → חסומה.'
            },
            {
                q: 'הסדרה $a_n = 2n+1$ היא:',
                options: ['עולה ולא חסומה', 'עולה וחסומה', 'יורדת', 'לא מונוטונית'],
                correct: 0,
                explanation: '$a_{n+1}-a_n = 2 > 0$ → עולה. $a_n \\to \\infty$ → לא חסומה מלעיל.'
            },
            {
                q: 'אם $a_{n+1} - a_n < 0$ לכל $n$, הסדרה היא:',
                options: ['יורדת', 'עולה', 'קבועה', 'לא ניתן לדעת'],
                correct: 0,
                explanation: 'הפרש שלילי אומר שכל איבר קטן מקודמו — סדרה יורדת.'
            },
            {
                q: 'הסדרה $a_n = (-1)^n$ היא:',
                options: ['לא מונוטונית', 'עולה', 'יורדת', 'קבועה'],
                correct: 0,
                explanation: '$a_1=-1, a_2=1, a_3=-1, ...$ — הסדרה קופצת בין $-1$ ל-$1$, לא מונוטונית.'
            },
            {
                q: 'סדרה מונוטונית עולה וחסומה מלעיל:',
                options: ['מתכנסת', 'מתבדרת', 'יכולה להיות שניהם', 'אינסופית'],
                correct: 0,
                explanation: 'זהו משפט יסודי: סדרה מונוטונית וחסומה בהכרח מתכנסת לגבול.'
            }
        ]
    },
    {
        id: 65,
        category: 'probability',
        title: 'עקרון הכפל והחיבור',
        desc: 'עקרונות ספירה בסיסיים',
        theory: `
<h3>עקרון הכפל</h3>
<p>כאשר עושים <strong>רצף של בחירות</strong> — כופלים את מספר האפשרויות.</p>
<div class="formula-box">אם יש $m$ אפשרויות לשלב ראשון ו-$n$ אפשרויות לשלב שני, סה"כ $m \\times n$ אפשרויות.</div>

<p><strong>למה?</strong> לכל אחת מ-$m$ האפשרויות בשלב ראשון, יש $n$ אפשרויות בשלב שני. כל שילוב נותן תוצאה שונה.</p>

<h3>עקרון החיבור</h3>
<p>כאשר בוחרים <strong>אחת מכמה אפשרויות שונות</strong> (ללא חפיפה) — מחברים.</p>
<div class="formula-box">אם אפשר להגיע בדרך A ($m$ אופנים) או בדרך B ($n$ אופנים), סה"כ $m + n$.</div>

<div class="tip-box">
<strong>כלל אצבע:</strong> "וגם" = כפל, "או" = חיבור.
</div>

<div class="example-box">
<div class="example-title">דוגמה — עקרון הכפל</div>
<p>בחירת ארוחה: 3 מנות ראשונות, 5 מנות עיקריות, 4 קינוחים.</p>
<p>מספר הארוחות השונות: $3 \\times 5 \\times 4 = 60$.</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה — עקרון החיבור</div>
<p>מהעיר A לעיר B: 3 כבישים או 2 קווי רכבת.</p>
<p>מספר דרכי הגעה: $3 + 2 = 5$.</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה — שילוב</div>
<p>כמה מספרים דו-ספרתיים זוגיים יש?</p>
<p>ספרת עשרות: 9 אפשרויות (1-9). ספרת אחדות: 5 אפשרויות (0,2,4,6,8).</p>
<p>סה"כ: $9 \\times 5 = 45$ מספרים.</p>
</div>
        `,
        questions: [
            {
                q: 'ל-3 חולצות ו-4 מכנסיים. כמה שילובי לבוש יש?',
                options: ['$12$', '$7$', '$24$', '$10$'],
                correct: 0,
                explanation: 'עקרון הכפל: $3 \\times 4 = 12$.'
            },
            {
                q: 'קוד PIN בן 4 ספרות (0-9). כמה קודים שונים?',
                options: ['$10000$', '$1000$', '$5040$', '$40$'],
                correct: 0,
                explanation: '$10 \\times 10 \\times 10 \\times 10 = 10^4 = 10000$.'
            },
            {
                q: 'מ-A ל-B: 3 כבישים. מ-B ל-C: 4 כבישים. מסלולים מ-A ל-C דרך B:',
                options: ['$12$', '$7$', '$24$', '$10$'],
                correct: 0,
                explanation: '$3 \\times 4 = 12$ מסלולים (עקרון הכפל — שלב אחרי שלב).'
            },
            {
                q: 'כמה מספרים תלת-ספרתיים ניתן ליצור מהספרות 1-5 ללא חזרה?',
                options: ['$60$', '$125$', '$15$', '$120$'],
                correct: 0,
                explanation: '$5 \\times 4 \\times 3 = 60$ (ללא חזרה — כל פעם ספרה אחת פחות).'
            },
            {
                q: 'מועדון ספר: בוחרים רומן (8 ברשימה) או ספר עיון (5 ברשימה). כמה ספרים לבחירה?',
                options: ['$13$', '$40$', '$8$', '$5$'],
                correct: 0,
                explanation: 'עקרון החיבור: $8 + 5 = 13$ (בוחרים ספר מסוג אחד או השני).'
            }
        ]
    },
    {
        id: 66,
        category: 'probability',
        title: 'הסתברות משלימה',
        desc: 'שימוש בהשלמה ל-1 לפישוט חישובים',
        theory: `
<h3>הרעיון</h3>
<p>לפעמים קל יותר לחשב את ההסתברות שמשהו <strong>לא</strong> יקרה, ולהפחית מ-1:</p>
<div class="formula-box">$$P(A) = 1 - P(\\overline{A})$$</div>
<p>כאשר $\\overline{A}$ הוא "לא $A$" (המאורע המשלים).</p>

<h3>מתי כדאי להשתמש?</h3>
<p>כשהמאורע כולל מילים כמו "לפחות אחד", "לא כולם", "לפחות פעם אחת" — בדרך כלל קל יותר לחשב את ההשלמה.</p>

<div class="tip-box">
<strong>דוגמה מפתח:</strong><br>
"לפחות אחד" → ההשלמה: "אף אחד לא"<br>
"לפחות אחד שונה" → ההשלמה: "כולם אותו דבר"
</div>

<div class="example-box">
<div class="example-title">דוגמה — הטלת 3 קוביות</div>
<p>מה ההסתברות לקבל <strong>לפחות 6 אחד</strong> בהטלת 3 קוביות?</p>
<p><strong>חישוב ישיר:</strong> מסובך (6 בדיוק באחת, בדיוק בשתיים, בשלוש...)</p>
<p><strong>בהשלמה:</strong></p>
<p>$P(\\text{אף 6 לא}) = \\frac{5}{6} \\cdot \\frac{5}{6} \\cdot \\frac{5}{6} = \\frac{125}{216}$</p>
<p>$P(\\text{לפחות 6 אחד}) = 1 - \\frac{125}{216} = \\frac{91}{216} \\approx 0.421$</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה — בעיית יום הולדת</div>
<p>בכיתה של 30 תלמידים, מה הסיכוי ש<strong>לפחות לשניים</strong> יש אותו יום הולדת?</p>
<p>ההשלמה: <strong>לכולם</strong> ימי הולדת שונים.</p>
<p>$P(\\text{כולם שונים}) = \\frac{365}{365} \\cdot \\frac{364}{365} \\cdot \\frac{363}{365} \\cdots \\frac{336}{365} \\approx 0.294$</p>
<p>$P(\\text{לפחות זוג}) = 1 - 0.294 = 0.706$ (מעל 70%!)</p>
</div>
        `,
        questions: [
            {
                q: 'אם $P(A) = 0.3$, מהו $P(\\overline{A})$?',
                options: ['$0.7$', '$0.3$', '$1.3$', '$0$'],
                correct: 0,
                explanation: '$P(\\overline{A}) = 1 - P(A) = 1 - 0.3 = 0.7$.'
            },
            {
                q: 'הטלת 2 קוביות. מה ההסתברות לקבל לפחות 6 אחד?',
                options: ['$\\frac{11}{36}$', '$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{25}{36}$'],
                correct: 0,
                explanation: '$P(\\text{אף 6}) = \\frac{5}{6} \\cdot \\frac{5}{6} = \\frac{25}{36}$. $P(\\text{לפחות 6}) = 1-\\frac{25}{36} = \\frac{11}{36}$.'
            },
            {
                q: '"הסתברות לפחות אחד" שווה ל:',
                options: ['$1-P(\\text{אף אחד לא})$', '$P(\\text{בדיוק 1})$', '$1-P(\\text{כולם})$', '$P(\\text{כולם})$'],
                correct: 0,
                explanation: 'לפחות אחד = לא "אף אחד לא". $P(\\geq 1) = 1 - P(0)$.'
            },
            {
                q: 'שולפים קלף מחפיסה. $P(\\text{לא אס}) = ?$',
                options: ['$\\frac{48}{52}$', '$\\frac{4}{52}$', '$\\frac{1}{13}$', '$\\frac{51}{52}$'],
                correct: 0,
                explanation: '$P(\\text{אס}) = \\frac{4}{52}$. $P(\\text{לא אס}) = 1 - \\frac{4}{52} = \\frac{48}{52}$.'
            },
            {
                q: 'יורים 3 פעמים, סיכוי פגיעה 0.4. ההסתברות לפגוע לפחות פעם אחת:',
                options: ['$0.784$', '$0.216$', '$0.4$', '$0.6$'],
                correct: 0,
                explanation: '$P(\\text{אף פגיעה}) = 0.6^3 = 0.216$. $P(\\geq 1) = 1-0.216 = 0.784$.'
            }
        ]
    },
    {
        id: 67,
        category: 'probability',
        title: 'תוחלת (ממוצע צפוי)',
        desc: 'חישוב תוחלת ושימושים',
        theory: `
<h3>מהי תוחלת?</h3>
<p>התוחלת היא הערך הממוצע שנצפה לקבל אם נחזור על ניסוי פעמים רבות. זהו "מרכז הכובד" של ההתפלגות.</p>
<div class="formula-box">$$E(X) = \\sum x_i \\cdot P(x_i)$$</div>
<p>כלומר: כופלים כל ערך אפשרי בהסתברות שלו, ומחברים.</p>

<h3>למה זה חשוב?</h3>
<p>תוחלת עוזרת לנו להעריך אם "משתלם" לשחק במשחק, לקנות ביטוח, או להשקיע.</p>
<p>אם התוחלת חיובית — בממוצע מרוויחים. שלילית — בממוצע מפסידים.</p>

<h3>תכונות התוחלת</h3>
<p>• $E(aX + b) = aE(X) + b$</p>
<p>• $E(X+Y) = E(X) + E(Y)$ (תמיד נכון!)</p>

<div class="example-box">
<div class="example-title">דוגמה — הטלת קובייה</div>
<p>$E(X) = 1 \\cdot \\frac{1}{6} + 2 \\cdot \\frac{1}{6} + 3 \\cdot \\frac{1}{6} + 4 \\cdot \\frac{1}{6} + 5 \\cdot \\frac{1}{6} + 6 \\cdot \\frac{1}{6} = \\frac{21}{6} = 3.5$</p>
<p>בממוצע, נקבל 3.5 (אף שזה ערך שלא יכול ממש לצאת!).</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה — משחק הגינות</div>
<p>משלמים 5 ₪ להשתתפות. מטילים מטבע — עץ: מקבלים 10 ₪. פלי: לא מקבלים כלום.</p>
<p>$E(\\text{רווח}) = 10 \\cdot 0.5 + 0 \\cdot 0.5 - 5 = 5 - 5 = 0$ ₪</p>
<p>זהו "משחק הוגן" — תוחלת 0.</p>
</div>
        `,
        questions: [
            {
                q: 'תוחלת הטלת קובייה הוגנת:',
                options: ['$3.5$', '$3$', '$4$', '$6$'],
                correct: 0,
                explanation: '$E = \\frac{1+2+3+4+5+6}{6} = \\frac{21}{6} = 3.5$.'
            },
            {
                q: 'הגרלה: סיכוי 1% לזכות ב-500₪, עלות כרטיס 10₪. התוחלת:',
                options: ['$-5$', '$5$', '$0$', '$490$'],
                correct: 0,
                explanation: '$E = 0.01 \\cdot 500 + 0.99 \\cdot 0 - 10 = 5-10 = -5$ ₪.'
            },
            {
                q: 'משחק הוגן הוא משחק שבו:',
                options: ['$E=0$', '$E>0$', '$E<0$', '$P=0.5$'],
                correct: 0,
                explanation: 'משחק הוגן = תוחלת רווח אפסית. לא מרוויחים ולא מפסידים בממוצע.'
            },
            {
                q: 'אם $E(X)=4$, מהו $E(3X+2)$?',
                options: ['$14$', '$12$', '$18$', '$6$'],
                correct: 0,
                explanation: '$E(3X+2) = 3E(X)+2 = 3(4)+2 = 14$.'
            },
            {
                q: 'מטילים 2 קוביות. תוחלת הסכום:',
                options: ['$7$', '$6$', '$8$', '$3.5$'],
                correct: 0,
                explanation: '$E(X_1+X_2) = E(X_1)+E(X_2) = 3.5+3.5 = 7$.'
            }
        ]
    },
    {
        id: 68,
        category: 'probability',
        title: 'הסתברות בינומית',
        desc: 'ניסוי ברנולי וההתפלגות הבינומית',
        theory: `
<h3>ניסוי ברנולי</h3>
<p>ניסוי עם שתי תוצאות אפשריות בלבד: <strong>הצלחה</strong> (בהסתברות $p$) או <strong>כישלון</strong> (בהסתברות $q = 1-p$).</p>

<h3>ההתפלגות הבינומית</h3>
<p>חוזרים על ניסוי ברנולי $n$ פעמים באופן בלתי תלוי. מה ההסתברות לקבל בדיוק $k$ הצלחות?</p>
<div class="formula-box">$$P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$$</div>
<p>כאשר $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ (מקדם בינומי).</p>

<h3>הסבר הנוסחה</h3>
<p>• $p^k$ — הסתברות ל-$k$ הצלחות</p>
<p>• $(1-p)^{n-k}$ — הסתברות ל-$n-k$ כישלונות</p>
<p>• $\\binom{n}{k}$ — מספר הדרכים לבחור <strong>אילו</strong> $k$ מתוך $n$ הניסויים יהיו הצלחות</p>

<div class="tip-box">
<strong>תוחלת ושונות:</strong> $E(X) = np$, $\\sigma^2(X) = np(1-p)$
</div>

<div class="example-box">
<div class="example-title">דוגמה — הטלת 5 מטבעות</div>
<p>מה ההסתברות לקבל בדיוק 3 עצים?</p>
<p>$n=5$, $k=3$, $p=0.5$</p>
<p>$P(X=3) = \\binom{5}{3} \\cdot 0.5^3 \\cdot 0.5^2 = 10 \\cdot \\frac{1}{32} = \\frac{10}{32} = 0.3125$</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה — בחינה אמריקאית</div>
<p>בחינה עם 4 שאלות, כל אחת עם 4 תשובות. מנחשים הכל. מה הסיכוי לענות נכון על בדיוק 2?</p>
<p>$P(X=2) = \\binom{4}{2} \\cdot (\\frac{1}{4})^2 \\cdot (\\frac{3}{4})^2 = 6 \\cdot \\frac{1}{16} \\cdot \\frac{9}{16} = \\frac{54}{256} \\approx 0.211$</p>
</div>
        `,
        questions: [
            {
                q: '$\\binom{5}{2} = $?',
                options: ['$10$', '$20$', '$5$', '$25$'],
                correct: 0,
                explanation: '$\\binom{5}{2} = \\frac{5!}{2!3!} = \\frac{120}{2 \\cdot 6} = 10$.'
            },
            {
                q: 'מטילים מטבע 4 פעמים. הסתברות ל-4 עצים:',
                options: ['$\\frac{1}{16}$', '$\\frac{1}{4}$', '$\\frac{4}{16}$', '$\\frac{1}{2}$'],
                correct: 0,
                explanation: '$P = \\binom{4}{4} \\cdot 0.5^4 = 1 \\cdot \\frac{1}{16} = \\frac{1}{16}$.'
            },
            {
                q: 'בניסוי בינומי $n=10, p=0.3$, התוחלת היא:',
                options: ['$3$', '$7$', '$0.3$', '$30$'],
                correct: 0,
                explanation: '$E = np = 10 \\cdot 0.3 = 3$.'
            },
            {
                q: 'מה $(1-p)^{n-k}$ מייצג בנוסחה הבינומית?',
                options: ['הסתברות הכישלונות', 'הסתברות ההצלחות', 'מספר הניסויים', 'מקדם בינומי'],
                correct: 0,
                explanation: '$(1-p)^{n-k}$ = הסתברות לקבל $n-k$ כישלונות.'
            },
            {
                q: 'סיכוי פגיעה 0.6. יורים 3 פעמים. $P(\\text{בדיוק 2 פגיעות})$:',
                options: ['$0.432$', '$0.36$', '$0.648$', '$0.288$'],
                correct: 0,
                explanation: '$P = \\binom{3}{2} \\cdot 0.6^2 \\cdot 0.4^1 = 3 \\cdot 0.36 \\cdot 0.4 = 0.432$.'
            }
        ]
    },
    {
        id: 69,
        category: 'geometry',
        title: 'וקטורים במישור',
        desc: 'חיבור, חיסור וכפל בסקלר',
        theory: `
<h3>מהו וקטור?</h3>
<p>וקטור הוא גודל שיש לו <strong>כיוון וגודל</strong> (בניגוד לסקלר שיש לו רק גודל). מסומן $\\vec{v}$ או $\\vec{AB}$.</p>
<p>וקטור במישור מיוצג כזוג מספרים: $\\vec{v} = (a, b)$.</p>

<h3>פעולות על וקטורים</h3>
<p><strong>חיבור:</strong> $(a_1, b_1) + (a_2, b_2) = (a_1+a_2, b_1+b_2)$</p>
<p><strong>חיסור:</strong> $(a_1, b_1) - (a_2, b_2) = (a_1-a_2, b_1-b_2)$</p>
<p><strong>כפל בסקלר:</strong> $k \\cdot (a, b) = (ka, kb)$</p>
<p><strong>אורך (גודל):</strong> $|\\vec{v}| = \\sqrt{a^2 + b^2}$</p>

<h3>וקטור בין שתי נקודות</h3>
<div class="formula-box">$$\\vec{AB} = B - A = (x_B - x_A, y_B - y_A)$$</div>

<div class="tip-box">
<strong>וקטורים מקבילים:</strong> $\\vec{u} \\parallel \\vec{v}$ אם ורק אם $\\vec{u} = k\\vec{v}$ עבור סקלר $k$ כלשהו.
</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$\\vec{u} = (3, -1)$, $\\vec{v} = (2, 4)$</p>
<p>$\\vec{u} + \\vec{v} = (5, 3)$</p>
<p>$2\\vec{u} = (6, -2)$</p>
<p>$|\\vec{u}| = \\sqrt{9+1} = \\sqrt{10}$</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה — וקטור בין נקודות</div>
<p>$A(1, 3)$, $B(4, 7)$</p>
<p>$\\vec{AB} = (4-1, 7-3) = (3, 4)$</p>
<p>$|\\vec{AB}| = \\sqrt{9+16} = 5$</p>
</div>
        `,
        questions: [
            {
                q: '$(2,5) + (3,-1) = $?',
                options: ['$(5, 4)$', '$(5, 6)$', '$(6, 4)$', '$(1, 6)$'],
                correct: 0,
                explanation: '$(2+3, 5+(-1)) = (5, 4)$.'
            },
            {
                q: 'אורך הוקטור $(3, 4)$:',
                options: ['$5$', '$7$', '$\\sqrt{7}$', '$25$'],
                correct: 0,
                explanation: '$|\\vec{v}| = \\sqrt{3^2+4^2} = \\sqrt{9+16} = \\sqrt{25} = 5$.'
            },
            {
                q: '$\\vec{AB}$ כאשר $A(2,1), B(5,4)$:',
                options: ['$(3, 3)$', '$(7, 5)$', '$(-3, -3)$', '$(5, 4)$'],
                correct: 0,
                explanation: '$\\vec{AB} = (5-2, 4-1) = (3, 3)$.'
            },
            {
                q: '$3 \\cdot (2, -1) = $?',
                options: ['$(6, -3)$', '$(5, 2)$', '$(6, -1)$', '$(2, -3)$'],
                correct: 0,
                explanation: '$3 \\cdot (2, -1) = (3 \\cdot 2, 3 \\cdot (-1)) = (6, -3)$.'
            },
            {
                q: 'שני וקטורים מקבילים אם:',
                options: ['אחד הוא כפולה סקלרית של השני', 'הם שווים באורך', 'סכומם אפס', 'הם מאונכים'],
                correct: 0,
                explanation: '$\\vec{u} \\parallel \\vec{v}$ אם $\\vec{u} = k\\vec{v}$. כיוון זהה (או הפוך), לא בהכרח אותו אורך.'
            }
        ]
    },
    {
        id: 70,
        category: 'geometry',
        title: 'גיאומטריה של המעגל — מתקדם',
        desc: 'זוויות היקפיות, מיתרים ומשיקים',
        theory: `
<h3>זווית מרכזית וזווית היקפית</h3>
<p><strong>זווית מרכזית:</strong> קודקודה במרכז המעגל. גודלה שווה לקשת שהיא חוסמת.</p>
<p><strong>זווית היקפית:</strong> קודקודה על המעגל. גודלה <strong>חצי</strong> מהקשת שהיא חוסמת.</p>
<div class="formula-box">זווית היקפית $= \\frac{1}{2} \\times$ זווית מרכזית (על אותה קשת)</div>

<h3>משפטים חשובים</h3>
<p>• <strong>זוויות היקפיות על אותה קשת</strong> — שוות!</p>
<p>• <strong>זווית היקפית על קוטר</strong> — $90°$ (משפט תאלס)</p>
<p>• <strong>משיק למעגל</strong> — מאונך לרדיוס בנקודת ההשקה</p>

<h3>מיתר</h3>
<p>קטע ששני קצותיו על המעגל. הקוטר הוא המיתר הארוך ביותר.</p>
<p><strong>מרחק מיתר מהמרכז:</strong> אם $d$ הוא המרחק מהמרכז למיתר באורך $c$ ורדיוס $r$:</p>
<div class="formula-box">$$d = \\sqrt{r^2 - \\left(\\frac{c}{2}\\right)^2}$$</div>

<div class="example-box">
<div class="example-title">דוגמה — זווית היקפית</div>
<p>זווית מרכזית $= 80°$. הזווית ההיקפית על אותה קשת:</p>
<p>$\\frac{80°}{2} = 40°$</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה — מרחק מיתר</div>
<p>מעגל ברדיוס 10, מיתר באורך 16.</p>
<p>$d = \\sqrt{10^2 - 8^2} = \\sqrt{100-64} = \\sqrt{36} = 6$</p>
</div>
        `,
        questions: [
            {
                q: 'זווית מרכזית $= 120°$. הזווית ההיקפית על אותה קשת:',
                options: ['$60°$', '$120°$', '$240°$', '$90°$'],
                correct: 0,
                explanation: 'זווית היקפית = חצי מהזווית המרכזית על אותה קשת: $\\frac{120°}{2} = 60°$.'
            },
            {
                q: 'זווית היקפית הנשענת על קוטר שווה ל:',
                options: ['$90°$', '$180°$', '$45°$', '$60°$'],
                correct: 0,
                explanation: 'משפט תאלס: זווית היקפית על קוטר היא תמיד $90°$.'
            },
            {
                q: 'משיק למעגל יוצר עם הרדיוס זווית של:',
                options: ['$90°$', '$180°$', '$45°$', '$60°$'],
                correct: 0,
                explanation: 'המשיק מאונך לרדיוס בנקודת ההשקה — $90°$.'
            },
            {
                q: 'מעגל ברדיוס 13. מיתר באורך 24. המרחק מהמרכז:',
                options: ['$5$', '$7$', '$12$', '$1$'],
                correct: 0,
                explanation: '$d = \\sqrt{13^2 - 12^2} = \\sqrt{169-144} = \\sqrt{25} = 5$.'
            },
            {
                q: 'שתי זוויות היקפיות הנשענות על אותה קשת:',
                options: ['שוות', 'משלימות ל-$180°$', 'אחת כפולה מהשנייה', 'שונות'],
                correct: 0,
                explanation: 'כל הזוויות ההיקפיות על אותה קשת שוות — זה משפט בגיאומטריה של המעגל.'
            }
        ]
    },
    {
        id: 71,
        category: 'geometry',
        title: 'שטח ונפח — גופים מתקדמים',
        desc: 'חרוט, כדור, פירמידה',
        theory: `
<h3>חרוט</h3>
<p>חרוט = בסיס עיגולי + קודקוד.</p>
<div class="formula-box">$$V_{\\text{חרוט}} = \\frac{1}{3}\\pi r^2 h$$</div>
<p><strong>הסבר:</strong> נפח החרוט הוא בדיוק שליש מנפח הגליל עם אותו בסיס וגובה.</p>
<p>שטח המעטפת: $S = \\pi r l$ (כאשר $l$ = אורך היוצר = $\\sqrt{r^2+h^2}$)</p>

<h3>כדור</h3>
<div class="formula-box">$$V_{\\text{כדור}} = \\frac{4}{3}\\pi r^3 \\qquad S_{\\text{כדור}} = 4\\pi r^2$$</div>

<h3>פירמידה</h3>
<div class="formula-box">$$V_{\\text{פירמידה}} = \\frac{1}{3} \\cdot S_{\\text{בסיס}} \\cdot h$$</div>
<p><strong>כלל:</strong> כל גוף ש"מתחדד" לקודקוד — נפחו שליש מהגוף ה"מלא" המקביל.</p>

<div class="example-box">
<div class="example-title">דוגמה — גביע גלידה (חרוט)</div>
<p>רדיוס 3 ס"מ, גובה 10 ס"מ:</p>
<p>$V = \\frac{1}{3}\\pi \\cdot 9 \\cdot 10 = 30\\pi \\approx 94.2$ סמ"ק</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה — כדור</div>
<p>כדורגל ברדיוס 11 ס"מ:</p>
<p>$V = \\frac{4}{3}\\pi \\cdot 11^3 = \\frac{4}{3}\\pi \\cdot 1331 \\approx 5575$ סמ"ק</p>
<p>$S = 4\\pi \\cdot 121 \\approx 1521$ סמ"ר</p>
</div>
        `,
        questions: [
            {
                q: 'נפח חרוט עם $r=6$ ו-$h=10$:',
                options: ['$120\\pi$', '$360\\pi$', '$60\\pi$', '$180\\pi$'],
                correct: 0,
                explanation: '$V = \\frac{1}{3}\\pi \\cdot 36 \\cdot 10 = 120\\pi$.'
            },
            {
                q: 'שטח פנים של כדור ברדיוס 5:',
                options: ['$100\\pi$', '$500\\pi$', '$25\\pi$', '$\\frac{500\\pi}{3}$'],
                correct: 0,
                explanation: '$S = 4\\pi r^2 = 4\\pi \\cdot 25 = 100\\pi$.'
            },
            {
                q: 'נפח כדור ברדיוס 3:',
                options: ['$36\\pi$', '$27\\pi$', '$12\\pi$', '$108\\pi$'],
                correct: 0,
                explanation: '$V = \\frac{4}{3}\\pi \\cdot 27 = 36\\pi$.'
            },
            {
                q: 'נפח פירמידה מרובעת עם בסיס $6 \\times 6$ וגובה 9:',
                options: ['$108$', '$324$', '$54$', '$216$'],
                correct: 0,
                explanation: '$V = \\frac{1}{3} \\cdot 36 \\cdot 9 = 108$.'
            },
            {
                q: 'היחס בין נפח חרוט לנפח גליל עם אותו בסיס וגובה:',
                options: ['$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$', '$3$'],
                correct: 0,
                explanation: 'נפח חרוט = $\\frac{1}{3}$ נפח הגליל. זהו יחס קבוע!'
            }
        ]
    },
    {
        id: 72,
        category: 'geometry',
        title: 'הנוסחה של הרון',
        desc: 'שטח משולש לפי שלוש צלעות',
        theory: `
<h3>הבעיה</h3>
<p>נתונות שלוש צלעות של משולש: $a$, $b$, $c$. איך מחשבים את השטח בלי לדעת את הגובה?</p>

<h3>נוסחת הרון</h3>
<div class="formula-box">$$S = \\sqrt{s(s-a)(s-b)(s-c)}$$</div>
<p>כאשר $s = \\frac{a+b+c}{2}$ הוא <strong>חצי ההיקף</strong>.</p>

<h3>למה זה עובד?</h3>
<p>הנוסחה מבוססת על הקשר בין צלעות, זוויות ושטח. היא חוסכת את הצורך למצוא גובה או זווית.</p>

<div class="tip-box">
<strong>מתי להשתמש?</strong> כשנתונות 3 צלעות ולא ידוע שום גובה או זווית. זה המצב הקלאסי לנוסחת הרון.
</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>משולש עם צלעות $a=7$, $b=8$, $c=9$:</p>
<p>$s = \\frac{7+8+9}{2} = 12$</p>
<p>$S = \\sqrt{12 \\cdot 5 \\cdot 4 \\cdot 3} = \\sqrt{720} = 12\\sqrt{5} \\approx 26.83$</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה — משולש שווה-צלעות</div>
<p>צלע $a = 6$: $s = 9$</p>
<p>$S = \\sqrt{9 \\cdot 3 \\cdot 3 \\cdot 3} = \\sqrt{243} = 9\\sqrt{3} \\approx 15.59$</p>
</div>
        `,
        questions: [
            {
                q: 'שטח משולש עם צלעות $3, 4, 5$:',
                options: ['$6$', '$10$', '$12$', '$7.5$'],
                correct: 0,
                explanation: '$s=6$. $S = \\sqrt{6 \\cdot 3 \\cdot 2 \\cdot 1} = \\sqrt{36} = 6$. (משולש ישר-זווית: $\\frac{3 \\cdot 4}{2} = 6$ ✓)'
            },
            {
                q: 'מהו $s$ (חצי ההיקף) למשולש עם צלעות $5, 12, 13$?',
                options: ['$15$', '$30$', '$10$', '$13$'],
                correct: 0,
                explanation: '$s = \\frac{5+12+13}{2} = \\frac{30}{2} = 15$.'
            },
            {
                q: 'בנוסחת הרון, $s$ הוא:',
                options: ['חצי ההיקף', 'ההיקף', 'השטח', 'הגובה'],
                correct: 0,
                explanation: '$s = \\frac{a+b+c}{2}$ — חצי ההיקף.'
            },
            {
                q: 'שטח משולש שווה-צלעות עם צלע 4:',
                options: ['$4\\sqrt{3}$', '$8$', '$8\\sqrt{3}$', '$16$'],
                correct: 0,
                explanation: '$s=6$. $S=\\sqrt{6 \\cdot 2 \\cdot 2 \\cdot 2}=\\sqrt{48}=4\\sqrt{3}$.'
            },
            {
                q: 'נוסחת הרון שימושית במיוחד כאשר:',
                options: ['ידועות 3 צלעות בלבד', 'ידוע גובה', 'ידועה זווית אחת', 'המשולש ישר-זווית'],
                correct: 0,
                explanation: 'הנוסחה מיועדת למקרה שידועות רק 3 הצלעות — ללא גובה או זווית.'
            }
        ]
    },
    {
        id: 73,
        category: 'trigonometry',
        title: 'גרפים טריגונומטריים',
        desc: 'סינוס, קוסינוס — משרעת, מחזור, הזזות',
        theory: `
<h3>הפונקציה $y = A\\sin(Bx + C) + D$</h3>
<p>כל פרמטר משפיע על הגרף:</p>
<p>• <strong>$A$ (משרעת):</strong> גובה הגל. הגרף נע בין $D-|A|$ ל-$D+|A|$.</p>
<p>• <strong>$B$ (תדירות):</strong> משפיע על המחזור. $T = \\frac{2\\pi}{|B|}$.</p>
<p>• <strong>$C$ (הזזה אופקית):</strong> מזיז את הגרף ימינה/שמאלה. הזזה $= -\\frac{C}{B}$.</p>
<p>• <strong>$D$ (הזזה אנכית):</strong> מזיז את כל הגרף למעלה/למטה.</p>

<div class="formula-box">$$\\text{מחזור} = \\frac{2\\pi}{|B|} \\qquad \\text{משרעת} = |A|$$</div>

<h3>ההבדל בין sin ל-cos</h3>
<p>$\\cos(x) = \\sin(x + \\frac{\\pi}{2})$ — פשוט הזזה של $\\frac{\\pi}{2}$ שמאלה!</p>

<div class="example-box">
<div class="example-title">דוגמה — $y = 3\\sin(2x) + 1$</div>
<p>• משרעת: $|A| = 3$</p>
<p>• מחזור: $T = \\frac{2\\pi}{2} = \\pi$</p>
<p>• הזזה אנכית: למעלה 1</p>
<p>• טווח: $1-3 = -2$ עד $1+3 = 4$, כלומר $[-2, 4]$.</p>
</div>
        `,
        questions: [
            {
                q: 'המחזור של $y = \\sin(3x)$:',
                options: ['$\\frac{2\\pi}{3}$', '$3$', '$6\\pi$', '$2\\pi$'],
                correct: 0,
                explanation: '$T = \\frac{2\\pi}{|B|} = \\frac{2\\pi}{3}$.'
            },
            {
                q: 'המשרעת של $y = 4\\cos(x)$:',
                options: ['$4$', '$1$', '$2$', '$8$'],
                correct: 0,
                explanation: 'משרעת $= |A| = |4| = 4$.'
            },
            {
                q: 'הטווח של $y = 2\\sin(x) + 3$:',
                options: ['$[1, 5]$', '$[-2, 2]$', '$[1, 3]$', '$[-1, 5]$'],
                correct: 0,
                explanation: '$\\sin(x) \\in [-1,1]$ → $2\\sin(x) \\in [-2,2]$ → $+3$: $[1, 5]$.'
            },
            {
                q: '$y = \\sin(x - \\frac{\\pi}{4})$ הוא $\\sin(x)$ מוזז:',
                options: ['$\\frac{\\pi}{4}$ ימינה', '$\\frac{\\pi}{4}$ שמאלה', '$\\frac{\\pi}{4}$ למעלה', '$\\frac{\\pi}{4}$ למטה'],
                correct: 0,
                explanation: '$\\sin(x-c)$ מזיז את הגרף $c$ יחידות ימינה.'
            },
            {
                q: 'המחזור של $y = \\cos(\\pi x)$:',
                options: ['$2$', '$\\pi$', '$2\\pi$', '$\\frac{1}{2}$'],
                correct: 0,
                explanation: '$T = \\frac{2\\pi}{\\pi} = 2$.'
            }
        ]
    },
    {
        id: 74,
        category: 'trigonometry',
        title: 'פתרון משולשים',
        desc: 'שימוש משולב בכל כלי הטריגונומטריה',
        theory: `
<h3>אסטרטגיה לפתרון משולשים</h3>
<p>נתונים שונים דורשים כלים שונים:</p>

<table style="width:100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: var(--primary); color: white;">
<td style="padding:8px; border:1px solid #ddd"><strong>נתון</strong></td>
<td style="padding:8px; border:1px solid #ddd"><strong>כלי</strong></td>
</tr>
<tr><td style="padding:8px; border:1px solid #ddd">2 צלעות + זווית ביניהן (צ.ז.צ)</td><td style="padding:8px; border:1px solid #ddd">משפט הקוסינוסים</td></tr>
<tr><td style="padding:8px; border:1px solid #ddd">3 צלעות (צ.צ.צ)</td><td style="padding:8px; border:1px solid #ddd">משפט הקוסינוסים</td></tr>
<tr><td style="padding:8px; border:1px solid #ddd">צלע + 2 זוויות (ז.צ.ז / צ.ז.ז)</td><td style="padding:8px; border:1px solid #ddd">משפט הסינוסים</td></tr>
<tr><td style="padding:8px; border:1px solid #ddd">2 צלעות + זווית שלא ביניהן</td><td style="padding:8px; border:1px solid #ddd">משפט הסינוסים (זהירות — ייתכנו 2 פתרונות!)</td></tr>
<tr><td style="padding:8px; border:1px solid #ddd">משולש ישר-זווית</td><td style="padding:8px; border:1px solid #ddd">יחסים טריגונומטריים / פיתגורס</td></tr>
</table>

<h3>תזכורת — הנוסחאות</h3>
<div class="formula-box">
$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} \\quad \\text{(סינוסים)}$$
$$c^2 = a^2+b^2-2ab\\cos C \\quad \\text{(קוסינוסים)}$$
$$S = \\frac{1}{2}ab\\sin C \\quad \\text{(שטח)}$$
</div>

<div class="example-box">
<div class="example-title">דוגמה — צ.ז.צ</div>
<p>$a=8$, $b=6$, $C=60°$. מצאו את $c$:</p>
<p>$c^2 = 64+36-2 \\cdot 8 \\cdot 6 \\cdot \\cos 60° = 100 - 96 \\cdot 0.5 = 52$</p>
<p>$c = \\sqrt{52} = 2\\sqrt{13} \\approx 7.21$</p>
</div>
        `,
        questions: [
            {
                q: 'נתונות 3 צלעות. באיזה משפט נשתמש למציאת זווית?',
                options: ['קוסינוסים', 'סינוסים', 'פיתגורס', 'תאלס'],
                correct: 0,
                explanation: 'בנתון צ.צ.צ — משפט הקוסינוסים מאפשר למצוא זוויות.'
            },
            {
                q: 'נתון $a=10$, $A=30°$, $B=45°$. מצאו $b$ (סינוסים):',
                options: ['$10\\sqrt{2}$', '$5\\sqrt{2}$', '$5$', '$10$'],
                correct: 0,
                explanation: '$\\frac{b}{\\sin 45°} = \\frac{10}{\\sin 30°} = 20$ → $b = 20 \\cdot \\frac{\\sqrt{2}}{2} = 10\\sqrt{2}$.'
            },
            {
                q: '$a=5, b=7, C=90°$. מצאו $c$:',
                options: ['$\\sqrt{74}$', '$12$', '$\\sqrt{24}$', '$\\sqrt{35}$'],
                correct: 0,
                explanation: '$c^2 = 25+49-2(5)(7)\\cos 90° = 74-0 = 74$. $c = \\sqrt{74}$.'
            },
            {
                q: 'שטח משולש עם $a=10, b=8, C=30°$:',
                options: ['$20$', '$40$', '$10$', '$80$'],
                correct: 0,
                explanation: '$S = \\frac{1}{2} \\cdot 10 \\cdot 8 \\cdot \\sin 30° = \\frac{1}{2} \\cdot 10 \\cdot 8 \\cdot 0.5 = 20$.'
            },
            {
                q: 'מתי ייתכנו 2 פתרונות למשולש?',
                options: ['2 צלעות וזווית לא ביניהן', '3 צלעות', '2 צלעות וזווית ביניהן', 'צלע ו-2 זוויות'],
                correct: 0,
                explanation: 'המקרה "הדו-משמעי" — 2 צלעות + זווית שלא ביניהן — עשוי לתת 0, 1, או 2 פתרונות.'
            }
        ]
    },
    {
        id: 75,
        category: 'trigonometry',
        title: 'זהויות טריגונומטריות מתקדמות',
        desc: 'נוסחאות הפחתה, כפל חצי-זווית',
        theory: `
<h3>נוסחאות הפחתה (למרבע השני)</h3>
<p>עבור זוויות מעל $90°$:</p>
<div class="formula-box">
$$\\sin(180°-\\alpha) = \\sin\\alpha$$
$$\\cos(180°-\\alpha) = -\\cos\\alpha$$
$$\\tan(180°-\\alpha) = -\\tan\\alpha$$
</div>
<p><strong>הסבר:</strong> במרבע השני, $\\sin$ חיובי אבל $\\cos$ ו-$\\tan$ שליליים.</p>

<h3>נוסחאות זווית כפולה</h3>
<div class="formula-box">
$$\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$$
$$\\cos 2\\alpha = \\cos^2\\alpha - \\sin^2\\alpha = 2\\cos^2\\alpha - 1 = 1 - 2\\sin^2\\alpha$$
</div>

<h3>נוסחאות חצי-זווית</h3>
<div class="formula-box">
$$\\sin^2\\frac{\\alpha}{2} = \\frac{1-\\cos\\alpha}{2} \\qquad \\cos^2\\frac{\\alpha}{2} = \\frac{1+\\cos\\alpha}{2}$$
</div>

<div class="tip-box">
<strong>טיפ:</strong> נוסחאות חצי-זווית נגזרות ישירות מ-$\\cos 2\\alpha$ — פשוט מציבים $\\alpha/2$ במקום $\\alpha$.
</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$\\sin 150° = \\sin(180°-30°) = \\sin 30° = \\frac{1}{2}$</p>
<p>$\\cos 150° = \\cos(180°-30°) = -\\cos 30° = -\\frac{\\sqrt{3}}{2}$</p>
</div>
        `,
        questions: [
            {
                q: '$\\sin 120° = $?',
                options: ['$\\frac{\\sqrt{3}}{2}$', '$-\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{2}$', '$-\\frac{1}{2}$'],
                correct: 0,
                explanation: '$\\sin 120° = \\sin(180°-60°) = \\sin 60° = \\frac{\\sqrt{3}}{2}$.'
            },
            {
                q: '$\\cos 135° = $?',
                options: ['$-\\frac{\\sqrt{2}}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$-\\frac{1}{2}$', '$\\frac{1}{2}$'],
                correct: 0,
                explanation: '$\\cos 135° = \\cos(180°-45°) = -\\cos 45° = -\\frac{\\sqrt{2}}{2}$.'
            },
            {
                q: '$\\sin 2\\alpha$ כאשר $\\sin\\alpha=\\frac{3}{5}, \\cos\\alpha=\\frac{4}{5}$:',
                options: ['$\\frac{24}{25}$', '$\\frac{12}{25}$', '$\\frac{6}{5}$', '$\\frac{7}{25}$'],
                correct: 0,
                explanation: '$\\sin 2\\alpha = 2 \\cdot \\frac{3}{5} \\cdot \\frac{4}{5} = \\frac{24}{25}$.'
            },
            {
                q: '$\\cos 2\\alpha$ אם $\\cos\\alpha = \\frac{1}{3}$:',
                options: ['$-\\frac{7}{9}$', '$\\frac{2}{3}$', '$\\frac{7}{9}$', '$-\\frac{2}{9}$'],
                correct: 0,
                explanation: '$\\cos 2\\alpha = 2\\cos^2\\alpha - 1 = 2 \\cdot \\frac{1}{9} - 1 = \\frac{2}{9} - 1 = -\\frac{7}{9}$.'
            },
            {
                q: 'במרבע השני ($90° < \\alpha < 180°$), $\\cos\\alpha$:',
                options: ['שלילי', 'חיובי', 'אפס', 'לא מוגדר'],
                correct: 0,
                explanation: 'במרבע II: $\\sin > 0$, $\\cos < 0$, $\\tan < 0$.'
            }
        ]
    },
    {
        id: 76,
        category: 'algebra',
        title: 'משוואות ממעלה שלישית ומעלה',
        desc: 'פתרון פולינומים ממעלה גבוהה',
        theory: `
<h3>משוואות ממעלה שלישית</h3>
<p>משוואה מהצורה $ax^3 + bx^2 + cx + d = 0$.</p>
<p><strong>שיטת הפתרון:</strong></p>
<p>1. מנסים למצוא שורש ראשון $x_0$ (לרוב ע"י ניחוש — בודקים מחלקים של $d$).</p>
<p>2. מחלקים את הפולינום ב-$(x - x_0)$ ומקבלים פולינום ממעלה 2.</p>
<p>3. פותרים את הריבועי בנוסחה.</p>

<h3>משפט השורשים הרציונליים</h3>
<p>אם לפולינום עם מקדמים שלמים יש שורש רציונלי $\\frac{p}{q}$, אז:</p>
<div class="formula-box">$p$ מחלק את המקדם החופשי, $q$ מחלק את המקדם המוביל</div>

<h3>חילוק פולינומים (חילוק סינתטי)</h3>
<p>שיטה מהירה לחלק פולינום ב-$(x-c)$: כותבים את המקדמים, ומבצעים כפל-חיבור שורה אחרי שורה.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>פתרו $x^3 - 6x^2 + 11x - 6 = 0$</p>
<p>ניסוי $x=1$: $1-6+11-6 = 0$ ✓ → $(x-1)$ הוא גורם.</p>
<p>חילוק: $x^3 - 6x^2 + 11x - 6 = (x-1)(x^2 - 5x + 6) = (x-1)(x-2)(x-3)$</p>
<p><strong>פתרונות:</strong> $x = 1, 2, 3$</p>
</div>

<div class="tip-box">
<strong>טיפ:</strong> תמיד נסו $x=1$ ו-$x=-1$ ראשונים — הם הכי קל לבדיקה!
</div>
        `,
        questions: [
            {
                q: 'שורשי $x^3 - 7x + 6 = 0$ אם $x=1$ הוא שורש:',
                options: ['$1, 2, -3$', '$1, -2, 3$', '$1, 6, -1$', '$1, 3, 2$'],
                correct: 0,
                explanation: '$(x-1)(x^2+x-6) = (x-1)(x+3)(x-2) = 0$. שורשים: $1, 2, -3$.'
            },
            {
                q: 'כמה שורשים (לכל היותר) למשוואה ממעלה 3?',
                options: ['$3$', '$2$', '$1$', 'אינסוף'],
                correct: 0,
                explanation: 'פולינום ממעלה $n$ יכול להיות לו לכל היותר $n$ שורשים ממשיים.'
            },
            {
                q: 'אם $x=2$ שורש של $P(x)$, אז:',
                options: ['$P(2) = 0$', '$P(0) = 2$', '$P(2) = 2$', '$P(x) = 2$'],
                correct: 0,
                explanation: 'הגדרה: $x_0$ שורש של $P$ אם ורק אם $P(x_0) = 0$.'
            },
            {
                q: 'אילו שורשים רציונליים אפשריים ל-$x^3 + 2x^2 - x - 2 = 0$?',
                options: ['$\\pm 1, \\pm 2$', '$\\pm 1$', '$\\pm 1, \\pm 2, \\pm 3$', 'כל שורש אפשרי'],
                correct: 0,
                explanation: 'מחלקי 2 (מקדם חופשי) חלקי מחלקי 1 (מקדם מוביל): $\\pm 1, \\pm 2$.'
            },
            {
                q: 'אחרי חילוק $x^3-x^2-4x+4$ ב-$(x-1)$ נקבל:',
                options: ['$x^2-4$', '$x^2+4$', '$x^2-x-4$', '$x^2-4x$'],
                correct: 0,
                explanation: '$x^3-x^2-4x+4 = (x-1)(x^2-4) = (x-1)(x-2)(x+2)$.'
            }
        ]
    },
    {
        id: 77,
        category: 'algebra',
        title: 'נוסחאות כפל מקוצר — מתקדם',
        desc: 'כפל מקוצר ממעלה 3 ושימושים',
        theory: `
<h3>תזכורת — כפל מקוצר ממעלה 2</h3>
<p>$(a+b)^2 = a^2+2ab+b^2$</p>
<p>$(a-b)^2 = a^2-2ab+b^2$</p>
<p>$(a+b)(a-b) = a^2-b^2$</p>

<h3>כפל מקוצר ממעלה 3</h3>
<div class="formula-box">
$$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$
$$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$
</div>

<h3>סכום ומכפלת מעוקבים</h3>
<div class="formula-box">
$$a^3 + b^3 = (a+b)(a^2-ab+b^2)$$
$$a^3 - b^3 = (a-b)(a^2+ab+b^2)$$
</div>

<h3>איך לזכור?</h3>
<p>$a^3 + b^3$: הסימן הראשון <strong>זהה</strong> (+), השני <strong>הפוך</strong> (-), השלישי תמיד <strong>+</strong>.</p>
<p>$a^3 - b^3$: הסימן הראשון <strong>זהה</strong> (-), השני <strong>הפוך</strong> (+), השלישי תמיד <strong>+</strong>.</p>

<div class="example-box">
<div class="example-title">דוגמה — פירוק</div>
<p>פרקו: $8x^3 - 27$</p>
<p>$= (2x)^3 - 3^3 = (2x-3)(4x^2+6x+9)$</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה — חישוב מהיר</div>
<p>$99^2 = (100-1)^2 = 10000 - 200 + 1 = 9801$</p>
<p>$21^3 = (20+1)^3 = 8000 + 3 \\cdot 400 + 3 \\cdot 20 + 1 = 9261$</p>
</div>
        `,
        questions: [
            {
                q: '$(x+2)^3 = $?',
                options: ['$x^3+6x^2+12x+8$', '$x^3+8$', '$x^3+2x^2+4x+8$', '$x^3+6x+8$'],
                correct: 0,
                explanation: '$(x+2)^3 = x^3+3x^2(2)+3x(4)+8 = x^3+6x^2+12x+8$.'
            },
            {
                q: 'פרקו $x^3 - 8$:',
                options: ['$(x-2)(x^2+2x+4)$', '$(x-2)(x^2-2x+4)$', '$(x+2)(x^2-2x+4)$', '$(x-2)(x^2+4)$'],
                correct: 0,
                explanation: '$x^3-2^3 = (x-2)(x^2+2x+4)$ (הפרש מעוקבים).'
            },
            {
                q: '$27a^3 + 1 = $?',
                options: ['$(3a+1)(9a^2-3a+1)$', '$(3a+1)(9a^2+3a+1)$', '$(3a-1)(9a^2+3a+1)$', '$(3a+1)(3a^2-3a+1)$'],
                correct: 0,
                explanation: '$(3a)^3+1^3 = (3a+1)(9a^2-3a+1)$.'
            },
            {
                q: '$(a-b)^3$ כאשר $a=3, b=1$:',
                options: ['$8$', '$26$', '$27$', '$6$'],
                correct: 0,
                explanation: '$(3-1)^3 = 2^3 = 8$.'
            },
            {
                q: 'נוסחת $(a+b)(a^2-ab+b^2)$ שווה ל:',
                options: ['$a^3+b^3$', '$a^3-b^3$', '$(a+b)^3$', '$a^3+3ab+b^3$'],
                correct: 0,
                explanation: 'זו נוסחת סכום המעוקבים: $a^3+b^3 = (a+b)(a^2-ab+b^2)$.'
            }
        ]
    },
    {
        id: 78,
        category: 'functions',
        title: 'חקירת פונקציה מלאה',
        desc: 'ניתוח שלם של פונקציה ושרטוט גרף',
        theory: `
<h3>שלבי חקירת פונקציה</h3>
<p>חקירת פונקציה היא תהליך שיטתי שבו מגלים את כל תכונות הפונקציה:</p>

<p><strong>1. תחום הגדרה</strong> — איפה הפונקציה מוגדרת?</p>
<p><strong>2. נקודות חיתוך עם הצירים</strong></p>
<p>• חיתוך עם ציר $y$: $f(0)$</p>
<p>• חיתוך עם ציר $x$: לפתור $f(x)=0$</p>

<p><strong>3. סימן הפונקציה</strong> — איפה $f(x)>0$ ואיפה $f(x)<0$?</p>

<p><strong>4. נקודות קיצון</strong> (אם ידוע חשבון דיפרנציאלי — דרך נגזרת)</p>
<p>בכיתה י': מוצאים קודקוד הפרבולה, או בודקים ערכים.</p>

<p><strong>5. תחומי עלייה וירידה</strong></p>
<p><strong>6. התנהגות בקצוות</strong> — מה קורה כש-$x \\to \\pm\\infty$?</p>

<div class="example-box">
<div class="example-title">דוגמה — $f(x) = x^2 - 4x + 3$</div>
<p><strong>תחום:</strong> $\\mathbb{R}$ (כל הממשיים)</p>
<p><strong>חיתוך ציר $y$:</strong> $f(0) = 3$ → $(0, 3)$</p>
<p><strong>חיתוך ציר $x$:</strong> $x^2-4x+3=0$ → $(x-1)(x-3)=0$ → $x=1, x=3$</p>
<p><strong>קודקוד:</strong> $x_v = \\frac{4}{2} = 2$, $f(2) = 4-8+3 = -1$ → $(2, -1)$</p>
<p><strong>עלייה:</strong> $x > 2$. <strong>ירידה:</strong> $x < 2$.</p>
<p><strong>סימן:</strong> $f(x) < 0$ ב-$(1, 3)$, $f(x) > 0$ בשאר.</p>
</div>

<div class="tip-box">
<strong>טיפ:</strong> תמיד שרטטו את הגרף בסוף — זו הבדיקה הטובה ביותר שהכל נכון!
</div>
        `,
        questions: [
            {
                q: 'נקודת חיתוך עם ציר $y$ של $f(x) = 2x^2-3x+1$:',
                options: ['$(0, 1)$', '$(1, 0)$', '$(0, -3)$', '$(0, 2)$'],
                correct: 0,
                explanation: '$f(0) = 0-0+1 = 1$. נקודת החיתוך: $(0, 1)$.'
            },
            {
                q: 'נקודות חיתוך עם ציר $x$ של $f(x) = x^2-5x+6$:',
                options: ['$x=2, x=3$', '$x=1, x=6$', '$x=-2, x=-3$', '$x=5, x=6$'],
                correct: 0,
                explanation: '$x^2-5x+6 = (x-2)(x-3) = 0$ → $x=2, x=3$.'
            },
            {
                q: 'קודקוד הפרבולה $f(x) = x^2-6x+5$:',
                options: ['$(3, -4)$', '$(3, 5)$', '$(-3, -4)$', '$(6, 5)$'],
                correct: 0,
                explanation: '$x_v = \\frac{6}{2} = 3$. $f(3) = 9-18+5 = -4$. קודקוד: $(3,-4)$.'
            },
            {
                q: '$f(x) = x^2-4$ חיובית עבור:',
                options: ['$x<-2$ או $x>2$', '$-2<x<2$', '$x>0$', '$x>4$'],
                correct: 0,
                explanation: '$x^2-4>0$ → $x^2>4$ → $|x|>2$ → $x<-2$ או $x>2$.'
            },
            {
                q: 'מה הצעד הראשון בחקירת פונקציה?',
                options: ['מציאת תחום הגדרה', 'שרטוט הגרף', 'מציאת נקודות קיצון', 'חיתוך ציר $x$'],
                correct: 0,
                explanation: 'תמיד מתחילים בתחום — צריך לדעת איפה הפונקציה מוגדרת לפני שבודקים אותה.'
            }
        ]
    },
    {
        id: 79,
        category: 'functions',
        title: 'פונקציית שורש',
        desc: 'תכונות וגרף של פונקציית שורש',
        theory: `
<h3>$f(x) = \\sqrt{x}$</h3>
<p><strong>תחום:</strong> $x \\geq 0$ (לא ניתן להוציא שורש ממספר שלילי)</p>
<p><strong>טווח:</strong> $y \\geq 0$</p>
<p><strong>הגרף:</strong> מתחיל ב-$(0,0)$, עולה בקצב הולך ופוחת (כמו "חצי פרבולה שוכבת").</p>

<h3>תחום הגדרה של ביטויי שורש</h3>
<p>עבור $f(x) = \\sqrt{g(x)}$ התחום הוא $g(x) \\geq 0$.</p>

<div class="formula-box">
$$\\sqrt{g(x)} \\text{ מוגדר כאשר } g(x) \\geq 0$$
</div>

<h3>כללי חישוב</h3>
<p>• $\\sqrt{ab} = \\sqrt{a} \\cdot \\sqrt{b}$ (כאשר $a,b \\geq 0$)</p>
<p>• $\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$ (כאשר $a \\geq 0, b > 0$)</p>
<p>• $(\\sqrt{a})^2 = a$</p>
<p>• $\\sqrt{a^2} = |a|$ (ערך מוחלט!)</p>

<div class="tip-box">
<strong>שגיאה נפוצה:</strong> $\\sqrt{x^2} = x$ — <strong>לא!</strong> $\\sqrt{x^2} = |x|$. למשל: $\\sqrt{(-3)^2} = \\sqrt{9} = 3 = |-3|$.
</div>

<div class="example-box">
<div class="example-title">דוגמה — תחום</div>
<p>$f(x) = \\sqrt{2x-6}$</p>
<p>תנאי: $2x-6 \\geq 0$ → $x \\geq 3$</p>
<p>תחום: $[3, \\infty)$</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה — תחום מורכב</div>
<p>$f(x) = \\frac{1}{\\sqrt{x-1}}$</p>
<p>תנאים: $x-1 > 0$ (לא $\\geq$ כי אסור מכנה 0!) → $x > 1$</p>
<p>תחום: $(1, \\infty)$</p>
</div>
        `,
        questions: [
            {
                q: 'תחום $f(x) = \\sqrt{4-x}$:',
                options: ['$x \\leq 4$', '$x \\geq 4$', '$x > 4$', '$x < 4$'],
                correct: 0,
                explanation: '$4-x \\geq 0$ → $x \\leq 4$.'
            },
            {
                q: '$\\sqrt{(-5)^2} = $?',
                options: ['$5$', '$-5$', '$25$', '$\\pm 5$'],
                correct: 0,
                explanation: '$\\sqrt{(-5)^2} = \\sqrt{25} = 5 = |-5|$.'
            },
            {
                q: 'תחום $f(x) = \\sqrt{x^2-9}$:',
                options: ['$x \\leq -3$ או $x \\geq 3$', '$-3 \\leq x \\leq 3$', '$x \\geq 3$', '$x \\geq 0$'],
                correct: 0,
                explanation: '$x^2-9 \\geq 0$ → $x^2 \\geq 9$ → $|x| \\geq 3$.'
            },
            {
                q: '$\\sqrt{12} \\cdot \\sqrt{3} = $?',
                options: ['$6$', '$\\sqrt{15}$', '$\\sqrt{36}$', '$3\\sqrt{4}$'],
                correct: 0,
                explanation: '$\\sqrt{12} \\cdot \\sqrt{3} = \\sqrt{36} = 6$.'
            },
            {
                q: 'הפונקציה $f(x) = \\sqrt{x}$ היא:',
                options: ['עולה בתחומה', 'יורדת', 'קבועה', 'לא מונוטונית'],
                correct: 0,
                explanation: '$\\sqrt{x}$ עולה בכל תחומה $[0, \\infty)$ — ככל ש-$x$ גדל, גם השורש גדל.'
            }
        ]
    },
    {
        id: 80,
        category: 'functions',
        title: 'פונקציה רציונלית',
        desc: 'תכונות $f(x)=\\frac{P(x)}{Q(x)}$, אסימפטוטות',
        theory: `
<h3>מהי פונקציה רציונלית?</h3>
<p>מנה של שני פולינומים: $f(x) = \\frac{P(x)}{Q(x)}$.</p>
<p>הדוגמה הפשוטה ביותר: $f(x) = \\frac{1}{x}$.</p>

<h3>תחום הגדרה</h3>
<p>כל $x$ שבו <strong>המכנה לא מתאפס</strong>: $Q(x) \\neq 0$.</p>

<h3>אסימפטוטות</h3>
<p><strong>אסימפטוטה אנכית:</strong> קו אנכי $x = a$ שהגרף מתקרב אליו אבל לא חוצה (בד"כ). מתקבל כש-$Q(a)=0$ ו-$P(a) \\neq 0$.</p>
<p><strong>אסימפטוטה אופקית:</strong> ערך ש-$f(x)$ מתקרב אליו כש-$x \\to \\pm\\infty$.</p>

<h3>כללים לאסימפטוטה אופקית</h3>
<p>אם מעלת המונה = מעלת המכנה: $y = \\frac{\\text{מקדם מוביל}}{\\text{מקדם מוביל}}$</p>
<p>אם מעלת המונה < מעלת המכנה: $y = 0$</p>
<p>אם מעלת המונה > מעלת המכנה: אין אסימפטוטה אופקית</p>

<div class="example-box">
<div class="example-title">דוגמה — $f(x) = \\frac{2x+1}{x-3}$</div>
<p><strong>תחום:</strong> $x \\neq 3$</p>
<p><strong>אסימפטוטה אנכית:</strong> $x = 3$ (מכנה = 0)</p>
<p><strong>אסימפטוטה אופקית:</strong> $y = \\frac{2}{1} = 2$ (מעלות שוות)</p>
<p><strong>חיתוך ציר $y$:</strong> $f(0) = \\frac{1}{-3} = -\\frac{1}{3}$</p>
<p><strong>חיתוך ציר $x$:</strong> $2x+1=0 \\Rightarrow x=-\\frac{1}{2}$</p>
</div>

<div class="tip-box">
<strong>טיפ:</strong> ליד האסימפטוטה האנכית, הפונקציה "מתפוצצת" ל-$\\pm\\infty$. בדקו את הסימן משני צידי הנקודה.
</div>
        `,
        questions: [
            {
                q: 'תחום $f(x) = \\frac{1}{x-2}$:',
                options: ['$x \\neq 2$', '$x > 2$', '$x \\neq 0$', 'כל הממשיים'],
                correct: 0,
                explanation: 'המכנה מתאפס ב-$x=2$, לכן $x \\neq 2$.'
            },
            {
                q: 'האסימפטוטה האופקית של $f(x) = \\frac{3x}{x+1}$:',
                options: ['$y = 3$', '$y = 1$', '$y = 0$', 'אין'],
                correct: 0,
                explanation: 'מעלות שוות: $y = \\frac{3}{1} = 3$.'
            },
            {
                q: 'האסימפטוטה האנכית של $f(x) = \\frac{x+1}{x^2-4}$:',
                options: ['$x=2$ ו-$x=-2$', '$x=4$', '$x=-1$', '$x=2$'],
                correct: 0,
                explanation: '$x^2-4=0$ → $x = \\pm 2$. שתי אסימפטוטות אנכיות.'
            },
            {
                q: 'האסימפטוטה האופקית של $f(x) = \\frac{1}{x^2+1}$:',
                options: ['$y = 0$', '$y = 1$', 'אין', '$x = 0$'],
                correct: 0,
                explanation: 'מעלת המונה (0) < מעלת המכנה (2), לכן $y=0$.'
            },
            {
                q: 'חיתוך ציר $x$ של $f(x) = \\frac{x-5}{x+2}$:',
                options: ['$x = 5$', '$x = -2$', '$x = 0$', 'אין'],
                correct: 0,
                explanation: '$f(x)=0$ כש-$x-5=0$ → $x=5$ (המונה מתאפס).'
            }
        ]
    },

    // ===== שיעורים 81-130 =====

    {
        id: 81,
        category: 'algebra',
        title: 'דיסקרימיננטה',
        desc: 'ניתוח מספר הפתרונות למשוואה ריבועית',
        theory: `
<h3>מהי הדיסקרימיננטה?</h3>
<p>עבור משוואה $ax^2+bx+c=0$, הדיסקרימיננטה היא:</p>
<div class="formula-box">$$\\Delta = b^2 - 4ac$$</div>
<p>היא מופיעה מתחת לשורש בנוסחת השורשים, ולכן קובעת כמה פתרונות יש:</p>
<p>• $\\Delta > 0$ → <strong>שני פתרונות</strong> ממשיים שונים</p>
<p>• $\\Delta = 0$ → <strong>פתרון יחיד</strong> (שורש כפול)</p>
<p>• $\\Delta < 0$ → <strong>אין פתרונות</strong> ממשיים</p>

<div class="tip-box"><strong>טיפ:</strong> הדיסקרימיננטה גם אומרת כמה נקודות חיתוך עם ציר $x$ יש לפרבולה $y=ax^2+bx+c$.</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$2x^2-4x+2=0$: $\\Delta = 16-16 = 0$ → פתרון יחיד: $x=1$.</p>
<p>$x^2+x+1=0$: $\\Delta = 1-4 = -3 < 0$ → אין פתרונות.</p>
</div>
        `,
        questions: [
            {q:'הדיסקרימיננטה של $x^2-6x+9=0$:',options:['$0$','$36$','$-36$','$9$'],correct:0,explanation:'$\\Delta=36-36=0$. שורש כפול $x=3$.'},
            {q:'ל-$x^2+2x+5=0$ יש:',options:['אין פתרונות','פתרון אחד','שני פתרונות','אינסוף'],correct:0,explanation:'$\\Delta=4-20=-16<0$.'},
            {q:'אם $\\Delta>0$ למשוואה ריבועית, אז:',options:['יש 2 פתרונות','יש פתרון אחד','אין פתרונות','יש 3 פתרונות'],correct:0,explanation:'דיסקרימיננטה חיובית = שני שורשים שונים.'},
            {q:'$\\Delta$ של $3x^2-x-2=0$:',options:['$25$','$-23$','$1$','$7$'],correct:0,explanation:'$\\Delta=1+24=25$.'},
            {q:'לאילו ערכי $k$ ל-$x^2+kx+4=0$ פתרון יחיד?',options:['$k=\\pm4$','$k=4$','$k=0$','$k=\\pm2$'],correct:0,explanation:'$\\Delta=k^2-16=0 \\Rightarrow k=\\pm4$.'}
        ]
    },
    {
        id: 82,
        category: 'algebra',
        title: 'יחסי ויאטה',
        desc: 'קשר בין שורשים למקדמים',
        theory: `
<h3>משפט ויאטה</h3>
<p>אם $x_1, x_2$ שורשי $ax^2+bx+c=0$:</p>
<div class="formula-box">$$x_1+x_2 = -\\frac{b}{a} \\qquad x_1 \\cdot x_2 = \\frac{c}{a}$$</div>
<p><strong>למה שימושי?</strong> ניתן לחשב סכום ומכפלת שורשים בלי למצוא אותם!</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$x^2-7x+12=0$: סכום $=7$, מכפלה $=12$. אכן $3+4=7, 3\\cdot4=12$.</p>
</div>

<div class="tip-box"><strong>שימוש הפוך:</strong> אם ידועים הסכום $s$ והמכפלה $p$, המשוואה היא $x^2-sx+p=0$.</div>
        `,
        questions: [
            {q:'סכום שורשי $x^2-5x+6=0$:',options:['$5$','$6$','$-5$','$-6$'],correct:0,explanation:'$x_1+x_2=-\\frac{-5}{1}=5$.'},
            {q:'מכפלת שורשי $2x^2+3x-4=0$:',options:['$-2$','$2$','$-\\frac{3}{2}$','$4$'],correct:0,explanation:'$x_1 \\cdot x_2=\\frac{-4}{2}=-2$.'},
            {q:'משוואה ששורשיה 2 ו-5:',options:['$x^2-7x+10=0$','$x^2+7x+10=0$','$x^2-7x-10=0$','$x^2-10x+7=0$'],correct:0,explanation:'סכום $=7$, מכפלה $=10$: $x^2-7x+10=0$.'},
            {q:'אם $x_1+x_2=4$ ו-$x_1 \\cdot x_2=-3$, אז $x_1^2+x_2^2=$:',options:['$22$','$16$','$10$','$19$'],correct:0,explanation:'$x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2=16+6=22$.'},
            {q:'סכום שורשי $x^2+8x+15=0$:',options:['$-8$','$8$','$15$','$-15$'],correct:0,explanation:'$x_1+x_2=-\\frac{8}{1}=-8$.'}
        ]
    },
    {
        id: 83,
        category: 'algebra',
        title: 'משוואות עם פרמטר',
        desc: 'ניתוח משוואות עם אות נוספת',
        theory: `
<h3>מהי משוואה עם פרמטר?</h3>
<p>משוואה שמכילה אות נוספת (בד"כ $k$, $m$, $a$) מלבד הנעלם. צריך למצוא לאילו ערכי הפרמטר יש/אין פתרונות.</p>

<h3>שיטה</h3>
<p>1. כתבו את המשוואה בצורה סטנדרטית.</p>
<p>2. חשבו $\\Delta$ כפונקציה של הפרמטר.</p>
<p>3. פתרו $\\Delta>0$, $\\Delta=0$, $\\Delta<0$ בהתאם לשאלה.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>לאילו ערכי $m$ ל-$x^2-2mx+m+2=0$ שני פתרונות?</p>
<p>$\\Delta=4m^2-4(m+2)=4m^2-4m-8>0$</p>
<p>$m^2-m-2>0 \\Rightarrow (m-2)(m+1)>0 \\Rightarrow m<-1$ או $m>2$</p>
</div>
        `,
        questions: [
            {q:'ל-$x^2+4x+k=0$ אין פתרונות כאשר:',options:['$k>4$','$k<4$','$k=4$','$k>0$'],correct:0,explanation:'$\\Delta=16-4k<0 \\Rightarrow k>4$.'},
            {q:'ל-$x^2-kx+9=0$ פתרון יחיד כאשר $k>0$:',options:['$k=6$','$k=3$','$k=9$','$k=18$'],correct:0,explanation:'$\\Delta=k^2-36=0 \\Rightarrow k=6$ (חיובי).'},
            {q:'ל-$kx^2+2x-1=0$ שני פתרונות כאשר:',options:['$k>-1$ ו-$k\\neq 0$','$k>0$','$k<-1$','כל $k$'],correct:0,explanation:'$\\Delta=4+4k>0 \\Rightarrow k>-1$, וגם $k\\neq 0$ כי צריך ריבועית.'},
            {q:'ב-$x^2+2x+m=0$, שורש אחד הוא 3. מהו $m$?',options:['$-15$','$15$','$-9$','$9$'],correct:0,explanation:'$9+6+m=0 \\Rightarrow m=-15$.'},
            {q:'אם $\\Delta=k^2-4k$, לאילו $k$ יש $\\Delta \\geq 0$?',options:['$k \\leq 0$ או $k \\geq 4$','$0 \\leq k \\leq 4$','$k \\geq 4$','$k>0$'],correct:0,explanation:'$k(k-4) \\geq 0 \\Rightarrow k \\leq 0$ או $k \\geq 4$.'}
        ]
    },
    {
        id: 84,
        category: 'algebra',
        title: 'חזקות עשרוניות וסדרי גודל',
        desc: 'כתיב מדעי וחישובים',
        theory: `
<h3>כתיב מדעי</h3>
<p>מספרים גדולים או קטנים מאוד נכתבים כ-$a \\times 10^n$ כאשר $1 \\leq |a| < 10$.</p>
<div class="formula-box">$3{,}200{,}000 = 3.2 \\times 10^6 \\qquad 0.00045 = 4.5 \\times 10^{-4}$</div>

<h3>כללי חישוב</h3>
<p>• $(a \\times 10^m)(b \\times 10^n) = ab \\times 10^{m+n}$</p>
<p>• $\\frac{a \\times 10^m}{b \\times 10^n} = \\frac{a}{b} \\times 10^{m-n}$</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$(3 \\times 10^4)(2 \\times 10^5) = 6 \\times 10^9$</p>
</div>
        `,
        questions: [
            {q:'$0.00032$ בכתיב מדעי:',options:['$3.2 \\times 10^{-4}$','$32 \\times 10^{-5}$','$3.2 \\times 10^{4}$','$0.32 \\times 10^{-3}$'],correct:0,explanation:'מזיזים נקודה 4 מקומות: $3.2 \\times 10^{-4}$.'},
            {q:'$(4 \\times 10^3)(5 \\times 10^2)=$',options:['$2 \\times 10^6$','$20 \\times 10^5$','$9 \\times 10^5$','$4.5 \\times 10^6$'],correct:0,explanation:'$20 \\times 10^5 = 2 \\times 10^6$.'},
            {q:'$\\frac{6 \\times 10^8}{3 \\times 10^5}=$',options:['$2 \\times 10^3$','$2 \\times 10^{13}$','$18 \\times 10^3$','$0.5 \\times 10^3$'],correct:0,explanation:'$\\frac{6}{3} \\times 10^{8-5} = 2 \\times 10^3$.'},
            {q:'$5{,}600{,}000$ בכתיב מדעי:',options:['$5.6 \\times 10^6$','$56 \\times 10^5$','$5.6 \\times 10^7$','$0.56 \\times 10^7$'],correct:0,explanation:'$5.6 \\times 10^6$.'},
            {q:'מה גדול יותר: $3 \\times 10^5$ או $8 \\times 10^4$?',options:['$3 \\times 10^5$','$8 \\times 10^4$','שווים','לא ניתן לדעת'],correct:0,explanation:'$3 \\times 10^5 = 300{,}000 > 80{,}000 = 8 \\times 10^4$.'}
        ]
    },
    {
        id: 85,
        category: 'algebra',
        title: 'אי-שוויונות ריבועיות — שיטת הסימנים',
        desc: 'פתרון שיטתי עם טבלת סימנים',
        theory: `
<h3>שיטת הפתרון</h3>
<p>1. העבירו הכל לצד אחד: $ax^2+bx+c > 0$ (או $<, \\geq, \\leq$)</p>
<p>2. מצאו שורשים (אם קיימים)</p>
<p>3. שרטטו ציר מספרים עם השורשים</p>
<p>4. קבעו סימן בכל תחום</p>

<div class="tip-box"><strong>כלל:</strong> אם $a>0$ (פרבולה "מחייכת"), הפונקציה שלילית <strong>בין</strong> השורשים. אם $a<0$ ("עצובה"), היא חיובית בין השורשים.</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$x^2-5x+6 < 0$</p>
<p>שורשים: $x=2, x=3$. $a=1>0$ → שלילי בין השורשים.</p>
<p><strong>פתרון:</strong> $2 < x < 3$</p>
</div>
        `,
        questions: [
            {q:'פתרון $x^2-4 > 0$:',options:['$x<-2$ או $x>2$','$-2<x<2$','$x>2$','$x>4$'],correct:0,explanation:'$(x-2)(x+2)>0$, $a>0$ → חיובי מחוץ לשורשים.'},
            {q:'פתרון $x^2-6x+8 \\leq 0$:',options:['$2 \\leq x \\leq 4$','$x \\leq 2$ או $x \\geq 4$','$x \\leq 2$','$x<4$'],correct:0,explanation:'$(x-2)(x-4) \\leq 0$, $a>0$ → שלילי/אפס בין $2$ ל-$4$.'},
            {q:'$-x^2+4x-3 > 0$ שקול ל:',options:['$1<x<3$','$x<1$ או $x>3$','$x>3$','$-3<x<-1$'],correct:0,explanation:'$a<0$, שורשים $1,3$ → חיובי בין השורשים: $1<x<3$.'},
            {q:'ל-$x^2+x+1>0$:',options:['הפתרון: כל $x$','אין פתרון','$x>0$','$x>-1$'],correct:0,explanation:'$\\Delta=1-4=-3<0$, $a>0$ → תמיד חיובי.'},
            {q:'$x^2 \\leq 9$ שקול ל:',options:['$-3 \\leq x \\leq 3$','$x \\leq 3$','$x \\geq -3$','$0 \\leq x \\leq 3$'],correct:0,explanation:'$x^2-9 \\leq 0$, $(x-3)(x+3) \\leq 0$ → $-3 \\leq x \\leq 3$.'}
        ]
    },
    {
        id: 86,
        category: 'algebra',
        title: 'שברים אלגבריים מורכבים',
        desc: 'חיבור, חיסור, כפל וצמצום שברים',
        theory: `
<h3>צמצום</h3>
<p>לפרק מונה ומכנה ולצמצם גורמים משותפים.</p>
<div class="formula-box">$$\\frac{x^2-4}{x^2-4x+4} = \\frac{(x-2)(x+2)}{(x-2)^2} = \\frac{x+2}{x-2}$$</div>

<h3>חיבור שברים</h3>
<p>מוצאים מכנה משותף, ממירים, ומחברים:</p>
<div class="formula-box">$$\\frac{a}{b} + \\frac{c}{d} = \\frac{ad+bc}{bd}$$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$\\frac{1}{x-1}+\\frac{1}{x+1} = \\frac{(x+1)+(x-1)}{(x-1)(x+1)} = \\frac{2x}{x^2-1}$</p>
</div>
        `,
        questions: [
            {q:'צמצמו $\\frac{x^2-9}{x+3}$:',options:['$x-3$','$x+3$','$x^2-3$','$\\frac{x-3}{x+3}$'],correct:0,explanation:'$\\frac{(x-3)(x+3)}{x+3}=x-3$.'},
            {q:'$\\frac{1}{x}+\\frac{1}{x+1}=$',options:['$\\frac{2x+1}{x(x+1)}$','$\\frac{2}{2x+1}$','$\\frac{1}{x^2+x}$','$\\frac{2x}{x+1}$'],correct:0,explanation:'$\\frac{x+1+x}{x(x+1)}=\\frac{2x+1}{x(x+1)}$.'},
            {q:'$\\frac{x^2-1}{x-1}=$',options:['$x+1$','$x-1$','$1$','$x^2+1$'],correct:0,explanation:'$\\frac{(x-1)(x+1)}{x-1}=x+1$.'},
            {q:'$\\frac{2}{x-3}-\\frac{1}{x+2}=$',options:['$\\frac{x+7}{(x-3)(x+2)}$','$\\frac{1}{x-1}$','$\\frac{x-7}{(x-3)(x+2)}$','$\\frac{3}{2x-1}$'],correct:0,explanation:'$\\frac{2(x+2)-(x-3)}{(x-3)(x+2)}=\\frac{x+7}{(x-3)(x+2)}$.'},
            {q:'$\\frac{x}{x-2} \\cdot \\frac{x-2}{x^2}=$',options:['$\\frac{1}{x}$','$\\frac{1}{x-2}$','$x$','$\\frac{x-2}{x}$'],correct:0,explanation:'מצמצמים $(x-2)$ ו-$x$: $\\frac{1}{x}$.'}
        ]
    },
    {
        id: 87,
        category: 'algebra',
        title: 'חזקות רציונליות ושורשים',
        desc: 'חישובים עם חזקות שבריות',
        theory: `
<h3>הקשר בין שורשים לחזקות</h3>
<div class="formula-box">$$\\sqrt[n]{a} = a^{1/n} \\qquad \\sqrt[n]{a^m} = a^{m/n}$$</div>

<h3>כללים</h3>
<p>• $a^{m/n} \\cdot a^{p/q} = a^{m/n + p/q}$</p>
<p>• $(a^{m/n})^k = a^{mk/n}$</p>
<p>• $a^{-m/n} = \\frac{1}{a^{m/n}}$</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$</p>
<p>$27^{-1/3} = \\frac{1}{\\sqrt[3]{27}} = \\frac{1}{3}$</p>
</div>
        `,
        questions: [
            {q:'$16^{3/4} =$',options:['$8$','$12$','$64$','$4$'],correct:0,explanation:'$(\\sqrt[4]{16})^3 = 2^3 = 8$.'},
            {q:'$9^{1/2} =$',options:['$3$','$4.5$','$81$','$18$'],correct:0,explanation:'$9^{1/2} = \\sqrt{9} = 3$.'},
            {q:'$8^{-2/3} =$',options:['$\\frac{1}{4}$','$4$','$-4$','$\\frac{1}{8}$'],correct:0,explanation:'$8^{-2/3} = \\frac{1}{8^{2/3}} = \\frac{1}{4}$.'},
            {q:'$x^{1/2} \\cdot x^{3/2} =$',options:['$x^2$','$x^{3/4}$','$x$','$x^3$'],correct:0,explanation:'$x^{1/2+3/2} = x^{4/2} = x^2$.'},
            {q:'$\\sqrt[3]{64} =$',options:['$4$','$8$','$3$','$16$'],correct:0,explanation:'$64^{1/3} = 4$ כי $4^3=64$.'}
        ]
    },
    {
        id: 88,
        category: 'algebra',
        title: 'משוואות מעריכיות',
        desc: 'פתרון משוואות מהצורה $a^x=b$',
        theory: `
<h3>השיטה</h3>
<p>אם $a^{f(x)} = a^{g(x)}$, אז $f(x) = g(x)$.</p>
<p>אם $a^x = b$, אז $x = \\log_a b$.</p>

<div class="formula-box">$$a^{f(x)} = a^{g(x)} \\Rightarrow f(x) = g(x)$$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$2^{x+1} = 8 \\Rightarrow 2^{x+1} = 2^3 \\Rightarrow x+1=3 \\Rightarrow x=2$</p>
<p>$3^{2x} = 81 \\Rightarrow 3^{2x} = 3^4 \\Rightarrow 2x=4 \\Rightarrow x=2$</p>
</div>

<div class="tip-box"><strong>טיפ:</strong> נסו להביא את שני הצדדים לאותו בסיס!</div>
        `,
        questions: [
            {q:'$2^x = 32$:',options:['$x=5$','$x=4$','$x=6$','$x=16$'],correct:0,explanation:'$32=2^5 \\Rightarrow x=5$.'},
            {q:'$5^{2x-1} = 125$:',options:['$x=2$','$x=3$','$x=1$','$x=4$'],correct:0,explanation:'$125=5^3 \\Rightarrow 2x-1=3 \\Rightarrow x=2$.'},
            {q:'$4^x = 2^6$:',options:['$x=3$','$x=6$','$x=12$','$x=\\frac{3}{2}$'],correct:0,explanation:'$4^x=(2^2)^x=2^{2x}=2^6 \\Rightarrow 2x=6 \\Rightarrow x=3$.'},
            {q:'$9^x = 27$:',options:['$x=\\frac{3}{2}$','$x=3$','$x=2$','$x=\\frac{2}{3}$'],correct:0,explanation:'$(3^2)^x = 3^3 \\Rightarrow 2x=3 \\Rightarrow x=\\frac{3}{2}$.'},
            {q:'$10^x = 1000$:',options:['$x=3$','$x=10$','$x=100$','$x=30$'],correct:0,explanation:'$1000=10^3 \\Rightarrow x=3$.'}
        ]
    },
    {
        id: 89,
        category: 'functions',
        title: 'פונקציית ערך מוחלט',
        desc: 'גרף ותכונות $|f(x)|$',
        theory: `
<h3>הגדרה</h3>
<div class="formula-box">$$|x| = \\begin{cases} x & x \\geq 0 \\\\ -x & x < 0 \\end{cases}$$</div>
<p>ערך מוחלט = מרחק מ-0 על ציר המספרים.</p>

<h3>גרף $y=|x|$</h3>
<p>צורת V — החלק השלילי "מתקפל" למעלה.</p>

<h3>$y=|f(x)|$ מול $y=f(|x|)$</h3>
<p>• $|f(x)|$: שיקוף החלק השלילי של $f$ מעל ציר $x$.</p>
<p>• $f(|x|)$: שיקוף הגרף לימין ציר $y$ גם לשמאל (סימטריה ל-$y$).</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$y=|x-3|$: V עם קודקוד ב-$(3,0)$.</p>
<p>$y=|x^2-4|$: הפרבולה "מתקפלת" למעלה איפה שהיא שלילית.</p>
</div>
        `,
        questions: [
            {q:'$|{-7}| =$',options:['$7$','$-7$','$0$','$49$'],correct:0,explanation:'ערך מוחלט של מספר שלילי = הערך החיובי.'},
            {q:'הקודקוד של $y=|x-2|$:',options:['$(2,0)$','$(0,2)$','$(-2,0)$','$(0,-2)$'],correct:0,explanation:'$|x-2|=0$ כש-$x=2$. קודקוד ב-$(2,0)$.'},
            {q:'$|x|=5$ → $x=$',options:['$5$ או $-5$','$5$','$-5$','$25$'],correct:0,explanation:'שני מספרים במרחק 5 מ-0: $\\pm 5$.'},
            {q:'$|x-1|<3$ שקול ל:',options:['$-2<x<4$','$x<4$','$x>-2$','$|x|<4$'],correct:0,explanation:'$-3<x-1<3 \\Rightarrow -2<x<4$.'},
            {q:'הגרף של $y=|x^2-1|$ נוגע בציר $x$ ב:',options:['$x=\\pm 1$','$x=0$','$x=1$','$x=\\pm 2$'],correct:0,explanation:'$|x^2-1|=0$ כש-$x^2=1$, $x=\\pm 1$.'}
        ]
    },
    {
        id: 90,
        category: 'functions',
        title: 'קצב שינוי ממוצע',
        desc: 'שיפוע ממוצע בין שתי נקודות',
        theory: `
<h3>הגדרה</h3>
<p>קצב השינוי הממוצע של $f$ בקטע $[a,b]$:</p>
<div class="formula-box">$$\\frac{\\Delta y}{\\Delta x} = \\frac{f(b)-f(a)}{b-a}$$</div>
<p>זהו <strong>השיפוע של הישר</strong> העובר דרך $(a, f(a))$ ו-$(b, f(b))$ — הנקרא "ישר המיתר".</p>

<h3>משמעות</h3>
<p>אם $f$ מתארת מיקום, קצב השינוי הממוצע = <strong>מהירות ממוצעת</strong>.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$f(x)=x^2$, קצב שינוי ב-$[1,3]$:</p>
<p>$\\frac{f(3)-f(1)}{3-1} = \\frac{9-1}{2} = 4$</p>
</div>
        `,
        questions: [
            {q:'קצב שינוי של $f(x)=2x+3$ ב-$[0,5]$:',options:['$2$','$5$','$13$','$3$'],correct:0,explanation:'$\\frac{13-3}{5-0}=\\frac{10}{5}=2$. (בפונקציה לינארית, השיפוע קבוע.)'},
            {q:'קצב שינוי של $f(x)=x^2$ ב-$[2,4]$:',options:['$6$','$8$','$4$','$12$'],correct:0,explanation:'$\\frac{16-4}{4-2}=\\frac{12}{2}=6$.'},
            {q:'אם $f(1)=3$ ו-$f(5)=11$, קצב השינוי הממוצע:',options:['$2$','$8$','$4$','$14$'],correct:0,explanation:'$\\frac{11-3}{5-1}=\\frac{8}{4}=2$.'},
            {q:'מה מייצג קצב שינוי ממוצע גיאומטרית?',options:['שיפוע ישר המיתר','שטח','אורך הקטע','קודקוד'],correct:0,explanation:'זהו שיפוע הישר המחבר שתי נקודות על הגרף.'},
            {q:'קצב שינוי של $f(x)=x^3$ ב-$[0,2]$:',options:['$4$','$8$','$2$','$6$'],correct:0,explanation:'$\\frac{8-0}{2-0}=4$.'}
        ]
    },
    {
        id: 91,
        category: 'functions',
        title: 'פונקציה חד-חד-ערכית ועל',
        desc: 'סוגי פונקציות מיוחדים',
        theory: `
<h3>פונקציה חד-חד-ערכית (חח"ע)</h3>
<p>לכל $y$ בטווח יש <strong>לכל היותר $x$ אחד</strong>: $f(x_1)=f(x_2) \\Rightarrow x_1=x_2$.</p>
<p><strong>מבחן גרפי:</strong> כל ישר אופקי חותך את הגרף <strong>לכל היותר פעם אחת</strong>.</p>

<h3>פונקציה על (סורייקטיבית)</h3>
<p>לכל $y$ בטווח המטרה יש <strong>לפחות $x$ אחד</strong>.</p>

<h3>חח"ע ועל = הפיכה</h3>
<p>פונקציה שהיא גם חח"ע וגם על — יש לה פונקציה הפוכה.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$f(x)=2x+1$: חח"ע ✓ (לינארית עם שיפוע $\\neq 0$)</p>
<p>$f(x)=x^2$: <strong>לא</strong> חח"ע כי $f(2)=f(-2)=4$</p>
<p>$f(x)=x^2$ ב-$[0,\\infty)$: כן חח"ע!</p>
</div>
        `,
        questions: [
            {q:'$f(x)=x^3$ היא חח"ע?',options:['כן','לא','רק ב-$x>0$','רק ב-$x<0$'],correct:0,explanation:'$x^3$ עולה ממש → חח"ע.'},
            {q:'$f(x)=|x|$ היא חח"ע?',options:['לא','כן','רק ב-$x \\geq 0$','תלוי'],correct:0,explanation:'$f(2)=f(-2)=2$ → לא חח"ע.'},
            {q:'מבחן גרפי לחח"ע:',options:['ישר אופקי חותך לכל היותר פעם','ישר אנכי חותך פעם','הגרף עולה','הגרף רציף'],correct:0,explanation:'כל ישר אופקי $y=c$ חותך את הגרף לכל היותר פעם.'},
            {q:'פונקציה הפיכה חייבת להיות:',options:['חח"ע ועל','רק חח"ע','רק על','רציפה'],correct:0,explanation:'הפיכות = חח"ע + על.'},
            {q:'$f(x)=2^x$ היא חח"ע?',options:['כן','לא','רק ב-$x>0$','תלוי בבסיס'],correct:0,explanation:'$2^x$ עולה ממש → חח"ע. (ולכן יש לה הופכית: $\\log_2 x$.)'}
        ]
    },
    {
        id: 92,
        category: 'functions',
        title: 'פונקציה מדרגות (חתיכתית)',
        desc: 'הגדרה שונה בתחומים שונים',
        theory: `
<h3>הגדרה</h3>
<p>פונקציה חתיכתית מוגדרת ע"י כללים שונים בתחומים שונים:</p>
<div class="formula-box">$$f(x) = \\begin{cases} x^2 & x < 0 \\\\ 2x+1 & x \\geq 0 \\end{cases}$$</div>

<h3>איך מחשבים?</h3>
<p>1. בדקו לאיזה תחום שייך ה-$x$.</p>
<p>2. השתמשו בכלל המתאים.</p>

<h3>גרף</h3>
<p>משרטטים כל חלק בתחומו. בנקודת המעבר — עיגול מלא ($\\leq$) או ריק ($<$).</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$f(-3) = (-3)^2 = 9$ (כי $-3 < 0$)</p>
<p>$f(2) = 2(2)+1 = 5$ (כי $2 \\geq 0$)</p>
<p>$f(0) = 2(0)+1 = 1$ (כי $0 \\geq 0$)</p>
</div>
        `,
        questions: [
            {q:'$f(x)=\\begin{cases} x+1 & x<2 \\\\ 3x & x \\geq 2 \\end{cases}$, $f(2)=$',options:['$6$','$3$','$5$','$4$'],correct:0,explanation:'$2 \\geq 2$ → $f(2)=3(2)=6$.'},
            {q:'באותה פונקציה, $f(1)=$',options:['$2$','$3$','$1$','$4$'],correct:0,explanation:'$1<2$ → $f(1)=1+1=2$.'},
            {q:'נקודת מעבר בפונקציה חתיכתית היא:',options:['הנקודה שבה הכלל משתנה','נקודת מקסימום','נקודת חיתוך','שורש'],correct:0,explanation:'שם הכלל עובר מחלק אחד לשני.'},
            {q:'$f(x)=\\begin{cases} 1 & x>0 \\\\ 0 & x=0 \\\\ -1 & x<0 \\end{cases}$ נקראת:',options:['פונקציית סימן','פונקציה ריבועית','פונקציה לינארית','ערך מוחלט'],correct:0,explanation:'זו פונקציית הסימן $\\text{sgn}(x)$.'},
            {q:'בגרף חתיכתי, עיגול ריק מסמן:',options:['הנקודה לא כלולה','הנקודה כלולה','מקסימום','מינימום'],correct:0,explanation:'עיגול ריק = הנקודה אינה שייכת לקטע (אי-שוויון חזק $<$).'}
        ]
    },
    {
        id: 93,
        category: 'functions',
        title: 'מבוא לגבול',
        desc: 'מושג הגבול ומשמעותו',
        theory: `
<h3>מהו גבול?</h3>
<p>$\\lim_{x \\to a} f(x) = L$ אומר: ככל ש-$x$ מתקרב ל-$a$, $f(x)$ מתקרב ל-$L$.</p>
<p><strong>חשוב:</strong> לא משנה מה הערך של $f$ ב-$a$ עצמו!</p>

<h3>חישוב גבולות</h3>
<p>• הצבה ישירה (אם אפשר): $\\lim_{x \\to 2} (x^2+1) = 5$.</p>
<p>• אם מקבלים $\\frac{0}{0}$: צמצמו ונסו שוב.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$\\lim_{x \\to 3} \\frac{x^2-9}{x-3} = \\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x-3} = \\lim_{x \\to 3} (x+3) = 6$</p>
</div>

<div class="tip-box"><strong>טיפ:</strong> גבול $\\frac{0}{0}$ לא אומר שהתשובה 0 או שאין גבול — צריך לעבוד עוד!</div>
        `,
        questions: [
            {q:'$\\lim_{x \\to 1} (3x+2) =$',options:['$5$','$3$','$2$','$1$'],correct:0,explanation:'הצבה ישירה: $3(1)+2=5$.'},
            {q:'$\\lim_{x \\to 2} \\frac{x^2-4}{x-2} =$',options:['$4$','$0$','$2$','לא קיים'],correct:0,explanation:'$\\frac{(x-2)(x+2)}{x-2}=x+2 \\to 4$.'},
            {q:'$\\lim_{x \\to 0} \\frac{x}{x} =$',options:['$1$','$0$','לא קיים','$\\infty$'],correct:0,explanation:'$\\frac{x}{x}=1$ לכל $x \\neq 0$, ולכן הגבול $=1$.'},
            {q:'אם $\\lim_{x \\to a} f(x) = 3$, האם בהכרח $f(a)=3$?',options:['לא','כן','רק אם רציפה','תמיד'],correct:0,explanation:'הגבול תלוי בערכים <strong>סביב</strong> $a$, לא בערך ב-$a$ עצמו.'},
            {q:'$\\lim_{x \\to 4} \\frac{\\sqrt{x}-2}{x-4} =$',options:['$\\frac{1}{4}$','$0$','$2$','$\\frac{1}{2}$'],correct:0,explanation:'$\\frac{\\sqrt{x}-2}{(\\sqrt{x}-2)(\\sqrt{x}+2)}=\\frac{1}{\\sqrt{x}+2} \\to \\frac{1}{4}$.'}
        ]
    },
    {
        id: 94,
        category: 'functions',
        title: 'העתקות וטרנספורמציות',
        desc: 'שיקוף, מתיחה, כיווץ של גרפים',
        theory: `
<h3>טרנספורמציות על גרפים</h3>
<p>מהגרף של $y=f(x)$ ניתן לבנות גרפים חדשים:</p>

<p><strong>הזזה אנכית:</strong> $y=f(x)+k$ — למעלה ב-$k$</p>
<p><strong>הזזה אופקית:</strong> $y=f(x-h)$ — ימינה ב-$h$</p>
<p><strong>שיקוף ציר $x$:</strong> $y=-f(x)$</p>
<p><strong>שיקוף ציר $y$:</strong> $y=f(-x)$</p>
<p><strong>מתיחה אנכית:</strong> $y=a \\cdot f(x)$ ($|a|>1$ מותח, $|a|<1$ מכווץ)</p>

<div class="tip-box"><strong>כלל:</strong> שינויים "בתוך" $f($ $)$ — אופקיים והפוכים. שינויים "מחוץ" — אנכיים וישירים.</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$y=x^2$ → $y=(x-3)^2+2$: הפרבולה זזה 3 ימינה, 2 למעלה. קודקוד $(3,2)$.</p>
</div>
        `,
        questions: [
            {q:'$y=f(x)+5$ ביחס ל-$y=f(x)$:',options:['הזזה 5 למעלה','הזזה 5 ימינה','מתיחה פי 5','שיקוף'],correct:0,explanation:'$+5$ מחוץ ל-$f$ → הזזה אנכית למעלה.'},
            {q:'$y=f(x+3)$ ביחס ל-$y=f(x)$:',options:['הזזה 3 שמאלה','הזזה 3 ימינה','הזזה 3 למעלה','מתיחה'],correct:0,explanation:'$x+3$ = $x-(-3)$ → הזזה 3 שמאלה (הפוך לסימן).'},
            {q:'$y=-f(x)$ זהו:',options:['שיקוף ציר $x$','שיקוף ציר $y$','הזזה','סיבוב'],correct:0,explanation:'$-f(x)$ הופך חיובי לשלילי ולהפך → שיקוף סביב ציר $x$.'},
            {q:'קודקוד $y=(x+1)^2-4$:',options:['$(-1,-4)$','$(1,-4)$','$(-1,4)$','$(1,4)$'],correct:0,explanation:'$x+1=0$ → $x=-1$, ואז $y=-4$. קודקוד $(-1,-4)$.'},
            {q:'$y=2f(x)$ ביחס ל-$y=f(x)$:',options:['מתיחה אנכית פי 2','הזזה 2 למעלה','מתיחה אופקית','הזזה 2 ימינה'],correct:0,explanation:'כפל מחוץ ל-$f$ = מתיחה אנכית.'}
        ]
    },
    {
        id: 95,
        category: 'functions',
        title: 'פונקציה לוגריתמית — מתקדם',
        desc: 'חוקים, גרף ופתרון משוואות',
        theory: `
<h3>חוקי לוגריתמים — סיכום</h3>
<div class="formula-box">
$$\\log(ab) = \\log a + \\log b$$
$$\\log\\frac{a}{b} = \\log a - \\log b$$
$$\\log a^n = n\\log a$$
$$\\log_a b = \\frac{\\log b}{\\log a} \\quad \\text{(המרת בסיס)}$$
</div>

<h3>גרף $y = \\log_a x$</h3>
<p>• תחום: $x > 0$</p>
<p>• עובר דרך $(1, 0)$ תמיד</p>
<p>• אם $a > 1$: עולה. אם $0 < a < 1$: יורדת</p>
<p>• אסימפטוטה אנכית: $x = 0$</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$\\log_2 8 + \\log_2 4 = \\log_2(8 \\cdot 4) = \\log_2 32 = 5$</p>
<p>$\\log 1000 - \\log 10 = \\log \\frac{1000}{10} = \\log 100 = 2$</p>
</div>
        `,
        questions: [
            {q:'$\\log_3 81 =$',options:['$4$','$3$','$27$','$9$'],correct:0,explanation:'$3^4=81 \\Rightarrow \\log_3 81=4$.'},
            {q:'$\\log 2 + \\log 50 =$',options:['$2$','$\\log 52$','$\\log 100$','$\\log 25$'],correct:0,explanation:'$\\log 2 + \\log 50 = \\log(2 \\cdot 50) = \\log 100 = 2$.'},
            {q:'$\\log_2 x = 5 \\Rightarrow x =$',options:['$32$','$10$','$25$','$64$'],correct:0,explanation:'$x = 2^5 = 32$.'},
            {q:'$\\log a^3 =$',options:['$3\\log a$','$\\log 3a$','$(\\log a)^3$','$\\log a + 3$'],correct:0,explanation:'חוק: $\\log a^n = n \\log a$.'},
            {q:'הגרף של $y=\\log_2 x$ עובר דרך:',options:['$(1,0)$','$(0,1)$','$(2,0)$','$(0,0)$'],correct:0,explanation:'$\\log_2 1 = 0$, לכן $(1,0)$.'}
        ]
    },
    {
        id: 96,
        category: 'geometry',
        title: 'מרחק בין נקודות',
        desc: 'נוסחת מרחק ונקודת אמצע',
        theory: `
<h3>נוסחת מרחק</h3>
<div class="formula-box">$$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$$</div>
<p>זוהי פשוט פיתגורס — המרחק הוא היתר של משולש ישר-זווית.</p>

<h3>נקודת אמצע</h3>
<div class="formula-box">$$M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$A(1,2), B(4,6)$:</p>
<p>$d = \\sqrt{9+16} = 5$</p>
<p>$M = (2.5, 4)$</p>
</div>
        `,
        questions: [
            {q:'מרחק בין $(0,0)$ ל-$(3,4)$:',options:['$5$','$7$','$\\sqrt{7}$','$25$'],correct:0,explanation:'$\\sqrt{9+16}=5$.'},
            {q:'אמצע הקטע $(2,6)$ ו-$(8,10)$:',options:['$(5,8)$','$(10,16)$','$(3,2)$','$(6,4)$'],correct:0,explanation:'$(\\frac{10}{2},\\frac{16}{2})=(5,8)$.'},
            {q:'מרחק בין $(1,1)$ ל-$(1,5)$:',options:['$4$','$6$','$5$','$2$'],correct:0,explanation:'$\\sqrt{0+16}=4$. (אותו $x$ → מרחק אנכי פשוט.)'},
            {q:'אם $M(3,5)$ אמצע $A(1,2)$ ו-$B$, אז $B=$:',options:['$(5,8)$','$(2,3.5)$','$(4,7)$','$(2,7)$'],correct:0,explanation:'$\\frac{1+x}{2}=3 \\Rightarrow x=5$, $\\frac{2+y}{2}=5 \\Rightarrow y=8$.'},
            {q:'מרחק $(−2,3)$ ל-$(4,−1)$:',options:['$\\sqrt{52}$','$\\sqrt{20}$','$8$','$10$'],correct:0,explanation:'$\\sqrt{36+16}=\\sqrt{52}=2\\sqrt{13}$.'}
        ]
    },
    {
        id: 97,
        category: 'geometry',
        title: 'משוואת ישר',
        desc: 'צורות שונות של משוואת ישר',
        theory: `
<h3>צורת שיפוע-חיתוך</h3>
<div class="formula-box">$$y = mx + b$$</div>
<p>$m$ = שיפוע, $b$ = חיתוך עם ציר $y$.</p>

<h3>שיפוע דרך 2 נקודות</h3>
<div class="formula-box">$$m = \\frac{y_2-y_1}{x_2-x_1}$$</div>

<h3>ישרים מקבילים ומאונכים</h3>
<p>• מקבילים: $m_1 = m_2$</p>
<p>• מאונכים: $m_1 \\cdot m_2 = -1$</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>ישר דרך $(1,3)$ ו-$(4,9)$: $m=\\frac{9-3}{4-1}=2$.</p>
<p>$y=2x+b$, הצבת $(1,3)$: $3=2+b \\Rightarrow b=1$. ישר: $y=2x+1$.</p>
</div>
        `,
        questions: [
            {q:'שיפוע הישר $y=3x-7$:',options:['$3$','$-7$','$7$','$-3$'],correct:0,explanation:'$m=3$ (המקדם של $x$).'},
            {q:'שיפוע דרך $(2,1)$ ו-$(6,9)$:',options:['$2$','$\\frac{1}{2}$','$4$','$8$'],correct:0,explanation:'$m=\\frac{9-1}{6-2}=\\frac{8}{4}=2$.'},
            {q:'ישר מאונך ל-$y=2x+1$ שיפועו:',options:['$-\\frac{1}{2}$','$2$','$\\frac{1}{2}$','$-2$'],correct:0,explanation:'$m_1 \\cdot m_2=-1 \\Rightarrow m_2=-\\frac{1}{2}$.'},
            {q:'חיתוך ציר $y$ של $y=-x+5$:',options:['$(0,5)$','$(5,0)$','$(0,-1)$','$(0,-5)$'],correct:0,explanation:'$b=5$, חיתוך ב-$(0,5)$.'},
            {q:'ישר מקביל ל-$y=4x+3$:',options:['$y=4x-1$','$y=-4x+3$','$y=3x+4$','$y=-\\frac{1}{4}x$'],correct:0,explanation:'מקביל = אותו שיפוע $m=4$.'}
        ]
    },
    {
        id: 98,
        category: 'geometry',
        title: 'מרובעים מיוחדים',
        desc: 'מקבילית, מעוין, מלבן, טרפז',
        theory: `
<h3>היררכיית המרובעים</h3>
<p><strong>מקבילית:</strong> 2 זוגות צלעות מקבילות. אלכסונים חוצים זה את זה.</p>
<p><strong>מלבן:</strong> מקבילית + כל הזוויות $90°$. אלכסונים שווים.</p>
<p><strong>מעוין:</strong> מקבילית + כל הצלעות שוות. אלכסונים מאונכים.</p>
<p><strong>ריבוע:</strong> מלבן + מעוין. כל הצלעות שוות וכל הזוויות $90°$.</p>

<h3>שטחים</h3>
<div class="formula-box">
מקבילית: $S=ah$ ∙ מעוין: $S=\\frac{d_1 \\cdot d_2}{2}$ ∙ טרפז: $S=\\frac{(a+b)h}{2}$
</div>

<div class="tip-box"><strong>טיפ:</strong> כל ריבוע הוא מעוין, וכל מעוין הוא מקבילית — אבל לא להפך!</div>
        `,
        questions: [
            {q:'במקבילית, האלכסונים:',options:['חוצים זה את זה','שווים','מאונכים','חוצים זוויות'],correct:0,explanation:'תכונה מגדירה של מקבילית: אלכסונים חוצים זה את זה.'},
            {q:'שטח מעוין עם אלכסונים $6$ ו-$8$:',options:['$24$','$48$','$14$','$7$'],correct:0,explanation:'$S=\\frac{6 \\cdot 8}{2}=24$.'},
            {q:'שטח טרפז עם בסיסים $5$ ו-$9$ וגובה $4$:',options:['$28$','$36$','$20$','$56$'],correct:0,explanation:'$S=\\frac{(5+9) \\cdot 4}{2}=28$.'},
            {q:'ריבוע הוא מקרה פרטי של:',options:['מלבן ומעוין','רק מלבן','רק מעוין','טרפז'],correct:0,explanation:'ריבוע = מלבן (זוויות $90°$) + מעוין (צלעות שוות).'},
            {q:'במלבן, האלכסונים:',options:['שווים','מאונכים','חוצים זוויות','לא חוצים זה את זה'],correct:0,explanation:'במלבן אלכסונים שווים באורכם (וגם חוצים זה את זה כי מקבילית).'}
        ]
    },
    {
        id: 99,
        category: 'geometry',
        title: 'חפיפת משולשים',
        desc: 'משפטי חפיפה ושימושים',
        theory: `
<h3>חפיפת משולשים</h3>
<p>שני משולשים חופפים אם ניתן להניח אחד על השני בדיוק. כל הצלעות והזוויות המתאימות שוות.</p>

<h3>משפטי חפיפה</h3>
<p><strong>צ.צ.צ:</strong> 3 צלעות שוות.</p>
<p><strong>צ.ז.צ:</strong> 2 צלעות והזווית ביניהן שוות.</p>
<p><strong>ז.צ.ז:</strong> 2 זוויות והצלע ביניהן שוות.</p>
<p><strong>ז.ז.צ:</strong> 2 זוויות וצלע מתאימה (לא בהכרח ביניהן).</p>

<div class="tip-box"><strong>שימו לב:</strong> ז.ז.ז לא מספיק! שני משולשים עם אותן זוויות יכולים להיות בגדלים שונים (דומים אבל לא חופפים).</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$\\triangle ABC$ ו-$\\triangle DEF$ עם $AB=DE=5$, $\\angle A=\\angle D=60°$, $AC=DF=7$.</p>
<p>חופפים לפי צ.ז.צ.</p>
</div>
        `,
        questions: [
            {q:'איזה משפט חפיפה: 3 צלעות שוות?',options:['צ.צ.צ','צ.ז.צ','ז.צ.ז','ז.ז.ז'],correct:0,explanation:'צ.צ.צ = 3 צלעות מתאימות שוות.'},
            {q:'ז.ז.ז מבטיח:',options:['דמיון, לא חפיפה','חפיפה','כלום','חפיפה רק בישר-זווית'],correct:0,explanation:'אותן זוויות = אותה צורה, אבל לא בהכרח אותו גודל.'},
            {q:'אם $\\triangle ABC \\cong \\triangle DEF$ אז:',options:['$AB=DE, BC=EF, AC=DF$','רק השטחים שווים','הם דומים בלבד','רק הזוויות שוות'],correct:0,explanation:'חפיפה = כל הצלעות והזוויות המתאימות שוות.'},
            {q:'כמה משפטי חפיפה יש?',options:['$4$','$3$','$5$','$2$'],correct:0,explanation:'צ.צ.צ, צ.ז.צ, ז.צ.ז, ז.ז.צ — ארבעה.'},
            {q:'למשולשים ישרי-זווית יש משפט חפיפה נוסף:',options:['ניצב-יתר','ז.ז.ז','צ.צ.ז','ז.ז.ז.ז'],correct:0,explanation:'ניצב-יתר: ניצב ויתר שווים → חופפים.'}
        ]
    },
    {
        id: 100,
        category: 'geometry',
        title: 'דמיון משולשים — מתקדם',
        desc: 'יחסי דמיון ושימושים',
        theory: `
<h3>דמיון</h3>
<p>שני משולשים דומים אם הזוויות שוות ויחסי הצלעות קבועים.</p>
<div class="formula-box">$$\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{AC}{DF} = k \\quad \\text{(יחס דמיון)}$$</div>

<h3>משפטי דמיון</h3>
<p><strong>ז.ז:</strong> 2 זוויות שוות (השלישית שווה אוטומטית).</p>
<p><strong>צ.צ.צ (יחסי):</strong> יחסי כל 3 הצלעות שווים.</p>
<p><strong>צ.ז.צ (יחסי):</strong> יחס 2 צלעות שווה + הזווית ביניהן שווה.</p>

<h3>קשר בין שטחים</h3>
<div class="formula-box">$$\\frac{S_1}{S_2} = k^2$$</div>
<p>אם יחס הדמיון $k$, יחס השטחים הוא $k^2$.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>יחס דמיון $k=2$. אם שטח המשולש הקטן $= 5$, שטח הגדול $= 5 \\cdot 4 = 20$.</p>
</div>
        `,
        questions: [
            {q:'אם יחס הדמיון $k=3$, יחס השטחים:',options:['$9$','$3$','$6$','$27$'],correct:0,explanation:'$k^2 = 9$.'},
            {q:'משפט דמיון ז.ז דורש:',options:['2 זוויות שוות','2 צלעות שוות','3 זוויות','3 צלעות'],correct:0,explanation:'2 זוויות מספיקות (השלישית נגזרת מסכום $180°$).'},
            {q:'משולשים דומים עם צלעות $3,4,5$ ו-$6,8,?$:',options:['$10$','$9$','$7$','$12$'],correct:0,explanation:'יחס $k=2$: $5 \\cdot 2 = 10$.'},
            {q:'מרחק על מפה 2 ס"מ = 100 ק"מ. 5 ס"מ =:',options:['250 ק"מ','500 ק"מ','200 ק"מ','50 ק"מ'],correct:0,explanation:'יחס: $\\frac{5}{2} \\cdot 100 = 250$ ק"מ.'},
            {q:'$\\frac{AB}{DE}=\\frac{1}{4}$ ו-$S_{ABC}=8$. $S_{DEF}=$:',options:['$128$','$32$','$2$','$64$'],correct:0,explanation:'$k=\\frac{1}{4} \\Rightarrow k^2=\\frac{1}{16} \\Rightarrow S_{DEF} = 8 \\cdot 16 = 128$.'}
        ]
    },
    {
        id: 101,
        category: 'trigonometry',
        title: 'ערכי טריגונומטריה — זוויות מיוחדות',
        desc: 'ערכים מדויקים של 30°, 45°, 60°',
        theory: `
<h3>טבלת ערכים</h3>
<table style="width:100%; border-collapse:collapse; margin:15px 0; text-align:center;">
<tr style="background:var(--primary);color:white;">
<td style="padding:8px;border:1px solid #ddd">$\\theta$</td><td style="padding:8px;border:1px solid #ddd">$\\sin$</td><td style="padding:8px;border:1px solid #ddd">$\\cos$</td><td style="padding:8px;border:1px solid #ddd">$\\tan$</td>
</tr>
<tr><td style="padding:8px;border:1px solid #ddd">$0°$</td><td style="padding:8px;border:1px solid #ddd">$0$</td><td style="padding:8px;border:1px solid #ddd">$1$</td><td style="padding:8px;border:1px solid #ddd">$0$</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">$30°$</td><td style="padding:8px;border:1px solid #ddd">$\\frac{1}{2}$</td><td style="padding:8px;border:1px solid #ddd">$\\frac{\\sqrt{3}}{2}$</td><td style="padding:8px;border:1px solid #ddd">$\\frac{1}{\\sqrt{3}}$</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">$45°$</td><td style="padding:8px;border:1px solid #ddd">$\\frac{\\sqrt{2}}{2}$</td><td style="padding:8px;border:1px solid #ddd">$\\frac{\\sqrt{2}}{2}$</td><td style="padding:8px;border:1px solid #ddd">$1$</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">$60°$</td><td style="padding:8px;border:1px solid #ddd">$\\frac{\\sqrt{3}}{2}$</td><td style="padding:8px;border:1px solid #ddd">$\\frac{1}{2}$</td><td style="padding:8px;border:1px solid #ddd">$\\sqrt{3}$</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">$90°$</td><td style="padding:8px;border:1px solid #ddd">$1$</td><td style="padding:8px;border:1px solid #ddd">$0$</td><td style="padding:8px;border:1px solid #ddd">—</td></tr>
</table>

<div class="tip-box"><strong>טיפ לזכירה:</strong> סינוס: $\\frac{\\sqrt{0}}{2}, \\frac{\\sqrt{1}}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}, \\frac{\\sqrt{4}}{2}$ (מ-$0°$ עד $90°$).</div>
        `,
        questions: [
            {q:'$\\sin 30° =$',options:['$\\frac{1}{2}$','$\\frac{\\sqrt{3}}{2}$','$\\frac{\\sqrt{2}}{2}$','$1$'],correct:0,explanation:'ערך ידוע: $\\sin 30° = \\frac{1}{2}$.'},
            {q:'$\\cos 60° =$',options:['$\\frac{1}{2}$','$\\frac{\\sqrt{3}}{2}$','$0$','$1$'],correct:0,explanation:'$\\cos 60° = \\frac{1}{2}$. (שימו לב: $\\cos 60°=\\sin 30°$!)'},
            {q:'$\\tan 45° =$',options:['$1$','$0$','$\\frac{\\sqrt{2}}{2}$','$\\sqrt{2}$'],correct:0,explanation:'$\\tan 45° = \\frac{\\sin 45°}{\\cos 45°} = 1$.'},
            {q:'$\\sin 90° =$',options:['$1$','$0$','$\\frac{1}{2}$','לא מוגדר'],correct:0,explanation:'$\\sin 90° = 1$.'},
            {q:'$\\cos 45° =$',options:['$\\frac{\\sqrt{2}}{2}$','$\\frac{1}{2}$','$1$','$\\frac{\\sqrt{3}}{2}$'],correct:0,explanation:'$\\cos 45° = \\frac{\\sqrt{2}}{2} \\approx 0.707$.'}
        ]
    },
    {
        id: 102,
        category: 'trigonometry',
        title: 'משוואות טריגונומטריות — שיטות פתרון',
        desc: 'פתרון $\\sin x = a$, $\\cos x = a$',
        theory: `
<h3>$\\sin x = a$</h3>
<p>אם $|a| \\leq 1$:</p>
<div class="formula-box">$$x = \\alpha + 360°n \\quad \\text{או} \\quad x = 180°-\\alpha + 360°n$$</div>
<p>כאשר $\\alpha = \\arcsin(a)$ ו-$n$ שלם.</p>

<h3>$\\cos x = a$</h3>
<div class="formula-box">$$x = \\pm\\alpha + 360°n \\quad (\\alpha = \\arccos(a))$$</div>

<h3>$\\tan x = a$</h3>
<div class="formula-box">$$x = \\alpha + 180°n \\quad (\\alpha = \\arctan(a))$$</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$\\sin x = \\frac{1}{2}$ → $x = 30° + 360°n$ או $x = 150° + 360°n$.</p>
<p>$\\cos x = 0$ → $x = 90° + 360°n$ או $x = -90°+360°n = 90°+180°n$.</p>
</div>
        `,
        questions: [
            {q:'$\\sin x = 0$ פתרונות ב-$[0°, 360°]$:',options:['$0°, 180°, 360°$','$0°, 90°$','$90°, 270°$','$0°$'],correct:0,explanation:'$\\sin x=0$ ב-$0°, 180°, 360°$.'},
            {q:'$\\cos x = 1$ פתרון ב-$[0°, 360°]$:',options:['$0°$ (ו-$360°$)','$90°$','$180°$','$270°$'],correct:0,explanation:'$\\cos 0°=1$. הפתרון היחיד.'},
            {q:'$\\tan x = 1$ פתרונות ב-$[0°, 360°)$:',options:['$45°, 225°$','$45°$','$45°, 135°$','$45°, 315°$'],correct:0,explanation:'$\\tan 45°=1$, ו-$45°+180°=225°$.'},
            {q:'ל-$\\sin x = 2$ יש:',options:['אין פתרון','$x=2$','$x=90°$','אינסוף פתרונות'],correct:0,explanation:'$|\\sin x| \\leq 1$, לכן $\\sin x = 2$ בלתי אפשרי.'},
            {q:'$\\cos x = -\\frac{1}{2}$ ב-$[0°, 360°)$:',options:['$120°, 240°$','$60°, 300°$','$150°, 210°$','$120°$'],correct:0,explanation:'$\\arccos(-\\frac{1}{2})=120°$, ו-$360°-120°=240°$.'}
        ]
    },
    {
        id: 103,
        category: 'trigonometry',
        title: 'הוכחת זהויות טריגונומטריות',
        desc: 'שיטות להוכחת שוויונות',
        theory: `
<h3>שיטות הוכחה</h3>
<p><strong>שיטה 1:</strong> עבדו על צד אחד בלבד עד שמגיעים לצד השני.</p>
<p><strong>שיטה 2:</strong> עבדו על שני הצדדים ותראו שמגיעים לביטוי זהה.</p>
<p><strong>שיטה 3:</strong> הפחיתו צד מצד ותראו שמקבלים 0.</p>

<h3>כלים שימושיים</h3>
<p>• $\\sin^2 x + \\cos^2 x = 1$</p>
<p>• $\\tan x = \\frac{\\sin x}{\\cos x}$</p>
<p>• $1+\\tan^2 x = \\frac{1}{\\cos^2 x}$</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>הוכיחו: $\\frac{\\sin x}{\\cos x}+\\frac{\\cos x}{\\sin x} = \\frac{1}{\\sin x \\cos x}$</p>
<p>צד שמאל: $\\frac{\\sin^2 x + \\cos^2 x}{\\sin x \\cos x} = \\frac{1}{\\sin x \\cos x}$ ✓</p>
</div>
        `,
        questions: [
            {q:'$\\sin^2 x + \\cos^2 x =$',options:['$1$','$0$','$\\sin 2x$','$2$'],correct:0,explanation:'זהות פיתגורית יסודית.'},
            {q:'$\\frac{\\sin x}{\\cos x} =$',options:['$\\tan x$','$\\cot x$','$\\sec x$','$1$'],correct:0,explanation:'הגדרת טנגנס.'},
            {q:'$(1-\\sin^2 x) =$',options:['$\\cos^2 x$','$\\sin^2 x$','$1$','$\\tan^2 x$'],correct:0,explanation:'מהזהות: $\\cos^2 x = 1-\\sin^2 x$.'},
            {q:'$\\tan^2 x + 1 =$',options:['$\\frac{1}{\\cos^2 x}$','$\\frac{1}{\\sin^2 x}$','$1$','$\\sec x$'],correct:0,explanation:'$\\frac{\\sin^2 x}{\\cos^2 x}+1 = \\frac{\\sin^2 x+\\cos^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x}$.'},
            {q:'בהוכחת זהות, מומלץ:',options:['לעבוד על צד אחד','להכפיל ב-0','להציב ערכים','לגזור'],correct:0,explanation:'עובדים על הצד ה"מסובך" עד שמגיעים לצד השני.'}
        ]
    },
    {
        id: 104,
        category: 'trigonometry',
        title: 'טריגונומטריה יישומית',
        desc: 'בעיות מילוליות עם טריגונומטריה',
        theory: `
<h3>שימושים במציאות</h3>
<p><strong>זווית הגבהה:</strong> הזווית כלפי מעלה מקו האופק.</p>
<p><strong>זווית שקיעה:</strong> הזווית כלפי מטה מקו האופק.</p>

<h3>שיטת פתרון</h3>
<p>1. שרטטו סקיצה.</p>
<p>2. סמנו את הזוויות והצלעות הידועות.</p>
<p>3. זהו משולש ישר-זווית.</p>
<p>4. השתמשו ב-$\\sin$/$\\cos$/$\\tan$ בהתאם.</p>

<div class="example-box">
<div class="example-title">דוגמה — גובה בניין</div>
<p>עומדים 50 מ' מבניין. זווית הגבהה לגג = $60°$. גובה הבניין?</p>
<p>$\\tan 60° = \\frac{h}{50} \\Rightarrow h = 50\\sqrt{3} \\approx 86.6$ מ'</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה — רוחב נהר</div>
<p>רוחב נהר: מודדים 100 מ' לאורך הגדה, זווית ישירה לעץ בצד השני = $35°$.</p>
<p>$\\tan 35° = \\frac{d}{100} \\Rightarrow d = 100 \\tan 35° \\approx 70$ מ'</p>
</div>
        `,
        questions: [
            {q:'זווית הגבהה $45°$, מרחק 20 מטר. הגובה:',options:['20 מטר','10 מטר','$20\\sqrt{2}$ מטר','40 מטר'],correct:0,explanation:'$\\tan 45°=1 \\Rightarrow h=20$ מטר.'},
            {q:'סולם באורך 10 מטר נשען בזווית $60°$. לאיזה גובה מגיע?',options:['$5\\sqrt{3}$ מטר','5 מטר','10 מטר','$10\\sqrt{3}$ מטר'],correct:0,explanation:'$\\sin 60° = \\frac{h}{10} \\Rightarrow h = 10 \\cdot \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}$.'},
            {q:'מגדל בגובה 100 מטר. זווית שקיעה לנקודה $= 30°$. המרחק:',options:['$100\\sqrt{3}$ מטר','50 מטר','200 מטר','$50\\sqrt{3}$ מטר'],correct:0,explanation:'$\\tan 30° = \\frac{100}{d} \\Rightarrow d = \\frac{100}{\\frac{1}{\\sqrt{3}}} = 100\\sqrt{3}$.'},
            {q:'זווית הגבהה היא:',options:['זווית מהאופק כלפי מעלה','זווית מהאופק כלפי מטה','זווית ישרה','זווית חדה'],correct:0,explanation:'הגבהה = מסתכלים מעלה מקו האופק.'},
            {q:'אם $\\sin \\theta = 0.6$ וניצב = 30, היתר:',options:['$50$','$18$','$36$','$30$'],correct:0,explanation:'$\\sin \\theta = \\frac{30}{\\text{יתר}} = 0.6 \\Rightarrow \\text{יתר} = 50$.'}
        ]
    },
    {
        id: 105,
        category: 'probability',
        title: 'עצי הסתברות',
        desc: 'ייצוג ופתרון בעיות בשלבים',
        theory: `
<h3>מהו עץ הסתברות?</h3>
<p>תרשים המראה את כל התוצאות האפשריות בניסוי רב-שלבי. כל ענף מייצג אפשרות עם ההסתברות שלה.</p>

<h3>כללים</h3>
<p>• <strong>לאורך ענף:</strong> כופלים הסתברויות.</p>
<p>• <strong>בין ענפים:</strong> מחברים (כי הם זרים).</p>
<p>• הסתברויות היוצאות מכל צומת מסתכמות ל-1.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>שקית: 3 אדומים, 2 כחולים. שולפים 2 ללא החזרה.</p>
<p>$P(\\text{2 אדומים}) = \\frac{3}{5} \\cdot \\frac{2}{4} = \\frac{6}{20} = \\frac{3}{10}$</p>
<p>$P(\\text{אדום ואז כחול}) = \\frac{3}{5} \\cdot \\frac{2}{4} = \\frac{6}{20} = \\frac{3}{10}$</p>
</div>

<div class="tip-box"><strong>עם/בלי החזרה:</strong> בלי החזרה — ההסתברויות משתנות. עם החזרה — נשארות.</div>
        `,
        questions: [
            {q:'לאורך ענף בעץ הסתברות:',options:['כופלים','מחברים','מחסרים','ממצעים'],correct:0,explanation:'הסתברות שרשרת אירועים = מכפלת ההסתברויות.'},
            {q:'3 לבנים, 2 שחורים. שולפים 2 עם החזרה. $P(\\text{2 לבנים})$:',options:['$\\frac{9}{25}$','$\\frac{6}{20}$','$\\frac{3}{10}$','$\\frac{1}{5}$'],correct:0,explanation:'$\\frac{3}{5} \\cdot \\frac{3}{5} = \\frac{9}{25}$ (עם החזרה — אותן הסתברויות).'},
            {q:'מטיל מטבע 2 פעמים. $P(\\text{2 עץ})$:',options:['$\\frac{1}{4}$','$\\frac{1}{2}$','$\\frac{1}{3}$','$1$'],correct:0,explanation:'$\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$.'},
            {q:'בעץ הסתברות, ענפים מאותו צומת מסתכמים ל:',options:['$1$','$0$','$0.5$','תלוי'],correct:0,explanation:'כל האפשרויות מצומת = 100% = 1.'},
            {q:'4 אדומים, 6 כחולים. שולפים 2 ללא החזרה. $P(\\text{שניהם כחולים})$:',options:['$\\frac{1}{3}$','$\\frac{9}{25}$','$\\frac{6}{10}$','$\\frac{2}{5}$'],correct:0,explanation:'$\\frac{6}{10} \\cdot \\frac{5}{9} = \\frac{30}{90} = \\frac{1}{3}$.'}
        ]
    },
    {
        id: 106,
        category: 'probability',
        title: 'טבלאות שכיחות',
        desc: 'ארגון נתונים וחישוב מדדים',
        theory: `
<h3>טבלת שכיחות</h3>
<p>מארגנת נתונים לפי ערכים וכמה פעמים הם מופיעים:</p>

<table style="width:80%;border-collapse:collapse;margin:15px auto;text-align:center;">
<tr style="background:var(--primary);color:white;"><td style="padding:8px;border:1px solid #ddd">ערך</td><td style="padding:8px;border:1px solid #ddd">שכיחות</td><td style="padding:8px;border:1px solid #ddd">שכיחות יחסית</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">5</td><td style="padding:8px;border:1px solid #ddd">3</td><td style="padding:8px;border:1px solid #ddd">$3/10$</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">7</td><td style="padding:8px;border:1px solid #ddd">5</td><td style="padding:8px;border:1px solid #ddd">$5/10$</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">9</td><td style="padding:8px;border:1px solid #ddd">2</td><td style="padding:8px;border:1px solid #ddd">$2/10$</td></tr>
</table>

<h3>שכיחות מצטברת</h3>
<p>סכום השכיחויות עד ערך מסוים. שימושי למציאת חציון.</p>

<div class="tip-box"><strong>חציון:</strong> הערך האמצעי כשמסדרים. אם $n$ זוגי: ממוצע שני האמצעיים.</div>
        `,
        questions: [
            {q:'שכיחות = כמה פעמים ערך:',options:['מופיע','הוא הממוצע','הוא המקסימום','שונה'],correct:0,explanation:'שכיחות = מספר ההופעות של ערך.'},
            {q:'שכיחות יחסית = שכיחות חלקי:',options:['סה"כ תצפיות','ערך מקסימלי','ממוצע','שכיחות מצטברת'],correct:0,explanation:'$\\text{שכיחות יחסית} = \\frac{\\text{שכיחות}}{n}$.'},
            {q:'ציונים: 80,80,90,90,90,100. החציון:',options:['$90$','$85$','$88.3$','$100$'],correct:0,explanation:'6 ערכים, אמצעיים: 3+4 = $\\frac{90+90}{2}=90$.'},
            {q:'סכום כל השכיחויות היחסיות שווה ל:',options:['$1$','$100$','תלוי ב-$n$','$0.5$'],correct:0,explanation:'סכום כל השכיחויות היחסיות = $\\frac{n}{n}=1$.'},
            {q:'שכיח (מודה) של $3,5,5,7,7,7,9$:',options:['$7$','$5$','$6$','$9$'],correct:0,explanation:'$7$ מופיע הכי הרבה (3 פעמים).'}
        ]
    },
    {
        id: 107,
        category: 'probability',
        title: 'הסתברות גיאומטרית',
        desc: 'הסתברות על בסיס שטח ואורך',
        theory: `
<h3>הרעיון</h3>
<p>כשמרחב המדגם הוא רציף (לא בדיד), ההסתברות מחושבת לפי יחס שטחים/אורכים:</p>
<div class="formula-box">$$P = \\frac{\\text{שטח/אורך אזור ההצלחה}}{\\text{שטח/אורך כולל}}$$</div>

<div class="example-box">
<div class="example-title">דוגמה — מטרה</div>
<p>מטרה עגולה ברדיוס 10, מרכזה (הבול) רדיוס 2.</p>
<p>$P(\\text{בול}) = \\frac{\\pi \\cdot 4}{\\pi \\cdot 100} = \\frac{4}{100} = 4\\%$</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה — זמן המתנה</div>
<p>אוטובוס מגיע כל 20 דקות. מה הסיכוי להמתין פחות מ-5 דקות?</p>
<p>$P = \\frac{5}{20} = 25\\%$</p>
</div>
        `,
        questions: [
            {q:'ריבוע $10 \\times 10$ עם עיגול פנימי $r=5$. $P(\\text{נפילה בעיגול})$:',options:['$\\frac{\\pi}{4}$','$\\frac{1}{2}$','$\\frac{1}{4}$','$\\pi$'],correct:0,explanation:'$\\frac{\\pi \\cdot 25}{100} = \\frac{\\pi}{4} \\approx 78.5\\%$.'},
            {q:'קטע $[0,10]$. בוחרים נקודה באקראי. $P(x<3)$:',options:['$0.3$','$0.03$','$3$','$0.7$'],correct:0,explanation:'$\\frac{3}{10}=0.3$.'},
            {q:'מטרה: רדיוס חיצוני 20, רדיוס פנימי 5. $P(\\text{טבעת})$:',options:['$\\frac{15}{16}$','$\\frac{1}{4}$','$\\frac{3}{4}$','$\\frac{1}{16}$'],correct:0,explanation:'$P(\\text{טבעת}) = \\frac{400\\pi-25\\pi}{400\\pi} = \\frac{375}{400}= \\frac{15}{16}$.'},
            {q:'אוטובוס כל 15 דקות. $P(\\text{המתנה $<$ 5 דקות})$:',options:['$\\frac{1}{3}$','$\\frac{1}{5}$','$\\frac{2}{3}$','$\\frac{1}{15}$'],correct:0,explanation:'$\\frac{5}{15}=\\frac{1}{3}$.'},
            {q:'הסתברות גיאומטרית משתמשת ב:',options:['יחס שטחים/אורכים','מספר תוצאות','עצי הסתברות','טבלאות'],correct:0,explanation:'ההסתברות = יחס אזור ההצלחה לאזור הכולל.'}
        ]
    },
    {
        id: 108,
        category: 'probability',
        title: 'משתנה מקרי',
        desc: 'הגדרה, התפלגות, תוחלת ושונות',
        theory: `
<h3>הגדרה</h3>
<p>משתנה מקרי $X$ הוא פונקציה שמשייכת ערך מספרי לכל תוצאה של ניסוי.</p>

<h3>טבלת התפלגות</h3>
<p>רושמים את כל ערכי $X$ וההסתברויות שלהם. סכום ההסתברויות = 1.</p>

<h3>תוחלת ושונות</h3>
<div class="formula-box">
$$E(X) = \\sum x_i P(x_i) \\qquad \\sigma^2(X) = E(X^2) - [E(X)]^2$$
</div>
<p>$\\sigma = \\sqrt{\\sigma^2(X)}$ = סטיית תקן.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$X$ = מספר עצים ב-2 הטלות מטבע:</p>
<p>$P(0)=\\frac{1}{4}, P(1)=\\frac{1}{2}, P(2)=\\frac{1}{4}$</p>
<p>$E(X) = 0 \\cdot \\frac{1}{4}+1 \\cdot \\frac{1}{2}+2 \\cdot \\frac{1}{4} = 1$</p>
</div>
        `,
        questions: [
            {q:'סכום ההסתברויות בטבלת התפלגות:',options:['$1$','$0$','תלוי ב-$X$','$0.5$'],correct:0,explanation:'כל ההסתברויות מסתכמות ל-1.'},
            {q:'$P(X=1)=0.3, P(X=2)=0.5, P(X=3)=?$',options:['$0.2$','$0.3$','$0$','$1$'],correct:0,explanation:'$0.3+0.5+P(3)=1 \\Rightarrow P(3)=0.2$.'},
            {q:'$E(X)$ אם $P(0)=0.5, P(10)=0.5$:',options:['$5$','$0$','$10$','$7.5$'],correct:0,explanation:'$0 \\cdot 0.5+10 \\cdot 0.5=5$.'},
            {q:'שונות מודדת:',options:['פיזור סביב הממוצע','ערך ממוצע','ערך מרבי','הסתברות'],correct:0,explanation:'שונות = כמה הערכים מפוזרים סביב התוחלת.'},
            {q:'$\\sigma = \\sqrt{\\sigma^2(X)}$ נקראת:',options:['סטיית תקן','תוחלת','שונות','חציון'],correct:0,explanation:'סטיית תקן = שורש השונות.'}
        ]
    },
    {
        id: 109,
        category: 'sequences',
        title: 'הוכחה באינדוקציה',
        desc: 'שיטת הוכחה עבור טענות על מספרים טבעיים',
        theory: `
<h3>עקרון האינדוקציה</h3>
<p>שיטה להוכיח שטענה נכונה <strong>לכל</strong> מספר טבעי $n$:</p>
<p><strong>שלב 1 (בסיס):</strong> הוכיחו שהטענה נכונה ל-$n=1$.</p>
<p><strong>שלב 2 (צעד):</strong> הניחו שנכונה ל-$n=k$ (הנחת האינדוקציה), והוכיחו ל-$n=k+1$.</p>

<div class="tip-box"><strong>מטאפורה:</strong> כמו דומינו — אם החלק הראשון נופל (בסיס), וכל חלק שנופל מפיל את הבא (צעד), כולם נופלים!</div>

<div class="example-box">
<div class="example-title">דוגמה — $1+2+...+n = \\frac{n(n+1)}{2}$</div>
<p><strong>בסיס:</strong> $n=1$: $1=\\frac{1 \\cdot 2}{2}=1$ ✓</p>
<p><strong>צעד:</strong> נניח $1+2+...+k=\\frac{k(k+1)}{2}$.</p>
<p>$1+2+...+k+(k+1) = \\frac{k(k+1)}{2}+(k+1) = \\frac{k(k+1)+2(k+1)}{2} = \\frac{(k+1)(k+2)}{2}$ ✓</p>
</div>
        `,
        questions: [
            {q:'השלב הראשון באינדוקציה:',options:['הוכחה למקרה הבסיסי','הנחה','צעד','מסקנה'],correct:0,explanation:'בסיס האינדוקציה — מוכיחים ל-$n=1$ (או הערך הראשון).'},
            {q:'בצעד האינדוקציה, מניחים שהטענה נכונה ל:',options:['$n=k$','$n=k+1$','$n=1$','כל $n$'],correct:0,explanation:'מניחים ל-$k$ ומוכיחים ל-$k+1$.'},
            {q:'אינדוקציה מוכיחה טענה עבור:',options:['כל $n$ טבעי','$n$ מסוים','$n$ זוגי בלבד','מספרים ממשיים'],correct:0,explanation:'האינדוקציה מוכיחה לכל מספר טבעי (מהבסיס ומעלה).'},
            {q:'בלי שלב הבסיס, האינדוקציה:',options:['לא תקפה','עדיין עובדת','חלקית','תלויה בטענה'],correct:0,explanation:'בלי בסיס, אין "דומינו ראשון" — אין הוכחה.'},
            {q:'אחרי הוכחת בסיס וצעד, המסקנה:',options:['הטענה נכונה לכל $n \\geq 1$','הטענה נכונה ל-$n=1,2$','צריך עוד שלבים','הטענה סבירה'],correct:0,explanation:'עקרון האינדוקציה: בסיס + צעד = הוכחה מלאה.'}
        ]
    },
    {
        id: 110,
        category: 'sequences',
        title: 'גבול סדרה',
        desc: 'מושג ההתכנסות וחישוב גבולות',
        theory: `
<h3>מהו גבול סדרה?</h3>
<p>$\\lim_{n \\to \\infty} a_n = L$ אומר שהאיברים מתקרבים ל-$L$ ככל ש-$n$ גדל.</p>

<h3>כללים חשובים</h3>
<p>• $\\lim \\frac{1}{n} = 0$</p>
<p>• $\\lim \\frac{c}{n^k} = 0$ לכל $k>0$</p>
<p>• $\\lim q^n = 0$ אם $|q|<1$</p>
<p>• $\\lim \\frac{an+b}{cn+d} = \\frac{a}{c}$ (מחלקים ב-$n$)</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$\\lim_{n \\to \\infty} \\frac{3n+1}{2n-5} = \\frac{3}{2}$ (מחלקים מונה ומכנה ב-$n$, $\\frac{1}{n} \\to 0$)</p>
<p>$\\lim_{n \\to \\infty} \\frac{n^2+1}{3n^2} = \\frac{1}{3}$ (מחלקים ב-$n^2$)</p>
</div>
        `,
        questions: [
            {q:'$\\lim_{n \\to \\infty} \\frac{1}{n} =$',options:['$0$','$1$','$\\infty$','לא קיים'],correct:0,explanation:'ככל ש-$n$ גדל, $\\frac{1}{n}$ מתקרב ל-0.'},
            {q:'$\\lim_{n \\to \\infty} \\frac{5n}{2n+1} =$',options:['$\\frac{5}{2}$','$5$','$0$','$\\infty$'],correct:0,explanation:'$\\frac{5n}{2n+1} = \\frac{5}{2+\\frac{1}{n}} \\to \\frac{5}{2}$.'},
            {q:'$\\lim_{n \\to \\infty} (0.9)^n =$',options:['$0$','$0.9$','$1$','$\\infty$'],correct:0,explanation:'$|0.9|<1 \\Rightarrow 0.9^n \\to 0$.'},
            {q:'$\\lim_{n \\to \\infty} \\frac{n}{n^2+1} =$',options:['$0$','$1$','$\\infty$','$\\frac{1}{2}$'],correct:0,explanation:'$\\frac{n}{n^2+1} = \\frac{1}{n+\\frac{1}{n}} \\to 0$ (מעלת מכנה גבוהה יותר).'},
            {q:'סדרה מתכנסת אם:',options:['יש לה גבול סופי','היא עולה','היא חסומה','היא מונוטונית'],correct:0,explanation:'מתכנסת = יש $L$ סופי שאליו מתקרבים.'}
        ]
    },
    {
        id: 111,
        category: 'sequences',
        title: 'סדרות בבעיות מילוליות',
        desc: 'זיהוי סדרות בהקשרים מעשיים',
        theory: `
<h3>זיהוי סדרה חשבונית</h3>
<p>תוספת קבועה בכל שלב: משכורת עולה ב-500₪ כל שנה, בריכה מתמלאת בקצב קבוע.</p>

<h3>זיהוי סדרה הנדסית</h3>
<p>כפולה קבועה: ריבית דריבית, גדילת חיידקים (הכפלה), פחת.</p>

<div class="example-box">
<div class="example-title">דוגמה — חיסכון</div>
<p>מפקידים 500₪ בחודש הראשון, ועוד 100₪ כל חודש.</p>
<p>חודש 1: 500, חודש 2: 600, חודש 3: 700...</p>
<p>$a_n = 500 + (n-1) \\cdot 100 = 400+100n$ (חשבונית, $d=100$)</p>
<p>סה"כ ב-12 חודשים: $S_{12} = \\frac{12(500+1600)}{2} = 12{,}600$ ₪</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה — חיידקים</div>
<p>100 חיידקים, מכפילים עצמם כל שעה.</p>
<p>$a_n = 100 \\cdot 2^{n-1}$</p>
<p>אחרי 10 שעות: $100 \\cdot 2^9 = 51{,}200$</p>
</div>
        `,
        questions: [
            {q:'משכורת ראשונה 8000₪, עלייה של 3% בשנה. סוג הסדרה:',options:['הנדסית','חשבונית','לא סדרה','קבועה'],correct:0,explanation:'עלייה באחוז קבוע = כפל ב-$q=1.03$ = הנדסית.'},
            {q:'מכונית $b$ שווה 120,000₪, מאבדת 10,000₪ בשנה. ערכה אחרי $n$ שנים:',options:['$120000-10000n$','$120000 \\cdot 0.9^n$','$120000+10000n$','$10000n$'],correct:0,explanation:'ירידה קבועה (לא באחוז) = חשבונית: $a_n = 120000-10000n$.'},
            {q:'100 חיידקים × 3 כל שעה. אחרי 5 שעות:',options:['$24300$','$1500$','$300$','$500$'],correct:0,explanation:'$100 \\cdot 3^5 = 100 \\cdot 243 = 24300$.'},
            {q:'מדרגות: 20 ס"מ כל מדרגה. גובה אחרי $n$ מדרגות:',options:['$20n$ ס"מ','$20^n$ ס"מ','$20+n$ ס"מ','$\\frac{20}{n}$ ס"מ'],correct:0,explanation:'תוספת קבועה = חשבונית: $a_n = 20n$.'},
            {q:'הפקדה 10,000₪ בריבית 5% שנתית. ערך אחרי 3 שנים:',options:['$11{,}576$','$11{,}500$','$13{,}000$','$10{,}500$'],correct:0,explanation:'$10000 \\cdot 1.05^3 = 10000 \\cdot 1.157625 \\approx 11{,}576$.'}
        ]
    },
    {
        id: 112,
        category: 'sequences',
        title: 'שברים מחזוריים וסדרות',
        desc: 'המרת שבר מחזורי לפשוט באמצעות סדרה הנדסית',
        theory: `
<h3>הקשר</h3>
<p>שבר עשרוני מחזורי הוא בעצם סכום סדרה הנדסית אינסופית!</p>

<div class="example-box">
<div class="example-title">דוגמה — $0.\\overline{3}$</div>
<p>$0.333... = \\frac{3}{10}+\\frac{3}{100}+\\frac{3}{1000}+...$</p>
<p>$a_1 = \\frac{3}{10}$, $q = \\frac{1}{10}$</p>
<p>$S = \\frac{\\frac{3}{10}}{1-\\frac{1}{10}} = \\frac{\\frac{3}{10}}{\\frac{9}{10}} = \\frac{3}{9} = \\frac{1}{3}$</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה — $0.\\overline{12}$</div>
<p>$= \\frac{12}{100}+\\frac{12}{10000}+... = \\frac{\\frac{12}{100}}{1-\\frac{1}{100}} = \\frac{12}{99} = \\frac{4}{33}$</p>
</div>

<div class="tip-box"><strong>קיצור:</strong> $0.\\overline{ab} = \\frac{ab}{99}$, $0.\\overline{abc} = \\frac{abc}{999}$</div>
        `,
        questions: [
            {q:'$0.\\overline{9} =$',options:['$1$','$0.9$','$\\frac{9}{10}$','$0.99$'],correct:0,explanation:'$\\frac{9}{9}=1$. כן, $0.999...=1$ בדיוק!'},
            {q:'$0.\\overline{6} =$',options:['$\\frac{2}{3}$','$\\frac{6}{10}$','$\\frac{3}{5}$','$\\frac{6}{9}$'],correct:0,explanation:'$\\frac{6}{9}=\\frac{2}{3}$.'},
            {q:'$0.\\overline{27} =$',options:['$\\frac{3}{11}$','$\\frac{27}{100}$','$\\frac{9}{33}$','$\\frac{27}{99}$'],correct:0,explanation:'$\\frac{27}{99}=\\frac{3}{11}$.'},
            {q:'$0.\\overline{142857} =$',options:['$\\frac{1}{7}$','$\\frac{142857}{999999}$','$\\frac{1}{6}$','$\\frac{1}{8}$'],correct:0,explanation:'$\\frac{142857}{999999}=\\frac{1}{7}$ (זהו ייצוג עשרוני של $\\frac{1}{7}$).'},
            {q:'הנוסחה $\\frac{a_1}{1-q}$ מחשבת:',options:['סכום סדרה הנדסית אינסופית','סכום סופי','ממוצע','תוחלת'],correct:0,explanation:'כש-$|q|<1$, זהו סכום הסדרה ההנדסית האינסופית.'}
        ]
    },
    {
        id: 113,
        category: 'algebra',
        title: 'מערכות משוואות — 3 נעלמים',
        desc: 'פתרון מערכת עם 3 משוואות ו-3 נעלמים',
        theory: `
<h3>שיטה</h3>
<p>1. בחרו נעלם לסילוק.</p>
<p>2. סלקו אותו משתי זוגות משוואות → מערכת של 2 משוואות ב-2 נעלמים.</p>
<p>3. פתרו את המערכת החדשה.</p>
<p>4. הציבו בחזרה למציאת הנעלם השלישי.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$x+y+z=6$, $2x-y+z=3$, $x+2y-z=5$</p>
<p>חיבור (1)+(3): $2x+3y=11$</p>
<p>חיבור (2)+(3): $3x+y=8$</p>
<p>מהמערכת: $y=8-3x$ → $2x+3(8-3x)=11$ → $x=\\frac{13}{7}$</p>
</div>
        `,
        questions: [
            {q:'מערכת 3 משוואות ב-3 נעלמים: כמה פתרונות בד"כ?',options:['$1$','$3$','$0$','אינסוף'],correct:0,explanation:'מערכת קבועה (לא תלויה) נותנת פתרון יחיד.'},
            {q:'$x+y=5, x-y=1$: $x=$',options:['$3$','$2$','$4$','$5$'],correct:0,explanation:'חיבור: $2x=6 \\Rightarrow x=3$.'},
            {q:'$x+y+z=10, x=2, y=3$: $z=$',options:['$5$','$10$','$15$','$0$'],correct:0,explanation:'$2+3+z=10 \\Rightarrow z=5$.'},
            {q:'השלב הראשון בפתרון מערכת 3×3:',options:['סילוק נעלם אחד','ניחוש','ציור גרף','הצבת 0'],correct:0,explanation:'מסלקים נעלם אחד כדי לקבל מערכת 2×2.'},
            {q:'אם 2 משוואות סותרות (כמו $0=5$), למערכת:',options:['אין פתרון','פתרון יחיד','אינסוף','3 פתרונות'],correct:0,explanation:'סתירה = המערכת לא עקבית → אין פתרון.'}
        ]
    },
    {
        id: 114,
        category: 'algebra',
        title: 'עריכת נוסחאות',
        desc: 'בידוד משתנה בנוסחה',
        theory: `
<h3>מה עושים?</h3>
<p>נתונה נוסחה — צריך לבודד משתנה מסוים. כלומר, "להפוך" את הנוסחה כך שהמשתנה יהיה לבד בצד אחד.</p>

<h3>כללים</h3>
<p>• עושים את אותה פעולה לשני הצדדים</p>
<p>• סדר הפוך: מה שנעשה אחרון — מבטלים ראשון</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$A = \\pi r^2$ → בודדו $r$:</p>
<p>$\\frac{A}{\\pi} = r^2 \\Rightarrow r = \\sqrt{\\frac{A}{\\pi}}$</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$v = v_0 + at$ → בודדו $t$:</p>
<p>$v - v_0 = at \\Rightarrow t = \\frac{v-v_0}{a}$</p>
</div>
        `,
        questions: [
            {q:'$y = mx+b$, בודדו $x$:',options:['$x=\\frac{y-b}{m}$','$x=\\frac{y+b}{m}$','$x=ym-b$','$x=my-b$'],correct:0,explanation:'$y-b=mx \\Rightarrow x=\\frac{y-b}{m}$.'},
            {q:'$A=\\frac{1}{2}bh$, בודדו $h$:',options:['$h=\\frac{2A}{b}$','$h=\\frac{A}{2b}$','$h=2Ab$','$h=\\frac{Ab}{2}$'],correct:0,explanation:'$2A=bh \\Rightarrow h=\\frac{2A}{b}$.'},
            {q:'$F=ma$, בודדו $a$:',options:['$a=\\frac{F}{m}$','$a=Fm$','$a=F-m$','$a=\\frac{m}{F}$'],correct:0,explanation:'$a=\\frac{F}{m}$.'},
            {q:'$c^2=a^2+b^2$, בודדו $a$:',options:['$a=\\sqrt{c^2-b^2}$','$a=c-b$','$a=\\sqrt{c^2+b^2}$','$a=c^2-b^2$'],correct:0,explanation:'$a^2=c^2-b^2 \\Rightarrow a=\\sqrt{c^2-b^2}$.'},
            {q:'$P=2(l+w)$, בודדו $w$:',options:['$w=\\frac{P}{2}-l$','$w=P-2l$','$w=\\frac{P-l}{2}$','$w=2P-l$'],correct:0,explanation:'$\\frac{P}{2}=l+w \\Rightarrow w=\\frac{P}{2}-l$.'}
        ]
    },
    {
        id: 115,
        category: 'functions',
        title: 'ממשק פונקציות — חיתוך',
        desc: 'מציאת נקודות חיתוך בין גרפים',
        theory: `
<h3>מציאת חיתוך</h3>
<p>נקודות חיתוך בין $y=f(x)$ ו-$y=g(x)$ מתקבלות מפתרון:</p>
<div class="formula-box">$$f(x) = g(x)$$</div>
<p>כל פתרון $x_0$ נותן נקודה $(x_0, f(x_0))$.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$f(x) = x^2$ ו-$g(x) = 2x+3$:</p>
<p>$x^2 = 2x+3 \\Rightarrow x^2-2x-3=0 \\Rightarrow (x-3)(x+1)=0$</p>
<p>$x=3$: $y=9$. $x=-1$: $y=1$.</p>
<p>נקודות חיתוך: $(3,9)$ ו-$(-1,1)$.</p>
</div>
        `,
        questions: [
            {q:'חיתוך $y=x$ ו-$y=x^2$:',options:['$(0,0)$ ו-$(1,1)$','$(0,0)$','$(1,1)$','אין'],correct:0,explanation:'$x=x^2 \\Rightarrow x^2-x=0 \\Rightarrow x(x-1)=0$. $x=0,1$.'},
            {q:'חיתוך $y=3x+1$ ו-$y=x+5$:',options:['$(2,7)$','$(1,4)$','$(3,10)$','$(4,13)$'],correct:0,explanation:'$3x+1=x+5 \\Rightarrow 2x=4 \\Rightarrow x=2$, $y=7$.'},
            {q:'ל-$y=x^2+1$ ו-$y=-1$ יש:',options:['0 חיתוכים','1 חיתוך','2 חיתוכים','$\\infty$'],correct:0,explanation:'$x^2+1=-1 \\Rightarrow x^2=-2$ — אין פתרון.'},
            {q:'מציאת חיתוך = פתרון:',options:['$f(x)=g(x)$','$f(x)+g(x)=0$','$f(x) \\cdot g(x)=0$','$f(x)-g(x)=1$'],correct:0,explanation:'חיתוך = אותו $y$ לאותו $x$: $f(x)=g(x)$.'},
            {q:'ישר ופרבולה יכולים להיחתך ב:',options:['0, 1, או 2 נקודות','תמיד 2','תמיד 1','0 או 1'],correct:0,explanation:'תלוי בדיסקרימיננטה: $\\Delta<0$: 0, $\\Delta=0$: 1, $\\Delta>0$: 2.'}
        ]
    },
    {
        id: 116,
        category: 'functions',
        title: 'סימטריה של פונקציות',
        desc: 'זוגיות, אי-זוגיות ומשמעותן',
        theory: `
<h3>פונקציה זוגית</h3>
<p>$f(-x) = f(x)$ — הגרף סימטרי <strong>לציר $y$</strong>.</p>
<p>דוגמאות: $x^2$, $|x|$, $\\cos x$.</p>

<h3>פונקציה אי-זוגית</h3>
<p>$f(-x) = -f(x)$ — הגרף סימטרי <strong>לראשית</strong> (סיבוב $180°$).</p>
<p>דוגמאות: $x^3$, $x$, $\\sin x$.</p>

<div class="tip-box"><strong>טיפ:</strong> רוב הפונקציות לא זוגיות ולא אי-זוגיות! (למשל $x^2+x$)</div>

<div class="example-box">
<div class="example-title">בדיקה</div>
<p>$f(x)=x^4-2x^2$: $f(-x)=x^4-2x^2=f(x)$ → <strong>זוגית</strong>.</p>
<p>$f(x)=x^3-x$: $f(-x)=-x^3+x=-(x^3-x)=-f(x)$ → <strong>אי-זוגית</strong>.</p>
</div>
        `,
        questions: [
            {q:'$f(x)=x^2$ היא:',options:['זוגית','אי-זוגית','לא זוגית ולא אי-זוגית','שניהם'],correct:0,explanation:'$f(-x)=(-x)^2=x^2=f(x)$ → זוגית.'},
            {q:'$f(x)=x^3$ היא:',options:['אי-זוגית','זוגית','שניהם','לא שניהם'],correct:0,explanation:'$f(-x)=-x^3=-f(x)$ → אי-זוגית.'},
            {q:'גרף פונקציה זוגית סימטרי ל:',options:['ציר $y$','ציר $x$','ראשית','$y=x$'],correct:0,explanation:'$f(-x)=f(x)$ → סימטריה ימין-שמאל → ציר $y$.'},
            {q:'$f(x)=x^2+x$ היא:',options:['לא זוגית ולא אי-זוגית','זוגית','אי-זוגית','שניהם'],correct:0,explanation:'$f(-x)=x^2-x \\neq f(x)$ וגם $\\neq -f(x)$. אף אחד.'},
            {q:'$\\sin(-x) =$',options:['$-\\sin x$','$\\sin x$','$\\cos x$','$-\\cos x$'],correct:0,explanation:'סינוס אי-זוגי: $\\sin(-x)=-\\sin x$.'}
        ]
    },
    {
        id: 117,
        category: 'geometry',
        title: 'משפט תאלס',
        desc: 'חלוקה יחסית של צלעות ע"י ישרים מקבילים',
        theory: `
<h3>משפט תאלס</h3>
<p>אם ישר מקביל לצלע אחת של משולש וחותך את שתי הצלעות האחרות, הוא חוצה אותן <strong>באותו יחס</strong>.</p>

<div class="formula-box">$$DE \\parallel BC \\Rightarrow \\frac{AD}{DB} = \\frac{AE}{EC}$$</div>

<h3>משפט תאלס ההפוך</h3>
<p>אם ישר חוצה שתי צלעות באותו יחס — הוא מקביל לצלע השלישית.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$AD=4, DB=6, AE=3$. מצאו $EC$.</p>
<p>$\\frac{4}{6} = \\frac{3}{EC} \\Rightarrow EC = \\frac{6 \\cdot 3}{4} = 4.5$</p>
</div>
        `,
        questions: [
            {q:'$DE \\parallel BC$, $AD=3, DB=9, AE=2$. $EC=$',options:['$6$','$4$','$3$','$18$'],correct:0,explanation:'$\\frac{3}{9}=\\frac{2}{EC} \\Rightarrow EC=6$.'},
            {q:'משפט תאלס עוסק ב:',options:['ישרים מקבילים החותכים צלעות','שטחים','זוויות','היקפים'],correct:0,explanation:'ישר מקביל לצלע חוצה את האחרות באותו יחס.'},
            {q:'$DE \\parallel BC$, $AD=DB$. מה $AE:EC$?',options:['$1:1$','$1:2$','$2:1$','תלוי'],correct:0,explanation:'$\\frac{AD}{DB}=1 \\Rightarrow \\frac{AE}{EC}=1 \\Rightarrow AE=EC$.'},
            {q:'אם $\\frac{AD}{DB}=\\frac{AE}{EC}$ אז:',options:['$DE \\parallel BC$','$DE \\perp BC$','$DE=BC$','שום דבר'],correct:0,explanation:'משפט תאלס ההפוך: יחסים שווים → מקביליות.'},
            {q:'$DE \\parallel BC$, $AD=2, AB=10$. $\\frac{DE}{BC}=$',options:['$\\frac{1}{5}$','$\\frac{2}{10}$','$\\frac{2}{8}$','$\\frac{1}{4}$'],correct:0,explanation:'$\\frac{AD}{AB}=\\frac{2}{10}=\\frac{1}{5}=\\frac{DE}{BC}$.'}
        ]
    },
    {
        id: 118,
        category: 'geometry',
        title: 'גיאומטריה אנליטית — מעגל',
        desc: 'משוואת מעגל ושימושים',
        theory: `
<h3>משוואת מעגל</h3>
<p>מעגל עם מרכז $(a,b)$ ורדיוס $r$:</p>
<div class="formula-box">$$(x-a)^2+(y-b)^2=r^2$$</div>
<p>מעגל עם מרכז בראשית: $x^2+y^2=r^2$.</p>

<h3>שימושים</h3>
<p>• <strong>נקודה על המעגל?</strong> הציבו — אם מקבלים שוויון, היא על המעגל.</p>
<p>• <strong>חיתוך ישר-מעגל:</strong> הציבו $y=mx+b$ במשוואת המעגל ופתרו.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$(x-2)^2+(y+3)^2=25$: מרכז $(2,-3)$, רדיוס $5$.</p>
<p>$(5,-3)$ על המעגל? $(5-2)^2+(-3+3)^2=9+0=9 \\neq 25$ → לא.</p>
</div>
        `,
        questions: [
            {q:'מרכז ורדיוס $(x-1)^2+(y-2)^2=16$:',options:['$(1,2)$, $r=4$','$(1,2)$, $r=16$','$(-1,-2)$, $r=4$','$(0,0)$, $r=4$'],correct:0,explanation:'מרכז $(1,2)$, $r=\\sqrt{16}=4$.'},
            {q:'משוואת מעגל מרכז $(0,0)$ רדיוס 3:',options:['$x^2+y^2=9$','$x^2+y^2=3$','$(x-3)^2+y^2=9$','$x^2+y^2=6$'],correct:0,explanation:'$x^2+y^2=3^2=9$.'},
            {q:'$(3,4)$ על $x^2+y^2=25$?',options:['כן','לא','על הגבול','בפנים'],correct:0,explanation:'$9+16=25$ ✓'},
            {q:'$(0,0)$ על $(x-1)^2+y^2=1$?',options:['כן','לא','בפנים','בחוץ'],correct:0,explanation:'$(0-1)^2+0=1$ ✓'},
            {q:'מעגל עם קוטר בין $(0,0)$ ל-$(6,0)$: מרכז ורדיוס:',options:['$(3,0)$, $r=3$','$(6,0)$, $r=6$','$(0,0)$, $r=3$','$(3,0)$, $r=6$'],correct:0,explanation:'אמצע $=(3,0)$, רדיוס $=\\frac{6}{2}=3$.'}
        ]
    },
    {
        id: 119,
        category: 'probability',
        title: 'הסתברות — עצמאות ותלות',
        desc: 'מאורעות בלתי תלויים ותלויים',
        theory: `
<h3>מאורעות בלתי תלויים</h3>
<p>$A$ ו-$B$ בלתי תלויים אם: $P(A \\cap B) = P(A) \\cdot P(B)$.</p>
<p>כלומר, קרות $A$ לא משפיעה על ההסתברות של $B$.</p>

<h3>מאורעות תלויים</h3>
<p>$P(A \\cap B) = P(A) \\cdot P(B|A)$</p>
<p>כאשר $P(B|A)$ = הסתברות מותנית (ההסתברות ל-$B$ בהינתן ש-$A$ קרה).</p>

<div class="example-box">
<div class="example-title">דוגמה — עצמאות</div>
<p>הטלת קובייה + מטבע: $P(6 \\text{ ועץ}) = \\frac{1}{6} \\cdot \\frac{1}{2} = \\frac{1}{12}$.</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה — תלות</div>
<p>שליפה ללא החזרה: 3 אדומים, 2 כחולים.</p>
<p>$P(\\text{אדום ואז אדום}) = \\frac{3}{5} \\cdot \\frac{2}{4} = \\frac{6}{20} = \\frac{3}{10}$</p>
</div>
        `,
        questions: [
            {q:'הטלת 2 קוביות — מאורעות:',options:['בלתי תלויים','תלויים','לא ניתן לקבוע','זרים'],correct:0,explanation:'תוצאת קובייה אחת לא משפיעה על השנייה.'},
            {q:'שליפה ללא החזרה = מאורעות:',options:['תלויים','בלתי תלויים','זרים','שווים'],correct:0,explanation:'השליפה הראשונה משנה את ההרכב → תלות.'},
            {q:'$P(A)=0.3, P(B)=0.4$, בלתי תלויים. $P(A \\cap B)=$',options:['$0.12$','$0.7$','$0.1$','$0.3$'],correct:0,explanation:'$P(A \\cap B)=0.3 \\cdot 0.4=0.12$.'},
            {q:'$P(B|A)=0.5$ ו-$P(B)=0.5$, אז $A$ ו-$B$:',options:['בלתי תלויים','תלויים','זרים','משלימים'],correct:0,explanation:'$P(B|A)=P(B)$ → ידיעת $A$ לא משנה את $P(B)$ → בלתי תלויים.'},
            {q:'מטילים מטבע 3 פעמים. $P(\\text{3 עצים})=$',options:['$\\frac{1}{8}$','$\\frac{1}{3}$','$\\frac{3}{8}$','$\\frac{1}{6}$'],correct:0,explanation:'$(\\frac{1}{2})^3=\\frac{1}{8}$ (בלתי תלויים).'}
        ]
    },
    {
        id: 120,
        category: 'sequences',
        title: 'סדרות — תרגול כללי',
        desc: 'בעיות מעורבות בסדרות',
        theory: `
<h3>סיכום — מתי להשתמש במה?</h3>

<table style="width:100%;border-collapse:collapse;margin:15px 0;text-align:center;">
<tr style="background:var(--primary);color:white;"><td style="padding:8px;border:1px solid #ddd">סוג</td><td style="padding:8px;border:1px solid #ddd">איבר כללי</td><td style="padding:8px;border:1px solid #ddd">סכום</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">חשבונית</td><td style="padding:8px;border:1px solid #ddd">$a_n=a_1+(n-1)d$</td><td style="padding:8px;border:1px solid #ddd">$S_n=\\frac{n(a_1+a_n)}{2}$</td></tr>
<tr><td style="padding:8px;border:1px solid #ddd">הנדסית</td><td style="padding:8px;border:1px solid #ddd">$a_n=a_1 \\cdot q^{n-1}$</td><td style="padding:8px;border:1px solid #ddd">$S_n=a_1 \\cdot \\frac{q^n-1}{q-1}$</td></tr>
</table>

<div class="tip-box"><strong>זיהוי:</strong> הפרש קבוע → חשבונית. מנה קבועה → הנדסית.</div>

<div class="example-box">
<div class="example-title">דוגמה מעורבת</div>
<p>$a_3=12, a_7=24$ בסדרה חשבונית. מצאו $a_1$ ו-$d$.</p>
<p>$a_7-a_3 = 4d \\Rightarrow 12=4d \\Rightarrow d=3$</p>
<p>$a_3 = a_1+2d \\Rightarrow 12=a_1+6 \\Rightarrow a_1=6$</p>
</div>
        `,
        questions: [
            {q:'$2, 6, 18, 54,...$ זו סדרה:',options:['הנדסית','חשבונית','לא סדרה','משולבת'],correct:0,explanation:'$\\frac{6}{2}=\\frac{18}{6}=3$ — מנה קבועה → הנדסית.'},
            {q:'$a_1=5, d=-2$. $a_{10}=$',options:['$-13$','$-15$','$23$','$-11$'],correct:0,explanation:'$a_{10}=5+9 \\cdot(-2)=5-18=-13$.'},
            {q:'$a_1=2, q=3$. $S_4=$',options:['$80$','$62$','$120$','$40$'],correct:0,explanation:'$S_4=2 \\cdot \\frac{3^4-1}{3-1}=2 \\cdot \\frac{80}{2}=80$.'},
            {q:'חשבונית עם $a_1=1, a_{20}=39$. $d=$',options:['$2$','$3$','$1$','$4$'],correct:0,explanation:'$39=1+19d \\Rightarrow d=2$.'},
            {q:'$a_n=(-1)^n$ זו:',options:['לא חשבונית ולא הנדסית','חשבונית','הנדסית עם $q=-1$','קבועה'],correct:0,explanation:'$\\frac{a_{n+1}}{a_n}=-1$ → הנדסית עם $q=-1$. (אבל גם אפשר לראותה כפשוט מתחלפת.)'}
        ]
    },
    {
        id: 121,
        category: 'probability',
        title: 'קומבינטוריקה — צירופים',
        desc: 'חישוב צירופים ושימושים',
        theory: `
<h3>צירוף</h3>
<p>מספר הדרכים לבחור $k$ פריטים מתוך $n$ <strong>ללא חשיבות לסדר</strong>:</p>
<div class="formula-box">$$\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$$</div>

<h3>ההבדל מתמורה</h3>
<p><strong>תמורה:</strong> הסדר חשוב ($P(n,k) = \\frac{n!}{(n-k)!}$).</p>
<p><strong>צירוף:</strong> הסדר לא חשוב ($\\binom{n}{k}$).</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>בוחרים ועדה של 3 מתוך 10 אנשים:</p>
<p>$\\binom{10}{3} = \\frac{10!}{3!7!} = \\frac{10 \\cdot 9 \\cdot 8}{3 \\cdot 2 \\cdot 1} = 120$</p>
</div>

<div class="tip-box"><strong>מתי צירוף?</strong> "בוחרים", "ועדה", "קבוצה" → סדר לא חשוב → צירוף.</div>
        `,
        questions: [
            {q:'$\\binom{6}{2} =$',options:['$15$','$30$','$12$','$6$'],correct:0,explanation:'$\\frac{6!}{2!4!}=\\frac{30}{2}=15$.'},
            {q:'$\\binom{n}{0} =$',options:['$1$','$0$','$n$','לא מוגדר'],correct:0,explanation:'יש דרך אחת לבחור 0 פריטים: לא לבחור כלום.'},
            {q:'$\\binom{n}{n} =$',options:['$1$','$n$','$n!$','$0$'],correct:0,explanation:'דרך אחת לבחור את כולם.'},
            {q:'$\\binom{5}{2} = \\binom{5}{?}$',options:['$3$','$2$','$4$','$1$'],correct:0,explanation:'$\\binom{n}{k}=\\binom{n}{n-k}$: $\\binom{5}{2}=\\binom{5}{3}$.'},
            {q:'כמה דרכים לבחור 2 מתוך 8?',options:['$28$','$56$','$16$','$64$'],correct:0,explanation:'$\\binom{8}{2}=\\frac{56}{2}=28$.'}
        ]
    },
    {
        id: 122,
        category: 'geometry',
        title: 'שטחים מורכבים',
        desc: 'חישוב שטח צורות מורכבות',
        theory: `
<h3>שיטות</h3>
<p><strong>חיבור:</strong> פרקו צורה מורכבת לצורות פשוטות וחברו.</p>
<p><strong>חיסור:</strong> חשבו שטח גדול והפחיתו את החלקים שלא צריך.</p>

<div class="example-box">
<div class="example-title">דוגמה — טבעת</div>
<p>מעגל חיצוני $R=10$, מעגל פנימי $r=6$:</p>
<p>$S = \\pi R^2 - \\pi r^2 = \\pi(100-36) = 64\\pi$</p>
</div>

<div class="example-box">
<div class="example-title">דוגמה — צורת L</div>
<p>מלבן $10 \\times 8$ חסר מלבן $4 \\times 3$ בפינה:</p>
<p>$S = 80 - 12 = 68$</p>
</div>

<div class="tip-box"><strong>טיפ:</strong> תמיד שרטטו את הצורה וסמנו מידות! טעויות רבות נגרמות מחוסר סקיצה.</div>
        `,
        questions: [
            {q:'ריבוע $10 \\times 10$ עם עיגול $r=5$ בפנים. שטח השטח שמחוץ לעיגול:',options:['$100-25\\pi$','$100-50\\pi$','$25\\pi$','$100\\pi$'],correct:0,explanation:'$100-\\pi \\cdot 25 = 100-25\\pi$.'},
            {q:'חצי עיגול $r=4$. שטח:',options:['$8\\pi$','$16\\pi$','$4\\pi$','$32\\pi$'],correct:0,explanation:'$\\frac{1}{2}\\pi r^2 = \\frac{1}{2} \\cdot 16\\pi = 8\\pi$.'},
            {q:'מלבן $12 \\times 5$ חסר משולש ישר-זווית עם ניצבים $3,4$:',options:['$54$','$60$','$66$','$48$'],correct:0,explanation:'$60-\\frac{1}{2}(3)(4)=60-6=54$.'},
            {q:'שטח טבעת: $R=7, r=3$:',options:['$40\\pi$','$49\\pi$','$58\\pi$','$4\\pi$'],correct:0,explanation:'$\\pi(49-9)=40\\pi$.'},
            {q:'שטח רבע עיגול $r=6$:',options:['$9\\pi$','$36\\pi$','$18\\pi$','$6\\pi$'],correct:0,explanation:'$\\frac{1}{4}\\pi \\cdot 36 = 9\\pi$.'}
        ]
    },
    {
        id: 123,
        category: 'geometry',
        title: 'ציר סימטריה',
        desc: 'סימטריה בגיאומטריה',
        theory: `
<h3>ציר סימטריה</h3>
<p>ישר שחוצה צורה לשני חלקים <strong>זהים</strong> שהם שיקוף זה של זה.</p>

<h3>כמה צירים?</h3>
<p>• <strong>עיגול:</strong> אינסוף צירים (כל קוטר)</p>
<p>• <strong>ריבוע:</strong> 4 צירים (2 דרך אמצעי צלעות, 2 אלכסונים)</p>
<p>• <strong>מלבן:</strong> 2 צירים (דרך אמצעי צלעות)</p>
<p>• <strong>משולש שווה-שוקיים:</strong> 1 ציר (הגובה לבסיס)</p>
<p>• <strong>משולש שווה-צלעות:</strong> 3 צירים</p>
<p>• <strong>מעוין:</strong> 2 צירים (האלכסונים)</p>

<div class="tip-box"><strong>סימטריה בגרף פונקציה:</strong> $f(x)=f(-x)$ = סימטריה לציר $y$. קודקוד פרבולה הוא ציר הסימטריה שלה.</div>
        `,
        questions: [
            {q:'כמה צירי סימטריה לריבוע?',options:['$4$','$2$','$1$','$8$'],correct:0,explanation:'2 דרך אמצעי צלעות + 2 אלכסונים = 4.'},
            {q:'כמה צירי סימטריה למלבן (שאינו ריבוע)?',options:['$2$','$4$','$1$','$0$'],correct:0,explanation:'2 צירים (דרך אמצעי צלעות).'},
            {q:'כמה צירי סימטריה למשולש שווה-צלעות?',options:['$3$','$1$','$6$','$0$'],correct:0,explanation:'3 — כל אחד מחבר קודקוד לאמצע הצלע הנגדית.'},
            {q:'לעיגול יש:',options:['אינסוף צירי סימטריה','1 ציר','2 צירים','4 צירים'],correct:0,explanation:'כל קוטר הוא ציר סימטריה → אינסוף.'},
            {q:'ציר הסימטריה של $y=x^2-4x+3$:',options:['$x=2$','$x=0$','$x=4$','$x=-2$'],correct:0,explanation:'$x_v = \\frac{4}{2} = 2$. ציר הסימטריה: $x=2$.'}
        ]
    },
    {
        id: 124,
        category: 'algebra',
        title: 'נוסחת השורשים — תרגול',
        desc: 'שימוש מלא בנוסחת השורשים',
        theory: `
<h3>נוסחת השורשים</h3>
<div class="formula-box">$$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$$</div>

<h3>שלבי פתרון</h3>
<p>1. זהו $a$, $b$, $c$.</p>
<p>2. חשבו $\\Delta = b^2-4ac$.</p>
<p>3. אם $\\Delta \\geq 0$, הציבו בנוסחה.</p>
<p>4. פשטו.</p>

<div class="example-box">
<div class="example-title">דוגמה</div>
<p>$2x^2+3x-2=0$: $a=2, b=3, c=-2$</p>
<p>$\\Delta=9+16=25$</p>
<p>$x=\\frac{-3 \\pm 5}{4}$: $x_1=\\frac{2}{4}=\\frac{1}{2}$, $x_2=\\frac{-8}{4}=-2$</p>
</div>

<div class="tip-box"><strong>טיפ:</strong> לפני הנוסחה, נסו פירוק! אם $\\Delta$ הוא ריבוע שלם, פירוק לגורמים יהיה מהיר יותר.</div>
        `,
        questions: [
            {q:'$x^2-3x+2=0$:',options:['$x=1, x=2$','$x=-1, x=-2$','$x=3, x=2$','$x=1, x=-2$'],correct:0,explanation:'$(x-1)(x-2)=0$ או: $\\frac{3 \\pm 1}{2}$: $x=2, x=1$.'},
            {q:'$x^2+4x+4=0$:',options:['$x=-2$ (כפול)','$x=2$','$x=-4$','$x=\\pm 2$'],correct:0,explanation:'$\\Delta=16-16=0$: $x=\\frac{-4}{2}=-2$.'},
            {q:'$3x^2-x-2=0$:',options:['$x=1, x=-\\frac{2}{3}$','$x=-1, x=\\frac{2}{3}$','$x=2, x=-\\frac{1}{3}$','$x=\\frac{1}{3}, x=-2$'],correct:0,explanation:'$\\Delta=1+24=25$. $x=\\frac{1 \\pm 5}{6}$: $x=1$ או $x=-\\frac{2}{3}$.'},
            {q:'$x^2=16$:',options:['$x=\\pm 4$','$x=4$','$x=8$','$x=\\pm 8$'],correct:0,explanation:'$x^2-16=0 \\Rightarrow x=\\pm 4$.'},
            {q:'$x^2+1=0$:',options:['אין פתרון ממשי','$x=1$','$x=-1$','$x=\\pm 1$'],correct:0,explanation:'$\\Delta=0-4=-4<0$ → אין פתרונות ממשיים.'}
        ]
    },
    {
        id: 125,
        category: 'functions',
        title: 'תרגילי חזרה — פונקציות',
        desc: 'בעיות מעורבות בפונקציות',
        theory: `
<h3>סיכום נושאים</h3>
<p><strong>תחום:</strong> שבר → מכנה $\\neq 0$. שורש → תוכן $\\geq 0$. לוג → ארגומנט $> 0$.</p>
<p><strong>נקודות מיוחדות:</strong> חיתוך צירים, קודקוד, אסימפטוטות.</p>
<p><strong>מונוטוניות:</strong> עולה / יורדת / קבועה.</p>
<p><strong>סימטריה:</strong> זוגית ($f(-x)=f(x)$), אי-זוגית ($f(-x)=-f(x)$).</p>

<div class="example-box">
<div class="example-title">דוגמה מסכמת</div>
<p>$f(x) = \\frac{x+1}{x-2}$</p>
<p>תחום: $x \\neq 2$. אסימפטוטה אנכית: $x=2$. אופקית: $y=1$.</p>
<p>חיתוך ציר $x$: $x=-1$. חיתוך ציר $y$: $f(0)=-\\frac{1}{2}$.</p>
</div>
        `,
        questions: [
            {q:'תחום $f(x)=\\frac{1}{\\sqrt{x-3}}$:',options:['$x>3$','$x \\geq 3$','$x \\neq 3$','$x>0$'],correct:0,explanation:'$x-3>0$ (חזק כי במכנה): $x>3$.'},
            {q:'$f(x)=x^2-6x+8$ → $f(3)=$',options:['$-1$','$1$','$0$','$-3$'],correct:0,explanation:'$9-18+8=-1$.'},
            {q:'קודקוד $y=-x^2+4x$:',options:['$(2,4)$','$(4,0)$','$(0,0)$','$(-2,4)$'],correct:0,explanation:'$x_v=\\frac{-4}{-2}=2$, $y=-(4)+8=4$. $(2,4)$.'},
            {q:'$f(x)=\\log(x-1)$ תחום:',options:['$x>1$','$x>0$','$x \\geq 1$','$x \\neq 1$'],correct:0,explanation:'ארגומנט לוגריתם חייב להיות חיובי: $x-1>0$.'},
            {q:'אם $f(2)=5$ ול-$f$ יש הופכית, אז $f^{-1}(5)=$',options:['$2$','$5$','$\\frac{1}{5}$','$-2$'],correct:0,explanation:'$f(2)=5 \\Leftrightarrow f^{-1}(5)=2$.'}
        ]
    },
    {
        id: 126,
        category: 'trigonometry',
        title: 'חזרה — טריגונומטריה',
        desc: 'תרגול מעורב בטריגונומטריה',
        theory: `
<h3>סיכום נוסחאות</h3>
<p>• $\\sin^2\\theta+\\cos^2\\theta=1$</p>
<p>• $\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$</p>
<p>• משפט הסינוסים: $\\frac{a}{\\sin A}=\\frac{b}{\\sin B}$</p>
<p>• משפט הקוסינוסים: $c^2=a^2+b^2-2ab\\cos C$</p>
<p>• שטח: $S=\\frac{1}{2}ab\\sin C$</p>
<p>• $\\sin 2\\alpha=2\\sin\\alpha\\cos\\alpha$</p>
<p>• $\\cos 2\\alpha=\\cos^2\\alpha-\\sin^2\\alpha$</p>

<div class="tip-box"><strong>טיפ לבחינה:</strong> כתבו את כל הנוסחאות על טיוטה בתחילת הבחינה, לפני שמתחילים לפתור!</div>
        `,
        questions: [
            {q:'$\\sin^2 30°+\\cos^2 30°=$',options:['$1$','$\\frac{1}{2}$','$\\frac{3}{4}$','$\\frac{\\sqrt{3}}{2}$'],correct:0,explanation:'תמיד 1, לכל זווית!'},
            {q:'$\\tan 60°=$',options:['$\\sqrt{3}$','$\\frac{1}{\\sqrt{3}}$','$1$','$2$'],correct:0,explanation:'$\\frac{\\sin 60°}{\\cos 60°}=\\frac{\\frac{\\sqrt{3}}{2}}{\\frac{1}{2}}=\\sqrt{3}$.'},
            {q:'$a=10, B=30°, C=90°$. $b=$',options:['$5$','$5\\sqrt{3}$','$10$','$10\\sqrt{3}$'],correct:0,explanation:'$\\frac{b}{\\sin 30°}=\\frac{10}{\\sin 90°}=10 \\Rightarrow b=10 \\cdot 0.5=5$.'},
            {q:'$\\cos 0°=$',options:['$1$','$0$','$-1$','$\\frac{1}{2}$'],correct:0,explanation:'$\\cos 0°=1$.'},
            {q:'$\\sin 2 \\cdot 45°=\\sin 90°=$',options:['$1$','$\\frac{\\sqrt{2}}{2}$','$0$','$2$'],correct:0,explanation:'$\\sin 90°=1$.'}
        ]
    },
    {
        id: 127,
        category: 'probability',
        title: 'חזרה — הסתברות',
        desc: 'תרגול מעורב בהסתברות',
        theory: `
<h3>סיכום</h3>
<p>• $0 \\leq P(A) \\leq 1$</p>
<p>• $P(\\overline{A})=1-P(A)$</p>
<p>• $P(A \\cup B) = P(A)+P(B)-P(A \\cap B)$</p>
<p>• בלתי תלויים: $P(A \\cap B)=P(A) \\cdot P(B)$</p>
<p>• מותנה: $P(B|A)=\\frac{P(A \\cap B)}{P(A)}$</p>
<p>• בינומי: $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$</p>
<p>• תוחלת: $E(X)=\\sum x_i P(x_i)$</p>

<div class="tip-box"><strong>שגיאה נפוצה:</strong> "או" ≠ כפל! $P(A \\text{ או } B)$ = חיבור (פחות החפיפה). "וגם" = כפל (אם בלתי תלויים).</div>
        `,
        questions: [
            {q:'$P(A)=0.6, P(\\overline{A})=$',options:['$0.4$','$0.6$','$1.6$','$-0.6$'],correct:0,explanation:'$P(\\overline{A})=1-0.6=0.4$.'},
            {q:'$P(A)=0.3, P(B)=0.4, P(A \\cap B)=0.1$. $P(A \\cup B)=$',options:['$0.6$','$0.7$','$0.8$','$0.12$'],correct:0,explanation:'$0.3+0.4-0.1=0.6$.'},
            {q:'שני אירועים זרים: $P(A \\cap B)=$',options:['$0$','$P(A) \\cdot P(B)$','$P(A)+P(B)$','$1$'],correct:0,explanation:'זרים = לא יכולים לקרות יחד → $P(A \\cap B)=0$.'},
            {q:'$P(B|A)=\\frac{P(A \\cap B)}{?}$',options:['$P(A)$','$P(B)$','$P(A \\cup B)$','$1$'],correct:0,explanation:'הסתברות מותנית: מחלקים ב-$P(A)$.'},
            {q:'מטילים קובייה. $P(\\text{זוגי})=$',options:['$\\frac{1}{2}$','$\\frac{1}{3}$','$\\frac{1}{6}$','$\\frac{2}{3}$'],correct:0,explanation:'$\\{2,4,6\\}$ מתוך $\\{1,...,6\\}$: $\\frac{3}{6}=\\frac{1}{2}$.'}
        ]
    },
    {
        id: 128,
        category: 'geometry',
        title: 'חזרה — גיאומטריה',
        desc: 'תרגול מעורב בגיאומטריה',
        theory: `
<h3>נוסחאות שטח עיקריות</h3>
<p>• משולש: $\\frac{1}{2}bh$ או $\\frac{1}{2}ab\\sin C$ או הרון</p>
<p>• מלבן: $ab$ ∙ ריבוע: $a^2$ ∙ מעוין: $\\frac{d_1 d_2}{2}$</p>
<p>• טרפז: $\\frac{(a+b)h}{2}$ ∙ מקבילית: $ah$</p>
<p>• עיגול: $\\pi r^2$ ∙ גזרה: $\\frac{\\theta}{360°}\\pi r^2$</p>

<h3>נפחים</h3>
<p>• גליל: $\\pi r^2 h$ ∙ חרוט: $\\frac{1}{3}\\pi r^2 h$ ∙ כדור: $\\frac{4}{3}\\pi r^3$</p>
<p>• תיבה: $lwh$ ∙ פירמידה: $\\frac{1}{3}Sh$</p>
        `,
        questions: [
            {q:'שטח משולש בסיס 8 גובה 5:',options:['$20$','$40$','$13$','$80$'],correct:0,explanation:'$\\frac{1}{2} \\cdot 8 \\cdot 5 = 20$.'},
            {q:'היקף עיגול $r=7$:',options:['$14\\pi$','$49\\pi$','$7\\pi$','$28\\pi$'],correct:0,explanation:'$2\\pi r = 14\\pi$.'},
            {q:'נפח תיבה $3 \\times 4 \\times 5$:',options:['$60$','$12$','$47$','$94$'],correct:0,explanation:'$3 \\cdot 4 \\cdot 5 = 60$.'},
            {q:'שטח גזרה $90°$ ברדיוס 4:',options:['$4\\pi$','$16\\pi$','$8\\pi$','$2\\pi$'],correct:0,explanation:'$\\frac{90}{360} \\cdot \\pi \\cdot 16 = 4\\pi$.'},
            {q:'שטח פנים כולל של קובייה $a=3$:',options:['$54$','$27$','$36$','$18$'],correct:0,explanation:'$6a^2 = 6 \\cdot 9 = 54$.'}
        ]
    },
    {
        id: 129,
        category: 'algebra',
        title: 'חזרה — אלגברה',
        desc: 'תרגול מעורב באלגברה',
        theory: `
<h3>נושאים מרכזיים</h3>
<p>• חוקי חזקות: $a^m \\cdot a^n = a^{m+n}$, $(a^m)^n = a^{mn}$</p>
<p>• פירוק: $(a+b)(a-b) = a^2-b^2$</p>
<p>• נוסחת שורשים: $x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$</p>
<p>• ויאטה: $x_1+x_2=-\\frac{b}{a}$, $x_1 x_2=\\frac{c}{a}$</p>
<p>• לוגריתמים: $\\log(ab)=\\log a+\\log b$</p>

<div class="tip-box"><strong>טיפ לבחינה:</strong> תמיד בדקו תשובה ע"י הצבה חזרה במשוואה!</div>
        `,
        questions: [
            {q:'$2^3 \\cdot 2^4 =$',options:['$128$','$24$','$2^7$','$2^{12}$'],correct:0,explanation:'$2^{3+4}=2^7=128$.'},
            {q:'$(x+3)(x-3) =$',options:['$x^2-9$','$x^2+9$','$x^2-6x+9$','$x^2+6x-9$'],correct:0,explanation:'כפל מקוצר: $a^2-b^2$.'},
            {q:'$\\log_5 25 =$',options:['$2$','$5$','$25$','$\\frac{1}{2}$'],correct:0,explanation:'$5^2=25 \\Rightarrow \\log_5 25=2$.'},
            {q:'$(-3)^2 =$',options:['$9$','$-9$','$6$','$-6$'],correct:0,explanation:'$(-3)^2=(-3)(-3)=9$.'},
            {q:'$\\frac{x^6}{x^2} =$',options:['$x^4$','$x^3$','$x^8$','$x^{12}$'],correct:0,explanation:'$x^{6-2}=x^4$.'}
        ]
    },
    {
        id: 130,
        category: 'sequences',
        title: 'חזרה — סדרות',
        desc: 'תרגול מעורב בסדרות',
        theory: `
<h3>סיכום כל הנוסחאות</h3>
<p><strong>חשבונית:</strong></p>
<p>• $a_n = a_1+(n-1)d$</p>
<p>• $S_n = \\frac{n(a_1+a_n)}{2}$</p>
<p><strong>הנדסית:</strong></p>
<p>• $a_n = a_1 \\cdot q^{n-1}$</p>
<p>• $S_n = a_1 \\cdot \\frac{q^n-1}{q-1}$</p>
<p>• $S_\\infty = \\frac{a_1}{1-q}$ (אם $|q|<1$)</p>
<p><strong>גבול:</strong> $\\lim \\frac{an+b}{cn+d}=\\frac{a}{c}$</p>

<div class="tip-box"><strong>צ'ק-ליסט:</strong> 1) זהו סוג. 2) מצאו $a_1, d/q$. 3) כתבו נוסחה. 4) חשבו. 5) בדקו!</div>
        `,
        questions: [
            {q:'$a_1=3, d=5$. $a_{20}=$',options:['$98$','$103$','$100$','$95$'],correct:0,explanation:'$3+19 \\cdot 5 = 98$.'},
            {q:'$a_1=4, q=\\frac{1}{2}$. $S_\\infty=$',options:['$8$','$4$','$2$','$\\infty$'],correct:0,explanation:'$\\frac{4}{1-0.5}=8$.'},
            {q:'$5, 10, 20, 40,...$ → $a_6=$',options:['$160$','$80$','$320$','$120$'],correct:0,explanation:'$q=2$, $a_6=5 \\cdot 2^5=160$.'},
            {q:'$S_5$ של $1,3,5,7,9$:',options:['$25$','$20$','$15$','$30$'],correct:0,explanation:'$\\frac{5(1+9)}{2}=25$. (או: $5^2=25$ לסדרת אי-זוגיים!)'},
            {q:'$\\lim_{n \\to \\infty} \\frac{2n+3}{4n-1}=$',options:['$\\frac{1}{2}$','$2$','$\\frac{3}{4}$','$0$'],correct:0,explanation:'$\\frac{2}{4}=\\frac{1}{2}$ (יחס מקדמים מובילים).'}
        ]
    }
];
