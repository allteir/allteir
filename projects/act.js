const carapakai = document.querySelectorAll(".project ul");
if (carapakai.length > 0){
    for (let i = 0; i < carapakai.length; i++) {
        carapakai[i].classList.add("nonedisplay");
    }
}


const download = document.querySelectorAll(".download");
if (download.length > 0){
    for (let i = 0; i < download.length; i++) {
        download[i].innerHTML = "Download";
        download[i].classList.add("animated-box");
    }
}

const cara = document.querySelectorAll(".cara");
if (cara.length > 0){
    for (let i = 0; i < cara.length; i++) {
        cara[i].innerHTML = "cara pakai";
    }
}


document.addEventListener("click",(e)=>{
    for (let i = 0; i < cara.length; i++) {
        if(e.target == cara[i]){
            carapakai[i].classList.toggle("nonedisplay");
            if(carapakai[i].classList.contains("nonedisplay")){
                cara[i].innerHTML ="Cara pakai";
            }else{
                cara[i].innerHTML = "Tutup";
            }
        }
        
    }
})