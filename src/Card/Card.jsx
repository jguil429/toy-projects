import styles from './Card.module.css';
import PropTypes from 'prop-types';
import placeHolderImg from '../assets/placeholderimg.jpg';
import Button from '../Button/Button'

function Card(props) {

    const toyTitle = props.toyTitle;
    const toyDescription = props.toyDescription;

    return (
        <div className={ styles.card }>
            <img className={ styles.cardimg } src={ placeHolderImg } alt="placeholder image"></img>
            <h2 className={ styles.cardtitle }>{ toyTitle }</h2>
            <p className={ styles.cardtext }>{ toyDescription }</p>
            <Button buttonText='View Toy'/>
        </div>
    );  
}  

Card.propTypes = {
    toyTitle: PropTypes.string,
    toyDescription: PropTypes.string,
}

export default Card