import { motion } from "framer-motion";
import btc from "../assets/hero/bitcoin.png";
import etr from "../assets/hero/ethereum.png";
import { useEffect, useState } from "react";
import axios from "axios";
// eslint-disable-next-line react/prop-types
function Hero({ setnavcolor }) {
  const [response, setresponse] = useState(null);
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState("");

  const fetchdata = async () => {
    try {
      setloading(true);
      const data = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false"
      );
      setresponse(data.data);
    } catch (error) {
      seterr(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);
  console.log(response);
  console.log(err);
  console.log(loading);
  return (
    <section id="hero">
      <motion.div
        onViewportEnter={() => setnavcolor("hero")}
        className="container"
      >
        <div className="hero__container">
          <div className="hero__title">
            <img src={btc} alt="" className="hero__imgannim" />
            <h1>TRACK AND TRADE</h1>
            <img src={etr} alt="" className="hero__imgannim" />
          </div>
          <h1 className="navtarget">CRYPTO CURRENCIES</h1>
          <div className="hero__api">
            {loading ? (
              <span className="loader"></span>
            ) : (
              response?.map((item) => {
                return (
                  <div key={item?.id} className="hero__api__box">
                    <img src={item.image} alt="" />

                    <p>
                      {item?.name}{" "}
                      <span>{item.market_cap_change_percentage_24h}%</span>
                    </p>
                    <p>$ {item.price_change_24h}</p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
