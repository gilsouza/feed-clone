# Feed-Clone

Projeto ReactJS para reproduzir a funcionalidade do feed de posts do twitter

O APP também é um exemplo de PWA com algumas estratégias de cache em seu service-worker e pode ser adicionado à sua tela inicial como um app =)

***Para executar localmente o APP como PWA é necessário editar o arquivo ./src/serviceWorker.js. Caso contrário o ServiceWorker não é registrado e um log com warning é exibido no console.***

*Obs: Não houve otimização do PWA para iOS e etc.*

## Para acessar o projeto

Acesse [https://feed-clone.vercel.app/](https://feed-clone.vercel.app/) para visualizar no browser.

## Para executar o projeto localmente

### Clone o repositório:

```shell
$ git clone https://github.com/gilsouza/feed-clone.git
$ cd feed-clone
```

Após acessar o diretório do projeto execute os passos a seguir:


### Copie as variáveis de ambiente

```shell
$ cp assets/.env .
```

Neste arquivo estão definidos os endpoints que o client consumirá

### Instale as dependências

```shell
$ yarn
```

### Execute o projeto

```shell
$ yarn start
```

### Acesse

Em [http://localhost:3000](http://localhost:3000) para visualizar no browser.

