var list = document.getElementById('list'),
	add = document.getElementById('button');

add.addEventListener('click', function(){
	var element = document.createElement('li');
	var tags = document.getElementsByTagName('li');
	element.innerHTML = 'item ' + tags.length; 

	list.appendChild(element);
});