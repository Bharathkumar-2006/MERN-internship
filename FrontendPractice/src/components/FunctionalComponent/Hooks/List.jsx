import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
const List = ({ func }) => {
    var [numbers, setNumbers] = useState([]);

    useEffect(() => {
        setNumbers(func(5));
        console.log(numbers)

    }, [func])

    return (
        <div>
            <h3>This number list is as follows accoring to the number present in the input</h3>

            {numbers.map((number, index) => {
                return <h4 key={index}>{number}</h4>
            })}

        </div>
    )
}
List.propTypes = {
    func: PropTypes.func.isRequired,
}


export default List