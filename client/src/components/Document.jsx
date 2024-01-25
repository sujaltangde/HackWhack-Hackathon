import React, { useState } from "react";

export const Document = () => {
  const [document, setDocument] = useState({});



  const handleSubmit = (e) => {
    e.preventDefault() ;
    console.log(document)
  }

  const documentFileChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setDocument({
        ...document,
        documentFile: reader.result,
      });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <div className="mt-8 pl-12">
        <div className="text-2xl font-semibold mb-4 ">
          Upload your Centralized Scholarship Certificate Document
        </div>

        <div className="flex items-center space-x-4">
          <form onSubmit={handleSubmit} action="">
            <input
              className="border p-2"
              onChange={documentFileChange}
              type="file"
              id="doc"
              name="doc"
              accept="application/pdf"
            />

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
