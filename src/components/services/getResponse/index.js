import * as React from "react";

async function useGetResponse(searchPhrase) {
  const [response, setResponse] = React.useState(null);
  const [errors, setErrors] = React.useState(null);
  const axios = require("axios");

  var apiEndpoint = "https://en.wikipedia.org/w/api.php";
  var params = `action=query&list=search&format=json&srsearch=%22${searchPhrase}%22&srlimit=10`;
  try {
    const response = await await axios.get(
      apiEndpoint + "?" + params + "&origin=*"
    );
    setResponse(response.data.query.search);
  } catch (error) {
    setErrors(error);
    console.error("error", error);
  }
  return { response, errors };
}

export default useGetResponse;
