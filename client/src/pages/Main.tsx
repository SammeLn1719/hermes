import { FC, useContext } from "react";
import { Context } from "..";
import Header from "../app/components/layout/Header/Header";
import Catalog from "../app/components/ui/Catalog";
import { ProductsResponse } from '../../src/types/response/StoreResponse';
import { observer } from "mobx-react-lite";
const Main = observer(() => {
    const store = useContext(Context)
    return <section> 
      <Header/>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      <div>{store.store._products.map((store:ProductsResponse) =>
          <div>{store.id}<div>{store.name}</div>
          <img src={store.img} alt="" />
          </div>
      )}</div>
    </h1>
    <h1 className="text-center text-5xl text-gray-50">Пиздц</h1>
    </section>;
})

export default Main;