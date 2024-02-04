import Link from "next/link";
import Label from "../ui/Label";

export default function CategoryLabel({
  categories,
  nomargin = false
}: any) {
  return (
    <div className="flex gap-3">
      {categories?.length &&
        categories.slice(0).map((category: any, index: any) => (
          <Link
            href={`/category/${category?.slug?.current}`}
            key={index}>
            <Label nomargin={nomargin} color={category?.color}>
              {category?.title}
            </Label>
          </Link>
        ))}
    </div>
  );
}
