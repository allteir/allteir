var toolproject = document.getElementById("toolproject");

document.addEventListener("click",(e)=>{
    if(e.target == toolproject||e.target==toolproject.children[0]||e.target==toolproject.children[1]){
        window.location = "./projects/toolproject.html"
    }
})
