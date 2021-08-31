import Entry from './../src/entry.js';

describe('Entry', () => {

  test('should correctly create an entry object with a title and body', () => {
    const myEntry = new Entry("hi","this is the body");
    expect(myEntry.title).toEqual("hi");
    expect(myEntry.body).toEqual("this is the body");
  });
});