import "./Card.css";

function CCDUbai() {
  return (
    <div className="card">
      <div className="card-image">
        <img src="./images/dubai.jpg" />
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="./images/Heart.png" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">René Triechelt</p>
            <p className="subtitle is-7">@ODINCODING</p>
          </div>
        </div>

        <div className="content">
          Dubai is a city of skyscrapers, ports, and beaches, where big business
          takes place alongside sun-seeking tourism. Because of its large
          expatriate population, it feels like a Middle Eastern melting pot, and
          the atmosphere is generally tolerant.
          <br />
          <time datetime="06-23-2020">19:40 PM - 06-23-2020</time>
        </div>
      </div>
    </div>
  );
}

export default CCDUbai;
