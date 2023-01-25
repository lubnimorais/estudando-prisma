import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: 'd6783c79-a0e5-44a0-933a-42d498484e37'
    }
  })

  console.log(JSON.stringify(result, null, 2));
}

main()