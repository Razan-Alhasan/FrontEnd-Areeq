import React, { useState } from 'react';
import { getUserById } from '../api/userApi';

function Test() {
    async function handelClick (){
    try{
const user = await getUserById('643d28487707811af9245de0');
console.log(user);
    }
    catch(err){
        console.log(err);
    }
   } 
   return(
    <div>
        <button onClick={handelClick}> click me </button>
    </div>
   );
}

export default Test;