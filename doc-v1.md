SPRINT 1 (VP1):
---------------------------

`CRIAR EMPRESA`:

- exibir tela de form empresa (CRIAR TELA FORM EMPRESA NO FRONT - form de new User)
- Ao preencher, enviar a API como: POST api.com/api/companies passando no body a empresa a ser criada
- na API, criar o CompanyController, com requestMapping "api/companies"
- na API, criar o resquestMapping (PostMapping);
- salvar empresa via CompanyService --> CompanyRepository
- API deve retornar 203 para o frontend;


`CRIAR VAGA`:

- Quando no cenario de uma Empresa, deve ficar disponivel para empresa criar uma nova VAGA.
- Criar form de VAGA;
  - secao com: titulo, descricao, tags;

- Front deve enviar para API POST api.com/api/jobs
- na API, criar o JobController, com requestMapping "api/jobs"
- na API, criar o resquestMapping (PostMapping);
- salvar empresa via JobService --> JobRepository
- API deve retornar 203 para o frontend;
- FRONT mostra toast de vaga criada;



`CRIAR CANDIDATO`


SPRINT 2 (VP2)
----------------------------

`VISUALIZAR VAGAS`


`DETALHAR VAGA`


`REALIZAR INSCRIÇÃO NA VAGA:`
- O CANDIDATO, na tela de DETALHE VAGA, vai poder clicar para aplicar para vaga;
- Ao clicar no botão de aplicar na tela job-detail.component.html, o FRONT vai enviar um GET api.com/api/jobs/questionary?job=234&candidate=1112
- na API, criar o QuestionaryController, com requestMapping "api/questionary"
- na API, criar o GetMapping, passando como @PathVariable jobId e candidateId
  - No metodo, criar um Questionary, carregando o candidato e a empresa;
  - gerar logica de criação do questionario: buscar as tags e a qtd de questoes a serem geradas por meio do job.
- retornar o questionario montado para o FRONTEND
- FRONT deve montar um component com o questionario recebido;


`REALIZANDO O QUESTIONARIO`
- O candidato, na tela de questionario, vai clicar em iniciar
- Será exibida na tela a primeira pergunta, com um contador de tempo.
- Ao responder, é incrementado a pontuação do candidato. (por enquanto é 1 ou 0 )
- no fim do questionario, é enviado para a API um update do questionario com o valor do scores: POST api.com/api/questionary 
- na API, o metodo no QuestionaryController vai fazer o update do questionary
   - setar o scores do candidato
 
SPRINT 3 (VF)
------------------------------
  
`SALVANDO RESULTADO CANDIDATO QUESTIONARIO`
 - O frontend vai enviar para o backend o resultado do usuario para um determinado questionario de uma vaga.


`TELA DE ACOMPANHAMENTO RESULTADO SUBMISSÕES PARA VAGA (MODO EMPRESA)`
- A empresa conseguirá ver os resultados dos candidatos, rankiados;
- A empresa poderá stopar o questionario.

`TELA DE RESULTADO FINAL`
- A empresa conseguirá visualizar os candidatos selecionaveis de acordo com o numero de candidados escolhidos previamente por ela;
- A empresa terá informação de email, e outras info do candidato. para então entrar em contato;



