const generateDrawNumbers=()=>{
    const numbers=new Set();
    while (numbers.size<5){
        const num=Math.floor(Math.random()*45)+1;
        numbers.add(num);
    }
    return Array.from(numbers);
};

export default generateDrawNumbers;