const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')

let sass = mix.sass('resources/sass/app.scss', 'public/css')

if (mix.inProduction()) {
    sass.options({
        postCss: [
            require('@fullhuman/postcss-purgecss')({
                content: [
                    './node_modules/bootstrap/dist/js/**/*.js',
                    './node_modules/admin-lte/build/js/**/*.js',
                    './resources/js/**/*.js',
                    './resources/views/**/*.blade.php'
                ]
            })
        ]
    });
}

mix.disableNotifications()
