fetch("https://jsonplaceholder.typicode.com/posts") // tra le virgolette ci va l'url da chiamare
  .then(res => res.json()) // questo ci va sempre
  .then(res => console.log(res)) // qua si esegue quello che si vuole con la risposta che ci viene data
  .catch(err => console.error(err)) // questo ci va sempre (gestisce eventuali errori)
