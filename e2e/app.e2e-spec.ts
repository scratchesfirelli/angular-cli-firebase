import { PrPage } from './app.po';

describe('pr App', function() {
  let page: PrPage;

  beforeEach(() => {
    page = new PrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
