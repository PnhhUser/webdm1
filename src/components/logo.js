import { Image } from "./image";
import logo from "../Assets/Image/logo.jpg";
import { Link } from "react-router-dom";

export default function Logo({ styleProps }) {
  return (
    <Link
      to="/"
      style={{
        ...styleProps,
        width: "100%",
        height: "100%",
      }}
    >
      <Image src={logo} alt={"copy"} objectFit={"cover"} />
    </Link>
  );
}
