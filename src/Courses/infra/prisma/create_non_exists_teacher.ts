import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const response = await prisma.courses.create({
    data: {
      name: 'Curso de Elixir',
      description: 'Curso excelente de Elixir',
      duration: 200,
      teacher: {
        create: {
          name: 'Rafa Camarda'
        }
      }
    }
  });

  console.log(response);
}

main()