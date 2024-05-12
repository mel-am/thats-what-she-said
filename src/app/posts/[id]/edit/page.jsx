import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function SingleQuote({ params }) {
  const result = await sql`SELECT * FROM quotes WHERE id = ${params.id}`;
  const quote = result.rows[0];

  async function editQuote(formData) {
    "use server";
    const quote = formData.get("quote");
    const title = formData.get("title");
    const season = formData.get("season");
    const episode = formData.get("episode");
    const character = formData.get("character");
    await sql`UPDATE quotes SET title=${title}, season=${season}, episode=${episode}, character=${character} WHERE id = ${params.id}`;
    // await sql`UPDATE quotes SET title=${title}, season=${season}, episode=${episode}, character=${character}   WHERE id = ${params.id}`;
    revalidatePath("/quotes");
    revalidatePath(`/quotes/${params.id}`);

    redirect(`/quotes/${params.id}`);
  }

  return (
    <div>
      <form action={editQuote}>
        <label>Name</label>
        <input
          name="quote"
          placeholder="Enter quote here"
          defaultValue={quote.quote}
        />

        <label>Title</label>
        <textarea
          name="title"
          placeholder="Enter the title"
          defaultValue={quote.title}
          rows={2}
        ></textarea>
        <label>Character</label>
        <select name="character" defaultValue={quote.character}>
          {characters.map((character) => (
            <option key={character.id} value={character.name}>
              {character.name}
            </option>
          ))}
        </select>
        <button>Submit Changes</button>
      </form>
    </div>
  );
}
