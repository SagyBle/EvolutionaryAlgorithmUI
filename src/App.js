import { useState } from "react";
import "./App.css";
import KidsTable from "./KidsTable";
import SendToAlgo from "./SendToAlgo";

function App() {
  const [results, setResults] = useState("");
  const [kidsTable, setKidsTable] = useState([]);

  const [showEnemyForm, setShowEnemyForm] = useState(false);

  const [kidName, setKidName] = useState("");
  const [kidID, setKidID] = useState("");
  const [currEnemy, setCurrEnemy] = useState("");
  const [kidEnemies, setKidEnemies] = useState([]);

  const [numOfClassrooms, setNumOfClassrooms] = useState(null);
  const [numOfClassroomsSubmitted, setNumOfClassroomsSubmitted] =
    useState(null);

  const handleAddStudent = () => {
    // console.log({kidName, kidID, kidEnemies});

    setKidsTable([...kidsTable, { kidName, kidID, kidEnemies }]);
    // setKidsTable([...kidsTable, kidID])
    console.log("this is kids table:");
    console.log(kidsTable);

    setKidName("");
    setKidID("");
    setKidEnemies([]);
  };

  const handleAddEnemy = () => {
    if (currEnemy !== "") {
      setKidEnemies([...kidEnemies, currEnemy]);
      setCurrEnemy("");
    } else {
      alert("enemy id cannot be empty!");
    }
  };

  const handleSubmitClassrooms = () => {
    console.log("numOfClassrooms:");
    console.log(numOfClassrooms);
    setNumOfClassroomsSubmitted(numOfClassrooms);
    console.log("numOfClassroomsSubmitted:");
    console.log(numOfClassroomsSubmitted);
    setNumOfClassrooms(null);
  };

  return (
    <div>
      <div className="App">
        <div className="container-kids-table-div">
          <KidsTable
            kidsTable={kidsTable}
            numOfClassroomsSubmitted={numOfClassroomsSubmitted}
          />
          <button
            className="clean-button space-up"
            onClick={() => {
              setKidsTable([]);
            }}
          >
            Clean All Data
          </button>
        </div>

        <div className="add-kids-div">
          <div className="space-up">
            <input
              placeholder="Student Name"
              value={kidName}
              onChange={(e) => {
                setKidName(e.target.value);
              }}
              className="student-input"
            ></input>
            <input
              placeholder="Student ID"
              value={kidID}
              type="number"
              onChange={(e) => {
                setKidID(e.target.value);
              }}
              className="student-input"
            ></input>
          </div>

          <div>
            <input
              className="enemys-id-input"
              onChange={(e) => {
                setCurrEnemy(e.target.value);
              }}
              value={currEnemy}
              type="number"
              placeholder="enemy's ID"
            ></input>
            <button
              className="add-enemy-button"
              onClick={() => handleAddEnemy()}
            >
              Add Enemy
            </button>

            <div>
              <button
                className="clean-button space-up"
                onClick={() => setKidEnemies([])}
              >
                Clean All Enemies
              </button>
            </div>
          </div>

          <div>
            <div>
              <h2>Curr Student Information Recieved:</h2>
              <div>
                <h3 className="info-header">Name: {kidName}</h3>
                <h3 className="info-header">Id: {kidID}</h3>
              </div>
              <div>
                <div>
                  <h5>kid's enemies:</h5>
                  {kidEnemies && kidEnemies.map((enemy) => <p>{enemy}</p>)}
                </div>
              </div>
            </div>

            <div>
              <button
                className="add-student-button"
                onClick={() => handleAddStudent()}
              >
                Add Student
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="school-info-div">
        <div className="num-of-classrooms">
          <input
            type="number"
            onChange={(e) => setNumOfClassrooms(e.target.value)}
            placeholder="Number of seperate classrooms"
          />
          <button
            onClick={() => {
              handleSubmitClassrooms();
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="send-to-algo-div">
        <SendToAlgo kidsTable={kidsTable} />
      </div>
    </div>
  );
}

export default App;
