import { useTheme } from '../hooks/useTheme'
import modeIcon from '../assets/mode_toggle.svg'

// Styles
import './ThemeSelector.css'

const themeColors = ['#6A2C70', '#B83B5E','#F08A5D']

function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme()
  
  const toggleMode = () => {
    changeMode(mode === 'light' ?'dark': 'light' )
  }

  console.log(mode)
  


  return (
    <div className='theme-selector'>
      <div className="mode-toggle">
        <img
          onClick={toggleMode}
          src={modeIcon}
          alt="toggle icon"
          style={{filter: mode === 'dark' ? 'invert(100%)': 'invert(20%)' }}

        />
      </div>
      <div className="theme-buttons">
        {themeColors.map(color => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{background: color}}
          />
        ))}
      </div>
    </div>
  )
}
export default ThemeSelector