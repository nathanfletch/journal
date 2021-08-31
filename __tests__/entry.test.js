import Entry from './../src/entry.js';

describe('Entry', () => {

  test('should correctly create an entry object with a title and body', () => {
    const myEntry = new Entry("hi","this is the body");
    expect(myEntry.title).toEqual("hi");
    expect(myEntry.body).toEqual("this is the body");
  });
  
  test('should correctly return the number of words in the body', () => {
    const myEntry = new Entry("hi","this is the body");
    expect(myEntry.numWords()).toEqual(4);
  });

  test('should correctly return an array containing all vowels in the body', () => {
    const myEntry = new Entry("hi","this is the body");
    expect(myEntry.numVowels()).toEqual(["i", "i", "e", "o"]
    );
  });
  
  test('should correctly return an array containing all consonants in the body', () => {
    const myEntry = new Entry("hi","this is the body");
    expect(myEntry.numConsonants()).toEqual(["t", "h", "s", "s", "t", "h", "b", "d", "y"]);
  });
});