// import { Button } from "@/components/ui/button";
// import { getCategoryItems } from "@/lib/data";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { FaStar } from "react-icons/fa";
// const page = async ({
//   searchParams,
// }: {
//   searchParams: { category: string };
// }) => {
//   const category = searchParams?.category || "";
//   const { products } = await getCategoryItems(category);
//   return (
//     <div className="pt-20 px-20">
//       <div>
//         <h2>Headphones For You!</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-5">
//           {products.map((cat: ItemList) => (
//             <Link
//               href={`/product/${cat.id}`}
//               key={cat.id}
//               className="flex flex-col "
//             >
//               <div className="relative aspect-square flex items-center justify-center rounded-xl bg-zinc-200">
//                 <Image
//                   quality={10}
//                   src={cat?.images?.at(0) || ""}
//                   fill
//                   alt="img"
//                   className="h-[200px] w-[200px] object-cover"
//                 />
//               </div>
//               <div className="flex justify-between">
//                 <h4>{cat.title}</h4>
//                 <p>${cat.price}</p>
//               </div>
//               <div className="flex items-center gap-2">
//                 <p> {cat.rating}</p>
//                 <span>
//                   <FaStar />
//                 </span>
//               </div>
//               <Button>Add to Cart</Button>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;
import React from "react";

function page() {
  return <div>page</div>;
}

export default page;
