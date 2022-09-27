import React, { useEffect, useState } from 'react'
import { myAxios } from '../services/helper';

const Fromdb = () => {
    const [scrapData,setScrapData ] = useState([]);

    useEffect(()=>{
        scrapMaterialData();
    },[])
    let Token = JSON.parse(localStorage.getItem("data"));
    const headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + Token.token,
    };
    
    const scrapMaterialData = async () => {
        const result = await myAxios.get('/apiScrapMaterial/getAllScrapMaterial', { headers });
       setScrapData(result.data)
    };
    
    //console.log(scrapMaterialData().data);
   // console.log(scrapData);
    
       const data=scrapData.slice(0,12).map(da =>{ return "id:"+da.id+" name:"+da.name+" price:"+da.price });
   
    console.log("data="+data);
    console.log(scrapData);
    return (
        <div>
          {
            

          }
        </div>
    )
}


export default Fromdb