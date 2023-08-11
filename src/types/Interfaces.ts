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
    id:number;      //The id of the location.
    name:string;    //The name of the location.
    type:string;	//The type of the location.
    dimension:string	//The dimension in which the location is located.
    residents:string[];	 //ist of character who have been last seen in the location.
    url:string;	   //Link to the location's own endpoint.
    created:string; //Time at which the location was created in the database.
}
