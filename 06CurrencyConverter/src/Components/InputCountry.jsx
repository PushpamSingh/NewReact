export const InputCountry=({
    label,
    country,
    amount,
    onChangeAmount,
    onCoutryChange,
    isDisabled=false,
    initialCountry
})=>{
    
    return (
        <>
            <div className="px-4 py-9 flex justify-between items-center bg-white rounded-xl">
                <div className="flex flex-col gap-4">
                    <label htmlFor={`${label}`}>{label}</label>
                    <input 
                    id={`${label}`}
                    type="number"
                    value={amount}
                    onChange={onChangeAmount?(e)=>onChangeAmount(e.target.value):0}
                    disabled={isDisabled}
                    className="outline-none"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="country">Country Type</label>
                    <select name={`${label}`} id="country" onChange={onCoutryChange?(e)=>onCoutryChange(e.target.value):initialCountry}>
                        {
                            country.map((curr)=>{
                                return <option key={curr} value={curr} selected={curr===initialCountry}>{curr}</option>
                                
                            })
                        }
                    </select>

                </div>
            </div>
        </>
    )
}