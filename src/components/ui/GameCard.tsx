import { Game } from "../../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformiconList from "./PlatformiconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} sizes="6px"></Image>
      <CardBody>
        <Heading fontSize="xl" key={game.id}>
          {game.name}
        </Heading>
        <PlatformiconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformiconList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
