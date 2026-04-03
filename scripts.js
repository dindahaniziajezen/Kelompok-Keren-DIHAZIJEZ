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
            resultText = 'Gaya belajar Auditori (Audio)';
        } else if (counts.B > counts.A && counts.B > counts.C) {
            resultText = 'Gaya belajar Visual';
        } else if (counts.C > counts.A && counts.C > counts.B) {
            resultText = 'Gaya belajar Kinestetik';
        } else {
            resultText = 'Kamu memiliki kombinasi gaya belajar (Auditori, Visual, Kinestetik).';
        }

        var resultElement = document.getElementById('result');
        if (resultElement) {
            let desc = "";

if (resultText.includes("Auditori")) {
  desc = "Kamu lebih mudah belajar dengan mendengarkan penjelasan, diskusi, atau audio.";
} else if (resultText.includes("Visual")) {
  desc = "Kamu lebih mudah belajar dengan gambar, diagram, warna, dan video.";
} else if (resultText.includes("Kinestetik")) {
  desc = "Kamu lebih mudah belajar dengan praktik langsung dan pengalaman.";
} else {
  desc = "Kamu memiliki kombinasi gaya belajar visual, auditori, dan kinestetik.";
}

resultElement.innerHTML = `
  <div class="result-card">
    <h2>${resultText}</h2>
    <p>${desc}</p>
  </div>
`;
        }
    });
});
