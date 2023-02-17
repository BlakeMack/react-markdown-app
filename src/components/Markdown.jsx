import React from 'react'
import ReactMarkdown from 'react-markdown'


const Markdown = ({markdown}) => {

  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}

export default Markdown
