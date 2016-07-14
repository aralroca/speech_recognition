import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Rx';

interface IWindow extends Window {
  webkitSpeechRecognition:any;
}

@Injectable()
export class SpeechRecognitionService {

  constructor(private zone: NgZone) { }

  record(language: string): Observable<string> {
    return Observable.create(observer => {
      const { webkitSpeechRecognition }: IWindow = <IWindow>window;
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = e => this.zone.run( () => observer.next(e.results.item(e.results.length -1).item(0).transcript));
      recognition.onerror = e => observer.error(e);
      recognition.onend = () => observer.complete();
      recognition.lang = language;
      recognition.start();
    });
  }

}
