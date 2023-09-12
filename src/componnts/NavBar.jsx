import { useEffect, useState } from "react";
import useMediaQuery from "../hooks/UseMediaquery";
import Link from "./Navbar/Link";

// eslint-disable-next-line react/prop-types
function NavBar({ navcolor, setnavcolor }) {
  const isAboveMediumScreens = useMediaQuery("(min-width:650px)");
  const [isToggle, setToggle] = useState(false);

  const [scrol, setscrol] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setscrol(true);
    } else {
      setscrol(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => window.removeEventListener("scroll", onNavScroll);
  }, []);

  console.log(scrol);

  return (
    <nav className={scrol ? "navscroll" : ""}>
      <div className="container navbar">
        <h1>COIN</h1>
        {isAboveMediumScreens ? (
          <>
            <ul className="nav__ul">
              <li>
                <Link
                  setnavcolor={setnavcolor}
                  navcolor={navcolor}
                  page="hero"
                />
              </li>
              <li>
                <Link
                  setnavcolor={setnavcolor}
                  navcolor={navcolor}
                  page="market"
                />
              </li>
              <li>
                <Link
                  setnavcolor={setnavcolor}
                  navcolor={navcolor}
                  page="chooseus"
                />
              </li>
              <li>
                <Link
                  setnavcolor={setnavcolor}
                  navcolor={navcolor}
                  page="join"
                />
              </li>
            </ul>
            <div className="nav__icons">
              <button>
                <i className="fa-brands fa-discord"></i>
              </button>
              <button>
                <i className="fa-brands fa-twitter"></i>
              </button>
            </div>
          </>
        ) : (
          // isMobile(true)
          <div className="nav__icons">
            <button>
              <i className="fa-brands fa-discord"></i>
            </button>
            <button>
              <i className="fa-brands fa-twitter"></i>
            </button>
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setToggle(!isToggle)}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        )}
        {!isAboveMediumScreens && isToggle && (
          <div className="mobile">
            <button onClick={() => setToggle(!isToggle)}>
              <i className="fa-regular fa-circle-xmark"></i>
            </button>

            <ul className="nav__ul">
              <li>
                <Link
                  setnavcolor={setnavcolor}
                  navcolor={navcolor}
                  page="hero"
                />
              </li>
              <li>
                <Link
                  setnavcolor={setnavcolor}
                  navcolor={navcolor}
                  page="market"
                />
              </li>
              <li>
                <Link
                  setnavcolor={setnavcolor}
                  navcolor={navcolor}
                  page="chooseus"
                />
              </li>
              <li>
                <Link
                  setnavcolor={setnavcolor}
                  navcolor={navcolor}
                  page="join"
                />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
