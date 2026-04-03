document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('learning-style-form');
    if (!form) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var counts = { A: 0, B: 0, C: 0 };

        for (var i = 1; i <= 10; i++) {
            var selected = document.querySelector('input[name="q' + i + '"]:checked');
            if (selected) {
                counts[selected.value] += 1;
            }
        }

        var resultText = '';
        if (counts.A > counts.B && counts.A > counts.C) {
            resultText = 'Mayoritas A → Gaya belajar Auditori (Audio)';
        } else if (counts.B > counts.A && counts.B > counts.C) {
            resultText = 'Mayoritas B → Gaya belajar Visual';
        } else if (counts.C > counts.A && counts.C > counts.B) {
            resultText = 'Mayoritas C → Gaya belajar Kinestetik';
        } else {
            resultText = 'Hasil seri atau seimbang. Kamu memiliki kombinasi gaya belajar (Auditori, Visual, Kinestetik).';
        }

        resultText += '\n\nDetail: A=' + counts.A + ', B=' + counts.B + ', C=' + counts.C;

        var resultElement = document.getElementById('result');
        if (resultElement) {
            resultElement.innerText = resultText;
        }
    });
});