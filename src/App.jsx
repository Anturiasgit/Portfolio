import { LikeOutlined, LinkOutlined } from "@ant-design/icons";
import "./App.css";
import HeaderComp from "./components/HeaderComp";
import { Button, Divider } from "antd";
import { experience, projects } from "./data/data";
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
                <img className="featured-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVTU89MIWSq3LP_chJmHwSTWGLHolHRbkPXw&s" alt="slug" />
                <div className="project-info">
                  <h3>Site web de gestion de médias sociaux</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nobis deleniti eligendi eum ex ipsam, facere odio qui autem quam dolores placeat omnis possimus nostrum minus! Quisquam obcaecati placeat corporis!
                    Tempora exercitationem voluptate temporibus, expedita quibusdam facere cum eum, fugit odit repudiandae harum minus beatae asperiores. Iure mollitia iste suscipit, necessitatibus nesciunt nam quidem voluptatem molestiae ipsum similique, laboriosam delectus!
                    Saepe ipsa laudantium debitis sed architecto ducimus. Cum cupiditate quam laborum nobis, dolores incidunt rem aliquid in sapiente earum similique quia consequatur tempore nihil, fugit dolore harum error eligendi modi.</p>
                  <div className="btn-link">
                    <Button className="btn" icon={<LikeOutlined />}>
                      Soutenir mon projet
                    </Button>
                  </div>
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
                      <Button type="link" icon={<LinkOutlined />}>
                        En savoir plus
                      </Button>
                    </div>
                  </article>);
                })
              }
            </section>

            <section className="experiences">
              <h2>Expériences professionnelles</h2>
              {
                experience.map((item) => {
                  return (
                    <article key={item.id}>
                      <h3>{item.title}</h3>
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
