$(function() {

	var millstreet = 111;
	// drinks + no + harper
	var bierMkt = 112;
	// drinks + no + oldspice
	var yorkville = 113;
	// drinks + no + gosling
	var barChef = 212;
	// drinks + yes + oldspice
	var hyatt = 211;
	// drinks + yes + harper
	var royalYork = 213;
	// drinks + yes + gosling 
	var fresh = 122;
	// dinner + no + oldspice
	var banhMiBoys = 121;
	// dinner + no + harper 
	var grandElec = 123;
	// dinner + no + gosling
	var oliver = 221;
	// dinner + yes + harper 
	var canoe = 222;
	// dinner + yes + oldspice
	var drake = 223;
	// dinner + yes + gosling
	var bluffs = 141;
	// entertainment + no + harper
	var dance = 142;
	// entertainment + no + oldspice
	var snakes = 143;
	// entertainment + no + gosling
	var axe = 243;
	// entertainment + yes + gosling
	var shop = 242;
	// entertainment + yes + oldspice
	var rom = 241;
	// entertainment + yes + harper
	var picnic = 131;
	// romantic + no + harper
	var beaches = 132;
	// romantic + no + oldspice
	var bellwoods = 133;
	// romantic + no + gosling
	var helicopter = 233;
	// romantic + yes + gosling
	var cruise = 232;
	// romantic + yes + oldspice
	var tower = 231;
	// romantic + yes + harper
	var answers = 0;

	// Prevent submit form from reloading the page
	$('input[type=submit]').click(function(event) {
		event.preventDefault(); 
		$(this).css('background','rgb(255, 142, 27)');

		$('input:checked').each(function(){
			var value = $(this).val();
	    	answers += parseInt(value);
		});

		  	if ( answers <= 110) {//if an input inside each question is not checked
	            alert("Did you answer all of our questions?");
	        } 
	        else if (answers === millstreet) {
	        	$(".millstreet").removeClass("hide");
	        }
	        else if (answers === bierMkt) {
        		$(".bierMkt").removeClass("hide");
       		} else if (answers === yorkville) {
        		$(".yorkville").removeClass("hide");
        	} else if (answers === barChef) {
        		$(".barChef").removeClass("hide");
       	    } else if (answers === hyatt) {
        		$(".hyatt").removeClass("hide");
        	} else if (answers === royalYork) {
        		$(".royalYork").removeClass("hide");
        	} else if (answers === fresh) {
        		$(".fresh").removeClass("hide");
       	    } else if (answers === banhMiBoys) {
        		$(".banhMiBoys").removeClass("hide");
        	} else if (answers === grandElec) {
        		$(".grandElec").removeClass("hide");
       		} else if (answers === oliver) {
        		$(".oliver").removeClass("hide");
       		} else if (answers === canoe) {
        		$(".canoe").removeClass("hide");
        	} else if (answers === drake) {
        		$(".drake").removeClass("hide");
        	} else if (answers === bluffs) {
        		$(".bluffs").removeClass("hide");
        	} else if (answers === dance) {
        		$(".dance").removeClass("hide");
        	} else if (answers === snakes) {
        		$(".snakes").removeClass("hide");
        	} else if (answers === axe) {
        		$(".axe").removeClass("hide");
        	} else if (answers === shop) {
        		$(".shop").removeClass("hide");
        	} else if (answers === rom) {
        		$(".rom").removeClass("hide");
        	} else if (answers === picnic) {
        		$(".picnic").removeClass("hide");	
       		} else if (answers === beaches) {
        		$(".beaches").removeClass("hide");
        	} else if (answers === bellwoods) {
        		$(".bellwoods").removeClass("hide");
        	} else if (answers === helicopter) {
        		$(".helicopter").removeClass("hide");
        	} else if (answers === cruise) {
        		$(".cruise").removeClass("hide");
        	} else if (answers === tower) {
        		$(".tower").removeClass("hide");
        	}
      
    });

	smoothScroll.init();

  //    $('label').click(function(){
  //    	$(this).css('background','rgb(23, 137, 169)');
	 // });  

     // $('submit').click(function(){
     // 	$(this).css('background','rgb(255, 142, 27)');
     // });

     $('.close').click (function(){
		$('.result').addClass("hide");
        location.reload();
	});

 });
         

    		




	
	