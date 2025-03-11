import React from 'react'
import { useState } from 'react'

const List = (props) => {

    const [selected, setSelected] = useState('All');
    return (
        <div className="portfolio__list">
            {props.allNavList.map((item, index) => {
                return (
                    <button
                        className={selected === item ? 'portfolio__list-item text-cs portfolio__list-active' : ' portfolio__list-item text-cs'}
                        key={index}
                        onClick={() => {
                            setSelected(item);
                            props.filterItems(item);
                        }
                        }
                    >
                        {item}
                    </button>
                )
            }
            )}
        </div>

    )
}

export default List