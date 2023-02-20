import axios from "axios";
import React, { useState, useEffect } from "react";
import VideoModal from "./VideoModal";
import Spinner from "./Spinner";

export const AutoVerifierAPIBox = () => {
  const [apiStatus, setApiStatus] = useState("loading");
  const [dataCount, setDataCount] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(35);

  useEffect(() => {
    const checkApiStatus = async () => {
      setApiStatus("loading");
      try {
        const response = await axios.post(
          "http://97.74.94.225:8282/besstMainApi/df/videoSection",
          {},
          {
            headers: {
              Client_ID: "your_client_id_here",
            },
          }
        );
        if (response.status === 200) {
          setDataCount(response.data.Data.length);
          setApiStatus("active");
        } else {
          setApiStatus("down");
        }
      } catch (error) {
        setApiStatus("down");
      }
    };

    console.log(dataCount);
    const intervalId = setInterval(() => {
      checkApiStatus();
    }, 35000); // 35 seconds in milliseconds

    checkApiStatus(); // Trigger API check on page load

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const renderStatusMessage = () => {
    switch (apiStatus) {
      case "loading":
        return (
          <div>
            <Spinner />
          </div>
        );
      case "active":
        return (
          <>
            <div className="success">
              API is active. Received {dataCount} items.
            </div>
            <div>Next API hit in {Math.abs(timeRemaining)} seconds</div>
          </>
        );
      case "down":
        return <div className="error">API is down.</div>;
      default:
        return null;
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (apiStatus === "loading") {
      setTimeRemaining(35);
    } else {
      setTimeRemaining(0);
    }
  }, [apiStatus]);

  return <div className="auto-verifier-api-box">{renderStatusMessage()}</div>;
};
