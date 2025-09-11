import { useState } from 'react';

const useToggle = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    function toggleValue(newValue) {
        if (typeof newValue === 'boolean') {
            setValue(newValue);
        } else {
            setValue(prev => !prev);
        }
    }

    return [value, toggleValue];
}

export default useToggle;
