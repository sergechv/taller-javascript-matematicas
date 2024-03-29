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

const empresas = {}

  salarios.forEach(salario => {
    salario.trabajos.forEach(trabajo => {
      if (!empresas.hasOwnProperty(trabajo.empresa)) {
        empresas[trabajo.empresa] = {}
      }
      if (!empresas[trabajo.empresa][trabajo.year]) {
        empresas[trabajo.empresa][trabajo.year] = []
      }
      empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
    })
  })

  console.log(empresas)

  
function medianaEmpresas(empresa, year) {
  if (empresas[empresa]) {
    if (empresas[empresa][year]) {
      const salariosYear = empresas[empresa][year]
      PlatziMath.getMedian(salariosYear)
    } else {
      console.warn('pues la empresa si existe pero no hay salarios de ese año')
    }
  } else {
    console.warn('la empresa no existe bro')
  }

  // const salariosYear = empresas[empresa][year]
  // PlatziMath.getMedian(salariosYear)
}