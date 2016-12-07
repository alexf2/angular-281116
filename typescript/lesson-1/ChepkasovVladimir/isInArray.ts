// 1)
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.

function isInArray(array:any[], ...numberArray: any[]): boolean {
  for (let e of numberArray) {
    if (array.indexOf(e) == -1){
      return false;
    }
  }
  return true;
}
