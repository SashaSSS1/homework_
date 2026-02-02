function checkProbabilityTheory(count) {
  let even = 0;
  let odd = 0;

  for (let i = 0; i < count; i++) {
    // випадкове ціле число в діапазоні [100..1000]
    let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

    if (randomNumber % 2 === 0) {
      even = even + 1;
    } else {
      odd = odd + 1;
    }
  }

  // відсотки
  let evenPercent = (even * 100) / count;
  let oddPercent = (odd * 100) / count;

  console.log("Кількість згенерованих чисел:", count);
  console.log("Парних чисел:", even);
  console.log("Непарних чисел:", odd);
  console.log("Відсоток парних:", evenPercent.toFixed(2) + "%");
  console.log("Відсоток непарних:", oddPercent.toFixed(2) + "%");
}

// приклад запуску
checkProbabilityTheory(1000);
