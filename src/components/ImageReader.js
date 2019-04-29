import React, { Component } from 'react';

import ImageLoading from './ImageLoading';
import Jimp from 'jimp';

/*
** @defaultColor
**/
const defaultColor = "#ced4da",
  activeColor = "#009688",
  errorColor = "#dc3545";
const imgHeight = "100px";

/*
** @defaultBoder
**/
const defaultBorder = `2px dashed ${defaultColor}`,
  activeBorder = `2px solid ${activeColor}`,
  errorBorder = `2px dashed ${errorColor}`;

/*
** @uploadBoxStyle: style for uploader wrapper
**/
const UploadBoxStyle = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  width: 'auto',
  height: '124px',
  color: 'black',
  border: defaultBorder,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative'
};

/*
** @imgStyle: style for image after lodaing
**/
const imgStyle = {
  width: "auto !important",
  height: imgHeight,
  zIndex: '10'
};

/*
** @cropStyle: style for crop area
**/
const cropCoverStyle = {
  width: "100%",
  height: imgHeight,
  position: "absolute",
  top: "0",
  left: "0",
  overflow: "hidden"
}

const cropAreaStyle = {
  width: imgHeight,
  height: imgHeight,
  zIndex: "110",
  cursor: "pointer",
  position: "absolute",
  top: "0",
  left: "50%",
  transform: "translate(-50%, 0)",
  background: "transparent",
  boxShadow: "0 0 2000px 2000px rgba(0, 0, 0, .8)"
}

/*
** @inputFileStyle: style for input[type=file]
**/
const inputFileStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  width: '100%',
  zIndex: '100',
  opacity: '0'
}

/*
** @acceptedType: supported types
**/
const acceptedType = ['image/png', 'image/jpg', 'image/jpeg'];

class ImageReader extends Component {

  state = {
    msg: {
      content: 'Nhấp hoặc kéo hình ảnh thả vào ô phía trên!',
      textColor: activeColor
    },
    crop: false,
  }

  box = React.createRef();
  fileLoader = React.createRef();

  componentDidMount() {
    setTimeout(function () {
      $(document).ready(function () {
        /*
        ** @block: event from document
        **/
        $(document).on('dragenter', function (e) {
          e.stopPropagation();
          e.preventDefault();
        });
        $(document).on('dragover', function (e) {
          e.stopPropagation();
          e.preventDefault();
        });
        $(document).on('drop', function (e) {
          e.stopPropagation();
          e.preventDefault();
        });
      });
    }, 500);
  }

  render() {
    return (
      <React.Fragment>
        <div className="img-box">
          <div
            ref={this.box}
            onDrop={this.onDrop}
            onDragEnter={this.onDragEnter}
            onDragLeave={this.onDragLeave}
            onDragOver={this.onDragOver}
            style={UploadBoxStyle}
          >
            <div className="img-container" style={{ position: "relative" }}>
              {this.state.loading && <ImageLoading />}
              {!this.state.loading && <img className="img" src={this.props.defaultValue} style={imgStyle} alt='' />}
              {
                this.state.crop &&
                <div className="crop-cover" style={cropCoverStyle}>
                  <div className="crop-area" style={cropAreaStyle}></div>
                </div>
              }
            </div>
            <input onChange={this.changeInputFile} ref={this.fileLoader} style={inputFileStyle} type="file" accept="image/*" />
          </div>
          <div style={{ textAlign: 'center', color: this.state.msg.textColor }}><small>{this.state.msg.content}</small></div>
        </div>
        {
          this.state.crop &&
          <div className="text-center mt-2">
            <button onClick={() => this.onCrop(this.newImage)} className="btn btn-sm btn-success"><i className="fa fa-crop fa-fw"></i>Crop</button>
          </div>
        }
      </React.Fragment>
    );
  }

  onDrop = (e) => {
    let { files } = e.dataTransfer;

    /*
    ** @check: accepted image type
    **/
    this.upload(files);
    this.setState({ crop: true });
  }

  onDragEnter = () => {
    this.box.current.style.border = activeBorder;
  }

  onDragLeave = () => {
    this.box.current.style.border = defaultBorder;
  }

  onDragOver = () => {
    this.box.current.style.border = activeBorder;
  }

  changeInputFile = () => {
    this.upload(this.fileLoader.current.files);
    this.setState({ crop: true });
  }

  onCrop = (originImage) => {
    Jimp.read(originImage, (error, image) => {
      if (error) {
        this.props.action.changeLogo(originImage);
      } else {
        image.resize(Jimp.AUTO, 400);
        if (image._exif) {
          const { imageSize } = image._exif,
            cropStart = (imageSize.width / (imageSize.height / 400) - 400) / 2;
          image.crop(cropStart, 0, 400, 400);
        }
        image.getBase64(Jimp.MIME_PNG, (error, newImage) => {
          newImage = error ? originImage : newImage;
          this.props.action.changeLogo(newImage);
        });
        
        this.setState({ crop: false });
      }
    });
  }

  upload = (files) => {
    if (files.length > 0) {
      let fileReader = new FileReader();
      if (files[0].type.match(/^image\//g)) {
        fileReader.readAsDataURL(files[0]);
        fileReader.onload = _file => {

          // this.setState({ loading: true });
          this.setState({ msg: { content: 'Nhấp hoặc kéo hình ảnh thả vào ô phía trên!', textColor: activeColor } }, () => {
            this.box.current.style.border = defaultBorder;
            this.newImage = _file.target.result;

            this.props.action.changeLogo(_file.target.result);
          });
          // this.setState({ loading: false });
        }
      } else {
        this.box.current.style.border = errorBorder;
        this.setState({ msg: { content: 'Chỉ chấp nhận hình ảnh', textColor: errorColor } })
      }
    }
  }
}

export default ImageReader;