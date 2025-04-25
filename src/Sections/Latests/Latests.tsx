"use client";
import React, { useState, useEffect } from "react";
import "../styles/Latests.css";
import ImageText from "@/Components/ImageText";
import ImageModal from "@/Components/ImageModal";

const Latests: React.FC = () => {
  // Definir el estado para mostrar el modal y la imagen a mostrar
  const [showModal, setShowModal] = useState(false);
  const [pictureToShow, setPictureToShow] = useState<string>("");

  // Manejar el clic en las imágenes
  const handleImageClick = (src: string) => {
    setPictureToShow(src); // Establecer la imagen a mostrar
    setShowModal(true); // Mostrar el modal
  };

  useEffect(() => {
    if (showModal) {
      // Bloquear el scroll
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll
    } else {
      // Restaurar el scroll
      document.body.style.overflow = "auto"; // Volver a habilitar el scroll
    }

    // Limpiar al desmontar el componente
    return () => {
      document.body.style.overflow = "auto"; // Asegurarse de que el scroll se restaure
    };
  }, [showModal]); // Efecto cuando el modal cambia de estado

  return (
    <section id="section-latests">
      <ImageModal
        showModal={showModal}
        picture={pictureToShow}
        onClose={() => setShowModal(false)}
      />

      <h2>Some of my latest shots</h2>
      <div className="images-content" id="images-content-2">
        <div className="images-row images-row-1">
          <div
            className="images-content-2-image-container"
            onClick={() =>
              handleImageClick("/images/photographies/image_5.png")
            }
          >
            <ImageText
              title="The Yellow Steps – South Bank"
              text="A vibrant staircase that leads London's urban art towards the Thames."
            />
            <img src="/images/photographies/image_5.png" />
          </div>
          <div
            className="flex-grow-1 images-content-2-image-container"
            onClick={() =>
              handleImageClick("/images/photographies/image_6.png")
            }
          >
            <ImageText
              title="This Must Be The Place – Neon Dreams"
              text="A flickering neon promise, illuminating the night with a sense of belonging and wonder."
            />
            <img src="/images/photographies/image_6.png" />
          </div>
          <div
            className="images-content-2-image-container"
            onClick={() =>
              handleImageClick("/images/photographies/image_7.png")
            }
          >
            <ImageText
              title="Timeless Facade – Monochrome Elegance"
              text="A striking architectural silhouette, where shadows and light dance in perfect harmony, frozen in black and white."
            />
            <img src="/images/photographies/image_7.png" />
          </div>
        </div>
        <div className="images-row images-row-2">
          <div
            className="images-content-2-image-container"
            onClick={() =>
              handleImageClick("/images/photographies/image_8.png")
            }
          >
            <ImageText
              title="Silent Streets – The Rhythm of the City"
              text="Three figures move through the stillness, their presence a quiet symphony in the urban landscape, captured in shades of black and white."
            />
            <img src="/images/photographies/image_8.png" />
          </div>
          <div
            className="flex-grow-1 images-content-2-image-container"
            onClick={() =>
              handleImageClick("/images/photographies/image_9.png")
            }
          >
            <ImageText
              title="Concrete Giants – Urban Monuments"
              text="A cityscape in shades of grey, where towering buildings stand as silent witnesses to the passage of time and the pulse of the streets below."
            />
            <img src="/images/photographies/image_9.png" />
          </div>
          <div
            className="images-content-2-image-container"
            onClick={() =>
              handleImageClick("/images/photographies/image_13.png")
            }
          >
            <ImageText
              title="Crosswalk – Between Worlds"
              text="A fleeting moment of transition, where footsteps bridge the gap between one side of the city and the other, captured in monochrome stillness."
            />
            <img src="/images/photographies/image_13.png" />
          </div>
          <div
            className="images-content-2-image-container"
            onClick={() =>
              handleImageClick("/images/photographies/image_10.png")
            }
          >
            <ImageText
              title="Urban Pulse – The Heart of the Crowd"
              text="A bustling street, alive with movement and energy, where the swarm of people blends into a chaotic yet captivating monochrome rhythm."
            />
            <img src="/images/photographies/image_10.png" />
          </div>
        </div>

        <div className="images-row images-row-3">
          <div
            className="images-content-2-image-container"
            onClick={() =>
              handleImageClick("/images/photographies/image_11.png")
            }
          >
            <ImageText
              title="Shadows of Elegance – A Silent Presence"
              text="A woman in a hat, her silhouette dancing on the ground, casting a mysterious shadow that echoes her quiet grace in the light."
            />
            <img src="/images/photographies/image_11.png" />
          </div>
          <div
            className="flex-grow-1 images-content-2-image-container"
            onClick={() =>
              handleImageClick("/images/photographies/image_12.png")
            }
          >
            <ImageText
              title="Solitary Walk – Beneath the Storm"
              text="A lone figure braves the elements, the wind tugging at his umbrella as raindrops blur the world around him in a dance of shadows and light."
            />
            <img src="/images/photographies/Image_12.png" />
          </div>

          <div
            className="images-content-2-image-container"
            onClick={() =>
              handleImageClick("/images/photographies/image_14.png")
            }
          >
            <ImageText
              title="Climbing to the Surface"
              text="A journey upwards, where the metal steps lead to the light, a path that connects the underground world to the city above."
            />
            <img src="/images/photographies/image_14.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latests;
