# 🧠 Recomendador de Produtos RD Station

O **Recomendador de Produtos RD Station** é um projeto que permite você encontrar uma variedade de produtos da RD Station, cada um projetado para atender às necessidades específicas do seu negócio. De CRM a Marketing, de Conversas a Inteligência Artificial, existe uma solução para ajudar o usuário a alcançar seus objetivos.

## 🛠️ Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias principais:

| Tecnologia     | Descrição                                        |
|----------------|--------------------------------------------------|
| **React.js**   | Framework principal para construção da interface |
| **Tailwind CSS** | Framework de estilos utilitário moderno        |
| **json-server** | API REST fake para simular backend com `db.json`|
| **Node.js 18.3+** | Runtime JavaScript necessário para o projeto  |
| **Yarn Workspaces + Lerna** | Gerenciamento monorepo frontend/backend |

## 📦 Bibliotecas Utilizadas

### 🔧 Backend (`json-server`)

| Biblioteca      | Versão               | Descrição                                   |
|----------------|----------------------|---------------------------------------------|
| `json-server`  | ^1.0.0-alpha.23      | Simula uma API REST fake com um arquivo JSON como base de dados |

---

### 🎨 Frontend (React + Tailwind)

| Biblioteca                      | Versão        | Descrição                                          |
|--------------------------------|---------------|----------------------------------------------------|
| `react`                        | ^18.2.0       | Biblioteca principal para construção de interfaces |
| `react-dom`                    | ^18.2.0       | Integra React ao DOM                               |
| `react-scripts`                | ^5.0.1        | Scripts de build e dev do CRA                      |
| `react-icons`                 | ^5.5.0        | Biblioteca de ícones para React                    |
| `axios`                        | ^0.27.2       | Cliente HTTP para chamadas de API                  |
| `tailwindcss`                  | ^3.4.1        | Framework CSS utilitário                           |
| `postcss`                      | ^8.4.34       | Processador CSS para usar Tailwind                 |
| `autoprefixer`                 | ^10.4.17      | Adiciona prefixos CSS automaticamente              |

---

### 🧪 Testes

| Biblioteca                        | Versão       | Descrição                                         |
|----------------------------------|--------------|---------------------------------------------------|
| `@testing-library/react`         | ^14.3.1      | Testes para componentes React                     |
| `@testing-library/user-event`    | ^14          | Simula interações do usuário nos testes           |
| `@testing-library/jest-dom`      | ^5.14.1      | Matchers personalizados para testes DOM com Jest  |
| `babel-jest`                     | ^30.0.5      | Suporte a Babel nos testes com Jest               |

---

### 📐 Lint & Build

| Biblioteca                                        | Versão       | Descrição                                     |
|--------------------------------------------------|--------------|-----------------------------------------------|
| `eslint`                                         | ^8.56.0      | Ferramenta de linting para código JavaScript  |
| `eslint-plugin-react`                            | ^7.33.2      | Regras de lint para React                     |
| `@babel/core`                                    | ^7.28.0      | Núcleo do Babel                               |
| `@babel/preset-env`                              | ^7.28.0      | Preset para compilar JS moderno               |
| `@babel/preset-react`                            | ^7.27.1      | Preset para compilar JSX                      |
| `@babel/plugin-proposal-private-property-in-object` | ^7.21.11 | Suporte para propriedades privadas no Babel   |
| `postcss-loader`                                 | ^8.1.1       | Permite uso do PostCSS no webpack             |

---

### 🛠️ Workspace Monorepo

| Biblioteca      | Versão     | Descrição                                     |
|----------------|------------|-----------------------------------------------|
| `lerna`         | ^8.0.2     | Gerenciamento de pacotes em monorepo          |
| `concurrently`  | —          | Executa múltiplos comandos simultaneamente    |

---
  
## 📂 Estrutura do Projeto

A estrutura de diretórios do projeto é a seguinte:
```
src/
├── 📁 __tests__/                  # Testes unitários
├── 📁 assets/                    # Recursos estáticos (imagens, ícones)
│   └── 📁 images/                # Imagens do projeto
├── 📁 components/                # Componentes React
│   ├── 📁 BackToTopButton/       # Componente botão "voltar ao topo"
│   ├── 📁 Card/                  # Componentes do Card de recomendação
│   │   ├── Card.js              # Componente principal do Card
│   │   ├── CardContent.js       # Conteúdo do Card
│   │   ├── CardDescription.js   # Descrição do Card
│   │   ├── CardHeader.js        # Cabeçalho do Card
│   │   └── CardTitle.js         # Título do Card
│   ├── 📁 Footer/                # Componente rodapé
│   ├── 📁 Form/                  # Componentes do formulário
│   │   ├── 📁 ClearButton/       # Botão limpar formulário
│   │   │   └── ClearButton.js
│   │   ├── 📁 Fields/            # Campos do formulário
│   │   │   ├── Features.js       # Campo funcionalidades
│   │   │   ├── Preferences.js    # Campo preferências
│   │   │   └── RecommendationType.js  # Campo tipo de recomendação
│   │   ├── 📁 SubmitButton/      # Botão enviar formulário
│   │   │   └── SubmitButton.js
│   │   └── Form.js               # Formulário principal
│   ├── 📁 Header/                # Componente cabeçalho
│   │   └── Header.js
│   ├── 📁 Modal/                 # Componente modal
│   │   └── Modal.js
│   ├── 📁 RecommendationList/   # Lista de recomendações
│   │   └── RecommendationList.js
│   └── 📁 shared/                # Componentes reutilizáveis
│       ├── 📁 Checkbox/          # Componente checkbox acessível
│       │   └── Checkbox.js
│       └── 📁 Tag/               # Componente tag
│           └── Tag.js
│   └── index.js                 # Exportação geral dos componentes
├── 📁 hooks/                    # Hooks customizados React
│   ├── 📁 useForm/              # Hook de gerenciamento do formulário
│   │   └── useForm.js
│   ├── 📁 useProducts/          # Hook para gerenciamento de produtos
│   │   └── useProducts.js
│   ├── 📁 useRecommendations/   # Hook para lógica de recomendações
│   │   └── useRecommendations.js
│   └── index.js                 # Exportação geral dos hooks
├── 📁 mocks/                    # Dados mock para testes e desenvolvimento
│   └── mockProducts.js
├── 📁 services/                 # Serviços para chamadas API e lógica
│   ├── 📁 product/              # Serviços relacionados a produtos
│   │   └── product.service.js
│   ├── 📁 recommendation/       # Serviços relacionados a recomendações
│   │   ├── recommendation.helpers.js
│   │   └── recommendation.service.js
│   └── index.js                 # Exportação geral dos serviços
└── App.js                       # Componente raiz da aplicação
```

