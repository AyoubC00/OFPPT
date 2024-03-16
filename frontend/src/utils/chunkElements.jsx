const chunkElements = (collection) =>
{
    return collection.reduce((acc, cur, index) => {
        if (index === 0 || index % 2 === 0)
        {
            return [...acc, [cur]]
        }      
        else
        {
            acc[index - acc.length].push(cur)
            return [...acc]
        }
    }, [])
}

export default chunkElements