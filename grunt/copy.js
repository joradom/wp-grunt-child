// https://github.com/gruntjs/grunt-contrib-copy
module.exports = {
    cssSourceMap: {
        expand: true,
        flatten: true,
        filter: 'isFile',
        src: [
            '<%= paths.lib.sourceMap %>'
        ],
        dest: '<%= paths.dest.lib.sourceMap %>'
    },
    fonts: {
        expand: true,
        flatten: true,
        filter: 'isFile',
        src: [
            '<%= paths.lib.fonts %>'
        ],
        dest: '<%= paths.dest.lib.fonts %>'
    }
};
