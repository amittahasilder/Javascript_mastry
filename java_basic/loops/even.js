for(let i =1; i<=100; i++){
    if(i%2 === 0){
        console.log(i);
    }
}

for( let i = 10; i>=1; i--){
    console.log(i);
}



// ⚠️ STEP 4: Understand COMMON MISTAKES (VERY IMPORTANT)
// ❌ Infinite loop
// for (let i = 1; i <= 5; ) {
//   console.log(i);
// }


// ❌ No update → browser crash



let tasks = ["Code", "Exercise", "Read"];

for (let i = 0; i < tasks.length; i++) {
  console.log(`Task ${i + 1}: ${tasks[i]}`);
}
