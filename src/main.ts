import { getCharacters } from "./utils/API.js";
import { getEpisodes } from "./utils/API.js";



window.addEventListener("load", init);

async function init(){
    const characterList = document.getElementById("CharacterList");
    const EpisodeList = document.getElementById("EpisodeList");
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

    episodes.forEach((episode) => {
        const episodeBlock = document.createElement('div');
        const episodeBlockTitle = document.createElement('h3');
        const episodeName = document.createTextNode(episode.name);
        episodeBlock.appendChild(episodeBlockTitle);
        episodeBlockTitle.appendChild(episodeName);
        EpisodeList!.appendChild(episodeBlock);
        console.log(episode.name)
    });
   
    function sayAlt(this: HTMLIFrameElement){
        // console.log(this.alt);
    }

}

