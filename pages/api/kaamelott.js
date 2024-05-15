async function kaamelott(req, res) {
    try {
       const response = await fetch('https://kaamelott.chaudie.re/api/random')
        const data = await response.json();
        return res.json(data)
    }
    catch {
        console.log('error')
    }
} 


export default kaamelott;