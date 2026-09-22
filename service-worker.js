const CACHE_NAME =
  "florzinha-nossa-senhora-v2";


const ARQUIVOS = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./manifest.json",
  "./icon.svg",
  "./nossa-senhora-auxiliadora.png",
  "./dom-bosco.png"
];


self.addEventListener(
  "install",
  evento => {

    evento.waitUntil(

      caches
        .open(CACHE_NAME)
        .then(
          cache =>
            cache.addAll(ARQUIVOS)
        )

    );

    self.skipWaiting();

  }
);


self.addEventListener(
  "activate",
  evento => {

    evento.waitUntil(

      caches
        .keys()
        .then(
          nomes => {

            return Promise.all(

              nomes
                .filter(
                  nome =>
                    nome !== CACHE_NAME
                )
                .map(
                  nome =>
                    caches.delete(nome)
                )

            );

          }
        )

    );

    self.clients.claim();

  }
);


self.addEventListener(
  "fetch",
  evento => {

    if (
      evento.request.method !== "GET"
    ) {
      return;
    }


    evento.respondWith(

      caches
        .match(evento.request)
        .then(
          resposta => {

            return (
              resposta ||
              fetch(evento.request)
            );

          }
        )

    );

  }
);
