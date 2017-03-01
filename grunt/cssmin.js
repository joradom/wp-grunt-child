// https://github.com/gruntjs/grunt-contrib-cssmin
module.exports = {
    theme: {
        files: {
            '<%= paths.dest.min.lib.css %>': ['<%= paths.dest.lib.css %>'],
            '<%= paths.dest.min.css %>': ['<%= paths.dest.scss %>']
        }
    }
};
