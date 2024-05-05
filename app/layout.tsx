import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

import "@/app/globals.css";
import Navbar from "@/components/navbar/navbar";

export const metadata = {
  title: "Solemnace Galleries",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    // <SessionProvider session={session}>
    <html lang="en">
      <body className="flex flex-col">
        <div className="fixed z-10 left-5 top-5">
          <Navbar />
        </div>
        <main>{children}</main>
      </body>
    </html>
    // </SessionProvider>
  );
}
