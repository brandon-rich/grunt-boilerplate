// Gruntfile.js
module.exports = function(grunt) {
    // Task configuration will go here
    grunt.initConfig({
    // Watch task config
    watch: {
      // Watch sass for changes
      sass: {
        files: [
          'dev/scss/*.scss',
          'dev/scss/**/*.scss'
          ],
        tasks: ['sass']
      },
      // Watch partials for changes
      assemble: {
        files: [
          'dev/assemble/**/*.hbs'
          ],
        tasks: ['assemble']
      },
      styles: {
        files: ['tmp/style.css'],
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
          'tmp/style.css' : 'dev/scss/style.scss',
          'www/css/bootstrap.css' : 'dev/scss/bootstrap.scss'
        }
      }
    },
    // Autoprefix the CSS
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({browsers: ['> 1%', 'last 2 versions', 'ie 8']})
        ]
      },
      dist: {
        files: {
          'www/css/style.css' : 'tmp/style.css'
        }
      }
    },
    // Copy style css map to www
    copy: {
      files: {
        cwd: 'tmp',
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
        partials: './dev/assemble/modules/*.hbs'
      },
      pages: {
        src: 'dev/assemble/pages/*.hbs',
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