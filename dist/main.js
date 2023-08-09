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
const characterList = document.querySelector("#CharacterList");
const EpisodeList = document.querySelector("#EpisodeList");
const LocationList = document.querySelector("#LocationList");
window.addEventListener("load", init);
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        characters();
        episodes();
        locations();
    });
}
function characters() {
    return __awaiter(this, void 0, void 0, function* () {
        const characters = yield getCharacters();
        characters.forEach((char) => {
            const characterCard = document.createElement('div');
            const characterCardTitle = document.createElement('h3');
            const characterCardTitleTxt = document.createTextNode(char.name);
            const characterImg = document.createElement("img");
            characterCardTitle.appendChild(characterCardTitleTxt);
            characterImg.setAttribute('class', 'charImage');
            characterImg.src = char.image;
            characterImg.alt = `${char.name} Image`;
            characterCard.addEventListener("click", openCharModal);
            characterCard.appendChild(characterCardTitle);
            characterCard.appendChild(characterImg);
            characterList.appendChild(characterCard);
            function openCharModal() {
                // this.setAttribute("class", "btn btn-primary");
                this.setAttribute("data-toggle", "modal");
                this.setAttribute("data-target", "#myModalChar");
                const charID = document.querySelector('#charID');
                const charName = document.querySelector('#charName');
                const charStatus = document.querySelector('#charStatus');
                const charSpecie = document.querySelector('#charSpecie');
                // const charType = document.querySelector('#charType');
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
                // charType!.textContent =`${char.type}`;
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
    });
}
function episodes() {
    return __awaiter(this, void 0, void 0, function* () {
        const episodes = yield getEpisodes();
        episodes.forEach((episode) => {
            const episodeBlock = document.createElement('div');
            const episodeBlockTitle = document.createElement('h3');
            const episodeName = document.createTextNode(episode.name);
            episodeBlock.appendChild(episodeBlockTitle);
            episodeBlock.addEventListener("click", openEPModal);
            episodeBlockTitle.appendChild(episodeName);
            EpisodeList.appendChild(episodeBlock);
            // console.log(episode.name)
            function openEPModal() {
                // this.setAttribute("class", "btn btn-primary");
                this.setAttribute("data-toggle", "modal");
                this.setAttribute("data-target", "#myModalEp");
                // charactersOfEp();
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
    });
}
function locations() {
    return __awaiter(this, void 0, void 0, function* () {
        const locations = yield getLocations();
        locations.forEach((location) => {
            const locationBlock = document.createElement('div');
            const locationBlockTitle = document.createElement('h3');
            const locationName = document.createTextNode(location.name);
            locationBlock.addEventListener("click", openLocModal);
            locationBlock.appendChild(locationBlockTitle);
            locationBlockTitle.appendChild(locationName);
            LocationList.appendChild(locationBlock);
            function openLocModal() {
                this.setAttribute("class", "btn-light");
                this.setAttribute("data-toggle", "modal");
                this.setAttribute("data-target", "#myModalLoc");
                // this.setAttribute("class", "card");
                const locID = document.querySelector('#locID');
                const locName = document.querySelector('#locName');
                const locType = document.querySelector('#locType');
                const locDim = document.querySelector('#locDim');
                const locResidents = document.querySelector('#locResidents');
                const locUrl = document.querySelector('#locUrl');
                const locCreated = document.querySelector('#locCreated');
                locID.textContent = `${location.id}`;
                locName.textContent = `${location.name}`;
                locType.textContent = `${location.type}`;
                locDim.textContent = `${location.dimension}`;
                // locResidents!.textContent = `${location.residents}`;
                locResidents.textContent = `${location.residents}`;
                locUrl.textContent = `${location.url}`;
                locCreated.textContent = `${location.created}`;
            }
        });
    });
}
// const url = 'https://rickandmortyapi.com/api'
// const urlChar = `${url}/character`
// const urlEp = `${url}/episode/`
// const urlLoc = `${url}/location`
// let pagina = 1;
// const response =  fetch(`${urlEp}/?page=${pagina}`);
// const data =  response.json();
// return data.results;
// pagina++;
// async function charactersOfEp(){
//     const episodes = await getEpisodes();
//     const characters = await getCharacters();
//     characters.forEach(char => {
//         episodes.forEach (episode => {
//         if (char.episode == episode){
//             const characterList = document.querySelector("#CharacterList");
//             const characterCard = document.createElement('div');
//             const characterCardTitle = document.createElement('h3');
//             const characterCardTitleTxt = document.createTextNode(char.name);
//             const characterImg = document.createElement("img");
//             characterCardTitle.appendChild(characterCardTitleTxt);
//             characterImg.setAttribute('class', 'charImage');
//             characterImg.src = char.image;
//             characterImg.alt = `${char.name} Image`;
//             characterCard.appendChild(characterCardTitle);
//             characterCard.appendChild(characterImg);
//             characterList!.replaceChild(characterCard, characterCard);
//         }
//     })        
//     });
// }
