
import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async  (req:any, res:any) => {
    
    const data = req.body;
  
    await prisma.recipe.create({
        data: {
            title:data.title,
            description:data.description,
            userEmail: data.userEmail,
            likes: 0,
        }
    })
  
  
  res.send(200)
    
    
}