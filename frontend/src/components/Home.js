import { ReactTyped } from "react-typed";

export default function Home(){

    const customStyle = {
        fontFamily: "sans-serif", // Change 'YourDesiredFont' to the actual font name
        textTransform: 'uppercase',
        fontSize: "40px", // Adjust the font size as needed
        fontWeight: "bold", // Adjust the font weight as needed
        // Add any other font-related styles you want to customize
        color: 'white',
        fontWeight: 600,
      };


    return (
        <div className="image-container">
            <img style={{width: '100vw', height: '50vw',  filter: 'brightness(55%)'}} src="https://raw.githubusercontent.com/gist/AzdineElJattari/beaef920a209a60bab82a8a1d01e5d54/raw/88f20c9d749d756be63f22b09f3c4ac570bc5101/programming.gif" alt='gif_image'/>
            <div className="image-text">
            {/*<div className="text-left">*/}
                {/* <p>Оваа страница е посветена на споделување на актуелни информации,
                    ресурси и материјали поврзани за Факултетот за информатичи науки и компјутерско инженерство (ФИНКИ).
                    Тука ќе најдете бројни линкови и референци, вклучувајќи вести од светот на ИТ,
                    образовни материјали, студентски организации и совети за различни аспекти на програмирањето.
                    Оваа страница е дизајнирана за да ги обедини студентите од ФИНКИ,
                    поддржувајќи го непрекинатото учење и споделување на знаењето во оваа брзо развивачка област.
                     </p> */}
                      <h1 style={customStyle}>
        Страница за{" "}
        <ReactTyped
          strings={[" материјали!", "коментари!", "обединување!"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar="|"
          showCursor={true}
        />
      </h1>
            </div>
        </div>
    );

}