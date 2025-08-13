import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

function Loader() {
  return (
    <Box width="300px " margin={"15px"} borderRadius={"15px"}>
      <Skeleton height="200px" />
      <Box>
        <SkeletonText />
      </Box>
    </Box>
  );
}

export default Loader;
