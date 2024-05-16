import { Img } from "@chakra-ui/react";

export const Image = ({ src, alt, objectFit, position = "center" }) => {
  return (
    <Img
      src={src}
      alt={alt}
      w="100%"
      h="100%"
      objectFit={objectFit}
      objectPosition={position}
    />
  );
};
