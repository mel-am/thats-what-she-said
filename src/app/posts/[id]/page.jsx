import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function SingleQuote({ params }) {
  const result = await sql`
    SELECT quote, title FROM quotes WHERE id = ${params.id}
  `;
  const quote = result.rows[0];

    async function handleEditPost(formData) {
      "use server"
    const newQuote = formData.get("quote");
    const newTitle = formData.get("title");

    await sql`
      UPDATE quotes SET quote = ${newQuote}, title = ${newTitle} WHERE id = ${params.id}
    `;
    revalidatePath(`/posts/${params.id}/edit`);
    redirect(`/posts/${params.id}`);
  }

  return (
    <div className ="edit_form">
      <h2>{quote.quote}</h2>
      <p>{quote.title}</p>
      <form action={handleEditPost}>
        <label htmlFor="quote">Quote:</label>
        <input type="text" id="quote" name="quote" defaultValue={quote.quote} />
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" defaultValue={quote.title} />
        <button type="submit">Save Changes</button>
      </form>
      <Link href={`/posts/${params.id}/edit`}>Edit</Link>
    </div>
  );
}