// App.jsx

import React, { useReducer, useState } from "react";
import { searchReducer } from "./searchReducer";

import "./App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Results from "./Components/Results";
import History from "./Components/History";

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [searchHistory, dispatch] = useReducer(searchReducer, []);

  const callApi = async (requestParams) => {
    const response = await fetch(requestParams.url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setData(data);
    setRequestParams(requestParams);
    dispatch({ type: 'ADD_SEARCH', payload: requestParams });
  };

  return (
    <React.Fragment>
      <Header />
      <div className="flex-row-container">
        <div className="flex-col-container">
          <div>Request Method: {requestParams.method}</div>
          <div>URL: {requestParams.url}</div>
        <History searchHistory={searchHistory} />
        </div><div>
       <Form handleApiCall={callApi} />
      <Results data={data} />
      </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
