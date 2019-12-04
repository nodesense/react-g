import React, {useEffect} from 'react';

// functional component
// create and return the virtula dom whenever the Footer function called
export default function Footer(props) {
    console.log('Footer func render');
    // componentDidMount, componentDidUpdate, componentwillUmount
    useEffect(() => {
        console.log('Footer effect')
    })

    return (
        <div>
            <hr />
            <p>Copyrights, {props.title}</p>
        </div>
    )
}

Footer.defaultProps = {
    title: "Reactapp"
}