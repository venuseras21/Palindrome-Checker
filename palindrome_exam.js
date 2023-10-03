function isPalindrome(str) {
  switch (typeof str) {
    case "string":
      let cleanedText = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
      let reversedText = cleanedText.split("").reverse().join("");
      if (cleanedText === reversedText) {
        console.log(
          "The given string: '" +
            cleanedText +
            "' is an example of a palindrome, the reversed value is: '" +
            reversedText +
            "'"
        );
      } else {
        console.log(
          "The given string: '" + str + "' is not an example of a palindrome"
        );
      }
      break;

    default:
      console.log(
        "The given value: '" +
          str +
          "' is not a string! The expected data type of the value is string"
      );
      break;
  }
}

isPalindrome("Taco cat");
//sample of not a palindrome
// isPalindrome("sample message");
// sample of non-string:
// isPalindrome(1232);
