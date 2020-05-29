const toggle = document.getElementById('toggle');
const body = document.body;
const spans = document.getElementsByTagName('span');
const title = document.getElementsByTagName('h1')[0];
const secondTitle = document.getElementsByTagName('h2')[0];
const footer = document.getElementsByTagName('footer')[0];
const topSection = document.getElementsByClassName('topSection');
const followerNumber = document.getElementsByClassName('followers__number');
const overviewNumber = document.getElementsByClassName('overview__section--number');
const socialSections = document.getElementsByClassName('socials__section');
const overviewSections = document.getElementsByClassName('overview__section');

toggle.addEventListener('input', (e) => {
	const isChecked = e.target.checked;
	
	if(isChecked) {
        body.classList.add('light-theme');
        topSection[0].classList.add('light-theme');
        [...spans].forEach(element => {
            element.classList.add('light-theme');
        });
        title.classList.add('light-theme');
        secondTitle.classList.add('light-theme');
        [...followerNumber].forEach(element => {
            element.classList.add('light-theme');
        });
        [...overviewNumber].forEach(element => {
            element.classList.add('light-theme');
        });
        [...socialSections].forEach(element => {
            element.classList.add('light-theme');
        });
        [...overviewSections].forEach(element => {
            element.classList.add('light-theme');
        });
        footer.classList.add('light-theme');
	} else {
        body.classList.remove('light-theme');
        topSection[0].classList.remove('light-theme');
        [...spans].forEach(element => {
            element.classList.remove('light-theme');
        });
        title.classList.remove('light-theme');
        secondTitle.classList.remove('light-theme');
        [...followerNumber].forEach(element => {
            element.classList.remove('light-theme');
        });
        [...overviewNumber].forEach(element => {
            element.classList.remove('light-theme');
        });
        [...socialSections].forEach(element => {
            element.classList.remove('light-theme');
        });
        [...overviewSections].forEach(element => {
            element.classList.remove('light-theme');
        });
        footer.classList.remove('light-theme');
	}
});