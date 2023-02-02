import "./Card.css";

function CCParis() {
  return (
    <div className="card">
      <div className="card-image">
        <img src="./images/paris.jpg" />
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="./images/Heart.png" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-3">René Triechelt</p>
            <p className="subtitle is-6">@ODINCODING</p>
          </div>
        </div>

        <div className="content">
          Paris is one of the most beautiful cities in the world. It is known
          worldwide for the Louvre Museum, Notre-Dame cathedral, and the Eiffel
          tower. It has a reputation of being a romantic and cultural city. The
          city is also known for its high-quality gastronomy and the terraces of
          its cafés.
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  );
}

export default CCParis;
