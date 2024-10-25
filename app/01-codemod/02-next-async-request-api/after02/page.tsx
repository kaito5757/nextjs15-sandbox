// page.tsx
export default async function Page(
  props: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  }
) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const { value } = searchParams;
  if (value === "foo") {
    // ...
  }
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  return {
    title: `My Page - ${params.slug}`,
  };
}
