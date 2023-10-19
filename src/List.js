import "./List.css";

const List = (props) => {
  const { detail, search, a } = props;
  const { product_badge, product_image, product_title, product_variants } =
    detail;
  let y = a ? "list" : "grid";
  let bt = a ? "btn" : "btn1";
  let im = a ? "im1" : "im2";
  let h = a ? "h" : "h1";

  return (
    <li className={y}>
      <div className="ic">
        <button className={bt}>{product_badge}</button>
        <img src={product_image} alt="cap_img" className={im} />
      </div>

      <div className="ic">
        <h4 className={h}>{product_title}</h4>

        {product_variants[0].v1.includes(search.toUpperCase()) ||
        product_variants[0].v1.toUpperCase().includes(search.toUpperCase()) ? (
          <p className="co">{product_variants[0].v1}</p>
        ) : (
          <p>{product_variants[0].v1}</p>
        )}

        {product_variants[1].v2.includes(search.toUpperCase()) ||
        product_variants[1].v2.toUpperCase().includes(search.toUpperCase()) ? (
          <p className="co">{product_variants[1].v2}</p>
        ) : (
          <p>{product_variants[1].v2}</p>
        )}

        {product_variants[2].v3.includes(search.toUpperCase()) ||
        product_variants[2].v3.toUpperCase().includes(search.toUpperCase()) ? (
          <p className="co">{product_variants[2].v3}</p>
        ) : (
          <p>{product_variants[2].v3}</p>
        )}
      </div>
    </li>
  );
};

export default List;
