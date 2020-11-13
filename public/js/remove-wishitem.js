// async function deleteWishItem(event) 
// {
//     event.preventDefault();
  
    $(document).ready(function(){
  
      $('#fashion, #electronics, #home, #all, #pets').on('click', '.delete', function() {
        $(this).parent('p').remove();
      });
    
    });

//     const id = window.location.toString().split('/')[
//       window.location.toString().split('/').length - 1
//     ];
//     const response = await fetch(`/api/posts/${id}`, {
//       method: 'DELETE'
//     });
  
//     if (response.ok) {
//       document.location.replace('/list');
//     } else {
//       alert(response.statusText);
//     }
// }
  
//   document.querySelector('.delete').addEventListener('click', deleteWithItem);
  