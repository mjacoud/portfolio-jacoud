export type formProps = {
  name: string
  email: string
  message: string
}

export type themeProps = {
  theme: string
  hue: string
  mode: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
  setHue: React.Dispatch<React.SetStateAction<string>>
  setMode: React.Dispatch<React.SetStateAction<string>>
  currentLanguage: string
  changeLanguage: any
  setCurrentLanguage: React.Dispatch<React.SetStateAction<string>>
}
