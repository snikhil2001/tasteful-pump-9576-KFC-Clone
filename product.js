let productsArr = [
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-sideslovers3sides?q=75",
    head: "SIDE LOVER'S MEAL",
    price: "22.49",
    id: "fid1",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-beyond12pcnuggetscombo?q=75",
    head: "12 pc. Beyond Nuggets Combo",
    price: "11.99",
    id: "fid2",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-8pcBucketMealStandard?q=75",
    head: "8 pc. Meal",
    price: "27.59",
    id: "fid3",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-cknsndcombo?q=75%22",
    head: "KFC Chicken Sandwich Combo",
    price: "7.49",
    id: "fid4",
  },
  {
    imglink: "https://digitaleat.kfc.com/menus/image/bare/kfc-10pcfeast?q=75",
    head: "10 Piece Feast",
    price: "30",
    id: "fid5",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-FamousBowlFillUp?q=75",
    head: "Famous Bowl Fill Up",
    price: "7.49",
    id: "fid6",
  },
  {
    imglink: "https://digitaleat.kfc.com/menus/image/bare/kfc-3pcBox2B1W?q=75",
    head: "3 pc. Chicken Box - 2 Breasts, 1 Wing",
    price: "10.99",
    id: "fid7",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-5TenderCombo?q=75",
    head: "5 pc. Tenders Combo",
    price: "9.69",
    id: "fid8",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-8TendersMeal?q=75",
    head: "8 pc. Tenders Meal",
    price: "19.99",
    id: "fid9",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-beyond6pcnuggetscombo?q=75",
    head: "6 pc. Beyond Nuggets Combo",
    price: "7.99",
    id: "bfc1",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-beyond12pcnuggetscombo?q=75",
    head: "12 pc. Beyond Nuggets Combo",
    price: "14.99",
    id: "bfc2",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-beyond6pcnuggets?q=75",
    head: "6 pc. Beyond Nuggets",
    price: "6.99",
    id: "bfc3",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-beyond12pcnuggets?q=75",
    head: "12 pc. Beyond Nuggets",
    price: "13.99",
    id: "bfc4",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-8pcBucketMealStandard?q=75",
    head: "8 pc. Meal",
    price: "27.59",
    id: "buc1",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-sideslovers3sides?q=75",
    head: "Side Lovers Meal",
    price: " 22.59",
    id: "buc2",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-8pcFamilyFillUpDark?q=75",
    head: "8 pc. Fill Up",
    price: "30",
    id: "buc3",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-8pcBucketStandard?q=75",
    head: "8 pc. Chicken Bucket",
    price: "24.99",
    id: "buc4",
  },
  {
    imglink: "https://digitaleat.kfc.com/menus/image/bare/kfc-10pcfeast?q=75",
    head: "8 Piece Feast",
    price: "25.99",
    id: "buc5",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-12pcBucketMealStandard?q=75",
    head: "12 pc. Meal",
    price: "30",
    id: "buc6",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-12pcBucketStandard?q=75",
    head: "12 pc. Chicken Bucket",
    price: "30.59",
    id: "buc7",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-16pcBucketStandard?q=75",
    head: "16 pc. Chicken Bucket",
    price: "19.59",
    id: "buc8",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-16pcBucketMealStandard?q=75",
    head: "16 pc. Meal",
    price: "25.59",
    id: "buc9",
  },
  {
    imglink: "https://digitaleat.kfc.com/menus/image/bare/kfc-12pcTenders?q=75",
    head: "12 pc. Tenders Bucket",
    price: "43.59",
    id: "buc10",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-12TendersMeal?q=75%20%20%20%20%20%20%20%20%20%20%20%20alt=",
    head: "12 pc. Tenders Meal",
    price: "17.99",
    id: "buc11",
  },
  {
    imglink: "https://digitaleat.kfc.com/menus/image/bare/kfc-TendersFU?q=75",
    head: "3 pc. Tenders Fill Up",
    price: "7.99",
    id: "tend1",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-TendersCombo?q=75",
    head: "3 pc. Tenders Combo",
    price: "8.69",
    id: "tend2",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-4TendersCombo?q=75",
    head: "4 pc. Tenders Combo",
    price: "9.69",
    id: "tend3",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-5TenderCombo?q=75",
    head: "5 pc. Tenders Combo",
    price: "10.59",
    id: "tend4",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-5pcTendersBox?q=75",
    head: "5 pc. Tenders Box",
    price: "7.99",
    id: "tend5",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-3pcNHTendersCombo?q=75",
    head: "3 pc. Nashville Hot Tenders Combo",
    price: "9.99",
    id: "tend6",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-5pcNHTendersCombo2?q=75",
    head: "5 pc. Nashville Hot Tenders Combo",
    price: "10.99",
    id: "tend7",
  },
  {
    imglink: "https://digitaleat.kfc.com/menus/image/bare/kfc-8pcTenders?q=75",
    head: "8 pc. Tenders Bucket",
    price: "19.99",
    id: "tend8",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-8TendersMeal?q=75",
    head: "8 pc. Tenders Meal",
    price: "17.99",
    id: "tend9",
  },
  {
    imglink: "https://digitaleat.kfc.com/menus/image/bare/kfc-12pcTenders?q=75",
    head: "12 pc. Tenders Bucket",
    price: "27.59",
    id: "tend10",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-12TendersMeal?q=75",
    head: "12 pc. Tenders Meal",
    price: "22.59",
    id: "tend11",
  },
  {
    imglink: "https://digitaleat.kfc.com/menus/image/bare/kfc-16pcTenders?q=75",
    head: "16 pc. Tenders Bucket",
    price: "39.59",
    id: "tend12",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-16TendersMeal?q=75",
    head: "16 pc. Tenders Meal",
    price: "39.99",
    id: "tend13",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-PopcornComboFries?q=75",
    head: "Popcorn Nuggets Combo",
    price: "7.69",
    id: "tend14",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-cknsndcombo?q=75&w=1280",
    head: "KFC Chicken Sandwich Combo",
    price: "7.49",
    id: "sand1",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-cknsndbigbox?q=75&w=1280",
    head: "KFC Chicken Sandwich Box",
    price: "9.99",
    id: "sand2",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-cknsndalc?q=75&w=1280",
    head: "KFC Chicken Sandwich",
    price: "3.99",
    id: "sand3",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-AlcChLtl?q=75&w=1280",
    head: "Chicken Little",
    price: "2.29",
    id: "sand4",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-ChLtlCombo?q=75&w=1280",
    head: "Chicken Little Combo",
    price: "7.39",
    id: "sand5",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-1BrFU?q=75&w=1280",
    head: "1pc.Breast Combo",
    price: "7.49",
    id: "fc1",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-2DTFU?q=75&w=1280",
    head: "2pc.Drum & Thick Full Up",
    price: "7.49",
    id: "fc2",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-2DTCombo?q=75&w=1280",
    head: "2pc.Drum & Thick Combo",
    price: "8.49",
    id: "fc3",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-2BWCombo?q=75&w=1280",
    head: "2 pc. Chicken Combo - Breast & Wing",
    price: "9.79",
    id: "fc4",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-3pcCombo1B1T1W?q=75&w=1280",
    head: "3 pc. Chicken Combo- 2 Breasts, 1 Wings",
    price: "8.79",
    id: "fc5",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-3pcCombo2T1D?q=75&w=1280",
    head: "3 pc. Chicken Combo - 2 Thighs, 1 Drum",
    price: "9.39",
    id: "fc6",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-3pcCombo1B1T1W?q=75&w=1280",
    head: "3 PC. Chicken Combo - Breast, Thing, And Wing",
    price: "10.99",
    id: "fc7",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-3pcBox2B1W?q=75&w=1280",
    head: "3 PC. Chicken Box - 2 Breasts, 1 Wing",
    price: "9.79",
    id: "fc8",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-3pcBox2T1D?q=75&w=1280",
    head: "3 PC. Chicken Box - 2 Things, 1 Drum",
    price: "9.99",
    id: "fc9",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-4pcCombo?q=75&w=1280",
    head: "4 pc. Chicken Combo",
    price: "8.29",
    id: "fc10",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-6WingsUnsauced?q=75&w=1280",
    head: "Kentucky Fried Wings Combo",
    price: "9.63",
    id: "fc11",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-48WingsUnsauced?q=75&w=1280",
    head: "48 Kentucky Fried Wings",
    price: "5.36",
    id: "fc12",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-24WingsUnsauced?q=75&w=1280",
    head: "24 Kentucky Fried Wings",
    price: "3.8",
    id: "fc13",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-48WingsUnsauced?q=75&w=1280",
    head: "48 Kentucky Fried Wings",
    price: "5.36",
    id: "fc14",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-12WingsUnsauced?q=75&w=1280",
    head: "Kentucky Fried Wings",
    price: "9.76",
    id: "fc15",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-FamousBowlFillUp?q=75&w=1280",
    head: "Famous Bowl Fill Up",
    price: "7.49",
    id: "pot1",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-PotPieFillUp?q=75&w=1280",
    head: "Pot Pie Fill Up",
    price: "7.49",
    id: "pot2",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-AlcBreast?q=75&w=1280",
    head: "A La Carte Breast",
    price: "2.99",
    id: "la1",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-AlcLeg?q=75&w=1280",
    head: "A La Carte Drum",
    price: "1.99",
    id: "la2",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-AlcThigh?q=75&w=1280",
    head: "A La Carte Thing",
    price: "2.09",
    id: "la3",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-AlcWing?q=75&w=1280",
    head: "A La Carte Wing",
    price: "1.59",
    id: "la4",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-AlcTender2?q=75&w=1280",
    head: "La Carte Tender",
    price: "1.45",
    id: "la5",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-FamousBowl?q=75&w=1280",
    head: "Famous Bowl",
    price: "4.99",
    id: "la6",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-PotPie?q=75&w=1280",
    head: "Pot Pie",
    price: "4.99",
    id: "la7",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-IndFries?q=75&w=1280",
    head: "Secret Recipe Fries",
    price: "2.39",
    id: "side1",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-IndMashGravy?q=75&w=1280",
    head: "Mashed Potatoes & Greavy",
    price: "2.39",
    id: "side2",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-IndMacCheese?q=75&w=1280",
    head: "Mac & Cheese",
    price: "2.39",
    id: "side3",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-biscuit?q=75&w=1280",
    head: "Biscuit",
    price: "0.69",
    id: "side4",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-IndColeslaw?q=75&w=1280",
    head: "Cole Slaw",
    price: "2.39",
    id: "side5",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-IndGravy?q=75&w=1280",
    head: "Greavy",
    price: "2.39",
    id: "side6",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-IndCorn?q=75&w=1280",
    head: "Whole Karnel Corn",
    price: "2.39",
    id: "side7",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-IndMash?q=75&w=1280",
    head: "Mashed Potatoes (No Gravy)",
    price: "2.39",
    id: "side8",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-KFCSauce?q=75&w=1280",
    head: "KFC Sauce",
    price: "0.25",
    id: "sauce1",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-HoneyBBQ?q=75&w=1280",
    head: "Honey BBQ",
    price: "0.25",
    id: "sauce2",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-HoneyBBQ?q=75&w=1280",
    head: "Honey Musterd",
    price: "0.25",
    id: "sauce3",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-HoneyBBQ?q=75&w=1280",
    head: "Classic Ranch",
    price: "0.25",
    id: "sauce4",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-honeySauce2?q=75&w=1280",
    head: "Honey Sauce",
    price: "3.25",
    id: "sauce5",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-hotSauce2?q=75&w=1280",
    head: "Hot Sauce",
    price: "3.29",
    id: "sauce6",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-ketchup2?q=75&w=1280%22",
    head: "Ketchup",
    price: "1.25",
    id: "sauce7",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-1Cookie?q=75&w=1280",
    head: "Chocolate Chip Cookie",
    price: "0.59",
    id: "dessert1",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-CCCake?q=75&w=1280",
    head: "Chocolate Chip Cake",
    price: "5",
    id: "dessert2",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-Pepsi?q=75&w=1280",
    head: "Pepsi",
    price: "1.79",
    id: "drink1",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-dietPepsi?q=75&w=1280",
    head: "Diet Pepsi",
    price: "1.79",
    id: "drink2",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-mtndew?q=75&w=1280",
    head: "Mountain Dew",
    price: "1.79",
    id: "drink3",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-mtndewsweetlightning?q=75&w=1280",
    head: "Mountain Dew Sweet Lightning",
    price: "1.79",
    id: "drink4",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-drPepper?q=75&w=1280",
    head: "DR. Pepper",
    price: "1.79",
    id: "drink5",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-sierramist?q=75&w=1280",
    head: "Sierra Mist",
    price: "1.79",
    id: "drink6",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-sweetTea?q=75&w=1280",
    head: "Sweet Tea",
    price: "1.99",
    id: "drink7",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-LemMed?q=75&w=1280",
    head: "Lemonade",
    price: "2.29",
    id: "drink8",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-StrLemMed?q=75&w=1280",
    head: "Strawberry Lemonade",
    price: " 3.79",
    id: "drink9",
  },
  {
    imglink:
      "https://digitaleat.kfc.com/menus/image/bare/kfc-BevBucket?q=75&w=1280",
    head: "1/2 Callon Beverage",
    price: "1.79",
    id: "drink10",
  },
];

let Btn = document.getElementsByClassName("btn");

for (let i = 0; i < Btn.length; i++) {
  Btn[i].addEventListener("click", function () {
    cartfunc(productsArr);
  });
}

function cartfunc(productsArr) {}
