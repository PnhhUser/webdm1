import { Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiNavigation } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const NavItem = ({ link, text, styleProps }) => {
  return (
    <NavLink
      to={link}
      style={styleProps}
      className={({ isActive }) => (isActive ? "navbar active" : null)}
      end
    >
      {text}
    </NavLink>
  );
};

export default function NavBar() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
  });
  const styleNavProps = {
    fontFamily: "var(--font-Lilita)",
    fontWeight: 100,
  };

  const styleItemProps = {
    fontSize: 25,
    textTransform: "capitalize",
    display: "inline-block",
    color: "#D8AE7E",
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize.width <= 768 ? (
    <Flex alignItems="center" justifyContent="end" w="100%">
      <Button bg="#D8AE7E" _hover={{ bg: "#D8AE7E" }} mr={4}>
        <AiOutlineMenu color="#fff" />
      </Button>
    </Flex>
  ) : (
    <Flex
      style={styleNavProps}
      alignItems="center"
      justifyContent="center"
      w="100%"
      gap="60px"
    >
      <NavItem link={"/"} text={"home"} styleProps={styleItemProps} />
      <NavItem link={"/blog"} text={"blog"} styleProps={styleItemProps} />
      <NavItem link={"/drink"} text={"drink"} styleProps={styleItemProps} />
    </Flex>
  );
}
