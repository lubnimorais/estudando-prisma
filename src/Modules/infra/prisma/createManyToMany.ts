import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      courses_id: '2d7be05c-540b-4454-bb4b-28236b12462e',
      modules_id: '995e4672-1f82-4404-b7a5-cdf49bbeed08'
    }
  })

  console.log(result);
}

main()