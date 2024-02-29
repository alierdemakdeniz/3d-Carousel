document.addEventListener("DOMContentLoaded", function () {
    const radios = document.getElementsByName("slider");
    const prev = document.querySelector(".arrow.prev");
    const next = document.querySelector(".arrow.next");
    const dots = document.getElementsByClassName("dot");
    const dot = Array.from(dots)
    const radio = Array.from(radios);
    dot[0].setAttribute("style","background-color: red;");

    
    let i = 0;
    function goToSlide(j) {
        i = j;
        
        radio[i].checked = true;
        
        
    }
    function showNextSlide() {
        i++;
        if (i >= radio.length) {
            dot[radio.length-1].setAttribute("style","background-color:grey;")
            i = 0;
        }
        
        if (i===0){
            dot[i].setAttribute("style","background-color: red;");
        }else{
            
            dot[i].setAttribute("style","background-color: red;");
            dot[i-1].setAttribute("style","background-color: grey;");
        }
            
        goToSlide(i);
    }

    function showPrevSlide() {
        i--;
        if (i < 0) {
            dot[0].setAttribute("style","background-color:grey;")
            
            i = radio.length - 1;
            
        
        }
        if (i===radio.length-1){
            dot[i].setAttribute("style","background-color: red;");
        }else{
            
            dot[i].setAttribute("style","background-color: red;");
            dot[i+1].setAttribute("style","background-color: grey;");
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


