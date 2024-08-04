import React from "react";
import Link from "next/link";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      page
      <Link href="/">Home</Link>
    </div>
  );
};

export default page;
