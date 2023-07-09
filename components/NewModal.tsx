import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function NewModal() {
    const {data:session}=useSession()
    const [Title, setTitle] = useState<string>("")
    const [Time, setTime] = useState<number>(0)
    const [Recipe, setRecipe] = useState<string>("")
   
    
    const submitForm =async () => {
        await axios.post("/api/recipe/addRecipe", {
            title:Title,
            description:Recipe,
            userEmail:session?.user?.email,
        })
        console.log("ho gaya");
        
    }


  return (
    <div>
      {/* Open the modal using ID.showModal() method */}
      {/* @ts-ignore  */}
      <button className="btn" onClick={() => window.my_modal_1.showModal()}>
        <AiOutlinePlus className="text-xl" /> Post Recipe
      </button>
      <dialog id="my_modal_1" className="modal backdrop:blur-md">
        <form method="dialog" className="modal-box bg-accent">
          <h3 className="font-bold text-lg">
            Add Your Recipe for the world to see!
          </h3>
          <form>
            <div className="flex flex-col ">
              <label className="text-lg mb-3">Title: </label>
                <input
                    onChange={(e)=>setTitle(e.target.value)}        
                    type="text"
                    placeholder="Title"
                    className="input input-bordered text-neutral w-full max-w-xs mb-5"
                    />
            </div>
            {/* <div className="flex flex-col ">
              <label className="text-md mb-3">Time Taken: </label>
              <input
                onChange={(e)=>setTime(e.target.value as unknown as number)}        
                type="text"
                placeholder="Time Taken (in mins)"
                className="input input-bordered text-neutral w-full max-w-xs mb-5"
                />
                      </div> */}
            
            <div className="flex flex-col ">
              <label className="text-md mb-3">Recipe:</label>
              <textarea
                onChange={(e)=>setRecipe(e.target.value)}        
                className="textarea textarea-bordered text-neutral rounded-2xl w-5/6"
                placeholder="Recipe"
              ></textarea>
            </div>
          </form>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={()=>submitForm()} className="btn">Submit</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>Submit</button>
        </form>
      </dialog>
    </div>
  );
}
