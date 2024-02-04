import { getAllAuthors, getSettings } from "@/sanity/lib/client";
import About from "./About";


export default async function AboutPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return <About settings={settings} authors={authors} />;
}

// export const revalidate = 60;
