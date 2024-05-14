import Link from "next/link";

export default function About() {
  return (
    <div id="about">
      <h1>Quotes from The Office US</h1>
      <p>
        Dive into the wonderful world of Dunder Mifflin and relive the hilarious
        moments from the iconic TV series, The Office US. This site has been
        made for the fans. Whether you&epos; re a die-hard fan or just looking
        for a good laugh, you will find an extensive collection of memorable
        quotes from your favourite characters.<br></br>
        But we&epos;re more than just a collection of quotes. We&epos;re a
        community-driven platform where fans like you can contribute by editing
        and even adding new quotes that we may have missed(opps!).
      </p>

      <Link href="/posts/new">
        <button type="submit">Add new quote</button>
      </Link>
    </div>
  );
}