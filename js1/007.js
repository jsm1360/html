// 두개의 값과 한개의 함수를 가지는 객체
const saram = {
    irum:'홍길동',
    nai:20,
    insa() {
        console.log(this.irum, this.nai);
    }
};

saram.insa();

console.log(true+true);
console.log(true+true+true);
console.log(true+false);

console.log(1);
console.log(!1);
console.log(!!1);