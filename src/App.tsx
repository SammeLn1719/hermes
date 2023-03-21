import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Layout from './app/components/layout/Layout';
import Auth from './app/services/Auth';
import Catalog from './app/components/ui/Catalog'
import  Main  from './pages/Main';
import  Notfoundpage  from './pages/Notfoundpage';
import  Authorization  from './pages/Authorization'



function App() {
  return (
    <Layout>
      <section className='wrapperMain'>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/katalog' element={<Catalog/>}/>
          <Route path='/Authorization' element={<Authorization/>}/>
          <Route path='*' element={<Notfoundpage/>}/>
        </Routes>
      </section>
    </Layout>
  );
}

export default App;
