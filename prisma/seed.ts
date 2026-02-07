import { PrismaClient } from '@prisma/client';
import { irregularVerbs } from '../src/dictionary/verbs';
import { PrismaPg } from '@prisma/adapter-pg';

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  }),
});

async function main() {
  await prisma.verb.createMany({
    data: irregularVerbs.map(([base, past, pastParticiple, translation]) => ({
      base,
      past,
      participle: pastParticiple,
      translation,
    })),
    skipDuplicates: true,
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
