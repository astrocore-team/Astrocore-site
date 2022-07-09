window.addEventListener("scroll", function() {
    let pageHeight = window.innerHeight;
    if (window.scrollY > (pageHeight*1.2)-10) {
        this.document.getElementById('testamonies').classList.add("change");
    }
  });