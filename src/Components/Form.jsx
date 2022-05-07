import React, { useState } from 'react'
import { List } from "./List"

export const Form = () => {

const [text,setText]= useState('')



    return (
        <div className="flex flex-col w-[400px] h-[400px] bg-base-200">
            <form className=''>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">ToDo List</span>
                    </label>
                    <label class="input-group w-full">
                        <input type="text" placeholder="Your todo..." class="input input-bordered" />
                        <span>Add</span>
                    </label>
                </div>
            </form>
            <div class="flex flex-col w-full">
                <div class="divider"></div>
            </div>
            <List />
        </div>
    )
}
