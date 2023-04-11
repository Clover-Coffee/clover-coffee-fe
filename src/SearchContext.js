import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
	const [query, setQuery] = useState("");

	const value = {
		query,
		setQuery,
	};

	return (
		<SearchContext.Provider value={value}>{children}</SearchContext.Provider>
	);
};
