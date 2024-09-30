// مصفوفات الأسماء والدرجات
const names = [];
const scores = [];

// دالة لعرض النتائج
function displayResults() {
    const resultsDiv = document.getElementById('results');
    
    // حساب المتوسط
    let total = 0;
    let highestScore = 0;
    let highestName = '';
    
    scores.forEach((score, index) => {
        total += score;
        if (score > highestScore) {
            highestScore = score;
            highestName = names[index];
        }
    });
    
    const averageScore = total / scores.length;
    
    // عرض النتائج كما في الصورة


//     toFixed(2):
// هذه دالة من دوال الأعداد في JavaScript.
// تستخدم لتحويل العدد إلى سلسلة نصية (string) وتحديد عدد الأرقام العشرية التي يجب عرضها بعد الفاصلة العشرية.
// في هذه الحالة، 2 تعني أنه سيتم عرض رقمين عشريين.
// مثلاً، إذا كانت قيمة averageScore هي 85.678, فإن averageScore.toFixed(2) ستعيد 85.68.


    resultsDiv.innerHTML = `
        <h2>Results</h2>
        <p>Average score = ${averageScore.toFixed(2)}</p>

        
        <p>High score = ${highestName} with a score of ${highestScore}</p>
    `;
}

// دالة لعرض الدرجات
function displayScores() {
    const tableBody = document.querySelector('#scores_table tbody');
    tableBody.innerHTML = ''; // مسح الجدول

    names.forEach((name, index) => {
        const row = document.createElement('tr');
        // استخدام القوسين المعكوفين بشكل صحيح
        row.innerHTML = `<td>${name}</td><td>${scores[index]}</td>`;
        tableBody.appendChild(row);
    });
}

// دالة لإضافة اسم ودرجة جديدين
function addScore() {
    const nameInput = document.getElementById('name');
    const scoreInput = document.getElementById('score');
    
    const name = nameInput.value.trim();
    const score = parseInt(scoreInput.value);
    
    // التحقق من صحة المدخلات
    if (!name || isNaN(score) || score < 0 || score > 100) {
        alert('You must enter a name and a valid score (0-100).');
        return;
    }
    
    // إضافة الاسم والدرجة إلى المصفوفات
    names.push(name);
    scores.push(score);
    
    // إعادة ضبط المدخلات
    nameInput.value = '';
    scoreInput.value = '';
    nameInput.focus();
}

// إضافة الأحداث عند تحميل الصفحة
window.onload = function() {
    document.getElementById('addToArray').addEventListener('click', addScore);
    document.getElementById('displayResults').addEventListener('click', displayResults);
    document.getElementById('displayScores').addEventListener('click', displayScores);
};
