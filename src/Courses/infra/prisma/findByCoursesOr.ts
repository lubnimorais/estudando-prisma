import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findMany({
    where: {
      OR: [
        {
          name: {
            contains: 'ReactJS'
          }
        },
        {
          name: {
            contains: 'React Native'
          }
        }
      ],
      AND: {
        duration: 500,
      }
    }
  })

  console.log(JSON.stringify(result, null, 2));
}

main();