export interface IPokemon{
    forms: forms[];
    id: number;
    height: number;
    sprites: Sprites;
    weight: number;
}

export interface forms{
    name: string;
}

export interface Sprites {
    front_default:string;
}


export class Pokemon{
    protected constructor(
        public id = 0,
        public name = '',
        public height = 0,
        public weight = 0,
        public picture = '',
    ){}

    public static pokemonResponse(pokemon: IPokemon): Pokemon{
        return new this(
            pokemon.id,
            pokemon.forms[0].name,
            pokemon.height,
            pokemon.weight,
            pokemon.sprites.front_default
        )
    }
}