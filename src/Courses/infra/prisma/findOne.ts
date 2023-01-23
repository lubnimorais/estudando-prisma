import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const response = await prisma.courses.findFirst({
    where: {
      name: 'Curso de React Native',
    }
  });

  console.log(response);
}

main();