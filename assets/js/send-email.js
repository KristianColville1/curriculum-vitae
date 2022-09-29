function sendMail(contactForm) {
    emailjs.send("service_qvyhapz","kristian", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            window.location.href = "https://kristiancolville1.github.io/curriculum-vitae/thank-you.html";
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
}