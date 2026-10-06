import Navbar from "./Navbar";
import Hero from "./Hero";
import SectionNav from "./SectionNav";
import IntroLoader from "./IntroLoader";

const Layout = ({ children }) => {
  return (
    <div className="min-w-0 w-full overflow-x-hidden">
      <IntroLoader />
      <Navbar />
      <Hero />
      <SectionNav />
      <main className="relative z-10 min-w-0 w-full">{children}</main>
    </div>
  );
};

export default Layout;
