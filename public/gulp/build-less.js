'use strict';

module.exports = (gulp, plugins, config) => () => {
    
    return gulp.src(config.paths.less)
        .pipe(plugins.less())
        .pipe(plugins.autoprefixer({ browsers: ['last 2 versions'] }))
        .pipe(plugins.if(process.env.NODE_ENV == 'production', plugins.minifyCss()))
        .pipe(gulp.dest(`${config.paths.dist}/css`));
};
