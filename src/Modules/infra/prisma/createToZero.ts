import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          name: 'Curso de NodeJS',
          description: 'Curso completo de NodeJS',
          duration: 200
        }
      },
      module: {
        create: {
          name: 'Prisma IO',
          description: 'Curso completo de PrismaIO'
        }
      }
    }
  })

  console.log(result);
}

main()