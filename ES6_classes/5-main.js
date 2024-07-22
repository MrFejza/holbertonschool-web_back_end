import Building from './5-building';

const b = Building(100);
console.log(b);

class TestBuilding extends Building { }

try {
  TestBuilding(200);
} catch (err) {
  console.log(err);
}
