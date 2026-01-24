export function MyMain() {
    const ingrediants = ["Mango", "Orange"]


    const myingrediants = ingrediants.map(ingrediant => (
        <li>{ingrediant}</li>
    ))

    



    return (
        <>
            <ul>{myingrediants}</ul>
            <button>Submit</button>
        </>
    );
}