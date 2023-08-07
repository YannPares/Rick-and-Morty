import { getCharacters,getEpisodes, getLocations } from "./utils/API.js";




window.addEventListener("load", init);

async function init(){
    const characterList = document.querySelector("#CharacterList");
    const EpisodeList = document.querySelector("#EpisodeList");
    const LocationList = document.querySelector("#LocationList");
    const characters = await getCharacters();
    const episodes = await getEpisodes();
    const locations = await getLocations();

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
        // characterCard.setAttribute('class', 'card')
        characterList!.appendChild(characterCard);
        // console.log(char.image);        
    });
    function sayAlt(this: HTMLIFrameElement){
            // console.log(this.alt);
        }
    episodes.forEach((episode) => {
        const episodeBlock = document.createElement('div');
        const episodeBlockTitle = document.createElement('h3');
        const episodeName = document.createTextNode(episode.name);
        episodeBlock.appendChild(episodeBlockTitle);
        episodeBlockTitle.appendChild(episodeName);
        EpisodeList!.appendChild(episodeBlock);
        // console.log(episode.name)
    });
    locations.forEach((location) => {
        const locationBlock = document.createElement('ul');
        const locationBlockTitle = document.createElement('li');
        const locationName = document.createTextNode(location.name);
        locationBlock.appendChild(locationBlockTitle);
        locationBlockTitle.appendChild(locationName);
        LocationList!.appendChild(locationBlock);
        // console.log(episode.name)
    });
   
  

}

