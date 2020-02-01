import * as React from "react";
const axios = require("axios");

const useFetch = searchPhrase => {
  const [data, setData] = React.useState();
  var apiEndpoint = "https://en.wikipedia.org/w/api.php";
  var initialParams = `action=query&list=search&format=json&srsearch=%22${searchPhrase}%22&srlimit=10`;
  const [params, setParams] = React.useState(initialParams);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    const params = `action=query&list=search&format=json&srsearch=%22${searchPhrase}%22&srlimit=10`;
    setParams(params);
  }, [searchPhrase]);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await axios.get(
          apiEndpoint + "?" + params + "&origin=*"
        );
        setData(response.data.query.search);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [params, apiEndpoint]);

  return [{ data, isLoading, isError }];
};

export default useFetch;
