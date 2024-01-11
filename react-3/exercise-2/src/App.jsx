import React, { useState } from "react";

function App() {
  const [name, setname] = useState("Your Name Here");
  const [bio , setbio] = useState("Short Bio");

  return (
    <div id="app">
      <Picture />
      <Textbox name={name} bio={bio} setname={setname} setbio={setbio} />
      <SetDetail name={name} bio={bio} />
      <SocialLink />
    </div>
  );
}

const Picture = () => {
  return (
    <div>
      <img
        src="https://plus.unsplash.com/premium_photo-1667857391859-de8d295ca2db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
        alt="Picture"
      />
    </div>
  );
};

const Textbox = ({setname , setbio}) => {
    return (
      <div>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Short Bio"
          onChange={(e) => setbio(e.target.value)}
        />
      </div>
    );
  };
  

const SetDetail = ({name , bio}) => {
    return (
        <div>
        <div>{name}</div>
        <div>{bio}</div>
        </div>
    )
}

const SocialLink =() => {
    return (
<div>
    <a href="https://www.facebook.com">Facebook</a>
    <a href="https://www.twitter.com">Twitter</a>
</div>
    )
}

export default App;
