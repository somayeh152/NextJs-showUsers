import {
  Container,
  TableHead,
} from "../../components/styledComponents/UsersStyle";
import Table from "../../components/uikit/table";
import { useState, useEffect } from "react";

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { usersInfo: data },
  };
};

const Users = ({ usersInfo }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(usersInfo);
  }, []);

  const usersData = users.map((user) => ({
    Name: user.name,
    Username: user.username,
    Email: user.email,
  }));

  const usersColumns = [
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
  ];

  let id = users.map((user) => `${user.id}`);

  return (
    <Container>
      <TableHead>Users:</TableHead>
      <Table data={usersData} columns={usersColumns} linkId={id} />
    </Container>
  );
};

export default Users;
