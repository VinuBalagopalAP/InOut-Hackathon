import React, { useState } from "react";
import "./fp.css";
import Drag from "./drag";
import FileItem from "../FileItem";
export default function MainPage() {
  const [fileNames, setFileNames] = useState([]);

  return (
    <div className="logss">
      <p className="greens">HIDE YOURSELF WITH</p>
      <p className="heads">SHELL DROP</p>
      <p className="greens">AND PROTECT YOUR DATA</p>
      <div className="flexes">
        <div className="db">
          <Drag fileNames={fileNames} setFileNames={setFileNames}></Drag>
        </div>
        <div className="texts">
          <p>
          Shelldrop is designed to gaurd the integrety of a file. While a file is uploaded to our server we will hash the whole file and store it into database and user will be provided with an option to recheck the integrety whenever necessary. Keeping the file intact is one of our priority
          </p>{" "}
        </div>
      </div>
      <p className="greens">WE ENSURE YOU</p>
      <div className="flexes">
        <div className="db">
          <p className="texts1">Confidentiality</p>
        </div>
        <div className="db">
          <p className="texts1">Integrety</p>
        </div>
        <div className="db">
          <p className="texts1">Accesibility</p>
        </div>
      </div>
      <p className="greens">YOUR FILES</p>
      {fileNames.map((file) => (
        <FileItem file={file} />
      ))}
    </div>
  );
}
