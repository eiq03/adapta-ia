# Adapta Aí — Roadmap

> Do acordo inicial até a apresentação de 18/11/2026 às 19h, e o que vem depois (V2).
> O que fazer em cada tarefa está em [tarefas.md](tarefas.md); o comportamento esperado,
> nas [specs](specs/README.md).
> Cada etapa só termina quando cumpre o seu "pronto quando". Os pontos de controle dizem o
> que cortar se o relógio apertar.

## Visão geral

```
16/11 ─────────────────────────────── 17/11 ─────────────────────────────── 18/11 ──────────────
 E0 Acordos    E1 Fundação    E2 Ponta a ponta │ E3 Revisar  E4 PowerPoint  E5 IA a pedido │ E6 Estabilizar  E7 Ensaio  19h
 (1h)          (tarde)        (noite)          │ e imprimir  e guardar      e reserva      │ (até 12h)       (tarde)    apresentação
                                     ▲ C1 23h  │ (manhã)     (tarde)        (noite)        │      ▲ C4 12h
                                               │       ▲ C2 14h       ▲ C3 22h            │   congelamento
```

| Etapa | Quando | Resultado | Specs | Tarefas |
|---|---|---|---|---|
| E0 Acordos | 16/11, primeira hora | Tudo que bloqueia o código está resolvido | — | — |
| E1 Fundação | 16/11, tarde | Esqueletos publicados, Gemini testado, contrato fechado | 001 (parte) | T00, T01, T02, T20a, T03 |
| E2 Ponta a ponta | 16/11, noite | Foto de prova real vira folha adaptada, no endereço público | 001 | T04, T06, T08a, T05, T10, T12 |
| E3 Revisar e imprimir | 17/11, manhã | Folha corrigível e impressa em A4 | 004, 006 | T13, T14, T16, T17 |
| E4 PowerPoint e guardar | 17/11, tarde | Slides, histórico e perfis | 002, 007, 003 | T07, T08b, T11, T19, T18 |
| E5 IA a pedido e reserva | 17/11, noite | Nova versão a pedido e respostas gravadas | 005, 001 | T09, T15, T22 |
| E6 Estabilizar | 18/11, até 12h | Versão final congelada e publicada | todas | correções, T20b |
| E7 Ensaio e apresentação | 18/11, tarde | Demonstração ensaiada, com reserva e vídeo | — | T21 |
| V2 | depois da entrega | Ver o fim deste documento | — | — |

**Caminho crítico** (se um destes atrasa, tudo atrasa):

```
chave do Gemini → T00 → T03 → T04 → T08a → T05 → T10 → T12 → T17 → T20b → T21
```

**Produto mínimo apresentável:** o fim da E3. Com E1 a E3 prontas, há o que apresentar mesmo
que nada mais fique pronto: foto da prova → folha adaptada → correção → impressão.

---

## E0 — Acordos antes do código

**Objetivo:** resolver o que ainda bloqueia o desenvolvimento. Nenhuma linha de código
depende de opinião depois desta etapa.

| # | Ponto a acordar | Sugestão | Bloqueia |
|---|---|---|---|
| 1 | Quem é cada frente (P1 a P5) | Escrever os nomes na tabela de frentes de [tarefas.md](tarefas.md) | tudo |
| 2 | Quem cria a chave do Gemini e confere no painel os limites e o modelo | A pessoa da frente P2 (IA). Anotar os limites e o nome do modelo no resultado da T00 | T00, T05 |
| 3 | Quem cria a conta no Render e liga ao repositório | A pessoa da frente P5. O dono do repositório (`eiq03`) precisa autorizar o Render no GitHub | T20a |
| 4 | Materiais reais para teste | 3 provas em branco fotografadas com celular, 1 PowerPoint de prova ou aula, 1 texto. Sem nome de aluno. Guardar fora do Git (pasta compartilhada do grupo) | T00, T21 |
| 5 | Versões das ferramentas | Python 3.12 e Node 22 LTS, iguais para todos e no Render (conferir na instalação se as bibliotecas suportam) | T01, T02 |
| 6 | Quem revisa quem | Em pares, para a revisão não virar fila: P1 ↔ P2 (servidor), P3 ↔ P4 (tela), P5 revisado por P1. Revisão em até 30 min | todas |
| 7 | Horários de alinhamento | 15 minutos em cada ponto de controle (C1 a C4), mais um no início de cada dia | — |
| 8 | Visual da tela | Sem trabalho de identidade visual: padrão do Tailwind, uma cor principal, fonte grande. A folha segue a R-006-02 | T02, T12 |
| 9 | Quem apresenta e quem cuida do roteiro | Definir agora, para o roteiro ser escrito por quem vai falar | T21 |

**Acordos registrados em 16/11/2026:**

