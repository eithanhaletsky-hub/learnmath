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
<div class="formula-box">$a^n = \\underbrace{a \\cdot a \\cdot a \\cdots a}_{n \\text{ times}}$</div>

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
<div class="formula-box">$|a| = \\begin{cases} a & \\text{if } a \\geq 0 \\\\ -a & \\text{if } a < 0 \\end{cases}$</div>
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
<h3>הגדרת לוגריתם</h3>
<div class="formula-box">$\\log_a b = c \\iff a^c = b \\quad (a > 0, a \\neq 1, b > 0)$</div>

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
<h3>פונקציה מעריכית</h3>
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
<h3>פונקציה לוגריתמית</h3>
<div class="formula-box">$f(x) = \\log_a x \\quad (a > 0, a \\neq 1)$</div>
<p>זוהי הפונקציה ההפוכה של $g(x) = a^x$.</p>

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
<h3>ממוצע (Mean)</h3>
<div class="formula-box">$\\bar{x} = \\frac{x_1 + x_2 + \\cdots + x_n}{n}$</div>

<h3>חציון (Median)</h3>
<p>הערך האמצעי כשהנתונים מסודרים. אם יש מספר זוגי של נתונים — ממוצע שני האמצעיים.</p>

<h3>שכיח (Mode)</h3>
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
<h3>שונות (Variance)</h3>
<p>מודדת כמה הנתונים מפוזרים סביב הממוצע:</p>
<div class="formula-box">$\\sigma^2 = \\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n}$</div>

<h3>סטיית תקן (Standard Deviation)</h3>
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
<h3>הגדרה</h3>
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
<h3>הגדרה</h3>
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
    }
];
