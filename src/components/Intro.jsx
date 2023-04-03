import React from "react";
import { Form } from "react-router-dom";

import { UserPlusIcon } from "@heroicons/react/24/solid";

//assets
import illustration from "../assets/illustration.jpg"

export default function Intro() {
  return (
    <div className="intro">
      <div>
        <h1>
          Take control of <span className="accent">Your Money</span>
        </h1>
        <p>personal budgeting starts</p>
        {/* if action not defined submit on that page itself */}
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="whats your name?"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="prson with money" width={600}/>
    </div>
  );
}
