const form = document.querySelector('#contact-form');

const submitForm = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  //formData.append('private_key', "-----BEGIN PRIVATE KEY-----\n AIzaSyDpCkXnB4KX1xSVL1N233xEH9_D6tmfghw \n-----END PRIVATE KEY-----\n");


  
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
    
};

form.addEventListener('submit', submitForm);