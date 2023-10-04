export async function GET(request) {
  const res = await fetch(
    "https://63879ad3e399d2e473040a05.mockapi.io/api/users"
  );

  if (!res.ok) {
    return undefined;
  }
  const users = await res.json();
  return Response.json({users});
}
