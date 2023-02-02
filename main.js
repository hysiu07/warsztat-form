const inputUser = document.querySelector('#username');
const inputEmail = document.querySelector('#email');

const checkBoxFirst = document.querySelector('.first');
const checkBoxSecond = document.querySelector('.second');
const checkBoxAll = document.querySelector('.third');

const btn = document.querySelector('.send');
const errorName = document.querySelector('.error-name');
const errorEmail = document.querySelector('.error-email');
const errorCheckBox = document.querySelector('.error-checkbox');

const test2 = (e) => {
	checkBoxFirst.checked = e.target.checked;
	checkBoxSecond.checked = e.target.checked;
	if (checkBoxAll.checked) {
		checkBoxFirst.setAttribute('disabled', '');
		checkBoxSecond.setAttribute('disabled', '');
	} else {
		checkBoxFirst.removeAttribute('disabled');
		checkBoxSecond.removeAttribute('disabled');
	}
};



const validate = (e) => {
	if (inputUser.value === '') {
		errorName.style.visibility = 'visible';
		errorName.textContent = 'Uzupełnij wszystkie pola!';
	} else if (inputUser.value !== '') {
		errorName.style.visibility = 'hidden';
	}
	if (inputEmail.value === '') {
		errorEmail.style.visibility = 'visible';
		errorEmail.textContent = 'Uzupełnij wszystkie pola!';
	} else if (inputEmail.value !== '') {
		errorEmail.style.visibility = 'hidden';
		if (!inputEmail.value.includes('@')) {
			errorEmail.style.visibility = 'visible';
			errorEmail.textContent = 'Brakuje znaku "@"';
		}
	}

	if (!checkBoxFirst.checked) {
		errorCheckBox.style.visibility = 'visible';
	} else {
		errorCheckBox.style.visibility = 'hidden';
	}
	if (
		errorName.style.visibility === 'visible' &&
		errorEmail.style.visibility === 'visible' &&
		errorCheckBox.style.visibility === 'visible'
	) {
		e.preventDefault();
	}
};

checkBoxAll.addEventListener('change', test2);
btn.addEventListener('click', validate);
