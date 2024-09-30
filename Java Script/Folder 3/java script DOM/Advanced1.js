const form = document.getElementById('itemForm'); 
const input = document.getElementById('itemInput'); 
const shoppingList = document.getElementById('shoppingList'); 

// دالة لإضافة عنصر جديد إلى القائمة
form.addEventListener('submit', function(event) { 
    event.preventDefault(); // منع السلوك الافتراضي للنموذج (إعادة تحميل الصفحة)
    
    // الحصول على قيمة حقل الإدخال
    const newItem = input.value; // تخزين القيمة المدخلة في متغير جديد

    if (newItem) { // التحقق مما إذا كان المدخل غير فارغ
        // إنشاء عنصر قائمة جديد
        const li = document.createElement('li'); // إنشاء عنصر قائمة جديد
        li.textContent = newItem; // تعيين نص العنصر ليكون القيمة المدخلة

        // إنشاء زر حذف لكل عنصر
        const deleteBtn = document.createElement('button'); // إنشاء زر جديد
        deleteBtn.textContent = 'Delete'; // تعيين نص الزر إلى "حذف"
        deleteBtn.addEventListener('click', function() { // إضافة حدث للنقر على زر الحذف
            shoppingList.removeChild(li); // إزالة عنصر القائمة من القائمة عند النقر
        });

        // إضافة زر الحذف إلى عنصر القائمة
        li.appendChild(deleteBtn); // إلحاق زر الحذف بعنصر القائمة

        // إضافة عنصر القائمة الجديد إلى قائمة التسوق
        shoppingList.appendChild(li); // إلحاق عنصر القائمة بقائمة التسوق

        // مسح وتركيز حقل الإدخال
        input.value = ''; // مسح محتوى حقل الإدخال
        input.focus(); // إعادة تركيز المؤشر على حقل الإدخال
    }
});
