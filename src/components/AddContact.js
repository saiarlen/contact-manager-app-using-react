import React from "react";


class AddContact extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="card">
                    <h5 className="card-header">Add Your Contact Here</h5>
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Your Name" />
                            </div>
                            <div className="col">
                                <input type="email" className="form-control" placeholder="Your Email" />
                            </div>
                            <div className="col">
                                <input type="tel" className="form-control" placeholder="Your Phone Number" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    };
}

export default AddContact;