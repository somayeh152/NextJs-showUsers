import Link from "next/link";

const href = "/users";
const provideLink = (href, dynamicSec) => {
  const link = `${href}${dynamicSec}`;

  return link;
};
