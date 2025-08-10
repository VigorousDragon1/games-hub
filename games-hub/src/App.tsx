
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

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
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
