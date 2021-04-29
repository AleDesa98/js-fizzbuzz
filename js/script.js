// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
for (i = 0; i < 100; i++) {
    var multiplo = 0

    // x multipli di 3
    if ((i + 1) % 3 == 0) {
        multiplo = multiplo + 1
    }

    // x multipli di 5
    if ((i + 1) % 5 == 0) {
        multiplo = multiplo + 2
    }

    // scrittura fizz, buzz o numero
    if (multiplo == 0) {
        console.log(i + 1);
    } else if (multiplo == 1) {
        console.log("Fizz");
    } else if (multiplo == 2) {
        console.log("Buzz");
    } else if (multiplo == 3) {
        console.log("FizzBuzz");
    }
}