// import { readFileSync } from 'node:fs';
// import { join } from 'node:path';
import { addInvestigator, addProduct, addProductType } from '../lib/db';


const productTypes = [
  { id: 1, name: 'Core Set' },
  { id: 2, name: 'Expansion' },
];

console.log(`Loading ${productTypes.length} product types...`);

productTypes.forEach((pt, index) => {
  try {
    addProductType(
      {
        id: pt.id,
        name: pt.name,
      }
    );
    console.log(`✓ Loaded ${index + 1}/${productTypes.length}: ${pt.name}`);
  } catch (error) {
    console.error(`✗ Error loading row ${index + 1}: ${pt.name}`, error);
  }
});


const products = [
  { id: 1, name: 'Mansions of Madness', product_type_id: 1 },
  { id: 2, name: 'Beyond the Threshold', product_type_id: 2 },
  { id: 3, name: 'Streets of Arkham', product_type_id: 2 },
  { id: 4, name: 'Sanctum of Twilight', product_type_id: 2 },
  { id: 5, name: 'Horrific Journeys', product_type_id: 2 },
  { id: 6, name: 'Path of the Serpent', product_type_id: 2 },
];

console.log(`Loading ${products.length} products...`);

products.forEach((product, index) => {
  try {
    addProduct(product);
    console.log(`✓ Loaded ${index + 1}/${products.length}: ${product.name}`);
  } catch (error) {
    console.error(`✗ Error loading row ${index + 1}: ${product.name}`, error);
  }
});

``
// const csvPath = join(process.cwd(), './data/investigators.csv');
// const csvContent = readFileSync(csvPath, 'utf-8');
// const lines = csvContent.trim().split('\n');

// Skip header row
// const dataRows = lines.slice(1);

// console.log(`Loading ${dataRows.length} investigators from CSV...`);

// dataRows.forEach((line, index) => {
//   const [firstName, lastName, description, strength, agility, observation, lore, influence, will, expansion, product] = line.split(',');

//   try {
//     addInvestigator({
//       first_name: firstName,
//       last_name: lastName,
//       description: description,
//       strength: parseInt(strength, 10),
//       agility: parseInt(agility, 10),
//       observation: parseInt(observation, 10),
//       lore: parseInt(lore, 10),
//       influence: parseInt(influence, 10),
//       will: parseInt(will, 10),
//       product_id: parseInt(product, 10),
//     });
//     console.log(`✓ Loaded ${index + 1}/${dataRows.length}: ${firstName} ${lastName}`);
//   } catch (error) {
//     console.error(`✗ Error loading row ${index + 1}: ${firstName} ${lastName}`, error);
//   }
// });

