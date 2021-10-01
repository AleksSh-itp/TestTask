import { Injectable } from '@angular/core';
import { Subject } from '../models/country-subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private _subjects: Subject[];
  
  constructor() { 
    this._subjects = [
      { id: 1, name: "Subject 1", federalDistrictId: 1},
      { id: 2, name: "Subject 2", federalDistrictId: 3},
      { id: 3, name: "Subject 3", federalDistrictId: 1},
      { id: 4, name: "Subject 4", federalDistrictId: 2},
      { id: 5, name: "Subject 5", federalDistrictId: 2},
      { id: 6, name: "Subject 6", federalDistrictId: 1},
      { id: 7, name: "Subject 7", federalDistrictId: 3},
      { id: 8, name: "Subject 8", federalDistrictId: 1},
      { id: 9, name: "Subject 9", federalDistrictId: 2},
      { id: 10, name: "Subject 10", federalDistrictId: 2},
    ]
  }

  public getAllSubjects(): Subject[] {
    return this._subjects;
  }

  public getSubjectsByFederalDistrictId(federalDistrictId: number): Subject[] {
    return this._subjects
      .filter(subject => subject.federalDistrictId === federalDistrictId)
  }
}
