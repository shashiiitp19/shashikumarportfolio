import classes from "./Publication.module.css";

const Publication = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const PublicationHandler = (event) => {
    event.preventDefault();
    openInNewTab(
      "https://link.springer.com/chapter/10.1007/978-3-031-11349-9_14"
    );
  };

  return (
    <div className={classes.row}>
      <div className={classes.column1}>
        <h1>Publication</h1>
        <p>
          Published a research paper entitles 'Attention Based Deep Autoencoder
          for Hyperspectral Image Denoising'. This research based work deals
          with denoising of HSI images from various applications like
          Agriculture, Food Processing and object detection with deep learning
          techniques and analysis of different noises including Gaussian and
          Impulse noise and their impact on denoising.
        </p>
      </div>
      <div className={classes.column2}>
        <button onClick={PublicationHandler}>View Publication</button>
      </div>
    </div>
  );
};

export default Publication;
