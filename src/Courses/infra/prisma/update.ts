import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const response = await prisma.courses.update({
    where: {
      id: '39ac3a38-49b1-48a2-9fd2-aab869489e7e',
    },
    data: {
      name: 'Curso de ReactJS 2023',
      description: 'Curso excelente de ReactJS com Diego Fernandes',
      duration: 300,
    }
  });

  console.log(response);
}

main();