'use strict';

module.exports = (gulp, plugins, config) => () => {
    gulp.watch(config.paths.less_folder, ['build-less']);
    gulp.watch(config.paths.js, ['build-js']);
    gulp.watch(config.paths.templates, ['build-js']);
    gulp.watch(config.paths.html, ['copy']);
    gulp.watch(config.paths.images, ['copy']);
};