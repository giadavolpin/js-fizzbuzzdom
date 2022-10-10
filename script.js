/* 
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? 
Abbiamo visto qualcosa di particolare che possiamo usare?

da 1 a 100 in console 
multipli di 3 FIzz
multipli di 5 Buzz
multipli di 3 e 5 FizzBuzz
*/

// i++ <==> i = i + 1

for(let i = 0; i < 100; i++ ) {
    // se la i  è multiplo di 3 allora stampo
   console.log(i);
   if (i % 3 == 0 ){
    console.log('Fizz');
   }
   if (i % 5 == 0 ) {
    console.log('Buzz')
   }
   if (i % 3 == 0 && i % 5 == 0){
    console.log('FizzBuzz');
   }

 }

