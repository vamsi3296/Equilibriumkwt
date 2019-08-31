var imagesArray = ["Assets/sepco1.jpg",
                   "Assets/sepco2.jpg",
                   "Assets/Aqua.jpg",
                   "Assets/Piping.jpg",
                   "Assets/Fabrication.jpg",
                   "Assets/General Trading.jpg",
                   "Assets/Man-power.jpg"];

function preloadImg(pictureUrls, callback) {
  var i, j, loaded = 0;
  var imagesArray = [];

  for (i = 0, j = pictureUrls.length; i < j; i++) {
    imagesArray.push(new Image());
  }
  for (i = 0, j = pictureUrls.length; i < j; i++) {
    (function (img, src) {
      img.onload = function () {
        if (++loaded == pictureUrls.length && callback) {
          callback(imagesArray);
        }
      };
      img.src = src;
    }(imagesArray[i], pictureUrls[i]));
  }
};


function roll(imagesArray, currentPos, max){
  if (max < 0) {
    return;
  }
  var slide = $('.parallax-mirror').find('img').attr('src', imagesArray[currentPos].src);
  $('.parallax-window').find('button').delay(500).fadeIn(1800)
  slide.delay(500).fadeIn(1800, function() {
    $('.parallax-window').find('button').delay(500).fadeOut(1800);
    slide.delay(500).fadeOut(1800, function() {
      currentPos++;
      if(currentPos >= imagesArray.length){
        currentPos = 0;
        max--;
      }
      roll(imagesArray, currentPos, max);
    });
  });
}

$(document).ready(main());

function main() {

  var $videoSrc;  
  $('.video-btn').click();
  $videoSrc = $('.video-btn').data('src');
// $('.video-btn').click(function() {
     // = $(this).data( "src" );
// });
// console.log($videoSrc);

  
  
// when the modal is opened autoplay it  
$('#myModal').on('shown.bs.modal', function (e) {
    
// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
  $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0;");
  $("iframe#video").contents().find('body').css("background-color", "red");
});


// stop playing the youtube video when I close the modal
$('#myModal').on("hidden.bs.modal", function(e) {
  // console.log("modal hidden");
    // a poor man's stop video
    $("#video").attr('src', ''); 
    $('iframe').attr('src', '');
}) 

//testing with close button
   // $('.close').click(function(){      //on close video should stop playing
        // $('iframe').attr('src', $('iframe').attr('src'));
        // console.log($('iframe').attr('src'));
    // }); 

  preloadImg(imagesArray, function (imagesArray) {
    roll(imagesArray, 0, 4);
    var time = 0;
    timer(time);
  });
  function timer(time){
    // $(window).blur();
    // $(window).focus();

      setInterval(function(){
      $(window).on("blur", function(){
      // console.log("window blur");
      // console.log(time);
      time = time + 1;
      // console.log(time);
      });

    
      $(window).on('focus', function(){
        // console.log("blurred time = "+time+" s");
        if (time > 120) {
          // console.log("greater the 120");
        //   preloadImg(imagesArray, function (imagesArray) {
        //   roll(imagesArray, 0, 4);
        //   var time = 0;
        //   timer(time);
        // });
        main();
          // $(".parallax-window").load(window.location.href + " .parallax-window");
          // location.reload();
          // roll(imagesArray, 0, 4);
          time = 0;
        }
    });
    }, 1000)
    
  }
}