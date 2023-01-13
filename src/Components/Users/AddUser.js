import { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [eneteredUsername, setEnteredUsername] = useState("");
  const [eneteredAge, setEnteredAge] = useState("");

  const AddUserHandler = (event) => {
    event.preventDefault();

    if (eneteredUsername.trim().length === 0 || eneteredAge.trim().length === 0)
      return;
    if (+eneteredAge < 1) return;
    props.onAddUser(eneteredUsername, eneteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={eneteredUsername}
        ></input>
        <label htmlFor="age">Enter age</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={eneteredAge}
        ></input>
        <Button type="submit">AddUser</Button>
      </form>
    </Card>
  );
};
export default AddUser;
