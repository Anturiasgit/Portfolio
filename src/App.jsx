import { LinkOutlined } from "@ant-design/icons";
import "./App.css";
import HeaderComp from "./components/HeaderComp";
import { Button, Divider } from "antd";
import { experiences, projects } from "./data/data";
import { AsideComp } from "./components/AsideComp";

function App() {
  return (
    <>
      <div className='main'>
        <HeaderComp />

        <div className="body-container">
          <div className="left">
            <section className="projects">
              <h2>Mes récents projets</h2>
              <article>
                <img className="last-project-img" src="last-project.jpg" alt="Image pour schématiser le dernier projet" />
                <div className="project-info">
                  <h3>Création de mon Portfolio en ligne avec React</h3>
                  <p>Ce projet marque une étape importante dans mon apprentissage du développement. Pour découvrir React et réaliser mon premier projet avec ce framework, je me suis inspirée d'un tutoriel qui expliquait comment créer un Portfolio en ligne. Étant à la fin de ma formation de développeur full stack, il était temps pour moi de mettre en pratique tout ce que j'ai appris. <br></br><br></br>

                    Quoi de mieux que de coder mon propre Portfolio pour présenter mes compétences et mes projets ? Après avoir suivi le tutoriel, j'ai décidé d'aller plus loin en incorporant une partie back-end à ce portfolio, afin d'y intégrer des fonctionnalités dynamiques. Ce projet est pour moi l'occasion de combiner front-end et back-end, tout en personnalisant l'interface selon mes besoins.</p>
                  <Button type="link" className="btn-link" icon={<LinkOutlined />}>
                    <a href="https://github.com/Anturiasgit/Portfolio" target="_blank">Voir le projet sur mon GitHub</a>
                  </Button>
                </div>
              </article>
              <Divider style={{ backgroundColor: "#ffffff" }}></Divider>
              {
                projects.map((item) => {
                  return (<article className="article-item" key={item.id}>
                    <div className="left">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="right">
                      <h3>{item.title}</h3>
                      <p>
                        {item.description}
                      </p>
                      <Button type="link" className="btn-link" icon={<LinkOutlined />}>
                        <a href={item.link} target="_blank">Voir le projet sur mon GitHub</a>
                      </Button>
                    </div>
                  </article>);
                })
              }
            </section>

            <section className="experiences">
              <h2>Expériences professionnelles</h2>
              {
                experiences.map((item) => {
                  return (
                    <article key={item.id}>
                      <div className="job">
                        <h3>{item.job}</h3>
                        <span>{item.employer}</span>
                      </div>
                      <p>
                        {item.description}
                      </p>
                    </article>
                  );
                })
              }
            </section>
          </div>
          <AsideComp />
        </div>

        <footer>
          <p>
            Conçu avec la libraire ReactJS, par Anturia Hassani Mzé, All Rights Reserved &copy; 2024
          </p>
        </footer>

      </div>
    </>
  );
}

export default App;
