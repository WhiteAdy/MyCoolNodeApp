document.getElementById('bagaButton').addEventListener('click', e => {
	let nameInput = document.getElementById('name');
	let ageInput = document.getElementById('age');
	let sexInput = document.querySelector('input[name=sex]:checked');
	e.preventDefault();
	if (nameInput.value && ageInput.value && sexInput.value) {
		fetch('/add', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: nameInput.value,
				age: ageInput.value,
				sex: sexInput.value
			})
		})
			.then(res => res.text())
			.then(res => {
				console.log(res);
			})
			.then(() => {
				const card = document.createElement('div');
				classNameColor = sexInput.value === 'female' ? 'pink' : 'blue';
				card.classList.add('card');
				card.classList.add(classNameColor);
				card.innerHTML = `
				<h4><strong>name: </strong></h4><span>${nameInput.value}</span>
				<h4><strong>sex: </strong></h4><span>${sexInput.value}</span>
				<h4><strong>age: </strong></h4><span>${ageInput.value}</span>
			`;
				document
					.querySelector('.card-group')
					.insertAdjacentElement('afterbegin', card);
				card.classList.add('enter');
				document.getElementById('bagaButton').style.display = 'none';
				setTimeout(() => {
					document.getElementById('bagaButton').style.display = 'block';
				}, 1500);
			})
			.catch(err => {
				console.log('error adding: ', err);
			});
	} else {
		window.alert('N-ai completat tot ba!');
	}
});

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
