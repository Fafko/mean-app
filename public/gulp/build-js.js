'use strict';

const streamqueue   = require('streamqueue');
const uglify   = require('gulp-uglify');

module.exports = (gulp, plugins, config) => () => {

    let stream = streamqueue( {
        objectMode: true
    });
    
    stream.queue(gulp.src([
        './public/src/lib/angular/angular.js',
        './public/src/lib/angular-route/angular-route.min.js',
        './public/src/lib/ngMask/dist/ngMask.js'
    ]));

    stream.queue(gulp.src(config.paths.templates)
            .pipe(plugins.angularTemplatecache( {
                module: 'Templates',
                root: 'templates/',
                standalone: true
            })));
    
    stream.queue(gulp.src([
        './public/src/js/app.js',
        './public/src/js/run.js',
        './public/src/js/router.js',
        './public/src/js/*/**'
    ]));

    return stream.done()
        .pipe(plugins.if( process.env.NODE_ENV != 'production', plugins.sourcemaps.init()))
        .pipe(plugins.concat('app.js'))
        .pipe(plugins.if(process.env.NODE_ENV == 'production', uglify({
            mangle: false
        })))
        .pipe(plugins.if( process.env.NODE_ENV != 'production', plugins.sourcemaps.write()))
        .pipe(gulp.dest(`${config.paths.dist}/${config.output.js}`));
};

