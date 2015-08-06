//var slideimages = [];
//var currentImage = 1;
//var change;
//var switchNumber = 1;
//
//slideimages[0] = '<img src= "Pics/booksquare1.jpg"width="150px" height="150px">';
//
//slideimages[1] = '<img src= "Pics/booksquare2.jpg"width="150px" height="150px">';
//slideimages[2] = '<img src= "Pics/booksquare3.jpg"width="150px" height="150px">';
//slideimages[3] = '<img src= "Pics/booksquare4.jpg"width="150px" height="150px">';
//slideimages[4] = '<img src= "Pics/booksquare5.jpg"width="150px" height="150px">';
//slideimages[5] = '<img src= "Pics/booksquare6.jpg"width="150px" height="150px">';
//slideimages[6] = '<img src= "Pics/booksquare7.jpg"width="150px" height="150px">';
//slideimages[7] = '<img src= "Pics/booksquare8.jpg"width="150px" height="150px">';
//slideimages[8] = '<img src= "Pics/booksquare9.jpg"width="150px" height="150px">';
//slideimages[9] = '<img src= "Pics/booksquare10.jpg"width="150px" height="150px">';
////PREVIOUS IMAGE FUNCTION
//
//
//
//
//
//function switchImage() {
//    var img;
//    currentImage = 1;
//    var i = 0;
//    
//    for (i = 0; i < 7; i++) {
//        
//            if( currentImage === 1){
//                 if (switchNumber + i >= slideimages.length) {
//                     
//                 }
//                else {
//                    img = i + switchNumber;
//                    document.getElementById("demo").innerHTML="*";   
//                }
//            }
//            else if (currentImage === 2){
//                if (switchNumber + i >= slideimages.length) {
//                     
//                 }
//                else {
//                    img = i + switchNumber;
//                    //document.getElementById("img2").innerHTML= slideimages[img];   
//                }
//                
//             }
//            else if (currentImage === 3){
//                if (switchNumber + i >= slideimages.length) {
//                    
//                 }   
//                else {
//                    img = i + switchNumber;
//                    //document.getElementById("img3").innerHTML= slideimages[img];   
//                }
//                                                     }
//                                                     
//            else if (currentImage === 4){
//                if (switchNumber + i >= slideimages.length) {
//                    
//                 }
//                else {
//                    img = i + switchNumber;
//                    //document.getElementById("img4").innerHTML= slideimages[img];   
//                }
//                                                     }
//                                                     
//            else if (currentImage === 5){
//                if (switchNumber + i >= slideimages.length) {
//                     
//                 } 
//                else {
//                    img = i + switchNumber;
//                    //document.getElementById("img5").innerHTML= slideimages[img];   
//                }
//                                                     }
//                                                     
//            else if (currentImage === 6){
//                  if (switchNumber + i >= slideimages.length) {
//                     
//                 }
//                else {
//                    img = i + switchNumber;
//                    //document.getElementById("img6").innerHTML= slideimages[img];   
//                }
//            }
//                                                     
//            else if (currentImage === 7){
//                  if (switchNumber + i >= slideimages.length) {
//                     
//                 } 
//                  else{
//                      img = i + switchNumber;
//                      //document.getElementById("img7").innerHTML= slideimages[switch];
//                  }
//            }
//                                                     
//            currentImage++;
//                }
//        
//    switchNumber++;
//   
//}
//    
//


//alert("working");
//
//switchImage();
//
//alert("gone through");
//    var timeoutID = window.setTimeout(switchImage, 2000);


$(function(){
    $('.fadein1 img:gt(0)').hide();
    setInterval(function(){
      $('.fadein1 :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein1');}, 
      3000);
});


$(function(){
    $('.fadein2 img:gt(0)').hide();
    setInterval(function(){
      $('.fadein2 :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein2');}, 
      3000);
});

$(function(){
    $('.fadein3 img:gt(0)').hide();
    setInterval(function(){
      $('.fadein3 :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein3');}, 
      3000);
});

$(function(){
    $('.fadein4 img:gt(0)').hide();
    setInterval(function(){
      $('.fadein4 :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein4');}, 
      3000);
});

$(function(){
    $('.fadein5 img:gt(0)').hide();
    setInterval(function(){
      $('.fadein5 :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein5');}, 
      3000);
});

$(function(){
    $('.fadein6 img:gt(0)').hide();
    setInterval(function(){
      $('.fadein6 :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein6');}, 
      3000);
});

$(function(){
    $('.fadein7 img:gt(0)').hide();
    setInterval(function(){
      $('.fadein7 :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein7');}, 
      3000);
});



