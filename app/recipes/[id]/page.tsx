import { BreadCrumbComponent } from '@/components/BreadCrumbComponent'
import { vegetarian } from '@/public/assets/menu'
import Image from 'next/image'
import React from 'react'

const SingleRecipePage = () => {

  const item = {
    id: 649411,
    image: "https://img.spoonacular.com/recipes/649411-556x370.jpg",
    imageType: "jpg",
    title: "Lebanese Tabouleh",
    readyInMinutes: 45,
    servings: 2,
    sourceUrl: "http://www.foodista.com/recipe/JM4J3HC6/lebanese-tabouleh",
    vegetarian: true,
    vegan: true,
    glutenFree: false,
    dairyFree: true,
    veryHealthy: true,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 6,
    gaps: "no",
    preparationMinutes: null,
    cookingMinutes: null,
    aggregateLikes: 3,
    healthScore: 100,
    creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    license: "CC BY 3.0",
    sourceName: "Foodista",
    pricePerServing: 407.95,
    extendedIngredients: [
      {
        id: 20013,
        aisle: "Pasta and Rice",
        image: "bulgur-wheat.jpg",
        consistency: "SOLID",
        name: "bulgur wheat",
        nameClean: "bulgur wheat",
        original: "3 tablespoons cooked bulgur wheat",
        originalName: "cooked bulgur wheat",
        amount: 3,
        unit: "tablespoons",
        meta: ["cooked"],
        measures: {
          us: { amount: 3, unitShort: "Tbsps", unitLong: "Tbsps" },
          metric: { amount: 3, unitShort: "Tbsps", unitLong: "Tbsps" }
        }
      },
      {
        id: 10311297,
        aisle: "Produce",
        image: "parsley.jpg",
        consistency: "SOLID",
        name: "flat leaf parsley",
        nameClean: "flat leaf parsley",
        original: "3 cups flat leaf parsley, about one bushel",
        originalName: "flat leaf parsley, about one bushel",
        amount: 3,
        unit: "cups",
        meta: [],
        measures: {
          us: { amount: 3, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 180, unitShort: "g", unitLong: "grams" }
        }
      },
      {
        id: 2064,
        aisle: "Produce",
        image: "mint.jpg",
        consistency: "SOLID",
        name: "mint",
        nameClean: "mint",
        original: "1 tablespoon fresh mint",
        originalName: "fresh mint",
        amount: 1,
        unit: "tablespoon",
        meta: ["fresh"],
        measures: {
          us: { amount: 1, unitShort: "Tbsp", unitLong: "Tbsp" },
          metric: { amount: 1, unitShort: "Tbsp", unitLong: "Tbsp" }
        }
      },
      {
        id: 11291,
        aisle: "Produce",
        image: "spring-onions.jpg",
        consistency: "SOLID",
        name: "green onions",
        nameClean: "green onions",
        original: "3 tablespoons green onions, finely chopped",
        originalName: "green onions, finely chopped",
        amount: 3,
        unit: "tablespoons",
        meta: ["finely chopped"],
        measures: {
          us: { amount: 3, unitShort: "Tbsps", unitLong: "Tbsps" },
          metric: { amount: 3, unitShort: "Tbsps", unitLong: "Tbsps" }
        }
      },
      {
        id: 9152,
        aisle: "Produce",
        image: "lemon-juice.jpg",
        consistency: "LIQUID",
        name: "juice from lemon",
        nameClean: "juice from lemon",
        original: "1 Juice from lemon",
        originalName: "Juice from lemon",
        amount: 1,
        unit: "",
        meta: [],
        measures: {
          us: { amount: 1, unitShort: "", unitLong: "" },
          metric: { amount: 1, unitShort: "", unitLong: "" }
        }
      },
      {
        id: 4053,
        aisle: "Oil, Vinegar, Salad Dressing",
        image: "olive-oil.jpg",
        consistency: "LIQUID",
        name: "olive oil",
        nameClean: "olive oil",
        original: "2 tablespoons olive oil",
        originalName: "olive oil",
        amount: 2,
        unit: "tablespoons",
        meta: [],
        measures: {
          us: { amount: 2, unitShort: "Tbsps", unitLong: "Tbsps" },
          metric: { amount: 2, unitShort: "Tbsps", unitLong: "Tbsps" }
        }
      },
      {
        id: 10211529,
        aisle: "Produce",
        image: "roma-tomatoes.png",
        consistency: "SOLID",
        name: "roma tomatoes",
        nameClean: "roma tomatoes",
        original: "1/4 cup roma tomatoes, finely chopped",
        originalName: "roma tomatoes, finely chopped",
        amount: 0.25,
        unit: "cup",
        meta: ["finely chopped"],
        measures: {
          us: { amount: 0.25, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 59.147, unitShort: "g", unitLong: "grams" }
        }
      }
    ],
    summary: "Lebanese Tabouleh requires about <b>45 minutes</b> from start to finish. Watching your figure? This dairy free, lacto ovo vegetarian, and vegan recipe has <b>213 calories</b>, <b>5g of protein</b>, and <b>15g of fat</b> per serving...",
    cuisines: ["Middle Eastern"],
    dishTypes: [
      "side dish",
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ],
    diets: ["dairy free", "lacto ovo vegetarian", "vegan"],
    occasions: [],
    instructions: "<ol><li>Remove stems from parsley and mint. Rinse leaves in a colander. Pat dry with paper towel.</li><li>In a food processor pulse parsley and mint until finely chopped. Transfer to a large mixing bowl.</li><li>Add green onions, tomatoes and bulgur wheat; stir to combine.</li><li>Toss with lemon juice and olive oil. Refrigerate for an hour before serving.</li><li>Serve on its own or with pita bread</li><li>Serves 2</li></ol>",
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Remove stems from parsley and mint. Rinse leaves in a colander. Pat dry with paper towel. In a food processor pulse parsley and mint until finely chopped.",
            ingredients: [
              { id: 11297, name: "parsley", localizedName: "parsley", image: "parsley.jpg" },
              { id: 2064, name: "mint", localizedName: "mint", image: "mint.jpg" }
            ],
            equipment: [
              { id: 404771, name: "food processor", localizedName: "food processor", image: "https://spoonacular.com/cdn/equipment_100x100/food-processor.png" },
              { id: 405895, name: "paper towels", localizedName: "paper towels", image: "https://spoonacular.com/cdn/equipment_100x100/paper-towels.jpg" },
              { id: 404639, name: "colander", localizedName: "colander", image: "https://spoonacular.com/cdn/equipment_100x100/colander.jpg" }
            ]
          },
          {
            number: 2,
            step: "Transfer to a large mixing bowl.",
            ingredients: [],
            equipment: [
              { id: 405907, name: "mixing bowl", localizedName: "mixing bowl", image: "https://spoonacular.com/cdn/equipment_100x100/mixing-bowl.jpg" }
            ]
          },
          {
            number: 3,
            step: "Add green onions, tomatoes and bulgur wheat; stir to combine. Toss with lemon juice and olive oil. Refrigerate for an hour before serving.",
            ingredients: [
              { id: 20012, name: "bulgur", localizedName: "bulgur", image: "bulgur-wheat.jpg" },
              { id: 11291, name: "green onions", localizedName: "green onions", image: "spring-onions.jpg" },
              { id: 9152, name: "lemon juice", localizedName: "lemon juice", image: "lemon-juice.jpg" },
              { id: 4053, name: "olive oil", localizedName: "olive oil", image: "olive-oil.jpg" },
              { id: 11529, name: "tomato", localizedName: "tomato", image: "tomato.png" }
            ],
            equipment: []
          },
          {
            number: 4,
            step: "Serve on its own or with pita bread",
            ingredients: [
              { id: 18413, name: "pita", localizedName: "pita", image: "pita-bread.jpg" }
            ],
            equipment: []
          },
          {
            number: 5,
            step: "Serves 2",
            ingredients: [],
            equipment: []
          }
        ]
      }
    ],
    originalId: null,
    spoonacularScore: 95.14593505859375,
    spoonacularSourceUrl: "https://spoonacular.com/lebanese-tabouleh-649411"
  }

  return (
    <main className="mt-[72px]">
        <div className="container main-container min-h-[calc(100vh-72px)]">
          <div className='py-8 lg:py-12'>
            <BreadCrumbComponent page='recipes' child='meal' />
          </div>
          <div className='grid lg:grid-cols-2 items-center gap-8 shadow-xl py-4 lg:py-8 rounded-xl'>
            {/* Image */}
            <div className='grid place-items-center rounded-xl'>
              <Image 
                src={item.image}
                alt={item.title}
                width={800}
                height={600}
                className='rounded-xl'
              />
            </div>
            {/* Content */}
            <div className='px-2 lg:px-0'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>{item.title}</h1>
              <p dangerouslySetInnerHTML={{ __html: item.summary }} className='mt-1 mb-2 lg:mt-2 lg:mb-3 text-gray-600'></p>
              <div className='mt-1 mb-2 lg:mt-2 lg:mb-3 flex flex-wrap gap-4 border-b-[2px] pb-2 lg:pb-4 border-b-gray-700'>
                <p className=' px-2 border rounded-md text-gray-600 capitalize border-gray-600'>
                readyInMinutes : {item.readyInMinutes}
                </p>
                <p className=' px-2 border rounded-md text-gray-600 capitalize border-gray-600'>servings : {item.servings}</p>
                <p className=' px-2 border rounded-md  text-gray-600 capitalize border-gray-600'>healthScore : {item.healthScore}</p>
              </div>
              <div className='w-fit grid gap-y-2'>
                <p className=' capitalize font-medium pb-2 pr-2 border-b border-b-gray-500'>
                  <span className='text-gray-500'>vegetarian</span> : {item.vegetarian ? 'true' : 'false'}
                </p>
                <p className=' capitalize font-medium pb-2  pr-2 border-b border-b-gray-500'>
                  <span className='text-gray-500'>vegan</span> : {item.vegan ? 'true' : 'false'}
                </p>
                <p className=' capitalize font-medium pb-2  pr-2 border-b border-b-gray-500'>
                  <span className='text-gray-500'>glutenFree</span> : {item.glutenFree ? 'true' : 'false'}
                </p>
                <p className=' capitalize font-medium pb-2  pr-2 border-b border-b-gray-500'>
                  <span className='text-gray-500'>veryHealthy</span> : {item.veryHealthy ? 'true' : 'false'}
                </p>
                
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}

export default SingleRecipePage