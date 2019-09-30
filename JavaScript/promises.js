console.log("A");
console.log("B");
console.log("C");
console.log("D");

console.log("");

console.log("A");
console.log("B");
setTimeout(function(){console.log("C");},1000);
console.log("D");


// let firstPromise = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 'my promise was resolved')
//   })
  
//   firstPromise
//     .then((successMessage) => {
//         console.log('yay! ' + successMessage)
//     })

// let isMomHappy = true;

// var willIGetNewPhone = new Promise(
// 	function (resolve, reject) {
// 		if (isMomHappy) {
// 			var phone = {
// 			brand: 'Samsung',
// 			color: 'black'
// 			};
// 			resolve(phone); 
// 		} else {
// 			var reason = new Error('mom is not happy');
// 			reject(reason); 
// 		}
// 	}
// );

// var askMom = function () {
// 	willIGetNewPhone
// 		.then(function (fulfilled) {
// 			console.log(fulfilled);
// 		})
// 		.catch(function (error) {
// 			console.log(error.message);
// 	});
// }

// askMom();



// var askMom = function () {
// 	willIGetNewPhone
// 		.then(function (fulfilled) {
// 			console.log(fulfilled);
//             showOff(fulfilled)
//             .then(message => {
//                 console.log(message);
//             })
// 		})
// 		.catch(function (error) {
// 			console.log(error.message);
// 	});
// }

// let showOff = (phone) => {
//     return new Promise((resolve, reject) => {
//       let message = `hey, check out my new ${phone.color} ${phone.brand} phone!!`
//       console.log
//       resolve(message)
//     })
//     // calling reject is optional
//   }

//  askMom();


// let promise1 = Promise.resolve(3)
// let promise2 = 42
// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'promise 3 resolved!')
// })

// Promise
//   .all([promise1, promise2, promise3])
//   .then(values => console.log(values))

// let promise4 = new Promise((resolve, reject) => {
//     reject('reject!!!')
//   })
  
//   Promise
//     .all([promise1, promise2, promise3, promise4])
//     .then(values => console.log(values))
//     .catch(err => console.log(`reject reason: ${err}`))