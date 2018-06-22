$(function() {

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

	}

});