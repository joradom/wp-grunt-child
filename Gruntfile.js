module.exports = function( grunt ) {
    var paths = {
        // Destination file paths
        'dest': {
            'min': { // Minified file destinations
                'js': 'assets/js/all.min.js',
                'css': 'assets/css/main.min.css',
                'lib': {
                    'css': 'assets/css/vendor.min.css'
                }
            },
            // Non-minified file destinations
            'js': 'assets/js/all.js',
            'scss': 'assets/css/main.css',
            'lib': {
                'js': 'src/js/lib/vendor.js',
                'css': 'assets/css/vendor.css',
                'fonts': 'assets/fonts/',
                'sourceMap': 'assets/css'
            }
        },
        // Paths for watch tasks
        'watch': {
            'scss': [
                'src/scss/**/*.scss'
            ],
            'js': [
                'src/js/*.js'
            ]
        },
        // Vendor file paths
        'lib': {
            'css': [
                'bower_components/fontawesome/css/font-awesome.css'
            ],
            'js': [
                'bower_components/modernizr/modernizr.js',
                'bower_components/fitvids/jquery.fitvids.js',
                'bower_components/matchHeight/jquery.matchHeight.js'
            ],
            'fonts': [
                'bower_components/fontawesome/fonts/*-webfont.*'
            ],
            // source maps to compile
            'sourceMap': [
            ]
        },
        // Non-vendor file paths
        // add JS files to be compiled
        'js': [
            'src/js/lib/vendor.js',
            'src/js/main.js'
        ],
        // add main.scss to be compiled
        'scss': [
            'src/scss/main.scss'
        ]
    };

    require( 'load-grunt-config' )(grunt, {
        init: true,
        data: {
            paths: paths
        },
        loadTasks: 'grunt/*.js'
    });
};
