export interface Character {
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    name: string;
    skin_color: string;
}

export interface CharacterPageResponse {
    results: Character[];
}
