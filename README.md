# ProjectStatusBar

<p align="center">
  <a href="#introducao">Introdução</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#como-usar">Como usar</a>
</p>


## Introdução
**ProjectStatusBar** é um projeto que compara as **issues** e **pull requests** abertos e fechados de um projeto e mostra o quanto do projeto está pronto, o objetivo é gerenciar o projeto e mostrar em formato de overlay durante as lives.

## Tecnologias
Projeto feito usando:

- **HTML**
- **CSS**
- **JS**
- **Github API**

## Como usar
Você pode usar o projeto passando até 3 parâmetros na **URL**, sendo dois deles obrigatórios, `user` e `repository`, da seguinte forma.

```
?user={user}&repository={repository}&colors={progresso},{fundo}
```

- **User** - Parametro obrigatório que recebe usuário do **Github** onde está o projeto.

- **Repository** - Parametro obrigatório que recebe o nome do repositório do **Github** a ser comparado.

- **Colors** - Recebe dois parametros separados por `,` e o primeiro é a cor do progresso, e o segundo parametro é a cor de fundo da barra.