const form = document.querySelector('form');

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");


function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Subject: ${subject.value} <br> Message: ${message.value}`

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "subijshrestha@gmail.com",
        Password: "5E4FF68DC245ECD59EE81194893136D41D70",
        To: 'truthsir8739@gmail.com',
        From: "truthsir8739@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}

// function checkInputs(){
//     const items = document.querySelectorAll("");

//     for(const item of items){
//         if(item.value == ""){
//             item.classList.add("error");
//             item.parentElement.classList.add("error");
//         }

//         item.addEventListener("keyup", () => {

//         })
//     }
// }




form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});