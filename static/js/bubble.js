// d3.json('cocktails.json').then(function (data) {
//   console.log(data);
// });
// d3.json("bubble", function (Data) {
//   console.log(Data)
// });

var cocktails = [];
var ingredients = [];
var cocktailData = [
  {
    "cocktail": "White Russian",
    "ingredient": " Coffee liqueur",
    "measure": "1.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "White Russian",
    "ingredient": " Milk or half-and-half",
    "measure": "1",
    "unit": "garnish"
  },
  {
    "cocktail": "White Russian",
    "ingredient": " Vodka",
    "measure": "2.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Tequila Sunrise",
    "ingredient": " Blanco tequila",
    "measure": "2.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Tequila Sunrise",
    "ingredient": " Grenadine",
    "measure": "0.75",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Tequila Sunrise",
    "ingredient": " Orange juice",
    "measure": "4.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Screwdriver",
    "ingredient": " Orange juice",
    "measure": "5.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Screwdriver",
    "ingredient": " Vodka",
    "measure": "1.5",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Moscow Mule",
    "ingredient": " Fresh Lime Juice",
    "measure": "0.5",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Moscow Mule",
    "ingredient": " Ginger beer",
    "measure": "1",
    "unit": "garnish"
  },
  {
    "cocktail": "Moscow Mule",
    "ingredient": " Lime wedge",
    "measure": "1",
    "unit": "garnish"
  },
  {
    "cocktail": "Moscow Mule",
    "ingredient": " Vodka",
    "measure": "1.5",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Mint Julep (Southern Style)",
    "ingredient": " Bourbon",
    "measure": "2.5",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Mint Julep (Southern Style)",
    "ingredient": " Powdered Sugar",
    "measure": "1.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Mint Julep (Southern Style)",
    "ingredient": " Water",
    "measure": "2.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Mint Julep (Southern Style)",
    "ingredient": "springs mint",
    "measure": "5",
    "unit": "garnish"
  },
  {
    "cocktail": "Margarita",
    "ingredient": " Blanco tequila",
    "measure": "1.5",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Margarita",
    "ingredient": " Cointreau or triple sec",
    "measure": "0.75",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Margarita",
    "ingredient": " Fresh Lime Juice",
    "measure": "0.75",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Manhattan Cocktail (dry)",
    "ingredient": " Dry Vermouth",
    "measure": "0.75",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Manhattan Cocktail (dry)",
    "ingredient": " Old Thompson Blended Whiskey",
    "measure": "1.5",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Long Island Iced Tea",
    "ingredient": " Blanco tequila",
    "measure": "0.75",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Long Island Iced Tea",
    "ingredient": " Gin",
    "measure": "0.75",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Long Island Iced Tea",
    "ingredient": " Light Rum",
    "measure": "0.75",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Long Island Iced Tea",
    "ingredient": " Simple Syrup, 1/2 oz",
    "measure": "0.5",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Long Island Iced Tea",
    "ingredient": " Triple Sec",
    "measure": "0.75",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Long Island Iced Tea",
    "ingredient": " Vodka",
    "measure": "0.75",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Lemon Drop",
    "ingredient": " Fresh lemon juice",
    "measure": "0.75",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Lemon Drop",
    "ingredient": " lemon-flavored vodka",
    "measure": "1.5",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Lemon Drop",
    "ingredient": " Lemon wedge, superfine sugar",
    "measure": "for glass",
    "unit": "garnish"
  },
  {
    "cocktail": "Lemon Drop",
    "ingredient": " Simple Syrup",
    "measure": "0.25",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Hurricane",
    "ingredient": " each Dark rum, light rum",
    "measure": "1.5",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Hurricane",
    "ingredient": " each Simple Syrup, grenadine",
    "measure": "0.5",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Hurricane",
    "ingredient": " Lime Juice",
    "measure": "1.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Hurricane",
    "ingredient": " Orange half-wheel, maraschino cherry",
    "measure": "1",
    "unit": "garnish"
  },
  {
    "cocktail": "Hurricane",
    "ingredient": " Orange juice",
    "measure": "0.75",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Hurricane",
    "ingredient": " Passion Fruit Syrup",
    "measure": "1.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Horse's Neck (With A Kick)",
    "ingredient": " Bourbon whiskey",
    "measure": "2.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Horse's Neck (With A Kick)",
    "ingredient": " Ginger ale",
    "measure": "1.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Horse's Neck (With A Kick)",
    "ingredient": " Wide spiral of lemon zest",
    "measure": "1.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Grasshopper Cocktail",
    "ingredient": " Light Sweet Cream",
    "measure": "0.75",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Grasshopper Cocktail",
    "ingredient": " Old Mr. Boston Green Creme de Menthe",
    "measure": "0.75",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Grasshopper Cocktail",
    "ingredient": " Old Mr. Boston White Creme de Cacao",
    "measure": "0.75",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Georgia Peach",
    "ingredient": " Grenadine",
    "measure": "1.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Georgia Peach",
    "ingredient": " Peach schnapps",
    "measure": "0.5",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Georgia Peach",
    "ingredient": " Vodka",
    "measure": "1.5",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Fancy Whiskey",
    "ingredient": " Angostura Bitters",
    "measure": "1.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Fancy Whiskey",
    "ingredient": " Bourbon or rye whiskey",
    "measure": "2.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Fancy Whiskey",
    "ingredient": " Lemon twist",
    "measure": "1.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Fancy Whiskey",
    "ingredient": " Simple Syrup",
    "measure": "0.25",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Fancy Whiskey",
    "ingredient": " Triple Sec",
    "measure": "0.25",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Daiquiri",
    "ingredient": " Fresh Lime Juice",
    "measure": "0.75",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Daiquiri",
    "ingredient": " Light Rum",
    "measure": "2.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Daiquiri",
    "ingredient": " Simple Syrup",
    "measure": "0.75",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Count Camillo's Paloma",
    "ingredient": " Blanco tequila",
    "measure": "0.75",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Count Camillo's Paloma",
    "ingredient": " Campari",
    "measure": "0.75",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Count Camillo's Paloma",
    "ingredient": " Grapefruit soda",
    "measure": "2.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Count Camillo's Paloma",
    "ingredient": " Rosemary sprig",
    "measure": "1",
    "unit": "garnish"
  },
  {
    "cocktail": "Count Camillo's Paloma",
    "ingredient": " Sweet Vermouth",
    "measure": "0.75",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Cosmopolitan",
    "ingredient": " Cranberry Juice",
    "measure": "0.5",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Cosmopolitan",
    "ingredient": " Fresh Lime Juice",
    "measure": "0.5",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Cosmopolitan",
    "ingredient": " Lime wheel",
    "measure": "1",
    "unit": "garnish"
  },
  {
    "cocktail": "Cosmopolitan",
    "ingredient": " Triple Sec",
    "measure": "0.5",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Cosmopolitan",
    "ingredient": " Vodka",
    "measure": "1.5",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Cherry Rum",
    "ingredient": " cherry-flavored brandy",
    "measure": "1.5",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Cherry Rum",
    "ingredient": " Light cream",
    "measure": "1.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Cherry Rum",
    "ingredient": " Light Rum",
    "measure": "1.25",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Cape Codder",
    "ingredient": " Cranberry Juice",
    "measure": "5.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Cape Codder",
    "ingredient": " Egg White",
    "measure": "1.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Cape Codder",
    "ingredient": " Lime wedge",
    "measure": "1",
    "unit": "garnish"
  },
  {
    "cocktail": "Cape Codder",
    "ingredient": " Old Mr. Boston Anisette ",
    "measure": "1.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Cape Codder",
    "ingredient": " Old Mr. Boston Five Star Brandy",
    "measure": "1.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Cape Codder",
    "ingredient": " Vodka",
    "measure": "1.5",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Boston Sour",
    "ingredient": " Blended whiskey",
    "measure": "2.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Boston Sour",
    "ingredient": " Egg White",
    "measure": "1.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Boston Sour",
    "ingredient": " Juice of a Lemon",
    "measure": "0.5",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Boston Sour",
    "ingredient": " Powdered Sugar",
    "measure": "1.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Bloody Mary",
    "ingredient": " Fresh Lime Juice",
    "measure": "0.25",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Bloody Mary",
    "ingredient": " Freshly ground black pepper to taste, lime wedge, celery stalk",
    "measure": "1",
    "unit": "garnish"
  },
  {
    "cocktail": "Bloody Mary",
    "ingredient": " Tomato Juice",
    "measure": "3.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Bloody Mary",
    "ingredient": " Vodka",
    "measure": "1.5",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Bloody Mary",
    "ingredient": " Worcestershire Sauce",
    "measure": "4.0",
    "unit": "Fl Oz"
  },
  {
    "cocktail": "Bloody Mary",
    "ingredient": "hot red pepper sauce",
    "measure": "2",
    "unit": "garnish"
  }
]


console.log(cocktailData);

cocktailData.filter(object => {
  cocktails.push(object.cocktail);
  ingredients.push(object.ingredient);
})


// create bubble chart
var trace2 = {
  x: ingredients,
  y: cocktails,
  mode: "markers",
  marker: {
    color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
  },
  text: ingredients,
};

var data = [trace2];

var layout = {
  title: "All OTU's Sample Value",
  height: 500,
  width: 1050,
  xaxis: {
    title: "Ingredients",
  },
  yaxis: {
    title: "Cocktails",
  },
};
Plotly.newPlot("bubble", data, layout);