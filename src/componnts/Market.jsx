import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
// import { responseTest } from "../api/jsonapi";

// eslint-disable-next-line react/prop-types
function Market({ setnavcolor }) {
  const [currentPage, setcurrentPage] = useState(1);
  const [response, setresponse] = useState([]);
  const [loading, setloading] = useState(false);
  const fetchData = async () => {
    try {
      setloading(true);
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false&locale=en`
      );
      setresponse(res.data);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handlePageClick = ({ selected }) => {
    setcurrentPage(selected + 1);
  };

  return (
    <section id="market">
      <motion.div
        onViewportEnter={() => setnavcolor("market")}
        className="container"
      >
        <h1 className="market__h1">Market Update</h1>
        <div className="market__tab">
          <div className="market__tab__header">
            <p className="p">Coin</p>
            <p className="p">Price</p>
            <p className="p">24h Change</p>
            <p className="p">Market Cap</p>
          </div>

          {loading && (
            <div className="loadercontainer">
              <span className="loader"></span>
            </div>
          )}
          <div className="market__tab__apicontainer">
            {response?.map((item) => (
              <Link
                // to={`/coin/${item.id}`}
                className="coin-row"
                key={item.id}
              >
                <span className="imgtext">
                  <img src={item.image} alt={item.name} /> {item.name}
                </span>
                <p>{"$ " + item.current_price.toFixed(2)}</p>
                <p
                  className={
                    "slider-coin__price " +
                    (item.price_change_percentage_24h >= 0
                      ? "green-text"
                      : "red-text")
                  }
                >
                  {item.price_change_percentage_24h?.toFixed(2) + " %"}
                </p>
                <p>{"$ " + item.market_cap}</p>
              </Link>
            ))}
          </div>
        </div>
        <ReactPaginate
          //  breakLabel="..."
          nextLabel="next"
          onPageChange={handlePageClick}
          pageCount={100}
          previousLabel="prev"
          containerClassName="pagination__container"
          activeClassName="pagination__active"
          previousLinkClassName="orangeBtn"
          nextLinkClassName="orangeBtn"
          pageLinkClassName="grayBtn"
        />
      </motion.div>
    </section>
  );
}

export default Market;
