import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <p className="error">
        Error: {error.message} {error.status}
      </p>
    </div>
  );
};

export default Error;
