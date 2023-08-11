import { getCharacters,getEpisodes, getLocations} from "./utils/API.js";
const characterList = document.querySelector("#CharacterList");
const EpisodeList = document.querySelector("#EpisodeList");
const LocationList = document.querySelector("#LocationList");

window.addEventListener("load", init);

async function init(){
    characters();
    episodes();
    locations();

}

const changeToLocations = document.querySelector('#changeToLocations') as HTMLButtonElement;
const changeToCharacters = document.querySelector('#changeToCharacters') as HTMLButtonElement;
const sectionChar = document.querySelector('#sectionChar') as HTMLElement;
const sectionLoc = document.querySelector('#sectionLoc') as HTMLElement;
changeToLocations.addEventListener("click", showLocations);
changeToCharacters.addEventListener("click", showCharacters);
sectionLoc.style.display = "none";
function showLocations(){
    sectionChar.style.display = "none";
    sectionLoc.style.display = "block";
}
function showCharacters(){
    sectionChar.style.display = "block";
    sectionLoc.style.display = "none";
}

async function characters(){
const characters = await getCharacters();
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
    
    characterList!.appendChild(characterCard);
    function openCharModal(this: HTMLImageElement){
        // this.setAttribute("class", "btn btn-primary");
        this.setAttribute("data-toggle","modal");
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
            charID!.textContent = `${char.id}`;
            charName!.textContent = `${char.name}`;
            charStatus!.textContent=`${char.status}`;
            charSpecie!.textContent = `${char.species}`;
            // charType!.textContent =`${char.type}`;
            charGender!.textContent = `${char.gender}`;
            charOrigin!.textContent = `${char.origin.name}`;
            charLocation!.textContent = `${char.location.name}`;
            const characterImg = document.createElement("img")
            characterImg.src = char.image;
            characterImg.alt = `${char.name} Image`;
            charImage?.replaceChildren(characterImg , characterImg);
            charEP!.textContent = `${char.episode}`;
            charUrl!.textContent = `${char.url}`;
            charCreate!.textContent = `${char.created}`;
    }
});
}

async function episodes (){
    const episodes = await getEpisodes();
    episodes.forEach((episode) => {
        const episodeBlock = document.createElement('ul');
        const episodeBlockTitle = document.createElement('h3');
        const episodeBlockNum = document.createElement('h3');
        const episodeName = document.createTextNode(episode.name);
        const episodeNum = document.createTextNode(episode.episode);
        episodeBlock.appendChild(episodeBlockTitle);
        episodeBlock.setAttribute("class", "episodeBlock");
        episodeBlock.addEventListener("click", openEPModal);
        episodeBlockTitle.appendChild(episodeName);
        episodeBlockNum.appendChild(episodeNum);
        episodeBlock.appendChild(episodeBlockNum);
        EpisodeList!.appendChild(episodeBlock);
        // console.log(episode.name)
        function openEPModal(this: HTMLElement){
            // this.setAttribute("class", "btn btn-primary");
            this.setAttribute("data-toggle","modal");
            this.setAttribute("data-target", "#myModalEp");
            // charactersOfEp();
            const epID = document.querySelector('#epID');
            const epName = document.querySelector('#epName');
            const epDate = document.querySelector('#epDate');
            const epString = document.querySelector('#epString');
            const epUrl = document.querySelector('#epUrl');
            const epCreated = document.querySelector('#epCreated');
            
            epID!.textContent = `${episode.id}`;
            epName!.textContent = `${episode.name}`;
            epDate!.textContent=`${episode.air_date}`;
            epString!.textContent = `${episode.episode}`;
            epUrl!.textContent =`${episode.url}`;
            epCreated!.textContent = `${episode.created}`;
        }
    });
}

async function locations(){
    const locations = await getLocations();
    locations.forEach((location) => {
        const locationBlock = document.createElement('div');
        const locationBlockTitle = document.createElement('h3');
        const locationName = document.createTextNode(location.name);
        locationBlock.addEventListener("click", openLocModal)
        locationBlock.setAttribute("class", "locationBlock");
        locationBlock.appendChild(locationBlockTitle);
        locationBlockTitle.appendChild(locationName);
        LocationList!.appendChild(locationBlock);

        function openLocModal(this: HTMLElement){
            this.setAttribute("class", "btn-light");
            this.setAttribute("data-toggle","modal");
            this.setAttribute("data-target", "#myModalLoc");
            // this.setAttribute("class", "card");
            const locID = document.querySelector('#locID');
            const locName = document.querySelector('#locName');
            const locType = document.querySelector('#locType');
            const locDim = document.querySelector('#locDim');
            const locResidents = document.querySelector('#locResidents');
            const locUrl = document.querySelector('#locUrl');
            const locCreated = document.querySelector('#locCreated');
          
            locID!.textContent = `${location.id}`;
            locName!.textContent = `${location.name}`;
            locType!.textContent=`${location.type}`;
            locDim!.textContent=`${location.dimension}`;
            // locResidents!.textContent = `${location.residents}`;
            locResidents!.textContent = `${location.residents}`;
            locUrl!.textContent =`${location.url}`;
            locCreated!.textContent = `${location.created}`;

        }
        
    });

}

