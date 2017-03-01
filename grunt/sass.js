// https://github.com/gruntjs/grunt-contrib-sass
module.exports = {
    foundation: {
        options: {
            style: 'expanded',
            lineNumbers: false
        },
        src: [
            'bower_components/foundation/scss/foundation.scss'
        ],
        dest: 'assets/css/foundation.css'
    },
    theme: {
        options: {
            style: 'expanded',
            lineNumbers: true
        },
        src: [
            '<%= paths.scss %>'
        ],
        dest: '<%= paths.dest.scss %>'
    }
};
