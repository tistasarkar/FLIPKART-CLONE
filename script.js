var menu=document.querySelector("#menu-content");
var btn=document.querySelector("#menu");

var count=0;

btn.addEventListener("click",function(){
    if(count==0){
        menu.style.display="flex";
        count++;
    }else{
        menu.style.display="none";
        count=0;
    }
    
})