## 🔍 Funcionalidades da Aplicação

A aplicação de Recomendação de Produtos da RD Station possui as seguintes funcionalidades principais:

- ✅ **Formulário dinâmico de entrada**
  - O usuário pode selecionar:
    - Preferências (ex: foco em Marketing, Vendas, etc)
    - Funcionalidades desejadas (ex: automações, integração com WhatsApp, CRM)
    - Tipo de recomendação (única ou múltipla)

- 🎯 **Recomendação inteligente de produtos**
  - A aplicação utiliza lógica personalizada para recomendar produtos com base nas escolhas do usuário.
  - Suporta dois tipos de recomendação:
    - `SingleProduct`: retorna apenas o produto mais adequado.
    - `MultipleProducts`: retorna uma lista de produtos compatíveis.

- 🔁 **Requisições simuladas com JSON Server**
  - Os dados dos produtos são carregados de uma API fake (`json-server`) que simula um backend real.

- 🧠 **Lógica de recomendação desacoplada**
  - A lógica de recomendação é modular e pode ser facilmente expandida para novos critérios ou regras.

- 💬 **Feedback visual em tempo real**
  - Exibe mensagens de erro ou ausência de resultados com base nas interações do usuário.

- 🧹 **Botão para limpar filtros**
  - O usuário pode resetar o formulário e recomeçar uma nova recomendação com um clique.

- 🧪 **Testes automatizados**
  - A aplicação conta com testes para hooks, componentes e serviços principais, garantindo confiabilidade e manutenção do código.

- 📱 **Responsividade e acessibilidade**
  - Layout responsivo com **Tailwind CSS**, compatível com dispositivos móveis e acessível por teclado.

## ⚙️ Como Instalar e Rodar o Projeto

### 📋 Pré-requisitos

Certifique-se de ter o **Node.js** na versão 18.3 ou superior. Caso não tenha, siga as instruções abaixo para instalar a versão correta.

#### Usando `n` (Node Version Manager):

1. Instale `n` globalmente (caso ainda não tenha):  
   ```bash
   npm install -g n

2. Instale e use a versão 18.3 do Node.js: 
   ```bash
   n 18.3
   
#### Usando nvm (Node Version Manager):
1. Instale nvm (caso ainda não tenha) seguindo as instruções em: nvm-sh/nvm
2. Instale e use a versão 18.3 do Node.js:
   ```bash
   nvm install 18.3
   nvm use 18.3

## 🚀 Passos para rodar o projeto

1. Clone o repositório:
  ```bash
  git clone https://github.com/marimunari/product-recommender.git
  ```

2. Navegue até a pasta do projeto:
  ```bash
  cd product-recommender
  ```
  
3. Instale as dependências do projeto:
  ```bash
  yarn install
  ```
  
4. Para instalar o projeto, execute o script install.sh:
  ```bash
  ./install.sh
  ```

5. Inicie o projeto (frontend e backend simultaneamente):
  ```bash
  yarn dev
  ```
  
## 🚀 Passos para rodar os testes
1. Navegue até a pasta frontend do projeto:
  ```bash
  cd frontend
  ```

2. Rode o seguinte comando:
  ```bash
  yarn test
  ```

## 📜 Scripts Disponíveis
| Script           | Descrição                                                                 |
|------------------|---------------------------------------------------------------------------|
| `start`          | Inicia a aplicação React em modo de desenvolvimento.                     |
| `start:frontend` | Inicia apenas o frontend da aplicação.                                   |
| `start:backend`  | Inicia apenas o backend da aplicação.                                    |
| `dev`            | Inicia simultaneamente o frontend e o backend em modo de desenvolvimento. |
| `test`           | Executar testes                                                           |

## 📄 Licença
Este projeto está licenciado sob a [Licença MIT](https://github.com/marimunari/product-recommender/blob/master/LICENSE).

## ✍️ Autor
Desenvolvido por [Mariana Munari](https://github.com/marimunari)

