"use strict";

    $(document).ready(function(){
        // var welcomeHeading = $('#book-welcome').html();
        // alert(welcomeHeading);

        //    DO NOT have multiple instances of the same ID
        //     $('.codeup').css('border','1px solid red');

        $('li').css('font-size','20px');

        $('h1,p,li').css('background-color','yellow');
        // $('p').css('background-color','yellow');
        // $('li').css('background-color','yellow');

        var myHeadings = $('h1').html();
        alert(myHeadings);

    });

//    Using an IIFE in combination with jQuery DOM ready
// (function($){
//     $(document).ready(function(){
//         alert('The DOM has finished loading!');
    //    JAVASCRIPT GOES HERE
    // });
// })(jQuery);


