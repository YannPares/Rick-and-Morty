import { getCharacters } from "./utils/API.js";
import { getEpisodes } from "./utils/API.js";



window.addEventListener("load", init);

async function init(){
    const characterList = document.getElementById("CharacterList");
    const characters = await getCharacters();
    const episodes = await getEpisodes();

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
        characterCard.addEventListener("click", sayAlt);
        characterList!.appendChild(characterCard);
        
        console.log(char.image);        
    });
    // function sayAlt(event:Event){
    //     // consoel log event.target.alt
    // }
    function sayAlt(this: HTMLIFrameElement){
        // consoel log this.alt
    }

}

