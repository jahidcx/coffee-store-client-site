import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { name, chef, supplier, taste, category, details, photo, _id } = coffee;

    const handleUpdateCoffee = e =>{
        e.preventDefault(); 
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {name,chef,supplier,taste,category,details,photo};
        console.log(updatedCoffee); 

        // send to server 
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedCoffee) 
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0 ){
                Swal.fire({
                    title: 'Success!',
                    text: ' Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <section className="p-6 bg-[#F4F3F0]">
            <form onSubmit={handleUpdateCoffee} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium text-5xl font-Rancho">Update Coffee {name}</p>
                        <p className="text-xl font-Rancho">Experience the latest in coffee culture with our new update! From bold blends to exotic flavors, our refreshed coffee page brings you the finest selection of beans and brewing methods. Indulge in rich aromas and robust tastes that awaken your senses. Explore our curated collection and elevate your coffee experience today!</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname"  className="text-sm">Name</label>
                            <input id="firstname" type="text" defaultValue={name} placeholder="enter coffee name" name="name" className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm">Chef</label>
                            <input id="lastname" type="text" defaultValue={chef} placeholder="Enter coffee chef" name="chef" className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Supplier</label>
                            <input id="email" type="text" defaultValue={supplier} name="supplier" placeholder="Supplier" className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Taste</label>
                            <input id="email" type="text" defaultValue={taste} name="taste" placeholder="Taste" className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Category</label>
                            <input id="email" type="text" defaultValue={category} name="category" placeholder="category" className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Details</label>
                            <input id="email" type="text" defaultValue={details} name="details" placeholder="details" className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="address" className="text-sm">Photo</label>
                            <input id="address" type="url" defaultValue={photo} name="photo" placeholder="enter photo url" className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>

                        <input type="submit" value="Update Coffee" className="col-span-full btn bg-[#D2B48C]" />


                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default UpdateCoffee;