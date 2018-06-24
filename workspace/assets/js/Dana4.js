$(function() {

    console.log( "ready4!" );

	var SlideToPrevIndex = 1;

	function SlideTo(index) {

		if (index == SlideToPrevIndex)
		{
			return;
		}

	    var next = document.getElementById("slides_" + index);
	    var prev = document.getElementById("slides_" + SlideToPrevIndex);
	    var att = document.createAttribute("checked");
	    prev.removeAttribute("checked");
	    next.setAttributeNode(att);
	    SlideToPrevIndex = index;
	}

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

	function onClassChange(element, newClass) {

		var isSelected = newClass.includes("is-selected");
		var id = element.id;

		var index = id.substring(10);

		if (isSelected)
		{
			SlideTo(index);
		}

		if (index == 1)
		{

		}

		if (index == 2)
		{	

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

	}

});
