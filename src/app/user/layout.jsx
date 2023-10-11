import Link from "next/link";
import React from "react";
import { getUsers } from "../lib/getUser";

// const getUsers = async () => {
//   const users = await fetch("http://localhost:3000/api/user");
//   if (!users.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }
//   return users.json();
// };

const UserLayout = async ({ children }) => {
  const users = await getUsers();
  console.log("client", users);
  return (
    <div className="flex">
      {/* <h1>User Layout</h1> */}

      <div>
        <ul className="flex flex-col">
          {users?.map((user) => (
            <Link href={`/user/${user.id}`} key={user.id}>
              {user.name}
            </Link>
          ))}
        </ul>
      </div>

      {children}
    </div>
  );
};

export default UserLayout;
