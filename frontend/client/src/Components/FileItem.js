import React from "react";

const FileItem = ({ file }) => {
  return (
    <div className="flexes files">
      <div>
        <p> {file}</p>
      </div>
      <div>
        <p> https://localhost:5000/files/9f5d9544-5dd2-4ade-9527-92858fda5200</p>
      </div>
      <div>
        <p> #</p>
      </div>
      <div>
        <p> aeb64554f529482feb9027791fd860956b58e67a59cfecfeb951de381193b33a</p>
      </div>
    </div>
  );
};

export default FileItem;
