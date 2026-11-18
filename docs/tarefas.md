# Adapta Aí — Tarefas

> Documento da fase 3. Lista o trabalho da entrega (E1), na ordem combinada.
> O que o sistema faz está em [especificacao.md](especificacao.md); como ele é organizado,
> em [arquitetura.md](arquitetura.md).

- **Apresentação:** quarta-feira, 18/11/2026, às 19h.
- **Congelamento:** 18/11 ao meio-dia. Depois disso, só correção de erro, ensaio, gravação
  das respostas de reserva e vídeo da demonstração.
- **Equipe:** 5 pessoas.
- **Ordem:** fatia fina primeiro. Cada fatia termina com algo que funciona e dá para mostrar.
- **Divisão:** próxima tarefa livre. Qualquer pessoa do grupo pega a próxima tarefa cujas
  dependências estejam concluídas. As frentes abaixo são uma sugestão para as 5 pessoas.
- **Se faltar tempo:** cai primeiro a nova versão a pedido (T09 e T15, spec 005); depois, os
  perfis de aluno (T18, spec 003).
- **Spec antes do código:** toda tarefa pertence a uma spec em [specs/](specs/README.md). A
  tarefa só começa quando a spec dela está `aprovada` (portões da
  [constituição](constituicao.md)). O pedido de revisão lista os critérios de aceite (CA)
  que a tarefa cumpre.

## Como usar esta lista

1. Escolha uma tarefa com estado `livre`, com as dependências `concluída` e com a spec
   `aprovada`.
2. Crie o ramo da tarefa (formato `tipo/tNN-descricao`).
3. No primeiro commit do ramo, escreva seu nome em **Responsável**, mude o **Estado** para
   `em andamento` e envie o ramo ao GitHub, para os outros verem.
4. Faça a tarefa seguindo as regras do `CLAUDE.md`.
5. Ao abrir o pedido de revisão (sempre com base na `main`), mude o estado para `em revisão`.
6. Quando o pedido for juntado, o estado passa a `concluída`. Até o fim do projeto, a IA
   revisa e junta sem esperar outra pessoa; no fim, o grupo revisa tudo à mão.

Os passos 3, 5 e 6 são uma proposta de como marcar; o grupo pode ajustar.

## Frentes sugeridas (5 pessoas)

As specs 001 a 007 foram aprovadas em 16/11/2026. Antes das frentes, o grupo fecha os
acordos da etapa E0 do [roadmap](roadmap.md).

O contrato (T03) é o que destrava todas as frentes. Com o exemplo do contrato pronto, tela e
servidor andam sem esperar um pelo outro.

| Frente | Sequência |
|---|---|
| P1: servidor núcleo | T01 → T04 → T08a → T09 |
| P2: IA | T00 → T05 → T22 |
| P3: tela de entrada | T02 → T10 → T14 → T19 |
| P4: folha | T02 (junto com P3) → T12 → T13 → T16 → T17 → T18 → T15 (a T12 começa com o exemplo do contrato, antes do servidor) |
| P5: ARASAAC, PowerPoint e publicação | T20a → T06 → T07 → T08b → T11 → T20b |

O calendário, as etapas e os pontos de controle (o que cortar se atrasar) estão no
[roadmap](roadmap.md).

## Quadro

