// ======================================================
// FLORZINHA DE NOSSA SENHORA
// ======================================================


// ======================================================
// MODO DE TESTE
// ======================================================

// Durante a construção deixe true.
// Quando publicarmos, mudaremos para false.

const MODO_TESTE = false;

// Número de 1 até 31 para simular um dia de maio.

const DIA_TESTE = 24;


// ======================================================
// 31 DIAS DE MAIO
// ======================================================

const diasMaio = {

  1: { virtude: "Bondade" },

  2: { virtude: "Alegria" },

  3: { virtude: "Gratidão" },

  4: { virtude: "Obediência" },

  5: { virtude: "Paciência" },

  6: { virtude: "Gentileza" },

  7: { virtude: "Partilha" },

  8: { virtude: "Perdão" },

  9: { virtude: "Coragem" },

  10: { virtude: "Humildade" },

  11: { virtude: "Fé" },

  12: { virtude: "Confiança" },

  13: { virtude: "Esperança" },

  14: { virtude: "Paz" },

  15: { virtude: "Amizade" },

  16: { virtude: "Generosidade" },

  17: { virtude: "Respeito" },

  18: { virtude: "Sinceridade" },

  19: { virtude: "Serviço" },

  20: { virtude: "Perseverança" },

  21: { virtude: "Escuta" },

  22: { virtude: "Responsabilidade" },

  23: { virtude: "Caridade" },

  24: {
    virtude:
      "Amor a Nossa Senhora Auxiliadora",

    especial: true
  },

  25: { virtude: "Delicadeza" },

  26: { virtude: "Compaixão" },

  27: { virtude: "Justiça" },

  28: { virtude: "União" },

  29: { virtude: "Silêncio interior" },

  30: { virtude: "Disponibilidade" },

  31: { virtude: "Amor" }

};


// ======================================================
// REFLEXÕES
// ======================================================

const reflexoes = [

  "As pequenas atitudes feitas com amor podem transformar o dia de alguém.",

  "Deus também se revela nas pequenas escolhas feitas com sinceridade.",

  "Uma atitude simples, quando nasce do amor, pode tornar-se uma verdadeira flor para Maria.",

  "Nem todo gesto importante é visto pelos outros. Muitas vezes, o bem mais bonito acontece em silêncio.",

  "Hoje é uma nova oportunidade para fazer o bem de forma concreta.",

  "O amor cresce quando passa das palavras para as atitudes.",

  "Maria nos ensina que um coração disponível pode realizar grandes coisas nas pequenas tarefas.",

  "Uma boa escolha feita hoje pode levar alegria a alguém que você nem imagina."

];


// ======================================================
// ORAÇÕES
// ======================================================

const oracoes = [

  "Nossa Senhora Auxiliadora, ajuda-me a viver esta virtude com alegria e sinceridade.",

  "Maria Auxiliadora, ensina-me a transformar esta pequena atitude em um gesto de amor.",

  "Nossa Senhora Auxiliadora, recebe esta flor e ajuda-me a fazer o bem de coração.",

  "Maria, acompanha-me hoje e ensina-me a escolher aquilo que aproxima as pessoas de Deus.",

  "Nossa Senhora Auxiliadora, dá-me um coração atento, generoso e disponível.",

  "Maria Auxiliadora, ajuda-me a fazer o bem mesmo quando ninguém estiver olhando.",

  "Nossa Senhora Auxiliadora, ensina-me a amar nas pequenas coisas deste dia.",

  "Maria, ajuda-me a perceber quem precisa de mim e a agir com bondade.",

  "Nossa Senhora Auxiliadora, fica comigo e ajuda-me a cumprir esta pequena missão.",

  "Maria Auxiliadora, que minha atitude de hoje seja uma flor oferecida com amor."

];


// ======================================================
// FRASES FINAIS
// ======================================================

