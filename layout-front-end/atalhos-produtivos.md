## 🧠 Atalhos do Visual Studio Code

### 🔹 Gerais

| Ação                     | Windows/Linux      | macOS             |
|--------------------------|--------------------|-------------------|
| Abrir arquivo            | `Ctrl + P`         | `Cmd + P`         |
| Buscar texto             | `Ctrl + F`         | `Cmd + F`         |
| Substituir texto         | `Ctrl + H`         | `Cmd + H`         |
| Salvar arquivo           | `Ctrl + S`         | `Cmd + S`         |
| Fechar aba atual         | `Ctrl + W`         | `Cmd + W`         |
| Nova aba                 | `Ctrl + N`         | `Cmd + N`         |
| Abrir terminal           | `Ctrl + '`         | `Cmd + '`         |
| Atalhos do teclado       | `Ctrl + K, Ctrl + S` | `Cmd + K, Cmd + S` |

---

### 🧭 Navegação

| Ação                     | Windows/Linux      | macOS             |
|--------------------------|--------------------|-------------------|
| Ir para definição        | `F12`              | `F12`             |
| Voltar (navegação)       | `Alt + ←`          | `Ctrl + -`        |
| Avançar (navegação)      | `Alt + →`          | `Ctrl + Shift + -`|
| Ir para linha            | `Ctrl + G`         | `Cmd + G`         |

---

### ✏️ Edição de Código

| Ação                          | Windows/Linux         | macOS                  |
|-------------------------------|-----------------------|-------------------------|
| Copiar linha                  | `Shift + Alt + ↓ / ↑` | `Option + Shift + ↓ / ↑` |
| Mover linha                   | `Alt + ↓ / ↑`         | `Option + ↓ / ↑`         |
| Duplicar linha                | `Shift + Alt + ↓`     | `Shift + Option + ↓`     |
| Comentar linha                | `Ctrl + /`            | `Cmd + /`                |
| Seleção múltipla              | `Ctrl + D`            | `Cmd + D`                |
| Selecionar tudo semelhante    | `Ctrl + Shift + L`    | `Cmd + Shift + L`        |
| Format Document               | `Shift + Alt + F`     | `Shift + Option + F`     |

---

### 🧩 Painéis e Layout

| Ação                          | Windows/Linux     | macOS             |
|-------------------------------|-------------------|-------------------|
| Alternar barra lateral        | `Ctrl + B`        | `Cmd + B`         |
| Dividir editor                | `Ctrl + \`        | `Cmd + \`         |
| Alternar entre abas           | `Ctrl + Tab`      | `Cmd + Tab`       |
| Alternar entre splits         | `Ctrl + 1/2/3`    | `Cmd + 1/2/3`     |

---

### 🧪 Extras

| Ação                          | Windows/Linux         | macOS                 |
|-------------------------------|-----------------------|------------------------|
| Abrir paleta de comandos      | `Ctrl + Shift + P`    | `Cmd + Shift + P`      |
| Renomear símbolo              | `F2`                  | `F2`                   |
| Ir para símbolo no arquivo    | `Ctrl + Shift + O`    | `Cmd + Shift + O`      |
| Mostrar referências           | `Shift + F12`         | `Shift + F12`          |


## ⚡ Comandos Emmet no VS Code

### 🔹 Geração de Elementos HTML

| Comando Emmet      | Expansão / Resultado                        |
|--------------------|---------------------------------------------|
| `div`              | `<div></div>`                               |
| `.box`             | `<div class="box"></div>`                   |
| `#header`          | `<div id="header"></div>`                   |
| `ul>li*3`          | Lista com 3 itens                           |
| `nav>ul>li.item$*4`| Itens com classe sequenciada (`item1` a `item4`) |
| `a[href="#"]`      | `<a href="#"></a>`                          |
| `input:password`   | `<input type="password">`                   |
| `label[for="email"]{Email}` | `<label for="email">Email</label>` |

---

### 🧱 Aninhamento e Multiplicação

| Comando Emmet        | Expansão / Resultado                          |
|----------------------|-----------------------------------------------|
| `section>h1+p`       | `<section><h1></h1><p></p></section>`         |
| `div+header+footer`  | Elementos irmãos (não aninhados)              |
| `ul>li*5>a`          | Lista com 5 links                             |
| `div>div>div`        | Divs aninhadas                                |
| `div>(header>nav)+main+footer` | Estrutura com agrupamentos          |

---

### 🧩 Atributos, Classes e IDs

| Comando Emmet                  | Expansão / Resultado                                |
|-------------------------------|-----------------------------------------------------|
| `input[type="text"].form`     | `<input type="text" class="form">`                 |
| `img[src="img.jpg" alt="Foto"]` | `<img src="img.jpg" alt="Foto">`                  |
| `.container#main.wrap`        | `<div id="main" class="container wrap"></div>`     |
| `meta:vp`                     | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |

---

### 🧬 Abreviações para CSS

| Comando Emmet  | Expansão / Resultado                    |
|----------------|------------------------------------------|
| `m10`          | `margin: 10px;`                          |
| `p20-10`       | `padding: 20px 10px;`                    |
| `w100`         | `width: 100px;`                          |
| `h50p`         | `height: 50%;`                           |
| `bgc#f00`      | `background-color: #f00;`                |
| `pos:a`        | `position: absolute;`                    |
| `d:f`          | `display: flex;`                         |

---

### 💡 Dicas Rápidas

| Ação                        | Atalho (Windows/Linux/macOS) |
|-----------------------------|------------------------------|
| Expandir abreviação Emmet  | `Tab` (após digitar o comando)|
| Envolver com abreviação    | `Ctrl + Shift + A` (`Cmd` no macOS) |

---

### 📦 Exemplos Completos

```emmet
.container>header>h1{Título}+nav>ul>li*3>a{Link $}
Resultado:
<div class="container">
  <header>
    <h1>Título</h1>
    <nav>
      <ul>
        <li><a href="">Link 1</a></li>
        <li><a href="">Link 2</a></li>
        <li><a href="">Link 3</a></li>
      </ul>
    </nav>
  </header>
</div>
```