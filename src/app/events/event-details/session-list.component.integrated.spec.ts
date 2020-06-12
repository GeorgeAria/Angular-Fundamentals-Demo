//"TestBed" is the utility used to set up an integrated test.
//"async" is a helper function used in integrated tests.
//"ComponentFixture" is a type used in integrated tests.
//"DebugElement" is a type used in integrated tests.
//IMPORTANT: NO_ERRORS_SCHEMA makes it so that this integrated test is a shallow integrated test instead of a deep one.
//"By" is a utility function used in integrated test.
import { TestBed, async, ComponentFixture } from '@angular/core/testing'
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core'
import { SessionListComponent } from './session-list.component'
import { AuthService } from '../../user/auth.service'
import { VoterService } from './voter.service'
import { By } from '@angular/platform-browser'
import { DurationPipe } from '../shared/duration.pipe';


describe('SesisonListComponent', () => {
  //"fixture" is a wrapper around the component.
  //It gives access to part of the component like its change detection or its dependency injector.
  let fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEl: DebugElement

    //async() is needed to make an asynchronous opertation synchronous.
    //This is necessary for an integrated test.
  beforeEach(async(() => {
    let mockAuthService = {
      //NOTE: Pay attention to what component functions/variables are called in the HTML template.
      //If they are used/called, they should be added here.

      //An "isAuthenticated" function must be added and return true since it is called in the HTML template.
      //Otherwise, Karma will return an error.
      //A "currentUser" property is accessed in the component, so it must be added here.
      isAuthenticated: () => true,
      currentUser: {userName: 'Joe'}
    };
    let mockVoterService = {
      userHasVoted: () => true,
    };

    //The object within "TestBed.configureTestingModule()" is extremely similar to the @NgModule within
    //the app.module.ts file.
    TestBed.configureTestingModule({
      //If forms were being tested, the FormsModule would be imported.
      imports: [],
      declarations: [
        SessionListComponent,
        DurationPipe,
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService },
      ],
      //NO_ERRORS_SCHEMA makes is so that Angular will ignore any HTML elements and properties it doesn't recognize.
      //This prevents any errors that may occur since this is a shallow integrated test, not a deep one.
      //The "DurationPipe" pipe is kept since checking if the date is rendered properly is wanted.
      schemas: [NO_ERRORS_SCHEMA]
    })
  }))

  //This "beforeEach" will execute after the previous "beforeEach" since the latter will execute synchronously.
  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  })

  describe('initial display', () => {

    //This can be changed to, "should have the correct initial display" and all data bindings can be tested.
    //This means we can test for the correct presenter, duration, level, abstract, etc.)
    it('should have the correct session title', () => {
      //This "sessions" object (which is meant to be an ISessions[]) has all of the values initialized properly to prevent any errors.
      //In isolated tests, shortcuts were taken and not all values were initialized.

      component.sessions = [{ id: 3, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['john', 'bob']}];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      //"ngOnChanges()"" must be executed since nothing would appear in the HTML template otherwise.
      //NOTE: "ngOnInit()"" runs automatically in an integrated test and does not need to be run automatically.
      component.ngOnChanges();
      //"fixture.detectChanges()" updates the HTML and the data bindings within. Otherwise, nothing would show up in the HTML.
      //It runs through the change detection cycle, taking every value that the component has (including the values above
      //and the values in the HTML template like "visibleSessions") and re-renders them in the HTML template.
      fixture.detectChanges();

      //The following is an example of a deep-integrated test, since it needs to add all the other components, directives
      //and/or pipes in order to work properly.

      //element is a reference to the root-level DOM node.
      //"querySelector()" allows for the querying of one of the element's children.
      //This will look for an element with the attribute of "well-title".
      //".textContent" will give back the contents of the "well-title" div as text.
      //In this case, it should be "Session 1".
      //"toContain" can be used instead of "toBe" because the "textContent" may have more pieces than just the binding.

      // expect(element.querySelector('[well-title]').textContent).toContain('Session 1');



      //"debugEl.query(By.css())" can be used to look up a specific CSS element.
      //In this case, the "well-title" selector is looked up.
      //It does all of this from the root DOM element.
      //".nativeElement" is needed to return the native Element value and not the debug element value.
      //NOTE: "By" can be used to look for directives along with css elements.
      expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
    })
  })
})
