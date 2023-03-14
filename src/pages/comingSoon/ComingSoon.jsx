import React from "react";
import "./ComingSoon.css";
import {
  DiCss3,
  DiGit,
  DiGithubBadge,
  DiHtml5,
  DiJsBadge,
  DiMongodb,
  DiNodejsSmall,
  DiReact,
  DiWordpress,
} from "react-icons/di";

import harshitclubWhite from "../../assets/harshitclub white.svg";

const ComingSoon = () => {
  return (
    <>
      <div className="comingSoon">
        <div className="comingSoonContent">
          <img src={harshitclubWhite} />

          <h1>Coming Soon...</h1>
          <h2>Harshit Kumar Full Stack Web Developer</h2>
          <p>
            <DiHtml5 className="csIcons" />
            HTML5 | <DiCss3 className="csIcons" />
            CSS3 | SCSS | <DiJsBadge className="csIcons" /> JavaScript(ES6) |{" "}
            <DiReact className="csIcons" />
            React.js | Next.js | <DiNodejsSmall className="csIcons" />
            Node.js | Express.js |
            <DiMongodb className="csIcons" />
            MongoDB | <DiGit className="csIcons" />
            Git & <DiGithubBadge className="csIcons" />
            Github |
            <DiWordpress className="csIcons" />
            CMS(WordPress) | On-Page SEO
          </p>
          <h4>
            Contact:{" "}
            <a href="mailto:harshitclub@gmail.com">harshitclub@gmail.com</a>
          </h4>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;