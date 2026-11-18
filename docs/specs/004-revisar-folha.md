# 004 — Revisar a folha

- **Estado:** aprovada (16/11/2026)
- **Requisitos:** RF-10, RF-11, RF-13
- **Tarefas:** T13, T14, T16 (e a rota de pictogramas da T06)
- **Depende de:** spec 001

## Objetivo

O professor corrige o que a IA errou antes de imprimir (princípio P2 da constituição).

## Fora do escopo

- Adicionar, apagar e reordenar etapas (V2).
- Desfazer várias edições. Na E1 não há desfazer.

## História

Como professor, reescrevo frases, troco ou removo pictogramas e escolho entre colorido e
preto e branco, para a folha ficar certa para o meu aluno.

## Critérios de aceite

### Servidor

- **CA-004-01** [teste] Dada uma palavra, quando a tela pede as opções de pictograma, então a
  resposta traz até 10 opções do ARASAAC, com a melhor primeiro.
- **CA-004-02** [teste] Dada uma palavra sem resultado, então a resposta é uma lista vazia,
  sem erro.
- **CA-004-03** [teste] Dada uma palavra vazia ou com mais de 50 caracteres, então a resposta
  é `INVALID_INPUT`.

### Tela

- **CA-004-20** [manual] Clico no texto de uma etapa ou de uma alternativa, reescrevo e
  confirmo: a mudança aparece na folha.
- **CA-004-21** [manual] Clico num pictograma e vejo as opções do ARASAAC para aquela
  palavra. Escolho outra e ela substitui a anterior.
- **CA-004-22** [manual] Na mesma janela, posso buscar outra palavra (por exemplo, trocar
  "marcar" por "lápis") e escolher entre os resultados.
- **CA-004-23** [manual] Removo um pictograma: a palavra continua no texto, sem imagem.
- **CA-004-24** [manual] Um botão alterna todos os pictogramas da folha entre colorido e
  preto e branco.
- **CA-004-27** [manual] (17/11) Uma palavra-chave sem pictograma (removido pelo professor ou
  deixado sem imagem pelo servidor, R-001-10) aparece só na tela como "+ palavra", tracejada.
  Clico, escolho um pictograma e ele entra na folha. Na impressão, o "+ palavra" não sai.
- **CA-004-28** [manual] (18/11) Toda questão e toda instrução com menos de 3 pictogramas
  mostra, só na tela, o botão tracejado "+ imagem", mesmo sem a opção "precisa de mais
  imagens". Clico, busco uma palavra, escolho um pictograma e ele entra na etapa, com a palavra
  buscada embaixo. Com 3 pictogramas, o botão some. O texto de apoio não tem o botão (R-001-07).
  Na impressão, o botão não sai.
- **CA-004-26** [manual] Removo a figura recortada de uma questão: a questão continua, sem a
  figura, e aparece o aviso `NEEDS_FIGURE` para aquela questão.
- **CA-004-25** [manual] As edições ficam salvas: se a spec 007 estiver pronta, ao reabrir a
  adaptação pelo histórico, as mudanças estão lá.

## Regras

- **R-004-01** As edições mudam a `Adaptation` guardada na tela; o servidor não guarda nada.
- **R-004-02** Colorido ou preto e branco é uma escolha da tela, não um dado da adaptação.
- **R-004-03** Se o professor apagar do texto a palavra de um pictograma, o pictograma
  continua até ele remover. A tela não tenta adivinhar.

## Erros e casos de borda

| Situação | O que o professor vê |
|---|---|
| ARASAAC fora do ar ao buscar opções (`PICTOGRAMS_UNAVAILABLE`) | "Não consegui buscar pictogramas agora. Tente de novo." |
| Texto apagado por inteiro | A etapa fica vazia na folha; a tela avisa "Etapa sem texto" |

## Dados

Arquitetura, seção 10: `Adaptation` e a rota de pictogramas.
