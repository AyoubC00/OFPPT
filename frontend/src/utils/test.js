const collection = [1,2,3,4,5,6,7,8,9,10];

collection.reduce((acc, cur, index) => {
        if (index === 0 || index % 3 === 0)
        {
            return [...acc, [cur]]
        }      
        else
        {
            acc[index - acc[acc.length-1].length - acc.length].push(cur)
            return [...acc]
        }
    }, [])

console.log(collection)