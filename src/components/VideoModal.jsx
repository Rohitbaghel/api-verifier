import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import {ModalContext} from "./useModalContext";

Modal.setAppElement("#root");

function VideoModal() {
  const [videos, setVideos] = useState([]);
  const { toggleModalValue, modalValue } = useContext(ModalContext);

  useEffect(() => {
    axios
      .post(
        "http://97.74.94.225:8282/besstMainApi/df/videoSection",
        {},
        {
          headers: {
            Client_ID: "your_client_id_here",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setVideos(response.data.Data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Modal
      isOpen={modalValue}
      onRequestClose={modalValue}
      contentLabel="Video Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="flex justify-center">
        <div className="w-full">
          <div className="flex flex-wrap">
            {videos.map((video, index) => (
              <div key={index} className="w-1/3 p-2">
                <video controls className="w-full h-auto">
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded transition duration-300 ease-in-out my-4 "
        onClick={() => toggleModalValue()}
      >
        Close Modal
      </button>
    </Modal>
  );
}

export default VideoModal;
