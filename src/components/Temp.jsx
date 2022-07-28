import React,{useState} from 'react';
import { useEffect } from 'react';
import'./Temp.css';
const Temp = ()=>{
    const[city,setCity] = useState(null);
    const[search,setSearch] = useState("Mumbai")
     
     useEffect(()=>{
      const fetchApi = async ()=>{
          const url =  `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3871364c50b8c19b6356c1aa0e631cd1`
         
         const res = await fetch(url);
         const resJson = await res.json();
         setCity(resJson.main);
      }

      fetchApi();
     },[search])

   return(
    <>
         <div className='main'>
            <div className='box'>
                <div className='inputData'>
                    <input type="search"
                    value={search}
                    className='inputField'onChange ={(e) => {setSearch(e.target.value)}}/>
                </div>
                {
                  !city ? (
                    <p className='errorMsg'>No Data  Found</p>
                  ) : (
                     <div>
                     <div className='info'>
                     <h2 className='location'>
                     <i className="fa-solid fa-street-view"></i>{search}
                     </h2>
                     <h1 className='temp'>
                      {city.temp}°C
                     </h1>
                     <h3 className='tempmin_max'> Min : {city.temp_min}°C | Max : {city.temp_max}°C</h3>
                </div>
                <div className='wave-one'>   </div>
                <div className='wave-two'>   </div>
                <div className='wave-three'>   </div>
                </div>

                
                  )
                }
                
            </div>
           

         </div>
    </>
   );

}

export default Temp;