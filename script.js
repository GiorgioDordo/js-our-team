const candidates = [
    { firstName: 'Wayne Barnett', role: 'Founder & CEO', photo: 'wayne-barnett-founder-ceo.jpg' },
    { firstName: 'Angela Caroll', role: 'Chief Editor', photo: 'angela-caroll-chief-editor.jpg' },
    { firstName: 'Walter Gordon', role: 'Office Manager', photo: 'walter-gordon-office-manager.jpg' },
    { firstName: 'Angela Lopez', role: 'Social Media Manager', photo: 'angela-lopez-social-media-manager.jpg' },
    { firstName: 'Scott Estrada', role: 'Developer', photo: 'scott-estrada-developer.jpg' },
    { firstName: 'Barbara Ramos', role: 'Graphic Designer', photo: 'barbara-ramos-graphic-designer.jpg' }
]



for (let candidate of candidates) {
    const {firstName, role, photo} = candidate;
    console.log(firstName,"", role,"", photo);
    const printDom = document.getElementById('print-Dom');
    printDom.innerHTML += `${firstName}, ${role}, <img class="photo" src="img/${photo}">`;
}



