document.getElementById('contact-form').addEventListener('submit', function (event){
    event.preventDefault();
    emailjs.init('mE35vFipiRMd-JCze');
    sendEmailBtn.value = 'Sending...';

    emailjs.sendForm('service_qvyhapz', 'template_r4qxj0g', this)
    .then(function() {
        console.log('SUCCESS!');
        displayThanks();
    }, function(error) {
        console.log('FAILED...', error);
    });
});