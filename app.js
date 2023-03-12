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

    
/*
    Email.send({
      Host : "smtp.gmail.com",
      Username : "marcusmercer12@gmail.com",
      Password : "marcus_mercer12",
      To : 'teamindiefusion@gmail.com',
      From : "marcusmercer12@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
    */
};

form.addEventListener('submit', submitForm);