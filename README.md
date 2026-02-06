# 🎲 Sorteador de Números

Projeto desenvolvido durante o curso **Lógica de programação: praticando com desafios**, da plataforma **Alura**.

Este é o primeiro de cinco projetos práticos do curso, focado em aplicar conceitos fundamentais de JavaScript, manipulação do DOM e lógica de programação através de um sorteador de números interativo.

---

## 📌 Sobre o projeto

O sorteador permite que o usuário defina parâmetros personalizados para gerar números aleatórios de forma controlada. O usuário pode escolher a quantidade de números a serem sorteados e o intervalo (valor mínimo e máximo) dentro do qual os números serão gerados.

O sistema garante que **não haverá números repetidos** em um mesmo sorteio e implementa validações para prevenir erros de uso.

---

## 🎮 Como funciona

### 1️⃣ Configuração do sorteio
O usuário preenche três campos:
- **Quantidade de números:** Quantos números serão sorteados
- **Do número:** Valor mínimo do intervalo
- **Até o número:** Valor máximo do intervalo

### 2️⃣ Validações implementadas
Antes de realizar o sorteio, o sistema verifica:
- ✅ Se todos os campos foram preenchidos
- ✅ Se o valor mínimo é menor que o valor máximo
- ✅ Se a quantidade solicitada não excede o intervalo disponível

### 3️⃣ Sorteio
Ao clicar em **"Sortear"**:
- Os números aleatórios são gerados sem repetição
- O resultado é ordenado em ordem crescente antes da exibição
- O resultado é exibido na tela
- O botão "Sortear" é **desabilitado**
- O botão "Reiniciar" é **habilitado**

### 4️⃣ Reiniciar
Ao clicar em **"Reiniciar"**:
- Todos os campos são limpos
- O resultado volta ao estado inicial
- O botão "Sortear" é **habilitado** novamente
- O botão "Reiniciar" é **desabilitado**

---

## ✨ Funcionalidades

### 🎯 Funcionalidades principais
- ✅ Sorteio de múltiplos números aleatórios
- ✅ Intervalo personalizável (mínimo e máximo)
- ✅ Garantia de números únicos (sem repetição)
- ✅ Interface visual clara e intuitiva
- ✅ Sistema de validação de entradas

### 🚀 Melhorias implementadas além do curso base
- ✅ **Ordenação dos resultados** — números exibidos do menor para o maior
- ✅ **Controle de estado dos botões** - Sortear desabilita após uso
- ✅ **Validação completa** - Previne erros do usuário
  - Campos vazios
  - Intervalo inválido
  - Quantidade impossível
- ✅ **Feedback visual** - Mensagens de alerta claras
- ✅ **Experiência de uso aprimorada** - Fluxo guiado (sortear → reiniciar)

---

## 🧠 Conceitos praticados

### Manipulação do DOM
- `document.getElementById()` - Recuperar elementos da página
- `classList.contains()` - Verificar classes CSS
- `classList.add()` / `classList.remove()` - Adicionar/remover classes
- `.value` - Recuperar valores de inputs
- `.innerHTML` - Modificar conteúdo HTML

### JavaScript Fundamental
- **Variáveis** - Armazenamento de dados
- **Funções** - Organização e reutilização de código
- **Arrays** - Armazenamento de listas de números
- **Estruturas condicionais** - `if/else` para validações
- **Estruturas de repetição** - `for` para gerar múltiplos números
- **Template Strings** - Concatenação de valores
- **parseInt()** - Conversão de String para Number

### Lógica de Programação
- Geração de números aleatórios com `Math.random()`
- Algoritmo de prevenção de duplicatas
- Controle de estado da aplicação
- Validação de entradas do usuário

---

## 🛠️ Tecnologias utilizadas

- **HTML5** - Estrutura da página (fornecida pela Alura)
- **CSS3** - Estilização visual (fornecida pela Alura)
- **JavaScript (ES6+)** - Lógica e interatividade (desenvolvido durante o curso)

---

## 📂 Estrutura do projeto
```text
📁 sorteador-numeros
 ├── 📁 img
 │   ├── code.png
 │   ├── ia.png
 │   └── Ruido.png
 ├── index.html
 ├── style.css
 ├── app.js
 └── README.md
```

---

## ▶️ Como executar

### Opção 1: Abrir diretamente
1. Faça o download dos arquivos do projeto
2. Abra o arquivo `index.html` em seu navegador

### Opção 2: Live Server (VS Code)
1. Instale a extensão "Live Server" no VS Code
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

---

## 📷 Exemplo de uso
```text
┌─────────────────────────────────────┐
│  Sorteador de números               │
├─────────────────────────────────────┤
│  Quantidade de números:        [3]  │
│  Do número:                    [1]  │
│  Até o número:                [50]  │
│                                     │
│  [Sortear]  [Reiniciar]            │
│                                     │
│  Números sorteados: 7, 23, 41      │
└─────────────────────────────────────┘
```

<img width="1919" height="1018" alt="image" src="https://github.com/user-attachments/assets/fe3874f9-c24c-46ec-8d76-b4669b947dad" />

---

## 🎓 Aprendizados do curso

### Durante as aulas
- ✅ Análise de código HTML existente
- ✅ Planejamento de funcionalidades
- ✅ Manipulação do DOM com JavaScript
- ✅ Recuperação de valores de formulários
- ✅ Uso de Template Strings
- ✅ Conversão de tipos com `parseInt()`
- ✅ Estruturas de repetição (`for`)
- ✅ Trabalho com arrays (`push`, `includes`)
- ✅ Geração de números aleatórios
- ✅ Manipulação de classes CSS dinamicamente

### Melhorias implementadas
- ✅ Validações robustas de entrada
- ✅ Controle bidirecional de botões
- ✅ Experiência de usuário aprimorada
- ✅ Tratamento de casos extremos

---

## 🚀 Possíveis melhorias futuras

- [ ] Histórico de sorteios realizados
- [ ] Opção de exportar resultados
- [ ] Modo escuro
- [ ] Animações nos sorteios
- [ ] Salvar configurações no localStorage
- [ ] Adicionar sons aos eventos
- [ ] Visualização gráfica dos números sorteados
- [ ] Compartilhamento de resultados

---

## 📚 Curso de referência

- **Lógica de programação: praticando com desafios**
- **Plataforma:** Alura
- **Foco:** JavaScript e lógica de programação
- **Projeto:** 1 de 5 projetos práticos do curso

---

## 👨‍💻 Autor

[<img loading="lazy" src="https://github.com/user-attachments/assets/b4f96f4b-542e-4988-9bc1-b1acf22a41a1" width=115><br><sub>Renan Dias Utida</sub>](https://github.com/renan-utida)

**Renan Dias Utida**  
Estudante de Engenharia de Software

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/renan-dias-utida-1b1228225/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/renan-utida)

---

## 📄 Licença

Este projeto foi desenvolvido exclusivamente para fins educacionais durante o curso da Alura.

---

## 📝 .gitignore

Crie um arquivo `.gitignore` na raiz do projeto (se for versionar):
```gitignore
# Arquivos do sistema
.DS_Store
Thumbs.db

# Arquivos do VS Code
.vscode/

# Arquivos de log
*.log
```

---

## ⭐ Observações

- O HTML e CSS foram fornecidos pela Alura como base do projeto
- O JavaScript foi desenvolvido durante o curso com melhorias adicionais
- Este é o primeiro de cinco projetos práticos do curso
