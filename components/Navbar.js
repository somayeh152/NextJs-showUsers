import { useRouter } from "next/router";
import Link from "next/link";
import { TopNavbar, NavbarTag } from "./styledComponents/NavbarStyle";

const Navbar = () => {
  const router = useRouter();
  return (
    <TopNavbar>
      <Link href="/">
        {router.pathname == "/" ? (
          <NavbarTag active>Home</NavbarTag>
        ) : (
          <NavbarTag>Home</NavbarTag>
        )}
      </Link>
      <Link href="/users">
        {router.pathname == "/users" ? (
          <NavbarTag active>Users</NavbarTag>
        ) : (
          <NavbarTag>Users</NavbarTag>
        )}
      </Link>
    </TopNavbar>
  );
};

export default Navbar;
