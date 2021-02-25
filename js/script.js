'use strict';

var txtSearch = document.querySelectorAll('.txtSearcg input[type="text"] + span');

txtSearcg.forEach((elm) => {
	elm.addEventListener('click', () => {
		elm.previousElementSibling.value = '';
	});
});

function searchGoogleBooks() {

}
