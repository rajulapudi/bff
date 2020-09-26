import { useAmp } from "next/amp";

export const config = { amp: "hybrid" };

function About(props) {
  const isAmp = useAmp();

  return (
    <div>
      <h3>My AMP About Page!</h3>
      {isAmp ? (
        <amp-img
          width="300"
          height="300"
          src="https://static.toiimg.com/thumb/72975551.cms"
          alt="a cool image"
        />
      ) : (
        <img
          width="300"
          height="300"
          src="https://static.toiimg.com/thumb/72975551.cms"
          alt="a cool image"
        />
      )}
    </div>
  );
}

export default About;
