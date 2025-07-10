"use client";

import {useState} from "react";

export default function ListRenderer()
{
    
    const [list, setList] = useState([]);
    var listSize = list.length;
    const [item, setItem] = useState("Item " + JSON.stringify(listSize));

    function addList()
    {
        listSize = list.length;
        setList(prev => [...prev, item.trim()]);
        setItem("Item " + JSON.stringify(listSize));
    }

    return (
        <div>
            
            {/*<button className="" onClick={addList}>
                Add List ({listSize})
            </button>*/}
            <ul className="mt-4 space-y-1">
                {list.map((it, idx) => (
                <li key={idx} className="border-b pb-1">
                {it}
                </li>
            ))}
            </ul>
        </div>
    );
}