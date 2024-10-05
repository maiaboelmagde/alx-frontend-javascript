export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('length must be number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('students must be an array');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(NewName) {
    if (typeof NewName !== 'string') {
      throw new TypeError('Name must be string');
    }
    this._name = NewName;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('legnth must be a number');
    }
    this._length = newLength;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new TypeError('students must be an array');
    }
    this._students = newStudents;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
