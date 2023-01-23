import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de NextJS',
      description: 'Curso excelente de NextJS',
      duration: 200,
    }
  });

  console.log(result);
}

main();