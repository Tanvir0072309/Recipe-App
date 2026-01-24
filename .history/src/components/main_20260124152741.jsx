export function MyMain() {
    const ingrediants = ["Mango", "Orange"]


    const myingrediants = ingrediants.map(ingrediant => (
        <li>{ingrediant}</li>
    ))

    
    fuction handel


    return (
        <>
            <ul>{myingrediants}</ul>
            <button>Submit</button>
        </>
    );
}