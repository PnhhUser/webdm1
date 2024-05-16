import { Box, Container, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Banner from "../components/banner";
import { FaFeather } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Image } from "../components/image";
import drink1 from "../Assets/Image/1.png";
import drink2 from "../Assets/Image/2.png";
import drink3 from "../Assets/Image/3.png";
import drink4 from "../Assets/Image/4.png";
import { Link } from "react-router-dom";

const slidesImage = [drink1, drink2, drink3, drink4];

const drinksTop = [
  {
    name: "coffee espresso - Latte Art",
    price: "15",
    src: drink1,
  },
  {
    name: "coffee espresso - Latte Art",
    price: "15",
    src: drink2,
  },
  {
    name: "coffee espresso - Latte Art",
    price: "15",
    src: drink3,
  },
  {
    name: "coffee espresso - Latte Art",
    price: "15",
    src: drink4,
  },
  {
    name: "coffee espresso - Latte Art",
    price: "15",
    src: drink2,
  },
];

const WrapperStories = ({ children, dataAos, styleProps }) => {
  return (
    <Container maxW="1000px" my="120px">
      <Flex w="100%" height="100%">
        <Flex style={styleProps} w="100%" data-aos={dataAos}>
          {children}
        </Flex>
      </Flex>
    </Container>
  );
};

const SlideImageCoffees = () => {
  return (
    <Container
      maxW={1200}
      h={{ base: "300px", md: "500px" }}
      bg="#FFF2D7"
      my={{ base: "100px", md: "150px" }}
      borderRadius={{ base: 0, md: 10 }}
      overflow="hidden"
      data-aos="zoom-in"
      datadata-aos-delay="1000"
    >
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {slidesImage.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <Flex
                w="100%"
                h={{ base: "300px", md: "500px" }}
                justifyContent="center"
                alignItems="center"
              >
                <Box w="60%" h="60%" overflow="hidden">
                  <Image src={slide} alt="copy" />
                </Box>
              </Flex>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

const CardDrink = () => {
  return drinksTop.map((drink, index) => {
    return (
      <Flex
        bgGradient="linear(to-r, #FFF2D7, #F8C794)"
        borderRadius={10}
        height="140px"
        key={index}
      >
        <Flex
          w="70%"
          p={4}
          flexDirection="column"
          alignItems="end"
          display={{ base: "none", md: "flex" }}
        >
          <Text
            as="h4"
            fontSize={18}
            style={{
              fontFamily: "var(--font-Poetsen)",
            }}
            textTransform="capitalize"
            color="#D8AE7E"
          >
            {drink.name}
          </Text>
          <Text
            fontSize={20}
            style={{
              fontFamily: "var(--font-Lilita)",
            }}
            color="#D8AE7E"
          >
            ${drink.price}
          </Text>
          <Link to="/" style={{ marginTop: 10 }}>
            <Text
              as="ins"
              style={{
                fontFamily: "var(--font-Poetsen)",
              }}
              color="#712F1D"
            >
              Choose
            </Text>
          </Link>
        </Flex>
        <Box w={{ base: "100%", md: "30%" }} p={4}>
          <Box height="100%" borderRadius={10} overflow="hidden">
            <Image src={drink.src} alt="copy" objectFit="scale-down" />
          </Box>
        </Box>
      </Flex>
    );
  });
};

const Drinks = () => {
  return (
    <Container
      maxW={1200}
      h="600px"
      my={{ base: "30px", md: "50px" }}
      data-aos="fade-down"
    >
      <Flex w={"100%"} h={"100%"} flexDirection="column">
        <Text
          as="h2"
          fontSize={{ base: "30px", md: "50px" }}
          bgGradient="linear(to-bl, #FFE0B5, #712F1D)"
          bgClip="text"
          style={{ fontFamily: "var(--font-Lilita)" }}
        >
          The most popular drink
        </Text>

        <SimpleGrid columns={2} spacing={8} p={4}>
          <CardDrink />
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const styleTitleProps = {
    fontFamily: "var(--font-Lilita)",
    color: "#7E5E39",
  };
  const styleTextProps = {
    fontFamily: "var(--font-Poetsen)",
  };
  return (
    <>
      <Banner />
      <WrapperStories
        dataAos={"fade-right"}
        styleProps={{ flexDirection: "column" }}
      >
        <Text
          as="h2"
          fontSize={{ base: "40px", md: "80px" }}
          style={styleTitleProps}
        >
          Start your stories.
        </Text>
        <Text
          as="p"
          style={styleTextProps}
          w={{ base: "100%", md: "50%" }}
          textIndent="50px"
          lineHeight={2}
          letterSpacing={0.5}
          color="#D8AE7E"
        >
          The sun slowly sets over the horizon, spreading its last rays on the
          old roofs. The wind gently moves the tree tops, the title seems to
          tell its own story. In a small corner of town, a woman walked slowly
          home, looking around with a smile on her lips. Perhaps, she hides some
          secret ...
          <FaFeather
            style={{ display: "inline", marginLeft: 8, fontSize: "30px" }}
          />
        </Text>
      </WrapperStories>
      <WrapperStories
        dataAos={"fade-right"}
        styleProps={{ flexDirection: "column", alignItems: "end" }}
      >
        <Text
          as="h2"
          fontSize={{ base: "40px", md: "80px" }}
          style={styleTitleProps}
        >
          Meet over a cup of coffee.
        </Text>
        <Text
          as="p"
          style={styleTextProps}
          w={{ base: "100%", md: "50%" }}
          textIndent="50px"
          lineHeight={2}
          letterSpacing={0.5}
          color="#D8AE7E"
        >
          Through each sip of coffee, memories of school years gradually
          surfaced - endless conversations throughout the afternoon, delicious
          naps together in the classroom, or adventures in the woods near
          school. Cups of coffee seem to restore the chaos of time, evoking
          heightened emotions...
          <FaFeather
            style={{ display: "inline", marginLeft: 8, fontSize: "30px" }}
          />
        </Text>
      </WrapperStories>
      <SlideImageCoffees />
      <Drinks />
    </>
  );
}
