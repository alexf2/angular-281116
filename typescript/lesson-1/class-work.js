// interface Account {
//     name: string;
//     age: number;
// }
// let account = Account;
// let person = {
//     name: 'Igor',
//     age: 30
// }
// let myPesone:typeof person;
// myPesone= {
//     name: 'Stepan',
//     age: 33
// }
// class Account{
//       name: string;
//     age: number; 
// }
// let person1 = Account;
// let person2: Account;
// let obj:Object;
// let  a = 2;
// let num: number = 1;
// let str: string = 'hi';
// let bool: boolean = true;
// let v: void = undefined;
// let a: () => void;
/* what???? */
// let a:any;
//
// a = 1212;
// a = true;
// let a: (r)=>number;
// let num:number;
// num = 1;
// num = null;
// num = undefined;
// const account: {
//     readonly name: string,
//     readonly age: number,
//     getName?: () => string,
//     getAge?(): number
// } = { name: 'Igor', age: 30 }
// // account.age = 40;
// let array1:  {
//     readonly name: string,
//     readonly age: number,
//     getName?: () => string,
//     getAge?(): number
// }[];
// array1 = [{ name: 'Igor', age: 30 },{ name: 'Igor', age: 30 },{ name: 'Igor', age: 30 }]
// let array2: Array<string>;
// let array3: [string,number];
// array3 = ['as',2,2,2,2,3,'s'];
// let func: (r:number ) => number;
//let func: {(r:number ):number};
// let myClass: new (r:number ) => number;
// let myClass: {new (r:number ):number};
// interface Account {
//     name: string;
//     age: number;
// }
// let account: Account
// interface Mover {
//     move():void;
//     getStatus():{speed:number};
// }
// interface Shaker {
//     move():void;
//     getStatus():{frequency:number};
// }
// interface MoverShaker extends  Mover,Shaker{
//      getStatus():{frequency:number,speed:number};
// }
// interface IBase{
//     id:number;
// }
// let base1:IBase = {id:1, name:'Ola',female:true}
// interface IBase{
//     name:string;
// }
// let base2:IBase = {id:1, name:'Ola',female:true}
// interface IBase{
//     female:boolean;
// }
// let base3:IBase = {id:1, name:'Ola',female:true}
// function reverse<TT>(list: TT[]): TT[] {
//     let reversedList: TT[] = [];
//     for (let i = (list.length - 1); i >= 0; i--) {
//         reversedList.push(list[i])
//     }
//     return reversedList;
// }
// let leters = ['a', 's', 'b'];
// let reversed = reverse<string>(leters);
// interface Repository<T, TId> {
//     getById(id: TId): T;
// }
// type account<T,I> = {name:T,age:I}
// let account:account<string,number>;
// interface Account <MyGeneric extends {id:number,name:string}>{
//     cred:MyGeneric;
// }
// let account1:Account< {id:number,name:string}>
// let account2:Account< {id:number,name:string, female:boolean}>
// interface User{
// }
// class MyService{
//  getUsers():Observable<User>{
//      return  this._http.get('')......
//  }
// }
// type snb = string | number | boolean;
// let array : ReadonlyArray<number> = [0,1,2,3,4];
// b[5]=1;
// b.push(2)
// b.length = 3
// function isString(item:any): item is string{
//         if (typeof item === 'string') {
//            return true;
//         }
//         return false;
// }
// function isNumber(item:any): item is number{
//         if (typeof item === 'number') {
//            return true;
//         }
//         return false;
// }
// function average(...a: (number | string)[]): string {
//     let total = 0;
//     let count = 0
//     for (let i = 0; i < a.length; i++) {
//         let item = a[i];
//         if (isString(item)) {
//             // здесь я строка!!!
//             total += parseInt(item);
//         }
//         if (isNumber(item)) {
//              // здесь я число!!!
//             total += item;
//         }
//         count++
//     }
//     let average = total / count;
//     return `The average is ${average}`
// }
// average(1, 2, 2, 3, 4, 5, 6, 6)
// function average(a:string,b:string,c:string):string;
// function average(a:number,b:number,c:number):string;
// function average(a:string|number,b:string|number,c:string|number):string{
//     //
//     //
//     //
//     return ``;
// }
// class Point {
//     public x: number;
//     private y: number;
//     protected z: number;
//     public constructor() {
//      this.
//     }
// }
// let point = new Point();
// point.z
// class MyPoint extends Point{
//     constructor(){
//         super()
//         this.
//     }
// }
// class Singleton{
//     private static instance: Singleton;
//     private constructor(){}
//     static getInstance(){
//         if(!Singleton.instance){
//             return new  Singleton()
//         }
//         return Singleton.instance;
//     }
// }
// let inst1 = Singleton.getInstance();
// interface Point{
//     x:number;
//     y:number;
// }
// interface Calc{
//     calcDist():number
// }
// abstract class Point {
//     x: number;
//     y: number;
//     abstract calcDist(): number;
//     getX(): number {
//         return this.x;
//     }
// }
// class Point1 extends Point {
//     public x: number;
//     public y: number;
//     public constructor(){
//         super()
//         this.
//     }
//     public calcDist(): number {
//         return 20;
//     }
// }
// class Point2 extends Point {
//     public x: number;
//     public y: number;
//     public constructor(){
//         super()
//     }
//     public calcDist(): number {
//         return 120;
//     }
// }
