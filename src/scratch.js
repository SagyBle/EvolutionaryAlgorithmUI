<div>
       <div className='current-table-div'>
        
      </div> 
      
        <div>
          <input
            placeholder='Student Name'
            value={kidName} 
            onChange={(e)=>{setKidName(e.target.value)}} 
            className='student-input'></input>
          <input 
            placeholder='Student ID' 
            value={kidID} type="number" 
            onChange={(e)=>{setKidID(e.target.value)}} 
            className='student-input'></input>
        </div>
        <div>
          <input
            className='enemys-id-input' 
            onChange={(e)=>{setCurrEnemy(e.target.value)}}
            value={currEnemy}
            type="number" 
            placeholder="enemy's ID"></input>
          <button className='add-enemy-button' onClick={()=> handleAddEnemy()}>add enemy</button>
        </div>
        
        
        
      <div className='get-results-button'>
        <button>Get Results!</button>
      </div>
      {results &&
        <div className='results-div'>results</div>
      }

</div>






  <div>
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>Enemies</th>
        </tr>
        {kidsTable && kidsTable.map(({name, id, enemies}) =>
        <tr>
          <td>{name}</td>
          <td>{id}</td>
          <td>{enemies}</td>
        </tr>
    </div>