import picture from '../images/picture.jpg'

function Picture( ) { 
  return (
    <div className="pictures__block">
      <img className="pictures__image" src={ picture } alt="Лого" />
    </div>
 
  )
}

export default Picture;