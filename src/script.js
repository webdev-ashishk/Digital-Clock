 let getTime = () => {
        let d = new Date();
       /*  
       let h=d.getHours();
        let amPm=h>=12?"PM":"AM";
        let m=d.getMinutes();
        let s=d.getSeconds(); 
        return ` ${h} : ${m} : ${s}: ${amPm}`;
        */
        return d.toLocaleTimeString();
      };
      console.log(getTime());
      setInterval(()=>{
     let clockObj=   document.querySelector(".clock")
          clockObj.innerHTML=getTime();
      },1000)