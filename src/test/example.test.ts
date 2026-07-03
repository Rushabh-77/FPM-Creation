import { describe, it, expect } from "vitest";
import { products } from "@/data/products";

describe("product catalog", () => {
  it("includes a Coasters product", () => {
    const coasterProduct = products.find((product) => product.category === "Coasters");

    expect(coasterProduct).toBeDefined();
    expect(coasterProduct?.name).toContain("Coaster");
  });
});
