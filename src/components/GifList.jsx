/* eslint-disable react/prop-types */
const NotFound = () => {
  return "no result";
};

export default function GiftList({ gif }) {
  if (gif.length <= 0) {
    return <NotFound />;
  }

  return (
    <>
      <div className="card">
        <img src={gif[0].images.original.webp} alt="gif" />
        <div className="container">
          <h4>
            <b>{gif.length > 0 ? gif[0].title : ""}</b>
          </h4>
        </div>
      </div>
    </>
  );
}
