var currentImage = 0;
var images = ["assets/img0.PNG", "assets/img1.PNG", "assets/img2.PNG"];


(function() {
    
 })();

 window.addEventListener('load', function () {
    refreshImage();
  })

 function previousImage() {
    currentImage = currentImage - 1;
    if(currentImage < 0) {
        currentImage = images.length - 1;
    }
    refreshImage();
 }

 function nextImage() {
    currentImage = currentImage + 1;
    if(currentImage >= images.length) {
        currentImage = 0;
    }
    refreshImage();
 }

 function refreshImage() {
    var imgs = document.getElementsByClassName('image-src');
    var imgArray = Array.from(imgs);
    return imgArray[0].src = images[currentImage];
 }





//  var imgs = document.getElementsByClassName('image-src');
//  var imgArray = Array.from(imgs);