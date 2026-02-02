const arr = [
  {
    userName: "Test",
    lastName: "Test",
    email: "test.test@gmail.com"
  },
  {
    userName: "Dmitro",
    lastName: "Porohov",
    email: "dmitro.porohov@yahoo.com"
  },
  {
    userName: "Andrii",
    lastName: "",
    email: "andri@mail.ru" // нам такі не підходять
  }
];

// 1 або 2 слова (латиниця/цифри), можуть бути розділені крапкою, далі @, домен gmail.com або yahoo.com
const re = /^[a-z0-9]+(\.[a-z0-9]+)?@(gmail\.com|yahoo\.com)$/i;

function getTrustedEmails(users) {
  const trusted = [];

  for (let i = 0; i < users.length; i++) {
    const email = users[i].email;

    if (re.test(email)) {
      trusted.push(email);
    }
  }

  return trusted;
}

// перевірка
const trustedEmails = getTrustedEmails(arr);
console.log("Trusted emails:", trustedEmails);
