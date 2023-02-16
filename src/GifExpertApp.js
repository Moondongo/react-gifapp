import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([]);

    return (
        <>
            <header>
                <h2 className='title'>GIF SEARCH</h2>
                <AddCategory setCategories={setCategories}/>
            </header>
            <ol>
                {
                    categories.map((category) => 
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    )
}
