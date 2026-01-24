export function MyMain() {
    const ingrediants = ["Mango", "Orange"]


    const myingrediants = ingrediants.map(ingrediant => (
        <li>{ingrediant}</li>
    ))

    
    fuction handleSubmit(){
        
    }


    return (
        <>
            <ul>{myingrediants}</ul>
            <button onClick={ha}>Submit</button>
        </>
    );
}