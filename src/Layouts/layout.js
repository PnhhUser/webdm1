import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Logo from "../components/logo";
import NavBar from "../components/navbar";
import { Image } from "../components/image";

const Header = () => {
  return (
    <Flex h="100px">
      <Flex w={{ base: 0, md: 0, lg: "20%" }}>
        <Logo />
      </Flex>
      <Flex w={{ base: "100%", md: "100%", lg: "80%" }}>
        <NavBar />
      </Flex>
    </Flex>
  );
};

const Footer = () => {
  return (
    <Flex bgGradient="linear(to-r, #D8AE7E, #FFE0B5)" w="100%" h="400px"></Flex>
  );
};

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
