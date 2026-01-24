export function MyMain() {
    const ingrediants = ["Mango", "Orange"]


    const myingrediants = ingrediants.map(ingrediant => (
        <li>{ingrediant}</li>
    ))

    
    function handleclick(){
        <h1>hello</h1>
    }


    return (
        <>
            <ul>{myingrediants}</ul>
            <button onClick={handleclick}>Submit</button>
        </>
    );
}