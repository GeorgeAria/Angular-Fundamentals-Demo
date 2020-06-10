import { Injectable } from '@angular/core';
import { ISession } from '../shared';

@Injectable({
  providedIn: 'root'
})

export class VoterService {

  constructor() { }

  deleteVoter(session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);
  }

  addVoter(session: ISession, voterName: string) {
    session.voters.push(voterName);
  }

  userHasVoted(session: ISession, voterName: string): boolean {
    //the some() method checks for a true value and if it does, it stops iterating through the array.
    return session.voters.some(voter => voter === voterName);
  }
}
