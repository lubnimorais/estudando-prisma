import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  let skip = 0;
  let exist = true;

  while (exist) {
    const result = await prisma.courses.findMany({
      skip,
      take: 2
    });

    skip += 2;

    console.log(JSON.stringify(result, null, 2));
    console.log('----------------')

    if (result.length <= 0) {
      exist = false;
    }
  }




}

main();