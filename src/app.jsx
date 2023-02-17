import { useState, useEffect, useContext } from "react";
import "./app.css"
import Edittext from "./components/Edittext";
import { Context } from "./context";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {

  let files;

  try {
    const response = await fetch("/api/getAll");
    const data = await response.json();
    files = data;
    if (files.some((file) => file.name === params.contactId)) {
      const file = files.find(file => file.name === params.contactId);
      return file
    } else {
      const response = await fetch("/api/post", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: params.contactId,
          text: "# Write your markdown here"
        })
      });
      const file = await response.json();
      return file
    }
  } catch (error) {
    console.error(error);
  }
}


export default function App() {
  const file = useLoaderData();
  return (
    <div className="App">
      <Edittext file={file}/>
    </div>
  );
}
