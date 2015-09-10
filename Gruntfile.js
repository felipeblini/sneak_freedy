module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    clean: {
        cssfolder: ["wwwroot/assets/css/"],
        jsfolder: ["wwwroot/assets/js/"],
        tempfolder: ["dev_environment/css/less/temp/"]
    },
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "dev_environment/css/less/temp/style.css": "dev_environment/css/less/style.less"
        }
      }
    },
    cssmin: {
        sitecss: {
            files: {
                 "wwwroot/assets/css/styles-1.0.0.min.css": [
                    "bower_components/bootstrap/dist/css/bootstrap.min.css",
                    "dev_environment/css/less/temp/*",
                    "dev_environment/css/plugins/jquery.mCustomScrollbar.min.css"
                 ]
            }
        }
    },
    uglify: {
      sitejs : {
        files : {
          'wwwroot/assets/js/scripts-1.0.0.min.js' : [
            'node_modules/jquery/dist/jquery.min.js',
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'dev_environment/js/app/*',
            'dev_environment/js/plugins/*'
            ]
        }
      }
  }
  });

  grunt.registerTask('deploy', ['clean:cssfolder', 'clean:jsfolder', 'less', 'cssmin', 'uglify', 'clean:tempfolder']);
};