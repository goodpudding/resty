import React, { useState } from "react";

import "./Form.scss";

function Form({handleApiCall}) {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };
    handleApiCall(formData);
  };

  const handleMethodChange = (method) => {
    setMethod(method);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input
            name="url"
            type="text"
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span
            id="get"
            className={method === "GET" ? "active" : ""}
            onClick={() => handleMethodChange("GET")}
          >
            GET
          </span>
          <span
            id="post"
            className={method === "POST" ? "active" : ""}
            onClick={() => handleMethodChange("POST")}
          >
            POST
          </span>
          <span
            id="put"
            className={method === "PUT" ? "active" : ""}
            onClick={() => handleMethodChange("PUT")}
          >
            PUT
          </span>
          <span
            id="delete"
            className={method === "DELETE" ? "active" : ""}
            onClick={() => handleMethodChange("DELETE")}
          >
            DELETE
          </span>
        </label>
      </form>
    </>
  );
}

export default Form;
