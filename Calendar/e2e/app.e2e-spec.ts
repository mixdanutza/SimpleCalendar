import { CalendarPage } from './app.po';

describe('calendar App', () => {
  let page: CalendarPage;

  beforeEach(() => {
    page = new CalendarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
