const wrapper = document.querySelector('.wrapper');

function createCard(cardObj) {
    return `
  <div class="card">

    <div class="header">
        <img class="header-image" src="http://localhost:80/avatar.png" alt="avatar">
    
        <div class="header-title">
            ${cardObj.author}
        </div>
    </div>
    <div class="image-wrapper">
        <img class="image" src="${cardObj.download_url}" alt="test image">
    </div>
    <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>

</div>
    `;
}

fetch('https://picsum.photos/v2/list')
    .then (function(response) {
        return response.json();
    })
    .then((data) => {
        
        let cardList = '';

        data.forEach((cardObj) => {
            cardList = cardList + createCard(cardObj)
        })
            
        wrapper.innerHTML = cardList;

        let msnry;
        setTimeout(() => {
            msnry = new Masonry(wrapper);
            console.log('msnry', msnry);                
        }, 1000)

        setTimeout(() => {
            msnry.reloadItems();               
        }, 2000)
        
    });