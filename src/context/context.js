import React, {createContext, useMemo, useState} from "react";

export const FontSizeContext = createContext(null);

const FontSizeContextProvider = ({children}) => {
    const [fs, setFs] = useState(0);
    const providerValue = useMemo(() => ({fs, setFs}), [fs, setFs])
    return <FontSizeContext.Provider value={providerValue}>
        {children}
    </FontSizeContext.Provider>
}

export default FontSizeContextProvider


