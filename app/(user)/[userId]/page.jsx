import { notFound } from "next/navigation";

async function getUser(userId) {
  const res = await fetch(
    `https://63879ad3e399d2e473040a05.mockapi.io/api/users/${userId}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) return undefined
  const user = await res.json();
  return user;
}

const page = async ({ params }) => {
  const userId = params.userId;

  const user = await getUser(userId);
  if (!user) {
    console.error("User not found");
    return notFound();
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <img src={user.avatar} alt={user.name} />
    </div>
  );
};

export default page;
