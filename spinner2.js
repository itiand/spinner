const rotation = ['|', '/', '-', '\\', '|', '/', '-', '\\'];

const spinner = (arr, numOfRotation) => {
  let currentRotate = 0;
  let delayer = 200;

  for (let i = 0; currentRotate < numOfRotation; i++) {
    if (i % arr.length === 0) {
      i = 0;
      currentRotate++;
    }
    setTimeout(() => {
      process.stdout.write(`\r${arr[i]}   `);
    }, delayer);
    delayer += 300;
  }
};

spinner(rotation, 5);


// ... fill in the rest yourself ...