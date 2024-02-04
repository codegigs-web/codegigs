import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lama Dev Blog App",
  description: "The best blog app!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
    lang="en"
    suppressHydrationWarning className={inter.className}>
      <body className="antialiased text-gray-800 dark:bg-black dark:text-gray-400" >
                  
                    {children}
      </body>
    </html>
  );
}
