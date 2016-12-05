// Global variables
$(document).ready(function(){
	
	// var topics = {
	// 	name: ["Messi",
	// 	"Iniesta",
	// 	"Cristiano Ronaldo",
	// 	"Christian Pulisic",
	// 	"Antoine Griezmann",
	// 	"Neymar",
	// 	"Gareth Bale",
	// 	"Sergio Aguero"]
	// };
		// console.log(topics);
	var person;
	var queryURL;
	var input = "";

	// Functions
		// for (var i = 0; i < topics.length; i++);
		// 	$(".btn.btn-default").text(topics[i].name);	

	function ajaxCall(){
	  	person = $(".btn.btn-default").data("person");
	  	queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
		    person + "&api_key=dc6zaTOxFJmzC&limit=10";

		    $.ajax({
	      	url: queryURL,
	      	method: "GET"
	    	})
	    	.done(function(response) {
		      	var results = response.data;
		    });
	};

	function btnClick(){
		$(".btn.btn-default").click(function() {
		  	
		  	// console.log(person);
		    for (var i = 0; i < results.length; i++) {
			        var gifDiv = $("<div class='item'>");

			        var rating = results[i].rating;

			        var p = $("<p>").text("Rating: " + rating);

			        var personImage = $("<img class='gif'>");
			        personImage.attr("src", results[i].images.fixed_width_still.url);
			        	console.log(personImage);

			        gifDiv.prepend(p);
			        gifDiv.prepend(personImage);

			        $("#showGIFs").prepend(gifDiv);
			    }
		});
	}

	function gifAnimate(){
		var gif = $(".gif");
    	gif.click(function(){
    		for (var o = 0; o < results.length; o++) {
    			gif.html("src", results[o].images.fixed_width.url);
    		};
    	});
    };

    $(".btn.btn-default").click(function(){
    	ajaxCall();
    	btnClick();
    })

    $(".gif").click(function(){
    	ajaxCall();
    	gifAnimate();
    })

})

