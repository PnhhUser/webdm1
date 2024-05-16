import { Box, Flex, Text } from "@chakra-ui/react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "./image";
import "swiper/css/effect-fade";
const slidesImage = [
  "https://i.insider.com/6290f65b14f00200181011e4?width=1300&format=jpeg&auto=webp",
  "https://img.freepik.com/free-photo/time-laugh_1098-14331.jpg?t=st=1715593753~exp=1715597353~hmac=16476ba65cb65c003fc8da11de3a8fab24f1877719784807e1898c74beb34f1d&w=1380",
  "https://i.pinimg.com/originals/e6/0b/5c/e60b5c30c44bff6898b896c930181c67.jpg",
];

const slidesSologan = [
  "Enjoy the coffee of your life",
  "Connect endless fun with friends and family",
  "Private space to satisfy your passion",
];

export const SlideParent = ({
  children,
  delay,
  direction = "horizontal",
  modules = [],
}) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      style={{ height: "100%", width: "100%" }}
      modules={modules}
      autoplay={{
        delay: delay,
      }}
      loop={true}
      direction={direction}
    >
      {children}
    </Swiper>
  );
};

export default function Banner() {
  return (
    <Flex bg={"#FFF2D7"} h="580px" w="100%">
      <Flex w="50%">
        <Box w="100%" height="100%" overflow="hidden">
          <SlideParent delay={6000} modules={[Autoplay]}>
            {slidesImage.map((slide, index) => {
              return (
                <SwiperSlide
                  style={{
                    background: "#fff",
                    width: "100%",
                    height: "100%",
                  }}
                  key={index}
                >
                  <Image src={slide} alt={"copy"} objectFit={"cover"} />
                </SwiperSlide>
              );
            })}
          </SlideParent>
        </Box>
      </Flex>
      <Flex w="50%">
        <Box w="100%" height="100%" overflow="hidden">
          <SlideParent delay={6000} direction="vertical" modules={[Autoplay]}>
            {slidesSologan.map((slide, index) => {
              return (
                <SwiperSlide
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#FFF2D7",
                  }}
                  key={index}
                >
                  <Flex w="100%" h="100%" alignItems="center">
                    <Text
                      as="h1"
                      p={{ base: 5, md: 20 }}
                      fontSize={{ base: 30, md: 50, lg: 80 }}
                      style={{
                        fontFamily: "var(--font-Poetsen)",
                        color: "#845E39",
                      }}
                    >
                      {slide}
                    </Text>
                  </Flex>
                </SwiperSlide>
              );
            })}
          </SlideParent>
        </Box>
      </Flex>
    </Flex>
  );
}
