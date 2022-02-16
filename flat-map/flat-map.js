const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ]

  //Solo me interesan los atributos así que usaré map()
  const attributesList = users.map(user => user.attributes);
  console.log('mapped:', attributesList); //[['Nice','Cute'], ['Lovely'],['Nice', 'Cool']]

  //Ahora flatearemos estos atributos para que queden en el mismo nivel con flat()
  const flattenAttributes = attributesList.flat();
  console.log('flatten:', flattenAttributes);


  //--Usando flatMap()--
  const flatAndMappedAttributes = users.flatMap(user => user.attributes);
  console.log('Using flatMap():', flatAndMappedAttributes);