# Adapta Aí — Roteiro da demonstração (18/11/2026, 19h)

> Rascunho da IA em 17/11, para o grupo ajustar no ensaio (T21). O tempo de cada parte é uma
> sugestão: o tempo total da apresentação [a verificar com o professor].

- Site: https://adapta-ai-d5ax.onrender.com
- Servidor: https://adapta-ia.onrender.com/health
- Materiais: pasta `provas-teste/` (fora do repositório).

## 1. Antes de começar (18h40)

- [ ] Usar o **mesmo computador e o mesmo Chrome** do ensaio de gravação (seção 4).
- [ ] Abrir `/health`. Esperar até 1 minuto (o Render dorme). Deve aparecer `"aiProvider":"gemini"`.
- [ ] Abrir o site. O cabeçalho mostra "Servidor conectado" e **nenhum** selo amarelo.
- [ ] Página **Perfis**: importar `perfis-demonstracao.json` (exportado no ensaio). Conferir o
      perfil "Aluno A".
- [ ] Deixar na área de trabalho: `matematica-7ano-figuras.jpg` e `ciencias-sistema-solar.jpg`.
      O PowerPoint não entra: foi para a V2 (resposta pronta na seção de perguntas difíceis).
- [ ] Abrir em abas: `docs/specs/001-adaptar-material.md` (no GitHub),
      `backend/tests/test_prompt.py` e a seção 4 de `docs/arquitetura.md` (camadas).
- [ ] Vídeo da demonstração aberto num player, pausado no início (última reserva).
- [ ] Contar os pedidos do Gemini usados no dia: a cota é de 20.

## 2. A demonstração

| # | Tempo | Na tela | O que dizer |
|---|---|---|---|
| 1 | 1 min | Página inicial | O problema: adaptar uma prova à mão leva horas. A ideia: foto da prova em branco → folha adaptada, em segundos, e o professor revisa. |
| 2 | 1 min | **Perfis** → "Aluno A" | O perfil tem apelido, 7 opções de apoio e observações. Fica só neste navegador; o apelido nunca vai ao servidor (P3). Dá para exportar uma cópia. |
| 3 | 1 min | **Adaptar** → perfil "Aluno A", tipo Prova, foto `matematica-7ano-figuras.jpg` → **Adaptar** | Enquanto espera (~30 s): a foto é reduzida no navegador e perde o GPS; o servidor manda para a IA com as regras de prova. |
| 4 | 2 min | Resultado: original ao lado da folha | "Esta folha tem N questões", "Questão 2 de 10"; todas as alternativas; a figura recortada da foto junto da questão; o quadro **O que mudou** fora da folha. |
| 5 | 1 min | Clicar num pictograma → buscar outra palavra → escolher | A IA pode errar o desenho; o professor decide (P2). Medimos isso em 3 provas reais (T24). |
| 6 | 1 min | Clicar num texto → reescrever | Toda saída da IA pode ser corrigida à mão. |
| 7 | 1 min | **Pedir uma nova versão**: "Deixe as frases mais curtas." → confirmar | A nova versão parte da folha corrigida. Gasta 1 pedido: pular se a cota estiver baixa. |
| 8 | 1 min | **Baixar PDF** | A4, letra grande, crédito do ARASAAC em toda página (licença CC BY-NC-SA). |
| 9 | 30 s | **Histórico** → reabrir | Tudo salvo neste navegador, sem login. |
| 10 | 2 min | Spec 001, CA-001-31 → `test_prompt.py`, `test_ca_001_31_...` | SDD: cada critério de aceite vira um teste com o mesmo nome. 178 testes no servidor. |
| 11 | 1 min | Diagrama de camadas (arquitetura, seção 4) | Rota sem regra; regra sem Gemini; provedores trocáveis. Foi isso que permitiu a reserva gravada (seção 3). |

O roadmap pedia mostrar um aviso de "questão faltando". Ele só aparece quando a IA perde uma
questão, e isso não dá para provocar na hora. Mostrar o teste
`test_ca_001_07_missing_question_creates_warning` (`backend/tests/test_post_processing.py`), ou
o aviso "depende de uma figura", se aparecer, e explicar a conferência.

## 3. Se algo falhar na hora

```
Gemini real → modo demonstração (respostas gravadas) → vídeo
```

