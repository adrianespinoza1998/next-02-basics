import { IPokemonResponse, ISimplePokemon } from "@/pokemons/inferfaces";
import { PokemonGrid } from "./components";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<ISimplePokemon[]> => {
  const data: IPokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  return data.results.map((pokemon) => ({
    name: pokemon.name,
    id: pokemon.url.split("/").at(-2)!,
  }));
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons();
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokemons <small>estatico</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
