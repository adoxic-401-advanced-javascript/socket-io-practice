jest.mock('../file-reader', () => {
  return (() => Promise.resolve('hello I am a test'));
});
jest.mock('../file-write', () => {
  return (() => Promise.resolve('HELLO I AM A TEST'));
});

const toUpCase = require('../file-cap');
const fileReader = require('../file-reader');
const fileWriter = require('../file-write');


describe('it modifies text', () => {
  const path = '/home/adoxo/alchemy/test.txt';

  it('reads a file and returns text', () => {
    return fileReader(path)
      .then(result => {
        expect(result).toBe('hello I am a test');
      });
  });

  it('changes to upper case', () => {
    const result = toUpCase(path);
    expect(result).toBe('/HOME/ADOXO/ALCHEMY/TEST.TXT');
  });

  it('writes a file', () => {
    const path = '/home/adoxo/alchemy/test.txt';
    return fileWriter(path)
      .then(result => {
        expect(result).toBe('HELLO I AM A TEST');
      });
  });
});