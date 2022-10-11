const CustomInput = (label, value) =>{
   
        return(
   
   <div className="custom-input-container">
            <input type="text" className="custom-input" />

                {label ? (
                    <label className={
                        `${value.length > 0 ? "shrink" : ""}custom-imput-label`
                    }></label>
                ): null}

            </div>
        );
}

export default CustomInput;