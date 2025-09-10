import Link from "next/link";
import classes from './page.module.css'
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

const  Meals =async ()=>{
  const meals = await getMeals() 
  return <MealsGrid meals={meals}/>
}
  

export default async function MealPage() {
     

  return (
    <>
      <header>
        <h1>
            delicious meals, created{''}
            <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favlurite recioe and cook it yourself. It is easy and fun!</p>
        <p className={classes.cta}>
            <Link href='/meals/share'>Share your favourite recipe</Link>

        </p>

      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Please wait while loading...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}
