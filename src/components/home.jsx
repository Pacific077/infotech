import React from "react";
import "../styles/home.css";
import vg from "../assets/—Pngtree—hacker with computer png element_5389008.png";
import Brands from "./brands";
import Array from "../brandArray.jsx";



// map function
const brandmapfun = (temp)=>{
  return <Brands  className={temp.className} brand={temp.name} icon={temp.Bname}/>;
};

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="contents">
          <h1> INFOTECH</h1>
          <h4> Soltuion to all your problems</h4>
        </div>
      </div>
      <div className="homesecond">
        <div className="imagemove ">
          <img src={vg} alt="" />
        </div>
        <div className="imginfo">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          temporibus ducimus nesciunt ullam placeat rerum dolor amet quasi
          perspiciatis. Reiciendis?
        </div>
      </div>
      <div className="whoweare" id="about">
        <h3> WHO WE ARE ?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          animi tempora vel neque accusantium, quaerat culpa eaque magnam, est
          aliquid sunt! Tenetur porro asperiores praesentium, sequi mollitia
          quaerat ipsa labore consequatur esse quasi totam pariatur rem alias
          odio saepe, culpa in fuga, aperiam earum sint dolore. Cumque earum
          voluptate quas sapiente numquam labore rem nemo corporis vero quos
          nulla nostrum amet recusandae dicta quidem quae odio, exercitationem
          sed, vitae quam eaque, autem omnis culpa accusantium. Expedita
          corporis, fuga quia nobis, animi ad voluptatibus veniam aspernatur
          error nam esse dolor quis? Numquam facere beatae reprehenderit
          accusamus eveniet facilis libero corporis aliquid!
        </p>
      </div>
      <div className="home3" id="brands"> 
      <h3> Brands</h3>
       <div className="inbrand">
        {Array.map(brandmapfun)};
        {/* <Brands className="brands animgoogle" brand={Array[0].name} icon={Array[0].Bname}/>
        <Brands className="brands animamazon" brand={Array[1].name} icon={Array[1].Bname}/>
        <Brands className="brands animyt" brand={Array[2].name} icon={Array[2].Bname}/>
        <Brands className="brands animinsta" brand={Array[3].name} icon={Array[3].Bname}/> */}
        
       </div>
      </div>
    </div>
  );
};

export default Home;
