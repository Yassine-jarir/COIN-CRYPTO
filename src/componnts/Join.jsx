import { motion } from "framer-motion";
import btc from "../assets/hero/bitcoin.png";
import etr from "../assets/hero/ethereum.png";

// eslint-disable-next-line react/prop-types
function Join({ setnavcolor }) {
  return (
    <section id="join" className="join-section container">
      <motion.div
        className="join__content"
        viewport={() => setnavcolor("join")}
      >
        <img alt="coin_img" className="join__imgannim" src={btc} />
        <div className="join__content__text">
          <h2 className="join__h2">
            join us via <br /> <span>discord</span>
          </h2>
          <p>Invest and manage all your crypto at one place.</p>
          <a
            className="linkjoin"
            rel="noreferrer"
            target="_blank"
            href="https://discord.com/"
          >
            Join via Discord
          </a>
        </div>
        <img alt="coin_img" className="join__imgannim" src={etr} />
      </motion.div>
    </section>
  );
}

export default Join;
