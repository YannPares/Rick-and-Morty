const url = 'https://rickandmortyapi.com/api'
const urlChar = `${url}/character`
const urlEp = `${url}/episode`
const urlLoc = `${url}/location`


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

export async function getLocations(): Promise<Locations[]>{
    const response = await fetch(urlLoc);
    const data = await response.json();
    return data.results;
}