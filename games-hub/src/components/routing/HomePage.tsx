import { Grid, GridItem } from "@chakra-ui/react";

import GameGrid from "../GameGrid";
import GameHeading from "../GameHeading";
import GenreList from "../GenreList";
import PlatformDropDown from "../PlatformDropDown";
import SortSelector from "../SortSelector";

function HomePage() {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="aside" display={{ base: "none", lg: "block" }}>
        <GenreList />
      </GridItem>

      <GridItem area="main">
        <GameHeading />
        <PlatformDropDown></PlatformDropDown>

        <SortSelector />

        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default HomePage;
