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


## Homework
* In the nav-bar html code, make it so that the "Events" dropdown shows all events and links to the event page.
