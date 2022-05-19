import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcontact, updatecontact } from "../../actions/contactAction";

// import shortid from "shortid";
import { useHistory, useParams } from "react-router-dom";

const EditContact = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setEmail(contact.email);
      setPhone(contact.phone);
    }
    dispatch(getcontact(id));
  }, [contact]);

  const onUpdateContact = (e) => {
    e.preventDefault();

    const update_contact = Object.assign(contact, {
      name: name,
      phone: phone,
      email: email,
    });
    dispatch(updatecontact(update_contact));
    history.push("/");
  };

  return (
    <div className="card border-0m  shadow">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-warning" type="submit">
            Udate Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
