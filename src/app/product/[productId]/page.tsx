import ProductDescription from "@/components/product/ProductDescription";
import ProductImages from "@/components/product/ProductImages";
import { getProduct } from "@/lib/data";
import React from "react";

const page = async ({ params }: { params: { productId: string } }) => {
  const product = await getProduct(params.productId);
  console.log(product);
  return (
    <div className="pt-40">
      <div className="flex w-full text-dark">
        <ProductImages product={product} />
        <ProductDescription product={product} />
      </div>
    </div>
  );
};

export default page;
