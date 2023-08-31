let bodi = document.getElementById("body");

function myFunction(){
    if(bodi.style.backgroundColor === "white"){
        bodi.style.backgroundColor = "#191919";
        bodi.style.color = "#03cf03";
    }
    else{
    bodi.style.backgroundColor = "white";
    bodi.style.color = "black";
    }
}