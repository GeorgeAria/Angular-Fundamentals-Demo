# NgFundamentals

## Tips and Tricks
* The Toastr library allows for good looking notifications in web app.
* Import any CSS-related files (like from Bootstrap) and Javascripts files imported from npm to the angular.json file.
* proxy.conf.json allows for the communication with the ngf-server. npm start in the package.json has code so that this happens.
* To start the ngf-server, use "npm run server".
* Unit tests are meant to test a piece of code. They should be fast, easy to write and reliable.

## Unit Test Notes

### The "voter.service.spec.ts" file gives documentation on how to work with Unit Tests. <br /><br /><br />
### Jasmine is a behavior-driven development framework and is used to create Unit Tests. <br /> <br />

### AAA is a unit test structure.
* The first A is for "arrange", where the initial state of the unit test is set up (e.g. creating a class).
* The second A is for "act", which is the part of the unit test where something is changed (e.g. method is called).
* The third A is for "assert", where checking the expected result happens given the initial state and change in state. <br /> <br />

### DAMP is also a unit test structure
* This allows for a little code duplication as long as it "tells a story"(e.g. trying to add a new user that already exists). <br /> <br />

### Mocking involves replacing a dependency with a fake piece of code that does less than the original code did.
* An example of this can be mocking an HTTP server for the purpose of a unit test. <br /> <br />

### Karma is a command line test runner that allows the unit tests to be executed. <br /> <br />

### There are 2 types of tests: Isolated and Integrated Tests. <br /> <br />
### NOTE: The "session-list.component.isolated.spec.ts" and the "session-list.component.integrated.spec.ts" files can be referenced.

### Isolated tests test the class only and not the template code (HTML), making them simple in nature.
* They are the preferred test for services and pipes.
* The constructor is called directly in the class and is manually created by the developer. <br /> <br />

### Integrated tests test the class and the template (if its a component/directive), making them complex in nature.
* They are the preferred test for components and directives, and sometimes services.
* It is constructed by the framework, not by the developer using the TestBed utility.
* There are 2 types of integrated tests: deep and shallow.
* A deep test will test multiple components (e.g. parent and child component).
* A shallow test will only test a single component. <br /> <br />

## Linting Notes

### Linting finds the "lint" in your code, with the lint being the pieces of code that, while they don't cause major problems, they may build up and cause bigger problems. <br /> <br />

### In other words, it points out and fixes potential problems in your code (typically coding-style changes).<br />
### Ex: Missing semicolons, inconsistent single/double quotes and lines of code that are too long. <br /> <br />

### Linting is VERY important if you want consistent code across your team and if you use CI, which can reject code if it does not pass linting.<br /> <br />

### TSLint is a TypeScript linter that allows for configuration.<br />
### NOTE: Installing the TSLint extension in VSCode allows for linting suggestions to show up in the code.<br />
### If you have different opinions compared to TSLint's suggstions, go to the "tslint.json" file in the root directory to change them. <br /><br />

### Another popular linter is Prettier, but there is only a small amount of configuration.<br /><br />

## Linting in the Command Line 

* ng lint: Will lint all code and report any errors. <br />
* ng lint --fix: Will lint all code and fix any errors if possible.<br />
* NOTE: This may take a while to execute if you have a lot of errors, so start linting as early as possible.

## Building code for a Production Environment

### A couple of things will happen when you call the "ng build" command. <br />

* Minification: Removes all whitespace from code and potentially does other things like giving shorter names to certain variables, making things easier to compile and process. <br />
* Bundling: Combines all the code from various files (like Javascript files) into one single file, meaning less requests and less overhead for the client browser.
* Tree Shaking: Removes code that isn't called in the application (e.g. a service that has 2 methods but only 1 is used, so the method that isn't used is removed from the production code).
* AOT (Ahead of Time compiler): Turns templates into Javascript code and ensure that the components using those templates don't do anything that would cause problems in production. This makes it so that the templates and rendering the UI that is sent to user is faster and the Angular framework download will be smaller. It also plugs some security holes, which is VERY IMPORTANT.

### All files that are built with the "ng build" command will be put in the "dist" folder in the root directory.

## Bulding to production in the Command Line

* ng build: Bundles code and minimizes it to some degree.
* ng build --prod: Same as "ng build", but sets other flags to specific values. This is more optimal and more performant than "ng build" (which by default has a --dev flag).

## Homework
* In the nav-bar html code, make it so that the "Events" dropdown shows all events and links to the event page.
