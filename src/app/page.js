import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { sql } from "@vercel/postgres";



export default async function Home() {
  const results = await sql`SELECT * FROM quotes`;
    const quotes = results.rows;

  return (
    <main>
      <h1 id="page-header">That&apos;s what she said</h1>
      {/* <audio autoPlay>
        <source src="/public/theme_song.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio> */}
      
    </main>
  );
}
