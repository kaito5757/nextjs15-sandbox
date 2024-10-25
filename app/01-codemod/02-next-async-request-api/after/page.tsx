import { use } from "react";
import { cookies, headers, type UnsafeUnwrappedCookies, type UnsafeUnwrappedHeaders } from "next/headers";
const token = (cookies() as unknown as UnsafeUnwrappedCookies).get("token");

function useToken() {
  const token = use(cookies()).get("token");
  return token;
}

export default async function Page() {
  const name = (await cookies()).get("name");
}

function getHeader() {
  return (headers() as unknown as UnsafeUnwrappedHeaders).get("x-foo");
}
