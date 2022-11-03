const gallery = document.querySelectorAll(".box .columnImage"),
preview = document.querySelector(".preview-box"),
iconClose = document.querySelector(".icon"),
next = document.querySelector(".next"),
prev = document.querySelector(".prev"),
imgActive = document.querySelector(".image");
let sourceImg;

window.onload = () => {
    for(let i = 0; i < gallery.length; i++){
        gallery[i].addEventListener("click", () => {
            imgActive.src = event.target.src;
            preview.classList.add("show");
            sourceImg = Array.from(gallery).indexOf(event.target);

            iconClose.addEventListener("click", () => {
                preview.classList.remove("show");
            });

            next.addEventListener("click" , () => {
                if(sourceImg === gallery.length - 1){
                    sourceImg = -1
                }
                imgActive.src = gallery[sourceImg + 1].src;
                sourceImg++;
            });

            prev.addEventListener("click" , () => {
                if(sourceImg === 0){
                    sourceImg = gallery.length;
                }
                imgActive.src = gallery[sourceImg - 1].src;
                sourceImg--;
            });
        });
    }
}
