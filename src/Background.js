import { useState } from "react";

const Background = () => {

      const [backGroundUrl, setUrl] = useState([]);
      let url;

      console.log("passou aqui");
        
        function back() {
        var data = new Date();
        var hora = data.getHours();
        let url;
        if (hora >= 3 & hora < 6) {
          url = 'url("https://cdnb.artstation.com/p/assets/images/images/006/771/815/large/daka-dibuja-3-madrugada.jpg?1501127216")';
        }
        else if (hora >= 6 & hora < 8) {
          url = 'url("https://cdnb.artstation.com/p/assets/images/images/006/771/817/large/daka-dibuja-4-amanecer.jpg?1501127222")';
        }
        else if (hora >= 8 & hora < 10) {
          url = 'url("https://cdnb.artstation.com/p/assets/images/images/006/771/819/large/daka-dibuja-5-manana.jpg?1501127228")';
        }
        else if (hora >= 10 & hora < 14) {
          url = 'url("https://cdnb.artstation.com/p/assets/images/images/006/771/807/large/daka-dibuja-6-medio-dia.jpg?1501127200")';
        }
        else if (hora >= 14 & hora < 16) {
          url = 'url("https://cdnb.artstation.com/p/assets/images/images/006/771/809/large/daka-dibuja-7-tarde.jpg?1501127206")';
        }
        else if (hora >= 16 & hora < 18) {
          url = 'url("https://cdnb.artstation.com/p/assets/images/images/006/771/813/large/daka-dibuja-8-atardecer.jpg?1501127212")';
        }
        else if (hora >= 18 & hora < 21) {
          url = 'url("https://cdna.artstation.com/p/assets/images/images/006/771/808/large/daka-dibuja-1-noche.jpg?1501127204")';
        }
        else {
          url = 'url("https://cdnb.artstation.com/p/assets/images/images/006/771/811/large/daka-dibuja-2-media-noche.jpg?1501127210")';
        }
    }
    
        setUrl(url);
        
        console.log(url)
        console.log(backGroundUrl)

        return (
          backGroundUrl
        )
      }     

export default Background;