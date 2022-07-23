import React, { Fragment } from "react";
import TRow from "./row";
import Link from "next/link";

const TBody = ({ data, columns, linkId }) => {
  return (
    <tbody>
      {data.map((item, index) => {
        return (
          <Fragment>
            {linkId ? (
              <Link href={`/users/${linkId[index]}`} key={index}>
                <a>
                  <TRow item={item} columns={columns} />
                </a>
              </Link>
            ) : (
              <TRow key={index} item={item} columns={columns} />
            )}
          </Fragment>
        );
      })}
    </tbody>
  );
};

export default TBody;