const finais = [

  "Uma pequena flor oferecida com amor tem grande valor.",

  "Maria conhece cada gesto feito de coração.",

  "Seu gesto pode parecer pequeno, mas o amor nunca é pequeno.",

  "Hoje você pode tornar o dia de alguém um pouco melhor.",

  "Uma flor espiritual nasce cada vez que escolhemos fazer o bem.",

  "Deus vê também as boas atitudes que ninguém mais percebe.",

  "As pequenas coisas feitas com amor podem produzir grandes frutos.",

  "Cada boa atitude deixa o Jardim de Maria mais bonito.",

  "Seu presente para Maria hoje será uma atitude concreta de amor.",

  "Não é o tamanho da ação que importa, mas o amor colocado nela."

];


// ======================================================
// MISSÕES PARA CRIANÇAS
// ======================================================

const missoesCrianca = [

  "Ajude alguém da sua casa sem esperar que essa pessoa peça.",

  "Faça uma boa ação hoje e tente não contar para ninguém.",

  "Diga uma palavra carinhosa para alguém que esteja triste.",

  "Divida alguma coisa que você gosta com outra pessoa.",

  "Arrume alguma coisa que normalmente outra pessoa arruma por você.",

  "Agradeça alguém que cuida de você todos os dias.",

  "Convide para brincar uma criança que estiver sozinha.",

  "Faça um pequeno favor para alguém da sua família.",

  "Procure passar um período do dia sem reclamar.",

  "Faça alguma coisa hoje com a intenção de deixar outra pessoa feliz.",

  "Reze por uma pessoa que esteja precisando de ajuda.",

  "Se você magoou alguém, tenha coragem de pedir desculpas.",

  "Ajude um colega que esteja tendo alguma dificuldade.",

  "Quando receber uma orientação hoje, procure obedecer sem reclamar.",

  "Dê um abraço carinhoso em alguém que você ama.",

  "Diga obrigado por algo que normalmente recebe sem perceber.",

  "Cuide com carinho de alguma coisa que pertence a todos.",

  "Em alguma situação hoje, deixe outra pessoa escolher primeiro.",

  "Cumprimente com alegria alguém que normalmente passa despercebido.",

  "Antes de dormir, agradeça a Deus por três coisas boas do seu dia.",

  "Empreste alguma coisa sua com boa vontade.",

  "Ajude a deixar sua sala, sua casa ou outro lugar mais organizado.",

  "Procure falar com gentileza mesmo quando estiver contrariado.",

  "Faça uma pequena tarefa com bastante atenção e capricho.",

  "Se alguém cometer um erro com você, procure não guardar raiva.",

  "Diga algo bom sobre uma pessoa em vez de criticá-la.",

  "Faça companhia por alguns minutos a alguém que esteja sozinho.",

  "Escolha alguma coisa de que você gosta e espere outra pessoa primeiro.",

  "Reze uma Ave-Maria por alguém que esteja sofrendo.",

  "Faça hoje uma coisa boa que somente você e Deus saberão."

];


// ======================================================
// MISSÕES PARA ADOLESCENTES
// ======================================================

const missoesAdolescente = [

  "Ajude alguém hoje sem publicar, comentar ou contar para outras pessoas.",

  "Procure conversar com alguém que normalmente fica mais isolado.",

  "Antes de responder com irritação, pare alguns segundos e escolha melhor suas palavras.",

  "Agradeça sinceramente uma pessoa que costuma ajudá-lo.",

  "Faça uma tarefa em casa antes que alguém precise cobrar.",

  "Evite participar de uma conversa que esteja ridicularizando outra pessoa.",

  "Envie uma mensagem de incentivo para alguém que esteja passando por um momento difícil.",

  "Faça alguma coisa boa sem esperar reconhecimento.",

  "Durante uma conversa, guarde o celular e escute realmente a outra pessoa.",

  "Peça desculpas por alguma atitude sua que poderia ter sido diferente.",

  "Faça uma oração por uma pessoa com quem você tem dificuldade de conviver.",

  "Ajude um colega que esteja enfrentando dificuldade em alguma atividade.",

  "Passe alguns minutos longe do celular e dê atenção verdadeira a alguém.",

  "Evite pelo menos uma reclamação desnecessária durante o dia.",

  "Elogie sinceramente uma qualidade de alguém.",

  "Faça uma pequena renúncia e ofereça-a por alguém que esteja precisando.",

  "Perceba alguém que normalmente passa despercebido e trate essa pessoa com atenção.",

  "Realize hoje alguma tarefa que você está adiando.",

  "Escolha responder com gentileza quando teria vontade de responder mal.",

  "Antes de dormir, recorde três motivos que você teve hoje para agradecer a Deus.",

  "Evite fazer um comentário negativo sobre alguém, mesmo que os outros façam.",

  "Ajude em casa de maneira espontânea.",

  "Procure ouvir uma opinião diferente da sua sem interromper imediatamente.",

  "Faça alguma coisa útil durante um tempo que normalmente gastaria sem perceber no celular.",

  "Se perceber que alguém errou, evite expor ou humilhar essa pessoa.",

  "Demonstre gratidão a alguém que costuma fazer muito por você.",

  "Procure fazer bem uma obrigação de que você não gosta.",

  "Fique alguns minutos em silêncio e apresente a Deus aquilo que está preocupando você.",

  "Escolha alguém e faça uma oração especialmente por essa pessoa hoje.",

  "Pratique uma boa atitude que ninguém precise ficar sabendo."

];


