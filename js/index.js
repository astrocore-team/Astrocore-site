// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}


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


function bioClose(){
  this.document.getElementById('bio-wrapper').classList.remove("bio-wrapper-active");
  this.document.getElementById('bio-card').classList.remove("bio-card-active"); 
  this.document.body.style.overflowY = 'scroll';
  this.document.body.style.overflowX = 'hidden';
  enableScroll();
}

fetch("json/test.json")
  .then(response => response.json())
  .then(json => console.log(json));


  window.addEventListener('click', function(e){
    if(document.getElementById('staff1').contains(e.target)){

    }
    else if(document.getElementById('staff2').contains(e.target)){

    }
    else if(document.getElementById('staff3').contains(e.target)){
      disableScroll()
      let pageHeight = window.innerHeight; window.scrollTo({ top:pageHeight*1.9, behavior: 'smooth' });
      this.document.getElementById('bio-wrapper').classList.add("bio-wrapper-active");
      this.document.getElementById('bio-card').classList.add("bio-card-active"); 
      this.document.body.style.overflow = 'hidden';
      // ------------- ENTER INFO HERE  -------------
      this.document.getElementById('bio-image').src="assets/JSman225.png";
      this.document.getElementById('bio-name').innerHTML = "JSman225";
      this.document.getElementById('bio-text').innerHTML = "This is a bio about the person. They can put a short about themselves paragraph here. It really should not be too long, but still long enough because I have given you all plent of space.";
      this.document.getElementById('bio-pos1').innerHTML = "- Senior Web Developer";
      this.document.getElementById('bio-pos2').innerHTML = "- Senior Web Designer";
      this.document.getElementById('bio-pos3').innerHTML = "- Senior Python Developer";
      this.document.getElementById('bio-pos4').innerHTML = "";
    }
    else if(document.getElementById('staff4').contains(e.target)){

    }
    else if(document.getElementById('staff5').contains(e.target)){

    }
    else if(document.getElementById('staff6').contains(e.target)){

    }
    else if(document.getElementById('staff7').contains(e.target)){

    }
    else if(document.getElementById('staff8').contains(e.target)){

    }
    else if(document.getElementById('staff9').contains(e.target)){

    }
    else if(document.getElementById('staff10').contains(e.target)){

    }
    else if(document.getElementById('staff11').contains(e.target)){

    }
    else if(document.getElementById('staff12').contains(e.target)){

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

