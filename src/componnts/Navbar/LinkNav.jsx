import AnchorLink from "react-anchor-link-smooth-scroll";

// eslint-disable-next-line react/prop-types
function LinkNav({ page, navcolor, setnavcolor }) {
  return (
    <>
      <AnchorLink
        href={`#${page}`}
        onClick={() => setnavcolor(page)}
        className={navcolor === page ? "navtarget" : ""}
      >
        {page}
      </AnchorLink>
    </>
  );
}

export default LinkNav;