const buttonEp = document.querySelector('#nextEP') as HTMLButtonElement;
const buttonChar = document.querySelector('#nextChar') as HTMLButtonElement;
const buttonLoc = document.querySelector('#nextLoc') as HTMLButtonElement;

buttonEp.addEventListener('click', nextEpisodes);
buttonChar.addEventListener('click', nextCharacters);
buttonLoc.addEventListener('click', nextLocations);

let paginaEP=2;
async function nextEpisodes(){
    const response = await fetch(`https://rickandmortyapi.com/api/episode/?page=${paginaEP}`);
    const data = await response.json();
    const episodes = data.results;
    // return console.log(data.results);
    for (const episode of episodes){
        const episodeBlock = document.createElement('ul');
        const episodeBlockTitle = document.createElement('h3');
        const episodeBlockNum = document.createElement('h3');
        const episodeName = document.createTextNode(episode.name);
        const episodeNum = document.createTextNode(episode.episode);
        episodeBlock.setAttribute("class" , "episodeBlock")
        episodeBlock.appendChild(episodeBlockTitle);
        episodeBlock.addEventListener("click", openEPModal);
        episodeBlockTitle.appendChild(episodeName);
        episodeBlockNum.appendChild(episodeNum);
        episodeBlock.appendChild(episodeBlockNum);
        EpisodeList!.appendChild(episodeBlock);
        // console.log(episode.name)
        function openEPModal(this: HTMLElement){
            // this.setAttribute("class", "btn btn-primary");
            this.setAttribute("data-toggle","modal");
            this.setAttribute("data-target", "#myModalEp");
            // charactersOfEp();
            const epID = document.querySelector('#epID');
            const epName = document.querySelector('#epName');
            const epDate = document.querySelector('#epDate');
            const epString = document.querySelector('#epString');
            const epUrl = document.querySelector('#epUrl');
            const epCreated = document.querySelector('#epCreated');
            
            epID!.textContent = `${episode.id}`;
            epName!.textContent = `${episode.name}`;
            epDate!.textContent=`${episode.air_date}`;
            epString!.textContent = `${episode.episode}`;
            epUrl!.textContent =`${episode.url}`;
            epCreated!.textContent = `${episode.created}`;
        }
    }
    paginaEP++;
}
let paginaChar=2;
async function nextCharacters(){
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${paginaChar}`);
    const data = await response.json();
    const characters = data.results;
    // return console.log(data.results);
    for (const char of characters){
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
        characterList!.appendChild(characterCard);
            function openCharModal(this: HTMLImageElement){
            // this.setAttribute("class", "btn btn-primary");
            this.setAttribute("data-toggle","modal");
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
                charID!.textContent = `${char.id}`;
                charName!.textContent = `${char.name}`;
                charStatus!.textContent=`${char.status}`;
                charSpecie!.textContent = `${char.species}`;
                // charType!.textContent =`${char.type}`;
                charGender!.textContent = `${char.gender}`;
                charOrigin!.textContent = `${char.origin.name}`;
                charLocation!.textContent = `${char.location.name}`;
                const characterImg = document.createElement("img")
                characterImg.src = char.image;
                characterImg.alt = `${char.name} Image`;
                charImage?.replaceChildren(characterImg , characterImg);
                charEP!.textContent = `${char.episode.name}`;
                charUrl!.textContent = `${char.url}`;
                charCreate!.textContent = `${char.created}`;
    }
    paginaChar++;
}     
}

let paginaLoc=2;
async function nextLocations(){
    const response = await fetch(`https://rickandmortyapi.com/api/location/?page=${paginaLoc}`);
    const data = await response.json();
    const locations = data.results;
    // return console.log(data.results);
    for (const location of locations){
        const locationBlock = document.createElement('div');
        const locationBlockTitle = document.createElement('h3');
        const locationName = document.createTextNode(location.name);
        locationBlock.setAttribute("class", "locationBlock");
        locationBlock.addEventListener("click", openLocModal)
        locationBlock.appendChild(locationBlockTitle);
        locationBlockTitle.appendChild(locationName);
        LocationList!.appendChild(locationBlock);

        function openLocModal(this: HTMLElement){
            this.setAttribute("class", "btn-light");
            this.setAttribute("data-toggle","modal");
            this.setAttribute("data-target", "#myModalLoc");
            // this.setAttribute("class", "card");
            const locID = document.querySelector('#locID');
            const locName = document.querySelector('#locName');
            const locType = document.querySelector('#locType');
            const locDim = document.querySelector('#locDim');
            const locResidents = document.querySelector('#locResidents');
            const locUrl = document.querySelector('#locUrl');
            const locCreated = document.querySelector('#locCreated');
          
            locID!.textContent = `${location.id}`;
            locName!.textContent = `${location.name}`;
            locType!.textContent=`${location.type}`;
            locDim!.textContent=`${location.dimension}`;
            // locResidents!.textContent = `${location.residents}`;
            locResidents!.textContent = `${location.residents}`;
            locUrl!.textContent =`${location.url}`;
            locCreated!.textContent = `${location.created}`;
        }
    }
    paginaLoc++;
}


