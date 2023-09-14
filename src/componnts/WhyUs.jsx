import { motion } from "framer-motion";
import Whybox from "./Whybox";
import BitHand from "../assets/chooseus/choose-main.png";

// eslint-disable-next-line react/prop-types
function WhyUs({ setnavcolor }) {
  return (
    <section id="whyus">
      <motion.div
        onViewportEnter={() => setnavcolor("whyus")}
        className="container"
      >
        <h1 className="homeh1">
          WHY<span> CHOOSE US</span>
        </h1>
        <div className="whyus__container">
          <div className="whyus__container__box">
            <Whybox
              i={"fa-brands fa-tiktok"}
              title="CONNECT YOUR WALLET"
              text="Use Trust Wallet, Metamask or to connect to the app."
            />
            <Whybox
              i={"fa-brands fa-github"}
              title="SELECT YOUR QUANTITY"
              text="Upload your crypto and set a title, description and price."
            />
            <Whybox
              i={"fa-solid fa-music"}
              title="CONFIRM TRANSACTION"
              text="Earn by selling your crypto on our marketplace."
            />
          </div>
          <div className="whyusimg">
            <img src={BitHand} alt="BitHand" />
          </div>
          <div className="whyus__container__box">
            <Whybox
              i={"fa-solid fa-fire"}
              title="RECEIVE YOUR OWN NFTS"
              text="Invest all your crypto at one place on one platform."
            />
            <Whybox
              i={"fa-solid fa-eye-slash"}
              title="TAKE A MARKET
            TO SELL"
              text="Discover, collect the right crypto collections to buy or sell."
            />
            <Whybox
              i={"fa-brands fa-dribbble"}
              title="DRIVE YOUR COLLECTION"
              text="We make it easy to Discover, Invest and manage."
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default WhyUs;
