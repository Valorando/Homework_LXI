import './Button.css'
 
export default function Button() {
 

  const handleClick = () => {alert('You clicked the button')};
 
  return (
    <button
      className="button" onClick={handleClick}>Click me
    </button>
  )
}