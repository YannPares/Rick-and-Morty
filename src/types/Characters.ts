interface Characters{
    id: number;
    name: string;
    status: CharacterStatus; //crear enum funcion
    species: number;
    type: string;
    gender: CharacterGener;
    origin: Location;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

interface Location{
    name: string;
    url: string;
}

enum CharacterStatus{
    "Alive",
    "Dead",
    "unknown"
}

enum CharacterGener{
    Famale,
    Male,
    Genderless,
    unknown
}