| # | Resposta |
|---|---|
| 1 | A divisão em frentes fica para depois. Hoje, um membro do grupo trabalha com a IA em sequência, seguindo a ordem das etapas; ao fim do dia, ele divide o restante entre as 5 pessoas |
| 2 | O mesmo membro cria a chave do Gemini e anota os limites e o modelo no resultado da T00 |
| 3 | Render, conforme a sugestão. Conta criada na T20a |
| 4 | Conforme a sugestão |
| 5 | **Python 3.13** (a versão já instalada na máquina de quem começa; a sugestão de 3.12 foi trocada para não exigir outra instalação) e **Node 22 LTS**. Conferir na instalação se as bibliotecas suportam o 3.13 |
| 6 | Até o fim do projeto, a IA revisa o próprio pedido e junta na `main`, sem esperar outra pessoa. No fim, o grupo revisa tudo à mão. Os pares de revisão ficam para depois da entrega |
| 7, 8, 9 | Conforme a sugestão |

**Já decidido (não reabrir):** specs 001 a 007 aprovadas em 16/11/2026; arquitetura em
camadas; contrato da seção 10 da arquitetura (confirmado na T03 com o resultado da T00);
hospedagem no Render; ordem de queda (005, depois 003).

**Pronto quando:** os 9 pontos têm resposta, anotada neste documento ou em tarefas.md.

---

## E1 — Fundação

**Objetivo:** tudo o que as outras etapas usam, pronto e publicado.

| Frente | Faz |
|---|---|
| P1 | T01: esqueleto do servidor, com `/health`, `config.py`, `main.py`, pytest e Ruff |
| P2 | T00: script solto que manda as 3 provas reais ao Gemini com o schema da seção 10 |
| P3 | T02: esqueleto da tela, com as páginas, o React Router e o cliente em `shared/api` |
| P4 | Junto com P3 na T02; depois, rascunho visual da folha (a T12 começa com o exemplo do contrato) |
| P5 | T20a: publica os dois esqueletos no Render (a tela precisa da regra de reescrita `/* → /index.html` para as rotas do React Router funcionarem) |
| Todos | T03, assim que a T00 terminar: reunião curta para fechar o contrato com o que o Gemini realmente devolveu |

**Pronto quando:**
- o servidor e a tela abrem nos endereços públicos, e a tela chama o `/health`;
- a T00 respondeu: o JSON vem no formato? quanto tempo leva? as questões e as alternativas
  foram mantidas? qual modelo usar?
- `docs/contrato-exemplo.json` existe, os modelos estão nos dois lados e o teste do contrato
  passa.

**Se a T00 mostrar problema:**

| Problema | Ação |
|---|---|
| Schema rejeitado | Achatar o schema e tentar de novo |
| Questões somem | Reforçar as regras no pedido à IA |
| Mais de 90 s por pedido | Avaliar outro modelo, conferindo a fidelidade (o `flash-lite` foi descartado na T00) |

Qualquer ajuste no contrato entra na T03, antes de alguém programar em cima dele.

---

## E2 — Ponta a ponta

**Objetivo:** o fluxo principal funcionando de verdade: foto de prova → folha adaptada.

| Frente | Faz |
|---|---|
| P1 | T04: interface de IA, IA simulada, regra de adaptar, conferência das questões |
| P5 | T06: interface de pictogramas, ARASAAC, busca em paralelo com cache |
| P1 | T08a: rota de adaptar (texto e imagem) |
| P2 | T05: provedor Gemini e o texto do pedido à IA (com as regras de prova e de perfil) |
| P3 | T10: tela de envio (tipo de material, opções de apoio, redução da foto) |
| P4 | T12: folha ao lado do original, primeiro com o exemplo do contrato, depois com a API |

**Pronto quando:**
- no endereço público, uma prova real fotografada vira uma folha adaptada, com pictogramas,
  números das questões e o quadro "O que mudou";
- os testes `[teste]` da spec 001 passam.

**C1 — 16/11, 23h:**
- E2 pronta? Seguir o plano.
- Não ficou pronta? A **spec 002 (PowerPoint) é cortada**, e P5 entra para fechar a E2 na
  manhã de 17/11.

---

## E3 — Revisar e imprimir

**Objetivo:** o professor corrige a folha e a leva para a sala. Fim desta etapa = produto
mínimo apresentável.

| Frente | Faz |
|---|---|
| P4 | T13: editar texto; T16: colorido / preto e branco |
| P3 | T14: trocar, buscar e remover pictograma |
| P4 ou P3 | T17: impressão A4, crédito do ARASAAC, uma questão por página quando o aluno se distrai fácil |
| P1, P2 | Ajustes do pedido à IA com os problemas vistos na E2; testes que faltam da spec 001 |

**Pronto quando:** os critérios das specs 004 e 006 foram conferidos no navegador; uma folha
impressa em papel (ou em PDF) está correta.

**C2 — 17/11, 14h:**
- E3 pronta? Seguir.
- Não ficou pronta? A **spec 005 é cortada** e todos ajudam a terminar a E3.

---

## E4 — PowerPoint e guardar

**Objetivo:** as outras entradas e a memória do sistema.

| Frente | Faz |
|---|---|
| P5 | T07: leitor de PowerPoint (texto e tabelas); T08b: rota de slides; T11: tela de slides |
| P3 | T19: histórico |
| P4 | T18: perfis de aluno |
| P1 | Revisão das rotas novas; testes da spec 002 |