// ======================================================
// MISSÕES PARA ADULTOS
// ======================================================

const missoesAdulto = [

  "Faça uma tarefa que facilite a vida de alguém sem esperar reconhecimento.",

  "Entre em contato com uma pessoa que você sabe que está precisando de atenção.",

  "Evite uma reclamação que não contribuiria para resolver o problema.",

  "Agradeça explicitamente alguém por algo que normalmente passa despercebido.",

  "Reserve alguns minutos para escutar verdadeiramente uma pessoa.",

  "Faça uma boa ação de maneira discreta, sem contar para ninguém.",

  "Reze por uma pessoa com quem você esteja tendo dificuldade.",

  "Realize com cuidado uma tarefa cotidiana que normalmente faz com pressa.",

  "Perdoe uma pequena falha de alguém sem fazer questão de apontá-la.",

  "Envie uma mensagem de gratidão ou incentivo para alguém.",

  "Faça uma pequena renúncia em benefício de outra pessoa.",

  "Procure ajudar alguém antes que essa pessoa precise pedir.",

  "Dê atenção integral a alguém durante uma conversa, sem olhar o celular.",

  "Escolha uma situação de hoje para responder com mais paciência.",

  "Reconheça sinceramente uma qualidade de uma pessoa próxima.",

  "Faça algo concreto para tornar sua casa ou ambiente de trabalho mais agradável.",

  "Dedique alguns minutos de silêncio para agradecer a Deus.",

  "Retome um gesto de carinho ou amizade que você deixou de fazer com o tempo.",

  "Faça uma tarefa difícil procurando realizá-la sem murmuração.",

  "Antes de dormir, identifique três pequenas graças que aconteceram durante o dia.",

  "Evite hoje uma crítica que não seja necessária.",

  "Faça um gesto de reconciliação com alguém, mesmo que seja pequeno.",

  "Ofereça parte do seu tempo para ajudar alguém em uma necessidade concreta.",

  "Escolha alguma pequena comodidade para renunciar hoje e ofereça esse gesto a Deus.",

  "Tenha uma conversa em que sua prioridade seja ouvir, e não responder.",

  "Procure agradecer a uma pessoa cujo trabalho normalmente passa despercebido.",

  "Em uma situação de tensão, faça uma pausa antes de responder.",

  "Reze uma Ave-Maria por uma intenção que não seja sua.",

  "Faça com especial cuidado uma obrigação que costuma considerar insignificante.",

  "Realize um gesto de bondade que permaneça somente entre você, Deus e Nossa Senhora."

];


// ======================================================
// PÚBLICOS
// ======================================================

const publicos = {

  crianca: {
    icone: "👧",
    nome: "Criança",
    missoes: missoesCrianca
  },

  adolescente: {
    icone: "🧑",
    nome: "Adolescente",
    missoes: missoesAdolescente
  },

  adulto: {
    icone: "👨",
    nome: "Adulto",
    missoes: missoesAdulto
  }

};


// ======================================================
// COMO VIVER CADA VIRTUDE
// ======================================================

