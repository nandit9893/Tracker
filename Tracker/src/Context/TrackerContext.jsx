import { createContext } from "react";

export const TrackerContext = createContext();
const TrackerContextpProvider = ({children}) => {



    const contextValues = {

    };

    return (
        <TrackerContext.Provider value={contextValues}>{children}</TrackerContext.Provider>
    );

};

export default TrackerContextpProvider;