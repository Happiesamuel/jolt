"use server";
export async function getProducts() {
  try {
    const res = await fetch(
      "https://dummyjson.com/products?limit=20&select=title,price,images,rating,thumbnail,description"
    );
    if (!res.ok) throw new Error("Fetch failed");
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : "Unknown error");
  }
}
