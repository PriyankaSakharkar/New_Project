const Sub = (props) => {

    return(

        <div>

            <p>This is Sub Component</p>
            <p>Addition = {parseInt(props.a) + parseInt(props.b)}</p>
            <p>multiplication = {parseInt(props.a) * parseInt(props.b)}</p>
            <p> subtraction = {parseInt(props.a) - parseInt(props.b)}</p>
            <p> division = {parseInt(props.a) / parseInt(props.b)}</p>
            
        
         </div>
    )
};

export default Sub;