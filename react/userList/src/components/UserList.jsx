import React, { useEffect, useState } from "react";

const UserList = () => {
  let [users, setUsers] = useState([]);
  async function fetchUsers() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      let result = await res.json();
      result = result.map((user) => ({ ...user, isFav: false }));
      setUsers(result);
    } catch (error) {
      console.log(error.message);
    }
  }
  function handleFav(idx) {
    users = users.map((user, ind) =>
      idx == ind ? { ...user, isFav: !user.isFav } : user
    );
    setUsers(users);
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <div>
        {users?.length > 0 && <h3>Users</h3>}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "10px",
          }}
        >
          {users?.length > 0 &&
            users.map((user, i) => (
              <div key={i}>
                <p>
                  <strong>
                    {" "}
                    {user.name} - {user.email}
                  </strong>
                </p>
                <button onClick={() => handleFav(i)}>
                  {" "}
                  {user.isFav ? "Non Fav" : "Fav"}
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default UserList;
