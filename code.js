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
	var results;


	function mainFn(){
		$("button#player-button").click(function(){
			console.log('clicked');
			
			person = $(this).data("person");
			queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
			    person + "&api_key=dc6zaTOxFJmzC&limit=10";
			    console.log(queryURL);
		
		    $.ajax({
		      	url: queryURL,
		      	method: "GET"
	    	})
	    	.done(function(response) {
		      	var results = response.data;
		    	  	// console.log(person);
	        	

	        	for (var i = 0; i < results.length; i++) {
	    	        var gifDiv = $("<div class='item'>");

	    	        var rating = results[i].rating;

	    	        var p = $("<p>").text("Rating: " + rating);

	    	        var personImage = $("<img class='gif'>");
	    	        personImage.attr("src", results[i].images.fixed_width_still.url);
	    	        personImage.attr("data-still", results[i].images.fixed_width_still.url);
	    	        personImage.attr("data-animate", results[i].images.fixed_width.url);
	    	        personImage.attr("data-state", "still");
	    	        	console.log(personImage);

	    	        gifDiv.prepend(p);
	    	        gifDiv.prepend(personImage);

	    	        $("#showGIFs").prepend(gifDiv);
	    	    };
	    	

	    		$(".gif").on("click", function() {
	    		 
	    		  	var state = $(this).attr( "data-state" );

	    		    if (state === "still"){
	    		      $(this).attr("src", $(this).data("animate"));
	    		      $(this).attr("data-state", "animate");
	    		    } else {
	    		      $(this).attr("src", $(this).data("still"));
	    		      $(this).attr("data-state", "still");
	    		    }

	    		});

			});
		});
	};

	function addPlayer(){
		$("#runsearch").click(function(){
			searchTerm = $("#scriptBox").val().trim();
			console.log(searchTerm);
	
			$("#btn-container").append("<button type='button' id='player-button' class='btn btn-default' data-person='"+searchTerm+"'>"+searchTerm+"</button>");		
			mainFn();

		});
	};

	mainFn();
	addPlayer();

})

