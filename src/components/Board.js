import Call from "./Call";

export default function Board(props) {

    return(
        <div id="board">
        {props.cellValues.map((value, idx) =>{
          const  isHighlight =
          props.winnerCombination && props.winnerCombination.indexOf(idx) >= 0;

         return(
           <Call 
           key={idx} 
           value={value} 
           isHighlight={isHighlight} 
           showCase={() =>props.cellClicked(idx)} />
         ) 
      })}
      </div>
    )
}