import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card.Root padding={4}>
      <Skeleton height="200px" />
      <CardBody >
        <SkeletonText />
      </CardBody>
    </Card.Root>
  )
}

export default GameCardSkeleton