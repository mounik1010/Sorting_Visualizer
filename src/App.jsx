import {useState,useEffect} from "react";
import './App.css'; 
import AlgorithmCard from './components/algorithmcard';
import { bubblesort } from "./algorithms/bubbleSort";
import { selectionsort } from "./algorithms/selectionSort";
import { insertionsort } from "./algorithms/insertionSort";
import { mergesort } from "./algorithms/mergeSort";

export function App() {

  const[bubbleArray,setBubbleArray]  = useState([]);
  const[selectionArray,setSelectionArray]  = useState([]);
  const[insertionArray,setInsertionArray]  = useState([]);
  const[mergeArray,setMergeArray]  = useState([]);
  const[originalArray,setOriginalArray] = useState([]);

  const[bubblecomparing,setBubbleComparing] =useState([]);
  const[bubblesorted,setBubbleSorted]= useState([]);
  const[insertioncomparing,setInsertionComparing] =useState([]);
  const[insertionsorted,setInsertionSorted]= useState([]);
  const[selectioncomparing,setSelectionComparing] =useState([]);
  const[selectionsorted,setSelectionSorted]= useState([]);
  const[mergecomparing,setMergeComparing] =useState([]);
  const[mergesorted,setMergeSorted]= useState([]);


  const[speed,setSpeed] = useState(10);
  const[isSorted,setIsSorted] = useState(false);

  useEffect(() => {generateArray();},[]);

  function generateArray(){

    setBubbleComparing([]);
    setBubbleSorted([]);

    setSelectionComparing([]);
    setSelectionSorted([]);

    setInsertionComparing([]);
    setInsertionSorted([]);

    setMergeComparing([]);
    setMergeSorted([]);

    const newArray = [];
    const size = Math.floor(Math.random()*15)+ 30;

    for(let i = 0;i<size;i++){
      newArray.push(Math.floor(Math.random()*200)+20);
    }
    setOriginalArray([...newArray]);
    setBubbleArray([...newArray]);
    setSelectionArray([...newArray]);
    setInsertionArray([...newArray]);
    setMergeArray([...newArray]);
  }                         

  

  async function startSorting(){
    setIsSorted(true);
    await Promise.all([
      bubblesort(bubbleArray
        ,setBubbleArray,
        setBubbleComparing,
        setBubbleSorted,
        speed
      ),

      insertionsort(insertionArray
        ,setInsertionArray,
        setInsertionComparing,
        setInsertionSorted,
        speed
      ),

      selectionsort(selectionArray
        ,setSelectionArray,
        setSelectionComparing,
        setSelectionSorted,
        speed
      ),

      mergesort(mergeArray
        ,setMergeArray,
        setMergeComparing,
        setMergeSorted,
        speed
      ),
    
    ]); 

    setIsSorted(false);
  }

  function resetArray(){

    setBubbleComparing([]);
    setBubbleSorted([]);

    setSelectionComparing([]);
    setSelectionSorted([]);

    setInsertionComparing([]);
    setInsertionSorted([]);

    setMergeComparing([]);
    setMergeSorted([]);

    setBubbleArray([...originalArray]);
    setInsertionArray([...originalArray]);
    setSelectionArray([...originalArray]);
    setMergeArray([...originalArray]);
  }

  return (

    <div className="app">
      <div className = "title">
        <h1>Sorting Visualizer</h1>
      </div>
      
      <div className = "grid">
        <AlgorithmCard title = "Bubble Sort" array={bubbleArray} comparing = {bubblecomparing} sorted = {bubblesorted}/>
        <AlgorithmCard title = "Selection Sort" array={selectionArray} comparing = {selectioncomparing} sorted = {selectionsorted}/>
        <AlgorithmCard title = "Insertion Sort" array={insertionArray} comparing = {insertioncomparing} sorted = {insertionsorted}/>
        <AlgorithmCard title = "Merge Sort" array={mergeArray} comparing = {mergecomparing} sorted = {mergesorted}/>
      </div>

      <div className = "control">
        <button onClick={generateArray} disabled = {isSorted}>Generate Array</button>
        <button onClick={startSorting} disabled = {isSorted}>Sort</button>
        <button onClick={resetArray} disabled = {isSorted}>Reset</button>
      </div>
      
    </div>


  )
}

export default App
