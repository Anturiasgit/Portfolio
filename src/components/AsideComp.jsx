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
          <p>Autonome, curieuse et organisée, j’aime résoudre des problèmes et collaborer en équipe. Positive et proactive, je suis prête à apprendre rapidement et à apporter une contribution efficace.</p>
          <div className="skills-list">
            <div className="skill-item">
              <span>PHP & Symfony</span>
              <div className="full">
                <div className="percent first"></div>
              </div>
            </div>
            <div className="skill-item">
              <span>Javascript & React js</span>
              <div className="full">
                <div className="percent second"></div>
              </div>
            </div>
            <div className="skill-item">
              <span>HTML, CSS, Bootstrap</span>
              <div className="full">
                <div className="percent second"></div>
              </div>
            </div>
            <div className="skill-item">
              <span>SQL</span>
              <div className="full">
                <div className="percent fourth"></div>
              </div>
            </div>
            <div className="skill-item">
              <span>Linux & Git</span>
              <div className="full">
                <div className="percent first"></div>
              </div>
            </div>
            <div className="skill-item">
              <span>Agile & Scrum</span>
              <div className="full">
                <div className="percent first"></div>
              </div>
            </div>
          </div>     
          <Button type="link" icon={<LinkOutlined />}>
          <a href="https://github.com/Anturiasgit/Portfolio" target="_blank"> Voir mes projets sur mon GitHub</a>
          </Button>
        </div>

        <div className="section education">
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