// Gruntfile.js
module.exports = function(grunt) {
    // Task configuration will go here
    grunt.initConfig({
    // Watch task config
    watch: {
      // Watch sass for changes
      sass: {
        files: [
          'scss/*.scss',
          'scss/**/*.scss'
          ],
        tasks: ['sass']
      },
      // Watch partials for changes
      assemble: {
        files: [
          'assemble/**/*.hbs'
          ],
        tasks: ['assemble']
      },
      styles: {
        files: ['dev/style.css'],
        tasks: ['postcss', 'copy'],
        options: {
          spawn: false,
          livereload: true,
        }
      }
    },
    // SASS task config
    sass: {
      options: {
        sourceMap: true
      },
      dev: {
        files: {
          'dev/style.css' : 'scss/style.scss',
          'www/css/bootstrap.css' : 'scss/bootstrap.scss'
        }
      }
    },
    // Autoprefix the CSS
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({browsers: ['last 2 versions', 'ie 8']})
        ]
      },
      dist: {
        files: {
          'www/css/style.css' : 'dev/style.css'
        }
      }
    },
    // Copy style css map to www
    copy: {
      files: {
        cwd: 'dev',
        src: 'style.css.map',
        dest: 'www/css',
        expand: true
      }
    },
    // Using the BrowserSync Server for your static .html files.
    browserSync: {
      default_options: {
        bsFiles: {
          src : [
            'www/css/*.css',
            'www/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: {
              baseDir: "./www/"
          }
        }
      }
    },
    assemble: {
      options: {
        flatten: true,
        partials: './assemble/modules/*.hbs'
      },
      pages: {
        src: 'assemble/pages/*.hbs',
        dest: 'www/'
      }
    }
  });

  /* load every plugin in package.json */
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-newer' );

  // register a default task.
  grunt.registerTask('default', ['newer:assemble', 'browserSync', 'watch']);

};