import "./Publish.css";

const Publish = () => {
  return (
    <div>
      <h2>Vends ton article</h2>
      <form action="">
        <div>
          <input type="file" />
        </div>
        <div className="titre-description">
          <input type="text" />
          <input type="text" />
        </div>
        <div className="product-details">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        <div>
          <input type="text" />
          <input type="checkbox" />
        </div>
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default Publish;
