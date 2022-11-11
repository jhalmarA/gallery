const gallery = document.querySelectorAll(".box .columnImage"),
preview = document.querySelector(".preview-box"),
iconClose = document.querySelector(".icon"),
next = document.querySelector(".next"),
prev = document.querySelector(".prev"),
imgActive = document.querySelector(".image"),
theme = document.querySelector(".theme");
console.log(gallery)
let sourceImg,
figure = document.querySelectorAll(".wrapper"),
btnSeeMore = document.querySelector(".btnSeeMore"),
current = 0;

window.onload = () => {
    theme.addEventListener("click", () => {
        for(let i = 0; gallery.length; i++){
            if(gallery[i].classList.contains("ThemeImage")){
                gallery[i].classList.remove("ThemeImage");
                gallery[i].classList.add("columnImage");
            }else{
                gallery[i].classList.add("ThemeImage");
                gallery[i].classList.remove("columnImage");
                
            }
        }
    });
    
    btnSeeMore.addEventListener("click", () => {
        for(let i = current; i < current + 4; i++){
            if(figure[i]){
                figure[i].style.display="block";
            }
        }
        current += 4;
        if(current >= figure.length){
            event.target.style.display="none";
        }
    });

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
