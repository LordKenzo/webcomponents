## Installazione

---

Segui i passaggi di seguito riportati e tieni presente che alcuni comandi potrebbero non essere validi in Windows ma solo in bash Linux e MacOS:

```bash
mkdir project && cd project
mkdir src && mkdir dist
npm init
npm i -D gulp typescript gulp-typescript browser-sync
touch src/main.ts
npx gulp
node dist/main.js
```

per i file di configurazione vedi i sito di typescript, poi ho fatto delle modifiche.

Attenzione all'errore `main.js:2 Uncaught ReferenceError: exports is not defined`. Questo avviene perchè devo fare il bundle del mio file js, che non risolvo anche ponendo `<script type="module" src="main.js"></script>`.
Potrei usare gulp-deporder per le dipendenze, gulp-concat per concatenare i file in un unico file JavaScript e rimuove tutte le console e le istruzioni di debugging con gulp-strip-debugging e fare la minimizzazione del codice con gulp-uglify.
Oppure installo `npm i -D gulp-browserify gulp-concat gulp-uglify`. Ma leggo che gulp-browserify: "THIS PLUGIN IS NO LONGER MAINTAINED". Dalla guida di TypeScript vedo questo "suggerimento":

`npm install --save-dev browserify tsify vinyl-source-stream`.

Attenzione. Con ES5 come target ottengo l'errore: `Failed to construct 'HTMLElement': Please use the 'new' operator, this DOM object constructor cannot be called as a function`.
Ho impostato: "target": "es6" in tsconfig.json.

## Riferimenti

https://www.typescriptlang.org/docs/handbook/gulp.html
