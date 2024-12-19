import { Item, GildedRose } from "./glided-rose";

//Dias simulados
const simulted_days = 9;
//Dueño de la tienda
const owner = "Allison";
//Dias
let days_count = 0;

// Se especifica como let porque sus valores van a ir variando conforme avance el tiempo
let item_1 = new Item("Aged Brie", 10, 30);
let item_2 = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
let item_3 = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 30);
//Se agregan 2 items conjurados
let item_4 = new Item("Conjured Sword", 3, 30);
let item_5 = new Item("Conjured Red Eye", 9, 30);
let item_6 = new Item("Conjured Blue Spirit", 9, 30);

//Iniciamos la tienda
let store = new GildedRose([item_1, item_2, item_3, item_4, item_5, item_6]);

// Simulamos los dias especificados
do {
  days_count += 1;
  console.log(
    `Hey i'm Allison, welcome to my store and this is my inventory.\n Day ${days_count}`
  );
  console.log(store.updateQuality());
} while (days_count <= simulted_days);
