import { getCharacters } from "./utils/API.js";

window.addEventListener("load", init);

async function init(){
    const characterList = document.querySelector('#characterList');
    const characters = await getCharacters();

    characters.forEach((char) => {
        const characterCard = document.createElement('div');
        const characterCardTitle = document.createElement('h3');
        const characterCardTitleTxt = document.createTextNode(char.name)
        characterCardTitle.appendChild(characterCardTitleTxt);
        const characterImg = document.createElement("img")
        characterImg.src = char.image;
        characterImg.alt = `${char.name} Image`;

        characterCard.appendChild(characterCardTitle);
        characterCard.appendChild(characterImg);

        characterList!.appendChild(characterCard);
        
        // console.log(char);        
    });
}

