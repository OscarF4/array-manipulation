const numbers = [1, 2, 3, 4];

let rta = numbers.some(item => item % 2 === 0);
console.log(rta);

//Orders Example
const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true
    },
    {
        customerName: 'Zulma',
        total: 120,
        delivered: false
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true
    }
]

let rta2 = orders.some(item => item.delivered);
console.log(rta2);

//Fechas Example: Evaluar si se puede agendar y que no se cruce
//Usaremos la librería Date-fns para simplificar la revisión entre fechas (Si colisionan)
const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const newAppointment = {
      startDate: new Date(2021, 1, 1, 19),
      endDate: new Date(2021, 1, 1, 20, 30)
  }

  let areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

  const isOverLap = (newDate) => {
      return dates.some(date => {
          return areIntervalsOverlapping(
              {start: date.startDate, end: date.endDate},
              {start: newDate.startDate, end: newDate.endDate}
            )
      });
  };

  console.log(isOverLap(newAppointment));