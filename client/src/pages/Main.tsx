import { FC, useContext } from "react";
import { Context } from "..";
import Header from "../app/components/layout/Header/Header";

import { ProductsResponse } from '../../src/types/response/StoreResponse';
import { observer } from "mobx-react-lite";
import TabCatalog from "../app/components/screens/TabCatalog";
const Main = observer(() => {
    
    return <section > 
      <Header/>
      <TabCatalog/>
    </section>;
})

export default Main;