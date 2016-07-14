import { SpeechRecognitionPage } from './app.po';

describe('speech-recognition App', function() {
  let page: SpeechRecognitionPage;

  beforeEach(() => {
    page = new SpeechRecognitionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
