import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const response = await prisma.courses.create({
    data: {
      name: 'Curso de React Native',
      description: 'Curso excelente de React Native',
      duration: 300,
      teacher: {
        connect: {
          id: '1957da4d-cbf1-4324-ba41-118118b23532',
        }
      }
    }
  });

  console.log(response);
}

main();