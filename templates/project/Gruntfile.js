module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: <!--css-->
      }
    },
    // JS
    uglify: {
      prod: {
        options: {
          beautify: false,
          mangle: true
        },
        files: <!--js-->
      }
    },
    watch: {
      scripts: {
        files: [
          'src/*/src/*.js',
        ],
        tasks: ['uglify:prod'],
        options: {
          nospawn: true
        }
      },
      css: {
        files: [
          'src/*/src/*.scss',
          'src/*/src/*.css'
        ],
        tasks: ['sass']
      }
    },
    copy: {
      build: {
        files: [
          {
            cwd: 'src/',
            expand: true,
            src: ['**','!assets/*','!*/src/*'],
            dest: 'exports',
            options: {
              process: function (content, srcpath) {
                return content.replace('assets/', '');
              },
            },
            //flatten: true,
            filter: 'isFile'
          },
        ],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default',['watch']);
  grunt.registerTask('all', ['uglify:prod','sass']);
  grunt.registerTask('build',['copy:build']);

}
