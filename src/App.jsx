import { LikeOutlined } from "@ant-design/icons";
import "./App.css";
import HeaderComp from "./components/HeaderComp";
import { Button } from "antd";

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
            </section>
          </div>

          <div className="right">

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
