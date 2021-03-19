// დღევანდელი დავალება ძირითადად წინების გამეორება იქნება

// დავალება 1.
// ჩართეთ: https://www.youtube.com/watch?v=5qap5aO4i9A

describeYourSelf();
function describeYourSelf() {
  // const-ები არ დაგავიწყდეთ, თორე შემდეგზეც მოვა ეს დავალება

  // დავალება 1:
  // 5 ცვლადში აღწერეთ თქვენი თავი.
  const birthYear = 1990;
  let age = 30;
  const education = "Astrophysics";
  const homeTown = "Tbilisi";
  const wishToLiveIn = "Canary Islands";

  // 5 ცვლადში აღწერეთ თქვენი ერთ-ერთი საყვარელი სიმღერა
  const songName = "the unforgiven";
  const songArtist = "Metallica";
  const songReleased = 1991;
  const songGenre = "Metal";

  // 5 ცვლადში აღწერეთ თქვენი ერთ-ერთი საყვარელი ფილმი
  const movieName = "The Matrix";
  const movieReleasedYear = "1999";
  const movieDirector = "Wachowski";
  const movieGenre = "Sci-Fi";
  const movieRating = 8.7;

  // 5 ცვლადში აღწერეთ ბოლოს რა წიგნი წაიკითხეთ
  const bookName = "kafka on the shore";
  const bookAuthor = "Haruki murakami";
  const bookCountry = "Japan";
  const bookGenre = "Megical Realism";
  const bookReleasedYear = 2002;

  // 5 ცვლადში აღწერეთ ფილმი Titanic

  // 3 ცვლადში აღწერეთ თქვენი საყვარელი საჭმელი
  const foodName = "Mtsvadi";
  const cookingMethod = "Barbecue";
  const mainIngredient = "Meat";
  const isspicy = false;
  const accompaniedBeverage = "Wine";

  // 5 ცვლადში აღწერეთ თქვენი საბანკო მონაცემები :)
  const cardName = "ZURA PAPISAHVILI";
  const cardNumber = "1548 5852 5662 8524  9624";
  const ValidThru = "07/25";
  const cardType = "Visa";
  const cvcCode = 123;

  // 5.1. წინა დავალებაში ყალბი მონაცემები შეიყვანეთ

  // 6 ცვლადში აღწერეთ თქვენი კომპიუტერი (მაგ: memory=16000 isSSD=true cpu='intel core ix' graphics:'')
  // თან გაეცნობით თქვენს კომპიუტერს. მონაცემები გთხოვთ იყოს ზუსტი...
  const cpu = "i9-9900k";
  const ram = 16000;
  const systemType = "64 bit";
  const graphics = "GTX 1080 Ti";
  const isSSD = true;
  const hdd = "1tb";

  // დავალება 2.1:
  // თქვენი ბოლოს წაკითხული წიგნის გამოშვების წელი შეადარეთ ფილმის გამოშვების წელს დაწერეთ რომელია უფრო მეტი

  if (movieReleasedYear > bookReleasedYear) {
    console.log(movieName, movieReleasedYear);
  } else {
    console.log(bookName, bookReleasedYear);
  }

  // დავალება 2.2:
  // თუ თქვენი საყვარელი საჭმელი ცხარე არ არის გამოიტანეთ Food not spicy

  if (!isspicy) {
    console.log(foodName, "is not spicy");
  }

  // დავალება 2.3:
  // თუ თქვენი კომპიუტერის RAM - ნაკლებია 8000-მეგაბაიტზე გამოიტანეთ. "რამი მექნება მალე დასამატებელი"
  if (ram < 8000) {
    console.log("Soon I have to add some memory");
  }

  // დავალება 2.4
  // თუ isSSD - არ არის true მაშინ გამოიტანეთ: "სასურველია SSD - ჩავდგათ"
  if (!isSSD) {
    console.log("Better to have SSD");
  }

  // დავალება 3:
  // თქვენი ასაკი გაზარდეთ 4-ით
  age += 4;

  // დავალება 4:
  // თუ თქვენი საყვარელი ფილმის გამოშვების წელია: 1950-დან 1970 წლამდე: დაბეჭდეთ: "ძველი ფილმია"
  // ხოლო თუ ის გამოსულია 2010-დან 2020მდე დაწერეთ: "ახალი ფილმია"
  if (movieReleasedYear > 1950 && movieReleasedYear < 1970) {
    console.log("Old movie");
  } else if (movieReleasedYear > 2010 && movieReleased < 2020) {
    console.log("New movie");
  }

  // დავალება 5:
  // გამოიძახეთ isAdult ფუნქცია და გადააწოდეთ მას თქვენი ასაკი. isAdult() თუ დააბრუნებს - true-ს გამოიტანეთ: "მე შემიძლია ხმის მიცემა"
  // თუ არა: ჯერ ხმის მიცემის უფლება არ მაქვს

  if (isAdult(age)) {
    console.log("I can vote in elections");
  } else {
    console.log("I can't vote");
  }

  // დავალება 6
  // დაწერეთ ფუნქცია calculateAgeBasedOnBirthYear(birthYear); - ამ ფუნქციამ 2021-ს უნდა გამოაკლოს დაბადების წელი და უკან დააბრუნოს მიღებული რიცხვი
  // calculateAgeBasedOnBirthYear()-ის მიერ დაბრუნებული რიცხვი შეადარეთ თქვენ მიერ დეკლარირებულ ასაკს
  // თუ ასაკი დაემთხვა: გამოიტანეთ: "თვლა მცდონია" თუ არა: "თვლაში მიჭირს"
  function calculateAgeBasedOnBirthYear(birthYear) {
    return 2021 - birthYear;
  }
  if (calculateAgeBasedOnBirthYear(birthYear) === age) {
    console.log("age is correct");
  } else {
    console.log("my birthday was not yet in this year ");
  }

  let first = Number(prompt("Pirveli ricxvi"));
  let sec = Number(prompt("Meore ricxvi"));
  function sum(num1, num2) {
    return num1 + num2;
  }

  // დავალება 7 დაწერეთ ფუნქცია sum() - რომელიც დააკმაყოფილებს მოცემულ გამოძახებას:
  let res = sum(first, sec);
  console.log("Sum", res);

  // დავალება 8:
  // ზემოთ დაწერილი ფუნქციის მაგვარად დაწერეთ ფუნქციები multiply, divide, subract, გამოიძახეთ ისინი და გამოიტანეთ მათი შედეგები
  // console.log()-აბი არ გამოიყენოთ არცერთ ზემოთ აღნიშნულ ფუნქციაში(multiply, divide, subract)

  function multiply(num1, num2) {
    return num1 * num2;
  }
  let res1 = multiply(first, sec);
  console.log("multiply", res1);

  /////////////////////////////////
  function divide(num1, num2) {
    return num1 / num2;
  }
  let res2 = divide(first, sec);
  console.log("divide", res2);

  ///////////////////////////////
  function subtract(num1, num2) {
    return num1 - num2;
  }
  let res3 = subtract(first, sec);
  console.log("subtract", res3);

  // დავალება 9
  // გამოიძახეთ ფუნქია multPositiveNumbers - რიცხვებით 10 და 20 და დაბეჭდეთ რეზულტატი
  // გამოიძახეთ ფუნქცია multPositiveNumbers - რიცხვებით -10 და 20 და დაბეჭდეთ რეზულტატი
  // გამოიძახეთ ფუნქცია multPositiveNumbers - რიცხვებით 10 და -20 და დაბეჭდეთ რეზულტატი
  // ზემოთ ფუნქციის მიერ დაბრუნებული მნიშვნელობები შეინახეთ ცვლადებში
  // შეადარეთ ცვლადები. თუ რომელიმე არ დაემთხვა რომელიმე სხვას დაბეჭდეთ "ფუნქციაში შეცდომაა"
  const pos1 = multPositiveNumbers(10, 20);
  const pos2 = multPositiveNumbers(-10, 20);
  const pos3 = multPositiveNumbers(10, -20);
  console.log("multPositiveNumbers-ის შედეგები", pos1, pos2, pos3);

  if (pos1 !== pos2 || pos2 !== pos3 || pos1 !== pos3) {
    console.log("error in the function!");
  }

  // დავალება 10:
  // დაწერეთ ფუნქცია multNegative(); ამ ფუნქციის მიზანია ნამრავლი სულ უარყოფითი იყოს
  let neg1 = multNegative(5, 10);
  let neg2 = multNegative(-5, 10);
  let neg3 = multNegative(5, -10);
  let neg4 = multNegative(-5, -10);

  console.log("multNegative -ის შედეგები", neg1, neg2, neg3, neg4);
  // თუ რომელიმე ზემოთ გამოძახებული ცვლადი უარყოფითია, ფუნქციაში გაქვთ შეცდომა
}

function isAdult(age) {
  let isAdult = age >= 18;

  return isAdult;
}

// don't forget to add arguments
function multNegative(num1, num2) {
  const result = num1 * num2;
  if (result > 0) {
    // if product is more than 0 return -result
    return -result;
  }
  return result; //otherwise return result
}

function multPositiveNumbers(num1, num2) {
  const result = num1 * num2;
  if (result < 0) {
    // if product is less than 0 return -result
    return -result;
  }
  return result; //otherwise return result
}
