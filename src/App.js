import './App.css';

import People from './People';

import { useState } from 'react';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

const initialData = [
    {
        id: "1276",
        name: "Neil Campbell Rhodes",
        email: "rhodes+junkmail@hmc.edu",
        phone: "+1 (909) 555-1212"
    },
    {
        id: "787",
        name: "Barack Hussein Obama II",
        email: "ex-prez@whitehouse.gov",
        phone: "+1 (312) 555-1212"
    },
    {
        id: "889",
        name: "Jo Smith",
        email: "festival21@hotmail.com",
        phone: "+1 (123) 555-1212"
    }
];



function App() {
    const [data, setData] = useState(initialData);

    function handleDeletePerson(personId) {
        setData(data.filter(person => person.id !==personId))
    }

    function handleAddPerson() {
        setData([...data, {
            id: generateUniqueID(),
            name: "",
            email: "",
            phone: ""
        }])
    }

    function handlePersonFieldChanged(personId, field, value) {
        setData(data.map(
            person => person.id !==personId
                ? person
                : {...person, [field]: value}))
    }

    return <div>
        <People list={data}
                onDeletePerson={handleDeletePerson}
                onAddPerson={handleAddPerson}
                onPersonFieldChanged={handlePersonFieldChanged}
        /></div>;
}

export default App;
