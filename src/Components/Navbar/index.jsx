import { useState } from "react";
import { FaBars } from "react-icons/fa";  
import img from "../../assets/LH_Final Logo.png"
import { Link } from "react-router-dom";

function Navbar() {
  const [drop, setDrop] = useState(false);
  function handleclick(){
      setDrop(!drop)
    }
    function handledrop() {
      setDrop(!drop);
    }
  const handleClose = () => {
    setIsHidden(true);
  };

  return (
    <div className="bg-[#FFEEDA]">
   
    <div className="p-3 lg:px-4 w-full top-0 z-50 overflow-x-hidden  transition-all duration-500">
            <div className="flex items-center justify-between lg:px-4 ">

    
              
             <div>
              <Link to="/">
          <img src={img} className="w-[80px] " alt="" />
          </Link>
               </div>
               <div className="mt-1 lg:flex items-center justify-center hidden pb-2 lg:pb-0 me-8 lg:me-0">
           
           <ul className="flex gap-10 justify-center text-lg items-center ">
           <li className="text-black cursor-pointer font-mono hover:text-[#075E56]">
              <Link to="program" >  Our Program</Link>
             </li>
             <li className="text-black cursor-pointer font-mono hover:text-[#075E56]">
              <Link to="about"> About Us</Link>
             </li>
             <li className="text-black cursor-pointer font-mono hover:text-[#075E56]">
              Enrollment
             </li>
             <li className="text-black cursor-pointer font-mono hover:text-[#075E56]">
           Child Era
             </li> 
           </ul>
      
         </div>
              {/* mobile */}
              <div className=" flex justify-center items-center  lg:hidden">
               
                <div>
                  <FaBars
                    onClick={handledrop}
                    className="text-black text-3xl me-2"
                  />
                </div>
              </div>
        

        <div className="lg:block hidden">
       
          <button className="bg-[#7A412E] hover:bg-transparent hover:boder-[#075E56] border-[1px] border-[#7A412E] hover:text-[#7A412E] text-[#FFEEDA] px-4 py-2 rounded  font-semibold hover:bg-blacktransition-all duration-500 " >Schedule a Tour</button>
       
        </div>


            </div>
          
            {/* mobile nav */}
            <div
              className={
                drop
                  ? "h-[240px]  transition-all duration-700 w-[100%] lg:hidden "
                  : "h-0 overflow-hidden transition-all duration-700 w-[100%]  opacity-0 lg:hidden"
              }
            >
               
              <ul className="flex flex-col ms-2 justify-center font-[Lato] gap-3 overflow-hidden ">
              <li onClick={handleclick} className="text-black font-mono mt-2 ms-4 cursor-pointer hover:text-[#075E56]">
             <Link to="program" >  Our Program</Link>
                </li>
               
                <li onClick={handleclick} className="text-black font-mono mt-2 ms-4 cursor-pointer hover:text-[#075E56]">
                <Link to="about"> About Us</Link>
                </li>
                <li onClick={handleclick} className="text-black font-mono mt-2 ms-4 cursor-pointer hover:text-[#075E56]">
                  Enrollment
                </li>
                <li onClick={handleclick} className="text-black font-mono mt-2 ms-4 cursor-pointer hover:text-[#075E56]">
             Child Era
                </li>
                     
              </ul>
         
            </div>
            {/* laptop  */}
            
          </div>
        
    </div>
  );
}

export default Navbar;