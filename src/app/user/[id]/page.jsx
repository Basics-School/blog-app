// import { myAction } from "@/actions/auth/action";
import React from "react";

const getUser = async ({ id }) => {
  const user = await fetch(
    `https://63879ad3e399d2e473040a05.mockapi.io/api/users/${id}`
  );
  return user.json();
};

const Userpage = async ({ params }) => {
  const id = params.id;
  const user = await getUser({ id });

  return (
    <div>
      Userpage {id}
      <h1>{user.name}</h1>
      {/* <form action={myAction({id,formData})}>
      <button type="submit">Add to Cart</button>
    </form> */}
    </div>
  );
};

export default Userpage;
