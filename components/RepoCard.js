import { useState, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import { selectText, getLangLogo } from "../utils/helpers";

import { Card, CardTitle, CardBody, CardActions } from "../library/Card";

export default function RepoCard({ name, url, clone_url, lang, description }) {
  return (
    <Card>
      <CardTitle>
        <RepoTitle logo={getLangLogo(lang)} title={name} url={url} />
      </CardTitle>
      <CardBody>{description}</CardBody>
      <CardActions>
        <RepoActions clone_url={clone_url} />
      </CardActions>
    </Card>
  );
}

function RepoTitle({ logo, title, url }) {
  return (
    <>
      <div className="flex items-center">
        {logo ? (
          <Image
            className="rounded-sm"
            src={logo}
            width={21}
            height={21}
            layout="fixed"
          />
        ) : (
          <FontAwesomeIcon icon={faGithub} />
        )}
        <span className="font-medium text-sm ml-2">{title}</span>
      </div>
      <a href={url} target="_blank">
        <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
      </a>
    </>
  );
}

function RepoActions({ clone_url }) {
  const [visibility, setVisibility] = useState("invisible");
  const urlSpanRef = useRef();

  return (
    <button
      className="flex flex-row-reverse items-end flex-auto px-2 pb-2 w-full"
      onClick={() =>
        selectText(urlSpanRef.current).then(() => setVisibility("clicked"))
      }
      onMouseEnter={() => {
        setVisibility("visible");
      }}
      onMouseLeave={() => setVisibility("invisible")}
    >
      <div>
        <FontAwesomeIcon
          icon={faGitAlt}
          size="lg"
          className={clsx({
            "text-purple-900": visibility === "invisible",
            "dark:text-yellow-100": visibility === "invisible",
            "text-purple-700": visibility !== "invisible",
            "dark:text-yellow-200": visibility !== "invisible"
          })}
        />
        <span
          ref={urlSpanRef}
          className={clsx(
            {
              invisible: visibility === "invisible",
              visible: visibility === "visible",
              "text-right text-purple-700 dark:text-yellow-200":
                visibility === "clicked",
              "bg-blue-100 dark:bg-gray-700": ["visible", "invisible"].includes(
                visibility
              )
            },
            "text-xs truncate",
            "absolute -ml-64 mt-0.5",
            "w-56 px-2 py-0.5",
            "rounded-md"
          )}
        >
          {visibility === "clicked" ? "copied!" : `git clone ${clone_url}`}
        </span>
      </div>
    </button>
  );
}