| Tarefa | Título | Fatia | Depende de | Responsável | Estado |
|---|---|---|---|---|---|
| T00 | Prova rápida do Gemini | 1 | a chave | Gabriel | concluída |
| T01 | Esqueleto do servidor | 1 | — | Gabriel | concluída |
| T02 | Esqueleto da tela | 1 | — | Gabriel | concluída |
| T20a | Publicar o esqueleto | 1 | T01, T02 | Gabriel | concluída |
| T03 | Formato dos dados | 1 | T00 (resultado) | Gabriel | concluída |
| T04 | Contrato de IA, IA simulada e regra de adaptar | 1 | T01, T03 | Gabriel | concluída |
| T06 | Pictogramas ARASAAC | 1 | T01, T03 | Gabriel | concluída |
| T08a | Rota de adaptar: texto e imagem | 1 | T04, T06 | Gabriel | concluída |
| T05 | Provedor Gemini | 1 | T04 e a chave | Gabriel | concluída |
| T10 | Enviar imagem e colar texto | 1 | T02, T03 | Gabriel | concluída |
| T12 | Folha adaptada ao lado do original | 1 | T10 | Gabriel | concluída |
| T13 | Editar o texto da folha | 2 | T12 | Gabriel | concluída |
| T14 | Trocar e remover pictograma | 2 | T12, T06 | Gabriel | concluída |
| T16 | Colorido / preto e branco | 2 | T12 | Gabriel | concluída |
| T17 | Imprimir e baixar PDF | 2 | T12 | Gabriel | concluída |
| T07 | Leitor de PowerPoint | 3 | T03 | Gabriel | concluída |
| T08b | Rota de slides | 3 | T07, T08a | Gabriel | concluída |
| T11 | Enviar PowerPoint e escolher slides | 3 | T10, T08b | Gabriel | concluída |
| T19 | Histórico | 4 | T12 | Gabriel | concluída |
| T18 | Perfis de aluno | 4 | T10 | Gabriel | concluída |
| T09 | Nova versão a pedido (servidor) | 5 | T08a | Gabriel | concluída |
| T15 | Nova versão a pedido (tela) | 5 | T12, T09 | Gabriel | concluída |
| T22 | Provedor de respostas gravadas (reserva) | Entrega | T05 | Gabriel | concluída |
| T20b | Publicar a versão final | Entrega | Fatia 1 | Gabriel | concluída |
| T23 | Duas opções de apoio novas | Entrega | T18 | Gabriel | concluída |
| T24 | Pictogramas no sentido da frase | Entrega | T06 | Gabriel | concluída |
| T25 | Exportar e importar perfis | Entrega | T18 | Gabriel | concluída |
| T26 | Pictogramas ambíguos e sensíveis | Entrega | T24 | Gabriel | concluída |
| T27 | Adicionar imagem em qualquer questão | Entrega | T14 | Gabriel | concluída |
| T21 | Testar e roteiro da demonstração | Entrega | Tudo que for entregue | | livre |

Estados: `livre`, `em andamento`, `em revisão`, `concluída`.

## Detalhe das tarefas

Os critérios de "pronto quando" são rascunho da IA. Cada um é confirmado com o grupo no
início da tarefa.

### Fatia 1 — Ponta a ponta: texto ou imagem vira folha

#### T00 — Prova rápida do Gemini
- **Objetivo:** antes de fechar o contrato, testar o Gemini real com 3 materiais reais (pelo
  menos 2 provas em branco fotografadas) e o schema proposto na seção 10 da arquitetura.
- **Pastas:** `backend/scripts/` (script solto, fora das camadas; pode ser apagado depois)
- **Pronto quando:** o grupo sabe se o JSON vem no formato, quanto tempo cada pedido leva, se
  as questões e as alternativas foram mantidas e qual modelo usar; o resultado foi anotado e
  levado para a T03.

#### T01 — Esqueleto do servidor
- **Objetivo:** servidor FastAPI que sobe, com estrutura de pastas, testes e configuração.
- **Pastas:** `backend/`
- **Pronto quando:** o servidor sobe localmente e responde em `/health`; `pytest` roda um
  teste; existe `.env.example` (com `AI_PROVIDER`, `GEMINI_API_KEY`, `GEMINI_MODEL`,
  `ALLOWED_ORIGIN`); o CORS lê a origem permitida; o Ruff passa; há instruções de como rodar.

#### T02 — Esqueleto da tela
- **Objetivo:** projeto React com TypeScript, Tailwind e as páginas vazias.
- **Pastas:** `frontend/`
- **Pronto quando:** o projeto sobe localmente; existem as páginas de início, adaptação,
  histórico e perfis, cada uma com seu endereço; ESLint e Prettier passam; existe o cliente
  da API em `shared`, com o endereço do servidor vindo de `VITE_API_URL`.

#### T20a — Publicar o esqueleto
- **Objetivo:** publicar já no primeiro dia, para os problemas de hospedagem aparecerem cedo.
- **Pronto quando:** a hospedagem foi confirmada com o grupo (recomendação: Render); a tela
  abre num endereço público e chama o `/health` do servidor publicado; a chave está só nas
  variáveis de ambiente do servidor.

