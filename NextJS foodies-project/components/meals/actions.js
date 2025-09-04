'use server';

import { saveMeal } from '@/lib/meals';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


export async function shareMeal(prevState , formdata){
    const meal = {
      title : formdata.get('title'),
      summary : formdata.get('summary'),
      instructions : formdata.get('instructions'),
      image : formdata.get('image'),
      creator : formdata.get('name'),
      creator_email : formdata.get('email')
    }
    await saveMeal(meal)
    revalidatePath('/meals')
    redirect('/meals')
  }