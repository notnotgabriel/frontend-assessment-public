import type { NextPage } from "next";
import { CharactersTable } from "../src/characters/CharactersTable";

const Home: NextPage = () => {
  

  return (
    <>
      <h1>Rick and Morty characters</h1>
      <CharactersTable />
    </>
  )
};

export default Home;
