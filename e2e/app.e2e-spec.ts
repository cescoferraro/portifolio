import { CescoPage } from './app.po';

describe('cesco App', function() {
  let page: CescoPage;

  beforeEach(() => {
    page = new CescoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
