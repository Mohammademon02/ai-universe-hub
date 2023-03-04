

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
            <img src="${card.image}" class="card-img-top p-3" alt="...">
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
    .then(data => console.log(data.data))
}


const displayCardDetails = card => {
  console.log(card);

  const modalContainer = document.getElementById('modal-container');
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modalContent.innerHTML = `
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body d-flex gap-3">

          <div class="card" style="width: 50%;">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>

              <div class="d-flex gap-3">
                <div>
                  <p>price</p>
                  <p>Basic</p>
                </div>
                <div>
                  <p>price</p>
                  <p>Pro</p>
                </div>
                <div>
                  <p>price</p>
                  <p>Enterprise</p>
                </div>
              </div>

              <div class="d-flex gap-3">
                <div>
                  <h5>Features</h5>
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <div>
                  <h5>Integrations</h5>
                  <ul>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="card" style="width: 50%;">
            <div>
              <img src="..." class="card-img-top" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title">Hi, how are you doing today?</h5>
              <p class="card-text"> </p>
            </div>
          </div>

        </div>
  `;

  modalContainer.appendChild(modalContent);


}
loadCards();






// const toggleSpinner = isLoading => {
//     const loader = document.getElementById('loader');
//     if(isLoading){
//         loader.classList.remove('d-none')
//     }