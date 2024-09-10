# Afinal, o que é JavaScript?
- A linguagem JavaScript é uma das linguagens de programação mais populares do mundo.
- Não há alternativas à linguagem JavaScript no _browser_ para a programação
  _client-side_ (códigos Java, Python, C++,  etc. _não_ são suportados pelo
  _browser_).
- É uma linguagem de programação _dinâmica_, _fracamente tipada_ que é traduzida
em tempo de execução (_at runtime_) por uma _engine_. Código JavaScript pode ser
executado em uma _Web page_ ou ainda diretamente em qualquer máquina que possua
um _JS environment_ (ambiente com a _engine_, API de I/O e bibliotecas,
basicamente).
    - A _Google Chrome_ _engine_ é chamada de _V8_, enquanto que a do _Firefox_
      é a _SpiderMonkey_.
    - JavaScript foi criada para tornar as páginas da _Web_ mais dinâmicas
      (i.e., manipular e mudar o conteúdo de uma página já carregada pelo
      _browser_).
    - No _browser_, JavaScript pode alterar o código HTML5 & CSS da página, mas
      não pode acessar seu _filesystem_ (_sandbox_).
    - A _engine_ lê, analisa o seu código, o compila em código de máquina e,
      finalmente, o executa.
    - A parte **dinâmica e interpretada** da linguagem JavaScript vem do fato de
      que o código não é pré-compilado antes do _deployment_ do programa (e.g.,
      C, C++, Java), mas, em vez disso, seu código é avaliado, compilado e
      executado _at runtime_. Diferente de C, C++, Java, e outras linguagens,
      JavaScript permite, por exemplo, que uma variável possa iniciar com um
      tipo dado e, em seguida, trocá-lo por outro, de forma dinâmica e _at
      runtime_.
    - Já a parte **fracamente tipada** de JavaScript significa que os tipos de
      dados de variáveis e contêineres não são declarados no código pelo
      desenvolvedor. Na verdade, estes tipos serão deduzidos (inferidos)
      automaticamente.
- A ampla maioria dos _sites_ na _Web_ usam JavaScript. Uma vez que o código
  JavaScript é carregado pelo _browser_, ele começará a ser executado.
 - Por muitos anos, a performance de JavaScript não era das melhores. Hoje em
   dia, porém, as _engines_ modernas sofreram muitas otimizações (JIT
   _compilers_, analisadores de código,etc.) que tornam a execução muito próxima
   daquela obtida a partir de um código de máquina nativo.
- A execução de um código JavaScript acontece em uma _single thread_ no seu
  sistema operacional.
  ## Posso usar JavaScript no _server-side_?
- Sim! Apesar da origem da linguagem JavaScript estar associada à programação
  _client-side_, hoje, ela é bastante utilizada no lado servidor (_backend_)
  através de ambientes como o ([Node.js](https://nodejs.org/)) para uma
  programação fora do navegador.
- Node.js é um ambiente de execução de código aberto, baseado na _engine_ V8 do
   _Google_ e que permite a execução de código JavaScript fora do navegador
   _Web_.
- Na programação _server-side_, foram criadas "non-browser" APIs para o Node.js
  lidar com o _filesystem_
   local, conexão com bancos de dados, servir páginas _Web_, processar requisições HTTP de entrada, etc.
   ## Síntese histórica da linguagem JavaScript
- A linguagem foi introduzida pela _Netscape_, em 1995. A ideia inicial era ter
  uma linguagem onde se pudesse adicionar _scripts_ às páginas _Web_.
  Inicialmente, foi chamada de _LiveScript_. Mas, devido a popularidade de Java
  na época, foi renomeada para JavaScript.
- Em 1996, _Micro$oft_ lançou sua própria versão da linguagem para o IE
  (JScript) similar à JavaScript.
- Entre 1996 e 2000, JavaScript foi submetida pela _Netscape_ ao comitê da ECMA
  para iniciar a padronização. Surge, então, a ECMAScript como a especificação
  de um padrão sólido de linguagem para todas as implementações da linguagem
  JavaScript.
- A ECMAScript Language Specification ([ECMAScript](https://tc39.es/ecma262/))
  é a especificação na qual JavaScript se baseia.
- Outras implementações de linguagens de _script_ ligeiramente diferentes,
  também baseadas na ECMAScript, são ActionScript e JScript, mas a implementação
  mais famosa é JavaScript.
- _Google_, _Mozilla_, _Opera_ e outros fabricantes de navegadores usam, implementam a
  especificação ECMAScript em suas  _engines_ e ainda contribuem na evolução
  contínua da ECMAScript com lançamentos de recursos novos a serem suportados.
- Java _versus_ JavaScript: apesar de utilizarem sintaxes semelhantes, oriundas
  principalmente da linguagem C, são duas linguagens bastante diferentes.
