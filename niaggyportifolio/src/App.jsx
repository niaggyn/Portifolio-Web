import { createRef, useEffect, useRef, useState } from "react";
import Abilities from "./layout/Abilities";
import Contact from "./layout/Contact";
import Footer from "./layout/Footer";
import Gallery from "./layout/Gallery";
import Home from "./layout/Home";
import Projects from "./layout/Projects";

import "./styles/components/app.sass";
import { Component } from "react";
import { Link } from "react-scroll";
import Header from "./components/Header";
import NavBarDesktop from "./components/NavBarDesktop";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      divSizes: [],
    };
    //this.firstPage = createRef();

    this.arrayListHeights = [];
    for (let i = 0; i < 5; i++) {
      this.arrayListHeights.push(createRef());
    }

    /* window.addEventListener("load", () => {
      this.getDivPages();
    }); */
    //this.scrollPage2 = this.scrollPage2.bind(this);
  }

  /* handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  }; */

  componentWillUnmount() {
    this.scrollToggle();
  }

  componentDidMount() {}

  clickScrollPage = () => {
    this.setState((prevState) => {
      const activeScroll = document.getElementById("scrolled");
      scrollTo({ left: 0, top: 2000, behavior: "smooth" });
    });
  };

  scrollPage2 = () => {
    let scrollStart = document.getElementById("scrollStart");
    let scrollEnd = document.getElementById("scrollEnd");
    let tamanhoScroll = scrollStart.offsetHeight + 1;
    window.addEventListener("scroll", () => {
      if (scrollStart.offsetHeight < tamanhoScroll) {
        scrollEnd.scrollIntoView({ behavior: "smooth" });
      } else if (tamanhoScroll < scrollEnd.offsetHeight) {
        console.log("asdasd");
        scrollStart.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  getDivPages() {
    var firstPageDim = this.firstPage.current;
    let sizes = [];
    sizes.push(firstPageDim.getBoundingClientRect().height);
    this.setState({ divSizes: sizes });
    console.log(sizes);
  }

  scrollToggle() {
    const pages = document.querySelectorAll(".page");
    let currentPageIndex = 0;
    const offset = 120;
    function gotoPage(index) {
      if (index >= 0 && index < pages.length && pages.style.width < 520) {
        pages[index].scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        currentPageIndex = index;
      }
      if (index >= 0 && index < pages.length && pages.style.width > 520) {
        /* pages[index].scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        window.scrollBy(0, offset);
        currentPageIndex = index; */
      }
    }
    window.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        gotoPage(currentPageIndex + 1);
      } else if (event.deltaY < 0) {
        gotoPage(currentPageIndex - 1);
      }
    });
  }

  render() {
    return (
      <>
        <header id="header_desktop">
          <Header />
        </header>
        <aside id="navbar_desktop">
          <NavBarDesktop />
        </aside>
        <section id="portifolio">
          <Link id="page1" className="page">
            <div ref={this.arrayListHeights[0]}>
              <Home />
            </div>
          </Link>
          <Link id="page2" className="page">
            <div ref={this.arrayListHeights[1]}>
              <Projects />
            </div>
          </Link>
          <Link id="page3" className="page">
            <div ref={this.arrayListHeights[2]}>
              <Abilities />
            </div>
          </Link>
          <Link id="page4" className="page">
            <div ref={this.arrayListHeights[3]}>
              <Gallery />
            </div>
          </Link>
          <Link id="page5" className="page">
            <div ref={this.arrayListHeights[3]}>
              <Contact />
            </div>
          </Link>
          <div id="page6" className="page" ref={this.arrayListHeights[4]}>
            <Footer />
          </div>
        </section>
      </>
    );
  }
}

export default App;

/* const log = document.getElementById("log");

        // Lock button: Lock the screen to the other orientation (rotated by 90 degrees)
        const rotate_btn = document.querySelector("#lock_button");
        rotate_btn.addEventListener("click", () => {
        log.textContent += `Lock pressed \n`;

        const oppositeOrientation = screen.orientation.type.startsWith("portrait")
        ? "landscape"
        : "portrait";
        screen.orientation
        .lock(oppositeOrientation)
        .then(() => {
        log.textContent = `Locked to ${oppositeOrientation}\n`;
        })
        .catch((error) => {
        log.textContent += `${error}\n`;
        });
        });

        // Unlock button: Unlock the screen orientation (if locked)
        const unlock_btn = document.querySelector("#unlock_button");
        unlock_btn.addEventListener("click", () => {
        log.textContent += "Unlock pressed \n";
        screen.orientation.unlock();
        });

        // Full screen button: Set the example to fullscreen.
        const fullscreen_btn = document.querySelector("#fullscreen_button");
        fullscreen_btn.addEventListener("click", () => {
        log.textContent += "Fullscreen pressed \n";
        const container = document.querySelector("#example_container");
        container.requestFullscreen().catch((error) => {
        log.textContent += `${error}\n`;
        });
        }); */
