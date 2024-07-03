// 1 - FOOBAR

// Scrivi un piccolo programma che stampi ogni numero da 1 a 100 su una nuova riga.
// Per ogni multiplo di 3, stampa “Foo” invece del numero.
// Per ogni multiplo di 5, stampa “Bar” invece del numero.
// Per ogni numero multiplo di 3 e 5 insieme, stampa “FooBar” invece del numero.

const esercizio = document.getElementById("esercizio");

for (let i = 1; i <= 100; i++) {
  let stampa = "";

  if (i % 3 === 0) {
    stampa += "Foo";
  }

  if (i % 5 === 0);
  stampa += "Bar";

  if (i % 3 === 0 && i % 5 === 0) {
    stampa += "FooBar";
  }
  if (i % 3 !== 0 && i % 5 !== 0) {
    stampa = i;
  }

  const risultato = document.createElement("p");
  risultato.textContent = stampa;
  esercizio.appendChild(risultato);
}
