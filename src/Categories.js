/*言語のカテゴリー*/
import './index.css';
import React from 'react';

const Categories = ({categories}) => (
    <div className="Home_postCategories flex flex-wrap">
        {
            categories.map((category,index) => (
                <div className="Home_postCategory border border-solid border-blue-500 rounded text-blue-500 text-xs px-2 py-1 mr-2" key={index}>{category}</div>
            ))
        }
    </div>
)
export default Categories;