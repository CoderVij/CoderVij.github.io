const form = document.querySelector('#contact-form');

var script = document.createElement('script');
script.src = 'https://smtpjs.com/v3/smtp.js';
script.onload = function() {
  // Code that uses the functionality of the external script
};
document.head.appendChild(script);


const submitForm = (event) => {
  event.preventDefault();

  
  const formData = new FormData(event.target);
  

  //formData.append('private_key', "-----BEGIN PRIVATE KEY-----\n AIzaSyDpCkXnB4KX1xSVL1N233xEH9_D6tmfghw \n-----END PRIVATE KEY-----\n");

/*
  //https://email-server-side.onrender.com/submit-form   http://localhost:5000/
  axios.post('https://email-server-side.onrender.com/submit-form', formData, {
    withCredentials: true,
    crossDomain: true,
  })
    .then((response) => {
      console.log(response);
      alert('Message sent!');
    })
    .catch((error) => {
      console.error(error);
      alert('Error sending message.');
    });

    */

 
  
      emailjs.sendForm('service_gywsdqj', 'template_kmmcv21', document.getElementById('contact-form'), 'vMqjvW4xQH8o5GVC_')
        .then((result) => {
          alert('Message sent!');
        }, (error) => {
          console.log(error);
          alert('Error sending message.');
        });
    
    
};

form.addEventListener('submit', submitForm);