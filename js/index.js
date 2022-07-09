window.addEventListener("scroll", function() {
    let pageHeight = window.innerHeight;
    if (window.scrollY > pageHeight*.1) {
        this.document.getElementById('what-we-do').classList.add("fadeInBottom");
        this.document.getElementById('what-we-do').classList.add("cssanimation");
    }
  });






window.addEventListener("scroll", function() {
    let pageHeight = window.innerHeight;
    if (window.scrollY > (pageHeight*1.2)-10) {
        this.document.getElementById('testamonies').classList.add("change");
    }
  });