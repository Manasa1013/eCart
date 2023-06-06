import { Aside, ProductList } from "../Components";
import { useProduct } from "../Contexts/ProductContext";
import { useFilter } from "../Contexts/FilterContext";

export function Products({ openSideBar, setOpenSideBar }) {
  const { products } = useProduct();
  const { filteredProducts } = useFilter();
  console.log(filteredProducts(products).length);
  let productsLength = products.length;
  productsLength = filteredProducts(products).length;
  return (
    <>
      <section className="grid-rows">
        <aside className="aside">
          <Aside openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        </aside>
        <main className="main">
          <h2>
            {productsLength === 0
              ? "No products to display"
              : `Showing ${productsLength} products ...`}
          </h2>

          <ProductList />
        </main>
      </section>
    </>
  );
}
