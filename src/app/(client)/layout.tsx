
import { getSettings } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

async function sharedMetaData() {
  const settings: any = await getSettings();

  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default:
        settings?.title ||
        "Stablo - Blog Template for Next.js & Sanity CMS",
      template: "%s | Stablo"
    },
    description:
      settings?.description ||
      "Stablo - popular open-source next.js and sanity blog template",
    keywords: ["Next.js", "Sanity", "Tailwind CSS"],
    authors: [{ name: "Surjith" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "Stablo Template",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata() {
  return await sharedMetaData();
}

export default async function Layout({ children, params }: any) {
  const settings = await getSettings();
  return (
    <>
      <Navbar {...settings} />

      <div>{children}</div>

      <Footer {...settings} />
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
