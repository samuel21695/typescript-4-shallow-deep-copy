// 객체 배열 예시
/**
 * interface 문법을 통해 '어떤 객체'의 속성(property)과 타입(type)을 정의할 수 있습니다.
 * User라는 인터페이스를 따르는 객체는 id와 name 속성을 가져야 하고, id는 number 타입, name은 string 타입이어야"만" 하게끔
 * 타임 안정성(type safety)을 보장합니다.
 */
/**
 * users 라는 배열은 인터페이스(특정 형식)인 User를 따르는 객체만을 원소로 가질 수 있게끔 제한됩니다.
 * 실제적인 코드로서는 위 interface만 확인하면 어떤 객체든 무슨내용이 어떤 구조로 되어있는지 추론 할 수 있게됩니다.
 */
var users = [
    { id: 1, name: "공욱재" },
    { id: 2, name: "공효진" }
];
/**
 * @param obj User 객체
 * @returns Object를 JSON 문자열로 변환한 후 다시 JSON 객체로 뱐환한 User 객체
 */
function jsonConvertObject(obj) {
    return JSON.parse(JSON.stringify(obj));
}
// 얕은 복사
/**
 * 얕은 복사의 개념은 배열의 원소가 객체일 경우. 원소의 객체를 복사하지 않고 참조만 복사하는 것을 의미합니다.
 * 아래의 전개 연산자(spread operator)를 통해 객체를 복사하고 있지만, 객체의 속성이 객체일 경우. 참조만 복사하게 됩니다.
 */
var shallowCopiedUsers = users.map(function (user) { return user; });
console.log(shallowCopiedUsers);
