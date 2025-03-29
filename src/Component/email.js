


function sendMail(){

    let parms ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }


    emailjs.send("service_9j5mct9","template_3t7d1y2",parms).then(alert("EMAIL SENT!!!!!!"))

}