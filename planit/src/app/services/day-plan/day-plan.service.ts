import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Plans } from '../../models/plans';


@Injectable({
  providedIn: 'root'
})
export class DayPlanService {

  constructor(private http: HttpClient) { }

  private planURL = "http://planitproject2-env-1.eba-tguhtqck.us-east-2.elasticbeanstalk.com/planit/";

  getAllTrips(): Promise<Plans[]> {
    return firstValueFrom(this.http.get<Plans[]>(this.planURL));
  }

  getTripById(id: string): Promise<Plans> {
    return firstValueFrom(this.http.get<Plans>(this.planURL + "/" + id));
  }

  createNewTrip(plan: Plans) {
    return firstValueFrom(this.http.post(this.planURL, plan));
  }

}
