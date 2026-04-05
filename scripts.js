document.addEventListener("DOMContentLoaded", function () {
  var resultMap = {
    auditori: {
      title: "Kamu adalah tipe Auditori!",
      description: "Kamu lebih mudah belajar dengan mendengarkan penjelasan, diskusi, atau audio.",
      tips: [
        "Coba rekam penjelasan materi lalu dengarkan kembali.",
        "Belajar lewat diskusi atau tanya jawab akan sangat membantu.",
        "Baca materi dengan suara keras agar lebih mudah diingat."
      ]
    },
    visual: {
      title: "Kamu adalah tipe Visual!",
      description: "Kamu lebih mudah belajar dengan gambar, diagram, warna, dan video.",
      tips: [
        "Gunakan warna, diagram, atau mind map saat mencatat.",
        "Tonton video pembelajaran untuk memperkuat pemahaman.",
        "Susun materi dalam bentuk ringkasan visual."
      ]
    },
    kinestetik: {
      title: "Kamu adalah tipe Kinestetik!",
      description: "Kamu lebih mudah belajar dengan praktik langsung dan pengalaman.",
      tips: [
        "Coba belajar sambil praktik atau membuat simulasi kecil.",
        "Gunakan alat bantu fisik agar materi terasa lebih nyata.",
        "Belajar bertahap sambil bergerak bisa membantu fokus."
      ]
    },
    kombinasi: {
      title: "Kamu punya gaya belajar kombinasi!",
      description: "Kamu bisa belajar efektif dengan memadukan cara visual, auditori, dan kinestetik.",
      tips: [
        "Gabungkan catatan visual, diskusi, dan praktik sederhana.",
        "Uji beberapa metode belajar untuk melihat mana yang paling cocok.",
        "Sesuaikan cara belajar dengan jenis materi yang sedang dipelajari."
      ]
    }
  };

  var form = document.getElementById("learning-style-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var counts = { A: 0, B: 0, C: 0 };

      for (var i = 1; i <= 10; i += 1) {
        var selected = document.querySelector('input[name="q' + i + '"]:checked');
        if (selected) {
          counts[selected.value] += 1;
        }
      }

      var resultKey = "kombinasi";
      if (counts.A > counts.B && counts.A > counts.C) {
        resultKey = "auditori";
      } else if (counts.B > counts.A && counts.B > counts.C) {
        resultKey = "visual";
      } else if (counts.C > counts.A && counts.C > counts.B) {
        resultKey = "kinestetik";
      }

      sessionStorage.setItem("learningStyleResult", JSON.stringify(resultMap[resultKey]));
      window.location.href = "visual.html";
    });
  }

  var resultTitle = document.getElementById("result-title");
  var resultDescription = document.getElementById("result-description");
  var resultTips = document.getElementById("result-tips");

  if (resultTitle && resultDescription && resultTips) {
    var storedResult = sessionStorage.getItem("learningStyleResult");
    var activeResult = resultMap.visual;

    if (storedResult) {
      try {
        activeResult = JSON.parse(storedResult);
      } catch (error) {
        activeResult = resultMap.visual;
      }
    }

    resultTitle.textContent = activeResult.title;
    resultDescription.textContent = activeResult.description;
    resultTips.innerHTML = activeResult.tips
      .map(function (tip) {
        return "<li>" + tip + "</li>";
      })
      .join("");
  }
});
