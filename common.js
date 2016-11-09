$(document).ready(function() {
	
// Hide the images when page loads
$("#menuLeft").hide();
$("#menuTop").hide();
$("#menuRight").hide();


$(document).wipetouch({ 
  	
	// sliding menu from left on swipping from left to right
	wipeRight: function(result) { 
  		$("#menuLeft").show("slide", { direction: "left" }, 1000); 	 
  	},
	// sliding menu from right on swipping from right to left
	wipeLeft: function(result) { 
		$("#menuRight").show("slide", { direction: "right" }, 1000);	
	},
	// sliding menu from top on swipping from top to bottom
	wipeDown: function(result) {
		$("#menuTop").show("slide", { direction: "up" }, 1000);
	}	 
});



// sliding back the left menu on tap
$("#menuLeft").click(function () { 	
	$("#menuLeft").hide("slide", { direction: "left" }, 1000);
	
});	
// sliding back the right menu on tap
$("#menuRight").click(function () { 	
	$("#menuRight").hide("slide", { direction: "right" }, 1000);
			
});

});