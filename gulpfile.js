const gulp = require("gulp");
const { series, parallel } = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const browsersync = require("browser-sync").create();
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const tsify = require("tsify");

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./dist/"
    },
    port: 3000
  });
  done();
}
// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}
function typescript(cb) {
  return tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist"));
}

function html(cb) {
  return gulp.src("./src/**/*.html").pipe(gulp.dest("dist"));
}

function watchFiles() {
  return gulp.watch("./src/**/*", gulp.series(build, browserSyncReload));
}

function script() {
  return browserify({
    basedir: ".",
    debug: true,
    entries: ["src/main.ts"],
    cache: {},
    packageCache: {}
  })
    .plugin(tsify)
    .bundle()
    .pipe(source("main.js"))
    .pipe(gulp.dest("dist"));
}

const build = series(html, typescript, script);
const watch = gulp.parallel(build, watchFiles, browserSync);

exports.build = build;
exports.watch = watch;
exports.default = build;