const orientacoesVirtude = {

  "Bondade":
    "Hoje, procure fazer o bem antes mesmo que alguém precise pedir.",

  "Alegria":
    "Leve alegria a alguém por meio do seu jeito de falar, acolher ou ajudar.",

  "Gratidão":
    "Perceba algo bom que costuma passar despercebido e demonstre gratidão.",

  "Obediência":
    "Procure acolher uma orientação justa com prontidão, sem reclamar.",

  "Paciência":
    "Quando alguma coisa não acontecer como você gostaria, procure responder com calma.",

  "Gentileza":
    "Faça com que suas palavras e atitudes tornem o dia de alguém mais leve.",

  "Partilha":
    "Compartilhe algo seu: tempo, atenção, conhecimento ou alguma coisa material.",

  "Perdão":
    "Não alimente uma pequena mágoa. Dê hoje um passo em direção ao perdão.",

  "Coragem":
    "Escolha fazer aquilo que é certo, mesmo que seja mais difícil.",

  "Humildade":
    "Faça o bem sem precisar receber elogios ou reconhecimento.",

  "Fé":
    "Em algum momento do dia, confie a Deus uma preocupação que está no seu coração.",

  "Confiança":
    "Diante de uma dificuldade, procure não se desesperar e entregue-a a Deus.",

  "Esperança":
    "Leve uma palavra de ânimo a alguém que esteja desanimado.",

  "Paz":
    "Evite alimentar uma discussão e procure ser presença de paz.",

  "Amizade":
    "Demonstre a alguém, por uma atitude concreta, que sua amizade é importante.",

  "Generosidade":
    "Ofereça algo de você sem esperar receber alguma coisa em troca.",

  "Respeito":
    "Trate com atenção e dignidade especialmente alguém que pensa diferente de você.",

  "Sinceridade":
    "Procure agir e falar com verdade, mas sempre com caridade.",

  "Serviço":
    "Faça alguma coisa útil para outra pessoa antes que ela precise pedir.",

  "Perseverança":
    "Não abandone hoje uma tarefa apenas porque ela ficou difícil ou cansativa.",

  "Escuta":
    "Escute alguém com verdadeira atenção, sem preparar sua resposta enquanto a pessoa fala.",

  "Responsabilidade":
    "Cumpra com cuidado uma obrigação que depende de você.",

  "Caridade":
    "Procure perceber uma necessidade de alguém e faça algo concreto para ajudar.",

  "Amor a Nossa Senhora Auxiliadora":
    "Faça hoje uma atitude de amor e ofereça-a especialmente a Nossa Senhora Auxiliadora.",

  "Delicadeza":
    "Tenha um cuidado especial na maneira de falar e tratar as pessoas.",

  "Compaixão":
    "Procure perceber o sofrimento ou dificuldade de alguém sem julgá-lo.",

  "Justiça":
    "Escolha agir corretamente, mesmo quando fazer o contrário seria mais conveniente.",

  "União":
    "Faça algo que aproxime pessoas em vez de aumentar divisões.",

  "Silêncio interior":
    "Reserve alguns minutos sem celular, conversa ou distrações para estar em silêncio com Deus.",

  "Disponibilidade":
    "Esteja disposto a interromper um pouco seus planos para ajudar alguém que precisar.",

  "Amor":
    "Faça hoje alguma coisa concreta simplesmente porque ama."

};


// ======================================================
// FLORES DO JARDIM
// ======================================================

const floresDoJardim = [
  "🌷",
  "🌹",
  "🌼",
  "🌸",
  "🌺",
  "🌻"
];


// ======================================================
// DESCOBRIR O DIA
// ======================================================

function obterDiaFlorzinha() {

  if (MODO_TESTE) {
    return DIA_TESTE;
  }

  const hoje =
    new Date();

  // Maio = 4 no JavaScript

  if (
    hoje.getMonth() !== 4
  ) {

    return null;
  }

  return hoje.getDate();
}


// ======================================================
// CHAVE DA DATA
// ======================================================

