export const getUsers = async () => {
    const users = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/user`);
    if (!users.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return users.json();
  };