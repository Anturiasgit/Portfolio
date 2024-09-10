import React from 'react'
import {  LinkOutlined } from "@ant-design/icons";
import { educations } from '../data/data';
import { Button } from 'antd';


export const AsideComp = () => {
  return (
    <>
      <aside>
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
            return (<div className="education-item" key={item.id}>
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
    </>
  )
}