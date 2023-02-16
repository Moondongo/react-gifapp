import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories((category) => {
            if(inputValue.length > 0 && !category.includes(inputValue)){
                return [inputValue, ...category]
            }else{
                console.warn('Categoria Vacia o Repetida');
                return [...category]
            }
        })
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit} className='search'>
            <input 
                placeholder='Ingrese una Categoria'
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}