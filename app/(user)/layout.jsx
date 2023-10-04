import Link from "next/link";
async function getUsers() {
  const res = await fetch("http://localhost:3000/api/users");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const UserLayout = async ({ children }) => {
  const {users} = await getUsers();
  console.log(users);
  return (
    <main className="flex flex-row gap-10">
      <div
        className="flex  p-4 border
       flex-col h-full max-w-screen-2xl "
      >
        {users.map((user) => (
          <div key={user.id} className=" ">
            <Link href={user.id}>{user.name}</Link>
          </div>
        ))}
      </div>
      <div className="border w-full">{children}</div>
    </main>
  );
};

export default UserLayout;
