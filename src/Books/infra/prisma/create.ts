import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: 'Arquitetura limpa',
      author_id: '8428fc1e-b450-4085-a416-e8a757930679'
    }
  })

  console.log(result);
}

main();