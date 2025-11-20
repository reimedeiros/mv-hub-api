import { PrismaClient } from '../generated/prisma';
import * as seeds from './data';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando seeds...');
  await seeds.seedEstablishmentClassification();
  await seeds.seedActivity();
  console.log('Todas as seeds concluídas!');
}

main()
  .catch((e) => console.error('Erro ao executar seeds:', e))
  .finally(async () => await prisma.$disconnect());
