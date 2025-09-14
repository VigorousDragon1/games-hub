import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformDropDown from "./components/PlatformDropDown";
import type {Platform} from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

 export interface gameQuery{
  genre : Genre|null ,
  platform : Platform|null,
  sortOrder : string,
  searchText :string
 }

function App() {
 
const [gameQuery , setGameQuery]=useState<gameQuery>({} as gameQuery)
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <Navbar onSearch={(searchText) => setGameQuery({...gameQuery,searchText})}></Navbar>
      </GridItem>

      <GridItem area="aside" display={{ base: "none", lg: "block" }}>
        <GenreList
          selectedGenre={gameQuery.genre}
          onClick={(genre) => setGameQuery({...gameQuery,genre})}
        />
      </GridItem>

      <GridItem area="main">
        <GameHeading selectedGenre={gameQuery.genre} selectedPlatform={gameQuery.platform}/>
        <PlatformDropDown
          selectedPlatform={gameQuery.platform}
          oonClick={(platform) => setGameQuery({...gameQuery,platform})}
        ></PlatformDropDown>

        <SortSelector
          selectedOrder={gameQuery.sortOrder}
          onSelectOrder={(sortOrder) => setGameQuery({...gameQuery , sortOrder})}
        />

        <GameGrid
         gameQuery={gameQuery}
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
