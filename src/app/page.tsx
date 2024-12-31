import { getProducts } from "@/lib/data";
import React from "react";

export default async function page() {
  const { products: data } = await getProducts();
  console.log(data);
  return (
    <div className="">
      {/* <div>
        {data.map((d) => (
          <div key={d.id}>
            <h1>{d.title}</h1>
            <p>{d.price}</p>
            <Image
              src={d.images.at(0)}
              //   src={d.thumbnail}
              className="bg-red-500"
              height={200}
              width={200}
              alt={d.title}
            />
            <p>{d.description}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
