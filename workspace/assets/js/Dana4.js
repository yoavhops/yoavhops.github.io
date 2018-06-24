$(function() {

    console.log( "ready4!" );
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
	}

	$("#Dana_Profile_Page_1").click(function() {
		OnProfileClicked(1);
		event.preventDefault();
	});
	$("#Dana_Profile_Page_2").click(function() {
		OnProfileClicked(2);
		event.preventDefault();
	});
	$("#Dana_Profile_Page_3").click(function() {
		OnProfileClicked(3);
		event.preventDefault();
	});
	$("#Dana_Profile_Page_4").click(function() {
		OnProfileClicked(4);
		event.preventDefault();
	});
	$("#Dana_Profile_Page_5").click(function() {
		OnProfileClicked(5);
		event.preventDefault();
	});


	var openPageIndex = GetURLParameter('index');

	if (openPageIndex)
	{
		OnProfileClicked(openPageIndex);
	}

});

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

function OnProfileClicked(index)
{
	path = "./workspace/uploads/2ndSite/" + index + "/";

	document.getElementById("Dana_Image_1").src = path + "1.jpg";
	document.getElementById("Dana_Image_2").src = path + "2.jpg";
	document.getElementById("Dana_Image_3").src = path + "3.jpg";
	document.getElementById("Dana_Image_4").src = path + "4.jpg";
	document.getElementById("Dana_Image_5").src = path + "5.jpg";

	$('#Dana_Buttom_1').click();
}

function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}