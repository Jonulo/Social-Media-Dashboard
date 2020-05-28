const toggle = document.getElementById('toggle');
const body = document.body;
const spans = document.getElementsByTagName('span');
const title = document.getElementsByTagName('h1')[0];
const topSection = document.getElementsByClassName('topSection');
const followerNumber = document.getElementsByClassName('followers__number');
const socialSections = document.getElementsByClassName('socials__section');

toggle.addEventListener('input', (e) => {
	const isChecked = e.target.checked;
	
	if(isChecked) {
        body.classList.add('light-theme');
        topSection[0].classList.add('light-theme');
        [...spans].forEach(element => {
            element.classList.add('light-theme');
        });
        title.classList.add('light-theme');
        [...followerNumber].forEach(element => {
            element.classList.add('light-theme');
        });
        [...socialSections].forEach(element => {
            element.classList.add('light-theme');
        });
	} else {
        body.classList.remove('light-theme');
        topSection[0].classList.remove('light-theme');
        [...spans].forEach(element => {
            element.classList.remove('light-theme');
        });
        title.classList.remove('light-theme');
        [...followerNumber].forEach(element => {
            element.classList.remove('light-theme');
        });
        [...socialSections].forEach(element => {
            element.classList.remove('light-theme');
        });
	}
});