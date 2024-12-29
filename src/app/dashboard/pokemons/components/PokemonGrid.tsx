import { ISimplePokemon } from "@/pokemons/inferfaces";
import { PokemonCard } from "./PokemonCard";

interface IProps {
  pokemons: ISimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: IProps) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={index} {...pokemon} />
      ))}
    </div>
  );
};
