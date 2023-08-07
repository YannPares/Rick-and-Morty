var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = 'https://rickandmortyapi.com/api';
const urlChar = `${url}/character`;
const urlEp = `${url}/episode`;
export function getCharacters() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(urlChar);
        const data = yield response.json();
        return data.results;
    });
}
export function getEpisodes() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(urlEp);
        const data = yield response.json();
        return data.results;
    });
}
