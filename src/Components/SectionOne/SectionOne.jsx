import React from "react";

const SectionOne = () => {
  return (
    <div>
      <div className="md:flex justify-center items-center gap-5 m-20 bgcolor rounded-md">
        <div>
          <img
            src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="rounded-md"
          />
        </div>
        <div className="md:w-2/3 font text-white">
          <h1 className="text-xl md:text-5xl pt-2 fontcolor pl-6">
            Our Knowledge Box
          </h1>
          <p className="p-5 md:pt-6 font-medium md:font-bold fontcolor">
            Libraries play an essential role in local communities by providing
            access to information and resources, supporting literacy and
            education, promoting lifelong learning.
          </p>
          {/* <button onClick={window.print}>Download</button> */}
        </div>
      </div>
      <div className="md:flex justify-center items-center gap-5 m-20 bgcolor rounded-md">
        <div>
          <img
            src="https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="rounded-md"
          />
        </div>
        <div className="md:w-2/3 font text-white">
          <h1 className="text-xl md:text-5xl pt-2 fontcolor pl-6">
            Our Library Site
          </h1>
          <p className="p-5 md:pt-6 font-bold fontcolor">
            What is a Special Library? Special libraries, sometimes referred to
            as “information centers”, are libraries that provide specialized
            information resources on a particular subject, serve a specialized
            and limited clientele, and deliver specialized services to that
            clientele.
          </p>
          {/* <button onClick={window.print}>Download</button> */}
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
