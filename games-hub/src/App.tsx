
import { Grid, GridItem} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`,
      }}
      // gridTemplateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav" >
        <Navbar></Navbar>
      </GridItem>

        <GridItem area="aside" bg="teal"  display={{ base: "none", lg: "block" }}>
          Aside
        </GridItem>
      

      <GridItem area="main" bg="tomato">
    <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
