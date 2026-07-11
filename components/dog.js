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
const dog = document.getElementById("dog");

let showingDog1 = true;
dog.textContent = dog1;
dog.addEventListener("click", () => {
    showingDog1 = !showingDog1;
    dog.textContent = showingDog1 ? dog1 : dog2;
});