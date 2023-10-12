const fn = new Function("s", "l", "f", `return {s,l,f}`);
console.log(fn(1,2,3))

