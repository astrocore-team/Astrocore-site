window.addEventListener("scroll", function() {
    let pageHeight = window.innerHeight;
    if (window.scrollY > pageHeight*.1) {
        this.document.getElementById('what-we-do').classList.add("fadeInBottom");
        this.document.getElementById('what-we-do').classList.add("cssanimation");
    }
  });

  let count = 1;
  let oldValue = 0
let newValue = 0
  window.addEventListener("scroll", function() {
    newValue = window.pageYOffset;
    if (oldValue < newValue) {
      this.document.getElementById('spin1').style.transform = 'rotate('+count+'deg)';
      this.document.getElementById('spin2').style.transform = 'rotate('+count+'deg)';
      this.document.getElementById('spin3').style.transform = 'rotate('+count+'deg)';
      this.document.getElementById('spin4').style.transform = 'rotate('+count+'deg)';
      this.document.getElementById('spin5').style.transform = 'rotate('+count+'deg)';
      this.document.getElementById('spin6').style.transform = 'rotate('+count+'deg)';
      this.document.getElementById('spin7').style.transform = 'rotate('+count+'deg)';
      count = count+3;
    } else if (oldValue > newValue) {
      this.document.getElementById('spin1').style.transform = 'rotate('+count+'deg)';
      this.document.getElementById('spin2').style.transform = 'rotate('+count+'deg)';
      this.document.getElementById('spin3').style.transform = 'rotate('+count+'deg)';
      this.document.getElementById('spin4').style.transform = 'rotate('+count+'deg)';
      this.document.getElementById('spin5').style.transform = 'rotate('+count+'deg)';
      this.document.getElementById('spin6').style.transform = 'rotate('+count+'deg)';
      this.document.getElementById('spin7').style.transform = 'rotate('+count+'deg)';
      count = count-3;
    }
    oldValue = newValue;
  });


window.addEventListener("scroll", function() {
    let pageHeight = window.innerHeight;
    if (window.scrollY > (pageHeight*1.2)-10) {
        this.document.getElementById('testamonies').classList.add("change");
    }
  });