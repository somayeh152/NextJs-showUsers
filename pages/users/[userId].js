import {
  Container,
  TableHead,
} from "../../components/styledComponents/UsersStyle";
import Table from "../../components/uikit/table";
import { useState, useEffect } from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: { userId: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const userId = context.params.userId;

  // fetch user's data with specific id
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const data = await res.json();

  // fetch user's posts with specific id
  const postsRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const postsData = await postsRes.json();

  // return iformations as props
  return {
    props: { user: data, posts: postsData },
  };
};

const Details = ({ user, posts }) => {
  const userDetailsData = [
    {
      ID: user.id,
      Name: user.name,
      Username: user.username,
      Email: user.email,
      Phone: user.phone,
      Website: user.website,
      CompanyName: user.company.name,
    },
  ];

  const userDetailsColumns = [
    {
      key: "ID",
      accessor: "ID",
      header: "id",
    },
    {
      key: "Name",
      accessor: "Name",
      header: "name",
    },
    {
      key: "Username",
      accessor: "Username",
      header: "username",
    },
    {
      key: "Email",
      accessor: "Email",
      header: "email",
    },
    {
      key: "Phone",
      accessor: "Phone",
      header: "phone",
    },
    {
      key: "Website",
      accessor: "Website",
      header: "website",
    },
    {
      key: "CompanyName",
      accessor: "CompanyName",
      header: "company name",
    },
  ];

  const postCells = posts.map((post) => ({
    Title: post.title,
    Body: post.body,
  }));

  const postColumns = [
    {
      key: "Title",
      accessor: "Title",
      header: "title",
    },
    {
      key: "Body",
      accessor: "Body",
      header: "body",
    },
  ];

  return (
    <Container>
      <TableHead>User detail: </TableHead>
      <Table data={userDetailsData} columns={userDetailsColumns} />
      <TableHead>User Posts:</TableHead>
      <Table data={postCells} columns={postColumns} />
    </Container>
  );
};

export default Details;
