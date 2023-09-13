import Footer from "../componnts/Footer";
import Hero from "../componnts/Hero";
import Join from "../componnts/Join";
import Market from "../componnts/Market";
import WhyUs from "../componnts/WhyUs";

// eslint-disable-next-line react/prop-types
function Home({ setnavcolor }) {
  return (
    <>
      <Hero setnavcolor={setnavcolor} />
      <Market setnavcolor={setnavcolor} />
      <WhyUs setnavcolor={setnavcolor} />
      <Join setnavcolor={setnavcolor} />
      <Footer setnavcolor={setnavcolor} />
    </>
  );
}

export default Home;
