/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { SpeechRecognitionService } from './speech-recognition.service';

describe('SpeechRecognition Service', () => {
  beforeEachProviders(() => [SpeechRecognitionService]);

  it('should ...',
      inject([SpeechRecognitionService], (service: SpeechRecognitionService) => {
    expect(service).toBeTruthy();
  }));
});
