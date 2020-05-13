"use strict";

    // $(document).ready(function(){
    //     // var welcomeHeading = $('#book-welcome').html();
    //     // alert(welcomeHeading);
    //
    //     //    DO NOT have multiple instances of the same ID
    //     //     $('.codeup').css('border','1px solid red');
    //
    //     $('li').css({
    //         'font-size': '20px',
    //         'background-color' : 'yellow'
    //     });
    //
    //     $('h1,p').css('background-color','yellow');
    //     // $('p').css('background-color','yellow');
    //     // $('li').css('background-color','yellow');
    //
    //     var myHeadings = $('h1');
    //
    //     //BONUS: iterating through jQuery node list
    //     for(var i = 0;i < myHeadings.length;i++){
    //         alert(myHeadings[i].innerHTML);
    //     }
    //     alert(myHeadings);
    //
    // });

//    Using an IIFE in combination with jQuery DOM ready
// (function($){
//     $(document).ready(function(){
//         alert('The DOM has finished loading!');
    //    JAVASCRIPT GOES HERE
    // });
// })(jQuery);

// JQUERY MOUSE EVENTS EXERCISE!!!

// Change background color of h1 when clicked

$("h1").click(function() {
    $(this).css("background-color", "#ef0");
});

// Double clicked paragraphs have font size of 18px

$("p").dblclick(function() {
    $(this).css("font-size", "18px");
});

// Set li text color to red when hovering, and black when leaving

$("li").hover(function(){
    $(this).css("color", "red");
}, function(){
    $(this).css("color", "black");
});

