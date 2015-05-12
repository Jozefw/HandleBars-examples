$(function(){
	// grab the template script from the index.html page
	var templateScript = $("#test-template").html();
	// compile the template
	var templateActual = Handlebars.compile(templateScript);
	// define the data object
	var context = {
		"city": "london",
		"street": "Baker",
		"number": "222",
		"description": {
			"escaped": "double bracks escapes html",
			"unescaped": "triple bracks leaves html as is"
		},
		"example": "<button>hello</button>"
	};

	// pass our data to the template
	var compiledHtml = templateActual(context);
	// now add the compiled html back to the page
	$(".contentHolder").html(compiledHtml);
});