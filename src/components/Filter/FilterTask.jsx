import {useState} from 'react';


const FilterTask = ({ render }) => {
    const [filterState, setFilterState] = useState('all');

    const handleChange = (event) => {
        setFilterState(event.target.value);
    };

    return render(handleChange, filterState);

};

export default FilterTask;
