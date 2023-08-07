const url = 'https://rickandmortyapi.com/api'
const urlChar = `${url}/character`
const urlEp = `${url}/episode`


export async function getCharacters(): Promise<Characters[]>{
    const response = await fetch(urlChar);
    const data = await response.json();
    return data.results;
}

export async function getEpisodes(): Promise<Episodes[]>{
    const response = await fetch(urlEp);
    const data = await response.json();
    return data.results;

}
