function add(a, b) {
    return a + b;
  }
  
  const first = Number(process.argv[2]);
  const second = Number(process.argv[3]);
  
  console.log(add(first, second));