import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function CoinDetails({ setnavcolor }) {
  const { id } = useParams();
  const [coin, setdata] = useState([]);
  const [loader, setloader] = useState(false);

  const fetchdata = async () => {
    try {
      setloader(true);
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}`
      );
      setdata(res.data);
      setloader(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  console.log(coin);

  return (
    <section id="coin">
      <motion.div onViewportEnter={() => setnavcolor("coin")}>
        <div className="container">
          <div className="coin-content">
            <div className="coin-content__img-side">
              {loader && (
                <div className="loadercontainer">
                  <span className="loader"></span>
                </div>
              )}
              {coin.image ? <img src={coin.image.large} alt={coin.id} /> : null}
              <h2>{coin.name}</h2>
              <p>Rank: #{coin.coingecko_rank}</p>
            </div>
            <div className="coin-content__text-side">
              <div className="numb">
                <div className="coin-content__text-side__24h">
                  <span>24h Change:</span>
                  <p
                    style={{ color: "green", fontWeight: "bolder" }}
                    // className={h24 >= 0 ? "green-text" : "red-text"}
                  >
                    {coin.market_data
                      ? coin.market_data.price_change_percentage_24h.toFixed(
                          2
                        ) + "%"
                      : ""}
                  </p>
                </div>
                <div className="coin-content__text-side__current">
                  <span>Price:</span>
                  <p style={{ color: "green", fontWeight: "bolder" }}>
                    {coin.market_data
                      ? "$ " + coin.market_data.current_price.usd.toFixed(2)
                      : null}
                  </p>
                </div>
                <div className="coin-content__text-side__symbol">
                  <p>Symbol:</p>
                  <span style={{ color: "green", fontWeight: "bolder" }}>
                    {coin.symbol}
                  </span>
                </div>
              </div>
              {loader && (
                <div className="loadercontainer">
                  <span className="loader"></span>
                </div>
              )}
              <div className="description">
                <p>{coin.description?.en}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default CoinDetails;
