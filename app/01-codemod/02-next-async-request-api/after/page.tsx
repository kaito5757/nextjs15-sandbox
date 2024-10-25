import { cookies, headers } from "next/headers";
const token = cookies().get("token");

function useToken() {
  const token = cookies().get("token");
  return token;
}

export default function Page() {
  const name = cookies().get("name");
}

function getHeader() {
  return headers().get("x-foo");
}
