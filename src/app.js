import React, { useState } from 'react';
import axios from 'axios'


import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const App = props => {

  const [data, setData] = useState(null)
  const [requestParams, setParams] = useState({})

  const callApi = async (requestParams) => {
    const data = await axios(requestParams);
    setData(data);
    setParams(requestParams);
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