#### T03 — Formato dos dados
- **Objetivo:** fechar os campos do contrato (pedido, perfil, adaptação, etapa,
  palavra-chave, erro) e declará-los no servidor e na tela.
- **Pastas:** `backend/app/models/`, `frontend/src/shared/`, `docs/`
- **Ponto de partida:** seção 10 da arquitetura e o resultado da T00.
- **Pronto quando:** os campos foram confirmados com o grupo; os modelos existem dos dois
  lados com os mesmos nomes; existe `docs/contrato-exemplo.json` e um teste do pytest que o
  valida; a seção 10 da arquitetura está atualizada.

#### T04 — Contrato de IA, IA simulada e regra de adaptar
- **Objetivo:** definir o que qualquer provedor de IA precisa saber fazer, criar um provedor
  simulado para testes, escrever o texto do pedido à IA e a regra que monta a adaptação.
- **Pastas:** `backend/app/ai_providers/`, `backend/app/services/`, `backend/tests/`
- **Requisitos:** RF-04, RF-05, RF-08, RF-26, RF-27
- **Pronto quando:**
  - a regra de adaptar funciona com a IA simulada e tem testes;
  - a regra valida a resposta e tenta de novo uma vez se vier inválida;
  - a regra remove palavra-chave que não aparece no texto da etapa;
  - a regra gera o aviso `MISSING_QUESTION`;
  - o texto do pedido traz as regras de prova (arquitetura, seção 7);
  - nenhum arquivo de `services` menciona o Gemini.

#### T06 — Pictogramas ARASAAC
- **Objetivo:** buscar pictogramas por palavra em português e devolver alternativas.
- **Pastas:** `backend/app/pictogram_providers/`, `backend/app/services/`, `backend/app/api/`,
  `backend/tests/`
- **Requisitos:** RF-06, e a parte de servidor de RF-11 e RF-13
- **Pronto quando:**
  - a busca usa a palavra de busca e, sem resultado, a palavra exibida;
  - devolve a melhor opção e as alternativas;
  - as buscas de uma adaptação rodam em paralelo e ficam em cache na memória;
  - palavra sem resultado não causa erro;
  - os testes não dependem da internet.

#### T08a — Rota de adaptar: texto e imagem
- **Objetivo:** rota que recebe texto colado ou imagem, mais o tipo de material e o perfil, e
  devolve a adaptação com pictogramas.
- **Pastas:** `backend/app/api/`, `backend/app/readers/`, `backend/tests/`
- **Requisitos:** RF-01, RF-19
- **Pronto quando:** a rota funciona com a IA simulada; recusa arquivo acima de 20 MB e
  formato não aceito com o erro padrão do contrato; tem testes.

#### T05 — Provedor Gemini
- **Objetivo:** implementar o contrato de IA usando o Gemini, para texto e imagem, com saída
  estruturada.
- **Pastas:** `backend/app/ai_providers/`
- **Depende de:** um membro ter criado a chave no Google AI Studio.
- **Pronto quando:**
  - com a chave no `.env`, uma adaptação real funciona de ponta a ponta;
  - o pedido à IA inclui as descobertas 5, 6, 7, 10, 12 e 14 da
    [pesquisa da T00](pesquisa-t00.md) (texto-base mantido, figura sinalizada, palavra de
    busca pelo sentido, nenhuma palavra-chave que seja resposta possível);
  - os testes com o Gemini real respeitam a cota (20 pedidos por dia por chave);
  - os erros do Google viram os códigos da seção 7 da arquitetura, com tempo-limite de
    90 s (R-001-09);
  - sem a chave, o sistema segue funcionando com a IA simulada;
  - a chave não aparece no código nem no Git.

#### T10 — Enviar imagem e colar texto
- **Objetivo:** tela em que o professor escolhe o tipo de material, envia uma imagem ou cola
  um texto e pede a adaptação.
- **Pastas:** `frontend/src/features/adaptation/`
- **Requisitos:** RF-01, RF-19, RF-26
- **Pronto quando:**
  - o tipo de material vem marcado como "Prova";
  - a imagem é reduzida no navegador antes do envio (arquitetura, seção 6);
  - enquanto as opções de apoio não vêm do perfil (T18), a tela mostra as 5 opções e o campo
    de observações com a frase "Não escreva o nome do aluno";
  - o professor vê o andamento e recebe o resultado ou a mensagem de erro do servidor.

