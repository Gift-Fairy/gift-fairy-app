// const addWishItem = async (event) =>
async function addWishItem(event)
{
    event.preventDefault();

    let category = 'shoe';
    let item_name = 'shoes';
    let brand_name = 'addidas';
    let user_id = 1;
    let user_id_response = await fetch('/api/users/login',
    {
        method: 'GET',
        headers:
        {
            'Content-Type': 'application/json'
        }
    });
    const data = await user_id_response.json().id;
    console.log(data);
    const response = await fetch('/api/items',
    {
        method: 'POST',
        body: JSON.stringify(
        {
            category,
            item_name,
            brand_name,
            user_id
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

document.querySelector('#add-item').addEventListener('click', addWishItem);