function obterChaveData(
  diaPersonalizado = null
) {

  if (MODO_TESTE) {

    const dia =
      diaPersonalizado !== null
        ? diaPersonalizado
        : DIA_TESTE;

    return `teste-maio-${dia}`;
  }

  const hoje =
    new Date();

  const ano =
    hoje.getFullYear();

  const dia =
    diaPersonalizado !== null
      ? diaPersonalizado
      : hoje.getDate();

  const diaFormatado =
    String(dia)
      .padStart(
        2,
        "0"
      );

  return `${ano}-05-${diaFormatado}`;
}


// ======================================================
// IDENTIFICADOR DO APARELHO
// ======================================================

function obterIdentificador() {

  let id =
    localStorage.getItem(
      "id-florzinha-maria"
    );

  if (!id) {

    if (
      window.crypto &&
      crypto.randomUUID
    ) {

      id =
        crypto.randomUUID();

    } else {

      id =
        Date.now().toString()
        +
        "-"
        +
        Math.random()
          .toString(36)
          .substring(2);

    }

    localStorage.setItem(
      "id-florzinha-maria",
      id
    );

  }

  return id;
}


// ======================================================
// TRANSFORMAR TEXTO EM NÚMERO
// ======================================================

function criarNumero(texto) {

  let numero = 0;

  for (
    let i = 0;
    i < texto.length;
    i++
  ) {

    numero =
      (
        (numero << 5)
        -
        numero
      )
      +
      texto.charCodeAt(i);

    numero |= 0;
  }

  return Math.abs(numero);
}


// ======================================================
// ESCOLHER ITEM
// ======================================================

function escolherItem(
  lista,
  semente
) {

  const numero =
    criarNumero(semente);

  return lista[
    numero % lista.length
  ];
}


// ======================================================
// ESCOLHER FLOR DO JARDIM
// ======================================================

function escolherFlorJardim(
  dia,
  tipo
) {

  // 24 de maio sempre será uma rosa.

  if (dia === 24) {
    return "🌹";
  }

  const numero =
    criarNumero(
      `${tipo}-${dia}-jardim`
    );

  return floresDoJardim[
    numero %
    floresDoJardim.length
  ];
}


// ======================================================
// GERAR OU RECUPERAR FLORZINHA
// ======================================================

function obterFlorzinha(tipo) {

  const dia =
    obterDiaFlorzinha();

  if (
    !dia ||
    !diasMaio[dia]
  ) {

    return null;
  }

  const chaveData =
    obterChaveData();

  const chave =
    `florzinha-${chaveData}-${tipo}`;

  const salva =
    localStorage.getItem(chave);

  if (salva) {

    return JSON.parse(salva);

  }

  const pessoa =
    publicos[tipo];

  const dadosDia =
    diasMaio[dia];

  const id =
    obterIdentificador();

  const base =
    `${id}-${dia}-${tipo}-${dadosDia.virtude}`;

  const florzinha = {

    dia:
      dia,

    virtude:
      dadosDia.virtude,

    especial:
      dadosDia.especial === true,

    orientacao:
      orientacoesVirtude[
        dadosDia.virtude
      ],

    reflexao:
      escolherItem(
        reflexoes,
        base + "-reflexao"
      ),

    missao:
      escolherItem(
        pessoa.missoes,
        base + "-missao"
      ),

    oracao:
      escolherItem(
        oracoes,
        base + "-oracao"
      ),

    final:
      escolherItem(
        finais,
        base + "-final"
      )

  };

  localStorage.setItem(
    chave,
    JSON.stringify(
      florzinha
    )
  );

  return florzinha;
}


// ======================================================
// ABRIR FLORZINHA
// ======================================================

