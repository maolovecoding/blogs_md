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
