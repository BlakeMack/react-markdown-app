import { Form, useLoaderData } from "react-router-dom";
import { useContext} from "react";
import { Context } from "../context";

export async function loader({ params }) {

  let files;

  try {
    const response = await fetch("/api/v1");
    const data = await response.json();
    files = data;
    console.log(files);
    const file = files.find(file => file.name === params.contactId);
    return file;
  } catch (error) {
    console.error(error);
  }
}

export default function Contact() {
  const file = useLoaderData();

  return (
    <div id="contact">
      <h1>{file.name}</h1>
      <h2>{file.text}</h2>
    </div>
  );
}

// function Favorite({ contact }) {
//   // yes, this is a `let` for later
//   let favorite = contact.favorite;
//   return (
//     <Form method="post">
//       <button
//         name="favorite"
//         value={favorite ? "false" : "true"}
//         aria-label={
//           favorite
//             ? "Remove from favorites"
//             : "Add to favorites"
//         }
//       >
//         {favorite ? "★" : "☆"}
//       </button>
//     </Form>
//   );
// }
