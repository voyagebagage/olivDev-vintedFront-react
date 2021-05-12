const ProductDetails = ({ data }) => {
  return (
    <ul className="offer-list">
      {data.product_details[0] && <li>{data.product_details[0].MARQUE}</li>}
      {data.product_details[1] && <li>{data.product_details[1].TAILLE}</li>}
      {data.product_details[2] && <li>{data.product_details[2].ÉTAT}</li>}
      {data.product_details[3] && <li>{data.product_details[3].COULEUR}</li>}
      {data.product_details[4] && (
        <li>{data.product_details[4].EMPLACEMENT}</li>
      )}
      {data.product_details[5] && (
        <li>{data.product_details[5]["MODES DE PAIEMENT"]}</li>
      )}
    </ul>
  );
};

export default ProductDetails;
