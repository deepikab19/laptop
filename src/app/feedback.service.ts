import { Injectable } from '@angular/core';
import { Question, ChoiceRange, QuestionOption, Survey, Training, User } from './classes';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FeedbackService {

  constructor(private _http: Http) { }

  public getQuestions(id: number) {
    return this._http.get("http://localhost:18134/api/Survey/GetQuestions/" + id)
      .map(res => { return res.json(); })
      .catch((error: any) => { return error; });
  }
  public getTrainings() {
    return this._http.get("http://localhost:18134/api/Survey/GetTraining")
      .map(res => { return res.json(); })
      .catch((error: any) => { return error; });
  }
  //just added
 editTraining(train:Training)
 {
  return this._http.put("http://localhost:18134/api/Survey/Edittraining/"+train.TrainingID, train)
  .catch((error: any) => { return error; });
 }
 //just added
  deleteTrainers(id:number)
  {
    return this._http.delete("http://localhost:18134/api/Survey/Deletetraining/"+id)
    .catch((error: any) => { return error; });
  }
  public submitAnswer(survey) {
    return this._http.post("http://localhost:18134/api/Survey/InsertSurvey", survey)
    .catch((error: any) => { return error; });
  }

}
