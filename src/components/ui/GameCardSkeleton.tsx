import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card height="100%" display="flex" flexDirection="column" overflow="hidden">
      <Skeleton height="180px" />

      <CardBody flex="1">
        <SkeletonText mt="3" noOfLines={2} spacing="3" skeletonHeight="4" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
