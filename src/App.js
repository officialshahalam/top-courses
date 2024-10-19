import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { filterData,apiUrl } from "./data";
import Sniper from "./components/Sniper";
import { toast } from "react-toastify";

function App() {


  const [loading,setLoading]=useState(false);
  const [courses,setCourses]=useState([]);
  const [category,setCategory]=useState("All");

  async function fetchData(){
    setLoading(true);
    try{
      const res=await fetch(apiUrl);
      const output=await res.json();
      setCourses(output.data);
    }
    catch(e){
      toast.error("some error occures");
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[]);



  return (
    <div className="bg-bgDark2 min-h-screen pb-10">
      <div className="bg-bgDark py-2">
        <Navbar/>
      </div>

      <div className="w-11/12 max-w-[1080px] mx-auto">
        <Filter category={category} setCategory={setCategory} filterData={filterData}/>
      </div>

      <div className="w-11/12 max-w-[1080px] mx-auto">

        {
          loading?(<Sniper/>):(<Cards category={category} courses={courses}/>)
        }
      </div>

    </div>
  );
}

export default App;
