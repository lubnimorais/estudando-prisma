import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const response = await prisma.courses.findMany({
    include: {
      teacher: true,
    }
  });

  console.log(response);
}

main();