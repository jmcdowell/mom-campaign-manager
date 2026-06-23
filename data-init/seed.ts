import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { addInvestigator } from '../lib/db';

const csvPath = join(process.cwd(), 'investigators.csv');
const csvContent = readFileSync(csvPath, 'utf-8');
const lines = csvContent.trim().split('\n');

// Skip header row
const dataRows = lines.slice(1);

console.log(`Loading ${dataRows.length} investigators from CSV...`);

dataRows.forEach((line, index) => {
  const [firstName, lastName, description, strength, agility, observation, lore, influence, will, expansion] = line.split(',');

  try {
    addInvestigator({
      first_name: firstName,
      last_name: lastName,
      description: description,
      strength: parseInt(strength, 10),
      agility: parseInt(agility, 10),
      observation: parseInt(observation, 10),
      lore: parseInt(lore, 10),
      influence: parseInt(influence, 10),
      will: parseInt(will, 10),
      expansion: expansion,
    });
    console.log(`✓ Loaded ${index + 1}/${dataRows.length}: ${firstName} ${lastName}`);
  } catch (error) {
    console.error(`✗ Error loading row ${index + 1}: ${firstName} ${lastName}`, error);
  }
});

console.log('Seed complete!');
