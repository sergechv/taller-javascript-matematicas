// Análisis personal de Juanita
function findPerson(lookedForPerson) {
  return salarios.find(person => person.name == lookedForPerson)
}

function medianByPerson(personName) {
  const jobs = findPerson(personName).trabajos
  const salaries = jobs.map(element => element.salario)

  const medianSalary = PlatziMath.getMedian(salaries)
  console.log(medianSalary)
  return medianSalary


  // for (job of jobs) {
  //   salaries.push(job.salario)
  // }
}

function projectionByPerson(personName) {
  const jobs = findPerson(personName).trabajos
  
  let growthPercentage = []

  for (let i = 1; i < jobs.length; i++) {
    const currSalary = jobs[i].salario
    const prevSalary = jobs[i - 1].salario
    const growth = currSalary - prevSalary
    const growthPer = growth / prevSalary
    growthPercentage.push(growthPer)
  }

  const medianGrowth = PlatziMath.getMedian(growthPercentage)
  
  const latestSalary = jobs[jobs.length - 1].salario
  const raise = latestSalary * medianGrowth
  const newSalary = latestSalary + raise
  
  console.log({newSalary})
}