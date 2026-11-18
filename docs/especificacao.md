# Adapta Aí — Especificação

> Documento da fase 1 (idealização). Diz **o que** o sistema faz, não **como**.
> Tudo aqui foi decidido pelo grupo nas rodadas de perguntas de 14, 15 e 16/11/2026.
> O que ainda não foi decidido está na seção [Pontos em aberto](#pontos-em-aberto).

## 1. Visão geral

Ferramenta web para professores do ensino regular que têm alunos com autismo (TEA) em sala.
O professor envia um material que já tem pronto e recebe o mesmo material adaptado:
linguagem simples, uma instrução por vez, menos poluição visual e pictogramas reais do
ARASAAC ao lado das palavras-chave. Ele revisa, edita e imprime.

- **Foco: prova.** O caso principal é a prova da turma, fotografada **em branco** (sem nome
  e sem respostas). O aluno faz a prova adaptada e a professora corrige.
- **Outros materiais também.** Atividades e conteúdos (por exemplo, slides de aula) passam
  pelo mesmo fluxo. As regras próprias de prova ([spec 001](specs/001-adaptar-material.md), R-001-02) valem quando o material é prova.
- **Usuário:** professor da escola pública, sem formação específica em TEA.
- **Custo para o professor:** gratuito.
- **Contexto:** trabalho acadêmico em grupo (EdTech), com apresentação na quarta-feira,
  18/11/2026, às 19h. O objetivo é que o sistema seja usável no dia a dia, e não só uma
  demonstração.

## 2. Versões

O grupo decidiu idealizar o sistema completo e entregar em duas etapas.

- **E1 — Entrega de 18/11/2026:** o recorte que será apresentado.
- **V2 — Versão seguinte:** planejado, mas fora da entrega.

| Tema | E1 — Entrega de 18/11 | V2 — Versão seguinte |
|---|---|---|
| Entrada | Foto ou imagem; PowerPoint (.pptx), só o texto dos slides; texto colado | PDF; figuras dos slides |
| Tipo de material | Prova (padrão), atividade ou conteúdo, escolhido pelo professor | — |
| Tamanho | Arquivo inteiro, com escolha de quais slides adaptar, até 5 por vez. Os slides marcados juntos formam **uma** adaptação | — |
| Perfil do aluno | Perfis salvos com apelido e observações | — |
| Edição | Editar texto; trocar e remover pictograma; pedir nova versão à IA | Adicionar, apagar e reordenar etapas |
| Saída | Imprimir; baixar PDF (pela impressão do navegador) | Word (.docx); PowerPoint (.pptx) |
| Tipo de saída | Sempre folha para o aluno | Slides adaptados, à escolha do professor |
| Histórico | Reabrir e editar; apagar; dar nome e buscar | Readaptar o mesmo material para outro perfil |
| Pictogramas | Botão na folha alterna entre colorido e preto e branco | — |
| Privacidade | Frase no campo de observações pedindo para não escrever o nome do aluno; o restante é citado na apresentação | Avisos completos no sistema |

**Regra:** uma prova = uma adaptação. Para adaptar 5 provas diferentes, o professor envia
5 vezes, e cada uma vira um item do histórico.

**Se faltar tempo na E1**, o primeiro item a cair é "pedir nova versão à IA" (spec 005). O
segundo é "perfis salvos com apelido e observações" (spec 003); nesse caso o professor marca
as opções de apoio a cada adaptação.

## 3. Decisões gerais

- **Conta:** não há login. O que o professor guarda fica salvo no navegador daquele aparelho.
- **Aparelho:** pensado para computador. Abre no celular, sem acabamento especial.
- **IA:** começa na faixa gratuita do Gemini (Google). O provedor fica isolado numa camada
  própria, para poder ser trocado por um pago sem reescrever o resto do sistema.
- **Plano B da apresentação:** texto colado entra na E1. Se a leitura da foto ou do PowerPoint
  falhar, o professor cola o texto e a adaptação segue.
- **Método de trabalho:** mesma lógica do GitHub Spec Kit (princípios, especificação, plano,
  tarefas), com documentos escritos pelo grupo, sem instalar a ferramenta.

## 4. Histórias de usuário

As histórias e os critérios de aceite ficam nas specs de cada funcionalidade, em
[specs/](specs/README.md), seguindo o Spec-Driven Development. Os princípios que nenhuma
spec pode contrariar estão em [constituicao.md](constituicao.md).

| História | Spec |
|---|---|
| H1 — Adaptar um material | [001](specs/001-adaptar-material.md) (imagem e texto) e [002](specs/002-powerpoint.md) (PowerPoint) |
| H2 — Usar o perfil do aluno | [003](specs/003-perfil-do-aluno.md) |
| H3 — Revisar e editar | [004](specs/004-revisar-folha.md) e [005](specs/005-nova-versao.md) (nova versão a pedido) |
| H4 — Imprimir e baixar | [006](specs/006-imprimir.md) |
| H5 — Histórico | [007](specs/007-historico.md) |

## 5. Requisitos funcionais

| Id | Requisito | Versão |
|---|---|---|
| RF-01 | Aceitar foto ou imagem como entrada | E1 |
| RF-02 | Aceitar PowerPoint (.pptx) como entrada, lendo o texto dos slides | V2 (feito, oculto na tela em 18/11) |
| RF-03 | Mostrar os slides do arquivo e permitir escolher quais adaptar, até 5 por vez, gerando uma única adaptação | V2 (feito, oculto na tela em 18/11) |
| RF-04 | Ler o conteúdo do material e reescrever em frases curtas, uma instrução por etapa | E1 |
| RF-05 | Preservar o objetivo de aprendizagem e os termos da disciplina; em prova, manter todas as questões com a numeração do original e todas as alternativas | E1 |
| RF-06 | Associar pictogramas do ARASAAC às palavras-chave, com busca em português; em prova, só no enunciado | E1 |
| RF-07 | Criar, editar e apagar perfis de aluno (apelido, opções de apoio, observações) | E1 |
| RF-08 | Considerar o perfil escolhido ao gerar a adaptação | E1 |
| RF-09 | Mostrar original e versão adaptada lado a lado, com o texto lido pela IA e o quadro "O que mudou" | E1 |
| RF-10 | Editar o texto da versão adaptada | E1 |
| RF-11 | Trocar um pictograma por outra opção do ARASAAC ou removê-lo | E1 |
| RF-12 | Gerar nova versão a partir de um pedido escrito pelo professor | E1 |
| RF-13 | Alternar a folha entre pictogramas coloridos e em preto e branco | E1 |
| RF-14 | Imprimir a folha adaptada | E1 |
| RF-15 | Baixar a folha adaptada em PDF, pela impressão do navegador | E1 |
| RF-16 | Exibir a atribuição do ARASAAC em toda folha gerada | E1 |
| RF-17 | Salvar as adaptações no navegador, com nome, busca, reabertura e exclusão | E1 |
| RF-18 | Aceitar PDF como entrada | V2 |
| RF-19 | Aceitar texto colado como entrada | E1 |
| RF-20 | Adicionar, apagar e reordenar etapas | V2 |
| RF-21 | Baixar em Word (.docx) | V2 |
| RF-22 | Baixar em PowerPoint (.pptx) | V2 |
| RF-23 | Oferecer slides adaptados como tipo de saída | V2 |
| RF-24 | Readaptar um material do histórico para outro perfil | V2 |
| RF-25 | Avisos de privacidade no sistema (na E1, só a frase do campo de observações) | V2 |
| RF-26 | Escolher o tipo do material: prova (padrão), atividade ou conteúdo | E1 |
| RF-27 | Avisar quando uma questão do original não aparece na adaptação | E1 |

## 6. Fora do escopo

- Login, contas e histórico na nuvem.
- Acabamento específico para celular.
- Necessidades além de TEA.

## 7. Restrições conhecidas

- **Licença do ARASAAC:** Creative Commons BY-NC-SA. Exige atribuição e uso não comercial.
- **Busca de pictogramas erra:** no teste da prova de conceito, "marcar" trouxe primeiro a
  imagem de telefonar, "água" trouxe uma torneira e "precipitação" não teve resultado.
  Por isso RF-11 está na E1, e a IA sugere uma palavra de busca para cada pictograma.
- **Preto e branco:** testado em 15/11/2026. A API do ARASAAC devolve a versão sem cor do
  mesmo pictograma com o parâmetro `color=false`.
- **Cota da IA gratuita:** os limites diários da faixa gratuita do Gemini são baixos e o
  Google não publica os números. Só aparecem no painel do AI Studio, na conta de quem criar
  a chave. No painel do grupo, em 16/11/2026: **5 pedidos por minuto e 20 por dia** para o
  modelo escolhido (ver [pesquisa-t00.md](pesquisa-t00.md)). Por isso o limite de 5 slides por vez, uma chamada à IA por adaptação e o
  provedor trocável.
- **Cobrança da API:** em 16/11/2026 o grupo decidiu usar créditos pré-pagos (cerca de R$ 60),
  pagos pelo grupo, para ter cota nos testes e na apresentação. Com a cobrança ativa, o uso
  conta como serviço pago e os dados deixam de ser usados para treino. O professor continua
  sem custo (P4). Detalhes em [pesquisa-t00.md](pesquisa-t00.md).
- **Dados na faixa gratuita do Gemini:** pelos termos da API, na faixa gratuita o Google usa
  o que é enviado e o que é gerado para melhorar os produtos dele, e pessoas podem revisar
  esse conteúdo. Fonte: Termos adicionais da API Gemini e página de política de dados
  (consultados em 16/11/2026; conferir a versão vigente).
- **Privacidade, como o grupo trata:**
  - A prova é fotografada em branco: sem nome e sem respostas do aluno.
  - O apelido do perfil não sai do navegador.
  - As observações podem trazer o diagnóstico, mas não o nome. Sem o nome, o Google recebe
    as características de um aluno que ele não consegue identificar.
  - A foto é reduzida no navegador antes do envio, o que apaga os metadados (como o GPS).
  - Limitação conhecida: o campo de observações é texto livre, e a E1 só tem a frase
    pedindo para não escrever o nome. O grupo cita isso na apresentação.
- **Divergência com a proposta:** a proposta enviada ao professor diz que o perfil não
  registra diagnóstico. Em 16/11/2026 o grupo decidiu permitir o diagnóstico nas observações,
  para a IA adaptar melhor. A apresentação deve explicar essa mudança.

## Pontos em aberto

As decisões técnicas estão em [arquitetura.md](arquitetura.md). O controle de versão foi
decidido lá: Git com GitHub.

1. **Chave do Gemini.** Um membro precisa criar a chave no Google AI Studio e conferir, no
   painel, os limites reais da faixa gratuita.
2. **Tamanho máximo do arquivo.** Decidido: 20 MB. Ver [arquitetura.md](arquitetura.md).
3. **Critérios de aceite.** Estão nas specs, em estado `rascunho`, até o grupo aprovar cada uma.

## Registro

- Proposta enviada ao professor (página publicada): https://claude.ai/artifact/TP7RdnU4yiE3mTPwd73Xiq
- 14–15/11/2026: rodadas de idealização e definição do recorte da E1.
- 15/11/2026: resolvidos os pontos em aberto de provedor de IA, limite de slides, PDF,
  plano B, preto e branco, privacidade e Git.
- 16/11/2026: revisão de arquitetura. Decidido:
  - foco em prova, com atividade e conteúdo também aceitos;
  - uma prova = uma adaptação; slides marcados juntos geram uma folha;
  - PowerPoint só com texto na E1;
  - novas opções de apoio;
  - diagnóstico permitido nas observações, sem o nome;
  - em prova: pictogramas só no enunciado, todas as alternativas mantidas, numeração do
    original e aviso de questão faltando.
- 16/11/2026: o grupo aprovou as considerações da revisão (Render, PowerPoint só com texto,
  provedor de respostas gravadas, nova versão a pedido cai antes dos perfis) e adotou o
  Spec-Driven Development: constituição e uma spec por funcionalidade em `docs/specs/`.
