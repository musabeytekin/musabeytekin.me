import React from "react";
import "./panel.css";
import { BiEnvelope } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { BiMessageAltCheck } from "react-icons/bi";
import { AiFillShopping } from "react-icons/ai";
import userImg from "./johndoe.jpeg";
import StatusBadge from "./StatusBadge";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-3">
          <div className="content-card card-info">
            <BiEnvelope className="img-card img-card-message" />
            <div className="d-flex flex-column gap-2">
              <span>9,1923</span>
              <span>New Messages</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="content-card card-info">
            <FaUsers className="img-card img-card-users" />
            <div className="d-flex flex-column gap-2">
              <span>120</span>
              <span>Visitors</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="content-card card-info">
            <BiMessageAltCheck className="img-card img-card-total-messages" />
            <div className="d-flex flex-column gap-2">
              <span>92.758</span>
              <span>Total Messages</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="content-card card-info">
            <AiFillShopping className="img-card img-card-orders" />
            <div className="d-flex flex-column gap-2">
              <span>50</span>
              <span>Orders</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="d-flex">
          <div className="content-card card-info">
            <BiEnvelope className="img-card img-card-message" />
            <div className="d-flex flex-column gap-2">
              <span>9,1923</span>
              <span>New Messages</span>
            </div>
          </div>
          <div className="content-card card-info">
            <FaUsers className="img-card img-card-users" />
            <div className="d-flex flex-column gap-2">
              <span>120</span>
              <span>Visitors</span>
            </div>
          </div>
          <div className="content-card card-info">
            <BiMessageAltCheck className="img-card img-card-total-messages" />
            <div className="d-flex flex-column gap-2">
              <span>92.758</span>
              <span>Total Messages</span>
            </div>
          </div>
          <div className="content-card card-info">
            <AiFillShopping className="img-card img-card-orders" />
            <div className="d-flex flex-column gap-2">
              <span>50</span>
              <span>Orders</span>
            </div>
          </div>
        </div> */}

      <table className="messages-table content-card">
        <thead>
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name">
              <img src={userImg} alt="" className="user-img" />
              <div>
                <div>John Doe</div>
                <div>johndoe@gmail.com</div>
              </div>
            </td>
            <td className="message-title">Message Title</td>
            <td>
              <StatusBadge status={"Not Answered"} />
            </td>
            <td className="view">
              <Link to={"/admin/panel/message"} className="btn-view">View</Link>
            </td>
          </tr>
          <tr>
            <td className="name">
              <img src={userImg} alt="" className="user-img" />
              <div>
                <div>John Doe</div>
                <div>johndoe@gmail.com</div>
              </div>
            </td>
            <td className="message-title">Message Title</td>
            <td>
              <StatusBadge status={"answered"} />
            </td>
            <td className="view">
              <Link to={"/admin/panel/message"} className="btn-view">View</Link>
            </td>
          </tr>
          <tr>
            <td className="name">
              <img src={userImg} alt="" className="user-img" />
              <div>
                <div>John Doe</div>
                <div>johndoe@gmail.com</div>
              </div>
            </td>
            <td className="message-title">Message Title</td>
            <td>
              <StatusBadge status={"answered"} />
            </td>
            <td className="view">
              <Link to={"/admin/panel/message"} className="btn-view">View</Link>
            </td>
          </tr>
          <tr>
            <td className="name">
              <img src={userImg} alt="" className="user-img" />
              <div>
                <div>John Doe</div>
                <div>johndoe@gmail.com</div>
              </div>
            </td>
            <td className="message-title">Message Title</td>
            <td>
              <StatusBadge status={"Not Answered"} />
            </td>
            <td className="view">
              <Link className="btn-view">View</Link>
            </td>
          </tr>
          <tr>
            <td className="name">
              <img src={userImg} alt="" className="user-img" />
              <div>
                <div>John Doe</div>
                <div>johndoe@gmail.com</div>
              </div>
            </td>
            <td className="message-title">Message Title</td>
            <td>
              <StatusBadge status={"answered"} />
            </td>
            <td className="view">
              <Link to={"/admin/panel/message"} className="btn-view">View</Link>
            </td>
          </tr>
          <tr>
            <td className="name">
              <img src={userImg} alt="" className="user-img" />
              <div>
                <div>John Doe</div>
                <div>johndoe@gmail.com</div>
              </div>
            </td>
            <td className="message-title">Message Title</td>
            <td>
              <StatusBadge status={"Not Answered"} />
            </td>
            <td className="view">
              <Link to={"/admin/panel/message"} className="btn-view">View</Link>
            </td>
          </tr>
          <tr>
            <td className="name">
              <img src={userImg} alt="" className="user-img" />
              <div>
                <div>John Doe</div>
                <div>johndoe@gmail.com</div>
              </div>
            </td>
            <td className="message-title">Message Title</td>
            <td>
              <StatusBadge status={"answered"} />
            </td>
            <td className="view">
              <Link to={"/admin/panel/message"} className="btn-view">View</Link>
            </td>
          </tr>
          <tr>
            <td className="name">
              <img src={userImg} alt="" className="user-img" />
              <div>
                <div>John Doe</div>
                <div>johndoe@gmail.com</div>
              </div>
            </td>
            <td className="message-title">Message Title</td>
            <td>
              <StatusBadge status={"Not Answered"} />
            </td>
            <td className="view">
              <Link to={"/admin/panel/message"} className="btn-view">View</Link>
            </td>
          </tr>
          <tr>
            <td className="name">
              <img src={userImg} alt="" className="user-img" />
              <div>
                <div>John Doe</div>
                <div>johndoe@gmail.com</div>
              </div>
            </td>
            <td className="message-title">Message Title</td>
            <td>
              <StatusBadge status={"Not Answered"} />
            </td>
            <td className="view">
              <Link to={"/admin/panel/message"} className="btn-view">View</Link>
            </td>
          </tr>
          <tr>
            <td className="name">
              <img src={userImg} alt="" className="user-img" />
              <div>
                <div>John Doe</div>
                <div>johndoe@gmail.com</div>
              </div>
            </td>
            <td className="message-title">Message Title</td>
            <td>
              <StatusBadge status={"Not Answered"} />
            </td>
            <td className="view">
              <Link to={"/admin/panel/message"} className="btn-view">View</Link>
            </td>
          </tr>
          <tr>
            <td className="name">
              <img src={userImg} alt="" className="user-img" />
              <div>
                <div>John Doe</div>
                <div>johndoe@gmail.com</div>
              </div>
            </td>
            <td className="message-title">Message Title</td>
            <td>
              <StatusBadge status={"Not Answered"} />
            </td>
            <td className="view">
              <Link to={"/admin/panel/message"} className="btn-view">View</Link>
            </td>
          </tr>
          <tr>
            <td className="name">
              <img src={userImg} alt="" className="user-img" />
              <div>
                <div>John Doe</div>
                <div>johndoe@gmail.com</div>
              </div>
            </td>
            <td className="message-title">Message Title</td>
            <td>
              <StatusBadge status={"Not Answered"} />
            </td>
            <td className="view">
              <Link to={"/admin/panel/message"} className="btn-view">View</Link>
            </td>
          </tr>
          <tr>
            <td className="name">
              <img src={userImg} alt="" className="user-img" />
              <div>
                <div>John Doe</div>
                <div>johndoe@gmail.com</div>
              </div>
            </td>
            <td className="message-title">Message Title</td>
            <td>
              <StatusBadge status={"Not Answered"} />
            </td>
            <td className="view">
              <Link to={"/admin/panel/message"} className="btn-view">View</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Dashboard;
