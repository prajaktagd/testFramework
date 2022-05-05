// const add = (x, y) => {
//   try {
//     sum();
//   } catch (error) {
//     console.log('add: catch');
//     return 23;
//   }
//   console.log('add');
//   return 33;
// };

const addTwo = (x) => {
  try {
    // add(x, 2);
    console.log('addTwo: try');
    // throw "throwing error";
  } catch (error) {
    console.log('addTwo : catch');
    // return -100;
  }
  finally {
    console.log('addTwo: Finally executed');
    // return -1;
  }
  console.log('addTwo');
  throw "throwing error";
};

let x;
try {
  console.log('Before calling');
  // x = addTwo();
  console.log('After calling');
} catch (error) {
  // console.log(error);
  console.log('Inside catch block');
  throw error;
} finally {
  console.log('Finally executed');
}

console.log('Some other code', x);
