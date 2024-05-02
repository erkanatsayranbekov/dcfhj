import React from "react";
import ActionStyled from "./Action.styled";
import { Link } from "react-router-dom";

function Action({ action, nextAction, width }) {
  return (
    <ActionStyled>
      <div className="action">
        <div>
          <button
            style={{ paddingLeft: width, paddingRight: width }}
            type="submit"
            id={`${action}`}
          >
            <Link to={"/trades"} style={{ color: "white" }}>
              {action}
            </Link>
          </button>
        </div>

        <div className="action__info">
          <p style={{ fontFamily: "Montserrat", fontWeight: "500" }}>
            {action == "REGISTRATION" ? (
              <> Do you have an account? </>
            ) : (
              <>Do you not have an account? </>
            )}
            <Link to={`/${nextAction}`}>
              <span>{nextAction}</span>
            </Link>
          </p>
        </div>
      </div>
    </ActionStyled>
  );
}

export default Action;