**Pronto quando:** os critérios das specs 002, 007 e 003 foram cumpridos.

**C3 — 17/11, 22h:**
- A **spec 003 não ficou pronta?** É cortada: a tela continua com as opções de apoio a cada
  vez (CA-001-26).
- A **spec 002 não ficou pronta?** Também é cortada, e o PowerPoint vira "cole o texto do
  slide" na apresentação.

---

## E5 — IA a pedido e reserva

**Objetivo:** o pedido livre ao professor e a garantia de que a demonstração funciona sem
cota.

| Frente | Faz |
|---|---|
| P1 | T09: rota de nova versão |
| P4 | T15: tela de nova versão |
| P2 | T22: provedor de respostas gravadas e o selo "modo demonstração" |

**Pronto quando:** os critérios da spec 005 foram cumpridos; com `AI_PROVIDER=replay`, os
materiais do roteiro devolvem respostas gravadas.

A T22 não é cortável: ela é a reserva da apresentação. Se faltar tempo, corta-se a T09/T15.

---

## E6 — Estabilizar

**Objetivo:** nenhuma funcionalidade nova, só deixar o que existe confiável.

- Passar por todos os critérios `[manual]` das specs entregues, com os materiais reais.
- Corrigir os erros encontrados, um ramo por correção (`fix/tNN-...`).
- Conferir: nenhum erro técnico na tela (E7 da constituição); crédito do ARASAAC em toda folha;
  chave fora do Git.
- Atualizar os documentos: estado das specs (`implementada`), cortes feitos, tarefas.
- T20b: publicar a versão final.

**C4 — 18/11, 12h: congelamento.** Depois disso, só entra correção de erro que quebra a
demonstração.

**Exceção ao congelamento (18/11, 13h30):** aprovada pelo Gabriel, a T27 (adicionar imagem
em qualquer questão) entrou depois do meio-dia. Motivo: só muda a tela, não muda o pedido à
IA (as respostas de reserva gravadas à tarde não mudam) e foi conferida no navegador antes de
publicar.

**Corte (18/11, à tarde):** decidido pelo Gabriel, o botão PowerPoint saiu da tela e a spec 002
foi para a V2. Motivo: no teste com uma aula real, as figuras dos slides sumiam e a aula virava
questões; o professor espera slides de volta (RF-22, RF-23). O código do leitor continua.

---

## E7 — Ensaio e apresentação

**Objetivo:** apresentar sem surpresa.

| Hora (18/11) | O quê |
|---|---|
| 13h–15h | T21: rodar o roteiro com o Gemini real e gravar as respostas para o provedor de reserva: servidor local com `AI_RECORD=on`, no computador e navegador da apresentação; depois, commit dos arquivos de `replay_answers/` e publicar o servidor |
| 15h–16h | Gravar o vídeo da demonstração (última reserva) |
| 16h–17h | Ensaio completo, com tempo marcado, incluindo as perguntas difíceis (privacidade, fidelidade, custo da IA, SDD, arquitetura) |
| 18h40 | Abrir o `/health` e a tela publicada, para o Render acordar |

**Cota no dia 18:** a chave da apresentação tem 20 pedidos por dia e 5 por minuto. Nesse dia,
ela só é usada no ensaio (até 8 pedidos) e na apresentação. Ninguém testa com ela. Os
desenvolvedores usam a IA simulada ou as próprias chaves.
| 19h | Apresentação |

**Ordem das reservas na hora:**

```
Gemini real → AI_PROVIDER=replay (modo demonstração) → vídeo gravado
```

**O roteiro deve mostrar:**
- foto de prova em branco → folha adaptada com o perfil;
- o quadro "O que mudou" e um aviso de questão faltando;
- correção de um pictograma errado;
- impressão;
- uma spec e um teste com o mesmo identificador (SDD na prática);
- o diagrama de camadas.

---

## V2 — Depois da entrega

Sem data. Ordenado pelo que dá mais valor ao professor.

| Tema | O que entra | Por quê |
|---|---|---|
| Validação | Testar com 2 ou 3 professores reais e ajustar as specs | Até aqui, as decisões pedagógicas são do grupo, não de quem usa |
| Privacidade | Faixa paga do Gemini (sem uso dos dados para treino) ou outro provedor com contrato; avisos completos (RF-25) | É o ponto mais fraco da E1 |
| Entradas | PDF (RF-18); figuras dos slides | Os pedidos mais prováveis dos professores |
| Saídas | Word (RF-21), PowerPoint (RF-22), slides adaptados (RF-23) | Editar fora do sistema |
| Edição | Adicionar, apagar e reordenar etapas (RF-20); desfazer | Menos dependência da IA |
| Histórico | Readaptar para outro perfil (RF-24) | Uma prova, vários alunos |
| Engenharia | Tipos da tela gerados do OpenAPI; limite de pedidos por IP; testes automáticos da tela; hospedagem que não dorme | Menos erro de contrato, menos abuso da cota, demonstração sem espera |
| Acesso | Acabamento para celular | Muitos professores só têm o celular |

Cada item da V2 começa do mesmo jeito: spec nova (ou atualizada), aprovada pelo grupo, antes
do código.
