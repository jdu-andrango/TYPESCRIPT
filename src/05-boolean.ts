(()=>{
  let isEnable = true;

  isEnable = false;
  let isNew: boolean = false;
  console.log('isNew : ', isNew);
  isNew = true;
  console.log('isNew : ', isNew);

  const random = Math.random();
  console.log('random : ', random);
  isNew = random >- 0.5 ? true : false;
  console.log('isNew', isNew);

  const myBoolean: boolean = true;
  })();


  var saludo = "Hola Mundo";
console.log(saludo);

let contador = 0;
for (let index = 0; index < 10; index++) {
  contador = index;
  console.log(contador);
  contador = 0;
}
