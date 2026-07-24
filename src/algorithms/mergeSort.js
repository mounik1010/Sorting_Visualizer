
import { sleep } from "../utilities/sleep";

export async function mergesort(
    array,
    setArray,
    setComparing,
    setSorted,
    speed
) {
    let arr = [...array];

    await msort(arr,0,arr.length-1,setArray,setComparing,speed);

    setSorted(Array.from({length:arr.length},(_,i)=>i));

}

async function msort(
    arr, low, high,setArray, setComparing,speed
){
    if(low>=high){
        return;
    }
    const mid = Math.floor(low + (high-low)/2);

    await msort(arr,low,mid,setArray,setComparing,speed);
    await msort(arr,mid+1,high,setArray,setComparing,speed);

    await merge(arr,low,mid,high,setArray,setComparing,speed);
}

async function merge(
    arr,low,mid,high,setArray,setComparing,speed
) {
    const left = arr.slice(low,mid+1);
    const right = arr.slice(mid+1,high+1);

    let i = 0;
    let j = 0;
    let k = low;

    while(i<left.length && j<right.length){
        setComparing([k]);
        await sleep(speed);

        if(left[i] <= right[j]){
            arr[k] = left[i];
            i++;
        }
        else{
            arr[k] = right[j];
            j++;
        }
        setArray([...arr])
        await sleep(speed);
        k++;
    }

    while(i<left.length){
        arr[k] = left[i];
        setComparing([k]);
        setArray([...arr]);
        await sleep(speed);
        i++;
        k++;
    }

    while(j<right.length){
        arr[k] = right[j];
        setComparing([k]);
        setArray([...arr]);
        await sleep(speed);
        j++;
        k++;
    }

    setComparing([]);
}