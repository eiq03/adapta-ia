# 002 — Adaptar slides de PowerPoint

- **Estado:** adiada para a V2 (18/11/2026). Implementada, mas o botão PowerPoint foi tirado
  da tela: no teste com uma aula real, a folha perdia as figuras dos slides e virava questões.
  O professor espera receber slides. Volta na V2 junto com RF-22 e RF-23 (saída em slides,
  mantendo as figuras). O leitor e a rota do servidor continuam, com os testes.
- **Requisitos:** RF-02, RF-03
- **Tarefas:** T07, T08b, T11
- **Depende de:** spec 001 (a adaptação em si)

## Objetivo

O professor que tem a prova ou a aula em PowerPoint escolhe os slides e recebe uma folha
adaptada, sem precisar copiar e colar o texto.

## Fora do escopo

- Figuras, tabelas como imagem e gráficos dos slides (V2). Só o texto é lido.
- Gerar slides adaptados como saída (V2). A saída é sempre uma folha.
- Arquivos `.ppt` antigos e `.odp`.

## História

Como professor, envio o arquivo `.pptx`, vejo a lista de slides, marco os que formam a
prova e recebo uma folha adaptada.

## Critérios de aceite

### Servidor

- **CA-002-01** [teste] Dado um `.pptx` válido, quando é enviado para a lista de slides,
  então a resposta traz cada slide com número, título e texto, na ordem do arquivo.
- **CA-002-02** [teste] Dado um slide sem título, então o título é o começo do texto do
  slide. Dado um slide sem nenhum texto, então ele vem na lista com o texto vazio.
- **CA-002-03** [teste] Dado um arquivo que não é `.pptx` ou está corrompido, então a
  resposta é `FILE_TYPE`.
- **CA-002-04** [teste] Dado um `.pptx` acima de 20 MB, então a resposta é `FILE_TOO_LARGE`.
- **CA-002-05** [teste] Dados de 1 a 5 slides escolhidos, quando o professor pede a
  adaptação, então o servidor faz **uma** chamada à IA e devolve **uma** `Adaptation`.
- **CA-002-06** [teste] Dados 6 ou mais slides, então a resposta é `TOO_MANY_SLIDES`, sem
  chamar a IA.
- **CA-002-07** [teste] Dados slides escolhidos, então o texto enviado à IA identifica cada
  slide pelo número ("Slide 2: ..."), para a numeração das questões seguir o original.
- **CA-002-08** [teste] Dado um slide com uma tabela e com anotações do apresentador, então
  o texto da tabela aparece no texto do slide, e o das anotações não.

### Tela

- **CA-002-20** [manual] Dado um `.pptx` enviado, então vejo a lista de slides com número,
  título e o começo do texto.
- **CA-002-21** [manual] Quando marco o sexto slide, então a marcação é impedida e vejo
  "Escolha até 5 slides por vez".
- **CA-002-22** [manual] Slides sem texto aparecem desabilitados, com a nota "Este slide não
  tem texto (figuras ainda não são lidas)".
- **CA-002-23** [manual] Quando peço a adaptação, então sigo para a mesma tela de resultado
  da spec 001, com o texto dos slides escolhidos no lado do original.

## Regras

- **R-002-01** Slides marcados juntos formam uma adaptação (uma prova = uma adaptação).
- **R-002-02** O servidor não guarda o arquivo. A lista de slides volta para a tela, e a tela
  envia de volta só o texto dos slides escolhidos.
- **R-002-03** O texto é lido das caixas de texto e das tabelas de cada slide. As anotações
  do apresentador não são lidas: são texto para o professor, não para o aluno.

## Erros e casos de borda

| Situação | Código | O que o professor vê |
|---|---|---|
| Não é `.pptx` ou está corrompido | `FILE_TYPE` | "Não consegui abrir o arquivo. Envie um PowerPoint (.pptx) ou cole o texto." |
| Mais de 5 slides | `TOO_MANY_SLIDES` | "Escolha até 5 slides por vez." |
| Nenhum slide com texto | sem erro | "Este arquivo não tem texto nos slides. Tire uma foto ou cole o texto." |

## Dados

Arquitetura, seção 10: lista de slides e o campo `slides` do pedido de adaptação.

## Esclarecimentos

- 16/11/2026: tabelas são lidas; anotações do apresentador não (R-002-03, CA-002-08).
