import React, { useId } from "react";

export const Select=React.forwardRef(({
    options,
    label,
    name="",
    classname="",
    ...props
},ref)=>{
    const id=useId();
    return (
        <div className="w-full">
            {
                label && <label htmlFor={id}></label>
            }
            <select name={name} id={id}
            ref={ref}
            {...props}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${classname}`}
            >
                {
                    options?.map((option)=>(
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))
                }
            </select>
        </div>
    )
})