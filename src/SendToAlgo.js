import React, { useState } from "react";
import "./styles/SendToAlgo.css";

function SendToAlgo({ kidsTable, setKidsTable, numOfClassroomsSubmitted }) {
  const [fitness, setFitness] = useState(null);
  const [colors, setColors] = useState(null);
  const [teams, setTeams] = useState({});

  const perpareQueryForAPI = async () => {
    let output = [numOfClassroomsSubmitted].concat(kidsTable);
    // first elemnt: num_of_classes, rest of elements: kids table lines
    output = JSON.stringify(output);
    await fetch(`http://localhost:8000/${output}`)
      .then((r) => r.json())
      .then((json) => {
        setColors(json.colors);
        setFitness(json.fitness);
        setTeams(json.teams);
      });

    // console.log(output);
    // return output;
  };

  const handleGetResults = async () => {
    if (kidsTable.length === 0) {
      alert("Not recieved any students data");
    } else if (
      numOfClassroomsSubmitted === null ||
      numOfClassroomsSubmitted === ""
    ) {
      alert("Not recieved any classroom number, please insert.");
    } else {
      const query = perpareQueryForAPI();
    }
  };
  const hadnleEample1 = () => {
    setKidsTable([
      { kidName: "s", kidID: "0", kidEnemies: ["1", "2"] },
      { kidName: "s", kidID: "1", kidEnemies: ["8", "9"] },
      { kidName: "s", kidID: "2", kidEnemies: ["3", "5", "6", "7"] },
      { kidName: "s", kidID: "3", kidEnemies: ["4", "10", "11"] },
      { kidName: "s", kidID: "4", kidEnemies: ["5", "11", "14"] },
      { kidName: "s", kidID: "5", kidEnemies: ["13", "14"] },
      { kidName: "s", kidID: "6", kidEnemies: ["7", "16"] },
      { kidName: "s", kidID: "7", kidEnemies: ["15", "16"] },
      { kidName: "s", kidID: "8", kidEnemies: ["15"] },
      { kidName: "s", kidID: "9", kidEnemies: ["13"] },
      { kidName: "s", kidID: "10", kidEnemies: ["11"] },
      { kidName: "s", kidID: "11", kidEnemies: ["12"] },
      { kidName: "s", kidID: "12", kidEnemies: ["17"] },
      { kidName: "s", kidID: "13", kidEnemies: ["16", "17"] },
      { kidName: "s", kidID: "14", kidEnemies: ["17"] },
      { kidName: "s", kidID: "15", kidEnemies: ["16"] },
    ]);
  };

  const hadnleEample2 = () => {
    setKidsTable([
      { kidName: "s", kidID: "1", kidEnemies: ["1", "2"] },
      { kidName: "s", kidID: "3", kidEnemies: ["4", "5"] },
      { kidName: "s", kidID: "5", kidEnemies: ["6"] },
      { kidName: "s", kidID: "7", kidEnemies: [] },
    ]);
  };
  const hadnleEample3 = () => {
    setKidsTable([
      { kidName: "David", kidID: "0", kidEnemies: ["1", "2", "3"] },
      { kidName: "Ariel", kidID: "1", kidEnemies: ["0", "2"] },
      { kidName: "Lavi", kidID: "2", kidEnemies: ["0", "1", "8", "9", "15"] },
      { kidName: "Noam", kidID: "3", kidEnemies: ["4", "5", "11"] },
      { kidName: "Tamar", kidID: "4", kidEnemies: ["3", "5"] },
      { kidName: "Ori", kidID: "5", kidEnemies: ["3", "4", "10", "1"] },
      { kidName: "Eitan", kidID: "6", kidEnemies: ["7", "8"] },
      { kidName: "Moshe", kidID: "7", kidEnemies: ["6", "8", "14", "1"] },
      { kidName: "Maya", kidID: "8", kidEnemies: ["6", "7", "16"] },
      { kidName: "Libbi", kidID: "9", kidEnemies: ["10", "11"] },
      { kidName: "Shay", kidID: "10", kidEnemies: ["9", "11", "5"] },
      { kidName: "Sagy", kidID: "11", kidEnemies: ["9", "10", "5", "7"] },
      { kidName: "Noa", kidID: "12", kidEnemies: ["13", "14", "4", "16", "3"] },
      { kidName: "Daniel", kidID: "13", kidEnemies: ["12", "14"] },
      { kidName: "Itamar", kidID: "14", kidEnemies: ["12", "13", "17"] },
      {
        kidName: "Yair",
        kidID: "15",
        kidEnemies: ["16", "17", "13", "1", "2"],
      },
      { kidName: "Shimon", kidID: "16", kidEnemies: ["15", "17"] },
      { kidName: "Imri", kidID: "17", kidEnemies: ["15", "16"] },
    ]);
  };

  return (
    <div>
      <div className="send-to-algo-cintainer">
        <div>
          <button onClick={handleGetResults} className="get-results-button">
            Get Results!
          </button>
        </div>
      </div>
      <div>
        <button onClick={() => hadnleEample1()}>example1 data</button>
        <button onClick={() => hadnleEample2()}>example2 data</button>
        <button onClick={() => hadnleEample3()}>example3 data</button>
      </div>
      {colors ? (
        <div className="results-div-center">
          {fitness ? (
            <div>
              <h3>Algorithm found seloution with {fitness} errors</h3>
            </div>
          ) : null}
          <div className="results-div">
            <tr>
              <th>Players disribution</th>
            </tr>
            {colors.map((color, i) => (
              <p>
                Player {i} to team {color}
              </p>
            ))}
            {teams.map((team, i) => (
              <div>
                team {i}:{" "}
                {team.map((player) => (
                  <p>{player}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>no answer</div>
      )}
    </div>
  );
}

export default SendToAlgo;
