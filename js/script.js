$(function(){
    // top to bottom start
    $(".top_to_bottom").click(function(){
        $("html,body").animate({scrollTop: 0},2000)
  })
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 200){
        $(".top_to_bottom").fadeIn(500)
        $(".top_to_bottom").css({bottom:"50px"})
    }else{
        $(".top_to_bottom").fadeOut(500)
        $(".top_to_bottom").css({bottom:"100px"})
    }
  })
    // top to bottom end


    // fixed nav start
    $(window).scroll(function(){
        let nav_scroll = $(this).scrollTop()
        if(nav_scroll > 150){
            $(".navbar").addClass("fixed_nav")
        }else{
            $(".navbar").removeClass("fixed_nav")
        }
    })
    // fixed nav end


    // smoth scroll start
    $(".manu a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          });
        } 
      });
    // smoth scroll end


    // form validation start
    let name_input = document.querySelector(".name_input")
    let eamil_input = document.querySelector(".email_input")
    let design_input = document.querySelector(".design_input")
    let input_btn = document.querySelector(".input_btn")

    let name_err = document.querySelector(".name_err")
    let email_err = document.querySelector(".email_err")
    let design_err = document.querySelector(".design_err")

      input_btn.addEventListener("click",(function(){
        if(name_input.value == ""){
          name_err.innerHTML = "inter your name"
        
        }
      }))
    //  form validation end


    // fixed nav start
    // fixed nav end
})