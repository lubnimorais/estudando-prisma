import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findMany({
    where: {
      id: '2d7be05c-540b-4454-bb4b-28236b12462e'
    },
    include: {
      CoursesModules: true
    }
  })

  console.log(JSON.stringify(result, null, 2));
}

main()