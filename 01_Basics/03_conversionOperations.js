console.log("******Case:1******");
let score=80;
console.log(typeof score); //1st way to know the datatype of variable
console.log(typeof (score)); //2nd way to know the datatype of variable
console.log(score); //to print the value of variable

console.log("******Case:2******");
let scores="80"; //declare string type variable
console.log(typeof scores); //1st way to know the datatype of variable
console.log(typeof (scores)); //2nd way to know the datatype of variable
console.log(scores); //to print the value of variable

console.log("******Case:3******");
let valueInNumber=Number(scores);//Conversion of String type to Number datatype
console.log(typeof valueInNumber); //1st way to know the datatype of variable
console.log(valueInNumber); //to print the value of variable

console.log("******Case:4******");
let valueNumberCheck="80ABC"; //declare the string type variable
let valueInNumberCheck=Number(valueNumberCheck); //Conversion of String type to Number datatype
console.log(typeof valueInNumberCheck); //1st way to know the datatype of variable
console.log(valueInNumberCheck); //to print the value of variable

console.log("******Case:5******");
let nullScoreCheck=null;
console.log(typeof nullScoreCheck);
console.log(nullScoreCheck);
let nullInScoreCheck=Number(nullScoreCheck);
console.log(nullInScoreCheck);

console.log("******Case:6******");
let undefinedValueCheck=undefined;
console.log(typeof undefinedValueCheck);
console.log(undefinedValueCheck);
let undefinedInValueCheck=Number(undefinedValueCheck);
console.log(typeof undefinedInValueCheck);
console.log(undefinedInValueCheck);

console.log("******Case:7******");
let booleanCheck=true;
console.log(typeof booleanCheck);
console.log(booleanCheck);
let booleanValueCheck=Number(booleanCheck);
console.log(typeof booleanValueCheck);
console.log(booleanValueCheck);

console.log("******Case:8******");
let isLoggedIn=0; //1 for true
console.log(typeof isLoggedIn);
console.log(isLoggedIn);
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

console.log("******Case:9******");
let isBlank=""; //blank is equal to false
console.log(typeof isBlank);
console.log(isBlank);
let isBlankCheck=Boolean(isBlank);
console.log(typeof isBlankCheck);
console.log(isBlankCheck);

console.log("******Case:10******");
let isNotBlank="Pooja"; //blank is equal to false
console.log(typeof isNotBlank);
console.log(isNotBlank);
let isNotBlankCheck=Boolean(isNotBlank);
console.log(typeof isNotBlankCheck);
console.log(isNotBlankCheck);

console.log("******Case:11******");
let isString=88; //to validate Number to String conversion
console.log(typeof isString);
console.log(isString);
let isStringCheck=String(isString);
console.log(typeof isStringCheck);
console.log(isStringCheck);