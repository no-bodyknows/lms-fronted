import { Link } from "react-router-dom";  
import HomeLayouts from "../Layouts/HomeLayouts";
import HomePageImg from "../assets/images/HomePage1.jpg"; 

function HomePage() {

    return (
        <>
            <HomeLayouts>
                <div className="pt-10 text-white flex  items-center justify-center gap-10 mx-16 h-[90vh]">
                    <div className="w-1/2 space-y-6">
                         <h1 className='text-5xl font-semibold'>
                        Find Out Best     
                        <span className="text-yellow-500 font-bold ">
                        Online Courses
                    </span>
                        </h1>
                        <p className="texxt-xl text-gray-200" >
                    we have a large linrary of courses taught by highly skilled  faculties at a very affordable price.
                        </p>
                        <div className="space-x-6">
                            <Link to="/courses">
                                <button className="bg-yellow-500 px-5 py-3 rounded-md  font-semibold text-large cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-3">Explore Courses</button>
                            </Link>

                             <Link to="/contact">
                                <button className=" border vorder-yellow-500px  px-5 py-3 rounded-md  font-semibold text-large cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-3">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="w-1/2 flex items-center justify-center">
                         <img
                            alt="homepage"
                            src={HomePageImg}
                            className="w-[500px] h-[500px] object-cover"
                        />

                    </div>
                </div>
                
            </HomeLayouts>

        </>
        
    );
    
}

export default HomePage;