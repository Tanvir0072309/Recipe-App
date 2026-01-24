export function MyMain() {
    const ingrediants = ["Mango", "Orange"]


    const myingrediants = ingrediants.map(ingrediant => (
        <li>{ingrediant}</li>
    ))

    
    function handleclick() {
        return(
        <h1>hello</h1>)
    }


    return (
        <>
            <fir
            <ul>{myingrediants}</ul>
            <button onClick={handleclick}>Submit</button>
        </>
    );
}