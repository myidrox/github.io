$(".button").click(function(){
    var value = $(this).attr("data-filter");
    if(value=="all")
        {
            $(".filter").show(1000);
        }
    else
        {
            $(".filter").not("."+value).fadeOut(1000, function(){
                 $(".filter").filter("."+value).fadeIn(1000);
            });
           
        }
    $("ul .button").click(function(){
        /*$(this).addClass("active").siblings().removeClass("active");*/
        $("ul .button").removeClass("active")
        $(this).addClass("active");
    })
    
});

(function($) {
  "use strict";
  
  $(".bar").each(function() {
    
    var $bar = $(this),
        $pct = $bar.find(".pct"),
        data = $bar.data("bar");
    
    setTimeout(function() {
      
      $bar
        .css("background-color", data.color)
        .animate({
          "width": $pct.html()
      }, data.speed || 2000, function() {
        
        $pct.css({
          "color": data.color,
          "opacity": 1
        });
        
      });
      
    }, data.delay || 0);
    
  });
  
})(jQuery);