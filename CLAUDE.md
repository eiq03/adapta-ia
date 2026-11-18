# Adapta Aí

Ferramenta web para professores adaptarem materiais (foto, PowerPoint, texto) para alunos
com autismo (TEA), com linguagem simples, etapas e pictogramas do ARASAAC.
Trabalho acadêmico em grupo.

## Leia antes de qualquer tarefa

- `docs/constituicao.md`: princípios que nenhuma spec ou código pode contrariar.
- `docs/especificacao.md`: o que o sistema faz, e o que entra na entrega (E1) ou depois (V2).
- `docs/specs/`: uma spec por funcionalidade, com os critérios de aceite. Comece pela spec
  da sua tarefa. O fluxo de Spec-Driven Development está em `docs/specs/README.md`.
- `docs/arquitetura.md`: tecnologias, pastas, camadas e pontos em aberto.
- `docs/roadmap.md`: etapas até a entrega, pontos de controle e o que vem depois (V2).
- `docs/tarefas.md`: lista de tarefas, ordem em fatias e quem está em cada uma.

## Regras de trabalho

Aprovadas pelo grupo em 15/11/2026.

1. **Decidir junto.** Nada de escopo, biblioteca nova ou mudança de estrutura sem perguntar
   antes. Na dúvida, perguntar.
2. **Uma tarefa por vez**, tirada de `docs/tarefas.md`. Nada fora da tarefa.
3. **Camadas do servidor.** Rota não tem regra. Regra não conhece o Gemini nem o ARASAAC, só as
   interfaces dos provedores. Só o `main.py` escolhe o provedor. O `pytest` confere as
   camadas (`tests/test_architecture.py`).
4. **Camadas da tela.** Componente não chama a API direto, usa o cliente em `shared`.
   Uma funcionalidade não importa de dentro de outra.
5. **Arquivo pequeno.** Uma responsabilidade por arquivo. Passou de 200 linhas, dividir.
6. **Idioma.** Código em inglês. Interface e documentos em português.
7. **Toda tarefa:** spec aprovada, ramo próprio, teste do servidor com o identificador do
   critério de aceite, rodar e conferir, commit, pedido de revisão listando os critérios
   cumpridos.
8. **Segredos.** Nenhuma chave no código. Segredos em `.env`, fora do Git.
9. **Explicar.** Ao terminar, explicar em português o que foi feito e por quê, para o grupo
   conseguir defender.
10. **Documentos em dia.** Se uma decisão mudar, atualizar os documentos.

## Convenções do Git

- Repositório: https://github.com/eiq03/adapta-ia
- Ramos no formato `tipo/tNN-descricao`, por exemplo `feat/t03-upload-imagem`.
- Mensagens de commit em português.
- O ramo entra em `main` por pedido de revisão. Exceção temporária: até o fim do projeto, a IA revisa o próprio pedido (camadas, specs, testes, documentos)
  e junta na `main`, sem esperar outra pessoa. No fim, o grupo revisa tudo à mão (decisão de
  16/11/2026).
- O pedido de revisão aponta sempre para a `main`. Ramo nunca usa outro ramo de tarefa como
  base (foi assim que o pedido #3 caiu fora da `main`).

## Estrutura

- `frontend/`: React + TypeScript + Tailwind, organizado por funcionalidade em
  `src/features/`, com o que é comum em `src/shared/`.
- `backend/`: Python + FastAPI, organizado por camada em `app/` (`api`, `services`,
  `ai_providers`, `readers`, `models`), com testes em `tests/`.

## Estado atual

Atualizado em 18/11/2026. As specs 001 a 007 estão implementadas e publicadas; 29 das 30
tarefas estão concluídas (até a T27, adicionar imagem em qualquer questão). Falta a T21 (testes com materiais reais,
gravação das respostas de reserva, vídeo e ensaio), na tarde de 18/11, seguindo
`docs/roteiro-demonstracao.md`.

- Site: https://adapta-ai-d5ax.onrender.com
- Servidor: https://adapta-ia.onrender.com (com o Gemini; `GET /health` diz qual IA está ligada)
- Publicar: no Render, **Manual Deploy** → **Deploy latest commit** em cada serviço (seção 6
  da arquitetura). Não há publicação automática.
- Testes: 178 no servidor (`pytest`); a tela é conferida à mão no navegador.

Apresentação na quarta-feira, 18/11/2026, às 19h; funcionalidades congeladas ao meio-dia.
Depois disso, só correção de erro, sempre publicada de novo nos dois serviços.

Foco do produto: prova fotografada em branco. Atividades e conteúdos também são aceitos.