function escolherPublico(tipo) {

  const pessoa =
    publicos[tipo];

  if (!pessoa) {
    return;
  }

  const flor =
    obterFlorzinha(tipo);

  if (!flor) {

    document
      .querySelector(".inicio")
      .innerHTML = `

      <div class="flor">
        🌸
      </div>

      <h1>
        Florzinha de Nossa Senhora
      </h1>

      <h2>
        Voltaremos em maio
      </h2>

      <p class="mensagem">

        O Jardim de Maria acontece
        durante os 31 dias do mês de maio.

      </p>

      <button
        class="voltar"
        onclick="voltarInicio()"
      >

        ← Voltar

      </button>

    `;

    return;
  }


  let especial = "";


  if (flor.especial) {

    especial = `

      <div class="especial-auxiliadora">

        <strong>
          💙 24 de maio
        </strong>

        <p>

          Hoje celebramos
          Nossa Senhora Auxiliadora.

        </p>

        <p>

          Sua florzinha de hoje será
          uma oferta especial a Maria.

        </p>

      </div>

    `;
  }


  document
    .querySelector(".inicio")
    .innerHTML = `

    <div class="flor">
      🌸
    </div>

    <p class="dia">
      ${flor.dia} de maio
    </p>

    <h1>
      ${pessoa.icone}
      ${pessoa.nome}
    </h1>

    ${especial}

    <div class="cartao-flor">

      <p class="rotulo">
        VIRTUDE DE HOJE
      </p>

      <h2 class="virtude">
        ${flor.virtude}
      </h2>

      <p class="proposta">
        ${flor.reflexao}
      </p>

      <div class="divisor">
        🌷
      </div>

      <p class="rotulo">
        COMO VIVER ESTA VIRTUDE
      </p>

      <p class="proposta">
        ${flor.orientacao}
      </p>

      <div class="divisor">
        🌼
      </div>

      <p class="rotulo">
        SUA FLOR PARA MARIA
      </p>

      <p class="proposta">
        ${flor.missao}
      </p>

      <div class="oracao">

        <p class="rotulo">
          🙏 PEQUENA ORAÇÃO
        </p>

        <p>
          ${flor.oracao}
        </p>

      </div>

      <p class="frase">
        ${flor.final}
      </p>

    </div>

    <button
      class="oferecer"
      onclick="oferecerFlor('${tipo}')"
    >

      🌷 Oferecer esta flor
      a Nossa Senhora

    </button>

    <button
      class="voltar"
      onclick="voltarInicio()"
    >

      ← Voltar

    </button>

    <p class="salesiano">

      Uma flor por dia
      para Nossa Senhora Auxiliadora

    </p>

  `;
}


// ======================================================
// OFERECER A FLOR
// ======================================================

function oferecerFlor(tipo) {

  const flor =
    obterFlorzinha(tipo);

  if (!flor) {
    return;
  }

  const chaveData =
    obterChaveData();

  localStorage.setItem(
    `flor-oferecida-${chaveData}-${tipo}`,
    "sim"
  );

  document
    .querySelector(".inicio")
    .innerHTML = `

    <div class="flor">
      🌷
    </div>

    <p class="dia">
      ${flor.dia} de maio
    </p>

    <h1>
      Flor oferecida!
    </h1>

    <h2>
      Para Nossa Senhora Auxiliadora
    </h2>

    <div class="confirmacao">

      <p>

        Sua atitude de hoje
        foi transformada
        em uma pequena flor
        oferecida a Maria.

      </p>

      <p class="frase">

        ${flor.final}

      </p>

    </div>

    <p>

      Esta flor agora faz parte
      do seu Jardim de Maria.

    </p>

    <button
      onclick="abrirJardim('${tipo}')"
    >

      🌷 Ver meu Jardim de Maria

    </button>

    <button
      class="voltar"
      onclick="voltarInicio()"
    >

      🏠 Voltar ao início

    </button>

  `;
}


// ======================================================
// VERIFICAR DIA CUMPRIDO
// ======================================================

function diaFoiCumprido(
  dia,
  tipo
) {

  const chaveData =
    obterChaveData(dia);

  const chave =
    `flor-oferecida-${chaveData}-${tipo}`;

  return (
    localStorage.getItem(chave)
    ===
    "sim"
  );
}


// ======================================================
// CONTAR FLORES
// ======================================================

function contarFlores(tipo) {

  let total = 0;

  for (
    let dia = 1;
    dia <= 31;
    dia++
  ) {

    if (
      diaFoiCumprido(
        dia,
        tipo
      )
    ) {

      total++;
    }

  }

  return total;
}


// ======================================================
// ABRIR JARDIM
// ======================================================

