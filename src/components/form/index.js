import React, { useState } from 'react';

import './form.scss';

const Form = props => {

  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(method)
    props.handleApiCall({ method, url });
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <input onChange={(e) => { setUrl(e.target.value) }} placeholder='URL' name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <textarea name='textData' placeholder='json goes here...'></textarea>
        <label className="methods">
          <span onClick={(e) => { setMethod(e.target.innerHTML) }} className='crud' id="get">GET</span>
          <span onClick={(e) => { setMethod(e.target.innerHTML) }} className='crud' id="post">POST</span>
          <span onClick={(e) => { setMethod(e.target.innerHTML) }} className='crud' id="put">PUT</span>
          <span onClick={(e) => { setMethod(e.target.innerHTML) }} className='crud' id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
}


export default Form;