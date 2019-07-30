const fs = require('fs');
const path = require('path');
const faker = require('faker');
const md5 = require('md5');

function crearCarnet(limit = 5) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const primerNombre = faker.name.primerNombre();
    const primerApellido = faker.name.primerApellido();
    const correo = faker.internet.correo();

    result.push({
      id: faker.random.uuid(),
      primerNombre,
      primerApellido,
      correo,
      trabajo: faker.name.trabajo(),
      twitter: `${primerNombre}${primerApellido}${faker.address.zipCode()}`,
      fotoUrl: `https://www.gravatar.com/avatar/${md5(correo)}?d=identicon`,
    });
  }

  return result;
}

function main() {
  const data = {
    carnets: crearCarnet(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, 'db.json'),
    JSON.stringify(data, null, 4)
  );
}

main();
