

export default function Card()
{
    return(
        <div className="c-1">
            <div className="card" style={{ width: '18rem' }}>
      <img
        alt="Sample"
        src="https://picsum.photos/300/200"
        className="card-img-top" // Use the appropriate Bootstrap class
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button type="button" className="btn btn-primary">
          Button
        </button>
      </div>
    </div>
        </div>
    );
}