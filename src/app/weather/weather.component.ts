import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  apiKey: string = '509cf7a7f711288d767f59e286328034';

  states: any[] = [
    { value: 'AL', viewValue: 'Alabama' },
    { value: 'AK', viewValue: 'Alaska' },
    { value: 'AZ', viewValue: 'Arizona' },
    { value: 'AR', viewValue: 'Arkansas' },
    { value: 'CA', viewValue: 'California' },
    { value: 'CO', viewValue: 'Colorado' },
    { value: 'CT', viewValue: 'Conneticut' },
    { value: 'DE', viewValue: 'Delaware' },
    { value: 'DC', viewValue: 'D.C' },
    { value: 'FL', viewValue: 'Florida' },
    { value: 'GA', viewValue: 'Georgia' },
    { value: 'HI', viewValue: 'Hawaii' },
    { value: 'ID', viewValue: 'Idaho' },
    { value: 'IL', viewValue: 'Illinois' },
    { value: 'IN', viewValue: 'Indiana' },
    { value: 'IA', viewValue: 'Iowa' },
    { value: 'KS', viewValue: 'Kansas' },
    { value: 'KY', viewValue: 'Kentucky' },
    { value: 'LA', viewValue: 'Louisianna' },
    { value: 'MA', viewValue: 'Maine' },
    { value: 'MD', viewValue: 'Maryland' },
    { value: 'MA', viewValue: 'Masachussetes' },
    { value: 'MI', viewValue: 'Michigan' },
    { value: 'MN', viewValue: 'Minnesota' },
    { value: 'MS', viewValue: 'Mississipi' },
    { value: 'MO', viewValue: 'Missouri' },
    { value: 'MT', viewValue: 'Montana' },
    { value: 'NE', viewValue: 'Nebraska' },
    { value: 'NV', viewValue: 'Nevada' },
    { value: 'NM', viewValue: 'New Mexico' },
    { value: 'NY', viewValue: 'New York' },
    { value: 'NC', viewValue: 'North Carolina' },
    { value: 'ND', viewValue: 'North Dakota' },
    { value: 'OH', viewValue: 'Ohio' },
    { value: 'OK', viewValue: 'Oklahoma' },
    { value: 'OR', viewValue: 'Oregon' },
    { value: 'PA', viewValue: 'Pennsylvania' },
    { value: 'RI', viewValue: 'Rhode Island' },
    { value: 'SC', viewValue: 'South Carolina' },
    { value: 'SD', viewValue: 'South Dakota' },
    { value: 'TN', viewValue: 'Tennessee' },
    { value: 'TX', viewValue: 'Texas' },
    { value: 'UT', viewValue: 'Utah' },
    { value: 'VT', viewValue: 'Vermont' },
    { value: 'VA', viewValue: 'Virginia' },
    { value: 'WA', viewValue: 'Washington' },
    { value: 'WV', viewValue: 'West Virginia' },
    { value: 'WI', viewValue: 'Wisonsin' },
    { value: 'WY', viewValue: 'Wyoming' },
  ];


  @Input() city:string;

  constructor() {}

  ngOnInit(): void {}

  async getWeather(location: string, stateCode: string): Promise<any> {
    location.toLowerCase;
    console.log(location);

    const weatherInfo = await fetch(
      `api.openweathermap.org/data/2.5/weather?q=${location},${stateCode}&appid=${this.apiKey}`
    );
  }


  setState(state:string):string{
    this.city
    return ''
  }
}
