// import { useContext } from "react";
// import { AuthContext } from "../context/authContext";
import { Layout } from "../components/Layout";
import { Table } from "../components/Table";

export const Dashboard = () => {
  // const { userName } = useContext(AuthContext);

  return (
    <Layout>
      <h1>Dashboard</h1>
      <Table />
    </Layout>
  );
};
