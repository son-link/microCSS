$ = function(e){
	return document.querySelector(e);
}

$('#toggle-menu').addEventListener('click', function(e){
	e.preventDefault();
	$('#menu').classList.toggle('open')
});

document.querySelectorAll('#menu a').forEach(function(e) {
	e.addEventListener('click', function(){
		$('#menu').classList.remove('open');
	});
});