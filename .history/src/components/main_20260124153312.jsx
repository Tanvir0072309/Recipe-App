export function MyMain() {
    const ingrediants = ["Mango", "Orange"]


    const myingrediants = ingrediants.map(ingrediant => (
        <li>{ingrediant}</li>
    ))

    
    function handleclick(event) {
        return(
        <h1>hello</h1>)
    }


    return (
        <>
            <form name="myform">
            <ul>{myingrediants}</ul>
            <button onClick={handleclick}>Submit</button>
            </form>
        </>
    );
}