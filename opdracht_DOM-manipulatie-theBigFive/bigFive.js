// Deel 1 Elementen toevoegen aan de DOM
const animalsSpotted = event => {
    const spottedAnimal = event.target.textContent;
    console.log(spottedAnimal);
    const newListItem = document.createElement('li');
    newListItem.appendChild(document.createTextNode(spottedAnimal));
    const list = document.getElementById('spotted-animals-list');
    list.appendChild(newListItem);
}

const attachEventToAnimalButtons = document.querySelectorAll('.big-five-button');
attachEventToAnimalButtons.forEach(button => button.addEventListener('click', animalsSpotted));

// Deel 2 Eén element verwijderen uit de DOM
const removeFirstItem = () => {
    const spottedAnimalsList = document.getElementById("spotted-animals-list").firstChild;
    spottedAnimalsList.remove();
};

// Deel 3 Meerdere elementen verwijderen uit de DOM
const removeAll = () => {
    const spottedAnimalsList = document.getElementById("spotted-animals-list");
    spottedAnimalsList.innerHTML = "";
};

const removeFirstItemButton = document.getElementById("remove-first-item-button");
removeFirstItemButton.addEventListener("click", removeFirstItem);

const removeAllButton = document.getElementById("remove-all-button");
removeAllButton.addEventListener("click", removeAll);