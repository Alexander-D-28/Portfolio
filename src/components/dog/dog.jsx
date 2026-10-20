import {useState} from "react";

const dogs = [
`
  __      _
o'')}____//
\`_/      )
(_(_/-(_/
`,
String.raw`
 /^ ^\
/ 0 0 \
V\ Y /V
 / - \
 |    \
 || (__V
`,
String.raw`
     _     /)---(\    
     \\   (/ . . \)       
      \\__)-\(*)/        
      \_       (_        
      (___/-(____)
`,
];

export default function Dog() {
    const[currentImage, setCurrentImage] = useState(0);
    const nextImage = () => {
        setCurrentImage((prev) => (prev+1) % dogs.length);
    }

    return (
        <pre onClick={nextImage}>
            {dogs[currentImage]}
        </pre>
    );
}
