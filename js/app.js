

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
            <div class="card-footer bg-white d-flex align-items-center justify-content-between">
                <div>
                    <h5 class="card-title fw-bold">${card.name}</h5>
                    <p><i class="fa-solid fa-calendar-days"></i>  ${card.published_in}</p>
                </div>
                <button onclick="loadCardDetails('${card.id}')" class="btn btn-primary rounded-5" data-bs-toggle="modal" data-bs-target="#cardModal"><i class="fa-solid fa-circle-right"></i></button>
            </div>
        </div>
        `;
        cardsContainer.appendChild(cardDiv);
        
    });
}

const loadCardDetails = id => {
    const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCardDetails(data))
}

const displayCardDetails = card => {
    
}
loadCards();





















// const toggleSpinner = isLoading => {
//     const loader = document.getElementById('loader');
//     if(isLoading){
//         loader.classList.remove('d-none')
//     }