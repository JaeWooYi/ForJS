// getter 와 setter 를 접근자 프로퍼티 (Accessor Property)

class Language {
  constructor(lang1, lang2) {
    this.lang1 = lang1;
    this.lang2 = lang2;
  }
  get justPrint() {
    return `get : ${this.lang1}, ${this.lang2}`;
  }

  set justPrint(value) {
    console.log('set : ' + value);
  }
}

let lang = new Language('Java', 'JavaScript');
console.log(lang);

// get
console.log(lang.justPrint);

// set
lang.justPrint = 'C, C++';
