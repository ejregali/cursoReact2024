import {userState} from 'react';

const FilterTask = ({render}) =>{
    const [filterState, setFilterState] = userState('all');

    const handleChange = (event) =>{
        setFilterState(event.target.value);
    };

    return render(handleChange, filterState);

};

export default FilterTask;