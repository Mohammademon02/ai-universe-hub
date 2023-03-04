

const loadCards = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCards(data.data.tools))
}

const displayCards = cards => {
    // console.log(cards);

    const cardsContainer = document.getElementById('cards-container');

      cards = cards.slice(0,6);
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
                    <li class="${card.features[0] === undefined ? 'd-none' : ''}">${card.features[0]}</li>
                    <li class="${card.features[1] === undefined ? 'd-none' : ''}">${card.features[1]}</li>
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

    // start spinner 
    toggleSpinner(false);
}

const lodeMore = document.getElementById('lode-more');
  lodeMore.addEventListener('click', function () {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCards(data.data.tools));

    const displayCards = cards => {
      // console.log(cards);
  
      const cardsContainer = document.getElementById('cards-container');
  
        cards = cards.slice(6,12);
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
                      <li class="${card.features[0] === undefined ? 'd-none' : ''}">${card.features[0]}</li>
                      <li class="${card.features[1] === undefined ? 'd-none' : ''}">${card.features[1]}</li>
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
    
    // start spinner 
    toggleSpinner(false);
    lodeMore.classList.add('d-none');

  })

const loadCardDetails = id => {
    const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCardDetails(data.data))
}

const displayCardDetails = card => {

  console.log(card);
  const modalContaienr = document.getElementById('modal-container');
  modalContaienr.innerHTML = `
        <div class="card" style="width: 50%; background-color: rgba(235, 87, 87, 0.05);">
          <div class="card-body">
            <h5 class="card-title">${card.description}</h5>

            <div class="d-flex justify-content-around">
              <div class=" text-center text-success ">
                <p>${card.pricing ? card.pricing[0].price : "Free of Cost"}</p>
                <p>${card.pricing ? card.pricing[0].plan : "Basic"}</p>
              </div>
              <div class="text-warning text-center">
                <p>${card.pricing ? card.pricing[1].price : "Free of Cost"}</p>
                <p>${card.pricing ? card.pricing[1].plan : "Basic"}</p>
              </div>
              <div class="text-danger text-center">
                <p>${card.pricing ? card.pricing[2].price : "Free of Cost"}</p>
                <p>${card.pricing ? card.pricing[2].plan : "Basic"}</p>
              </div>
              
            </div>

            <div class="d-flex gap-3">
              <div>
                <h5>Features</h5>
                <ul id="fe-${card.id}">
                  
                </ul>
              </div>
              <div>
                <h5>Integrations</h5>
                <ul>
                  <li class="${card.integrations[0] === undefined ? 'd-none' : ''}" >${card.integrations[0]}</li>
                  <li class="${card.integrations[1] === undefined ? 'd-none' : ''}" >${card.integrations[1]}</li>
                  <li class="${card.integrations[2] === undefined ? 'd-none' : ''}" >${card.integrations[2]}</li>
                  <li class="${card.integrations[3] === undefined ? 'd-none' : ''}" >${card.integrations[3]}</li>
                  <li class="${card.integrations[4] === undefined ? 'd-none' : ''}" >${card.integrations[4]}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="card" style="width: 50%;">
          <div class="position-relative">
            <img src="${card.image_link[0]}" class="card-img-top" alt="...">
            <div class="${card.accuracy.score === null ? 'd-none' : ''}"><button type="button" class="btn btn-danger position-absolute top-0 start-50 badge rounded-pill">${card.accuracy.score}</button></div>
          </div>
          <div class="card-body">
            <h5 class="card-title">${card.input_output_examples ? card.input_output_examples[0].input : "No! Not Yet! Take a break!!!"}</h5>
            <p class="card-text">${card.input_output_examples ? card.input_output_examples[0].output : "No! Not Yet! Take a break!!!"}</p>
          </div>
        </div>
  `;


}




// toggle spinner function here
const toggleSpinner = isLoading => {
  const spinnerSection = document.getElementById('spinner');
  if(isLoading){
      spinnerSection.classList.remove('d-none');
  }
  else{
      spinnerSection.classList.add('d-none');
  }
}


loadCards();

