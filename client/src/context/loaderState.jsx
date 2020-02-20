import React, { useContext, useState } from 'react';

const LoaderContext = React.createContext();

export const LoaderStateProvider = (props) => {
	const [ loading, setLoading ] = useState(true);
	return <LoaderContext.Provider value={[ loading, setLoading ]}>{props.children}</LoaderContext.Provider>;
};

export const useStateValue = () => useContext(LoaderContext);
