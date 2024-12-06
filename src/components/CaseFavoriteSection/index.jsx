import "./index.css";

const CaseFavoriteSection = () => (
  <div className="case-favorite-section-container">
    <div className="case-favorite-section-header">
      <img
        src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733105264/wmofzyo1dk3vjfj36h8p.png"
        alt="pin icon"
        className="case-favorite-pin-icon"
      />
      <h1 className="case-favorite-heading">Case Favorite</h1>
    </div>
    <hr className="case-favorite-hr-line" />
    <div className="case-favorite-section-body">
      <p className="case-favorite-tag-description">
        Lorem ipsum dolor sit amet consectetur. Et tincidunt
      </p>
      <p className="case-favorite-tag-description">
        <img
          src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733105957/rwg100mxjichw6ir1dra.png"
          alt="gallery icon"
          className="gallery-icon-img"
        />
        Photo
      </p>
      <p className="case-favorite-tag-description">
        Lorem ipsum dolor sit amet consectetur. Et tincidunt
      </p>
    </div>
  </div>
);

export default CaseFavoriteSection;
