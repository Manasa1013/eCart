import { Aside, ProductList } from "../Components";
import { useProduct } from "../Contexts/ProductContext";
import { useFilter } from "../Contexts/FilterContext";

export function Products({ openSideBar, setOpenSideBar }) {
  const { state } = useProduct();
  const { filteredProducts } = useFilter();
  console.log(filteredProducts(state.products)?.length);
  let productsLength = state.products?.length;
  productsLength = filteredProducts(state.products)?.length;
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
              : productsLength === 1
              ? `Showing ${productsLength} product...`
              : `Showing ${productsLength} products ...`}
          </h2>

          <ProductList />
        </main>
      </section>
    </>
  );
}
