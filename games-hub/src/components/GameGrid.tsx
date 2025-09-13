import useGames from "@/hooks/useGames";

import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

import type { gameQuery } from "@/App";
import InfiniteScroll from "react-infinite-scroll-component";

import GameCardContainer from "./ui/GameCardContainer";
import GameCardSkeleton from "./ui/GameCardSkeleton";
import React from "react";

interface Props {
  gameQuery: gameQuery;
}
function GameGrid({ gameQuery }: Props) {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  const skeleton = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) ?? 0;

  return (
    <>
      <InfiniteScroll
  dataLength={fetchedGamesCount}
  hasMore={!!hasNextPage}
  next={fetchNextPage}
  loader={<Spinner />}
>
  <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} mr={5} >
    {isLoading &&
      skeleton.map((sk) => (
        <GameCardContainer key={sk}>
          <GameCardSkeleton />
        </GameCardContainer>
      ))}

    {data?.pages.map((page, index) => (
      <React.Fragment key={index}>
        {page.results.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </React.Fragment>
    ))}
  </SimpleGrid>
</InfiniteScroll>


      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} mt={4}>
          {isFetchingNextPage ? "loading..." : "load more"}
        </Button>
      )}
    </>
  );
}


export default GameGrid;
