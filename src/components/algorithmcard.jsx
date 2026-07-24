

function AlgorithmCard({title,array,comparing ,sorted }){
    return(
        <div className = "card">
          <h2>{title}</h2>
          <div className = "bars">
            {array.map((value,index ) =>(
              <div className = {
                sorted.includes(index)? "bar sorted" : comparing.includes(index)?"bar comparing":"bar"
              } key={index} style={{height: `${value}px`}}></div>
            ))}
          </div>
        </div>
    );
}

export default AlgorithmCard;