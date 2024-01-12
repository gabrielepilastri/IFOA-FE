import Dropdown from "react-bootstrap/Dropdown";

function DropButton() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="black"
        className="text-light"
        id="dropdown-basic"
      >
        <img src="src/assets/avatar.png" alt="avatar logo" height="45" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-end">
        <Dropdown.Item className="fw-bold" href="#/action-1">
          Profile
        </Dropdown.Item>
        <Dropdown.Item className="fw-bold" href="#/action-2">
          Settings
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          <img
            className="me-2"
            height="40"
            src="../src/assets/kids_icon.png"
            alt="kids icon"
          />

          <small className="fw-bold">Kids</small>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropButton;