function abrirJardim(tipo) {

  const pessoa =
    publicos[tipo];

  if (!pessoa) {
    return;
  }


  let floresHTML = "";

  const diaAtual =
    obterDiaFlorzinha();


  for (
    let dia = 1;
    dia <= 31;
    dia++
  ) {

    const cumprido =
      diaFoiCumprido(
        dia,
        tipo
      );


    const simbolo =
      cumprido
        ? escolherFlorJardim(
            dia,
            tipo
          )
        : "🌱";


    let classes =
      "dia-jardim";


    if (cumprido) {

      classes +=
        " cumprido";

    }


    if (dia === 24) {

      classes +=
        " dia-auxiliadora";

    }


    if (dia === diaAtual) {

      classes +=
        " dia-atual";

    }


    floresHTML += `

      <div class="${classes}">

        <span class="numero-dia">
          ${dia}
        </span>

        <span class="flor-dia">
          ${simbolo}
        </span>

      </div>

    `;
  }


  const total =
    contarFlores(tipo);


  const percentual =
    Math.round(
      (total / 31)
      *
      100
    );


  let mensagemFinal = `

    Continue cultivando seu Jardim de Maria.
    Cada pequena atitude feita com amor
    faz uma nova flor nascer.

  `;


  if (
    total >= 10
    &&
    total < 20
  ) {

    mensagemFinal = `

      Seu jardim já está começando
      a florescer!

      Continue oferecendo
      pequenas atitudes a Maria.

    `;

  }


  if (
    total >= 20
    &&
    total < 31
  ) {

    mensagemFinal = `

      Que bonito!

      Seu Jardim de Maria
      está ficando cheio de flores.

      Continue até o fim de maio.

    `;

  }


  if (total === 31) {

    mensagemFinal = `

      🌹 Seu Jardim de Maria está completo!

      Durante todo o mês de maio,
      você ofereceu 31 pequenas flores
      a Nossa Senhora Auxiliadora.

    `;

  }


  document
    .querySelector(".inicio")
    .innerHTML = `

    <div class="flor">
      🌹
    </div>

    <h1>
      Jardim de Maria
    </h1>

    <h2>
      ${pessoa.icone}
      ${pessoa.nome}
    </h2>

    <p class="mensagem">

      Cada flor representa
      uma atitude oferecida
      a Nossa Senhora Auxiliadora.

    </p>

    <div class="contador-jardim">

      🌷 ${total}
      de 31 flores oferecidas

    </div>

    <div class="barra-progresso">

      <div
        class="barra-preenchida"
        style="width: ${percentual}%"
      >
      </div>

    </div>

    <p class="porcentagem-jardim">

      ${percentual}% do jardim cultivado

    </p>

    <div class="jardim">

      ${floresHTML}

    </div>

    <div class="legenda-auxiliadora">

      💙 O dia 24 é dedicado
      especialmente a Nossa Senhora Auxiliadora.

    </div>

    <p class="mensagem-jardim">

      ${mensagemFinal}

    </p>

    <button
      class="voltar"
      onclick="voltarInicio()"
    >

      ← Voltar ao início

    </button>

  `;
}


// ======================================================
// ESCOLHER JARDIM
// ======================================================

function escolherJardim() {

  document
    .querySelector(".inicio")
    .innerHTML = `

    <div class="flor">
      🌷
    </div>

    <h1>
      Meu Jardim de Maria
    </h1>

    <h2>
      Qual jardim você deseja ver?
    </h2>

    <p class="mensagem">

      Escolha o mesmo perfil
      usado para receber
      suas florzinhas.

    </p>

    <button
      onclick="abrirJardim('crianca')"
    >

      👧 Jardim da Criança

    </button>

    <button
      onclick="abrirJardim('adolescente')"
    >

      🧑 Jardim do Adolescente

    </button>

    <button
      onclick="abrirJardim('adulto')"
    >

      👨 Jardim do Adulto

    </button>

    <button
      class="voltar"
      onclick="voltarInicio()"
    >

      ← Voltar

    </button>

  `;
}


// ======================================================
// VOLTAR AO INÍCIO
// ======================================================

function voltarInicio() {

  location.reload();

}