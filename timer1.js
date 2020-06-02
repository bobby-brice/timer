const args = process.argv.slice(2);
const timer = function(input) {
  const delay = Number(input);
  if (!isNaN(delay) && delay > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay * 1000);
  }
};

for (let arg of args) {
  timer(arg);
}

//if NaN -> Ignore/skip these as well
//if An input is a negative number: Ignore/skip any numbers that are negative
//if No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.