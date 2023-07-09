import { Link, useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/products');
    };

  return (
    <>
      <h1>The Welcome Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>.
      </p>
      <p>
        <button onClick={handleNavigate}>Navigate</button>
      </p>
    </>
  );
};

export default Welcome;
