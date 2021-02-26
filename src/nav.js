import React, { useEffect } from 'react';

const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  let navbarClasses=["nav"];

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })

  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <header className={navbarClasses.join(" ")}>
      <div className="nav-logo">
        <h1>Double Sessions</h1>
      </div>
      <nav className="navigation">
      </nav>
    </header>
  )
}

export default Nav;
