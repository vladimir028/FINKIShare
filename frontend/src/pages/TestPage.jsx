import { ReactTyped } from "react-typed";

export default function Test() {
 

  const customStyle = {
    fontFamily: "YourDesiredFont, sans-serif", // Change 'YourDesiredFont' to the actual font name
    fontSize: "16px", // Adjust the font size as needed
    fontWeight: "bold", // Adjust the font weight as needed
    // Add any other font-related styles you want to customize
    color: 'white'
  };
  return (
    <div>
      <h1 style={customStyle}>
        Страница за{" "}
        <ReactTyped
          strings={["споделување материјали!", "коментари!", "дружба!"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar="|"
          showCursor={true}
        />
      </h1>
    </div>
  );
}
