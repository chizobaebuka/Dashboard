import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div>
            <p>The Dashboard</p>
            <Link to="/products" className='underline'>Go to Products</Link>
        </div>
    )
}
