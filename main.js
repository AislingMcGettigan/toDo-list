$("li").on("click","li",(function() {
    $(this).toggleClass("completed");
});

$("span")..on("click","span",(function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();

})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var toDoText = $(this).val();
		$(this).val("");
		$("ul").append("<li <span><i class="fa fa-trash"></i></span> " + toDoText + "</li>");
	}

})

$("li span").click(function(){
	$("input[type='text']").fadeToggle():
})