const investigators = [
  { id: 1, first_name: 'Agatha', last_name: 'Crane', description: 'The Parapsychologist',strength: 2, agility: 2, observation: 3, lore: 5, influence: 3, will: 4, product_id: 1 },
  { id: 2, first_name: 'Carson', last_name: 'Sinclair', description: 'The Butler',strength: 3, agility: 2, observation: 3, lore: 2, influence: 4, will: 4, product_id: 1 },
  { id: 3, first_name: 'Minh Thi', last_name: 'Phan', description: 'The Secretary',strength: 2, agility: 3, observation: 4, lore: 4, influence: 3, will: 3, product_id: 1 },
  { id: 4, first_name: 'Father', last_name: 'Mateo', description: 'The Priest',strength: 2, agility: 3, observation: 2, lore: 4, influence: 3, will: 5, product_id: 1 },
  { id: 5, first_name: 'Preston', last_name: 'Fairmont', description: 'The Millionaire',strength: 2, agility: 3, observation: 3, lore: 1, influence: 5, will: 4, product_id: 1 },
  { id: 6, first_name: 'Rita', last_name: 'Young', description: 'The Athlete',strength: 4, agility: 5, observation: 2, lore: 1, influence: 3, will: 3, product_id: 1 },
  { id: 7, first_name: 'Wendy', last_name: 'Adams', description: 'The Urchin',strength: 1, agility: 4, observation: 4, lore: 2, influence: 2, will: 5, product_id: 1 },
  { id: 8, first_name: 'William', last_name: 'Yorick', description: 'The Gravedigger',strength: 4, agility: 2, observation: 3, lore: 2, influence: 2, will: 5, product_id: 1 },
  { id: 9, first_name: 'Akachi', last_name: 'Onyele', description: 'The Shaman',strength: 2, agility: 3, observation: 2, lore: 4, influence: 3, will: 4, product_id: 2 },
  { id: 10, first_name: 'Wilson', last_name: 'Richards', description: 'The Handyman',strength: 5, agility: 3, observation: 3, lore: 1, influence: 2, will: 4, product_id: 2 },
  { id: 11, first_name: 'Finn', last_name: 'Edwards', description: 'The Bootlegger',strength: 3, agility: 4, observation: 4, lore: 1, influence: 3, will: 3, product_id: 3 },
  { id: 12, first_name: 'Marie', last_name: 'Lambeau', description: 'The Entertainer',strength: 2, agility: 2, observation: 3, lore: 4, influence: 4, will: 3, product_id: 3 },
  { id: 13, first_name: 'Diana', last_name: 'Stanley', description: 'The Redeemed Cultist',strength: 3, agility: 2, observation: 3, lore: 4, influence: 2, will: 4, product_id: 3 },
  { id: 14, first_name: 'Tommy', last_name: 'Muldoon', description: 'The Rookie Cop',strength: 3, agility: 3, observation: 3, lore: 2, influence: 3, will: 4, product_id: 3 },
  { id: 15, first_name: 'Lily', last_name: 'Chen', description: 'The Martial Artist',strength: 4, agility: 4, observation: 2, lore: 2, influence: 2, will: 4, product_id: 4 },
  { id: 16, first_name: 'Charlie', last_name: 'Kane', description: 'The Politician',strength: 2, agility: 2, observation: 3, lore: 2, influence: 5, will: 4, product_id: 4 },
  { id: 17, first_name: 'Jim', last_name: 'Culver', description: 'The Musician',strength: 3, agility: 3, observation: 2, lore: 3, influence: 3, will: 4, product_id: 5 },
  { id: 18, first_name: 'Agnes', last_name: 'Baker', description: 'The Waitress',strength: 2, agility: 3, observation: 2, lore: 4, influence: 2, will: 5, product_id: 5 },
  { id: 19, first_name: 'Trish', last_name: 'Scarborough', description: 'The Spy',strength: 2, agility: 4, observation: 4, lore: 2, influence: 3, will: 3, product_id: 5 },
  { id: 20, first_name: 'Silas', last_name: 'Marsh', description: 'The Sailor',strength: 5, agility: 3, observation: 3, lore: 1, influence: 2, will: 4, product_id: 5 },
  { id: 21, first_name: 'Daniela', last_name: 'Reyes', description: 'The Mechanic',strength: 4, agility: 3, observation: 3, lore: 2, influence: 2, will: 4, product_id: 6 },
  { id: 22, first_name: 'Leo', last_name: 'Anderson', description: 'The Expedition Leader',strength: 4, agility: 2, observation: 3, lore: 3, influence: 3, will: 3, product_id: 6 },
  { id: 23, first_name: 'Norman', last_name: 'Withers', description: 'The Astronomer',strength: 2, agility: 2, observation: 3, lore: 5, influence: 2, will: 4, product_id: 6 },
  { id: 24, first_name: 'Ursula', last_name: 'Downs', description: 'The Explorer',strength: 2, agility: 4, observation: 4, lore: 3, influence: 2, will: 3, product_id: 6 },
];

console.log(`Loading ${investigators.length} investigators from CSV...`);

investigators.forEach((investigator, index) => {
  try {
    addInvestigator({
      first_name: investigator.first_name,
      last_name: investigator.last_name,
      description: investigator.description,
      strength: investigator.strength,
      agility: investigator.agility,
      observation: investigator.observation,
      lore: investigator.lore,
      influence: investigator.influence,
      will: investigator.will,
      product_id: investigator.product_id,
    });
    console.log(`✓ Loaded ${index + 1}/${investigators.length}: ${investigator.first_name} ${investigator.last_name}`);
  } catch (error) {
    console.error(`✗ Error loading row ${index + 1}: ${investigator.first_name} ${investigator.last_name}`, error);
  }
});


console.log('Seed complete!');
