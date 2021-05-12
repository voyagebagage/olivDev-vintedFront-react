const HomeOffers = ({ offer }) => {
  return (
    <p
      className="card-container"
      key={offer._id}
      style={{ border: "2px solid aqua" }}
    >
      <div className="card-avatar-username">
        {offer.owner.account.avatar && (
          <img src={offer.owner.account.avatar.secure_url} alt={"B"} />
        )}
        <h2>{offer.owner.account.username}</h2>

        <img
          className="product-image"
          src={offer.product_image.secure_url}
          alt={offer.product_description}
        />
      </div>
      <div>
        <span>{offer.product_price}€</span>
        {offer.product_details.map((productDetail) => {
          return (
            <>
              <br />
              <span>{productDetail.TAILLE}</span>
              <br />
              <span>{productDetail.MARQUE}</span>
            </>
          );
        })}
      </div>
    </p>
  );
};

export default HomeOffers;
