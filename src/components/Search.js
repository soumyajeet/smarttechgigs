import React, {useState} from 'react'
import {searchProduct} from '../services/services';

export default function Search() {
    const [search, setSearch] = useState([]);

    const handleChange = (event) => {
        const {value} = event.target;
        searchProduct(value)
        .then(res=>{
            if(res) {
                console.log(res.data);
                setSearch(res.data);
                console.log(search);
            } else {
                setSearch('');
            }
            
        })
        .catch(err=>console.log(err))
        console.log("Change")
    }

    return (
        <>
            <input type={'text'} name={'search'} placeholder={'Search here'} onChange={handleChange} className="search__input" />
            {/* {search?.length > 0 && 
                <span className={'autocomplete'}>
                    {search?.map((el, i)=>{
                        return(
                            <div key={i} className={'autocompleteItems'}>
                                <span>{el.title}</span>
                            </div>
                        ) 
                    })}
                    </span>
            } */}
        </>
    )
}
