// TODO: Uncomment baris kode di bawah ini untuk meng-import gambar logo devcode yang berada di dalam folder assets
import devcodeLogo from "../../assets/devcode-logo.png";
import "./style.css";

export const HelloWorld = () => {
   return (
      <div className="hello">
         {/* Add the devcode logo image to the img element below */}
         <img data-cy="devcode-logo" src={devcodeLogo} alt="devcode logo" />
         <div data-cy="devcode-title">
            {/* Add an h1 element with the text "I'm ready for the next challenge!" */}
            <h1>I'm ready for the next challenge!</h1>
         </div>
      </div>
   );
};
