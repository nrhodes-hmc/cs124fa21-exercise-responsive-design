import Person from "./Person";
import './People.css'
import React, {useState} from 'react';

function People(props) {
    const [selectedId, setSelectedId] = useState(null);
    return (
        <div>
            <h1>People ({props.list.length})</h1>
            <table>
                <tr className={"people-header"}>
                    <th className={"name header"}>Name</th>
                    <th className={"email header"}>Email</th>
                    <th className={"phone header"}>Phone</th>
                </tr>
                {props.list.map(a => <Person
                    onRowClick={(id) =>
                        setSelectedId(id)}
                    onPersonFieldChanged={props.onPersonFieldChanged}
                    selected={a.id === selectedId}
                    key={a.id}
                    {...a} />)}
            </table>
        </div>)
        ;
}

export default People;