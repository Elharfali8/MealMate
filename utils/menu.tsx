import { appetizers, asian, beef, breakfast, burger, chicken, dessert, drinks, gluten, indian, lesscarbs, mex, pasta, pizza, salad, sandwich, seafood, soup, vegan, vegetarian } from "@/public/assets/menu"
import { StaticImageData } from "next/image"

export type MenuProps = {
    id: number,
    name: string,
    image : StaticImageData
    path: string
}

export const menuItems: MenuProps[] = [
    { id: 1, name: "Burger", image: burger, path: "burger" },
    { id: 2, name: "Pizza", image: pizza, path: "pizza" },
    { id: 3, name: "Pasta", image: pasta, path: "pasta" },
    { id: 4, name: "Salad", image: salad, path: "salad" },
    { id: 5, name: "Chicken", image: chicken, path: "chicken" },
    { id: 6, name: "Beef", image: beef, path: "beef" },
    { id: 7, name: "Dessert", image: dessert, path: "dessert" },
    { id: 8, name: "Seafood", image: seafood, path: "seafood" },
    { id: 9, name: "Breakfast", image: breakfast, path: "breakfast" },
    { id: 10, name: "Soup", image: soup, path: "soup" },
    { id: 11, name: "Sandwich", image: sandwich, path: "sandwich" },
    { id: 12, name: "Vegan", image: vegan, path: "vegan" },
    { id: 13, name: "Vegetarian", image: vegetarian, path: "vegetarian" },
    { id: 14, name: "Asian", image: asian, path: "asian" },
    { id: 15, name: "Indian", image: indian, path: "indian" },
    { id: 16, name: "Mexican", image: mex, path: "mexican" },
    { id: 17, name: "Drinks", image: drinks, path: "drinks" },
    { id: 18, name: "Appetizers", image: appetizers, path: "appetizers" },
    { id: 19, name: "Low Carb", image: lesscarbs, path: "low-carb" },
    { id: 20, name: "Gluten Free", image: gluten, path: "gluten-free" },
  ]
  