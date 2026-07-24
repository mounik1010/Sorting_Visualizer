
import { sleep } from "../utilities/sleep";

export async function insertionsort(array,
    setArray,
    setComparing,
    setSorted,
    speed){

        let arr = [...array]

        for(let i = 1;i<arr.length;i++){
            let key = arr[i];
            let j= i-1;

            while(j>=0 && arr[j]>key){
                setComparing([j,j+1]);
                await sleep(speed);
                arr[j+1] = arr[j];
                setArray([...arr]);
                await sleep(speed);
                j--;
            }
            setComparing([]);
            arr[j+1] = key;
            setArray([...arr]);

            setSorted(prev =>[...prev,i]);
            
        }
        setSorted(Array.from({length:arr.length},(_,i)=>i));

    }