async function fetchData(){
    try {
        let response = await fetch("https://randomuser.me/api/?results=50")
        let result = await response.json() 
        let arr = result.results 
        return arr
    } catch (error) {
        return error.message
    }
}

async function processData(){
  let data = await fetchData(); 

  let maleAndFemales = data.reduce((acc, curr) => {
    if (!acc[curr.gender]) {
      acc[curr.gender] = 0;
    }
    acc[curr.gender] += 1;
    return acc;
  }, {});

  console.log(maleAndFemales);
}
processData()



