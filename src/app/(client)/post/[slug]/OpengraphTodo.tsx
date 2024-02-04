
// const InterRegular = fetch(
//   new URL("../../../../public/fonts/Inter.ttf", import.meta.url)
// ).then(res => res.arrayBuffer());

import { getPostBySlug } from "@/sanity/lib/client";

const InterBold = fetch(
  new URL("../../../../public/fonts/Inter-Bold.otf", import.meta.url)
).then(res => res.arrayBuffer());

export default async function handler({ params }: any) {
  const post = await getPostBySlug(params.slug);

  const fontData = await InterBold;
  // const [interRegularFont, interBoldFont] = await Promise.all([
  //   InterRegular,
  //   InterBold
  // ]);

  // return new ImageResponse(<OgImage post={post} />, {
  //   width: 1200,
  //   height: 630,
  //   fonts: [
  //     {
  //       name: "Inter",
  //       data: fontData,
  //       style: "normal"
  //     }
  //     // {
  //     //   name: "Inter",
  //     //   data: interBoldFont,
  //     //   style: "normal",
  //     //   weight: 700
  //     // }
  //   ]
  // });
  return null
}
