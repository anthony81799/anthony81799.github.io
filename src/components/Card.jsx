import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

const Card = ({ title, description, imageSrc, url }) => {
  return (
    <VStack
      color="black"
      backgroundColor="white"
      cursor="pointer"
      borderRadius="xl"
    >
      <Image borderRadius="xl" src={imageSrc} alt={title} />
      <VStack spacing={4} p={4} alignItems="flex-start">
        <HStack justifyContent="space-between" alignItems="center">
          <Heading as="h3" size="md">
            {title}
          </Heading>
        </HStack>
        <Text color="#64748b" fontSize="lg">
          {description}
        </Text>
        <HStack spacing={2} alignItems="center">
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="see-more"
          >
            See More <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
        </HStack>
      </VStack>
    </VStack>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default Card;
