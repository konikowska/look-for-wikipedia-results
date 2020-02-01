// @flow

import * as React from "react";

const axios = require("axios");

const API_ROOT = "https://en.wikipedia.org/w/api.php";

const useFetch = ({ searchPhrase }: { searchPhrase: string }) => {
  const initialParams = `action=query&list=search&format=json&srsearch=%22${searchPhrase}%22&srlimit=10`;

  const [data, setData] = React.useState();
  const [params, setParams] = React.useState(initialParams);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    const newParams = `action=query&list=search&format=json&srsearch=%22${searchPhrase}%22&srlimit=10`;
    setParams(newParams);
  }, [searchPhrase]);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_ROOT}?${params}&origin=*`);
        setData(response.data.query.search);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [params]);

  return [{ data, isLoading, isError }];
};

export default useFetch;
