// https://github.com/gruntjs/grunt-contrib-uglify
module.exports = {
    theme: {
        options: {
            mangle: true,
            compress: {},
            preserveComments: 'some'
        },
        files: {
            '<%= paths.dest.min.js %>': ['<%= paths.dest.js %>']
        }
    }
};
