import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StudentTable from "./JsonTable";
import Spinner from "./Spinner";


function View() {
  const navigate = useNavigate();
  const [response, setResponse] = useState("");
  const [res, setRes] = useState([]);

  useEffect(() => {
    const data = sessionStorage.getItem("response");
    if (data) {
      setResponse(data);
      let res = JSON.parse(data);
      setRes(res.Data);
    } else {
      fetch("http://97.74.94.225:8282/besstMainApi/df/videoSection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Client_ID: "any value",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setRes(data.Data);
          sessionStorage.setItem("response", JSON.stringify(data));
          setResponse(JSON.stringify(data));
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const handleClear = () => {
    sessionStorage.removeItem("response");
    setResponse("");
  };

  return (
    <div className="py-4 px-4">
      {response ? (
        <div>
          <StudentTable students={res} />
          <button
            className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded transition duration-300 ease-in-out my-4 "
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      ) : (
       <Spinner/>
      )}
    </div>
  );
}

export default View;
