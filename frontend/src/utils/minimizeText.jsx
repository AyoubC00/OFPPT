const minimizeText = (text, wordCount, charCount) =>
{
    let words = text.trim().split(/\s/);
    let _text = text.trim().split(/\s/).slice(0, wordCount);
    let _charCount = _text.reduce((acc, curr) => acc + curr.length, 0);
    if (_charCount > charCount)
    {
        return minimizeText(_text.join(' '), wordCount - 1)
    }
    return `${ _text.join(' ') }${ words.length <= wordCount ? '' : '...'}`
}

export default minimizeText