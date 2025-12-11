let de_nav = document.getElementById("bars");

if (window.screen.width < 1024){
    Menu.style.display = "none";
}

function ShowHide(x){
    x.classList.toggle("change");
    var Menu = document.getElementById("Menu");
    if(Menu.style.display === "none"){
        Menu.style.display = "block";
    }else{
        Menu.style.display = "none";
  }
}