import { NewProjPage } from './app.po';

describe('new-proj App', () => {
  let page: NewProjPage;

  beforeEach(() => {
    page = new NewProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
