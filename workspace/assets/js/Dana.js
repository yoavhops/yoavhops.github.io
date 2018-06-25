$(function() {


	$(".Dana_about_Info").click(function(e) {
		e.preventDefault();
        var myContentDiv = $(this).closest('.Dana_Profile_Page');
        myContentDiv = myContentDiv.find('.Dana_MeTos');
        myContentDiv.click();
	});


    console.log( "ready!" );


	var observer = new MutationObserver(function(mutations) {
	  mutations.forEach(function(mutation) {
	    if (mutation.attributeName === "class") {
	      var attributeValue = $(mutation.target).prop(mutation.attributeName);
	      onClassChange(mutation.target, attributeValue);
	    }
	  });
	});

	var $div = $("#Dana_Page_1");
	observer.observe($div[0], {
	  attributes: true
	});
	var $div = $("#Dana_Page_2");
	observer.observe($div[0], {
	  attributes: true
	});
	var $div = $("#Dana_Page_3");
	observer.observe($div[0], {
	  attributes: true
	});
	var $div = $("#Dana_Page_4");
	observer.observe($div[0], {
	  attributes: true
	});
	var $div = $("#Dana_Page_5");
	observer.observe($div[0], {
	  attributes: true
	});


	var targetColor = "#15f7b6";
	var lerpValue = 0;

	function onClassChange(element, newClass) {

		var isSelected = newClass.includes("is-selected");
		var id = element.id;

		var index = id.substring(10);
		var elem = $("#Dana_Buttom_" + index);
		if (isSelected)
		{
			elem.addClass("is-selected");
		}
		else 
		{
			elem.removeClass("is-selected");
		}

		if (index == 1)
		{
			targetColor = "#15f7b6";
		}
		if (index == 2)
		{
			targetColor = "#15f7b6";	
		}
		if (index == 3)
		{
			
		}
		if (index == 4)
		{
			
		}
		if (index == 5)
		{
			
		}

		lerpValue = 0;

	}

	setInterval(Update, 25);

	function Update()
	{
		return;
    	var currentColor = $('body').css( "background-color" );
    	currentColor = "#000000";
    	if (targetColor != undefined)
    	{

    		if (lerpValue > 1)
    		{
    			lerpValue = 1;
    		}

			var value = lerpColor(currentColor, targetColor, lerpValue);
			$('body').css( "background-color", value);
			lerpValue += 0.025;
    	}
	}
});




function lerpColor(a, b, amount) { 

    var ah = parseInt(a.replace(/#/g, ''), 16),
        ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
        bh = parseInt(b.replace(/#/g, ''), 16),
        br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
        rr = ar + amount * (br - ar),
        rg = ag + amount * (bg - ag),
        rb = ab + amount * (bb - ab);

    return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}