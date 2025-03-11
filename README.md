# @dudaferres/coolsolelog

Um módulo Node.js divertido para exibir mensagens de log no console com estilo, cores e rostos de gatos ASCII.

## Instalação

```bash
npm install @dudaferres/coolsolelog
```

## Funcionalidades

- Exibe mensagens em caixas coloridas e estilizadas
- Adiciona rostos de gatos ASCII abaixo das mensagens
- Personalização de cores para mensagens e bordas

## Como usar

### Exemplo básico

```javascript
import coolsolelog from '@dudaferres/coolsolelog';

// Exibe uma mensagem com as cores padrão
coolsolelog('Olá, mundo!');
```

### Personalizando cores

```javascript
import coolsolelog from '@dudaferres/coolsolelog';

// Personaliza a cor da mensagem e da borda
coolsolelog('Mensagem importante!', 'red', 'green');
```

## API

### coolsolelog(message, messageColor, bubbleColor)

| Parâmetro | Tipo | Descrição | Padrão |
|-----------|------|-----------|--------|
| message | String | Texto a ser exibido na caixa | - |
| messageColor | String | Cor do texto (usando cores do chalk) | 'cyan' |
| bubbleColor | String | Cor da borda da caixa | 'yellow' |

### Cores disponíveis

As cores disponíveis são fornecidas pela biblioteca [chalk](https://github.com/chalk/chalk):

- black
- red
- green
- yellow
- blue
- magenta
- cyan
- white
- gray
- etc.

## Dependências

- [chalk](https://github.com/chalk/chalk) - Estilização de texto no terminal
- [boxen](https://github.com/sindresorhus/boxen) - Criação de caixas no terminal
- [cat-ascii-faces](https://github.com/melaniecebula/cat-ascii-faces) - Rostos de gatos ASCII

## Licença

ISC

## Autor

- Gabriela Queiroga Cocuzza da Silva RM: 560035
- Julia Sayuri Yokoo RM: 560541
- Maria Eduarda Ferrés RM: 560418

---

Feito com ❤️ para tornar seus logs mais divertidos! 
