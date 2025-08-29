function ListFavLanguages(){       // primary comp
    return(
        <div>
            <h2>My favorite programming languages:</h2>
            <ol>
                <li>C++ </li>
                <li>JavaScript</li>
                <li>JSX</li>
            </ol>
            <Comp1LFL/>
            <Comp2LFL />
        </div>
    );
}

// LFL : ListFavLanguages

export function Comp1LFL() { // secondary comp
    return (
        <p>Im still learning them but i really like them</p>
    );
}

export function Comp2LFL() {
    return (
        <p>---end of this primary component</p>
    )
}

export default ListFavLanguages;