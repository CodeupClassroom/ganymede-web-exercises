"use strict";

$(document).ready(function() {

    //name input goes through random sorting here
    $('#sort-wizard').click(function(e){
        let house = Math.floor(Math.random() * 4);
        let newWizard = $('#new-wizard');
        let newMember = $('<li></li>').text(newWizard.val());
        switch(house){
            case 0:
                $('#gryffindor').append(newMember);
                break;
            case 1:
                $('#slytherin').append(newMember);
                break;
            case 2:
                $('#ravenclaw').append(newMember);
                break;
            default:
                $('#hufflepuff').append(newMember);
                break;
        }
        newWizard.val('');
    });

    /**********************************************
     * 			Attributes and CSS
     *********************************************/

    // TODO TOGETHER:  Using an event listener and css method, increase the font-size of 'Sorting Hat' when clicked.

    $('#main-heading').click(function(){
        // $(this).css('font-size', '4em');
        $(this).text('<p>My Sorting Hat</p>');
    });

    $('ul').click(function(){
        $(this).html('<li>Test</li>');
    });

    //    How can font size be changed using .html()?

    // TODO TOGETHER: store the inner text of #main-heading in a variable
    var mainHeading = $('#main-heading').text();
    alert(mainHeading);

    // TODO: Using a css method, change the banner background-color to black
    //  Hint: make sure you use the right selector

    $('.banner').css('background-color', '#000');


    // TODO TOGETHER: When the 'Houses' button is clicked, add the class 'house' to anything with a class of 'house-name'
    // Click on button with this id
    $('#highlight-houses').click(function(){
        // target all elements with class of .house-name
        // add class 'house' to its html
        // $('.house-name').addClass('house font-size');
        // $('.house-name').removeClass('house');
        $('.house-name').toggleClass('house');
    });

    // TODO: Comment out the code above. Add the class of 'house' to all the 'house-names'
    //  Write the event listener to remove the class instead

    // TODO TOGETHER: Refactor your addClass and removeClass methods to toggle the 'house' class instead

    $('#lock-g').click(function(){
        $('#gryffindor-house').toggleClass('gryffindor');
        if($('#gryffindor-house').hasClass('gryffindor')){
            // this refers to the element that triggers the event listener
            $(this).text('unlock');
        }else{
            $(this).text('lock in');
        }
    });
    /**********************************************
     * 			       Traversing
     *********************************************/

    // TODO TOGETHER: console log each list element's text

    // TODO TOGETHER: select all list elements and console log the first match

    // TODO TOGETHER: select all list elements and console log the last match

    // TODO TOGETHER: When I click on a list element, highlight its parent

    // TODO TOGETHER: When I click into a <ul>, console log last child in that group

    // TODO TOGETHER: When I click on any list element, console log the next element



});
