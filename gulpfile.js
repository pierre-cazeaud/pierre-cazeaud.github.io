var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer");

/*================
    SCSS FILES
================*/

// Compile SCSS files to CSS
gulp.task("scss", function () {
    gulp.src("sass/style.scss")
        .pipe(sass({
            outputStyle : "compressed"
        }))
        .pipe(autoprefixer({
            browsers : ["last 20 versions"]
        }))
        .pipe(gulp.dest("css/"))
});

// Watch asset folder for changes
gulp.task("watch", ["scss"], function () {
    gulp.watch("sass/*.scss", ["scss"])
});

// Set watch as default task
gulp.task("default", ["watch"]);

