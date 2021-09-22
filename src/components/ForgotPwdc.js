import React, { Component } from "react";

export default class ForgotPwdc extends Component {
    render() {
        return (
            <div class="general">
            <form>
                <h3>Reset Customer Password</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Enter Customer Email" />
                </div>
                <div className="form-group">
                    <label>New Password</label>
                    <input type="password" className="form-control" placeholder="Enter New password" />
                </div>
                <div className="form-group">
                    <label>Retype Password</label>
                    <input type="password" className="form-control" placeholder="Retype password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Reset</button>
            </form>
            </div>
        );
    }
}
