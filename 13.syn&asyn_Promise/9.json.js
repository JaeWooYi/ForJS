/**
 * JSON : Javascript Object Notation
 * 서버와 클라이언트(브라우져, 모바일) 간의 HTTP통신을 위한
 * 오브젝트 형태의 포맷
 * stringify(object) : JSON
 * parse(JSON) : object
 */
var kkk = {
  name1: 'kkk',
  age: 20,
  eat() {
    console.log('eat');
  },
};
console.log(kkk);

/**
 * 객체를 문자열로 만드는 것 -> 직렬화 : Serializing
 */
var jsonEx = JSON.stringify(kkk);
console.log(jsonEx);

/**
 * 문자열을 Object로 만드는 것 -> 역직렬화 : Deserializing
 * (문자열 데이터를 자바스크립트 객체로 변환)
 */
var obj = JSON.parse(jsonEx);
console.log(obj);
