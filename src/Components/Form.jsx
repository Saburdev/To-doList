import React, { useState } from 'react'
import { List } from "./List"

export const Form = () => {

const [text,setText]= useState('')


const submitHandler = (event) => {
event.preventDefault()
if
}

    return (
        <div className="flex flex-col  items-center w-[600px] h-[400px] bg-base-200 rounded-xl">
            <form onSubmit={submitHandler} className=' w-4/5 mx-auto'>
                <div className="form-control" >
                    <label className="label flex">
                        <span className="label-text">ToDo List</span>
                    </label>
                    <label className="input-group">
                        <input value={text} type="text" placeholder="Your todo..." className="input input-bordered w-full" />
                        <span>Add</span>
                    </label>
                </div>
            </form>
            <div className="flex flex-col w-full">
                <div className="divider"></div>
            </div>
            <List />
        </div>
    )
}