| Sinal | O que fazer |
|---|---|
| "A IA gratuita atingiu o limite" ou "A IA demorou" | Trocar para o modo demonstração (abaixo) e repetir com os **mesmos** materiais e o **mesmo** perfil |
| Servidor não acorda em 2 minutos, ou o modo demonstração também falha | Passar o vídeo |

**Ligar o modo demonstração:**

1. Abrir o painel do Render, serviço `adapta-ia`, aba **Environment**.
2. Mudar `AI_PROVIDER` para `replay` e salvar. O Render publica de novo, em 1 a 2 minutos
   [a verificar no ensaio].
3. O cabeçalho do site passa a mostrar "Modo demonstração: respostas gravadas no ensaio".
   Dizer isso em voz alta.
4. Material diferente do gravado mostra: "Modo demonstração: este material não foi gravado no
   ensaio. Use um material do roteiro."

## 4. Ensaio de gravação (18/11, 13h–15h)

As respostas só são achadas se o pedido for **idêntico**: mesmo material, mesmo tipo, mesmo
perfil e a mesma foto reduzida pelo mesmo navegador.

1. No computador da apresentação, no Git Bash, na pasta `backend`:
   `AI_PROVIDER=gemini AI_RECORD=on .venv/Scripts/python.exe -m uvicorn app.main:app --port 8000`
2. Noutro terminal, na pasta `frontend`: `npm run dev`. Abrir http://localhost:5173 no Chrome.
3. Importar `perfis-demonstracao.json` e rodar os passos 3 e 7 da seção 2. São cerca de
   3 pedidos.
4. Conferir os arquivos novos em `backend/app/ai_providers/replay_answers/`.
5. Fazer commit e pedido de revisão desses arquivos, juntar na `main` e publicar o servidor.
6. Testar o modo demonstração **local**: parar o servidor e subir de novo com
   `AI_PROVIDER=replay`. Repetir os passos: as folhas devem voltar iguais, sem gastar cota.

A nova versão a pedido (passo 7) só é repetida se a folha estiver igual à do ensaio, sem
outras edições antes. Na dúvida, no modo demonstração, pular o passo 7.

## 5. Perguntas difíceis

| Pergunta | Resposta curta | Onde está |
|---|---|---|
| E a privacidade do aluno? | Sem nome; apelido e perfil só no navegador; foto reduzida sem GPS (a HEIC vai sem reduzir); no plano gratuito, o Google pode usar os dados enviados (a V2 prevê plano pago ou outro provedor) | Constituição P3; roadmap V2 |
| A IA pode mudar a prova? | Regras de prova no pedido; o servidor confere questões faltando e avisa; o professor revisa antes de imprimir | Spec 001, R-001-02; P1 e P2 |
| Por que só 7 opções, e não 13? | As outras mudavam o que a prova avalia (inventar alternativas, deduzir o implícito) | Spec 003, decisão de 17/11 |
| E as imagens erradas? | Medimos em 3 provas reais: de ~6 erradas em 39 para 2 em 21; o professor troca | Spec 001, R-001-10 |
| Por que não um banco de dados no servidor? | Exigiria login e levaria diagnóstico para fora do computador; há exportar e importar | Spec 003, R-003-04 |
| Quanto custa? | Zero: Gemini, ARASAAC e Render gratuitos; limite de 20 pedidos por dia | Constituição P4 |
| O que é SDD aqui? | Spec aprovada antes do código; cada critério vira um teste com o mesmo identificador | `docs/specs/README.md` |
| E o PowerPoint? | O leitor de slides está pronto e testado, mas a folha perdia as figuras e virava questões; o professor espera slides de volta. Saiu da tela e volta na V2 com a saída em slides | Spec 002; RF-22, RF-23 |
| E se a IA cair na apresentação? | Provedores trocáveis: o mesmo servidor responde com o que foi gravado no ensaio | Arquitetura, seção 7 |

## 6. Conferência do ensaio (16h–17h)

- [ ] Tempo total cronometrado: ____ min.
- [ ] Cada pessoa sabe sua parte e quem opera o computador.
- [ ] Modo demonstração testado ao menos uma vez (seção 4, passo 6).
- [ ] Vídeo gravado e aberto no computador da apresentação.
- [ ] Impressão testada no Firefox, se alguém do grupo tiver (o rodapé com o crédito).
- [ ] Pedidos do Gemini usados no dia: ____ de 20. Sobram pelo menos 4 para as 19h.
- [ ] Problemas encontrados anotados em `docs/tarefas.md`, na T21.
