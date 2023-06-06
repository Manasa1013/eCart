import { Aside, ProductList } from "../Components";

export function Products({ openSideBar, setOpenSideBar }) {
  return (
    <>
      <section className="grid-rows">
        <aside className="aside">
          <Aside openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        </aside>
        <main className="main">
          <h2>Showing All Products...</h2>
          <ProductList />
        </main>
      </section>
    </>
  );
}
