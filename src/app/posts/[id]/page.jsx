// import { sql } from "@vercel/postgres";
// import Link from "next/link";

// export default async function SingleQuote({ params }) {
//   const result =
//     await sql`SELECT quote, title FROM quotes WHERE id = ${params.id}`;
//   const quote = result.rows[0];

//   async function handleEdit(formData) {
//     const newQuote = formData.get("quote");
//     const newTitle = formData.get("title");

//     await sql`UPDATE quotes SET quote=${newQuote}, title=${newTitle} WHERE id = ${params.id}`;
//     revalidatePath(`/quotes/${params.id}`);
//     redirect(`/quotes/${params.id}`);
//   }

//   return (
//     <div>
//       <h2>{quote.quote}</h2>
//       <p>{quote.title}</p>
//       <form onSubmit={handleEdit}>
//         <label htmlFor="quote">Quote:</label>
//         <input type="text" id="quote" name="quote" defaultValue={quote.quote} />
//         <label htmlFor="title">Title:</label>
//         <input type="text" id="title" name="title" defaultValue={quote.title} />
//         <button type="submit">Save Changes</button>
//       </form>
//       <Link href={`/quotes/${params.id}/edit`}>Edit</Link>
//     </div>
//   );
// }
import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function SingleQuote({ params }) {
  const result = await sql`
    SELECT quote, title FROM quotes WHERE id = ${params.id}
  `;
  const quote = result.rows[0];

  async function handleEdit(formData) {
    const newQuote = formData.get("quote");
    const newTitle = formData.get("title");

    await sql`
      UPDATE quotes SET quote = ${newQuote}, title = ${newTitle} WHERE id = ${params.id}
    `;
    revalidatePath(`/quotes/${params.id}`);
    redirect(`/quotes/${params.id}`);
  }

  return (
    <div>
      <h2>{quote.quote}</h2>
      <p>{quote.title}</p>
      <form onSubmit={handleEdit}>
        <label htmlFor="quote">Quote:</label>
        <input type="text" id="quote" name="quote" defaultValue={quote.quote} />
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" defaultValue={quote.title} />
        <button type="submit">Save Changes</button>
      </form>
      <Link href={`/quotes/${params.id}/edit`}>Edit</Link>
    </div>
  );
}