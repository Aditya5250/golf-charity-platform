const matchScores = (userScores,drawNumbers)=>{
    let matchCount=0;

    const scoreValues = userScores.map(s=>s.value);

    for(let num of drawNumbers){
        if(scoreValues.includes(num)){
            matchCount++;
        }
    }

    return matchCount;
};

export default matchScores;