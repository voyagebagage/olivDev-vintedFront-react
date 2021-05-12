import ProductDetails from "./ProductDetails";

const OfferDescription = ({ data }) => {
  return (
    <>
      <div>
        <span>{data.product_price}&nbsp;€</span>
        <ProductDetails data={data} />
      </div>
      <div className="line"></div>
      <div>
        <div className="name">{data.product_name}</div>
        <div className="descritpion">{data.product_description}</div>
        <div className="offer-avatar-username">
          {data.owner.account.avatar && (
            <img src={data.owner.account.avatar.secure_url} alt={"B"} />
          )}
          <h2>{data.owner.account.username}</h2>
        </div>
      </div>
    </>
  );
};

export default OfferDescription;
