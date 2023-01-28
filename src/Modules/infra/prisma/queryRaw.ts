import { PrismaClient, Prisma, Modules } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.$queryRaw<Modules[]>(
    Prisma.sql`SELECT * FROM modules WHERE id = ${'995e4672-1f82-4404-b7a5-cdf49bbeed08'}`,
  )

  // result.map(item => {
  //   console.log(item.name);
  // })

  console.log(result[0].name)

  // console.log(JSON.stringify(result, null, 2));
}

main();