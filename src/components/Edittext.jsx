import React from 'react'
import { useState } from 'react'
import Markdown from './Markdown'

const Edittext = ({file}) => {
  const [UserText, setUserText] = useState(file.text)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(UserText);
    console.log("hello from handle submit func")
    // make a patch request to the api endpoint in routes.js
    fetch(`/api/update/${file.name}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: file.name,
        text: UserText
      })
    })
  }

  return (
    <div className='markdown-container'>
      <div className='markdown-editor'>
        <div className='markdown-header'>
          <h1>{file.name}</h1>
          <input type="submit" value="Save" className='btn-save' onClick={handleSubmit}/>
        </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={UserText}
            onChange = {e => setUserText(e.target.value)}
            >
          </textarea>
      </div>
      <Markdown markdown={UserText}/>
    </div>
  )
}

export default Edittext
