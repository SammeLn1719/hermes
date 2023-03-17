import React from 'react';

import Layout from './app/components/layout/Layout';
import Auth from './app/services/Auth';

function App() {
  return (
    <Layout>
      <div>
          <Auth/>
      </div>
    </Layout>
  );
}

export default App;
