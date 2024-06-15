import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/deleteUser/${id}`)
      .then((res) => {
        // Log the response
        console.log(res);

        // Update the state to remove the deleted user
        setUsers(users.filter((user) => user._id !== id));
      })
      .catch((err) => {
        // Log the error
        console.error(err);

        // Set error state to provide feedback to the user
        setError("Failed to delete user");
      });
  };

  return (
    <div className="bg-green-400 d-flex vh-100 justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <button>
          <Link to="/Create" className="btn btn-success">
            ADD +
          </Link>
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <button>
                    <Link
                      to={`/Update/${user._id}`}
                      className="btn btn-success"
                    >
                      Update
                    </Link>
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
