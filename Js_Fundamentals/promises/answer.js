function fetchUserData(){
  return new Promise((resolve,reject)=>{
    let num = Math.random() * 0.6
    if(num>0.3){
      setTimeout(function() {
        resolve({ id: 1, name: "John Doe", role: "Admin" })
      }, 2000);
    }else {
      reject("Failed to fetch user data")
    }
  })
}

fetchUserData().then((result)=>{
  console.log(result)
}).catch((error)=>console.log(error)).finally(()=>{
  console.log("Fetch attempt complete")
})

