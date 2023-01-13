import { useState, Fragment } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [eneteredUsername, setEnteredUsername] = useState("");
  const [eneteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();

    if (
      eneteredUsername.trim().length === 0 ||
      eneteredAge.trim().length === 0
    ) {
      setError({
        title: "Invalid data",
        message: "Please enter valid data (non-empty fields)",
      });
      return;
    }
    if (+eneteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter valid age (> 1)",
      });
      return;
    }
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
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </Fragment>
  );
};
export default AddUser;
