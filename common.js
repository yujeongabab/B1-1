$(document).ready(function(){
    $('.gnb>ul>li').mouseenter(function(){
        $('.subnav').stop().slideDown(800);
    });

    $('.gnb>ul>li').mouseleave(function(){
        $('.subnav').stop().slideUp(500);
    });


    
});

$(document).ready(function(){
  setInterval(function(){
    $('.slidewrap').animate({'marginLeft':'-1200px'},function(){

        $('.slide:first').appendTo('.slidewrap')
        $('.slidewrap').css({'marginLeft':'0px'})


    });


  },3000);

});

$(document).ready(function(){
    $('.btn a').click(function(){
        $('.btn a').removeClass('active');
        $(this).addClass('active');
        
        var i = $(this).parent().index();
        
        $('.bwrap > div').fadeOut(0);
        $('.bwrap > div').eq(i).fadeIn(0);
    });
  });

  $(document).ready(function(){
    $('.notice .popUpclick').click(function(){
        $('.popUp').fadeIn(0);
    });

    $('.popUp a').click(function(){
        $('.popUp').fadeOut(0);
    });
  });


