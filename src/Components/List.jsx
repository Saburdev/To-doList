import React from 'react'

export const List = () => {
    return (
        <ul class="menu bg-base-200 w-4/5 rounded-xl">
            <li className='border-2 border-gray-700 w-full'>
                <input type="checkbox" checked="checked" class="checkbox checkbox-xs" />
                <a>Item 1</a>
                <button class="btn btn-outline btn-error">Remove</button>
            </li>
        </ul>
    )
}
