/* eslint-disable react/prop-types */
export default function GiftList({ gif }) {
  return (
    <>
      <div className="card">
        <img src="{gif.images.original}" alt="gif" />
        <div className="container">
          <h4>
            <b>{gif.title}</b>
          </h4>
          <p>{gif.alt_text}</p>
        </div>
      </div>
    </>
  );
}
