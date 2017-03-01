// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
    js: {
        options: {
            livereload: true
        },
        files: [
            '<%= paths.watch.js %>'
        ],
        tasks: [
            'build:js'
        ]
    },
    scss: {
        options: {
            livereload: true
        },
        files: [
            '<%= paths.watch.scss %>'
        ],
        tasks: [
            'build:css'
        ]
    }
};
