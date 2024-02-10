import './RecipeDetails.css';
import {useParams} from "react-router-dom";
import RecipeCard from "../../components/recipecards/RecipeCards.jsx";

function RecipeDetails() {
    const {label} = useParams();

    return (
        <div className='recipe-details-container'>
            <RecipeCard
                label={label}
            />
        </div>
    )

}

export default RecipeDetails;