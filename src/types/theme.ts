export interface Theme {
    backgroundColor: string,
    textColor: string,
}


export interface ThemeContextProps {
    theme: Theme,
    toggleTheme: () => void,
    loading: boolean;
}
