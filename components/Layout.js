import Navbar from "./Navbar";
import Footer from "./Footer";
import Wrapper from "./styledComponents/Wrapper";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;
