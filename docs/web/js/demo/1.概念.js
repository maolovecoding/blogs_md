// class Container{
//   constructor(value){
//     this.value = value
//   }
//   static of(value){
//     return new Container(value)
//   }
// }
// console.log(Container.of(1))

// const Container2 = (value) => ({
//   value,
// })
// Container2.of = value => Container2(value)
// console.log(Container2.of(1))

// class Functor{
//   constructor(value){
//     this.value = value
//   }
//   static of(value){
//     return new Functor(value)
//   }
//   map(fn){
//     return Functor.of(fn(this.value))
//   }
// }
// console.log(Functor.of(10).map(val=>val*10))

// const Functor2Obj = {
//   map(fn){
//     return Functor2(fn(this.value))
//   }
// }
// const Functor2 = value => {
//   const obj = Object.create(Functor2Obj)
//   obj.value = value
//   return obj
// }
// Functor2.of = value => Functor2(value)
// console.log(Functor2.of(10).map(val=>val*10))

// class Maybe{
//   constructor(value){
//     this.value = value
//   }
//   static of(value){
//     return new Maybe(value)
//   }
//   isNothing() {
//     return this.value === null || this.value === undefined
//   }
//   map(fn){
//     return this.isNothing() ? Maybe.of(null) : Maybe.of(fn(this.value))
//   }
// }
// console.log(Maybe.of().map(val => val.x)) // 不会报错

// const Maybe2 = (value) => ({
//   value,
//   isNothing() {
//     return this.value === null || this.value === undefined
//   },
//   map(fn) {
//     return this.isNothing() ? Maybe2(null) : Maybe2(fn(this.value))
//   }
// })
// Maybe2.of = value => Maybe2(value)
// console.log(Maybe2.of().map(val => val.x)) // 不会报错


class Either {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
  static of(left, right) {
    return new Either(left, right);
  }
  map(fn) {
    return this.right != null
      ? Either.of(this.left, fn(this.right))
      : Either.of(fn(this.left), this.right);
  }
  get value() {
    return this.right != null ? this.right : this.left;
  }
}
const response = { name: "张三", gender: null };
let either = Either.of("男", response.gender).map((x) => `性别：${x}`);
console.log(either.value);

const Either2 = (left, right) => ({
  left,
  right,
  map(fn) {
    return (this.right !== null && this.right !== undefined) ? Either2(this.left, fn(this.right)) : Either2(fn(this.left), this.right)
  },
  get value(){
    return (this.right !== null && this.right !== undefined) ? this.right : this.left
  }
})
Either2.of = (left, right) => Either2(left, right)
const response2 = { name: "张三", gender: null };
let either2 = Either.of("男", response2.gender).map((x) => `性别：${x}`);
console.log(either2.value);