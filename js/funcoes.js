/*

*/
function mudarFoto(){
    var body = document.querySelector('body');
    var disBody = body.offsetWidth;
    var slide01 = document.getElementById("slide01");
    var slide02 = document.getElementById("slide02");
    var slide03 = document.getElementById("slide03");
    
    
    if (disBody < 700) {
        slide01.setAttribute('src', './imgs/imagens_motorola/img1.jpg');
        slide02.setAttribute('src', './imgs/imagens_motorola/img2.jpg');
        slide03.setAttribute('src', './imgs/imagens_motorola/img3.jpg');
    }else{
        slide01.setAttribute('src', './imgs/imagens_motorola/img1_crop.jpg');
        slide02.setAttribute('src', './imgs/imagens_motorola/img2_crop.jpg');
        slide03.setAttribute('src', './imgs/imagens_motorola/img3_crop.jpg');
    } 



}

window.onload = function() {
    mudarFoto();
}