#### T12 — Folha adaptada ao lado do original
- **Objetivo:** mostrar o original e a folha adaptada lado a lado, com etapas e pictogramas.
- **Pastas:** `frontend/src/features/sheet/`
- **Requisitos:** RF-09, RF-27
- **Pronto quando:**
  - a folha mostra título, etapas numeradas, questões com o número do original e as
    alternativas, e pictogramas com legenda;
  - o original mostra a imagem ou o texto e o texto lido pela IA;
  - o quadro "O que mudou" e os avisos aparecem fora da folha;
  - funciona em tela de computador;
  - pode começar com `docs/contrato-exemplo.json` antes de o servidor ficar pronto.

### Fatia 2 — Revisar e levar para a sala

#### T13 — Editar o texto da folha
- **Pastas:** `frontend/src/features/sheet/`
- **Requisitos:** RF-10
- **Pronto quando:** o professor clica em uma frase ou alternativa, reescreve e a mudança
  permanece na folha. Também remove a figura recortada de uma questão, que passa a mostrar o
  aviso `NEEDS_FIGURE` (CA-004-26, incluído aqui em 16/11/2026: não estava em nenhuma tarefa).

#### T14 — Trocar e remover pictograma
- **Pastas:** `frontend/src/features/sheet/`
- **Requisitos:** RF-11
- **Pronto quando:** ao clicar em um pictograma, aparecem as alternativas do ARASAAC para
  aquela palavra; o professor escolhe outra ou remove a imagem.

#### T16 — Colorido / preto e branco
- **Pastas:** `frontend/src/features/sheet/`
- **Requisitos:** RF-13
- **Pronto quando:** um botão alterna todos os pictogramas da folha entre as duas versões.

