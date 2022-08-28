import { useState } from "react";
import "./styles.css";
import authorCard from "./authorCard.json";

const colors = ['#845EC2','#D65DB1','#FF6F91','#FF9671','#FFC75F','#F9F871'];

function App() {
  const randomIndex = Math.floor(Math.random() * authorCard.length);
  const [index, setIndex] = useState(randomIndex);

  const changeUser = () => {
    const randomIndex = Math.floor(Math.random() * authorCard.length);
    setIndex(randomIndex);
  };

  console.log(authorCard);

  const randomColor = Math.floor(Math.random() * colors.length);

document.body.style = `background: ${colors[randomColor] }`;

  return (
    <div className="App">
      <div className="card" style ={{color: colors[randomColor]}}>
        <div>
          <div>
            <i className="fas fa-quote-left"></i>
            {authorCard[index].quote}
          </div>
          <div className="author">
            
            {authorCard[index].author}
          </div>
          </div>
          <div className="bt" >
            <button onClick={changeUser} style ={{color: colors[randomColor]}}>
             <i className ="fas fa-chevron-right" ></i>
            </button>
         </div>
      </div>
    </div>
  );
}

export default App;
