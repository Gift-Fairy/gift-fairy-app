async function register(event)
{
    event.preventDefault();
    let full_name = document.querySelector('#full-name').value;
    let email = document.querySelector('#email-address').value;
    let password = document.querySelector('#register_password').value;
    let dob = document.querySelector('#birthdate').value;
    const response = await fetch('/api/users/',
    {
        method: 'POST',
        body: JSON.stringify(
        {
            full_name,
            email,
            password,
            dob
        }),
        headers:
        {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok)
    {
        console.log('Success', response);
    }
    else
    {
        console.log('Error', response);
    }
}

document.querySelector('#register').addEventListener('click', register);