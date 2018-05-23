// JavaScript Document
//Check Off Specific Todos by clicking

$("ul").on("click", "li" ,function(){
	$(this).toggleClass("completed");
})

//Click on x to delete todo
$("ul").on("click", "span",function(event){
$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();

})

//Adding new todos

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabing new todo
		var toDoText = $(this).val();
		$(this).val("");
		// create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>");
	}
});

$("#toggle").click(function(){
	$("input[type='text']").fadeToggle();
});
