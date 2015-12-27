var sticky_y = $("nav.sticky").offset().top;
$(window).scroll(function(){
  parallax();
  //----- sticky -----
  if($(this).scrollTop() >= sticky_y) {
    $("nav.sticky").addClass( "on")
  }else{$("nav.sticky").removeClass( "on")};
});


//----- parallax -----
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.bg').css('top',-(scrolled*0.1)+'px');
  $('header .content').css('top',50+(scrolled*0.1)+'%');
  $('header .content').css('opacity',1-(scrolled*0.01)/10);
};

//----- lightbox -----

$(document).on('click','.lightbox',function(){
  $('body').append('<div id="lightbox"><img src="" alt="" /></div>');
  $('#lightbox').css('display','block');
  $('#lightbox img').attr('src',$(this).attr('src'));
  $('#lightbox').animate({opacity: 1});
});

$(document).on('click','#lightbox',function(){
  $(this).animate({opacity: 0}, 200, function() {
    $(this).css('display','none');
    $('lightbox').remove();
  });
});

//----- Menu -----

$(document).on('click','.target-menu',function(){
  $('.menu').toggleClass('open');
});
$(document).on('click','.close-menu',function(){
  $('.menu').removeClass('open');
});
$(document).on('click','.menu ul li a',function(){
  $('.menu').removeClass('open');
});

//----- Modal -----

$('.target-modal').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
})

$('#modal-container').click(function(){
  $(this).addClass('out');
});