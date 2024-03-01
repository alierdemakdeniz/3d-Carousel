document.addEventListener("DOMContentLoaded", function () {
    const radios = document.getElementsByName("slider");
    const prev = document.querySelector(".arrow.prev");
    const next = document.querySelector(".arrow.next");
    const radio = Array.from(radios);
    let i = 0;
    function goToSlide(j) {
        i = j;
        radio[i].checked = true;
    }
    function showNextSlide() {
        i++;
        if (i >= radio.length) {
            i = 0;
        }
        goToSlide(i);
    }

    function showPrevSlide() {
        i--;
        if (i < 0) {
            i = radio.length - 1;
        }
        goToSlide(i);
    }
    next.addEventListener("click", showNextSlide);
    prev.addEventListener("click", showPrevSlide);
    // Otomatik geçiş
    setInterval(showNextSlide, 5000); // 5 saniyede bir geçiş yap
    // Ok tuşları ile slayt geçişi
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") {
            showNextSlide();
        } else if (e.key === "ArrowLeft") {
            showPrevSlide();
        }
    });
    // İlk slaydı göster
    goToSlide(0);
});
