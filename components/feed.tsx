import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import TopBar from './topbar';
import axios from 'axios';
import { Recipe } from '@prisma/client';
import NewModal from './NewModal';
import Card from './Card';

export default function Feed() {
    const { data: session } = useSession();
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const getRecipes = async() => {
        const result: any = await axios.get("/api/recipe/getRecipes");
        setRecipes(result.data)
    }
    useEffect(() => {
        getRecipes();
    }, [])
    
  return (
      <div className='min-h-screen bg-[#FFD7A1] flex items-center  flex-col'>
        <TopBar/>
        <NewModal/>
          <div className="min-h-screen border-r-2 p-4  border-l-2 w-11/12 md:w-2/3 border-accent-content shadow-xl">
            {recipes?.map((recipe: any) => {
                return (
                  <div key={recipe.id}>
                    <Card recipe={recipe} />
                  </div>
              )
                    })}
          </div>
    
    </div>
  )
}
