function sendmail(){
    let parms={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        subject:document.getElementById('subject').value,
        message:document.getElementById('message').value
    }

    emailjs.send('service_ch3qroi', 'template_8723868', parms).then(alert('Email sent successfully!'));
}