import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "That's what she said",
  description: "Quotes from The Office US",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {" "}
      <body>
        <header>
          <nav>
            <Link href="/home" className="links">
              Home
            </Link>
            <Link href="./about">About</Link>
            <Link href="./posts/all">All Posts</Link>
            <Link href="./posts/new">Add new post</Link>
            <Link href="./posts/edit">Edit post</Link>
          </nav>
        </header>
        {children}
        {/* <footer>
          <p>&copy; 2024 Thats what she said</p>
        </footer> */}
      </body>
    </html>
);
}
