// const items = [1, 3, 2, 3, 3, 1, 10];

// const rta = items.reduce((obj, item) => {
//     if (!obj[item]) {
//         obj[item] = 1;
//     } else {
//         obj[item] = obj[item] + 1;
//     }
//     return obj;
// }, {});

// console.log(rta);

//1
//{
//  1: 1
// }

//2
//{
//  1: 1,
//  3: 1
// } 
const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    }
  ];
  const levelDistribution = data
  .map(item => item.level)
  .reduce((obj, item) => {
      if (!obj[item]) {
          obj[item] = 1; //Asignando el index 'nivel de poder' y valor
      } else {
          obj[item] = obj[item] + 1; //Le sumamos 1
      }
      return obj;  //Meter al acumulador
  }, {});

  console.log(levelDistribution);

  //Challenge rangos de números

  let list = [];

  for (let i = 0; i < 30; i++) {
      list.push(Math.round(Math.random() * 10));
  }

  const rangos = list.reduce((obj, value) => {
    if (value <= 5) {
      obj['1-5'] += 1; 
    } else if (value <= 8) {
      obj['6-8'] += 1;
    } else {
      obj['9-10'] += 1;
    }

    return obj;
  }, {
    '1-5': 0,
    '6-8': 0,
    '9-10': 0
  });

  console.log(rangos);