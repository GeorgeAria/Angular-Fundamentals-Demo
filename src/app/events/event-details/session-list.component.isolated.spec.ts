import { SessionListComponent } from './session-list.component'
import { ISession } from '../shared';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let mockAuthService, mockVoterService;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  })

  describe('ngOnChanges', () => {

    it('should filter the session correctly', () => {
      //The 4 input values in the SessionListComponent are initialized.
      component.sessions = <ISession[]>[{name: 'session 1', level: 'intermediate'},
        {name: 'session 2', level: 'intermediate'},
        {name: 'session 3', level: 'beginner'}];
      component.filterBy = 'intermediate';
      component.sortBy = 'name';
      //eventId isn't technically needed, but it is here for the sake of completeness.
      component.eventId = 3;

      //ngOnChanges() normally runs automatically in production, but it must be run manually here.
      component.ngOnChanges();

      //More expectations can be put, including checking to make sure that the values in the visibleSessions array are not "beginner".
      expect(component.visibleSessions.length).toBe(2);
    })

    it('should sort the session correctly', () => {
      component.sessions = <ISession[]>[{name: 'session 1', level: 'intermediate'},
        {name: 'session 3', level: 'intermediate'},
        {name: 'session 2', level: 'beginner'}];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions[2].name).toBe('session 3');
    })
  })
})
