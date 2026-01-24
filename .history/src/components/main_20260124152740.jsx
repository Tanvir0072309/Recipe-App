export function MyMain() {
    const ingrediants = ["Mango", "Orange"]


    const myingrediants = ingrediants.map(ingrediant => (
        <li>{ingrediant}</li>
    ))

    
    fuction hande


    return (
        <>
            <ul>{myingrediants}</ul>
            <button>Submit</button>
        </>
    );
}