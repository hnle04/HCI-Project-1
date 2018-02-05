import { TranslationsAppPage } from './app.po';

describe('translations-app App', () => {
  let page: TranslationsAppPage;

  beforeEach(() => {
    page = new TranslationsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
