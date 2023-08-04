

const url = 'rickandmortyapi.com/api'
const urlChar = `${url}/character`


export async function getCharacters(): Promise<Characters[]>{
    const response = await fetch(url);
    const data = await response.json();
    return data.results;

}

