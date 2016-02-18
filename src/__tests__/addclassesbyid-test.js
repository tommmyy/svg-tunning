import '../testsetup';
import addClassesById from '../addclassesbyid';

describe('addClassesById', () => {
  it('is defined', () => {
    expect(addClassesById).toBeDefined();
  });

  it('adds classes to svg elements by their id', (done) => {
    addClassesById('<svg><g id="a"></g></svg>').then((result) => {
      expect(result.indexOf('class="a"')).not.toBe(-1);
      done();
    });
  });

  it('adds classes by mapping id -> classes', (done) => {
    addClassesById('<svg><g id="a"></g></svg>', { a: 'b' }).then((result) => {
      expect(result.indexOf('class="a b"')).not.toBe(-1);
      done();
    });
  });
});
