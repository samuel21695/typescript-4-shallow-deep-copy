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
// 깊은 복사
/**
 * JSON으로 저장한 후, 다시 불러오는 방식을 통해 깊은 복사를 구현할 수 있습니다.
 * users 배열과 deepCopiedUsers 배열은 서로 완전히 다른 객체를 참조하고 있습니다.
 */
var deepCopiedUsers = users.map(function (user) { return jsonConvertObject(user); });
console.log(deepCopiedUsers);
// 복사된 배열에서 객체 수정
shallowCopiedUsers[0].name = "공욱재 미남"; // 얕은 복사 떄문에 원본 배열도 수정됨
deepCopiedUsers[1].name = "공효진 미녀";
// 결과 출력
console.groupCollapsed("객체 배열 예시");
console.log("원본 배열: ", users); // 원본 배열
console.log("얕은 복사 배열: ", shallowCopiedUsers); // 얕은 복사 배열
console.log("깊은 복사 배열: ", deepCopiedUsers); // 깊은 복사 배열
console.groupEnd();
/**
 * 얕은 복사와 깊은복사의 차이점
 * 얕은 복사는 객체의 속성이 객체일 경우, 참조만 복사하게 됩니다.
 * 깊은 복사는 객체의 속성이 객체일 경우, 객체를 복사하게 됩니다.
 * 메모리 관점에서 얕은 복사는 원본 객체와 복사된 개체가 같은 객체를 참조하고 있기 때문에, 복사된 객체를 수정하면 원본 객체도 수정되게 됩니다.
 * 깊은 복사는 원본 객체와 복사된 객체가 다른 객체를 참고하고 있기 때문에, 복사된 객체를 수정해도 원본 객체는 수정되지 않습니다.
 *
 * C언어에서 악명이 높은 포인터의 개념과 비슷한데,
 * 눈에 안보이는 메모리 공간에 객체가 저장되어 있고, 그 변수는 그 메모리 공간을 참조하고 있다는 개념입니다.
 * 사람의 눈으로는 변수에 객체가 저장되어 있다고 보이지만, 실제로는 변수는 객체를 참고하고 있을 뿐입니다.
 * 그래서 실험을 통해 눈으로 확인하는 것이 중요합니다.
 */ 
