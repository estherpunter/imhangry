import './RecipeDetails.css';
import {useParams} from "react-router-dom";
import RecipeCards from "../../components/recipecards/RecipeCards.jsx";

function RecipeDetails() {
    const {label} = useParams();

    return (
        <div className='recipe-details-container'>
            <RecipeCards
                label={label}
            />
        </div>
    )
}

export default RecipeDetails;