$(document).ready(function(){
	let store = '';
	let box = $(".form").children("#inp");
	$(box).click(function(){
		const value = $( this ).val();
		$( '.screen' ).append( value );
		store += value;
		

	});

	$( '.form' ).submit(function(evt){
		evt.preventDefault();
		let ans = eval(store);
		$( '.screen' ).empty();
		$( '.screen' ).append( ans );

	});

	$( '.cancel' ).click(function(){
		$( '.screen' ).empty();
	});
});
