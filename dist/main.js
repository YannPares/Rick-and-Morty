var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCharacters } from "./utils/API.js";
window.addEventListener("load", init);
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const characterList = document.querySelector('#characterList');
        const characters = yield getCharacters();
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
            characterList.appendChild(characterCard);
            // console.log(char);        
        });
    });
}
