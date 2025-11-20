import { PrismaClient } from '../../generated/prisma';
const prisma = new PrismaClient();

export async function seedActivity() {
  const activities = [
    {
      id: '00',
      activity: 'Não se aplica',
      description:
        'Utilizar apenas para a atividade secundária, quando não existirem outras atividades desenvolvidas no local, pois a atividade principal é obrigatória',
    },
    {
      id: '01',
      activity: 'Consulta Ambulatorial',
      description:
        'Atendimento dispensado a indivíduos cuja condição de saúde estável lhes permita comparecer ao estabelecimento e retornar ao local de origem, realizado por profissionais de saúde de nível superior, com a finalidade de fornecer parecer, instrução ou examinar determinada situação, a fim de decidir sobre um plano de ação ou prescrição terapêutica dentro da sua área de atuação. Exige instalações físicas ambulatoriais, como consultórios, e a caracterização como Atendimento Ambulatorial de Média Complexidade.',
    },
    {
      id: '02',
      activity: 'Apoio Diagnóstico',
      description:
        'Ações e serviços que se utilizam de recursos físicos e tecnológicos (exemplos: Raios-x, Ultrassonografia, Ressonância Magnética, Análises Clínicas/Laboratoriais, Eletrocardiografia, Endoscopia, etc.) com o objetivo de auxiliar, de forma complementar, a determinação da natureza de uma doença ou estado, ou a diferenciação entre elas, melhorando a tomada de decisão assistencial. Exige a informação dos equipamentos e o Atendimento Ambulatorial de Média ou Alta Complexidade.',
    },
    {
      id: '03',
      activity: 'Terapias Especiais',
      description:
        'Atividades voltadas exclusivamente para a realização de hemodiálise, quimioterapia, radioterapia ou cirurgias ambulatoriais (neste caso basicamente a situação de procedimentos em Hospitais-Dia). Exige a informação dos equipamentos e o Atendimento Ambulatorial de Média ou Alta Complexidade.',
    },
    {
      id: '04',
      activity: 'Reabilitação',
      description:
        'Conjunto de ações e serviços orientados a desenvolver ou ampliar a capacidade funcional e desempenho dos indivíduos, proteger a saúde e prevenir agravos, de modo a contribuir para autonomia, acesso à direitos e participação em todas as esferas da vida social. Engloba a reabilitação visual, auditiva, física e mental (APAE, CAPS e entidades similares). Não engloba a reabilitação oral. Exige a informação do Atendimento Ambulatorial de Média Complexidade.',
    },
    {
      id: '05',
      activity: 'Concessão, Manutenção e Adaptação de OPM',
      description:
        'As Órteses, Próteses, Materiais Especiais e Meios de Locomoção (OPM) constituem ferramentas do processo terapêutico da reabilitação, contribuindo fundamentalmente na superação de barreiras, devendo ser prescritas de forma individualizada por profissional capacitado. A concessão de OPM deve estar obrigatoriamente atrelada à adaptação, manutenção e treino de uso da mesma.',
    },
    {
      id: '06',
      activity: 'Atenção Domiciliar',
      description:
        'Ações e serviços prestados de forma substitutiva ou complementar à internação hospitalar ou atendimento ambulatorial, caracterizados pelo conjunto de tratamento de doenças, reabilitação, promoção à saúde e prevenção, englobando internação e/ou assistência prestadas em domicílio. Exige a informação do Atendimento Ambulatorial de Média Complexidade.',
    },
    {
      id: '07',
      activity: 'Assistência a Emergências',
      description:
        'Cuidados destinados a pacientes de demanda espontânea com agravos que necessitam de atendimento imediato por risco iminente de morte. Atividades de Pronto-Socorro e ProntoAtendimento. (SAMU, UPAs). Exige a informação do Atendimento Ambulatorial ou Hospitalar de Média Complexidade, instalações de Urgência e Emergência (Exceto para estabelecimentos móveis, como Ambulâncias, Motolâncias, Ambulanchas, etc.) e Equipamentos para Manutenção da Vida.',
    },
    {
      id: '08',
      activity: 'Entrega/Dispensação de Medicamentos',
      description:
        'Conjunto de ações relativas ao fornecimento de medicamentos diretamente ao paciente e a orientação para o seu uso racional, mediante apresentação de prescrição por profissional habilitado, e obrigatório para Hospitais.',
    },
    {
      id: '09',
      activity: 'Internação',
      description:
        'Cuidados ou tratamentos prestados a um indivíduo, por razões clínicas e/ou cirúrgicas, que demandem a ocupação de um leito por um período igual ou superior a 24 horas. Exige a informação de Leitos para Informação, Instalação Hospitalar na Caracterização de Média e/ou Alta Complexidade.',
    },
    {
      id: '10',
      activity: 'Assistência Intermediária',
      description:
        'Conjunto de ações realizadas entre a internação e o atendimento ambulatorial, para realização de procedimentos clínicos, cirúrgicos, diagnósticos e terapêuticos, que requeiram a permanência do paciente em um leito por um período inferior a 24 horas. Exige a informação do Atendimento Ambulatorial de Média Complexidade.',
    },
    {
      id: '11',
      activity: 'Atenção Psicossocial',
      description:
        'Conjunto de ações intersetoriais de caráter territorial e comunitário que visa à substituição do modelo asilar manicomial, por meio de cuidados que possibilitem a reabilitação psicossocial das pessoas em sofrimento psíquico ou transtorno mental, incluindo aquelas com necessidades decorrentes do uso de álcool e outras drogas, garantindo atenção contínua às situações de crise em saúde mental e articulação do cuidado com outros pontos de atenção. Apenas unidades públicas. Exige a informação do Atendimento Ambulatorial de Média Complexidade e o Serviço Especializado.',
    },
    {
      id: '12',
      activity: 'Atenção Básica',
      description:
        'Conjunto de ações e serviços longitudinais de saúde no âmbito individual e coletivo, de caráter territorial e comunitário, que abrange o cuidado/tratamento, a promoção e proteção da saúde, a prevenção de agravos, a vigilância em saúde, a reabilitação e a redução de danos à saúde, coordenando ou integrando o cuidado fornecido em outros pontos de atenção. Apenas unidades públicas, no caso as Unidades Básicas de Saúde. Exige a informação do Atendimento Ambulatorial de Atenção Básica e a existência de equipes da Estratégia Saúde da Família (eSF ) ou Consultório na Rua (eCR). ',
    },
    {
      id: '13',
      activity: 'Assistência Obstétrica e Neonatal',
      description:
        'Conjunto de cuidados ou tratamentos prestados à gestante, parturiente e recém-nascido, por razões obstétricas ou neonatais. Apenas centros materno-infantis',
    },
    {
      id: '14',
      activity: 'Telessaúde',
      description:
        'Serviços que utilizam tecnologias da informação e comunicação como meio para desenvolver ações de apoio a Atenção à Saúde e de Educação Permanente em Saúde, com o fim de realizar apoio diagnóstico, ações educativas, esclarecer dúvidas dos profissionais de saúde e gestores de saúde.',
    },
    {
      id: '15',
      activity: 'Atenção Hematológica e/ou Hemoterápica',
      description:
        'Conjunto de ações que integram a assistência especializada em coagulopatias e hemoglobinopatias e/ou o conjunto de ações referentes a captação do doador, o ciclo de produção do sangue, testes sorológicos, testes imunohematológicos, distribuição e transfusão de sangue e componentes e demais atividades hemoterápicas. Exige a informação do Atendimento Ambulatorial de Média e/ou Alta Complexidade e o Serviço Especializado.',
    },
    {
      id: '16',
      activity: 'Promoção da Saúde, Prevenção de Doenças e Agravos e Produção do Cuidado',
      description:
        'Conjunto de ações e serviços de saúde, de caráter individual ou coletivo, compreendendo práticas corporais, artísticas e culturais, práticas integrativas e complementares, atividades físicas, promoção da alimentação saudável ou educação em saúde.',
    },
    {
      id: '17',
      activity: 'Imunização',
      description:
        'Conjunto de ações que objetivam a administração de vacinas para estimulação da resposta imune do hospedeiro, incluindo quaisquer preparações para a profilaxia imunológica ativa. Exige informação da Instalação Física — Sala de Vacina, o Atendimento Ambulatorial de Média Complexidade e o Serviço Especializado',
    },
  ];

  for (const item of activities) {
    await prisma.activity.upsert({
      where: { id: item.id },
      update: item,
      create: item,
    });
  }

  console.log('Seed Activity concluído!');
}
