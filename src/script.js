 let getTime = () => {
        let d = new Date();
        let h=d.getHours();
        let m=d.getMinutes();
        let s=d.getSeconds();
        
        return ` ${h} : ${m} : ${s}`;

      };
      console.log(getTime());
      setInterval(()=>{
        // console.log(getTime());
     let clockObj=   document.querySelector(".clock")
          clockObj.innerHTML=getTime();
      },1000)