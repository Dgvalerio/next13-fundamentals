import { NextPage } from 'next';

interface ProductProps {
  params: { data: string[] };
}

const Product: NextPage<ProductProps> = ({ params }) => {
  const [productId, size, color] = params.data;

  return (
    <div>
      <p>
        <b>Product:</b> {productId}
      </p>
      <p>
        <b>Size:</b> {size}
      </p>
      <p>
        <b>Color:</b> {color}
      </p>
    </div>
  );
};

export default Product;
