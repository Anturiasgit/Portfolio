import "./App.css";
import HeaderComp from "./components/HeaderComp";

function App() {
  return (
    <>
      <div className='main'>
        <HeaderComp />
        <div className="body-container">
          <div className="left">
          <section className="about">
              <article>
                <h2>A propos de moi</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem animi nulla tenetur, dolor error commodi veniam rerum accusamus reprehenderit cupiditate dicta quos cumque magnam quasi non ducimus. Optio, unde vero.
                  Iure delectus et tenetur assumenda eligendi, nobis doloremque voluptas dignissimos officiis qui consequuntur labore ab ipsum ea molestias obcaecati praesentium est pariatur, laborum ad. In sit amet et culpa aperiam. </p>
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
