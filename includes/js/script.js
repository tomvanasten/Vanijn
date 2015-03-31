/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

$(function() {
    
    $('#alertMe').click(function(e) {
        
        e.preventDefault();
        
        $('#successAlert').slideDown();
    
    });
    
    $('a.pop').click(function(e) {
        
        e.preventDefault();
        
    });
    
    $('a.pop').popover();
    
    $('[rel="tooltip"]').tooltip();
    
});

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body, .dropdown').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});