(document).on('click','.button-video',function(){
    var video = $(this).closest(".easy-to-use-video").find(".video")[0];
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });