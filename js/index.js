window.addEventListener("scroll", function() {
    let pageHeight = window.innerHeight;
    if (window.scrollY > pageHeight*.1) {
        this.document.getElementById('what-we-do').classList.add("fadeInBottom");
        this.document.getElementById('what-we-do').classList.add("cssanimation");
        this.document.getElementById('news-element1').classList.add("fadeInBottom");
        this.document.getElementById('news-element1').classList.add("cssanimation");
        this.document.getElementById('news-element2').classList.add("fadeInBottom");
        this.document.getElementById('news-element2').classList.add("cssanimation");
        this.document.getElementById('news-element3').classList.add("fadeInBottom");
        this.document.getElementById('news-element3').classList.add("cssanimation");
    }
  });
  window.addEventListener("scroll", function() {
    let pageHeight = window.innerHeight;
    if (window.scrollY > pageHeight*1.1) {
        this.document.getElementById('staff-title').classList.add("fadeInBottom");
        this.document.getElementById('staff-title').classList.add("cssanimation");
        this.document.getElementById('staff1').classList.add("cssanimation");
        this.document.getElementById('staff1').classList.add("fadeInBottom");
        this.document.getElementById('staff2').classList.add("cssanimation");
        this.document.getElementById('staff2').classList.add("fadeInBottom");
        this.document.getElementById('staff3').classList.add("cssanimation");
        this.document.getElementById('staff3').classList.add("fadeInBottom");
        this.document.getElementById('staff4').classList.add("cssanimation");
        this.document.getElementById('staff4').classList.add("fadeInBottom");
        this.document.getElementById('staff5').classList.add("cssanimation");
        this.document.getElementById('staff5').classList.add("fadeInBottom");
        this.document.getElementById('staff6').classList.add("cssanimation");
        this.document.getElementById('staff6').classList.add("fadeInBottom");
        this.document.getElementById('staff7').classList.add("cssanimation");
        this.document.getElementById('staff7').classList.add("fadeInBottom");
        this.document.getElementById('staff8').classList.add("cssanimation");
        this.document.getElementById('staff8').classList.add("fadeInBottom");
        this.document.getElementById('staff9').classList.add("cssanimation");
        this.document.getElementById('staff9').classList.add("fadeInBottom");
        this.document.getElementById('staff10').classList.add("cssanimation");
        this.document.getElementById('staff10').classList.add("fadeInBottom");
        this.document.getElementById('staff11').classList.add("cssanimation");
        this.document.getElementById('staff11').classList.add("fadeInBottom");
        this.document.getElementById('staff12').classList.add("cssanimation");
        this.document.getElementById('staff12').classList.add("fadeInBottom");

    }
  });

  let count = 1;
  let oldValue = 0
let newValue = 0
  window.addEventListener("scroll", function() {
    newValue = window.pageYOffset;
    if (oldValue < newValue) {
      this.document.getElementById('spin1').style.transform = 'rotate('+newValue/2+'deg)';
      this.document.getElementById('spin2').style.transform = 'rotate('+newValue/2+'deg)';
      this.document.getElementById('spin3').style.transform = 'rotate('+newValue/2+'deg)';
      this.document.getElementById('spin4').style.transform = 'rotate('+newValue/2+'deg)';
      this.document.getElementById('spin5').style.transform = 'rotate('+newValue/2+'deg)';
      this.document.getElementById('spin6').style.transform = 'rotate('+newValue/2+'deg)';
      this.document.getElementById('spin7').style.transform = 'rotate('+newValue/2+'deg)';
      count = count+3;
    } else if (oldValue > newValue) {
      this.document.getElementById('spin1').style.transform = 'rotate('+newValue/2+'deg)';
      this.document.getElementById('spin2').style.transform = 'rotate('+newValue/2+'deg)';
      this.document.getElementById('spin3').style.transform = 'rotate('+newValue/2+'deg)';
      this.document.getElementById('spin4').style.transform = 'rotate('+newValue/2+'deg)';
      this.document.getElementById('spin5').style.transform = 'rotate('+newValue/2+'deg)';
      this.document.getElementById('spin6').style.transform = 'rotate('+newValue/2+'deg)';
      this.document.getElementById('spin7').style.transform = 'rotate('+newValue/2+'deg)';
      count = count-3;
    }
    oldValue = newValue;
  });

