var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCharacters, getEpisodes, getLocations } from "./utils/API.js";
window.addEventListener("load", init);
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const characterList = document.querySelector("#CharacterList");
        const EpisodeList = document.querySelector("#EpisodeList");
        const LocationList = document.querySelector("#LocationList");
        const characters = yield getCharacters();
        const episodes = yield getEpisodes();
        const locations = yield getLocations();
        characters.forEach((char) => {
            const characterCard = document.createElement('div');
            const characterCardTitle = document.createElement('h3');
            const characterCardTitleTxt = document.createTextNode(char.name);
            characterCardTitle.appendChild(characterCardTitleTxt);
            const characterImg = document.createElement("img");
            characterImg.src = char.image;
            characterImg.alt = `${char.name} Image`;
            characterCard.appendChild(characterCardTitle);
            characterCard.appendChild(characterImg);
            characterCard.addEventListener("click", sayAlt);
            // characterCard.setAttribute('class', 'card')
            characterList.appendChild(characterCard);
            // console.log(char.image);        
        });
        function sayAlt() {
            // console.log(this.alt);
        }
        episodes.forEach((episode) => {
            const episodeBlock = document.createElement('div');
            const episodeBlockTitle = document.createElement('h3');
            const episodeName = document.createTextNode(episode.name);
            episodeBlock.appendChild(episodeBlockTitle);
            episodeBlockTitle.appendChild(episodeName);
            EpisodeList.appendChild(episodeBlock);
            // console.log(episode.name)
        });
        locations.forEach((location) => {
            const locationBlock = document.createElement('ul');
            const locationBlockTitle = document.createElement('li');
            const locationName = document.createTextNode(location.name);
            locationBlock.appendChild(locationBlockTitle);
            locationBlockTitle.appendChild(locationName);
            LocationList.appendChild(locationBlock);
            // console.log(episode.name)
        });
    });
}
