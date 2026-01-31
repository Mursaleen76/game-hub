import { Game } from "../../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformiconList from "./PlatformiconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        objectFit="cover"
        height="200px"
        width="100%"
      />
      <CardBody>
        <Heading fontSize="xl" key={game.id}>
          {game.name}
        </Heading>
        <HStack justify="space-between">
          <PlatformiconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformiconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
