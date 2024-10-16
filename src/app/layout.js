import "./globals.css";

export const metadata = {
  title: "Four Kitchens is looking for freelance content strategists for project work",
  description: "Seeking a freelance content strategist and writer to craft impactful content strategies for higher ed, non-profits, and associations, driving results that matter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/cug3dua.css" />
      </head>
      <body
        className="antialiased font-sans bg-whippedCream text-leafyGreen-default"
      >
        {children}
      </body>
    </html>
  );
}
