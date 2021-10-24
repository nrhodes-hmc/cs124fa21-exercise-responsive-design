import './Person.css';

import PersonField from './PersonField.js'

function Person(props) {
    const classes = ["person "];
    if (props.selected) {
        classes.push("selected");
    }

    return <tr className={classes.join(" ")}
               key={props.id}
               id={props.id}>
        <PersonField label="Name:" field="name" {...props}/>
        <PersonField label="email:" field="email" {...props}/>
        <PersonField label="phone:" field="phone" {...props}/>
    </tr>
}

export default Person;
