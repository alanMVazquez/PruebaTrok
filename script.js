const availableCards = [
  { name: 'Dragón de Fuego', id: 1 },
  { name: 'Guerrero de Hielo', id: 2 },
  { name: 'Mago Arcano', id: 3 }
];

function renderCards() {
  const availableCardsList = document.getElementById('available-cards');
  availableCardsList.innerHTML = '';
  availableCards.forEach(card => {
    const li = document.createElement('li');
    li.textContent = card.name;
    li.dataset.id = card.id;
    li.onclick = () => addCardToDeck(card);
    availableCardsList.appendChild(li);
  });
}

function addCardToDeck(card) {
  const deckList = document.getElementById('deck');
  const li = document.createElement('li');
  li.textContent = card.name;
  deckList.appendChild(li);
}

document.addEventListener('DOMContentLoaded', renderCards);
