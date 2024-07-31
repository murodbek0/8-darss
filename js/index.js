// 1 misol

// function sum(arr) {
//     let res  = '';
//     for (let soz of arr) {
//         if(soz.length > res.length){
        
//         res = soz;
//         }
        
//     }
//     return res
// }

// let arr = ['salom', ' salomat', 'hayr'];
// console.log(sum(arr));

// 2 misol

    // function name(arr) {
    //     return arr.join(' ');
    // }


    // console.log(name(['salom', 'hayrli kun', 'yaxshimsiz','kayfiyatlar qale']));


    // 3 misol

//      function name(arg) {
//     let res = arg.toUpperCase();
//     return res

//  }

// let sum = name ('salom');
// console.log(sum);

// 4 misol

// function sum(arr) {
//     let sum1 = 1;
//     for (let i = 0; i < arr.length; i++) {
//           sum1 *= arr[i]
        
        
//     }
//     return sum1 ;
// }
// let res = [2,4,6];
// console.log(sum(res));

// 5 misol

// function sum(arr) {
//     let teks = arr.slice();
//     teks.sort((a, b) => a - b);
    
//     return teks;
// }

// let res = [1, 3, 10, 2, 0];
// console.log(sum(res));
// console.log(res); 

// 6 misol

// function sum(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         res.unshift(arr[i])
        
//     }
    
//     return res
// }
// let res1 = [1,2,3,4,5,6];
// console.log(sum(res1));

// 7 misol

// function sum(arr) {
//     return arr.map((value,index) =>index);
    
// }
// let res = ['olma', 'behi','nok','anor'];
// let arg = sum(res)

//     console.log(arg);

// 8 misol
// function sum(arr , value) {
//     return arr.indexOf(value);
    
// }
// let res = [1,2,3,4,5,6,7,8,9];
// let arg = sum(res,1)

//     console.log(arg);

// 9 misol

// function sum(arg) {
//     let res = [];
//     let sum1 = 0;
//     for (let i = 0; i < arg.length; i++) {
//         sum1 = sum1 + arg[i];
//         res.push(arg[i]);
        
//     }
//     return sum1
// }   
// let arr = [2,4,6];
// console.log(sum(arr));

// 10 misol

// function sum(arr) {
//     let res = arr.filter(value => value >0);
//     let res1 = arr.filter(value => value < 0);

//     return {res,res1}
// }

// let number = [1,2,3,4,-8,-9,-5];
// let res2 = sum (number)
// console.log('musbat qiymatlar',res2.res);
// console.log('manfiy qiymatlar',res2.res1)

// 11 misol

// function sum(arr, n) {
   
//     return Array(n).fill().reduce((acc, _) => acc.concat(arr), []);
// }

// let res = [1, 2, 3, 45];
// console.log(sum(res, 2));

// 12 misol
// function name(arr) {
//     return arr.map(a => a.toString());
// }

// let res = [1,2,3,4,5];
// let res1 = name (res);
// console.log(res1);



// 13 misol

// function sum(arr,value) {
//     let res1 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 ==0){
//             res1.push(arr[i])
//         }
        
//     }
//     return res1
    
// }
// let res = [1,2,3,4,5,6,7,8,9];
// let arg = sum(res)

//     console.log(arg);

// 14 misol
// function sum(arr,value) {
//     let res1 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 ==1){
//             res1.push(arr[i])
//         }
        
//     }
//     return res1
    
// }
// let res = [1,2,3,4,5,6,7,8,9];
// let arg = sum(res)

//     console.log(arg);


// 15 misol


// 16 misol


// function sum(arg) {
//    let res1 = [];
//    for (let i = 0; i < arg.length; i++) {
//     res1.push(arg[i]);
//     res1.push(arg[i]);
    
//    }
//     return res1
// }
// let res = [1,2,4,5];
// console.log(sum(res));

// 17 misol

// function sum(arr) {
//     let res = Math.trunc(Math.random());
//     while (arr) {
//         res = Math.trunc(Math.random());
        
//     }
//     return res
// }
// console.log(sum([1,2,3,4,5,6,7,8,9,10]));

//  shu misolga unch shumadim ohshatolmadim

// 18 misol

// function sum(arr, arg) {
//     let result = arr.map(element => (element + arg).toString());
//     return result.join(', ');
// }

// let numbers = [1, 2, 4, 5,6,7,8,9];
// let arg = 10;
// let result = sum(numbers, arg);

// console.log(result); 

// 19 misol

// function sum(arr) {
//     return arr.filter(element => typeof element === 'string');
// }

// let strq = [1, 'salom', 3, 'xayr', 12];
// let sum1 = sum(strq);

// console.log(sum1);

// 20 misol

// function name(arr) {
//     let res = arr.filter(element => element === '');


//     return res.length
    
// }
// let res1 = ['salom' , '','', 1,2,3];
// let str = name (res1)
// console.log(str);

// 21 misol



    // function sum(arr) {
    //     let res = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         res.unshift(arr[i])
            
    //     }
        
    //     return res
    // }
    // let res1 = [1,2,3,4,5,6];
    // console.log(sum(res1));

    // 22 misol

    // function sum(arr) {
    //     return  arr.map(element => Math.sqrt(element));
    // }
    
    // let numbers = [1, 4, 9, 16, 25];
    // let res = sum(numbers);
    
    // console.log(res); 
    
// 23 misol
    // 24 misol
    // function sum(arr) {
    //     let res = [];
    //     let res1 = [];
    //     arr.forEach((element, index) => {
    //         if (index % 2 === 0) {
    //             res.push(element); 
    //         } else {
    //             res1.push(element);  
    //         }
    //     });
    
    //     return { res, res1 };
    // }
    
    // let numbers = [1, 2, 3, 4, 5, 6, 7,8];
    // let result = sum(numbers);
    
    // console.log("Juft:", result.res); 
    // console.log("Toq :", result.res1);  
    

