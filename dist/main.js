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
            characterImg.setAttribute('class', 'charImage');
            characterImg.src = char.image;
            characterImg.alt = `${char.name} Image`;
            characterCard.addEventListener("click", openCharModal);
            characterCard.appendChild(characterCardTitle);
            characterCard.appendChild(characterImg);
            characterList.appendChild(characterCard);
            // console.log(char.image);  
            function openCharModal() {
                this.setAttribute("class", "btn btn-primary");
                this.setAttribute("data-toggle", "modal");
                this.setAttribute("data-target", "#myModalChar");
                console.log(this.alt);
                const charID = document.querySelector('#charID');
                const charName = document.querySelector('#charName');
                const charStatus = document.querySelector('#charStatus');
                const charSpecie = document.querySelector('#charSpecie');
                const charType = document.querySelector('#charType');
                const charGender = document.querySelector('#charGender');
                const charOrigin = document.querySelector('#charOrigin');
                const charLocation = document.querySelector('#charLocation');
                const charImage = document.querySelector('#charImage');
                const charEP = document.querySelector('#charEP');
                const charUrl = document.querySelector('#charUrl');
                const charCreate = document.querySelector('#charCreate');
                charID.textContent = `${char.id}`;
                charName.textContent = `${char.name}`;
                charStatus.textContent = `${char.status}`;
                charSpecie.textContent = `${char.species}`;
                charType.textContent = `${char.type}`;
                charGender.textContent = `${char.gender}`;
                charOrigin.textContent = `${char.origin.name}`;
                charLocation.textContent = `${char.location.name}`;
                const characterImg = document.createElement("img");
                characterImg.src = char.image;
                characterImg.alt = `${char.name} Image`;
                charImage === null || charImage === void 0 ? void 0 : charImage.replaceChildren(characterImg, characterImg);
                charEP.textContent = `${char.episode.name}`;
                charUrl.textContent = `${char.url}`;
                charCreate.textContent = `${char.created}`;
            }
        });
        episodes.forEach((episode) => {
            const episodeBlock = document.createElement('div');
            const episodeBlockTitle = document.createElement('h3');
            const episodeName = document.createTextNode(episode.name);
            episodeBlock.appendChild(episodeBlockTitle);
            episodeBlock.addEventListener("click", openCharModal);
            episodeBlockTitle.appendChild(episodeName);
            EpisodeList.appendChild(episodeBlock);
            // console.log(episode.name)
            function openCharModal() {
                this.setAttribute("class", "btn btn-primary");
                this.setAttribute("data-toggle", "modal");
                this.setAttribute("data-target", "#myModalEp");
                console.log(this.alt);
                const epID = document.querySelector('#epID');
                const epName = document.querySelector('#epName');
                const epDate = document.querySelector('#epDate');
                const epString = document.querySelector('#epString');
                const epUrl = document.querySelector('#epUrl');
                const epCreated = document.querySelector('#epCreated');
                epID.textContent = `${episode.id}`;
                epName.textContent = `${episode.name}`;
                epDate.textContent = `${episode.air_date}`;
                epString.textContent = `${episode.episode}`;
                epUrl.textContent = `${episode.url}`;
                epCreated.textContent = `${episode.created}`;
            }
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
