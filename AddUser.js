import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name or age.",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      // Since in JSX the enteredAge is a string, i need to make sure that i convert it back in to a number for it to work  So,i added the + to make sure it works!
      setError({
        title: "Invalid age",
        message: "Please enter a valid age number.",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserName("");
    setEnteredUserAge("");
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            className={classes.input}
            id="username"
            type="text"
            onChange={userNameChangeHandler}
            value={enteredUserName}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            onChange={userAgeChangeHandler}
            value={enteredUserAge}
          />
          <Button type="submit" onClick={props.onConfirm}>
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
