import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Display from "./Display";
import Notification from "./Notification";
import phoneBookService from "./services/phoneBookService";
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [message, setMessage] = useState();

  useEffect(() => {
    phoneBookService.getAll().then((res) => setPersons(res));
  }, []);

  useEffect(() => {
    phoneBookService.getAll().then((res) => setPersons(res));
  }, [newNumber]);

  const addPerson = (event) => {
    event.preventDefault();
    let newPerson;

    if (newNumber > 0) {
      newPerson = { name: newName, number: newNumber };
      persons.find((person) => person.name === newName)
        ? updateContact(newPerson)
        : phoneBookService.createContact(newPerson).then((res) => {
            setPersons(persons.concat(res));
            handleMassage(newPerson.name,'success');
          });
    } else {
      alert("Please provide a phone number");
    }

    setNewName("");
    setNewNumber("");
  };

  const updateContact = (newPerson) => {
    let foundPerson = persons.find((person) => person.name === newPerson.name);

    (setPersons(persons.map(person => person.name !== newPerson.name ? person  : foundPerson.number )))

    if (
      window.confirm(
        `${newPerson.name} is already in the phonebook, replace the old number with a new one?`
      )
    ) {
      let updatedPerson = {
        name: newPerson.name,
        number: newNumber,
      };
      phoneBookService
        .updateContact(foundPerson.id, updatedPerson)
        .catch((error) => {
          handleMassage(foundPerson.name, "error");
        });
    }
    handleMassage(foundPerson.name, "success");

  };

  const deletePerson = (id) => {
    let deletedPerson = persons.find((person) => person.id === id);

    (setNewNumber(persons.map(person => person.id !== id ? person  : deletedPerson )))

    if (window.confirm(`Delete ${deletedPerson.name} ?`)) {
      phoneBookService.deleteContact(deletedPerson, persons).then((res) => res);
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();

    let people = persons.filter((person) => {
      return person.name.toLowerCase().startsWith(selectedFilter.toLowerCase());
    });
    setFilteredPeople(people);
  };

  const handleFilterString = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleMassage = (person, type) => {
    if (type === "success") {
      setMessage(`Added ${person}`);
    } else {
      setMessage(
        `Information of ${person} has already been removed from the server`
      );
    }

    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  return (
    <div className="app-wrapper">
      <h2>Phonebook</h2>
      <Filter
        selectedFilter={selectedFilter}
        handleFilterSubmit={handleFilterSubmit}
        handleFilterString={handleFilterString}
      />
      <Notification message={message} />
      <Display
        addPerson={addPerson}
        deletePerson={deletePerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        persons={persons}
        selectedFilter={selectedFilter}
        newNumber={newNumber}
        newName={newName}
        filteredPeople={filteredPeople}
      />
    </div>
  );
};

export default App;
