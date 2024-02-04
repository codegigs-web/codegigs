import { getSettings } from "@/sanity/lib/client";
import Contact from "./Contact";

export default async function ContactPage() {
  const settings = await getSettings();
  return <Contact settings={settings} />;
}

// export const revalidate = 60;
