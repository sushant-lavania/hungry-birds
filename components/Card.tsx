import { Recipe } from '@prisma/client'
import axios from 'axios'
import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import { User } from '@prisma/client';

export default function Card(props:any) {
    const recipe: Recipe | null = props?.recipe
    const [User, setUser] = useState<User>()
    const getUser =async () => {
        const result:any=await axios.post('api/recipe/getuser',{
            userEmail:recipe?.userEmail
        })
        // console.log(result.data);
        
        setUser(result.data)
    }    

    useEffect(() => {
      
        getUser()
      
    }, [])
    
  return (
      <div>
          <div className="card w-full mb-3 bg-base-100 shadow-xl text-neutral">
              <div className="card-body">
                  <div className="flex justify-between">
                      <div className='flex items-center'>
                      <div className="avatar mr-5">
                        <div className="h-10 w-10 rounded-full">
                        <Image
                             src={ User?.image as string}
                             alt='User profile picture'
                             width={300}
                              height={300}
                             />
                        </div>
                      </div>
                        {User?.name}
                      </div>
                      
                  </div>
      <h2 className="card-title">
        {recipe?.title}
      </h2>
      <p>{recipe?.description}</p>
      <div className="card-actions justify-end">
      </div>
    </div>
          </div>
      </div>
  )
}
