$("#navDopdown").click(function(){
	$("nav").toggle("slow");
});

$(".choiceButton").click(function() {
	var title = this.id;
	console.log("hello");
	$("playlistTitle").html("hello");
});