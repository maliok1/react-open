import People from './People';

const Display =({addPerson, handleNameChange, newName, handleNumberChange, newNumber , persons, filteredPeople, deletePerson })=>{
  return (
    <>
     <h3>Add a contact</h3>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
          number: <input type='number' onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <ul>
        <People people={persons} filteredPeople={filteredPeople}  deletePerson={deletePerson}/>
      </ul>
    </>
  )
}

export default Display;