📘 MV HUB API — SIAP Health Data Integration

API oficial para envio, gestão e validação de dados do SIAP – Sistema Integrado de Auditoria Pública, com foco no módulo Saúde (2025 – 2ª edição).
Desenvolvida com Node.js, NestJS e Prisma ORM.

🚀 Visão Geral

Esta API implementa todos os leiautes exigidos pelo SIAP – Módulo Saúde, contemplando:

✔ Estabelecimentos
✔ Vínculos Profissionais
✔ Leitos
✔ Equipamentos
✔ Programação Orçamentária
✔ Solicitações e Autorizações Ambulatoriais
✔ Autorizações de Internação Hospitalar (AIH)
✔ Indicadores de Saúde (Mortalidade, Morbidade, Saúde Mental)
✔ Pré-Natal (Mãe, Nascido Vivo)
✔ Vacinas – Cobertura Vacinal
✔ Autenticação JWT completa (login, cadastro, refresh)

A API foi projetada com arquitetura modular, alta escalabilidade e seguindo padrões REST.

🏗 Arquitetura Geral
src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── dtos/
│   └── strategies/
│
├── common/
│   ├── guards/
│   ├── decorators/
│   ├── interceptors/
│   └── filters/
│
├── modules/
│   ├── estabelecimentos/
│   ├── vinculos-profissionais/
│   ├── leitos/
│   ├── equipamentos/
│   ├── programacao-orcamentaria/
│   ├── solicitacoes-ambulatoriais/
│   ├── autorizacoes-ambulatoriais/
│   ├── aih/
│   ├── indicadores/
│   │   ├── mortalidade/
│   │   ├── morbidade/
│   │   └── saude-mental/
│   ├── mae/
│   ├── nascido-vivo/
│   └── vacinas/
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
└── main.ts

⚙ Tecnologias utilizadas
Tecnologia	Uso
NestJS	Estrutura principal da aplicação
Prisma ORM	ORM e migrations
PostgreSQL	Banco recomendado
JWT + Passport	Autenticação
Class Validator / Transformer	Validação de DTOs
Docker	Deploy e padronização de ambiente
Swagger	Documentação automática
🔐 Autenticação (JWT)

A API utiliza:

Login

Registro

Tokens de acesso e refresh

Refresh automático

Rotas protegidas por AuthGuard('jwt')

Endpoints de Auth
Método	Endpoint
POST	/auth/register
POST	/auth/login
POST	/auth/refresh
GET	/auth/me
🧪 Variáveis de Ambiente (.env)
# Server
PORT=3000

# JWT
JWT_SECRET=super-secret
JWT_EXPIRES_IN=1h
JWT_REFRESH_SECRET=refresh-secret
JWT_REFRESH_EXPIRES_IN=7d

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/siap?schema=public"

🛠 Instalação
1. Instalar dependências
npm install

2. Gerar o client Prisma
npx prisma generate

3. Rodar migrações
npx prisma migrate dev

4. Subir o servidor
npm run start:dev

🐳 Uso com Docker
docker compose up --build

📚 Documentação dos Módulos (SIAP)

A seguir, cada módulo SIAP implementado pela API.

1. 🏥 Estabelecimentos de Saúde
Endpoints
Método	Rota
POST	/estabelecimentos
GET	/estabelecimentos
GET	/estabelecimentos/:cnes
PUT	/estabelecimentos/:cnes
DELETE	/estabelecimentos/:cnes

Campos: CNES, CNPJ, NomeFantasia, RazaoSocial, Endereco, CEP, etc.

2. 👩‍⚕️ Vínculo Profissional de Saúde
Endpoints
Método	Rota
POST	/vinculos-profissionais
GET	/vinculos-profissionais
GET	/vinculos-profissionais/:cpf/:cnes
PUT	/vinculos-profissionais/:cpf/:cnes
DELETE	/vinculos-profissionais/:cpf/:cnes
3. 🛏 Leitos
Método	Rota
POST	/leitos
GET	/leitos
GET	/leitos/:cnes/:tipoLeito
PUT	/leitos/:cnes/:tipoLeito
DELETE	/leitos/:cnes/:tipoLeito
4. 🖥 Equipamentos
Método	Rota
POST	/equipamentos
GET	/equipamentos
GET	/equipamentos/:cnes/:codigo
PUT	/equipamentos/:cnes/:codigo
DELETE	/equipamentos/:cnes/:codigo
5. 💰 Programação Orçamentária
Método	Rota
POST	/programacao-orcamentaria
GET	/programacao-orcamentaria
GET	/programacao-orcamentaria/:cnes
DELETE	/programacao-orcamentaria/:id
6. 📄 Solicitação Ambulatorial
Método	Rota
POST	/solicitacoes-ambulatoriais
GET	/solicitacoes-ambulatoriais
GET	/solicitacoes-ambulatoriais/:id
DELETE	/solicitacoes-ambulatoriais/:id
7. ✔ Autorização Ambulatorial
Método	Rota
POST	/autorizacoes-ambulatoriais
GET	/autorizacoes-ambulatoriais
GET	/autorizacoes-ambulatoriais/:id
DELETE	/autorizacoes-ambulatoriais/:id
8. 🏨 AIH – Autorização de Internação Hospitalar
Método	Rota
POST	/aih
GET	/aih
GET	/aih/:numeroAIH
DELETE	/aih/:numeroAIH
9. 📊 Indicadores – Mortalidade
Método	Rota
POST	/indicadores/mortalidade
GET	/indicadores/mortalidade
10. 📊 Indicadores – Morbidade
Método	Rota
POST	/indicadores/morbidade
GET	/indicadores/morbidade
11. 🧠 Indicadores – Saúde Mental
Método	Rota
POST	/indicadores/saude-mental
GET	/indicadores/saude-mental
12. 🤰 Mãe
Método	Rota
POST	/maes
GET	/maes
GET	/maes/:cpf
PUT	/maes/:cpf
DELETE	/maes/:cpf
13. 👶 Nascido Vivo
Método	Rota
POST	/nascidos-vivos
GET	/nascidos-vivos
GET	/nascidos-vivos/:numeroDNV
DELETE	/nascidos-vivos/:numeroDNV
14. 💉 Vacinas – Cobertura Vacinal
Método	Rota
POST	/vacinas/cobertura
GET	/vacinas/cobertura
📑 Documentação Swagger

Após iniciar o servidor:

👉 http://localhost:3000/api

🧩 Contribuição

Pull requests são bem-vindos.
Padronize commits usando Conventional Commits.

📄 Licença

Licenciado sob MIT License.