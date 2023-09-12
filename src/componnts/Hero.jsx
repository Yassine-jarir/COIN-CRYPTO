import { motion } from "framer-motion";
import btc from "../assets/hero/bitcoin.png";
import etr from "../assets/hero/ethereum.png";
// eslint-disable-next-line react/prop-types
function Hero({ setnavcolor }) {
  return (
    <section id="hero">
      <motion.div
        onViewportEnter={() => setnavcolor("hero")}
        className="container"
      >
        <div className="hero__container">
          <div className="hero__title">
            <img src={btc} alt="" />
            <h1>TRACK AND TRADE</h1>
            <img src={etr} alt="" />
          </div>
          <h1 className="hero__h">CRYPTO CURRENCIES</h1>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
