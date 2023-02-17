import React, {useEffect, useState} from "react"

const Context = React.createContext()

function ContextProvider ({children}) {
  const [files, setFiles] = useState([])

  useEffect(() => {
    fetch("/api/v1")
      .then((data) => data.json())
      .then((data) => setFiles(data));
  }, []);

  return (
    <Context.Provider value={{files}}>
      {children}
    </Context.Provider >
  )
}

export {ContextProvider, Context}
