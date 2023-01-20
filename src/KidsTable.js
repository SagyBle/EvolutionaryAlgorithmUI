import React from "react";
import "./styles/KidsTable.css";

function KidsTable(props) {
  return (
    <div className="kids-table-container-div">
      <div>
        <h3>
          Groups number:{" "}
          {props.numOfClassroomsSubmitted
            ? props.numOfClassroomsSubmitted
            : "Not Defined yet "}
        </h3>
      </div>
      {props.kidsTable.length > 0 ? (
        <div>
          <table className="kids-table">
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Enemies</th>
            </tr>
            {props.kidsTable &&
              props.kidsTable.map((kid) => (
                <tr className="low-border">
                  <td>{kid.kidName}</td>
                  <td>{kid.kidID}</td>

                  <td>
                    {kid.kidEnemies &&
                      kid.kidEnemies.map((enemy) => <p>{enemy}</p>)}
                  </td>
                </tr>
              ))}
          </table>
        </div>
      ) : (
        <h3>No Students Data Collected yet.</h3>
      )}

      {/* <div>
        <button onClick={() => console.log(props.kidsTable)}>try button</button>
      </div> */}
    </div>
  );
}

export default KidsTable;
