
import {sleep} from '../utilities/sleep'
export async function bubblesort(array,
  setArray,
  setComparing,
  setSorted,
  speed){

    let arr = [...array];

    for(let i = 0;i<arr.length-1;i++){
      for(let j = 0;j<arr.length-i-1;j++){
        setComparing([j,j+1]);
        await sleep(speed);
        if(arr[j]>arr[j+1]){
          [arr[j],arr[j+1]] = [arr[j+1],arr[j]];

          setArray([...arr]);

        }
        setComparing([]);
        await sleep(speed);
          
      }
      setSorted(prev =>[...prev,arr.length - i -1]);
    }
    setSorted(Array.from({length:arr.length},(_,i)=>i));

  }