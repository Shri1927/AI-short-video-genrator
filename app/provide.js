'use client';
import { Users } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import {db} from "@/configs/db";

function Provider({children}) {

  const {user} = useUser();

  useEffect( () => {
     user&&isNewuser();
  },[user]);

  const isNewuser = async () => {
    const result = await db.select().from(Users)
    .where(eq(Users.email, user?.primaryEmailAddress?.primaryEmailAddress));
     console.log(result);
     
    if(!result[0]){
      await db.insert(Users).values({
        name : user?.fullName,
        email : user?.primaryEmailAddress?.primaryEmailAddress,
        imgUrl : user?.imgUrl
      });
    }
  }

  return (
    <div>
      {children}
    </div>
  )
}

export default Provider;
