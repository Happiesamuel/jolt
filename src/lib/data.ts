"use server";
export async function getProducts() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DUMMY_API}?limit=20&select=title,price,images,rating,thumbnail,description`
    );
    if (!res.ok) throw new Error("Fetch failed");
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : "Unknown error");
  }
}
export async function getProductsCategoriesList() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DUMMY_API}?limit=200&select=category,thumbnail`
    );
    if (!res.ok) throw new Error("Fetch failed");
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : "Unknown error");
  }
}
export async function getCategoriesList() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DUMMY_API}/category-list`
    );
    if (!res.ok) throw new Error("Fetch failed");
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : "Unknown error");
  }
}
