import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {

  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  @Input() eventId: number;

  visibleSessions: ISession[];

  constructor(public auth: AuthService,
              private voterService: VoterService) { }

  ngOnInit(): void {
  }

  //Every time one of the Input() variables have a change in their value, ngChanges will fire.

  ngOnChanges(): void{
    if(this.sessions)
    {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  //this.sessions.slice(0) will create a complete duplicate of the array with the same elements.
  //this.sessions.filter() creates a brand new array, with the values that have a "level" value equal to the "filter" value.

  filterSessions(filter: string): void{
    if(filter === "all")
    {
      this.visibleSessions = this.sessions.slice(0);
    }
    else
    {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }

  toggleVote(session: ISession) {
    if(this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
    }
    if(this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession): boolean {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }

}

function sortByNameAsc(s1: ISession, s2: ISession){

  //If the first session's name is after (alphabetically) the second session's name, it will return 1.
  if(s1.name > s2.name)
  {
    return 1;
  }
  else if(s1.name === s2.name)
  {
    return 0;
  }
  else
  {
    return -1;
  }
}
function sortByVotesDesc(s1: ISession, s2: ISession){
  //This has similar logic to the function above.
  //If the second session has more votes than the first session, a positive number will be returned.
  //Same number of votes, 0 is returned.
  //The last scenario will always return a negative number, implying the first session has more votes.
  return s2.voters.length - s1.voters.length;
}
