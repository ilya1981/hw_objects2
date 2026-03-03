
export function Characterdestructuring(destructor) {
  const resultArray = [];
  const { special: specialObjects } = destructor;

  for (let object of specialObjects) {
    let { id, name, description = 'Описание недоступно', icon } = object;

    resultArray.push({
      id, name, description, icon
    });
  }

  return resultArray;
}
