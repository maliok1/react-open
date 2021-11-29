const People = ({people, filteredPeople, deletePerson}) =>{

  if(filteredPeople.length === 0){
    return ( people.map((person, i) =><> <li key={i}>{person.name} - {person.number} </li> <button onClick={()=>deletePerson(person.id)}  key={`${i}-${person.id}`} type="submit">Delete</button>
    </>))
  } else { return ( filteredPeople.map((person, i) => <> <li key={i}>{person.name} - {person.number} </li> <button onClick={()=>deletePerson(person.id)}  key={`${i}-${person.id}`} type="submit">Delete</button>
  </>))}
}

export default People;