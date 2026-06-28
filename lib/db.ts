import Database from 'better-sqlite3';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const dataDir = join(process.cwd(), 'data');
mkdirSync(dataDir, { recursive: true });

const db = new Database(join(dataDir, 'app.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    createdAt TEXT NOT NULL
  );
  
  CREATE TABLE "product_type" (
    "id"	INTEGER,
    "name"	TEXT,
    PRIMARY KEY("id")
  );

  CREATE TABLE "product" (
    "id"	INTEGER,
    "name"	TEXT NOT NULL,
    "product_type_id"	INTEGER NOT NULL,
    PRIMARY KEY("id")
  );

  CREATE TABLE IF NOT EXISTS investigator (
    id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    description TEXT NOT NULL,
    strength INTEGER NOT NULL,
    agility INTEGER NOT NULL,
    observation INTEGER NOT NULL,
    lore INTEGER NOT NULL,
    influence INTEGER NOT NULL,
    will INTEGER NOT NULL,
	  product_id INTEGER NOT NULL
  );

  CREATE TABLE "scenario" (
    "id"	INTEGER,
    "name"	TEXT NOT NULL,
    "product_id"	INTEGER NOT NULL,
    PRIMARY KEY("id")
  );
`);

export type Note = {
  id: number;
  title: string;
  body: string;
  createdAt: string;
};

export type ProductType = {
  id: number;
  name: string;
};

export function getProductTypes(): ProductType[] {
  return db.prepare('SELECT * FROM product_type ORDER BY id').all() as ProductType[];
}

export function addProductType(productType: ProductType): ProductType[] {
  db.prepare(
    'INSERT INTO product_type (id, name) VALUES (?, ?)'
  ).run(
    productType.id,
    productType.name
  );

  return getProductTypes();
}

export type Product = {
  id: number;
  name: string;
  product_type_id: number;
};

export function getProducts(): Product[] {
  return db.prepare('SELECT * FROM product ORDER BY id').all() as Product[];
}

export function addProduct(product: Product): Product[] {
  db.prepare(
    'INSERT INTO product (id, name, product_type_id) VALUES (?, ?, ?)'
  ).run(
    product.id,
    product.name,
    product.product_type_id
  );

  return getProducts();
}

export type Investigator = {
  id: number;
  first_name: string;
  last_name: string;
  description: string;
  strength: number;
  agility: number;
  observation: number;
  lore: number;
  influence: number;
  will: number;
  product_id: number;
};

export function getNotes(): Note[] {
  return db.prepare('SELECT * FROM notes ORDER BY id DESC').all() as Note[];
}

export function addNote(note: { title: string; body: string }): Note[] {
  db.prepare('INSERT INTO notes (title, body, createdAt) VALUES (?, ?, ?)')
    .run(note.title, note.body, new Date().toISOString());
  return getNotes();
}

export function getInvestigators(): Investigator[] {
  return db.prepare('SELECT * FROM investigator ORDER BY id').all() as Investigator[];
}

export function addInvestigator(investigator: Omit<Investigator, 'id'>): Investigator[] {
  db.prepare(
    'INSERT INTO investigator (first_name, last_name, description, strength, agility, observation, lore, influence, will, product_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
  ).run(
    investigator.first_name,
    investigator.last_name,
    investigator.description,
    investigator.strength,
    investigator.agility,
    investigator.observation,
    investigator.lore,
    investigator.influence,
    investigator.will,
    investigator.product_id,
  );

  return getInvestigators();
}

export type Scenario = {
  id: number;
  name: string;
  product_id: number;
};
