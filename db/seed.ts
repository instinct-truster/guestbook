import { db, GuestBook } from "astro:db";

export default async function seed() {
  await db.insert(GuestBook).values([
    {
      author: "John Doe",
      content: "You are so cool!",
    },
    {
      author: "John Doe, The Second",
      content: "I agree with my dad!",
    },
  ]);
}
