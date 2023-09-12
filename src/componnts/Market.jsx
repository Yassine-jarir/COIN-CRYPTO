import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function Market({ setnavcolor }) {
  return (
    <section id="market">
      {" "}
      <motion.div onViewportEnter={() => setnavcolor("market")}>
        market
      </motion.div>
    </section>
  );
}

export default Market;
