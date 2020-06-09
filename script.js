 //when the document is ready/loaded call the onScroll function when the "scroll" event occurs
$(document).ready(function(){
    $(document).on("scroll", onScroll);
})

function onScroll(event){
    //get vertical pos of scroll bar
    var scrollPosition = $(document).scrollTop();
    //for each <a> in the main navigation call this function
    $('#mainNav a').each(function() {
        var current = $(this); //current link
        var ref = $(current.attr("href"));    //current href
        
        if (ref.position().top <= scrollPosition && ref.position().top + ref.height() > scrollPosition){
            $('#mainNav ul li a').removeClass("active");
            cuurent.addClass("active");
        }
        else{
            current.removeClass("active");
        }
        
    });
}

/*
$(document).ready(function() {
  var scrollLink = $(".scroll");

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      1000
    );
  });

  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top - 20;

      if (sectionOffset <= scrollbarLocation) {
        $(this)
          .parent()
          .addClass("active");
        $(this)
          .parent()
          .siblings()
          .removeClass("active");
      }
    });
  });
});
*/