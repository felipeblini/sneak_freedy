module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    clean: {
        cssfolder: ["wwwroot/css/"],
        tempfolder: ["css-dev/temp/"]
    },
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css-dev/temp/style.css": "css-dev/less/style.less"
        }
      }
    },
    cssmin: {
        sitecss: {
            files: {
                "wwwroot/css/style-1.0.0.min.css": [
                    "bower_components/bootstrap/dist/css/bootstrap.css",
                    "css-dev/temp/style.css",
                    "css-dev/3rdpart/jquery.mCustomScrollbar.min.css"
                ]
            }
        }
    },
  });

  grunt.registerTask('deploy', ['clean:cssfolder', 'less', 'cssmin', 'clean:tempfolder']);
};