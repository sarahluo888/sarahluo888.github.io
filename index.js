var today = new Date();
var bg = document.getElementById("dark-mode-bg");
var words = document.getElementsByClassName("dark-mode-words");
var nav = document.getElementById("dark-mode-nav");
var footer = document.getElementById("dark-mode-footer");
var night = document.getElementById("night-mode");
var box1 = document.getElementsByClassName("box");
var boxPublication = document.getElementsByClassName("box-publication");
var boxEXP = document.getElementsByClassName("box-exp");
var nightIcon = document.getElementById("night-icon");
var linkBox = document.getElementsByClassName("link");
var linkWBox = document.getElementsByClassName("linkW");
var linkPFVBox = document.getElementsByClassName("linkPFV");
var linkPWBox = document.getElementsByClassName("linkPW");
var boxLabel = document.getElementsByClassName("box-label");
var boxDoc = document.getElementById("box-doc");

if (today.getHours() > 17) {
    nightMode();
} else {
  lightMode();
}

boxDoc.addEventListener("mouseenter", function( event ) {   
    for (let label of boxLabel) {
        label.style.color = "white";
        label.style.width = "100px";
        label.style.height = "30px";
        label.style.fontSize = "15px";
    }
  }, false);
  boxDoc.addEventListener("mouseleave", function( event ) {   
    for (let label of boxLabel) {
        label.style.color = "transparent";
        label.style.width = "0px";
        label.style.height = "0px";
        label.style.fontSize = "0px";
    }
  }, false);



function nightMode (){
        bg.style.backgroundColor = "#21252A";
        footer.style.backgroundColor = "#383c44";
        footer.style.color = "white";
        nav.style.backgroundColor = "#21252A";

        for (let box of linkBox){
            box.style.color = "white";
        }
        for (let box of linkWBox){
          box.style.color = "white";
        } 
        for (let box of linkPWBox){
          box.style.color = "white";
        } 
        for (let box of linkPFVBox){
          box.style.color = "white";
        } 
        for (let box of box1) {
            box.style.transition = "none"
            box.style.backgroundColor = "#272b30";
            box.style.borderColor = "#35383c";
            box.style.boxShadow = "none";
            box.addEventListener("mouseenter", function( event ) {
                box.style.transition = "border-color 0.4s ease-in-out, background-size 1s, background-position-x 1s, background-position-y 1s";
                event.target.style.borderColor = "#8b8b8b";
                event.target.style.backgroundColor = "#2c3035";
              }, false);
              box.addEventListener("mouseleave", function( event ) {   
                box.style.transition = "border-color 0.4s ease-in-out, background-size 1s, background-position-x 1s, background-position-y 1s";
                event.target.style.borderColor = "#35383c";
                event.target.style.backgroundColor = "#272b30";
              }, false);
        }
        for (let box of boxEXP) {
            // box.style.borderColor = "white";
            box.addEventListener("mouseenter", function( event ) {   
                event.target.style.borderColor = "transparent";
              }, false);
              box.addEventListener("mouseleave", function( event ) {   
                event.target.style.borderColor = "white";
              }, false);
        }
        for (let box of boxPublication) {
            // box.style.borderColor = "white";
            // box.style.borderColor = "white";
            box.addEventListener("mouseenter", function( event ) {   
                event.target.style.borderColor = "transparent";
              }, false);
              box.addEventListener("mouseleave", function( event ) {   
                event.target.style.borderColor = "white";
              }, false);
        }
        for (let word of words) {
            word.style.color = "white";
        }
        nav.classList.remove("navbar-light");
        // nav.classList.remove("bg-light");
        nav.classList.add("navbar-dark");
        // nav.classList.add("bg-dark");
        night.onclick=lightMode;



}

function lightMode (){
    bg.style.backgroundColor = "white";
    footer.style.backgroundColor = "#fafafa";
    footer.style.color = "black";
    nav.style.backgroundColor = "#FFFFFF";

    for (let box of linkBox){
        box.style.color = "black";
    }
    for (let box of box1) {
        box.style.transition = "none"
        box.style.backgroundColor = "white";
        box.style.borderColor = "#ccc";
        box.style.boxShadow = "0px 1px 8px 0px #ccc";
        box.addEventListener("mouseenter", function( event ) {   
            box.style.transition = "border-color 0.4s ease-in-out, background-size 1s, background-position-x 1s, background-position-y 1s"; 
            event.target.style.borderColor = "transparent";
            event.target.style.backgroundColor = "rgba(255, 255, 255, 0.972)";
          }, false);
          box.addEventListener("mouseleave", function( event ) {   
            event.target.style.borderColor = "#ccc";
            event.target.style.backgroundColor = "white";
          }, false);
    }
    for (let box of boxEXP) {
        // box.style.borderColor = "black";
        box.addEventListener("mouseenter", function( event ) {  
            event.target.style.borderColor = "transparent";
          }, false);
          box.addEventListener("mouseleave", function( event ) {   
            event.target.style.borderColor = "black";
          }, false);
    }
    for (let box of boxPublication) {
        // box.style.borderColor = "black"
        box.addEventListener("mouseenter", function( event ) {   
            event.target.style.borderColor = "transparent";
          }, false);
          box.addEventListener("mouseleave", function( event ) {   
            event.target.style.borderColor = "black";
          }, false);
    }
    for (let word of words) {
        word.style.color = "black";
    }

    nav.classList.remove("navbar-dark");
    // nav.classList.remove("bg-light");
    nav.classList.add("navbar-light");
    
    night.onclick=nightMode;
}