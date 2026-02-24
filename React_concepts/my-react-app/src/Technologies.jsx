function Technologies() {
    
    const tech1="JAVA"
    const tech2="OOPS"
    const tech3="SQL"
    const tech4="Angular"
    const tech5=".net"


    

    return (
        <ul>
            <li><a href=''>React</a></li>
            <li><a href=''>{tech1} </a></li>
            <li><a href=''>{tech2}</a></li>
            <li><a href=''>{tech3.toLocaleLowerCase()}</a></li>
            <li><a href=''>{tech4.toLocaleLowerCase()}</a></li>
            <li><a href=''>{tech5.toLocaleUpperCase()}</a></li>

        </ul>
    );
}

export default Technologies