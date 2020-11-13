async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-address').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/list');
      } else {
        alert(response.statusText);
      }
    }
  }
  

  
  document.querySelector('.register').addEventListener('submit', loginFormHandler);
  
  