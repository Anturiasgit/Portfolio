import { EnvironmentOutlined, LikeOutlined, LinkOutlined, MailOutlined } from "@ant-design/icons";
import "./App.css";
import HeaderComp from "./components/HeaderComp";
import { Button, Divider } from "antd";
import { educations, experience, projects } from "./data/data";

function App() {
  return (
    <>
      <div className='main'>

        <HeaderComp />

        <div className="body-container">
          <div className="left">
            <section>
              <article>
                <h2>A propos de moi</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem animi nulla tenetur, dolor error commodi veniam rerum accusamus reprehenderit cupiditate dicta quos cumque magnam quasi non ducimus. Optio, unde vero.
                  Iure delectus et tenetur assumenda eligendi, nobis doloremque voluptas dignissimos officiis qui consequuntur labore ab ipsum ea molestias obcaecati praesentium est pariatur, laborum ad. In sit amet et culpa aperiam. </p>
              </article>
            </section>

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

          <aside>
            <div className="contacts section">
              <div className="contact-item">
                <EnvironmentOutlined />
                <span>Villeurbanne</span>
              </div>
              <div className="contact-item">
                <MailOutlined />
                <span>
                  <a href="mailto:anturia.job@gmail.com">anturia.job@gmail.com</a>
                </span>
              </div>
              <div className="contact-item">
                <LinkOutlined />
                <span>
                  <a href="https://github.com/Anturiasgit" target="_blank" rel="noopener noreferrer">Découvrez mes projets sur mon GitHub</a>
                </span>
              </div>
            </div>

            <div className="skills section">
              <h2>Compétences</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem doloremque perspiciatis doloribus ullam tenetur a consequatur accusamus aut. Unde qui itaque odit excepturi et repellat architecto nobis nisi sequi dolor!</p>
              <div className="skills-list">
                <div className="skill-item">
                  <span>PHP & Symfony 5</span>
                  <div className="full">
                    <div className="percent first"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Javascript - React js</span>
                  <div className="full">
                    <div className="percent second"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>HTML, CSS, Bootstrap</span>
                  <div className="full">
                    <div className="percent third"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>SQL</span>
                  <div className="full">
                    <div className="percent fourth"></div>
                  </div>
                </div>
              </div>
              <Button type="link" icon={<LinkOutlined />}>En savoir plus sur mon GitHub</Button>
            </div>

            <div className="section">
              <h2>Témoignages</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus quaerat beatae. Iure hic, minus molestiae vitae ad aperiam architecto adipisci aliquid tempora dignissimos veniam nihil fugiat, qui harum magnam?
              </p>
              <Button type="link" icon={<LinkOutlined />}>En savoir plus sur LinkedIn</Button>
            </div>

            <div className="section">
              <h2>Education</h2>
              {educations.map((item) => {
                return (<div className="education-item">
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                </div>);
              })}
            </div>

            <div className="section">
              <h2>Langues</h2>
              <div className="language-item">
                <h3>Français</h3>
                <span>Langue maternelle</span>
                <div className="full">
                  <div className="percent french"></div>
                </div>
              </div>
              <div className="language-item">
                <h3>Anglais</h3>
                <span>Compétences professionnelles</span>
                <div className="full">
                  <div className="percent fourth"></div>
                </div>
              </div>
              <div className="language-item">
                <h3>Espagnol</h3>
                <span>Notions</span>
                <div className="full">
                  <div className="percent spanish"></div>
                </div>
              </div>
            </div>
          </aside>
        </div>

      </div>
    </>
  );
}

export default App;
