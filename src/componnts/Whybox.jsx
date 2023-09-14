// eslint-disable-next-line react/prop-types
function Whybox({ title, text, i }) {
  return (
    <div className="whybox">
      <i className={`${i} ibox`}></i>

      <div className="whybox__content">
        <h4 className="whybox__h4">{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Whybox;
