import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.pets.findMany();

  console.log(JSON.stringify(result, null, 2));
}

main()