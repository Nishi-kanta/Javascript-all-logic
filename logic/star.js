// Print a triangle pattern
for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}
//o/p    
// *
// **
// ***
// ****
// *****

// Print a triangle pattern
for (let i = 5; i > 0; i--) {
    let row = '';
    for (let j = 0; j < i; j++) {
        row += '*';
    }
    console.log(row);
}

// o/p
// *****
// ****
// ***
// **
// *


//print eqileteral angle triangle 
function printEquilateralTriangle(height) {
    // Number of spaces in the first line
    const initialSpaces = height - 1;

    for (let i = 0; i < height; i++) {
        // Adding spaces before stars
        let row = ' '.repeat(initialSpaces - i);

        // Adding stars
        row += '*'.repeat(2 * i + 1);

        console.log(row);
    }
}

// Example: Print an equilateral triangle with height 5
printEquilateralTriangle(5);

// o/p     eqileteral trianlge



// Print a square pattern
for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 5; j++) {
        row += '*';
    }
    console.log(row);
}

//o/p

// *****
// *****
// *****
// *****
// *****


//CHECK LEAP YEAR
// Create a function to handle user input
function getUserInput() {
    process.stdin.setEncoding('utf8');

    // Prompt the user to enter a year
    process.stdout.write("Enter a year: ");

    // Listen for user input
    process.stdin.on('data', function (data) {
        const year = parseInt(data.trim());

        // Check if the year is a leap year
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            console.log(year + " is a leap year.");
        } else {
            console.log(year + " is not a leap year.");
        }

        // End the program
        process.exit();
    });
}

// Call the function to start getting user input
getUserInput();


//CHECK NO IS PALINDROM OR NOT

function palindromcheck() {
    process.stdin.setEncoding("utf-8");

    process.stdout.write("Enter a Number:");

    process.stdin.on("data", function (data) {
        let sum = 0;
        let rem = 0;
        let temp = parseInt(data.trim());
        let orginal = temp;
        while (temp > 0) {
            rem = temp % 10
            sum = sum * 10 + rem;
            temp = Math.floor(temp / 10);
        }
        if (orginal === sum) {
            console.log("no is palindrom ");
        }
        else {
            console.log("no is not palindrom");
        }
        process.exit();
    })
}
palindromcheck();



// check  no is amstrong or not
function amstrongcheck() {
    process.stdin.setEncoding("utf-8");
    process.stdout.write("Enter a Number:");

    process.stdin.on("data", function (data) {

        let sum = 0, rem = 0
        let number = parseInt(data.trim());
        let temp = number;
        while (temp > 0) {
            rem = temp % 10;
            sum = sum + rem * rem * rem;
            temp = Math.floor(temp / 10);
        }
        if (number === sum) {
            console.log("non is amstrong");
        }
        else {
            console.log("no is not amstrong");
        }

        process.exit();
    })
}
amstrongcheck();


// check fibonaciseries
function febonaciecheck() {
    process.stdin.setEncoding("utf-8");
    process.stdout.write("enter range");
    process.stdin.on("data", function (data) {
        let fno = 1;
        let sno = 2;
        let no = 0;
        let number = parseInt(data.trim());
        console.log(fno, sno);

        for (let i = 2; i < number; i++) {
            no = fno + sno;
            fno = sno;
            sno = no;
            console.log(no);
        }
        process.exit();
    })
}
febonaciecheck();



// find vowel in a sentence

function checkVowel() {
    let vowelCounts = {

    };

    process.stdin.setEncoding("utf-8");
    process.stdout.write("Enter a sentence: ");

    process.stdin.on("data", function (data) {
        let sentence = data.trim();

        sentence.split("").forEach(element => {
            if ("aeiouAEIOU".includes(element)) {
                if (!vowelCounts[element]) {
                    vowelCounts[element] = 1;
                }
                else {
                    vowelCounts[element]++;
                }
            }
        });

        // Print the counts of each vowel
        for (let vowel in vowelCounts) {
            console.log("Vowel:", vowel, "Count:", vowelCounts[vowel]);
        }

        // End the process
        process.exit();
    });
}

checkVowel();


// electric bill check

function electricbillcheck() {
    process.stdin.setEncoding("utf-8");
    process.stdout.write("enter initial and reading data separated by space:");
    process.stdin.on("data", function (data) {
        let val = data.trim().split(" ").map(Number);
        let initialamount = 0;
        let finalreading = 0;
        let=rs=0;
        for (let i = 0; i < val.length; i++) {
            if (i == 0) {
                initialamount = val[i];
            }
            if (i == 1) {
                finalreading = val[i];
            }
        }

            var u=initialamount-finalreading;
             console.log(u);
            if(u<=100)
            {
                 rs=u*5.50;
                 console.log("Total bill is1:"+rs);
            }
             else if(u>100 && u<=200)
             {
                  rs=550+(u-100)*6.50
                 console.log("Total bill is2:"+rs);


             }
             else if(u>200 && u<=500)
             {
                  rs=550+650+(u-200)*7.50
                 console.log("Total bill is3:"+rs);


             }
        process.exit();
    })
}
electricbillcheck();