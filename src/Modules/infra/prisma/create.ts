import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      name: 'Apredendo firebase',
      description: 'Aprendendo firebase do zero',
      CoursesModules: {
        create: {
          course: {
            connect: {
              id: '2d7be05c-540b-4454-bb4b-28236b12462e',
            }
          }
        }
      }
    }
  })

  console.log(result);
}

main()