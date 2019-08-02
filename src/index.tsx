import * as React from "react";
import * as ReactDOM from "react-dom";
import SimpleQuiz from "./App";
import queryString from "query-string";

const query = queryString.parse(location.search);
const apiUrl = `backend/${query.q || "default"}.json`

ReactDOM.render(
    <SimpleQuiz apiUrl={apiUrl} />,
    document.getElementById("app") as HTMLElement,
);
