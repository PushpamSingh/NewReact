export const Button=(
    {
    children,
    type='button',
    bgcolor='bg-green-600',
    textColor='text-white',
    classname="",
    ...props
}
)=>{
    return (
        <button className={`px-4 py-2 rounded-lg ${bgcolor} ${textColor} ${classname}`}
        {...props}
        >
            {children}
        </button>
    )
}