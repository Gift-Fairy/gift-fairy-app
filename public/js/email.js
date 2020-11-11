function sendEmail(email, link, name)
{
    const response = fetch('/email',
    {
        method: 'POST',
        body: JSON.stringify(
        {
            email,
            link,
            name
        }),
        headers:
        {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok)
    {
        console.log('Success');
    }
    else
    {
        console.log('Error');
    }
}

document.querySelector('#email').addEventListener('click', function()
{
    sendEmail('tzeuch0922@gmail.com', 'http://www.google.com', 'gift fairy');
});