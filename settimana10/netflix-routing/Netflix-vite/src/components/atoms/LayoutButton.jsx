const LayoutButton = () => {
    return (
        <div className="me-5">
        <div
          className="btn-group mt-2"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className="btn bottoneSmall btn-dark border-secondary"
          >
            <img src="src/assets/bars-solid.svg" alt="bars icon" />
          </button>
          <button
            type="button"
            className="btn bottoneSmall btn-dark border-secondary"
          >
            <img src="src/assets/grip-solid.svg" alt="grid icon" />
          </button>
        </div>
      </div>
    )
}

export default LayoutButton