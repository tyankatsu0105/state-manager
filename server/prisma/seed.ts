import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.TodoCreateInput[] = [
  {
    title: "first todo",
    content: "This is the content of the first todo",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "second todo",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "third todo",
    content: "This is the content of the third todo",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const data of userData) {
    const todo = await prisma.todo.create({
      data,
    });
    console.log(`Created user with id: ${JSON.stringify(todo, null, 2)}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
