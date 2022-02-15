module.exports = function check(str, bracketsConfig) {
  
   let base = Object.fromEntries(bracketsConfig.map(item => [item[1], item[0]]))
   let close = Object.keys(base)
   let open = Object.values(base)

   let stack = [];
      
   for (let i=0; i<str.length; i++) {
      let current = str[i];

      if (stack[stack.length - 1] === current && close.includes(current)) {
         stack.pop()
      } else if (open.includes(current)) {
         stack.push(current);
      } else  {
         if (stack.length === 0) {
            return false;
         }

         let top = stack[stack.length - 1];

         if (base[current] === top) {
         stack.pop();
         }  else {         
            return false;
         }   
      }
   }
   return stack.length === 0;
}
