import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";


const Coffee = () => {
    const coffeeCollection = useLoaderData(); 
    const [coffees, setCoffees] = useState(coffeeCollection); 

    return (
        <div className="max-w-[1320px] mx-auto">
            <h1 className="text-4xl text-center">Available coffee {coffeeCollection.length}</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 w-[900] gap-2 mt-10">
           {
                coffees.map(coffee=><CoffeeCard
                key={coffee._id}
                coffee={coffee}
                coffees={coffees}
                setCoffees={setCoffees}
                ></CoffeeCard>)
            }
            
           </div>
        </div>
    );
};

export default Coffee;