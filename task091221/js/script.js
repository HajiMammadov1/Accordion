$(function() {

    //style 1

    // $("button").click(function() {
    //     // $("accordion-body").slideToggle();
    //     // console.log("hello");
    //     // $("collapseOne").slideToggle();
    //     $(this).parent().next().slideToggle();
    // }); 

    //style 2

    $(document).on("click", ".accordion-header", function() {
        if($(".active")[0]!=$(this).next()[0]) {
            $(".active").slideUp(1000, function() {
                $(this).removeClass("active");
            });
            $(this).next().slideDown(1000, function() {
                $(this).addClass("active");
            });
        }
    });

    //style 3

    

    


});

