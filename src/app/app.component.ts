import { Component } from '@angular/core';
import {SpeechRecognitionService} from './speech-recognition.service'

@Component({
  moduleId: module.id,
  providers: [SpeechRecognitionService],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private speech: SpeechRecognitionService){
    this.speech.record('es_ES')
      .subscribe(e => this.title = e)
  }
}
