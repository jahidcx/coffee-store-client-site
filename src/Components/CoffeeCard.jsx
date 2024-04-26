import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    // console.log(coffee);

    const { name, chef, supplier, taste, category, details, photo, _id } = coffee;
    

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);
                        }


                    })
            }
        });
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-[185px] h-[240px] p-3 rounded-lg" src={photo} alt="Movie" /></figure>
            <div className=" flex justify-between w-full mx-5 mt-5">
                <div className="space-y-3">
                    <h2 className="card-title"><span>Name:</span>{name}</h2>
                    <h2 className="card-title"><span>Chef:</span>{chef}</h2>
                    <h2 className="card-title"><span>Supplier:</span>{supplier}</h2>
                    <h2 className="card-title"><span>Category:</span>{category}</h2>
                </div>

                <div className="flex  flex-col space-y-3">
                    <button className="btn ">view</button>
                    <Link to={`updatecoffee/${_id}`}>
                        <button className="btn ">edit</button>
                    </Link>
                    <button className="btn " onClick={() => handleDelete(_id)}>delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;