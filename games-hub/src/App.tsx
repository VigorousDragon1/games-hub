import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformDropDown from "./components/PlatformDropDown";
import type Platform from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

const [selectedOrder , setSelectedOrder]=useState<string>("")

  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <Navbar></Navbar>
      </GridItem>

      <GridItem area="aside" display={{ base: "none", lg: "block" }}>
        <GenreList
          selectedGenre={selectedGenre}
          onClick={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>

      <GridItem area="main">
        <PlatformDropDown
          selectedPlatform={selectedPlatform}
          oonClick={(platform) => setSelectedPlatform(platform)}
        ></PlatformDropDown>

        <SortSelector selectedOrder={selectedOrder} onSelectOrder={(order)=>setSelectedOrder(order)} />

        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
          selectedOrder={selectedOrder}
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
