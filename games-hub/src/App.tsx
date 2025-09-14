import { Grid, GridItem } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformDropDown from "./components/PlatformDropDown";
import SortSelector from "./components/SortSelector";


function App() {
 
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <Navbar ></Navbar>
      </GridItem>

      <GridItem area="aside" display={{ base: "none", lg: "block" }}>
        <GenreList
        
        />
      </GridItem>

      <GridItem area="main">
        <GameHeading />
        <PlatformDropDown
         
        ></PlatformDropDown>

        <SortSelector
        
        />

        <GameGrid
        
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
