module.exports = function(grunt) {

  //Congifure task(s)
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      files:{
        src:'src/JS/Animations.js',
        dest:'JS/index.min.js'
      }
    },

    sass: {
      dev: {
      options: {
        outputStyle: 'expanded'
      },
      files: {
        'CSS/index.css' : 'src/CSS/*.scss'
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      js:{
      files: ['src/JS/*.js'],
      tasks: 'uglify'
    },
      css:{
        files:['src/CSS/*.scss'],
        tasks: 'sass'
      },
      autoprefix: {
        files: ['src/CSS/*.scss'],
        tasks: 'autoprefixer'
      }
    },

    connect: {
      dev: {
        options: {
          hostname:'localhost',
          port:9000,
          bases:['.'],
        }
      }
    },

    autoprefixer: {
      dev: {
        files:{
          'CSS/index.css': 'CSS/index.css'
        }
      }
    }
  });



  // Load the plugins
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-sass');

  // Register task(s)
grunt.registerTask('default',['uglify', 'sass', 'connect', 'watch']);
};
