import { Component } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ProfessionalBackground} from "./professional-background.result";

@Component({
  selector: 'app-professional-background',
  templateUrl: './professional-background.component.html',
  styleUrls: ['./professional-background.component.css']
})
export class ProfessionalBackgroundComponent {
  backendUrl = environment.backendUrl;
  partnerId = ''
  profBackground?: ProfessionalBackground
  isLoading: boolean = false;

  constructor(private http: HttpClient) { }

  onProcess() {
    this.isLoading = true
    this.http.post(`${this.backendUrl}/professionalBackground/professionalBackgroundNew`, { partnerId: this.partnerId })
      .subscribe(
        data => {
          console.log(data)
          this.profBackground = data as ProfessionalBackground
          this.isLoading = false
        },
        error => {
          console.error(error);
          this.isLoading = false
        }
      );
  }
}
