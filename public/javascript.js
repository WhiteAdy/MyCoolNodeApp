fetch('/mongo')
	.then(response => response.json())
	.then(text => {
		console.log(text);
		displayData(text);
	})
	.catch(err => console.error('there was an eror: ', err));

function displayData(dataObject) {
	console.log(typeof dataObject);
	dataObject.caca.forEach((data, index) => {
		const card = document.createElement('div');
		classNameColor = data.sex === 'female' ? 'pink' : 'blue';
		card.classList.add('card');
		card.classList.add(classNameColor);
		card.innerHTML = `
		<h4><strong>name: </strong></h4><span>${data.name}</span>
		<h4><strong>sex: </strong></h4><span>${data.sex}</span>
		<h4><strong>age: </strong></h4><span>${data.age}</span>
	`;
		document.querySelector('.card-group').appendChild(card);
		setTimeout(() => {
			card.classList.add('enter');
		}, 80 * index);
	});
}
