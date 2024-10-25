// page.tsx
export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { value } = searchParams;
  if (value === "foo") {
    // ...
  }
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: `My Page - ${params.slug}`,
  };
}
