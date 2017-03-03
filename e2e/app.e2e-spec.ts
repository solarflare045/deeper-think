import { DeeperThinkAppPage } from './app.po';

describe('deeper-think-app App', () => {
  let page: DeeperThinkAppPage;

  beforeEach(() => {
    page = new DeeperThinkAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
