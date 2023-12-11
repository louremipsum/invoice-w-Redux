import { Link, useRouteError } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <NavigationBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="./nothingleft.png"
          alt="Nothing left"
          width="250px"
          height="250px"
          style={{ marginTop: "2rem" }}
        />
        <h1>Oops!</h1>
        <p className="text-body-secondary">
          Sorry, an unexpected error has occurred.
        </p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
}
