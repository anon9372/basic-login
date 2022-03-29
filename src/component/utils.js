// export async function Utils({ username, password }) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (username === 'harry' && password === 'password') {
//           resolve();
//         } else {
//           reject();
//         }
//       }, 1000);
//     });
//   }

export function Utils({username, password}){

return new Promise((resolve, reject)=>{
         
    setTimeout(()=>{
        if(username === "anil.varma@gmail.com" && password === "password"){
            resolve();
        } else{
            reject();
        }
    }, 1000)
})

}