import React from "react";


class ContactCard extends React.Component {
    render(){
      const {id, name, email, phone} = this.props.contact;
        return (
          <div className="col-xl-6 col-md-6">
            <div className="card overflow-hidden">
              <div className="card-content">
                <div className="card-body cleartfix">
                  <div className="media align-items-stretch">
                    <div className="align-self-center">
                      <img
                        className="mr-2"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"
                        width="50"
                        height="50"
                        style={{ display: "inline" }}
                        alt="profile img"
                      />
                    </div>
                    <div className="media-body">
                      <h5>{name}</h5>
                      <span>{email}</span>
                    </div>
                    <div>
                      <a href="#">
                        <span
                          className="fas fa-trash-alt"
                          style={{
                            color: "red",
                            position: "relative",
                            top: "-14px",
                            left: "120px",
                          }}
                        ></span>
                      </a>
                    </div>
                    <div className="align-self-center mt-3">
                      <h5>{phone}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default ContactCard;