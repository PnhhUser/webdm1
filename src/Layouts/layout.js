import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Container maxW={1200}>
      <Outlet />
    </Container>
  );
}
