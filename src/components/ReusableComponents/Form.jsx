import React from 'react'
import { StyledForm } from '../StyledComponents/form'

function Form() {
  return (
    <StyledForm>
      <div className="formContainer">
        <div className="formCard">
          <div className="header">
            <h2>SCHEDULE A DEMO</h2>
            <p>Learn More About FloQast</p>
          </div>
        </div>

        <div className="formCard">
          {' '}
          <h4 className="pt-3 fw-bold">
            {' '}
            <span style={{ color: '#828282' }}>Learn How FloQast </span>
            <span style={{ color: '#7fb864' }}>
              {' '}
              Improve your Mont-End
            </span>{' '}
          </h4>
          <div class="row g-3 align-items-center container">
            <div class="col-auto ">
              <input
                type="text"
                id="inputPassword6"
                class="form-control"
                aria-describedby="passwordHelpInline"
                placeholder="Firstname*"
              />
            </div>
            <div class="col-auto">
              <input
                type="email"
                id="inputPassword6"
                class="form-control"
                aria-describedby="passwordHelpInline"
                placeholder="Email*"
              />
            </div>
            <div class="col-auto">
              <button type="button" className="form-control">
                SCHEDULE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </StyledForm>
  )
}

export default Form
