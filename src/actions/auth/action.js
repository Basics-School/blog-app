"use server";
import { revalidatePath } from "next/cache";

export async function myAction({ id,formData }) {
  // ...

  const user = prisma.user.update({
    where: {
      id: id,
    },
    username:formData.username
  });

  if (user) {
    revalidatePath(`/user/${id}`);
  }
}
