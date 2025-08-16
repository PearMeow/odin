import { Link } from "react-router-dom";

const SelectProfile = () => {
    return (
        <>
            <h1>Hey there! Pick a profile!</h1>
            <ul>
                <li>
                    <Link to="/profile/popeye">Popeye</Link>
                </li>
                <li>
                    <Link to="/profile/spinach">Spinach</Link>
                </li>
            </ul>
        </>
    );
};

export default SelectProfile;
