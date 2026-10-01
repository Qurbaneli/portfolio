import React from "react";
import html5 from "../assets/skills/html.svg";
import ccss from "../assets/skills/css.svg";
import js from "../assets/skills/js.svg";
import react from "../assets/skills/react.svg";
import ant from "../assets/skills/ant.svg";

import typescript from "../assets/skills/typescript.svg";
import github from "../assets/skills/github.svg";
import gitlab from "../assets/skills/gitlab.svg";

import jquery from "../assets/skills/jquery.svg";
import vue from "../assets/skills/vue.svg";
import nuxt from "../assets/skills/nuxt.svg";
import next from "../assets/skills/next.svg";

import material from "../assets/skills/material.svg";
import bootstrap from "../assets/skills/bootstrap.svg";
import tailwind from "../assets/skills/tailwind.svg";
import cpanel from "../assets/skills/cpanel.svg";

import figma from "../assets/skills/figma.svg";
import wordpress from "../assets/skills/wordpress.svg";

import sass from "../assets/skills/sass.svg";
import redux from "../assets/skills/redux.svg";

import reactrouter from "../assets/skills/reactrouter.svg";

const groups = [
  {
    title: "Core",
    items: [
      { title: "HTML5", img: html5 },
      { title: "CSS3", img: ccss },
      { title: "JavaScript", img: js },
      { title: "TypeScript", img: typescript },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { title: "React", img: react },
      { title: "Next.js", img: next },
      { title: "Vue.js", img: vue },
      { title: "Nuxt.js", img: nuxt },
      { title: "jQuery", img: jquery },
    ],
  },
  {
    title: "Libraries",
    items: [
      { title: "Redux", img: redux },
      { title: "React router", img: reactrouter },
    ],
  },
  {
    title: "Styling",
    items: [
      { title: "Sass", img: sass },
      { title: "Tailwind", img: tailwind },
      { title: "Bootstrap", img: bootstrap },
      { title: "Material UI", img: material },
      { title: "Ant Design", img: ant },
    ],
  },
  {
    title: "Tools",
    items: [
      { title: "Github", img: github },
      { title: "Gitlab", img: gitlab },
      { title: "Figma", img: figma },
      { title: "Wordpress", img: wordpress },
      { title: "Cpanel", img: cpanel },
    ],
  },
];

function Skills() {
  return (
    <div>
      {groups.map((group) => (
        <div className="group" key={group.title}>
          <h3>
            {group.title} <em>{group.items.length}</em>
          </h3>
          <div className="skills">
            {group.items.map((item) => (
              <div className="sk" key={item.title}>
                <span className="sk-icon">
                  <img src={item.img} alt="" />
                </span>
                {item.title}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;