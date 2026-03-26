const sectionEl = document.createElement("section");
sectionEl.className = "contact";
const main = document.querySelector('main');
main.appendChild(sectionEl);
const h2el1 = document.createElement("h2");
h2el1.textContent = "Let's work together";
sectionEl.appendChild(h2el1);
const pel1 = document.createElement("p");
pel1.textContent = "Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you within 24 hours.";
sectionEl.appendChild(pel1);
const divEl1 = document.createElement("div");
divEl1.className = "contactDetails";
sectionEl.appendChild(divEl1);
const p2El = document.createElement("p");
p2El.textContent = "Gmail: rishithbangari24@gmail.com";
divEl1.appendChild(p2El);
const p3El = document.createElement("p");
p3El.textContent = "Mobile: +91 8125307538";
divEl1.appendChild(p3El);
const p4El = document.createElement("p");
p4El.textContent = "Location: Hyderabad, India";
divEl1.appendChild(p4El);


const contactCard = document.createElement('div');
contactCard.className = 'contactCard';

const contactForm = document.createElement('form');
contactForm.className = 'contactForm';

const nameLabel = document.createElement('label');
nameLabel.setAttribute('for', 'name');
nameLabel.textContent = 'Name';
nameLabel.style.color = 'white';

const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.id = 'name';
nameInput.name = 'name';
nameInput.placeholder = 'Mandatory Field *';


const emailLabel = document.createElement('label');
emailLabel.setAttribute('for', 'email');
emailLabel.textContent = 'Email';
emailLabel.style.color = 'white';


const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.id = 'email';
emailInput.name = 'email';
emailInput.placeholder = 'Your email';
emailInput.required = true;

const subjectLabel = document.createElement('label');
subjectLabel.setAttribute('for', 'subject');
subjectLabel.textContent = 'Subject';
subjectLabel.style.color = 'white';

const subjectInput = document.createElement('input');
subjectInput.type = 'text';
subjectInput.id = 'subject';
subjectInput.name = 'subject';
subjectInput.placeholder = 'Project subject';
subjectInput.required = true;

const messageLabel = document.createElement('label');
messageLabel.setAttribute('for', 'message');
messageLabel.textContent = 'Message';
messageLabel.style.color = 'white';

const messageTextarea = document.createElement('textarea');
messageTextarea.id = 'message';
messageTextarea.name = 'message';
messageTextarea.rows = 5;
messageTextarea.placeholder = 'Describe your project';
messageTextarea.required = true;

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Send Message';

contactForm.appendChild(nameLabel);
contactForm.appendChild(nameInput);
contactForm.appendChild(emailLabel);
contactForm.appendChild(emailInput);
contactForm.appendChild(subjectLabel);
contactForm.appendChild(subjectInput);
contactForm.appendChild(messageLabel);
contactForm.appendChild(messageTextarea);
contactForm.appendChild(submitButton);

contactCard.appendChild(contactForm);
sectionEl.appendChild(contactCard);


contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let hasError = false;

    
    [nameInput, emailInput, subjectInput, messageTextarea].forEach(input => {
        input.style.borderColor = '';
    });

    if (!nameInput.value.trim()) {
        nameInput.style.borderColor = 'red';
        hasError = true;
    }
    if (!emailInput.value.trim()) {
        emailInput.style.borderColor = 'red';
        hasError = true;
    }
    if (!subjectInput.value.trim()) {
        subjectInput.style.borderColor = 'red';
        hasError = true;
    }
    if (!messageTextarea.value.trim()) {
        messageTextarea.style.borderColor = 'red';
        hasError = true;
    }

    if (hasError) {
        alert('Please fill in all mandatory fields.');
        return;
    }

    alert('Thank you for reaching out! I will get back to you within 24 hours.');
    contactForm.reset();
});


[nameInput, emailInput, subjectInput, messageTextarea].forEach(input => {
    input.addEventListener('input', function () {
        if (this.value.trim()) {
            this.style.borderColor = '';
        }
    });
});



function darkandlight() {
    document.body.classList.toggle('light');

}