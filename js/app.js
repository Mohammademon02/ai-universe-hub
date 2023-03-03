

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
    .then(data => displayCardDetails(data.data))
}

const displayCardDetails = card => {

    const modalContainer = document.getElementById('modal-container')
    console.log(card);
    const modalDiv = document.createElement('div');
    modalDiv.innerHTML = `
    <div class="modal fade" id="cardModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="cardModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="cardModalLabel">Modal title</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="d-flex">

                  <div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${card.description}</h5>

                      <div class="d-flex justify-content-around">
                        <div>
                          <p>price</p>
                          <p>Basic</p>
                        </div>
                        <div>
                          <p>price</p>
                          <p>Basic</p>
                        </div>
                        <div>
                          <p>price</p>
                          <p>Basic</p>
                        </div>
                      </div>

                      <div class="d-flex justify-content-around">
                        <div>
                          <h5 class="card-title">Features</h5>
                          <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                          </ul>
                        </div>
  
                        <div>
                          <h5 class="card-title">Integrations</h5>
                          <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div class="card" style="width: 18rem;">
                    <div class="">
                      <img src=" " class="card-img-top" alt="...">
                      <button class="btn btn-danger"></button>
                    </div>
                    <div class="card-body">
                      <h3>Hi, how are you doing today?</h3>
                      <p> </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
    `;
    modalContainer.appendChild(modalDiv);
}
loadCards();





















// const toggleSpinner = isLoading => {
//     const loader = document.getElementById('loader');
//     if(isLoading){
//         loader.classList.remove('d-none')
//     }