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








function acceptCookies(){
  document.getElementById('cookie-wrapper').classList.remove('cookie-wrapper-active');
  localStorage.cookies = 'allow';
}




function denyCookies(){
  document.getElementById('cookie-wrapper').classList.remove('cookie-wrapper-active');
  localStorage.cookies = 'deny';
}

setTimeout(() => {
  if(!localStorage.cookies){
  document.getElementById('cookie-wrapper').classList.add('cookie-wrapper-active');
}
}, "2000")





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
function signInSignUpClose(){
  this.document.getElementById('sign-in-up-wrapper').classList.remove("sign-in-wrapper-active");
  this.document.body.style.overflowY = 'scroll';
  this.document.body.style.overflowX = 'hidden';
  enableScroll();
}
function openSignIn(){
  disableScroll()
  this.document.getElementById('sign-in-up-wrapper').classList.add("sign-in-wrapper-active");
  this.document.body.style.overflow = 'hidden';
}
function openSignUp(){
  disableScroll()
  this.document.getElementById('container').classList.add('right-panel-active');
  this.document.getElementById('sign-in-up-wrapper').classList.add("sign-in-wrapper-active");
  this.document.body.style.overflow = 'hidden';
}
window.addEventListener('click', function(e){
  if (document.getElementById('sign-in-up-wrapper').contains(e.target) && document.getElementById('container').contains(e.target) == false){
    signInSignUpClose();
  }
});

  window.addEventListener('click', function(e){
    if (document.getElementById('bio-wrapper').contains(e.target) && document.getElementById('bio-card').contains(e.target) == false){
      bioClose();
    }
    if(document.getElementById('staff1').contains(e.target)){
      disableScroll()
      
      this.document.getElementById('bio-wrapper').classList.add("bio-wrapper-active");
      this.document.getElementById('bio-card').classList.add("bio-card-active"); 
      this.document.body.style.overflow = 'hidden';
      // ------------- ENTER INFO HERE  -------------
      fetch("http://astrocore.net/json/staff.json")
        .then(response => response.json())
        .then(json => {
          console.log(json[3]);
          var name = json[1].name;
          var image = json[1].image;
          var text = json[1].text;
          var pos1 = json[1].pos1;
          var pos2 = json[1].pos2;
          var pos3 = json[1].pos3;
          var pos4 = json[1].pos4;
          this.document.getElementById('bio-image').src=image;
          this.document.getElementById('bio-name').innerHTML = name;
          this.document.getElementById('bio-text').innerHTML = text;
          this.document.getElementById('bio-pos1').innerHTML = pos1;
          this.document.getElementById('bio-pos2').innerHTML = pos2;
          this.document.getElementById('bio-pos3').innerHTML = pos3;
          this.document.getElementById('bio-pos4').innerHTML = pos4;
        });
    }
    else if(document.getElementById('staff2').contains(e.target)){
      disableScroll()
      
      this.document.getElementById('bio-wrapper').classList.add("bio-wrapper-active");
      this.document.getElementById('bio-card').classList.add("bio-card-active"); 
      this.document.body.style.overflow = 'hidden';
      // ------------- ENTER INFO HERE  -------------
      fetch("http://astrocore.net/json/staff.json")
        .then(response => response.json())
        .then(json => {
          console.log(json[2]);
          var name = json[2].name;
          var image = json[2].image;
          var text = json[2].text;
          var pos1 = json[2].pos1;
          var pos2 = json[2].pos2;
          var pos3 = json[2].pos3;
          var pos4 = json[2].pos4;
          this.document.getElementById('bio-image').src=image;
          this.document.getElementById('bio-name').innerHTML = name;
          this.document.getElementById('bio-text').innerHTML = text;
          this.document.getElementById('bio-pos1').innerHTML = pos1;
          this.document.getElementById('bio-pos2').innerHTML = pos2;
          this.document.getElementById('bio-pos3').innerHTML = pos3;
          this.document.getElementById('bio-pos4').innerHTML = pos4;
        });
    }
    else if(document.getElementById('staff3').contains(e.target)){
      disableScroll()
      
      this.document.getElementById('bio-wrapper').classList.add("bio-wrapper-active");
      this.document.getElementById('bio-card').classList.add("bio-card-active"); 
      this.document.body.style.overflow = 'hidden';
      // ------------- ENTER INFO HERE  -------------
      fetch("http://astrocore.net/json/staff.json")
        .then(response => response.json())
        .then(json => {
          console.log(json[3]);
          var name = json[3].name;
          var image = json[3].image;
          var text = json[3].text;
          var pos1 = json[3].pos1;
          var pos2 = json[3].pos2;
          var pos3 = json[3].pos3;
          var pos4 = json[3].pos4;
          this.document.getElementById('bio-image').src=image;
          this.document.getElementById('bio-name').innerHTML = name;
          this.document.getElementById('bio-text').innerHTML = text;
          this.document.getElementById('bio-pos1').innerHTML = pos1;
          this.document.getElementById('bio-pos2').innerHTML = pos2;
          this.document.getElementById('bio-pos3').innerHTML = pos3;
          this.document.getElementById('bio-pos4').innerHTML = pos4;
        });
    }
    else if(document.getElementById('staff4').contains(e.target)){
      disableScroll()
      
      this.document.getElementById('bio-wrapper').classList.add("bio-wrapper-active");
      this.document.getElementById('bio-card').classList.add("bio-card-active"); 
      this.document.body.style.overflow = 'hidden';
      // ------------- ENTER INFO HERE  -------------
      fetch("http://astrocore.net/json/staff.json")
        .then(response => response.json())
        .then(json => {
          console.log(json[4]);
          var name = json[4].name;
          var image = json[4].image;
          var text = json[4].text;
          var pos1 = json[4].pos1;
          var pos2 = json[4].pos2;
          var pos3 = json[4].pos3;
          var pos4 = json[4].pos4;
          this.document.getElementById('bio-image').src=image;
          this.document.getElementById('bio-name').innerHTML = name;
          this.document.getElementById('bio-text').innerHTML = text;
          this.document.getElementById('bio-pos1').innerHTML = pos1;
          this.document.getElementById('bio-pos2').innerHTML = pos2;
          this.document.getElementById('bio-pos3').innerHTML = pos3;
          this.document.getElementById('bio-pos4').innerHTML = pos4;
        });
    }
    else if(document.getElementById('staff5').contains(e.target)){
      disableScroll()
      
      this.document.getElementById('bio-wrapper').classList.add("bio-wrapper-active");
      this.document.getElementById('bio-card').classList.add("bio-card-active"); 
      this.document.body.style.overflow = 'hidden';
      // ------------- ENTER INFO HERE  -------------
      fetch("http://astrocore.net/json/staff.json")
        .then(response => response.json())
        .then(json => {
          console.log(json[5]);
          var name = json[5].name;
          var image = json[5].image;
          var text = json[5].text;
          var pos1 = json[5].pos1;
          var pos2 = json[5].pos2;
          var pos3 = json[5].pos3;
          var pos4 = json[5].pos4;
          this.document.getElementById('bio-image').src=image;
          this.document.getElementById('bio-name').innerHTML = name;
          this.document.getElementById('bio-text').innerHTML = text;
          this.document.getElementById('bio-pos1').innerHTML = pos1;
          this.document.getElementById('bio-pos2').innerHTML = pos2;
          this.document.getElementById('bio-pos3').innerHTML = pos3;
          this.document.getElementById('bio-pos4').innerHTML = pos4;
        });
    }
    else if(document.getElementById('staff6').contains(e.target)){
      disableScroll()
      
      this.document.getElementById('bio-wrapper').classList.add("bio-wrapper-active");
      this.document.getElementById('bio-card').classList.add("bio-card-active"); 
      this.document.body.style.overflow = 'hidden';
      // ------------- ENTER INFO HERE  -------------
      fetch("http://astrocore.net/json/staff.json")
        .then(response => response.json())
        .then(json => {
          console.log(json[6]);
          var name = json[6].name;
          var image = json[6].image;
          var text = json[6].text;
          var pos1 = json[6].pos1;
          var pos2 = json[6].pos2;
          var pos3 = json[6].pos3;
          var pos4 = json[6].pos4;
          this.document.getElementById('bio-image').src=image;
          this.document.getElementById('bio-name').innerHTML = name;
          this.document.getElementById('bio-text').innerHTML = text;
          this.document.getElementById('bio-pos1').innerHTML = pos1;
          this.document.getElementById('bio-pos2').innerHTML = pos2;
          this.document.getElementById('bio-pos3').innerHTML = pos3;
          this.document.getElementById('bio-pos4').innerHTML = pos4;
        });
    }
    else if(document.getElementById('staff7').contains(e.target)){
      disableScroll()
      
      this.document.getElementById('bio-wrapper').classList.add("bio-wrapper-active");
      this.document.getElementById('bio-card').classList.add("bio-card-active"); 
      this.document.body.style.overflow = 'hidden';
      // ------------- ENTER INFO HERE  -------------
      fetch("http://astrocore.net/json/staff.json")
        .then(response => response.json())
        .then(json => {
          console.log(json[7]);
          var name = json[7].name;
          var image = json[7].image;
          var text = json[7].text;
          var pos1 = json[7].pos1;
          var pos2 = json[7].pos2;
          var pos3 = json[7].pos3;
          var pos4 = json[7].pos4;
          this.document.getElementById('bio-image').src=image;
          this.document.getElementById('bio-name').innerHTML = name;
          this.document.getElementById('bio-text').innerHTML = text;
          this.document.getElementById('bio-pos1').innerHTML = pos1;
          this.document.getElementById('bio-pos2').innerHTML = pos2;
          this.document.getElementById('bio-pos3').innerHTML = pos3;
          this.document.getElementById('bio-pos4').innerHTML = pos4;
        });
    }
    else if(document.getElementById('staff8').contains(e.target)){
      disableScroll()
      
      this.document.getElementById('bio-wrapper').classList.add("bio-wrapper-active");
      this.document.getElementById('bio-card').classList.add("bio-card-active"); 
      this.document.body.style.overflow = 'hidden';
      // ------------- ENTER INFO HERE  -------------
      fetch("http://astrocore.net/json/staff.json")
        .then(response => response.json())
        .then(json => {
          console.log(json[8]);
          var name = json[8].name;
          var image = json[8].image;
          var text = json[8].text;
          var pos1 = json[8].pos1;
          var pos2 = json[8].pos2;
          var pos3 = json[8].pos3;
          var pos4 = json[8].pos4;
          this.document.getElementById('bio-image').src=image;
          this.document.getElementById('bio-name').innerHTML = name;
          this.document.getElementById('bio-text').innerHTML = text;
          this.document.getElementById('bio-pos1').innerHTML = pos1;
          this.document.getElementById('bio-pos2').innerHTML = pos2;
          this.document.getElementById('bio-pos3').innerHTML = pos3;
          this.document.getElementById('bio-pos4').innerHTML = pos4;
        });
    }
    else if(document.getElementById('staff10').contains(e.target)){
      disableScroll()
      
      this.document.getElementById('bio-wrapper').classList.add("bio-wrapper-active");
      this.document.getElementById('bio-card').classList.add("bio-card-active"); 
      this.document.body.style.overflow = 'hidden';
      // ------------- ENTER INFO HERE  -------------
      fetch("http://astrocore.net/json/staff.json")
        .then(response => response.json())
        .then(json => {
          console.log(json[10]);
          var name = json[10].name;
          var image = json[10].image;
          var text = json[10].text;
          var pos1 = json[10].pos1;
          var pos2 = json[10].pos2;
          var pos3 = json[10].pos3;
          var pos4 = json[10].pos4;
          this.document.getElementById('bio-image').src=image;
          this.document.getElementById('bio-name').innerHTML = name;
          this.document.getElementById('bio-text').innerHTML = text;
          this.document.getElementById('bio-pos1').innerHTML = pos1;
          this.document.getElementById('bio-pos2').innerHTML = pos2;
          this.document.getElementById('bio-pos3').innerHTML = pos3;
          this.document.getElementById('bio-pos4').innerHTML = pos4;
        });
    }
    else if(document.getElementById('staff11').contains(e.target)){
      disableScroll()
      
      this.document.getElementById('bio-wrapper').classList.add("bio-wrapper-active");
      this.document.getElementById('bio-card').classList.add("bio-card-active"); 
      this.document.body.style.overflow = 'hidden';
      // ------------- ENTER INFO HERE  -------------
      fetch("http://astrocore.net/json/staff.json")
        .then(response => response.json())
        .then(json => {
          console.log(json[11]);
          var name = json[11].name;
          var image = json[11].image;
          var text = json[11].text;
          var pos1 = json[11].pos1;
          var pos2 = json[11].pos2;
          var pos3 = json[11].pos3;
          var pos4 = json[11].pos4;
          this.document.getElementById('bio-image').src=image;
          this.document.getElementById('bio-name').innerHTML = name;
          this.document.getElementById('bio-text').innerHTML = text;
          this.document.getElementById('bio-pos1').innerHTML = pos1;
          this.document.getElementById('bio-pos2').innerHTML = pos2;
          this.document.getElementById('bio-pos3').innerHTML = pos3;
          this.document.getElementById('bio-pos4').innerHTML = pos4;
        });
    }
    else if(document.getElementById('staff12').contains(e.target)){
      disableScroll()
      
      this.document.getElementById('bio-wrapper').classList.add("bio-wrapper-active");
      this.document.getElementById('bio-card').classList.add("bio-card-active"); 
      this.document.body.style.overflow = 'hidden';
      // ------------- ENTER INFO HERE  -------------
      fetch("http://astrocore.net/json/staff.json")
        .then(response => response.json())
        .then(json => {
          console.log(json[12]);
          var name = json[12].name;
          var image = json[12].image;
          var text = json[12].text;
          var pos1 = json[12].pos1;
          var pos2 = json[12].pos2;
          var pos3 = json[12].pos3;
          var pos4 = json[12].pos4;
          this.document.getElementById('bio-image').src=image;
          this.document.getElementById('bio-name').innerHTML = name;
          this.document.getElementById('bio-text').innerHTML = text;
          this.document.getElementById('bio-pos1').innerHTML = pos1;
          this.document.getElementById('bio-pos2').innerHTML = pos2;
          this.document.getElementById('bio-pos3').innerHTML = pos3;
          this.document.getElementById('bio-pos4').innerHTML = pos4;
        });
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

 