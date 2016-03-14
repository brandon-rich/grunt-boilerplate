# My Boilerplate

A place for me to assemble all the things that might be needed for new front-end development projects.

[Bootstrap](http://getbootstrap.com/), [Sass](http://sass-lang.com/), [jQuery](https://jquery.com/)

HTML partials ([Assemble](http://assemble.io/), [Handlebars](http://handlebarsjs.com/)), [Grunt](http://gruntjs.com/), [libSass](http://sass-lang.com/libsass), [PostCSS](https://github.com/postcss), [Autoprefixer](https://github.com/postcss/autoprefixer) (to IE8), [Browsersync](https://www.browsersync.io/)

[bxSlider](http://bxslider.com/), [enquire.js](http://wicky.nillia.ms/enquire.js/), [Headroom](http://wicky.nillia.ms/headroom.js/), [Matchheight](http://brm.io/jquery-match-height-demo/), [Hamburgers](https://jonsuh.com/hamburgers/), [Wow](http://mynameismatthieu.com/WOW/), [Fontawesome](https://fortawesome.github.io/Font-Awesome/), [pixeden icon font pack](http://themes-pixeden.com/font-demos/7-stroke/)

##Using this repository

The instructions below assume that you are already familiar with Git and several other front-end website development technologies. This is not for beginners and I do not offer any support.

##Node and Grunt installation

###Install NodeJS

First of all, you’ll need [NodeJS](http://nodejs.org/) which is a one-click install via the link.


###Install grunt-cli

Once you have Node installed, you’ll need to run the following command to install the grunt-cli globally. This gives you the command-line interface for grunt (that’s the cli part) and allows you to use the tool anywhere on your computer.

`npm install -g grunt-cli`

If you’re on a mac/linux and that command fails, you may need to run it with *sudo*

`sudo npm install -g grunt-cli`


###Fork this repository

A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project. Forking a repository is a simple two-step process.

1. Navigate to the repository for this project
2. Click Fork


###Install npm packages

Once you have your fork of the repo installed on your local machine, navigate to local directory using the terminal. Then run the following command to install the required npm packagages.

`npm install`

If you’re on a mac/linux and that command fails, you may need to run it with *sudo*

`sudo npm install`


###Running the local development environment

Once all the dependencies have been installed, a simple command of *grunt* will build the files and serve them up with Browsersync.

`grunt`


###Build

Edit the HTML partials in the assemble directory and start styling in the scss directory. Your changes will be reflected in the www directory and the browser will reload automatically.

 
## License

Licensed under [The MIT License (MIT)](http://opensource.org/licenses/MIT)
Copyright (c) 2016 Mike Lorey
