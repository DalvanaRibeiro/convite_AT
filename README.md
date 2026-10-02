# Convite à Aline Trevisoli — Banca final

Convite pessoal da turma **TDS251TPSG**, Técnico em Desenvolvimento de Sistemas do Senac São Leopoldo. React + Vite, CSS responsivo, cartão flutuante, adesivos animados e confetes interativos. Sem backend, sem chaves de API e sem formulário de confirmação de presença.

## 1. Rodar no computador

Instale o **Node.js 22.12 ou superior**. Extraia o ZIP, abra a pasta `convite-banca` no VS Code e abra o terminal nessa pasta (a que contém `package.json`).

```bash
npm ci
npm run dev
```

Abra o endereço que aparecer no terminal. Para encerrar, pressione `Ctrl + C`.

## 2. Personalizar

Edite `src/data/invitation.js`: nome, turma, mensagem, data, horário, local e sala. A data foi preenchida como **08/10/2026**, conforme o encerramento informado. **Horário e sala estão a confirmar; preencha-os antes de enviar o convite.**

Cores e estilos: `src/styles/global.css`. Metadados do link: `index.html`. O arquivo de dados concentra o conteúdo, mas a arte de capa e a frase inicial usam o nome Aline diretamente em `src/App.jsx`; ao trocar a destinatária, atualize também esses trechos e os metadados.

## 3. Deploy na Vercel com GitHub

1. Crie um repositório no GitHub e envie o conteúdo desta pasta. Não envie `node_modules` (já ignorado).
2. Acesse https://vercel.com/new e importe o repositório.
3. Se a pasta estiver dentro de outra pasta no repositório, selecione `convite-banca` como **Root Directory**. Se `package.json` estiver na raiz, mantenha a raiz.
4. Use **Framework: Vite**, **Build Command: npm run build**, **Output Directory: dist**, **Install Command: npm ci** e Node.js **22.x ou superior**.
5. Clique em **Deploy**. Abra a URL gerada e confira no celular antes de enviar à Aline.

O `vercel.json` já configura framework, build e saída. Não são necessárias variáveis de ambiente.

Alternativa pelo terminal (requer login na sua conta Vercel):

```bash
npx vercel
npx vercel --prod
```

Documentação oficial: https://vercel.com/docs/frameworks/frontend/vite

## 4. Verificar a versão de produção

```bash
npm run build
npm run preview
```

`dist/` é gerado automaticamente. O ZIP inclui o código-fonte e o lockfile; as dependências são instaladas com `npm ci`.

## Estrutura

- `src/App.jsx`: seções do convite e interação de abertura.
- `src/components/Icon.jsx`: ícones SVG locais.
- `src/data/invitation.js`: dados e mensagem.
- `src/styles/global.css`: layout, animações, responsividade e impressão.
- `src/main.jsx`: entrada React.
- `public/favicon.svg`: ícone do site.
- `index.html`: título e descrição para o navegador.
- `vite.config.js`: configuração Vite.
- `vercel.json`: configuração de deploy.
- `package-lock.json`: versões reproduzíveis das dependências.

## Acessibilidade e comportamento

HTML semântico, foco visível, link de salto ao conteúdo, contraste legível e respeito a `prefers-reduced-motion`. O botão de abertura leva à mensagem e solta confetes. O botão “Vamos celebrar!” repete a animação. Ambos respeitam a preferência por movimento reduzido; não registram presença e não enviam dados. Google Fonts é opcional: fontes locais de fallback mantêm o convite legível sem conexão com esse serviço. Os demais recursos visuais são CSS e SVG locais.
