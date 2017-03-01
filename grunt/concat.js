// https://github.com/gruntjs/grunt-contrib-concat
module.exports = {
    'vendor-js': {
        src: [
            '<%= paths.lib.js %>'
        ],
        dest: '<%= paths.dest.lib.js %>'
    },
    js: {
        src: [
            '<%= paths.js %>'
        ],
        dest: '<%= paths.dest.js %>'
    },
    'vendor-css': {
        src: [
            '<%= paths.lib.css %>'
        ],
        dest: '<%= paths.dest.lib.css %>'
    }
};
