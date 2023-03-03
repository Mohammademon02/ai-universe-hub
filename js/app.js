

const loadCards = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCards(data.data.tools))
}

const displayCards = cards => {
    // console.log(cards);
    const cardsContainer = document.getElementById('cards-container');
    cards.forEach(card => {
        // console.log(card.features)
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
        <div class="card h-100 p-3">
            <img src="${card.image}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
                <h5 class="card-title fw-bold">Features</h5>
                <ol class="card-container">
                    <li>${card.features[0]}</li>
                    <li>${card.features[1]}</li>
                    <li class="${card.features[2] === undefined ? 'd-none' : ''}">${card.features[2]}</li>
                    <li class="${card.features[3] === undefined ? 'd-none' : ''}">${card.features[3]}</li>
                </ol>
            </div>
            <div class="card-footer bg-white">
                <h5 class="card-title fw-bold">${card.name}</h5>
            </div>

        </div>
        `;
        cardsContainer.appendChild(cardDiv);

        const features = card.features;
        
    });
}

loadCards();



// const cardDiv = document.createElement('div');
//         cardDiv.classList.add('col');
//         cardDiv.innerHTML = `
//         <div class="card h-100">
//             <img src="${card.image}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//             </div>
//         </div>
//         `