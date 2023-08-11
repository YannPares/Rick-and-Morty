interface Characters{
    id: number;
    name: string;
    status: CharacterStatus;
    species: string;
    type: string;
    gender: CharacterGender;
    origin: Locations;
    location: Locations;
    image: string;
    episode: Episodes;
    url: string;
    created: string;
}

enum CharacterStatus{
    "Alive",
    "Dead",
    "unknown"
}

enum CharacterGender{
    "Female",
    "Male",
    "Genderless",
    "unknown"
}

interface Episodes{
    id:number;
    name:string;	
    air_date:string;
    episode:string;
    characters:Characters;	
    url:string;
    created:string;
}

interface Locations{
    id:number;      
    name:string;    
    type:string;
    dimension:string	
    residents:string[];
    url:string;	
    created:string;
}
