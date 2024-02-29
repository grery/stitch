import React from "react";
import { Layout } from "../components";
import { gql } from "../generated/";
import { useQuery } from "@apollo/client";

const LIST_BANKS = gql`
    query ListBanks {
        banks {
        country
        name
    }
}
`;

const Tracks = () => {
  const { loading, error, data } = useQuery(LIST_BANKS);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  return <Layout grid>{JSON.stringify(data)}</Layout>;
};

export default Tracks;
