# TODO Demo

Hi my name is Yuriy Horobey  yuriy.horobey@gmail.com
and I am creating this demo project in order to briefly show my Angular/Typescript skills, code style and my approach
in general.

The solely purpose of this project is to be shown during job interviews and nothing else.

## Technologies/Tools used

* Angular 2
* Typescript 2
* SystemJS
* NPM
* Git/GitHub
* Markdown

## Approach & Goals
When I start any project, even if I am one and only developer, I am keeping in mind that in some future the team will grow,
some new people will get on board and so structuring the project my main goal is to save them pain at the bottom while
installing, configuring solving environment problems etc etc.

I am trying to achieve such a project structure that this readme is enough to immediately install-build-start everything
 just by copying and running some command lines right from this readme in terminal window.

## Getting started

### Installation

#### Preconditions
Git, Node and NPM

#### Clone this repo
```git clone https://github.com/YuriyHorobey/ng2-demo.git```

#### Global packages
```npm i -g rimraf copyfiles typescript```
* [rimraf](https://www.npmjs.com/package/rimraf) is utility to remove files and directories
* [copyfiles](https://www.npmjs.com/package/copyfiles) is used to copy static content like HTML-s
* [typescript](https://www.typescriptlang.org/) version ^2.0 is used

> Of course in future they will be replaced with more intelligent build system.
> But for quick demo they do their job.

#### Local packages
```npm i```

### NPM scripts
#### Just show it
when someone came and asks you to show the stuff:<br/>
`npm start`<br/>
It is equivalent to<br/>
`npm run build & npm run server`

#### Build commands
* Cleanup and build everything:<br/>
`npm run build`<br/>
Equvivalent:<br/>
`npm run build:clean & npm run build:compile & npm run build:static`
* Cleanup<br/>
`npm run build:clean`<br/>
Just deletes `./dist` folder
* Compile all the Typescripts, don't copy statics:<br/>
`npm run build:compile`<br/>
This command will not start watching for changes in `.ts`, just runs `tsc`
* Process static files like `.html` etc<br/>
`npm run build:static`
* Start server<br/>
`npm run server`
* Start **development mode**<br/>
`npm run dev`<br/>
This willactually do the following:<br/>
`npm run build:clean & npm build:copy & start tsc -w & npm start server`<br/>
Cleanup, build everything, start `tsc` in watch mode, start dev server

> Attention: currently this will not watch/build static files like `html` or `css`

* Run tests<br/>
    `npm test`<br>

> Not implemented yet

## Project structure & Folders
* **[root folder]**<br>
   Mainly config files, maybe some other auxiliary files like `.editconfig`, tests starting scripts, etc.<br/>
   In order to simplify project configuration (dev server, build or testing tools) it can also contain some basic source
   files like `index.html`, `index-dev.html`, etc, however it is not advised and can be subject for refactoring in future.<br/>
    **to be kept in the repository**.
* **src**<br>
    All the sources, whatever you produce: `.ts`, `.css`, images etc sits in this folder.<br/>
    **to be kept in the repository**.
* **docs**<br>
    All the documentation either generated by tools like `tsdoc` as well as hand written.<br>
    **to be kept in the repository**.
* **node_modules & alike**<br>
    Modules installed by `NPM`, `bower` and other tools alike.<br/>
    **Never kept in the repository**.
* **dist**<br>
    Output directory. Everything inside this directory is generated by build tools and never manually<br/>
    **Never kept in the repository**.
* **[environment specific]**<br>
    Your particular development environment can also produce some specific folders like `.idea`<br>
    **Never kept in the repository**.

### Sources folder


