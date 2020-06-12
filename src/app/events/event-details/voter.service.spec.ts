import { VoterService } from "./voter.service";
import { ISession } from "../index";
import { of } from "rxjs";

//This is a unit test named "VoterService".
//This can be considered an isolated test.
describe('VoterService', () => {
  //The name of this variable should be name almost the same to the name of the service/component/etc this spec is referencing.
  //Also, if HTTP functionality is needed, create a mock version of it (here, it is mockHTTP).
  let voterService: VoterService, mockHttp;

  //Before testing a different unit test (when running multiple tests),
  //"beforeEach()" can be used to create a fresh copy of the voterService.
  beforeEach(() => {
    //Within the "jasmine.createSpyObj", the methods defined in the array correspond to the http methods that are sent.
    //In this case http.post and http.delete are used in the voterService component.
    //This gives mockHttp the ability to call methods that are 'delete' or 'post'.
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post'])
    voterService = new VoterService(mockHttp);
  });

  //This unit test will test the deleteVoter function in the voterService service.
  describe('deleteVoter', () => {

    //"it" will test a specific part of the deleteVoter function.
    //This "it" function has a string that can be used to describe what should be expected.
    //Yes, you can write whatever you want in the string as long as it makes sense.
    it('should remove the voter from the list of voters', () => {
      var session = { id: 6, voters: ['joe', 'john']};
      //This makes it so that if the "delete" function is called within the voterService service,
      //an observable of "false" will be returned.
      mockHttp.delete.and.returnValue(of(false));

      //session needs to be forcefully cast into an ISession for this to work.
      //This is done because this session object does not have all the properties a normal ISession would have.
      voterService.deleteVoter(3, <ISession>session, "joe");

      //expect() will expect the value within its parenthesis to be equal to the value within toBe().
      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe("john");
    })

    it('should call http.delete with the right URL', () => {
      var session = { id: 6, voters: ['joe', 'john']};
      mockHttp.delete.and.returnValue(of(false));

      voterService.deleteVoter(3, <ISession>session, "joe");

      //This will check to make sure this "delete" function was given the correct parameter (in this case, correct URL).
      //The 3 (event ID) comes from the deleteVoter() function above.
      //The 6 (session ID) comes from the session object above.
      //The "joe" comes from the deleteVoter() function above.

      expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe')

    })
  })

  describe('addVoter', () => {

    it('should call http.post with the right URL', () => {
      var session = { id: 6, voters: ['john']};
      mockHttp.post.and.returnValue(of(false));

      voterService.addVoter(3, <ISession>session, "joe");

      //jasmine.any(Object) creates an "any" object, and only checks if the third parameter was an object of some kind.
      //This is done because the "options" object is not complex and doesn't really need to be checked.
      expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe', {}, jasmine.any(Object))
    })

  })

})
