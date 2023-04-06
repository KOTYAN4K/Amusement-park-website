
let links = document.querySelectorAll(".link");
let infos = document.querySelectorAll(".info");

for(let i = 0; i < links.length; i++){
    links[i].onclick = function(evt){
        evt.preventDefault();
        infos[i].removeAttribute("hidden");
    } 
}
for(let info of infos){
    document.addEventListener('mouseup', function(e){
        if (!e.target.closest(".info")) {
            info.setAttribute("hidden", "hidden");
        }
    });
}