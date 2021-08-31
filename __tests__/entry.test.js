import Entry from "./../src/entry.js";

describe("Entry", () => {
  let myEntry;

  beforeEach(() => {
    myEntry = new Entry(
      "hi",
      "This is the body of the journal entry, isn't it? Or is it?"
    );
  });
  test("should correctly create an entry object with a title and body", () => {
    expect(myEntry.title).toEqual("hi");
    expect(myEntry.body).toEqual(
      "This is the body of the journal entry, isn't it? Or is it?"
    );
  });

  test("should correctly return the number of words in the body", () => {
    expect(myEntry.numWords()).toEqual(13);
  });

  test("should correctly return an array containing all vowels in the body", () => {
    expect(myEntry.numVowels()).toEqual(["i", "i", "e", "o", "o", "e", "o", "u", "a", "e", "i", "i", "O", "i", "i"]);
  });

  test("should correctly return an array containing all consonants in the body", () => {
    expect(myEntry.numConsonants()).toEqual(["T", "h", "s", "s", "t", "h", "b", "d", "y", "f", "t", "h", "j", "r", "n", "l", "n", "t", "r", "y", "s", "n", "t", "t", "r", "s", "t"]);
  });

  test("should correctly return the first sentence of the body", () => {
    expect(myEntry.getTeaser()).toEqual("This is the body of the journal entry, isn't it?");
  });
});
