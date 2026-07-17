import {useState} from "react";

const dog1 = `
  __      _
o'')}____//
\`_/      )
(_(_/-(_/
`;
const dog2 = String.raw`
 /^ ^\
/ 0 0 \
V\ Y /V
 / - \
 |    \
 || (__V
`;

export default function Dog() {
    const [showingDog1, setShowingDog1] = useState(true);

    return (
        <pre onClick={() => setShowingDog1(!showingDog1)}>
            {showingDog1 ? dog1 : dog2}
        </pre>
    );
}