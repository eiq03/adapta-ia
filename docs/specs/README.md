# Specs — como o grupo usa o Spec-Driven Development

## O fluxo

```
constituicao.md ──> specs/NNN-*.md ──> arquitetura.md ──> tarefas.md ──> código + testes
 (princípios)       (o quê e por quê)   (como: plano,      (passos)        (cumpre os
                                         dados, contrato)                   critérios)
        ^                  |                                                    |
        |                  └─────── mudou o comportamento? a spec muda antes ───┘
        └── toda spec e todo plano são conferidos contra a constituição
```

| Spec Kit | No nosso projeto |
|---|---|
| `constitution.md` | `docs/constituicao.md` |
| `specs/NNN/spec.md` | `docs/specs/NNN-nome.md` (um arquivo por funcionalidade) |
| `plan.md`, `data-model.md`, `contracts/` | `docs/arquitetura.md` (um plano para o sistema todo; contrato na seção 10) |
| `research.md` | `docs/pesquisa-t00.md` (resultado da T00) |
| `tasks.md` | `docs/tarefas.md` |
| `/clarify` | marcadores `[PRECISA ESCLARECER]` na spec, resolvidos pelo grupo |
| `/analyze` | os portões da constituição |

Escrevemos os documentos à mão, na mesma estrutura e com os mesmos nomes de etapa, sem
instalar a ferramenta (decisão de 15/11/2026).

## Estados de uma spec

`rascunho` → `aprovada` → `implementada`.

- **Aprovada:** o grupo aprovou o pedido de revisão da spec e ela passou no portão da
  constituição.
- **Implementada:** todos os critérios foram cumpridos e os testes passam.

## Identificadores e rastreabilidade

- Critério de aceite: `CA-NNN-MM`. Exemplo: `CA-001-04` é o critério 4 da spec 001.
- Regra: `R-NNN-MM`.
- Todo critério diz como é conferido:
  - `[teste]`: teste automático no servidor, com o identificador no nome da função. Exemplo:
    `test_ca_001_04_missing_question_creates_warning`.
  - `[manual]`: conferido no navegador antes do pedido de revisão.
- O caminho completo é: requisito (RF) → spec → critério (CA) → tarefa (T) → teste.

## Lista de specs da E1

| Spec | Funcionalidade | RFs | Tarefas | Estado |
|---|---|---|---|---|
| [001](001-adaptar-material.md) | Adaptar material (imagem ou texto) | RF-01, 04, 05, 06, 08, 09, 19, 26, 27 | T00, T03, T04, T05, T06, T08a, T10, T12, T22 | aprovada |
| [002](002-powerpoint.md) | Adaptar slides de PowerPoint | RF-02, 03 | T07, T08b, T11 | adiada (V2) |
| [003](003-perfil-do-aluno.md) | Perfil do aluno | RF-07, 08 | T18 | aprovada |
| [004](004-revisar-folha.md) | Revisar a folha | RF-10, 11, 13 | T13, T14, T16 | aprovada |
| [005](005-nova-versao.md) | Nova versão a pedido | RF-12 | T09, T15 | aprovada |
| [006](006-imprimir.md) | Imprimir e baixar PDF | RF-14, 15, 16 | T17 | aprovada |
| [007](007-historico.md) | Histórico | RF-17 | T19 | aprovada |

A ordem de queda, se faltar tempo, é: 005, depois 003.

## Modelo de spec

Copie este modelo para criar uma spec nova.

```markdown
# NNN — Nome da funcionalidade

- **Estado:** rascunho
- **Requisitos:** RF-xx
- **Tarefas:** Txx
- **Depende de:** specs NNN

## Objetivo
Uma ou duas frases: que problema do professor isso resolve.

## Fora do escopo
O que parece fazer parte, mas não faz.

## História
Como professor, ... para ...

## Critérios de aceite
- **CA-NNN-01** [teste] Dado ..., quando ..., então ...
- **CA-NNN-02** [manual] Dado ..., quando ..., então ...

## Regras
- **R-NNN-01** ...

## Erros e casos de borda
| Situação | O que o professor vê |
|---|---|

## Dados
Quais partes do contrato (arquitetura, seção 10) esta spec usa.

## Em aberto
- [PRECISA ESCLARECER] ...
```
