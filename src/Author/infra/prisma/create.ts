import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.author.create({
    data: {
      name: 'Robert C. Martin',
      books: {
        create: {
          name: "Código Limpo"
        }
      }
    }
  })

  console.log(result)
}

main();