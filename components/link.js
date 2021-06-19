import Link from "next/link";
const link = ({ hrefLink, linkTitle }) => {
  return <Link
    href={{
      pathname: hrefLink
    }}
  >
    <a>{linkTitle}</a>
  </Link>
};

export default link;
