async function addWishItem(event)
{
    event.preventDefault();

    let category = 'shoe';
    let item_name = 'shoes';
    let brand_name = 'addidas';
    let list_id = 1;
    const response = await fetch('/api/items',
    {
        method: 'POST',
        body: JSON.stringify(
        {
            category,
            item_name,
            brand_name,
            list_id
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