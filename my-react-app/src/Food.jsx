function Food(){
    const f1="Pizza";
    const f2="Burger";
    const f3="Coke";

    return(
        <ul>
            <li>Apple</li>
            <li>{f1}</li>
            
            <li>{f2.toUpperCase()}</li>
        </ul>
    );
}

export default Food;