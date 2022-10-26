import React, { useState } from 'react';

import './form.scss';

const Form = props => {

  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.handleApiCall({ method, url });
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input onChange={(e) => { setUrl(e.target.value) }} name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span onClick={(e) => { setMethod(e.target.value) }} id="get">GET</span>
          <span onClick={(e) => { setMethod(e.target.value) }} id="post">POST</span>
          <span onClick={(e) => { setMethod(e.target.value) }} id="put">PUT</span>
          <span onClick={(e) => { setMethod(e.target.value) }} id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
}


export default Form;