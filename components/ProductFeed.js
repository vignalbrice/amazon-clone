import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-100 max-w-screen-2xl mx-auto md:-mt-52">
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }, index) => (
          <Product
            key={index}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
      <img className="md:col-span-full" src="/banner.jpg" alt="" />
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image }, index) => (
            <Product
              key={index}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, category, image }, index) => (
          <Product
            key={index}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
    </div>
  );
};

export default ProductFeed;
