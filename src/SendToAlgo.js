import React from "react";
import "./styles/SendToAlgo.css";

function SendToAlgo({ kidsTable, numOfClassrooms }) {
  const perpareQueryForAPI = () => {
    let output = JSON.stringify(kidsTable);
    console.log(output);
    return output;
  };

  const handleGetResults = async () => {
    const query = perpareQueryForAPI();
  };

  return (
    <div className="send-to-algo-cintainer">
      <div>
        <button onClick={handleGetResults} className="get-results-button">
          Get Results!
        </button>
      </div>
    </div>
  );
}

export default SendToAlgo;
