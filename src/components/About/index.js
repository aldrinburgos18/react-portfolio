import React from "react";

function About() {
  return (
    <section className="my-5" id="about">
      <div className="hero">
        <div className="about-img"></div>
        <div className="about-text">
          <div className="name">
            <h1 id="about" className="about-name">
              aldrin burgos
            </h1>
          </div>
          <p>an aspiring web developer from houston, tx</p>
        </div>
      </div>
      <div className="about-content">
        <h1>About me:</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          enim pariatur quo eius ullam cupiditate, iusto ab velit veritatis
          vitae soluta nulla omnis. Officiis fugiat voluptatum numquam quaerat
          tempore sapiente! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Delectus sint quisquam maiores iste, neque deserunt dolore,
          voluptatibus veritatis ullam, iure modi harum atque? Illo pariatur
          sint distinctio dolores eum consequuntur.
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          enim pariatur quo eius ullam cupiditate, iusto ab velit veritatis
          vitae soluta nulla omnis. Officiis fugiat voluptatum numquam quaerat
          tempore sapiente! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Delectus sint quisquam maiores iste, neque deserunt dolore,
          voluptatibus veritatis ullam, iure modi harum atque? Illo pariatur
          sint distinctio dolores eum consequuntur.
        </p>
        <br />
        <br />
        <div className="social">
          <h3>Follow me on my social media accounts:</h3>
          <hr width="20%" />
          <div class="wrapper format-content">
            <ul>
              <li class="facebook">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/aldrin.burgos/"
                >
                  <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
                </a>
              </li>
              <li class="twitter">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/aldrinburgos18"
                >
                  <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
                </a>
              </li>
              <li class="instagram">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/aldrinhernandez_/"
                >
                  <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                </a>
              </li>
              <li class="youtube">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/channel/UCB5XfLVUVm7iguBx8iE7rmg"
                >
                  <i class="fa fa-youtube fa-2x" aria-hidden="true"></i>
                </a>
              </li>
              <li class="spotify">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://open.spotify.com/user/burgos.aldrin?si=3d575868dfff42b3"
                >
                  <i class="fa fa-spotify fa-2x" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