#### T17 — Imprimir e baixar PDF
- **Pastas:** `frontend/src/features/sheet/`
- **Requisitos:** RF-14, RF-15, RF-16
- **Pronto quando:** a impressão sai em A4 só com a folha adaptada (sem o quadro "O que
  mudou" nem os avisos); a impressão espera os pictogramas carregarem; o botão de PDF abre a
  impressão do navegador; o crédito do ARASAAC aparece no rodapé.
- **Notas (16/11/2026):**
  - O crédito vai na margem de baixo de cada página (`@page @bottom-center` no `index.css`).
    Conferido no Chrome. Firefox e Safari: a verificar.
  - O texto do crédito (R-006-01) foi conferido em 17/11 na página de termos de uso do
    ARASAAC e alinhado ao segundo modelo oficial. Falta testar a impressão no Firefox
    (não instalado no computador da IA): alguém do grupo confere o rodapé no Firefox.

### Fatia 3 — PowerPoint

#### T07 — Leitor de PowerPoint
- **Objetivo:** extrair o texto de cada slide de um `.pptx`. As figuras ficam para a V2.
- **Pastas:** `backend/app/readers/`, `backend/tests/`
- **Requisitos:** RF-02
- **Pronto quando:** dado um `.pptx`, o leitor devolve a lista de slides com número, título e
  texto; arquivo inválido gera erro claro; tem testes com um arquivo de exemplo.
- **Notas (16/11/2026):**
  - Os arquivos de exemplo são gerados dentro do teste (`tests/pptx_factory.py`), sem binário
    no repositório.
  - O título do slide não se repete no texto. A T08b manda os dois para a IA.
  - O texto segue a ordem de leitura (de cima para baixo, da esquerda para a direita), e não
    a ordem em que as caixas foram criadas.

#### T08b — Rota de slides
- **Pastas:** `backend/app/api/`, `backend/tests/`
- **Requisitos:** RF-02, RF-03
- **Pronto quando:** `POST /api/slides` devolve a lista de slides do arquivo enviado; a rota
  de adaptar aceita os slides escolhidos como uma única adaptação e recusa mais de 5
  (`TOO_MANY_SLIDES`); tem testes.

#### T11 — Enviar PowerPoint e escolher slides
- **Pastas:** `frontend/src/features/adaptation/`
- **Requisitos:** RF-02, RF-03
- **Pronto quando:** o professor envia o arquivo, vê a lista de slides por título e texto,
  marca até 5 e recebe uma folha adaptada.

### Fatia 4 — Guardar

#### T19 — Histórico
- **Pastas:** `frontend/src/features/history/`
- **Requisitos:** RF-17
- **Pronto quando:** cada adaptação é salva no navegador com original e adaptada; o
  professor dá nome, busca pelo nome, reabre para editar e apaga.
- **Notas (16/11/2026):**
  - Acesso ao IndexedDB só em `shared/storage` (pacote `idb` 8.0.4, já previsto na
    arquitetura). O banco `adapta-ai` está na versão 1, só com `history`; a T18 sobe para a 2
    e cria `profiles` no mesmo `upgrade`.
  - `pages/AdaptationWorkspace.tsx` junta a folha e o histórico, porque uma funcionalidade
    não importa de outra. Serve à adaptação nova e à reaberta (`/historico/:id`).
  - Mensagens de navegador bloqueado e de espaço cheio estão no código, mas não foram
    testadas: o navegador do teste não deixa simular os dois casos.

#### T18 — Perfis de aluno
- **Pastas:** `frontend/src/features/profiles/`
- **Requisitos:** RF-07, RF-08
- **Pronto quando:**
  - o professor cria, edita e apaga perfis com apelido, as 5 opções de apoio e observações;
  - o campo de observações traz a frase "Não escreva o nome do aluno";
  - o professor escolhe um perfil ao adaptar;
  - o apelido não é enviado ao servidor.
- **Se não der tempo:** a tela de adaptação mantém as opções de apoio a cada vez (como na T10).
- **Notas (16/11/2026):**
  - O banco `adapta-ai` subiu para a versão 2, com `profiles`. O histórico da versão 1 é
    mantido (conferido no navegador).
  - A lista de perfis é lida por `shared/profile/useProfileList.ts`, usado pela página de
    perfis e pelo formulário de adaptação (uma funcionalidade não importa de outra).
  - `toStudentProfile` monta o perfil enviado campo a campo, para o apelido nunca vazar.

### Fatia 5 — IA a pedido

#### T09 — Nova versão a pedido (servidor)
- **Pastas:** `backend/app/services/`, `backend/app/api/`, `backend/tests/`
- **Requisitos:** RF-12
- **Pronto quando:** a rota recebe a adaptação atual (já com as edições do professor), o
  perfil e o pedido, e devolve uma nova versão; tem testes com a IA simulada.

#### T15 — Nova versão a pedido (tela)
- **Pastas:** `frontend/src/features/sheet/`
- **Requisitos:** RF-12
- **Decidido em 16/11:** a tela envia a folha já editada, então as edições manuais entram no
  pedido à IA. Antes de substituir, a tela pede confirmação.
- **Pronto quando:** o professor escreve um pedido, confirma e a folha é substituída pela
  nova versão.
- **Feito em 17/11:** campo "Pedir uma nova versão" acima da folha (`RevisePanel`), com até 300
  caracteres e confirmação "A folha atual será substituída", que avisa que trocas de
  pictograma podem se perder (R-005-02). O perfil enviado é o da adaptação, guardado no
  histórico. A nova versão é salva no histórico como qualquer edição. Conferido no navegador
  com a IA simulada: o pedido leva o texto corrigido (CA-005-20) e, com erro de cota, a folha
  fica como estava (CA-005-21). Não testado com o Gemini (cota).

### Entrega

#### T22 — Provedor de respostas gravadas (reserva)
- **Objetivo:** provedor `replay` que devolve respostas reais do Gemini gravadas no ensaio,
  para a apresentação funcionar mesmo se a cota acabar.
- **Pastas:** `backend/app/ai_providers/`, `backend/tests/`
- **Pronto quando:** com `AI_PROVIDER=replay`, os materiais do roteiro devolvem as respostas
  gravadas; material não gravado devolve erro claro; a tela mostra "modo demonstração".
- **Feito em 17/11:** `replay.py` com o gravador (`AI_RECORD=on`, junto do Gemini) e o
  repetidor (`AI_PROVIDER=replay`). Novo código de erro `AI_NOT_RECORDED`. O selo de status
  foi para o cabeçalho, em todas as páginas. 8 testes em `tests/test_replay_provider.py`.
  Conferido no navegador: selo, erro de material não gravado e o mesmo resumo para a mesma
  foto. **Ainda falta gravar** as respostas do roteiro no ensaio (seção 7 da arquitetura);
  sem isso, o modo `replay` só devolve `AI_NOT_RECORDED`.

#### T20b — Publicar a versão final
- **Como:** em cada serviço do Render, **Manual Deploy** → **Deploy latest commit** (não há
  deploy automático; ver arquitetura, seção 6). Trocar `AI_PROVIDER` para `gemini` no servidor.
- **Pronto quando:** a versão congelada está publicada e uma adaptação real funciona nela.
- **Feito em 17/11:** os dois serviços publicados no commit `dfa9f0d` (PR #33), com
  `AI_PROVIDER=gemini` no servidor. Antes: 164 testes, ruff, lint, tipos e build passando.
  Adaptação real no site publicado, com texto colado de 2 questões e "lê pouco": as duas
  questões e as três alternativas mantidas, palavras-chave só nos enunciados, 3 pictogramas
  carregados e "O que mudou" preenchido (1 pedido da cota). Correção feita depois do
  congelamento precisa ser publicada de novo nos dois serviços.

#### T23 — Duas opções de apoio novas
- **Pedido em 17/11:** o grupo propôs 8 opções; entraram 2 (decisão na spec 003).
- **Pastas:** `backend/app/models/`, `backend/app/ai_providers/prompt.py`,
  `frontend/src/shared/`, `frontend/src/features/sheet/`
- **Pronto quando:** "interpreta a linguagem de forma literal" e "precisa de previsibilidade" estão
  no perfil e no pedido à IA (CA-001-31, CA-001-32); a folha mostra o total de questões e
  "Questão 2 de 5" (CA-001-33); perfis antigos abrem com as opções novas desmarcadas.
- **Feito em 17/11:** 3 testes novos (167 no total). Conferido no navegador com a IA simulada:
  perfil antigo abre com as opções novas desmarcadas; o pedido leva as opções sem o apelido;
  a folha mostra "Esta folha tem 2 questões." e "Questão 1 de 2". Com o Gemini real (1 pedido),
  prova de 3 questões com as duas opções: "Dê uma olhada no texto" saiu; a expressão "pulga
  atrás da orelha", que era o que a questão 2 avaliava, ficou; cada questão começou com
  "Marque 1 alternativa." ou "Escreva 1 resposta."; nenhuma alternativa mudou.

#### T24 — Pictogramas no sentido da frase
- **Pedido em 17/11:** imagens sem relação com a questão ("pata" de aranha virou perna de
  cavalo; "alimento" da planta virou comida com maçã). Junto: nomes mais formais das opções
  de 17/11 ("Interpreta a linguagem de forma literal", "Precisa de previsibilidade").
- **Pastas:** `backend/app/ai_providers/prompt.py`, `backend/app/pictogram_providers/`,
  `backend/app/services/pictogram_service.py`, `frontend/src/shared/profile/`
- **Pronto quando:** regra R-001-10 no pedido à IA e na busca; testes com o identificador;
  as 3 provas reais rodadas de novo e comparadas.
- **Feito em 17/11:** 3 testes novos (170 no total). As 3 provas reais rodaram com o Gemini
  (3 pedidos), com o perfil "lê pouco" e "mais imagens"; respostas em
  `provas-teste/fotos/resultados-pictogramas-17-11/`, fora do repositório. Resultado em
  R-001-10. Descartado: gerar imagens com IA (sem cota gratuita para modelos de imagem
  [a verificar], estilo diferente do ARASAAC, mais lento, sem tempo de testar antes do
  congelamento) e uma segunda chamada à IA para conferir os desenhos (dobra o uso da cota).
  Ficam para a V2.

#### T25 — Exportar e importar perfis
- **Pedido em 17/11:** os perfis precisam ficar guardados sem o professor refazer. Já ficam no
  navegador (T18); faltava cópia de segurança e levar para outro computador. Banco no
  servidor ficou para a V2 (R-003-04).
- **Pastas:** `frontend/src/features/profiles/`, `frontend/src/shared/storage/`
- **Pronto quando:** CA-003-08 conferido no navegador.
- **Feito em 17/11:** conferido no navegador local: exportar gera
  `perfis-adapta-ai-AAAA-MM-DD.json`; com os perfis apagados, importar trouxe 2 perfis (um
  deles de arquivo sem as opções de 17/11, que vieram desmarcadas, e com um campo a mais,
  descartado); arquivo inválido e texto que não é JSON mostram a mensagem e não mudam nada.

#### T26 — Pictogramas ambíguos e sensíveis
- **Pedido em 17/11:** numa prova de Matemática, "balas" (doce) virou o desenho de um projétil
  de arma.
- **Pastas:** `backend/app/pictogram_providers/arasaac.py`, `backend/app/ai_providers/prompt.py`,
  `frontend/src/features/sheet/KeywordPictograms.tsx`
- **Pronto quando:** R-001-10 (nome de Portugal e palavra ambígua) e R-001-11 (temas
  sensíveis) com testes; CA-004-27 conferido no navegador.
- **Feito em 17/11:** 8 testes novos (178 no total). 2 pedidos ao Gemini, servidor local:
  "balas" → caramelo (doce), "ônibus" → autocarro (exemplos da própria regra, por isso o
  segundo teste); trem, geladeira, suco, sorvete, manga e pena certos sem estar na regra;
  "pedaço" → fatia (fraco); "banco" de praça → agência (agora sem imagem). Medido nos termos
  já testados: a regra de ambiguidade barra "banco" e "Terra" (errados) e tira "trabalhador"
  (certo). No navegador: removi um pictograma, apareceu "+ texto" só na tela, escolhi de
  novo e a imagem voltou.
- **Corrigido junto:** linha longa em `prompt.py` que o `ruff check` acusava desde o PR #36.

#### T27 — Adicionar imagem em qualquer questão
- **Pedido em 18/11 (exceção ao congelamento, ver roadmap):** o professor pode pôr imagem do
  ARASAAC em qualquer questão ou instrução, mesmo sem a opção "precisa de mais imagens".
- **Pastas:** `frontend/src/features/sheet/`
- **Decidido em 18/11:** questões e instruções (o texto de apoio fica igual ao original); até
  3 pictogramas por etapa; embaixo da imagem, a palavra buscada.
- **Pronto quando:** CA-004-28 conferido no navegador.
- **Feito em 18/11:** conferido com a IA simulada: "+ imagem" na instrução e nas 2 questões,
  não no texto de apoio nem nas alternativas; a janela abre como "Adicionar imagem", com a dica
  e sem "Remover"; "computador" e "livro" entraram com a palavra embaixo; com 3, o botão some.
  Uma nova versão a pedido busca os pictogramas de novo, então as imagens postas à mão podem
  se perder (o aviso da spec 005 já diz isso).

#### T21 — Testar e roteiro da demonstração
- **Objetivo:** testar com materiais reais e preparar a apresentação.
- **Pronto quando:**
  - o grupo testou com pelo menos uma prova fotografada, um PowerPoint e um texto reais;
  - os problemas encontrados foram registrados;
  - as respostas de reserva foram gravadas (T22);
  - existe um vídeo da demonstração;
  - existe um roteiro, incluindo abrir o `/health` antes de começar.
- **Andamento em 17/11:**
  - Roteiro escrito em `docs/roteiro-demonstracao.md` (rascunho para o grupo ajustar).
  - Testado com o Gemini no servidor publicado: PowerPoint de aula
    (`provas-teste/powerpoint/ciclo-da-agua.pptx`, 3 slides): 3 questões mantidas, notas do
    professor não lidas, palavras-chave água, nuvens, mar e chuva; nova versão a pedido sobre
    essa folha: a correção feita à mão ficou, o texto de apoio virou frases curtas. Na nova
    versão, as questões 1 e 2 ficaram sem palavra-chave (antes tinham).
  - Texto colado (T20b) e 3 provas fotografadas (T24) já testados com o Gemini em 17/11.
  - Falta: testes do grupo com materiais próprios, gravação, vídeo e ensaio.
