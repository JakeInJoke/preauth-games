export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  //Metodo para actualizar calidad
  updateQuality() {
    this.items.forEach((item) => {
      switch (item.name) {
        case "Aged Brie":
          this.updateAgedBrie(item);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.updateBackstagePass(item);
          break;
        case "Sulfuras, Hand of Ragnaros":
          // No actualizamos nada para Sulfuras.
          break;
        default:
          this.updateConjuredItems(item);
          break;
      }

      // Reducir sellIn para todos menos Sulfuras porque no tiene que ser vendido
      if (item.name !== "Sulfuras, Hand of Ragnaros") {
        item.sellIn -= 1;
        if (item.sellIn < 0) {
          item.sellIn = 0;
        }
      }

      // Ajustar calidad después del vencimiento
      if (item.sellIn < 1) {
        this.handleExpiredItem(item);
      }
    });

    return this.items;
  }

  //Actualiza a Brie
  updateAgedBrie(item) {
    //La calidad de un item no puede ser más de 50
    if (item.quality < 50) {
      //La calidad de Brie aumenta en 1
      item.quality += 1;
    }
  }

  //Actualiza el BackstagePass
  updateBackstagePass(item) {
    //La calidad de un item no puede ser más de 50
    if (item.quality < 50) {
      //La calidad aumenta en 1 mientras mas tiempo pasa
      item.quality += 1;
      //La calidad aumenta en 2 cuando hay 10 dias o menos 1+1
      if (item.sellIn < 11) item.quality = Math.min(50, item.quality + 1);
      //La calidad aumenta en 3 cuando hay 5 dias o menos 1+1+1
      if (item.sellIn < 6) item.quality = Math.min(50, item.quality + 1);
    }
  }

  //Actualiza items conjurados
  updateConjuredItems(item) {
    //La calidad del item baja el doble de rapido para los objetos conjurados
    if (item.quality > 0) {
      item.quality -= 2;
      //Si cae por debajo de 1 se setea en 0
      if (item.quality < 0) {
        item.quality = 0;
      }
    }
  }

  //Maneja los items expirados
  handleExpiredItem(item) {
    //Si aged Brie expira sigue aumentando su calidad/valor
    if (item.name === "Aged Brie") {
      if (item.quality < 50) {
        item.quality += 1;
      }
      //Si los passes expiran, su calidad cae hasta 0
    } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      item.quality = 0;
      //Si el objeto está vencido disminuye su calidad el doble, como solo son los conjurados los que disminuyen disminuye en 2
    } else if (item.name === "Sulfuras, Hand of Ragnaros") {
      item.quality = item.quality;
    } else {
      if (item.quality > 0) {
        item.quality -= 2;
        if (item.quality < 0) {
          item.quality = 0;
        }
      }
    }
  }
}
