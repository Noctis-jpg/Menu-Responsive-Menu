// when DOM is ready
$(document).ready(function () {

    // Attach Button click event listener 
    $(".myBtn").click(function(){
    
        $('#myDropdown').toggleClass('ym-in');
    });
    $('.hamburger-in').click(function() {
        $('.hamburger-in').toggleClass('active-one');
      });
      $('.hamburger-in').click(function() {
        $('.ym-link').toggleClass("ym-left");
        
      });
    
    });