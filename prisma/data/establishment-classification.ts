import { PrismaClient } from '../../generated/prisma';
const prisma = new PrismaClient();

export async function seedEstablishmentClassification() {
  const classifications = [
    { description: 'POSTO DE SAÚDE' },
    { description: 'CENTRO DE SAÚDE/UNIDADE BÁSICA' },
    { description: 'POLICLÍNICA' },
    { description: 'HOSPITAL GERAL' },
    { description: 'HOSPITAL ESPECIALIZADO' },
    { description: 'UNIDADE MISTA' },
    { description: 'PRONTO SOCORRO GERAL' },
    { description: 'CONSULTÓRIO ISOLADO' },
    { description: 'CLINICA/CENTRO DE ESPECIALIDADE' },
    { description: 'UNIDADE DE APOIO DIAGNOSE E TERAPIA (SADT ISOLADO)' },
    { description: 'UNIDADE MÓVEL TERRESTRE' },
    { description: 'UNIDADE MÓVEL DE NÍVEL PRE-HOSPITALAR NA ÁREA DE URGÊNCIA' },
    { description: 'FARMÁCIA' },
    { description: 'UNIDADE DE VIGILÂNCIA EM SAÚDE' },
    { description: 'COOPERATIVA OU EMPRESA DE CESSÃO DE TRABALHADORES NA SAÚDE' },
    { description: 'CENTRO DE PARTO NORMAL - ISOLADO' },
    { description: 'HOSPITAL/DIA - ISOLADO' },
    { description: 'CENTRAL DE GESTÃO EM SAÚDE' },
    { description: 'CENTRO DE ATENÇÃO HEMOTERAPIA E OU HEMATOLÓGICA' },
    { description: 'CENTRO DE ATENÇÃO PSICOSSOCIAL' },
    { description: 'CENTRO DE APOIO A SAÚDE DA FAMÍLIA' },
    { description: 'UNIDADE DE ATENÇÃO A SAÚDE INDÍGENA' },
    { description: 'PRONTO ATENDIMENTO' },
    { description: 'POLO ACADEMIA DA SAÚDE' },
    { description: 'TELESSAUDE' },
    { description: 'CENTRAL DE REGULACAO MEDICA DAS URGÊNCIAS' },
    { description: 'SERVIÇO DE ATENÇÃO DOMICILIAR ISOLADO (HOME CARE)' },
    { description: 'OFICINA ORTOPÉDICA' },
    { description: 'LABORATÓRIO DE SAÚDE PUBLICA' },
    { description: 'CENTRAL DE REGULACAO DO ACESSO' },
    { description: 'CENTRAL DE NOTIFICAÇÃO, CAPTAÇÃO E DISTRIBUIÇÃO DE ÓRGÃOS ESTADUAL' },
    { description: 'POLO DE PREVENÇÃO DE DOENÇAS E AGRAVOS E PROMOÇÃO DA SAÚDE' },
    { description: 'CENTRAL DE ABASTECIMENTO' },
    { description: 'CENTRO DE IMUNIZAÇÃO' },
  ];

  for (const item of classifications) {
    const getData = await prisma.establishmentClassification.findFirst({
      where: { description: item.description },
    });
    if (!getData) {
      await prisma.establishmentClassification.create({ data: item });
    }
  }

  console.log('Seed EstablishmentClassification concluído!');
}
